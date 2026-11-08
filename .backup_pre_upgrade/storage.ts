import { 
  UserAccount, 
  StudentProfile, 
  AchievementBadge, 
  LessonPreview, 
  QuickQuiz, 
  ReadingProgress, 
  QuizAttemptProgress, 
  WrongMistakeItem,
  GardenPlant,
  SubjectId,
  QuestionAnalyticsRecord,
  LessonStats,
  ChapterStats,
  ChapterSummaryStats,
  BadgeTier,
  EnglishUnitQuizRecord
} from '../types';
import { 
  INITIAL_CHAPTERS,
  INITIAL_LESSONS, 
  SAMPLE_QUIZZES, 
  INITIAL_GARDEN_PLANTS, 
  INITIAL_BADGES 
} from '../data/mockData';
import { CryptoService } from './crypto';
import { AuthService } from './authService';
import { queueMutation } from './syncEngine';
import { auth } from './firebase';

const GLOBAL_KEYS = {
  CURRENT_USER_ID: 'hoc_vui_curr_user_id',
  ACCOUNTS_LIST: 'hoc_vui_accounts_v3',
};

type StorageListener = () => void;
const listeners: Set<StorageListener> = new Set();

export const subscribeToStorage = (listener: StorageListener) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export const notifyListeners = () => {
  listeners.forEach((fn) => {
    try {
      fn();
    } catch (e) {
      console.error('Storage listener error:', e);
    }
  });
};

import { normalizeClassName } from './schoolService';

// Real SHA-256 hashes of "hoc_vui_v3_${saltHex}_123456"
const SHA256_SALT_A1_123456 = '62256aa152f0344110ba0317fe8d41bdc4043d6fe4a78393974ae9afa60f51ba'; // salt: a1b2c3d4e5f6
const SHA256_SALT_B2_123456 = '81bde9269cdf40a2d8269870183a76a6d2119ea6ca82f7518a7470dd5b53c527'; // salt: b2c3d4e5f6a1
const SHA256_SALT_C3_123456 = '6326918e1f45dfcd87c4b4b2ccdea84377930a9ac335dea179035efae167133a'; // salt: c3d4e5f6a1b2

export const DEFAULT_BASELINE_ACCOUNTS: UserAccount[] = [
  {
    id: 'user_student_8a',
    username: 'tranhocsinh',
    displayName: 'Trần Minh Quang',
    role: 'student',
    schoolId: 'school_main',
    classId: 'class_8a',
    className: '8A',
    studentCode: 'HS-2026-0801',
    secondaryIdentifier: 'STT 01',
    mustChangePin: false,
    saltHex: 'a1b2c3d4e5f6',
    pinHashHex: SHA256_SALT_A1_123456,
    recoveryCode: 'REC-HS8A',
    createdAt: '2026-09-05T08:00:00Z',
  },
  {
    id: 'user_student_8b',
    username: 'linhhocsinh',
    displayName: 'Nguyễn Phương Linh',
    role: 'student',
    schoolId: 'school_main',
    classId: 'class_8b',
    className: '8B',
    studentCode: 'HS-2026-0802',
    secondaryIdentifier: 'STT 02',
    mustChangePin: false,
    saltHex: 'b2c3d4e5f6a1',
    pinHashHex: SHA256_SALT_B2_123456,
    recoveryCode: 'REC-HS8B',
    createdAt: '2026-09-05T08:00:00Z',
  },
  {
    id: 'user_student_8c',
    username: 'namhocsinh',
    displayName: 'Lê Hoàng Nam',
    role: 'student',
    schoolId: 'school_main',
    classId: 'class_8c',
    className: '8C',
    studentCode: 'HS-2026-0803',
    secondaryIdentifier: 'STT 03',
    mustChangePin: false,
    saltHex: 'c3d4e5f6a1b2',
    pinHashHex: SHA256_SALT_C3_123456,
    recoveryCode: 'REC-HS8C',
    createdAt: '2026-09-05T08:00:00Z',
  },
  {
    id: 'user_teacher_mai',
    username: 'giaovienlan',
    displayName: 'Cô Nguyễn Mai Lan',
    role: 'teacher',
    schoolId: 'school_main',
    classId: 'class_8a',
    className: '8A',
    subjects: ['toan'],
    assignedClassIds: ['class_8a', 'class_8b', 'class_8c'],
    mustChangePin: false,
    saltHex: 'b2c3d4e5f6a1',
    pinHashHex: SHA256_SALT_B2_123456,
    recoveryCode: 'REC-GVLAN',
    createdAt: '2026-09-01T08:00:00Z',
  },
  {
    id: 'user_teacher_tuan',
    username: 'giaovientuan',
    displayName: 'Thầy Đỗ Văn Tuấn',
    role: 'teacher',
    schoolId: 'school_main',
    classId: 'class_8b',
    className: '8B',
    subjects: ['toan'],
    assignedClassIds: ['class_8b', 'class_8c'],
    mustChangePin: false,
    saltHex: 'a1b2c3d4e5f6',
    pinHashHex: SHA256_SALT_A1_123456,
    recoveryCode: 'REC-GVTUAN',
    createdAt: '2026-09-01T08:00:00Z',
  },
  {
    id: 'user_admin_school',
    username: 'quantrivien',
    displayName: 'Bùi Cẩm Ly (Admin)',
    role: 'admin',
    email: 'camlybui083@gmail.com',
    schoolId: 'school_main',
    mustChangePin: false,
    saltHex: 'c3d4e5f6a1b2',
    pinHashHex: SHA256_SALT_C3_123456,
    recoveryCode: 'REC-ADMIN',
    createdAt: '2026-09-01T08:00:00Z',
  },
  {
    id: 'user_admin_hethong',
    username: 'admin_hethong',
    displayName: 'Ban Giám Hiệu',
    role: 'admin',
    schoolId: 'school_main',
    mustChangePin: false,
    saltHex: 'a1b2c3d4e5f6',
    pinHashHex: SHA256_SALT_A1_123456,
    recoveryCode: 'REC-ADMINHT',
    createdAt: '2026-09-01T08:00:00Z',
  },
];

export const StorageService = {
  // ==================== AUTHENTICATION & ACCOUNTS ====================
  getAccountsList(): UserAccount[] {
    let accounts: UserAccount[] = [];
    let raw: string | null = null;
    try {
      raw = localStorage.getItem(GLOBAL_KEYS.ACCOUNTS_LIST);
      if (raw) accounts = JSON.parse(raw);
    } catch {}

    const defaultAccounts = DEFAULT_BASELINE_ACCOUNTS;

    // Retrieve deleted user IDs so deleted students/teachers are never resurrected
    let deletedUserIds: string[] = [];
    try {
      const delRaw = localStorage.getItem('hoc_vui_deleted_user_ids');
      if (delRaw) deletedUserIds = JSON.parse(delRaw);
    } catch {}

    const hasStoredAccounts = raw !== null;
    if (!hasStoredAccounts || accounts.length === 0) {
      // First-time initialize: only add default accounts that haven't been deleted
      accounts = defaultAccounts.filter(
        (def) => !deletedUserIds.includes(def.id) && !deletedUserIds.includes(def.username.toLowerCase())
      );
    } else {
      // Only ensure critical system admin accounts exist if missing
      const systemAdmins = defaultAccounts.filter((d) => d.role === 'admin');
      systemAdmins.forEach((adm) => {
        if (
          !deletedUserIds.includes(adm.id) &&
          !accounts.some((a) => a.id === adm.id || a.username.toLowerCase() === adm.username.toLowerCase())
        ) {
          accounts.push(adm);
        }
      });
    }

    // Always filter out any deleted accounts
    if (deletedUserIds.length > 0) {
      accounts = accounts.filter(
        (a) => !deletedUserIds.includes(a.id) && !deletedUserIds.includes(a.username.toLowerCase())
      );
    }

    // MANDATORY MIGRATION: Convert all 8A1/8A2/8A3 to 8A/8B/8C, fix dummy hashes and sanitize school strings
    let hasChanges = false;
    accounts = accounts.map((acc) => {
      let changed = false;
      const normClass = normalizeClassName(acc.className || acc.classId);
      const normClassId = `class_${normClass.toLowerCase()}`;

      if (acc.className !== normClass || acc.classId !== normClassId) {
        changed = true;
      }

      // If pinHashHex is missing or dummy (< 32 chars), assign valid SHA-256 of 123456
      let pinHashHex = acc.pinHashHex;
      let saltHex = acc.saltHex || 'a1b2c3d4e5f6';
      if (!pinHashHex || pinHashHex.length < 32) {
        pinHashHex = SHA256_SALT_A1_123456;
        saltHex = 'a1b2c3d4e5f6';
        changed = true;
      }

      // Sanitize legacy school identifiers and Trưng Vương references
      let schoolName = acc.schoolName;
      let schoolId = acc.schoolId;
      let displayName = acc.displayName;

      if (schoolName && (schoolName.includes('Trưng Vương') || schoolName.includes('THCS'))) {
        schoolName = '';
        changed = true;
      }
      if (schoolId === 'thcs_trung_vuong') {
        schoolId = 'school_main';
        changed = true;
      }
      if (displayName && displayName.includes('THCS Trưng Vương')) {
        displayName = displayName.replace(/\s*THCS Trưng Vương/g, '').trim();
        changed = true;
      }

      if (changed) {
        hasChanges = true;
        return {
          ...acc,
          className: normClass,
          classId: normClassId,
          schoolName,
          schoolId,
          displayName,
          saltHex,
          pinHashHex,
        };
      }
      return acc;
    });

    if (hasChanges) {
      try {
        localStorage.setItem(GLOBAL_KEYS.ACCOUNTS_LIST, JSON.stringify(accounts));
      } catch {}
    }

    return accounts;
  },

  getCurrentUser(): UserAccount | null {
    try {
      const currentId = localStorage.getItem(GLOBAL_KEYS.CURRENT_USER_ID);
      if (!currentId) return null;
      const accounts = this.getAccountsList();
      return accounts.find((a) => a.id.toLowerCase() === currentId.toLowerCase()) || null;
    } catch {}
    return null;
  },

  async createAccount(username: string, pin: string): Promise<{ account: UserAccount; recoveryCode: string } | { error: string }> {
    const cleanUser = username.trim();
    if (!cleanUser) {
      return { error: 'Vui lòng nhập tên tài khoản' };
    }
    if (!/^\d{6}$/.test(pin)) {
      return { error: 'Mã PIN phải gồm đúng 6 chữ số' };
    }

    const accounts = this.getAccountsList();
    const existing = accounts.find((a) => a.username.toLowerCase() === cleanUser.toLowerCase());
    if (existing) {
      return { error: 'Tên tài khoản này đã tồn tại trên thiết bị' };
    }

    const saltHex = CryptoService.generateSalt();
    const pinHashHex = await CryptoService.hashPin(pin, saltHex);
    const recoveryCode = CryptoService.generateRecoveryCode();

    const newAccount: UserAccount = {
      id: `user_${Date.now()}_${cleanUser.toLowerCase()}`,
      username: cleanUser,
      displayName: cleanUser,
      saltHex,
      pinHashHex,
      recoveryCode,
      createdAt: new Date().toISOString(),
    };

    accounts.push(newAccount);
    try {
      localStorage.setItem(GLOBAL_KEYS.ACCOUNTS_LIST, JSON.stringify(accounts));
      localStorage.setItem(GLOBAL_KEYS.CURRENT_USER_ID, newAccount.id);
    } catch (e) {
      console.error(e);
    }

    this.initUserProfile(newAccount.id, cleanUser);
    notifyListeners();
    return { account: newAccount, recoveryCode };
  },

  /**
   * Đăng nhập Học sinh (Mục III): Họ và tên, Lớp học (8A/8B/8C), Mã PIN (Không yêu cầu mã học sinh)
   * Tự động xử lý phân biệt an toàn khi trùng tên trong cùng lớp.
   */
  async loginStudent(
    fullName: string,
    classInput: string,
    pin: string,
    specificAccountId?: string
  ): Promise<{
    success: boolean;
    account?: UserAccount;
    error?: string;
    duplicateCandidates?: UserAccount[];
    requiresSelection?: boolean;
    mustChangePin?: boolean;
  }> {
    const cleanName = fullName.trim().toLowerCase().replace(/\s+/g, ' ');
    const targetClass = normalizeClassName(classInput);
    const accounts = this.getAccountsList();

    // Tìm tất cả học sinh trong lớp (8A/8B/8C) có họ tên khớp
    let matchedStudents = accounts.filter((a) => {
      if (a.role && a.role !== 'student') return false;
      const studentClass = normalizeClassName(a.className || a.classId);
      const matchesClass = studentClass === targetClass;
      const matchesName = a.displayName.trim().toLowerCase().replace(/\s+/g, ' ') === cleanName;
      return matchesClass && matchesName;
    });

    if (matchedStudents.length === 0) {
      // Check baseline accounts (e.g. user_student_8c: Lê Hoàng Nam)
      const defMatch = DEFAULT_BASELINE_ACCOUNTS.find(
        (def) =>
          def.role === 'student' &&
          normalizeClassName(def.className || def.classId) === targetClass &&
          def.displayName.trim().toLowerCase().replace(/\s+/g, ' ') === cleanName
      );
      if (defMatch) {
        matchedStudents = [defMatch];
      }
    }

    // Nếu có từ 2 học sinh trở lên trùng họ tên trong cùng 1 lớp và chưa chọn hồ sơ cụ thể
    if (matchedStudents.length > 1 && !specificAccountId) {
      return {
        success: false,
        requiresSelection: true,
        duplicateCandidates: matchedStudents,
      };
    }

    const targetAccount = specificAccountId
      ? matchedStudents.find((s) => s.id === specificAccountId) || matchedStudents[0]
      : (matchedStudents.length > 0 ? matchedStudents[0] : undefined);

    // Authenticate with Firebase Auth and sync with Firestore /users/{uid}
    const authRes = await AuthService.loginStudentDirect(fullName, classInput, pin, targetAccount);
    if (!authRes.success || !authRes.user) {
      return { success: false, error: authRes.error || 'Không tìm thấy tài khoản.' };
    }

    const authenticatedUser = authRes.user;

    // Kiểm tra khóa tài khoản
    if (authenticatedUser.isLocked) {
      return {
        success: false,
        error: 'Tài khoản của bạn đã bị khóa bởi Quản trị viên. Vui lòng liên hệ nhà trường.',
      };
    }

    // Kiểm tra yêu cầu đổi mã PIN lần đầu
    if (authenticatedUser.mustChangePin) {
      return { success: true, mustChangePin: true, account: authenticatedUser };
    }

    // Save to accounts list
    const existingIdx = accounts.findIndex((a) => a.id === authenticatedUser.id || a.username === authenticatedUser.username);
    if (existingIdx !== -1) {
      accounts[existingIdx] = { ...accounts[existingIdx], ...authenticatedUser };
    } else {
      accounts.push(authenticatedUser);
    }
    try {
      localStorage.setItem(GLOBAL_KEYS.ACCOUNTS_LIST, JSON.stringify(accounts));
      localStorage.setItem(GLOBAL_KEYS.CURRENT_USER_ID, authenticatedUser.id);
    } catch {}

    this.initUserProfile(authenticatedUser.id, authenticatedUser.displayName);
    notifyListeners();
    return { success: true, account: authenticatedUser };
  },

  /**
   * Đăng nhập Giáo viên và Quản trị viên:
   * Hỗ trợ:
   * 1. Quản trị viên dùng Email Console (chứa '@') + Mật khẩu
   * 2. Giáo viên / Admin dùng Tên đăng nhập + Mã PIN
   */
  async login(
    username: string,
    pin: string,
    expectedRole?: 'teacher' | 'admin' | 'student'
  ): Promise<{
    success: boolean;
    account?: UserAccount;
    error?: string;
    mustChangePin?: boolean;
  }> {
    const cleanUser = username.trim().toLowerCase();

    // 1. Quản trị viên đăng nhập trực tiếp bằng Email Console
    if (cleanUser.includes('@')) {
      const fbResult = await AuthService.loginStaff(username, pin);
      if (fbResult.success && fbResult.user) {
        const accounts = this.getAccountsList();
        const existingIdx = accounts.findIndex(
          (a) => a.id === fbResult.user!.id || a.email === fbResult.user!.email
        );
        if (existingIdx !== -1) {
          accounts[existingIdx] = { ...accounts[existingIdx], ...fbResult.user };
        } else {
          accounts.push(fbResult.user);
        }
        try {
          localStorage.setItem(GLOBAL_KEYS.ACCOUNTS_LIST, JSON.stringify(accounts));
          localStorage.setItem(GLOBAL_KEYS.CURRENT_USER_ID, fbResult.user.id);
        } catch {}
        notifyListeners();
        return { success: true, account: fbResult.user };
      }
      return {
        success: false,
        error: fbResult.error || 'Email hoặc mật khẩu không chính xác.',
      };
    }

    // 2. Giáo viên / Quản trị viên đăng nhập bằng Tên tài khoản + PIN
    const accounts = this.getAccountsList();
    const account = accounts.find((a) => a.username.toLowerCase() === cleanUser);

    const authRes = await AuthService.loginStaff(username, pin, account);
    if (!authRes.success || !authRes.user) {
      return { success: false, error: authRes.error || 'Không tìm thấy tài khoản.' };
    }

    const authenticatedStaff = authRes.user;

    // Kiểm tra khóa tài khoản
    if (authenticatedStaff.isLocked) {
      return {
        success: false,
        error: 'Tài khoản của bạn đã bị khóa bởi Quản trị viên. Vui lòng liên hệ nhà trường.',
      };
    }

    // Kiểm tra vai trò phù hợp nếu được chỉ định
    if (expectedRole) {
      const effectiveRole = authenticatedStaff.role || 'student';
      if (expectedRole === 'teacher' && effectiveRole !== 'teacher' && effectiveRole !== 'admin') {
        return { success: false, error: 'Không tìm thấy tài khoản.' };
      }
      if (expectedRole === 'admin' && effectiveRole !== 'admin') {
        return { success: false, error: 'Không tìm thấy tài khoản.' };
      }
    }

    // Kiểm tra yêu cầu đổi mã PIN lần đầu
    if (authenticatedStaff.mustChangePin) {
      return { success: true, mustChangePin: true, account: authenticatedStaff };
    }

    const staffAccounts = this.getAccountsList();
    const existingStaffIdx = staffAccounts.findIndex(
      (a) => a.id === authenticatedStaff.id || a.username.toLowerCase() === authenticatedStaff.username.toLowerCase()
    );
    if (existingStaffIdx !== -1) {
      staffAccounts[existingStaffIdx] = { ...staffAccounts[existingStaffIdx], ...authenticatedStaff };
    } else {
      staffAccounts.push(authenticatedStaff);
    }
    try {
      localStorage.setItem(GLOBAL_KEYS.ACCOUNTS_LIST, JSON.stringify(staffAccounts));
      localStorage.setItem(GLOBAL_KEYS.CURRENT_USER_ID, authenticatedStaff.id);
    } catch {}

    notifyListeners();
    return { success: true, account: authenticatedStaff };
  },

  /**
   * Đổi mã PIN lần đầu bắt buộc (Mục VI: Bắt buộc đổi mã PIN ở lần đăng nhập đầu tiên)
   */
  async completeFirstTimePinChange(
    accountId: string,
    newPin: string
  ): Promise<{ success: boolean; account?: UserAccount; error?: string }> {
    if (!/^\d{6}$/.test(newPin)) {
      return { success: false, error: 'Mã PIN mới phải gồm đúng 6 chữ số (0-9).' };
    }
    if (newPin === '123456') {
      return { success: false, error: 'Mã PIN mới phải khác mã PIN mặc định 123456.' };
    }

    const accounts = this.getAccountsList();
    const target = accounts.find((a) => a.id === accountId);
    if (!target) {
      return { success: false, error: 'Không tìm thấy tài khoản.' };
    }

    const newSaltHex = CryptoService.generateSalt();
    const newHashHex = await CryptoService.hashPin(newPin, newSaltHex);

    target.saltHex = newSaltHex;
    target.pinHashHex = newHashHex;
    target.mustChangePin = false;
    target.updatedAt = new Date().toISOString();

    try {
      localStorage.setItem(GLOBAL_KEYS.ACCOUNTS_LIST, JSON.stringify(accounts));
      localStorage.setItem(GLOBAL_KEYS.CURRENT_USER_ID, target.id);
    } catch {}

    notifyListeners();
    return { success: true, account: target };
  },

  logout(): void {
    try {
      localStorage.removeItem(GLOBAL_KEYS.CURRENT_USER_ID);
    } catch {}
    AuthService.logout().catch(() => {});
    notifyListeners();
  },

  async changePin(currentPin: string, newPin: string): Promise<{ success: boolean; error?: string }> {
    const currentUser = this.getCurrentUser();
    if (!currentUser) return { success: false, error: 'Chưa đăng nhập' };

    if (!/^\d{6}$/.test(newPin)) {
      return { success: false, error: 'Mã PIN mới phải gồm đúng 6 chữ số' };
    }

    const isValid = await CryptoService.verifyPin(currentPin, currentUser.saltHex, currentUser.pinHashHex);
    if (!isValid) {
      return { success: false, error: 'Mã PIN hiện tại không đúng' };
    }

    const newSaltHex = CryptoService.generateSalt();
    const newHashHex = await CryptoService.hashPin(newPin, newSaltHex);

    const accounts = this.getAccountsList();
    const target = accounts.find((a) => a.id === currentUser.id);
    if (target) {
      target.saltHex = newSaltHex;
      target.pinHashHex = newHashHex;
      localStorage.setItem(GLOBAL_KEYS.ACCOUNTS_LIST, JSON.stringify(accounts));
      notifyListeners();
      return { success: true };
    }
    return { success: false, error: 'Lỗi khi cập nhật tài khoản' };
  },

  async resetPinWithRecoveryCode(username: string, recoveryCode: string, newPin: string): Promise<{ success: boolean; error?: string }> {
    if (!/^\d{6}$/.test(newPin)) {
      return { success: false, error: 'Mã PIN mới phải gồm đúng 6 chữ số' };
    }

    const cleanCode = recoveryCode.trim().toUpperCase();
    const accounts = this.getAccountsList();
    const target = accounts.find(
      (a) => a.username.toLowerCase() === username.trim().toLowerCase()
    );

    if (!target) {
      return { success: false, error: 'Không tìm thấy tên hoặc mã học sinh' };
    }
    if (target.recoveryCode.toUpperCase() !== cleanCode) {
      return { success: false, error: 'Mã khôi phục không chính xác' };
    }

    const newSaltHex = CryptoService.generateSalt();
    const newHashHex = await CryptoService.hashPin(newPin, newSaltHex);
    target.saltHex = newSaltHex;
    target.pinHashHex = newHashHex;

    localStorage.setItem(GLOBAL_KEYS.ACCOUNTS_LIST, JSON.stringify(accounts));
    notifyListeners();
    return { success: true };
  },

  // ==================== PER-USER SCOPED STORAGE ====================
  getUserKey(suffix: string): string {
    const current = this.getCurrentUser();
    const uid = current ? current.id : 'guest';
    return `hoc_vui_v3_${uid}_${suffix}`;
  },

  initUserProfile(userId: string, displayName: string): void {
    const defaultProfile: StudentProfile = {
      username: displayName,
      name: displayName,
      nickname: 'Học sinh lớp 8',
      grade: 8,
      school: '',
      totalStars: 50,
      waterDrops: 30,
      seedsCount: 3,
      completedLessonIds: [],
      bookmarkedLessonIds: [],
      lastActiveDate: new Date().toISOString().split('T')[0],
      totalTasksCompleted: 0,
      totalQuestionsAnswered: 0,
      correctQuestionsAnswered: 0,
    };
    try {
      localStorage.setItem(`hoc_vui_v3_${userId}_profile`, JSON.stringify(defaultProfile));
      localStorage.setItem(`hoc_vui_v3_${userId}_garden`, JSON.stringify(INITIAL_GARDEN_PLANTS));
    } catch {}
  },

  getProfile(): StudentProfile {
    const key = this.getUserKey('profile');
    try {
      const raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw);
    } catch {}

    const currentUser = this.getCurrentUser();
    const name = currentUser ? currentUser.displayName : 'Học sinh';
    return {
      username: name,
      name,
      nickname: 'Học sinh lớp 8',
      grade: 8,
      school: '',
      totalStars: 40,
      waterDrops: 35,
      seedsCount: 3,
      completedLessonIds: ['toan_ch1_b1'],
      bookmarkedLessonIds: [],
      lastActiveDate: new Date().toISOString().split('T')[0],
      totalTasksCompleted: 2,
      totalQuestionsAnswered: 5,
      correctQuestionsAnswered: 4,
    };
  },

  saveProfile(profile: StudentProfile): void {
    const key = this.getUserKey('profile');
    try {
      localStorage.setItem(key, JSON.stringify(profile));
      notifyListeners();
    } catch (e) {
      console.error(e);
    }

    // Two-Way Sync: Update user profile and progress in Firestore
    const current = this.getCurrentUser();
    if (current && auth.currentUser) {
      queueMutation({
        idempotencyKey: `user_profile_${current.id}_${Date.now()}`,
        collection: 'users',
        docId: auth.currentUser.uid,
        action: 'update',
        payload: {
          displayName: profile.name,
          totalStars: profile.totalStars,
          waterDrops: profile.waterDrops,
          seedsCount: profile.seedsCount,
          completedLessonIds: profile.completedLessonIds,
          schoolId: 'school_main',
          updatedAt: new Date().toISOString(),
        },
      });
    }
  },

  addRewards(stars: number, waterDrops: number): void {
    const profile = this.getProfile();
    profile.totalStars += stars;
    profile.waterDrops += waterDrops;
    profile.totalTasksCompleted += 1;
    this.saveProfile(profile);
  },

  // ==================== GARDEN / KHU VƯỜN ====================
  getGardenPlants(): GardenPlant[] {
    const key = this.getUserKey('garden');
    try {
      const raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw);
    } catch {}
    return INITIAL_GARDEN_PLANTS;
  },

  saveGardenPlants(plants: GardenPlant[]): void {
    const key = this.getUserKey('garden');
    try {
      localStorage.setItem(key, JSON.stringify(plants));
      notifyListeners();
    } catch (e) {
      console.error(e);
    }
  },

  waterPlant(plantId: string, waterCost: number = 10): { success: boolean; leveledUp?: boolean; harvested?: boolean } {
    const profile = this.getProfile();
    if (profile.waterDrops < waterCost) {
      return { success: false };
    }

    const plants = this.getGardenPlants();
    const plant = plants.find((p) => p.id === plantId);
    if (!plant) return { success: false };

    // Deduct water drops
    profile.waterDrops -= waterCost;
    plant.waterPoints += waterCost;

    let leveledUp = false;
    let harvested = false;

    // Check if ready to grow to next stage
    if (plant.waterPoints >= plant.requiredPoints) {
      if (plant.stage < 5) {
        plant.stage = (plant.stage + 1) as 1 | 2 | 3 | 4 | 5;
        plant.waterPoints = 0;
        plant.requiredPoints = Math.round(plant.requiredPoints * 1.2);
        leveledUp = true;
      } else {
        // Stage 5: Fruitful Tree! Harvest gives bonus stars and restarts sprout
        plant.totalHarvests += 1;
        plant.stage = 2; // Returns to sprout
        plant.waterPoints = 0;
        profile.totalStars += 30; // Bonus harvest stars!
        harvested = true;
      }
    }

    this.saveProfile(profile);
    this.saveGardenPlants(plants);
    return { success: true, leveledUp, harvested };
  },

  // ==================== READING PROGRESS ====================
  getAllReadingProgress(): { [lessonId: string]: ReadingProgress } {
    const key = this.getUserKey('reading');
    try {
      const raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw);
    } catch {}
    return {};
  },

  getReadingProgress(lessonId: string): ReadingProgress | null {
    const all = this.getAllReadingProgress();
    return all[lessonId] || null;
  },

  saveReadingProgress(progress: ReadingProgress): void {
    const key = this.getUserKey('reading');
    const all = this.getAllReadingProgress();
    all[progress.lessonId] = progress;
    try {
      localStorage.setItem(key, JSON.stringify(all));
    } catch (e) {
      console.error(e);
    }

    if (progress.isFinished) {
      this.markLessonCompleted(progress.lessonId);
    } else {
      notifyListeners();
    }
  },

  // ==================== QUIZ PROGRESS ====================
  getAllQuizProgress(): { [lessonId: string]: QuizAttemptProgress } {
    const key = this.getUserKey('quiz');
    try {
      const raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw);
    } catch {}
    return {};
  },

  getQuizProgress(lessonId: string): QuizAttemptProgress | null {
    const all = this.getAllQuizProgress();
    return all[lessonId] || null;
  },

  saveQuizProgress(progress: QuizAttemptProgress): void {
    const key = this.getUserKey('quiz');
    const all = this.getAllQuizProgress();
    all[progress.lessonId] = progress;
    try {
      localStorage.setItem(key, JSON.stringify(all));
      notifyListeners();
    } catch (e) {
      console.error(e);
    }
  },

  clearQuizProgress(lessonId: string): void {
    const key = this.getUserKey('quiz');
    const all = this.getAllQuizProgress();
    delete all[lessonId];
    try {
      localStorage.setItem(key, JSON.stringify(all));
      notifyListeners();
    } catch (e) {
      console.error(e);
    }
  },

  // ==================== MISTAKES / ÔN TẬP ====================
  getWrongMistakes(): WrongMistakeItem[] {
    const key = this.getUserKey('mistakes');
    try {
      const raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw);
    } catch {}
    return [];
  },

  recordWrongMistake(item: Omit<WrongMistakeItem, 'id' | 'recordedAt' | 'resolved'>): void {
    const key = this.getUserKey('mistakes');
    const mistakes = this.getWrongMistakes();
    const existingIndex = mistakes.findIndex(
      (m) => m.lessonId === item.lessonId && m.questionId === item.questionId
    );

    if (existingIndex > -1) {
      mistakes[existingIndex] = {
        ...mistakes[existingIndex],
        ...item,
        resolved: false,
        recordedAt: new Date().toISOString(),
      };
    } else {
      mistakes.unshift({
        ...item,
        id: `mistake_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        resolved: false,
        recordedAt: new Date().toISOString(),
      });
    }

    try {
      localStorage.setItem(key, JSON.stringify(mistakes));
      notifyListeners();
    } catch (e) {
      console.error(e);
    }
  },

  resolveWrongMistake(mistakeId: string): void {
    const key = this.getUserKey('mistakes');
    const mistakes = this.getWrongMistakes();
    const item = mistakes.find((m) => m.id === mistakeId);
    if (item && !item.resolved) {
      item.resolved = true;
      try {
        localStorage.setItem(key, JSON.stringify(mistakes));
        this.addRewards(5, 10); // +5 stars and +10 water drops for fixing
        notifyListeners();
      } catch (e) {
        console.error(e);
      }
    }
  },

  // ==================== READING STATUS & REWARDS ====================
  getReadCompletedLessonIds(): string[] {
    const key = this.getUserKey('read_completed_lessons');
    try {
      const raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw);
    } catch {}
    return [];
  },

  isLessonRead(lessonId: string): boolean {
    const readIds = this.getReadCompletedLessonIds();
    return readIds.includes(lessonId);
  },

  markLessonRead(lessonId: string): { success: boolean; alreadyRewarded: boolean; starsAdded: number; waterAdded: number } {
    const key = this.getUserKey('read_completed_lessons');
    const readIds = this.getReadCompletedLessonIds();
    if (readIds.includes(lessonId)) {
      return { success: true, alreadyRewarded: true, starsAdded: 0, waterAdded: 0 };
    }

    readIds.push(lessonId);
    try {
      localStorage.setItem(key, JSON.stringify(readIds));
    } catch (e) {
      console.error(e);
    }

    // Ghi nhận thưởng đọc bài: +10 sao, +15 giọt nước (chỉ nhận đúng 1 lần cho mỗi bài)
    const profile = this.getProfile();
    profile.totalStars += 10;
    profile.waterDrops += 15;
    this.saveProfile(profile);

    notifyListeners();
    return { success: true, alreadyRewarded: false, starsAdded: 10, waterAdded: 15 };
  },

  // ==================== SEQUENTIAL QUIZ IN-PROGRESS STATE ====================
  getKhtnQuizState(lessonId: string): {
    qIndex: number;
    firstTryCount: number;
    wrongAttempts: number;
    isFinished: boolean;
    wrongSelections?: number[];
  } | null {
    const key = this.getUserKey(`khtn_quiz_state_${lessonId}`);
    try {
      const raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw);
    } catch {}
    return null;
  },

  saveKhtnQuizState(lessonId: string, state: {
    qIndex: number;
    firstTryCount: number;
    wrongAttempts: number;
    isFinished: boolean;
    wrongSelections?: number[];
  }): void {
    const key = this.getUserKey(`khtn_quiz_state_${lessonId}`);
    try {
      localStorage.setItem(key, JSON.stringify(state));
      notifyListeners();
    } catch (e) {
      console.error(e);
    }
  },

  clearKhtnQuizState(lessonId: string): void {
    const key = this.getUserKey(`khtn_quiz_state_${lessonId}`);
    try {
      localStorage.removeItem(key);
      notifyListeners();
    } catch {}
  },

  isLessonQuizCompleted(lessonId: string): boolean {
    const quizProgress = this.getQuizProgress(lessonId);
    if (quizProgress && quizProgress.isFinished) return true;
    const khtnState = this.getKhtnQuizState(lessonId);
    if (khtnState && khtnState.isFinished) return true;
    return false;
  },

  // ==================== PREPARATION SHEET COMPLETION & REWARDS ====================
  isPreparationSheetSubmitted(lessonId: string): boolean {
    try {
      const key = this.getUserKey(`sheet_submitted_${lessonId}`);
      return localStorage.getItem(key) === 'true';
    } catch {
      return false;
    }
  },

  markPreparationSheetSubmitted(lessonId: string): void {
    try {
      const key = this.getUserKey(`sheet_submitted_${lessonId}`);
      localStorage.setItem(key, 'true');
      notifyListeners();
    } catch (e) {
      console.error(e);
    }
  },

  isLessonRewardClaimed(lessonId: string): boolean {
    try {
      const key = this.getUserKey(`lesson_rewarded_${lessonId}`);
      return localStorage.getItem(key) === 'true';
    } catch {
      return false;
    }
  },

  claimLessonReward(lessonId: string, stars: number = 15, waterDrops: number = 20): boolean {
    if (this.isLessonRewardClaimed(lessonId)) return false;
    this.addRewards(stars, waterDrops);
    try {
      const key = this.getUserKey(`lesson_rewarded_${lessonId}`);
      localStorage.setItem(key, 'true');
      notifyListeners();
    } catch (e) {
      console.error(e);
    }
    return true;
  },

  // ==================== LESSONS COMPLETION & BOOKMARKS ====================
  // Điều kiện hoàn thành bài: ĐÃ ĐỌC BÀI + ĐÃ XONG CÂU HỎI + ĐÃ GỬI PHIẾU HỌC TẬP
  isLessonCompleted(lessonId: string): boolean {
    const profile = this.getProfile();
    if (profile.completedLessonIds.includes(lessonId)) return true;
    const isSequential = lessonId.startsWith('toan_ch3') || lessonId.startsWith('toan_ch4') || lessonId.startsWith('toan_ch5') || lessonId.startsWith('toan_ch6');
    if (isSequential) {
      const hasRead = this.isLessonRead(lessonId);
      const hasQuiz = this.isLessonQuizCompleted(lessonId);
      const hasSheet = this.isPreparationSheetSubmitted(lessonId);
      return hasRead && hasQuiz && hasSheet;
    }
    if (lessonId.startsWith('ch_tienganh_')) {
      return this.isPreparationSheetSubmitted(lessonId);
    }
    return false;
  },

  markLessonFullyCompleted(lessonId: string): void {
    const profile = this.getProfile();
    if (!profile.completedLessonIds.includes(lessonId)) {
      profile.completedLessonIds.push(lessonId);
      profile.totalTasksCompleted += 1;
      this.saveProfile(profile);
    }
  },

  markLessonCompleted(lessonId: string): void {
    const isSequential = lessonId.startsWith('toan_ch3') || lessonId.startsWith('toan_ch4') || lessonId.startsWith('toan_ch5') || lessonId.startsWith('toan_ch6');
    if (isSequential) {
      if (this.isLessonRead(lessonId) && this.isLessonQuizCompleted(lessonId) && this.isPreparationSheetSubmitted(lessonId)) {
        this.markLessonFullyCompleted(lessonId);
      }
      return;
    }
    if (lessonId.startsWith('ch_tienganh_')) {
      if (this.isPreparationSheetSubmitted(lessonId)) {
        this.markLessonFullyCompleted(lessonId);
      }
      return;
    }

    const profile = this.getProfile();
    if (!profile.completedLessonIds.includes(lessonId)) {
      profile.completedLessonIds.push(lessonId);
      profile.totalStars += 10;
      profile.waterDrops += 15;
      profile.totalTasksCompleted += 1;
      this.saveProfile(profile);
    }
  },

  toggleBookmark(lessonId: string): boolean {
    const profile = this.getProfile();
    const index = profile.bookmarkedLessonIds.indexOf(lessonId);
    let bookmarked = false;
    if (index > -1) {
      profile.bookmarkedLessonIds.splice(index, 1);
      bookmarked = false;
    } else {
      profile.bookmarkedLessonIds.push(lessonId);
      bookmarked = true;
    }
    this.saveProfile(profile);
    return bookmarked;
  },

  getAllLessons(): LessonPreview[] {
    const profile = this.getProfile();
    return INITIAL_LESSONS.map((lesson) => ({
      ...lesson,
      isCompleted: this.isLessonCompleted(lesson.id),
      isBookmarked: profile.bookmarkedLessonIds.includes(lesson.id),
    }));
  },

  getLessonsByChapter(chapterId: string): LessonPreview[] {
    return this.getAllLessons().filter((l) => l.chapterId === chapterId);
  },

  getQuizForLesson(lessonId: string): QuickQuiz | undefined {
    return SAMPLE_QUIZZES[lessonId];
  },

  // ==================== QUESTION ANALYTICS & STATS (PHẦN VI) ====================
  getAllQuestionAnalytics(): QuestionAnalyticsRecord[] {
    const key = this.getUserKey('analytics_records');
    try {
      const raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw);
    } catch {}
    return [];
  },

  saveQuestionAnalytics(record: QuestionAnalyticsRecord): void {
    const key = this.getUserKey('analytics_records');
    const records = this.getAllQuestionAnalytics();
    
    // Lưu riêng từng câu hỏi, cập nhật lần làm mới nhất cho câu đó
    const existingIndex = records.findIndex((r) => r.questionId === record.questionId);
    if (existingIndex > -1) {
      records[existingIndex] = record;
    } else {
      records.push(record);
    }

    try {
      localStorage.setItem(key, JSON.stringify(records));
      notifyListeners();
    } catch (e) {
      console.error(e);
    }
  },

  getLessonStats(lessonId: string): LessonStats {
    const records = this.getAllQuestionAnalytics().filter((r) => r.lessonId === lessonId);
    const totalQuestions = records.length;
    const firstTryCorrectCount = records.filter((r) => r.isCorrectFirstTry).length;
    const firstTryWrongCount = records.filter((r) => !r.isCorrectFirstTry).length;
    const neededHintCount = records.filter((r) => r.hintsUsedCount > 0).length;
    const completedAfterHintCount = records.filter((r) => r.isFinalCorrect && (!r.isCorrectFirstTry || r.hintsUsedCount > 0)).length;

    return {
      lessonId,
      totalQuestions,
      firstTryCorrectCount,
      firstTryWrongCount,
      neededHintCount,
      completedAfterHintCount,
    };
  },

  getChapterStats(chapterId: string, chapterTitle: string = ''): ChapterStats {
    const records = this.getAllQuestionAnalytics().filter((r) => r.chapterId === chapterId);
    const totalQuestions = records.length;
    const firstTryCorrectCount = records.filter((r) => r.isCorrectFirstTry).length;
    const completedCount = records.filter((r) => r.isFinalCorrect).length;

    const firstTryCorrectRate = totalQuestions > 0 ? Math.round((firstTryCorrectCount / totalQuestions) * 100) : 0;
    const completionRate = totalQuestions > 0 ? Math.round((completedCount / totalQuestions) * 100) : 0;

    return {
      chapterId,
      chapterTitle,
      totalQuestions,
      firstTryCorrectCount,
      completedCount,
      firstTryCorrectRate,
      completionRate,
    };
  },

  getChapterSummaryStats(chapterId: string): ChapterSummaryStats {
    const chapter = INITIAL_CHAPTERS.find((c) => c.id === chapterId);
    const chapterTitle = chapter ? chapter.title : 'Chương I';
    const subjectId = chapter ? chapter.subjectId : 'toan';
    const lessons = INITIAL_LESSONS.filter((l) => l.chapterId === chapterId);
    const completedLessonsCount = lessons.filter((l) => this.isLessonCompleted(l.id)).length;

    let totalQuestions = 0;
    lessons.forEach((l) => {
      const quiz = SAMPLE_QUIZZES[l.id];
      totalQuestions += quiz ? quiz.questions.length : 5;
    });

    const records = this.getAllQuestionAnalytics().filter((r) => r.chapterId === chapterId);
    const firstTryCorrectCount = records.filter((r) => r.isCorrectFirstTry).length;
    const completedQuestionsCount = records.filter((r) => r.isFinalCorrect).length;

    const firstTryRate = totalQuestions > 0 ? Math.round((firstTryCorrectCount / totalQuestions) * 100) : 0;
    const completionRate = totalQuestions > 0 ? Math.round((completedQuestionsCount / totalQuestions) * 100) : 0;

    // Hoàn thành toàn bộ bài học và toàn bộ câu hỏi của chương
    const isChapterCompleted = lessons.length > 0 &&
      completedLessonsCount === lessons.length &&
      completedQuestionsCount >= totalQuestions;

    let badgeTier: BadgeTier | null = null;
    let badgeStars = 0;
    let aiComment: string | undefined = undefined;

    if (isChapterCompleted) {
      if (firstTryRate >= 90) {
        badgeTier = 'gold';
        badgeStars = 3;
      } else if (firstTryRate >= 70) {
        badgeTier = 'silver';
        badgeStars = 2;
      } else if (firstTryRate >= 50) {
        badgeTier = 'bronze';
        badgeStars = 1;
      }

      // Nhận xét chung duy nhất khi hoàn thành chương theo Mục 3
      if (firstTryRate >= 70) {
        aiComment = `Em đã hoàn thành tốt ${chapterTitle}. Hãy tiếp tục phát huy nhé!`;
      } else {
        aiComment = `Em nên ôn tập lại ${chapterTitle} để củng cố kiến thức nhé!`;
      }
    }

    return {
      chapterId,
      chapterTitle,
      subjectId,
      totalLessons: lessons.length,
      completedLessonsCount,
      isChapterCompleted,
      totalQuestions,
      firstTryCorrectCount,
      firstTryRate,
      completionRate,
      badgeTier,
      badgeStars,
      aiComment,
    };
  },

  getAIWeaknessAnalysis(chapterId: string = 'ch_toan_1') {
    const records = this.getAllQuestionAnalytics().filter((r) => r.chapterId === chapterId);
    
    // "Khi dữ liệu chưa đủ, phải ghi rõ: 'Chưa đủ dữ liệu để đánh giá'"
    if (records.length < 3) {
      return {
        hasEnoughData: false,
        message: 'Chưa đủ dữ liệu để đánh giá',
        weakTopics: [],
        frequentHintTopics: [],
        recommendations: [],
        progressComparison: 'Hãy hoàn thành thêm các câu hỏi trong bài để trợ lý AI phân tích điểm mạnh và điểm cần củng cố của bạn.',
      };
    }

    const topicStats: { [topic: string]: { wrongCount: number; hintCount: number; totalAttempts: number } } = {};
    records.forEach((r) => {
      if (!topicStats[r.knowledgeTopic]) {
        topicStats[r.knowledgeTopic] = { wrongCount: 0, hintCount: 0, totalAttempts: 0 };
      }
      if (!r.isCorrectFirstTry) {
        topicStats[r.knowledgeTopic].wrongCount += 1;
      }
      if (r.hintsUsedCount > 0) {
        topicStats[r.knowledgeTopic].hintCount += r.hintsUsedCount;
      }
      topicStats[r.knowledgeTopic].totalAttempts += r.attemptsCount;
    });

    const weakTopics = Object.entries(topicStats)
      .filter(([_, stats]) => stats.wrongCount > 0)
      .map(([topic, stats]) => ({
        topic,
        wrongCount: stats.wrongCount,
        hintCount: stats.hintCount,
      }));

    const frequentHintTopics = Object.entries(topicStats)
      .filter(([_, stats]) => stats.hintCount > 0)
      .map(([topic, stats]) => ({
        topic,
        hintCount: stats.hintCount,
      }));

    const recommendations: { topic: string; action: string; lessonId: string }[] = [];
    weakTopics.forEach((w) => {
      recommendations.push({
        topic: w.topic,
        action: `Quay lại xem kĩ phần kiến thức "${w.topic}" trong Bài 1 để củng cố quy tắc và lời giải ví dụ trong SGK.`,
        lessonId: 'toan_ch1_b1',
      });
    });

    const completedCount = records.filter((r) => r.isFinalCorrect).length;
    const progressComparison = `Đã hoàn thành ${completedCount}/${records.length} câu hỏi. Học sinh kiên trì tiếp thu gợi ý và tự sửa đúng ở các lần thử tiếp theo.`;

    return {
      hasEnoughData: true,
      weakTopics,
      frequentHintTopics,
      recommendations,
      progressComparison,
    };
  },

  getBadges(): AchievementBadge[] {
    return INITIAL_BADGES;
  },

  // ==================== ENGLISH UNIT PROGRESS ====================
  getEnglishQuizRecord(unitId: string, tabId: 'vocab' | 'grammar' | 'practice'): EnglishUnitQuizRecord | null {
    try {
      const key = this.getUserKey(`eng_${unitId}_${tabId}`);
      const raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw);
    } catch {}
    return null;
  },

  saveEnglishQuizRecord(record: EnglishUnitQuizRecord): void {
    try {
      const key = this.getUserKey(`eng_${record.unitId}_${record.tabId}`);
      localStorage.setItem(key, JSON.stringify(record));
      // Award stars and water drops if completed with score
      if (record.score > 0) {
        const profile = this.getProfile();
        profile.totalStars += record.score * 2;
        profile.waterDrops += record.score * 3;
        profile.totalQuestionsAnswered += record.totalQuestions;
        profile.correctQuestionsAnswered += record.score;
        this.saveProfile(profile);
      }
      notifyListeners();
    } catch (e) {
      console.error('Error saving english quiz record', e);
    }
  },
};
