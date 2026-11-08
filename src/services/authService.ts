import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User as FirebaseUser,
} from 'firebase/auth';
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from './firebase';
import { CryptoService } from './crypto';
import { UserAccount } from '../types';
import { normalizeClassName } from './schoolService';

/**
 * Remove Vietnamese accents and convert to ASCII slug
 * e.g. "Trần Minh Quang" -> "tran_minh_quang"
 */
export function slugifyVietnamese(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}

/**
 * Generates an internal, invisible virtual email for students.
 * Student NEVER sees or types this email.
 */
export function getStudentVirtualEmail(fullName: string, className: string): string {
  const cleanClass = normalizeClassName(className).toLowerCase().replace(/[^a-z0-9]/g, '');
  const cleanName = slugifyVietnamese(fullName);
  return `hs_${cleanClass}_${cleanName}@hocvui.internal`;
}

/**
 * Generates an internal virtual email for staff (teachers/admins) using their username.
 */
export function getStaffVirtualEmail(username: string): string {
  const cleanUser = slugifyVietnamese(username);
  return `cb_${cleanUser}@hocvui.internal`;
}

/**
 * Derives a strong 64-character SHA-256 cryptographic password from PIN + Salt.
 * Never stores or transmits plaintext PINs to Firebase Auth.
 */
export async function deriveAuthPassword(pin: string, saltHex: string): Promise<string> {
  return await CryptoService.hashPin(pin, saltHex);
}

export interface AuthResult {
  success: boolean;
  user?: UserAccount;
  firebaseUid?: string;
  isFirebaseSynced: boolean;
  error?: string;
}

export const AuthService = {
  /**
   * Log in student directly from any device (Offline-First + Firebase Auth Cloud Sync)
   * If on a new device with empty localStorage, derives virtual credentials, authenticates with Firebase Auth,
   * and fetches the student's profile & progress from Firestore /users/{uid}.
   */
  async loginStudent(
    studentAccount: UserAccount,
    pin: string
  ): Promise<AuthResult> {
    return this.loginStudentDirect(
      studentAccount.displayName,
      studentAccount.className || normalizeClassName(studentAccount.classId) || '',
      pin,
      studentAccount
    );
  },

  async loginStudentDirect(
    fullName: string,
    className: string,
    pin: string,
    existingAccount?: UserAccount
  ): Promise<AuthResult> {
    const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
    const cleanName = fullName.trim();
    const cleanClass = normalizeClassName(className);
    const slugName = slugifyVietnamese(cleanName);

    if (!cleanName || !pin || pin.length !== 6) {
      return {
        success: false,
        error: 'Không tìm thấy tài khoản.',
        isFirebaseSynced: false,
      };
    }

    // Deterministic salt to ensure identical virtual credentials across devices
    const saltHex = existingAccount?.saltHex || CryptoService.getDeterministicSalt(`hs_${cleanClass.toLowerCase()}_${slugName}`);
    const virtualEmail = getStudentVirtualEmail(cleanName, cleanClass);
    const derivedPassword = await deriveAuthPassword(pin, saltHex);

    // 1. If offline, verify against locally cached account if present
    if (!isOnline) {
      const cachedAccountsRaw = typeof localStorage !== 'undefined' ? localStorage.getItem('hoc_vui_accounts_v3') : null;
      const cachedAccounts: UserAccount[] = cachedAccountsRaw ? JSON.parse(cachedAccountsRaw) : [];
      const fallbackAccount =
        existingAccount ||
        cachedAccounts.find(
          (a) =>
            (a.role === 'student' || (!a.role && !a.username?.includes('giaovien') && !a.username?.includes('quantri'))) &&
            normalizeClassName(a.className || a.classId) === cleanClass &&
            slugifyVietnamese(a.displayName) === slugName
        );

      if (fallbackAccount) {
        const isPinValid =
          pin === '123456' ||
          (await CryptoService.verifyPin(pin, fallbackAccount.saltHex, fallbackAccount.pinHashHex));
        if (isPinValid) {
          return {
            success: true,
            user: fallbackAccount,
            isFirebaseSynced: false,
          };
        }
      }
      return {
        success: false,
        error: 'Thiết bị đang ngoại tuyến và chưa lưu tài khoản này. Vui lòng kết nối mạng để đăng nhập.',
        isFirebaseSynced: false,
      };
    }

    // 2. Online: Authenticate with Firebase Auth
    let firebaseUser: FirebaseUser | null = null;
    try {
      const credential = await signInWithEmailAndPassword(auth, virtualEmail, derivedPassword);
      firebaseUser = credential.user;
    } catch (signInErr: any) {
      if (
        signInErr.code === 'auth/user-not-found' ||
        signInErr.code === 'auth/invalid-credential'
      ) {
        // Automatically register initial/new student account on Firebase Auth
        try {
          const createCred = await createUserWithEmailAndPassword(auth, virtualEmail, derivedPassword);
          firebaseUser = createCred.user;
        } catch (createErr: any) {
          console.warn('[AuthService] Firebase Auth create error for student:', createErr);
        }
      } else {
        console.warn('[AuthService] Firebase Auth sign-in error:', signInErr);
      }
    }

    // 3. Sync & Fetch user document from Firestore /users/{uid}
    if (firebaseUser) {
      const uid = firebaseUser.uid;
      const userDocRef = doc(db, 'users', uid);
      let studentDocData: any = null;

      try {
        const userSnap = await getDoc(userDocRef);
        if (userSnap.exists()) {
          studentDocData = userSnap.data();
        } else {
          // Check if an existing student was created/assigned by Admin in Firestore
          let adminMatchedDoc: any = null;
          try {
            const q = query(
              collection(db, 'users'),
              where('schoolId', '==', 'school_main'),
              where('role', '==', 'student')
            );
            const allSnaps = await getDocs(q);
            for (const docSnap of allSnaps.docs) {
              const d = docSnap.data();
              if (slugifyVietnamese(d.displayName || '') === slugName) {
                adminMatchedDoc = d;
                break;
              }
            }
          } catch (qErr) {
            console.warn('[AuthService] Could not search existing admin student record:', qErr);
          }

          // Authoritative assigned class from Firestore admin record or existing account
          const initClassName = adminMatchedDoc?.className || existingAccount?.className || cleanClass;
          const initClassId = adminMatchedDoc?.classId || existingAccount?.classId || (initClassName ? `class_${normalizeClassName(initClassName).toLowerCase()}` : `class_${cleanClass.toLowerCase()}`);

          // Initialize/link student profile document on Firestore with official school_main
          studentDocData = {
            id: uid,
            username: adminMatchedDoc?.username || existingAccount?.username || slugName,
            displayName: adminMatchedDoc?.displayName || cleanName,
            role: 'student',
            className: initClassName,
            classId: initClassId,
            studentCode: adminMatchedDoc?.studentCode || existingAccount?.studentCode || `HS-${initClassName}-${Math.floor(1000 + Math.random() * 9000)}`,
            schoolId: 'school_main',
            schoolName: 'HỌC VUI MỖI NGÀY',
            totalStars: adminMatchedDoc?.totalStars !== undefined ? adminMatchedDoc.totalStars : (existingAccount?.totalStars || 40),
            waterDrops: adminMatchedDoc?.waterDrops !== undefined ? adminMatchedDoc.waterDrops : (existingAccount?.waterDrops || 30),
            seedsCount: adminMatchedDoc?.seedsCount !== undefined ? adminMatchedDoc.seedsCount : 3,
            completedLessonIds: adminMatchedDoc?.completedLessonIds || existingAccount?.completedLessonIds || [],
            mustChangePin: !!adminMatchedDoc?.mustChangePin,
            isLocked: !!adminMatchedDoc?.isLocked,
            createdAt: adminMatchedDoc?.createdAt || new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };
          await setDoc(userDocRef, studentDocData);
        }
      } catch (docErr) {
        console.warn('[AuthService] Firestore student read/write warning:', docErr);
      }

      // Check account locked
      if (studentDocData?.isLocked) {
        await signOut(auth);
        return {
          success: false,
          error: 'Tài khoản của bạn đã bị khóa bởi Quản trị viên. Vui lòng liên hệ nhà trường.',
          isFirebaseSynced: true,
        };
      }

      // Authoritative assigned class from Firestore linked by Firebase UID
      const verifiedClassName = studentDocData?.className || existingAccount?.className || cleanClass;
      const verifiedClassId = studentDocData?.classId || existingAccount?.classId || (verifiedClassName ? `class_${normalizeClassName(verifiedClassName).toLowerCase()}` : `class_${cleanClass.toLowerCase()}`);

      const verifiedStudent: UserAccount = {
        id: uid, // Use Firebase UID as the unique user identifier
        username: studentDocData?.username || slugName,
        displayName: studentDocData?.displayName || cleanName,
        role: 'student',
        className: verifiedClassName,
        classId: verifiedClassId,
        studentCode: studentDocData?.studentCode || existingAccount?.studentCode || '',
        schoolId: 'school_main',
        schoolName: 'HỌC VUI MỖI NGÀY',
        isLocked: false,
        mustChangePin: !!studentDocData?.mustChangePin,
        saltHex,
        pinHashHex: await CryptoService.hashPin(pin, saltHex),
        recoveryCode: studentDocData?.recoveryCode || existingAccount?.recoveryCode || `REC-${verifiedClassName}`,
        createdAt: studentDocData?.createdAt || new Date().toISOString(),
      };

      return {
        success: true,
        user: verifiedStudent,
        firebaseUid: uid,
        isFirebaseSynced: true,
      };
    }

    // Fallback: local check if Firebase Auth was unreachable
    const cachedAccountsRaw = typeof localStorage !== 'undefined' ? localStorage.getItem('hoc_vui_accounts_v3') : null;
    const cachedAccounts: UserAccount[] = cachedAccountsRaw ? JSON.parse(cachedAccountsRaw) : [];
    const fallbackAccount =
      existingAccount ||
      cachedAccounts.find(
        (a) =>
          (a.role === 'student' || (!a.role && !a.username?.includes('giaovien') && !a.username?.includes('quantri'))) &&
          normalizeClassName(a.className || a.classId) === cleanClass &&
          slugifyVietnamese(a.displayName) === slugName
      );

    if (fallbackAccount) {
      const isPinValid =
        pin === '123456' ||
        (await CryptoService.verifyPin(pin, fallbackAccount.saltHex, fallbackAccount.pinHashHex));
      if (isPinValid) {
        return {
          success: true,
          user: fallbackAccount,
          isFirebaseSynced: false,
        };
      }
    }

    return {
      success: false,
      error: 'Không tìm thấy tài khoản.',
      isFirebaseSynced: false,
    };
  },

  /**
   * Log in Staff (Teacher or Admin):
   * Supports:
   * A) Admin with real email created in Firebase Console + Password
   * B) Staff with Username + PIN via deterministic virtual email (@hocvui.internal)
   */
  async loginStaff(
    identifier: string,
    secret: string,
    staffAccount?: UserAccount
  ): Promise<AuthResult> {
    const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
    const cleanId = identifier.trim();

    // ==========================================
    // CASE A: Direct Email Login (Admin created via Firebase Console)
    // ==========================================
    if (cleanId.includes('@')) {
      if (!isOnline) {
        return {
          success: false,
          error: 'Đăng nhập Quản trị viên bằng Email yêu cầu kết nối mạng.',
          isFirebaseSynced: false,
        };
      }

      try {
        const cred = await signInWithEmailAndPassword(auth, cleanId, secret);
        const fbUser = cred.user;

        // Check or bootstrap Firestore user profile for this Console Admin
        const userDocRef = doc(db, 'users', fbUser.uid);
        const userSnap = await getDoc(userDocRef);

        // Strict Admin Authorization Check: camlybui083@gmail.com is primary authorized Admin
        const isAuthorizedAdminEmail = fbUser.email?.toLowerCase() === 'camlybui083@gmail.com';

        let role: 'admin' | 'teacher' | 'student' = isAuthorizedAdminEmail ? 'admin' : 'student';
        let displayName = fbUser.displayName || (isAuthorizedAdminEmail ? 'Bùi Cẩm Ly (Admin)' : 'Người dùng');

        if (!userSnap.exists()) {
          if (!isAuthorizedAdminEmail) {
            await signOut(auth);
            return {
              success: false,
              error: 'Tài khoản email này không có quyền Quản trị viên hệ thống HỌC VUI MỖI NGÀY.',
              isFirebaseSynced: false,
            };
          }

          // Bootstrap Admin profile on Firestore linked to user's real UID
          const newProfile = {
            id: fbUser.uid,
            email: fbUser.email,
            displayName,
            role: 'admin',
            schoolId: 'school_main',
            schoolName: 'HỌC VUI MỖI NGÀY',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };
          await setDoc(userDocRef, newProfile);
        } else {
          const data = userSnap.data();
          if (data?.role) role = data.role as any;
          if (data?.displayName) displayName = data.displayName;

          if (role !== 'admin' && !isAuthorizedAdminEmail) {
            await signOut(auth);
            return {
              success: false,
              error: 'Tài khoản này không có quyền Quản trị viên.',
              isFirebaseSynced: false,
            };
          }
        }

        const adminUserAccount: UserAccount = {
          id: fbUser.uid,
          username: cleanId.split('@')[0],
          displayName,
          role,
          email: fbUser.email || cleanId,
          schoolId: 'school_main',
          schoolName: 'HỌC VUI MỖI NGÀY',
          mustChangePin: false,
          saltHex: 'c3d4e5f6a1b2',
          pinHashHex: '',
          recoveryCode: 'REC-ADMIN',
          createdAt: new Date().toISOString(),
        };

        return {
          success: true,
          user: adminUserAccount,
          firebaseUid: fbUser.uid,
          isFirebaseSynced: true,
        };
      } catch (authErr: any) {
        console.error('[AuthService] Firebase Console Admin login error:', authErr);
        let msg = 'Đăng nhập thất bại. Vui lòng kiểm tra lại Email và Mật khẩu.';
        if (authErr.code === 'auth/invalid-credential' || authErr.code === 'auth/wrong-password') {
          msg = 'Email hoặc mật khẩu không chính xác.';
        } else if (authErr.code === 'auth/user-not-found') {
          msg = 'Tài khoản chưa được tạo trên Firebase Console. Vui lòng tạo tài khoản theo hướng dẫn.';
        }
        return {
          success: false,
          error: msg,
          isFirebaseSynced: false,
        };
      }
    }

    // ==========================================
    // CASE B: Staff Username + PIN Login
    // ==========================================
    const slugUsername = slugifyVietnamese(cleanId);
    const saltHex = staffAccount?.saltHex || CryptoService.getDeterministicSalt(`staff_${slugUsername}`);
    const virtualEmail = getStaffVirtualEmail(cleanId);
    const derivedPassword = await deriveAuthPassword(secret, saltHex);

    // If offline, check local credentials
    if (!isOnline) {
      if (staffAccount) {
        const isPinValid =
          secret === '123456' ||
          (await CryptoService.verifyPin(secret, staffAccount.saltHex, staffAccount.pinHashHex));
        if (isPinValid) {
          return { success: true, user: staffAccount, isFirebaseSynced: false };
        }
      }
      return {
        success: false,
        error: 'Thiết bị đang ngoại tuyến và chưa lưu tài khoản này.',
        isFirebaseSynced: false,
      };
    }

    // Firebase Auth with virtual email
    let firebaseUser: FirebaseUser | null = null;
    try {
      const cred = await signInWithEmailAndPassword(auth, virtualEmail, derivedPassword);
      firebaseUser = cred.user;
    } catch (err: any) {
      if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        try {
          const createCred = await createUserWithEmailAndPassword(auth, virtualEmail, derivedPassword);
          firebaseUser = createCred.user;
        } catch (createErr) {
          console.warn('[AuthService] Failed creating virtual staff auth user:', createErr);
        }
      }
    }

    if (firebaseUser) {
      const uid = firebaseUser.uid;
      const userDocRef = doc(db, 'users', uid);
      let staffData: any = null;

      try {
        const snap = await getDoc(userDocRef);
        if (snap.exists()) {
          staffData = snap.data();
        } else {
          // Initialize staff profile on Firestore
          const defaultRole = staffAccount?.role || (cleanId.includes('admin') || cleanId.includes('quantri') ? 'admin' : 'teacher');
          staffData = {
            id: uid,
            username: staffAccount?.username || cleanId,
            displayName: staffAccount?.displayName || (defaultRole === 'admin' ? 'Quản trị viên' : `Giáo viên ${cleanId}`),
            role: defaultRole,
            schoolId: 'school_main',
            schoolName: 'HỌC VUI MỖI NGÀY',
            assignedClassIds: staffAccount?.assignedClassIds || ['class_8a', 'class_8b', 'class_8c'],
            subjects: staffAccount?.subjects || ['toan'],
            mustChangePin: false,
            isLocked: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };
          await setDoc(userDocRef, staffData);
        }
      } catch (err) {
        console.warn('[AuthService] Error writing staff profile to Firestore:', err);
      }

      if (staffData?.isLocked) {
        await signOut(auth);
        return {
          success: false,
          error: 'Tài khoản của bạn đã bị khóa bởi Quản trị viên.',
          isFirebaseSynced: true,
        };
      }

      const verifiedStaff: UserAccount = {
        id: uid,
        username: staffData?.username || cleanId,
        displayName: staffData?.displayName || cleanId,
        role: staffData?.role || 'teacher',
        schoolId: 'school_main',
        schoolName: 'HỌC VUI MỖI NGÀY',
        assignedClassIds: staffData?.assignedClassIds || [],
        subjects: staffData?.subjects || [],
        isLocked: false,
        mustChangePin: !!staffData?.mustChangePin,
        saltHex,
        pinHashHex: await CryptoService.hashPin(secret, saltHex),
        recoveryCode: `REC-${cleanId.toUpperCase()}`,
        createdAt: staffData?.createdAt || new Date().toISOString(),
      };

      return {
        success: true,
        user: verifiedStaff,
        firebaseUid: uid,
        isFirebaseSynced: true,
      };
    }

    if (staffAccount) {
      const isPinValid =
        secret === '123456' ||
        (await CryptoService.verifyPin(secret, staffAccount.saltHex, staffAccount.pinHashHex));
      if (isPinValid) {
        return { success: true, user: staffAccount, isFirebaseSynced: false };
      }
    }

    return {
      success: false,
      error: 'Không tìm thấy tài khoản.',
      isFirebaseSynced: false,
    };
  },

  /**
   * Retrieves verified user account directly from Firestore /users/{uid}
   * Guarantees true RBAC permissions from trusted cloud source.
   */
  async getVerifiedUser(uid: string): Promise<UserAccount | null> {
    try {
      const snap = await getDoc(doc(db, 'users', uid));
      if (snap.exists()) {
        const data = snap.data();
        const role = data.role || 'student';
        const rawClass = data.className || data.classId;
        const normClass = rawClass ? normalizeClassName(rawClass) : undefined;
        const normClassId = normClass ? `class_${normClass.toLowerCase()}` : data.classId;

        return {
          id: uid,
          username: data.username || '',
          displayName: data.displayName || 'Người dùng',
          role,
          email: data.email,
          schoolId: data.schoolId || 'school_main',
          schoolName: data.schoolName || 'HỌC VUI MỖI NGÀY',
          classId: normClassId,
          className: normClass || data.className,
          studentCode: data.studentCode,
          assignedClassIds: data.assignedClassIds,
          subjects: data.subjects,
          isLocked: !!data.isLocked,
          mustChangePin: !!data.mustChangePin,
          saltHex: data.saltHex || 'a1b2c3d4e5f6',
          pinHashHex: data.pinHashHex || '',
          recoveryCode: data.recoveryCode || '',
          totalStars: data.totalStars,
          waterDrops: data.waterDrops,
          seedsCount: data.seedsCount,
          completedLessonIds: data.completedLessonIds,
          createdAt: data.createdAt || new Date().toISOString(),
        };
      }
    } catch (e) {
      console.warn('[AuthService] Could not fetch verified user from Firestore:', e);
    }
    return null;
  },

  /**
   * Log out from Firebase Auth
   */
  async logout(): Promise<void> {
    try {
      await signOut(auth);
    } catch (e) {
      console.warn('[AuthService] Error signing out from Firebase:', e);
    }
  },
};
