import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Users,
  Building2,
  BookOpen,
  Lock,
  User,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  KeyRound,
  ShieldCheck,
  Check,
  Loader2,
} from 'lucide-react';
import { StorageService, subscribeToStorage } from '../../services/storage';
import { SchoolService } from '../../services/schoolService';
import { UserAccount, UserRole, ClassInfo } from '../../types';
import { db } from '../../services/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { queueMutation } from '../../services/syncEngine';

interface LoginScreenProps {
  onLoginSuccess: (account: UserAccount) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  // Screen 1: 3-Role Selection (null = portal picker, 'student' | 'teacher' | 'admin')
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  // Mandatory First-Time PIN Change Modal State (Section VI)
  const [pendingMustChangePinAccount, setPendingMustChangePinAccount] = useState<UserAccount | null>(null);
  const [newFirstPin, setNewFirstPin] = useState('');
  const [confirmFirstPin, setConfirmFirstPin] = useState('');
  const [pinChangeError, setPinChangeError] = useState('');

  // Disambiguation State when 2 students share identical full name in the same class (Section III)
  const [duplicateCandidates, setDuplicateCandidates] = useState<UserAccount[] | null>(null);
  const [selectedDuplicateId, setSelectedDuplicateId] = useState<string | null>(null);

  // Dynamic School Classes
  const [classes, setClasses] = useState<ClassInfo[]>(() => SchoolService.getClasses());

  // Student Login Form States (Họ tên, Lớp học, Mã PIN - Mục III)
  const [studentFullName, setStudentFullName] = useState('');
  const [studentClassId, setStudentClassId] = useState(() => (classes.length > 0 ? classes[0].name : '8A'));
  const [studentPin, setStudentPin] = useState('');

  // Teacher & Admin Login Form States (Tên đăng nhập, Mã PIN - Mục IV & V)
  const [username, setUsername] = useState('');
  const [staffPin, setStaffPin] = useState('');

  // Status & Feedback & Loading state
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const school = SchoolService.getSchoolInfo();

  // Listen to changes and fetch classes from Firestore
  useEffect(() => {
    const unsub = subscribeToStorage(() => {
      const updated = SchoolService.getClasses();
      setClasses(updated);
    });

    (async () => {
      try {
        const q = query(collection(db, 'classes'), where('schoolId', '==', 'school_main'));
        const snap = await getDocs(q);
        const cloudClasses: ClassInfo[] = [];
        if (!snap.empty) {
          snap.forEach((d) => {
            cloudClasses.push({ ...(d.data() as ClassInfo), id: d.id });
          });
          if (cloudClasses.length > 0) {
            SchoolService.saveClasses(cloudClasses);
          }
        }

        const freshClasses = SchoolService.getClasses();
        setClasses(freshClasses);
        if (!freshClasses.some((c) => c.name === studentClassId)) {
          setStudentClassId(freshClasses[0]?.name || '8A');
        }

        // Ensure 8C is seeded to Firestore if missing in cloud
        const missingInCloud = freshClasses.filter(
          (sc) => !cloudClasses.some((cc) => cc.name === sc.name || cc.id === sc.id)
        );
        for (const mc of missingInCloud) {
          queueMutation({
            idempotencyKey: `class_seed_${mc.id}`,
            collection: 'classes',
            docId: mc.id,
            action: 'create',
            payload: mc,
          });
        }
      } catch (err) {
        console.warn('[LoginScreen] Cloud classes fetch error:', err);
      }
    })();

    return unsub;
  }, []);

  const handleSelectRole = (role: UserRole) => {
    setSelectedRole(role);
    setErrorMsg('');
    setSuccessMsg('');
    setPendingMustChangePinAccount(null);
    setDuplicateCandidates(null);
    setSelectedDuplicateId(null);
    setUsername('');
    setStaffPin('');
    setStudentFullName('');
    setStudentPin('');
    if (classes.length > 0) {
      setStudentClassId(classes[0].name);
    }
  };

  const handleBackToRoles = () => {
    setSelectedRole(null);
    setErrorMsg('');
    setSuccessMsg('');
    setPendingMustChangePinAccount(null);
    setDuplicateCandidates(null);
  };

  // ==================== LOGIN HANDLER FOR STUDENT (MỤC III & VIII) ====================
  const handleStudentLogin = async (e: React.FormEvent, specificId?: string) => {
    e.preventDefault();
    if (isSubmitting) return;
    setErrorMsg('');

    if (!studentFullName.trim()) {
      setErrorMsg('Không tìm thấy tài khoản.');
      return;
    }
    if (!studentPin.trim() || studentPin.length !== 6) {
      setErrorMsg('Không tìm thấy tài khoản.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await StorageService.loginStudent(
        studentFullName,
        studentClassId,
        studentPin,
        specificId || selectedDuplicateId || undefined
      );

      // If multiple students share the exact same full name in this class, show disambiguation step
      if (res.requiresSelection && res.duplicateCandidates) {
        setDuplicateCandidates(res.duplicateCandidates);
        return;
      }

      if (!res.success || !res.account) {
        // Yêu cầu Mục VIII: "Khi đăng nhập không thành công, chỉ hiển thị thông báo chung: 'Không tìm thấy tài khoản.'"
        setErrorMsg(res.error || 'Không tìm thấy tài khoản.');
        return;
      }

      // Check account locked
      if (res.account.isLocked) {
        setErrorMsg('Tài khoản của bạn đã bị khóa bởi Quản trị viên. Vui lòng liên hệ quản trị hệ thống.');
        StorageService.logout();
        return;
      }

      // Yêu cầu Mục VI: Bắt buộc đổi mã PIN ở lần đăng nhập đầu tiên
      if (res.mustChangePin) {
        setPendingMustChangePinAccount(res.account);
        return;
      }

      onLoginSuccess(res.account);
    } catch {
      setErrorMsg('Không tìm thấy tài khoản.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==================== LOGIN HANDLER FOR TEACHER / ADMIN (MỤC IV, V & VIII) ====================
  const handleStaffLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setErrorMsg('');

    if (!username.trim() || !staffPin.trim() || (!username.includes('@') && staffPin.length !== 6)) {
      // Mục VIII: Chỉ hiển thị thông báo chung: "Không tìm thấy tài khoản."
      setErrorMsg('Không tìm thấy tài khoản.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await StorageService.login(username, staffPin, selectedRole || undefined);
      if (!res.success || !res.account) {
        setErrorMsg(res.error || 'Không tìm thấy tài khoản.');
        return;
      }

      // Check account locked
      if (res.account.isLocked) {
        setErrorMsg('Tài khoản của bạn đã bị khóa bởi Quản trị viên. Vui lòng liên hệ quản trị hệ thống.');
        StorageService.logout();
        return;
      }

      // Validate role integrity: user cannot escalate role
      const effectiveRole: UserRole = res.account.role || 'student';
      if (selectedRole === 'teacher' && effectiveRole !== 'teacher' && effectiveRole !== 'admin') {
        setErrorMsg('Không tìm thấy tài khoản.');
        StorageService.logout();
        return;
      }
      if (selectedRole === 'admin' && effectiveRole !== 'admin') {
        setErrorMsg('Không tìm thấy tài khoản.');
        StorageService.logout();
        return;
      }

      // Yêu cầu Mục VI: Bắt buộc đổi mã PIN ở lần đăng nhập đầu tiên
      if (res.mustChangePin) {
        setPendingMustChangePinAccount(res.account);
        return;
      }

      onLoginSuccess(res.account);
    } catch {
      setErrorMsg('Không tìm thấy tài khoản.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==================== MANDATORY FIRST-TIME PIN CHANGE SUBMIT (MỤC VI) ====================
  const handleConfirmFirstPinChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setPinChangeError('');

    if (!pendingMustChangePinAccount) return;

    if (!/^\d{6}$/.test(newFirstPin)) {
      setPinChangeError('Mã PIN mới phải gồm đúng 6 chữ số (0-9).');
      return;
    }
    if (newFirstPin === '123456') {
      setPinChangeError('Mã PIN mới phải khác mã PIN mặc định 123456.');
      return;
    }
    if (newFirstPin !== confirmFirstPin) {
      setPinChangeError('Mã PIN xác nhận không trùng khớp.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await StorageService.completeFirstTimePinChange(pendingMustChangePinAccount.id, newFirstPin);
      if (res.success && res.account) {
        onLoginSuccess(res.account);
      } else {
        setPinChangeError(res.error || 'Có lỗi khi cập nhật mã PIN.');
      }
    } catch {
      setPinChangeError('Có lỗi khi cập nhật mã PIN.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==================== SCREEN: FIRST-TIME PIN CHANGE (MỤC VI) ====================
  if (pendingMustChangePinAccount) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-slate-50 to-sky-50 flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-sm bg-white rounded-3xl border border-amber-200 shadow-2xl p-6 sm:p-7 space-y-5 animate-in fade-in zoom-in-95">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-amber-500/25">
              <KeyRound className="w-7 h-7" />
            </div>
            <h2 className="text-lg font-black text-slate-900 leading-snug">
              Bắt buộc đổi mã PIN lần đầu
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Xin chào <strong>{pendingMustChangePinAccount.displayName}</strong>. Để bảo vệ tài khoản, em/thầy cô vui lòng đổi mã PIN khởi tạo sang mã PIN mới của riêng mình.
            </p>
          </div>

          {pinChangeError && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{pinChangeError}</span>
            </div>
          )}

          <form onSubmit={handleConfirmFirstPinChange} className="space-y-3.5 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Mã PIN mới (6 chữ số):
              </label>
              <div className="relative">
                <input
                  type="password"
                  maxLength={6}
                  inputMode="numeric"
                  value={newFirstPin}
                  onChange={(e) => setNewFirstPin(e.target.value.replace(/\D/g, ''))}
                  placeholder="••••••"
                  className="w-full min-h-[44px] pl-9 pr-3 text-xs font-mono tracking-widest rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                  autoFocus
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Phải khác 123456 và gồm 6 chữ số</p>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Nhập lại mã PIN xác nhận:
              </label>
              <div className="relative">
                <input
                  type="password"
                  maxLength={6}
                  inputMode="numeric"
                  value={confirmFirstPin}
                  onChange={(e) => setConfirmFirstPin(e.target.value.replace(/\D/g, ''))}
                  placeholder="••••••"
                  className="w-full min-h-[44px] pl-9 pr-3 text-xs font-mono tracking-widest rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full min-h-[44px] rounded-2xl bg-amber-600 hover:bg-amber-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-xs shadow-md shadow-amber-600/25 transition cursor-pointer mt-2 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Đang lưu mã PIN...</span>
                </>
              ) : (
                <span>Lưu mã PIN mới và Bắt đầu</span>
              )}
            </button>
          </form>

          <button
            type="button"
            onClick={() => {
              setPendingMustChangePinAccount(null);
              StorageService.logout();
            }}
            className="w-full text-center text-xs text-slate-500 hover:text-slate-800 cursor-pointer pt-1"
          >
            Hủy và quay lại
          </button>
        </div>
      </div>
    );
  }

  // ==================== SCREEN 1: 3-ROLE SELECTION (MÀN HÌNH ĐẦU TIÊN - MỤC II) ====================
  if (!selectedRole) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-emerald-50/40 to-indigo-50/50 flex flex-col justify-center items-center p-4 selection:bg-sky-200">
        <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl border border-sky-100 shadow-2xl p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95">
          {/* Header & Brand */}
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-sky-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/25">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">
              HỌC VUI MỖI NGÀY
            </h1>
            <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 inline-block px-3 py-1 rounded-full border border-emerald-200/80">
              Khối 8 • Năm học {school.academicYear || '2026 - 2027'}
            </p>
            <p className="text-xs text-slate-500 pt-1">
              Vui lòng chọn vai trò của bạn để truy cập:
            </p>
          </div>

          {/* 3 Portal Choices (Section II) */}
          <div className="space-y-3 pt-1">
            {/* 1. HỌC SINH */}
            <button
              type="button"
              onClick={() => handleSelectRole('student')}
              className="w-full p-4 rounded-2xl border-2 border-sky-200 bg-gradient-to-r from-sky-50/80 to-white hover:border-sky-500 hover:shadow-md text-left transition-all flex items-center justify-between gap-3.5 group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-sky-600 transition-colors">
                    1. HỌC SINH
                  </h2>
                  <p className="text-xs text-slate-500">
                    Đăng nhập bằng Họ tên, Lớp học và Mã PIN (Không cần nhớ mã HS)
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-sky-400 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            {/* 2. GIÁO VIÊN */}
            <button
              type="button"
              onClick={() => handleSelectRole('teacher')}
              className="w-full p-4 rounded-2xl border-2 border-emerald-200 bg-gradient-to-r from-emerald-50/80 to-white hover:border-emerald-500 hover:shadow-md text-left transition-all flex items-center justify-between gap-3.5 group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-emerald-700 transition-colors">
                    2. GIÁO VIÊN
                  </h2>
                  <p className="text-xs text-slate-500">
                    Cổng Giáo viên: Xem lớp được phân công, duyệt phiếu, phân tích học tập
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-500 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            {/* 3. QUẢN TRỊ VIÊN */}
            <button
              type="button"
              onClick={() => handleSelectRole('admin')}
              className="w-full p-4 rounded-2xl border-2 border-amber-200 bg-gradient-to-r from-amber-50/80 to-white hover:border-amber-500 hover:shadow-md text-left transition-all flex items-center justify-between gap-3.5 group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-amber-700 transition-colors">
                    3. QUẢN TRỊ VIÊN
                  </h2>
                  <p className="text-xs text-slate-500">
                    Quản trị hệ thống: Giáo viên, học sinh, lớp, phân công, sao lưu
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          </div>

          <div className="pt-2 text-center text-[11px] text-slate-400">
            Năm học {school.academicYear || '2026 - 2027'} • Bảo mật thông tin học sinh
          </div>
        </div>
      </div>
    );
  }

  // ==================== SCREEN 2: DEDICATED LOGIN PER ROLE ====================
  const roleTitle =
    selectedRole === 'student'
      ? 'Cổng Học Sinh'
      : selectedRole === 'teacher'
      ? 'Cổng Giáo Viên Bộ Môn'
      : 'Cổng Quản Trị Viên Hệ Thống';

  const roleColorBg =
    selectedRole === 'student'
      ? 'from-sky-500 to-blue-600'
      : selectedRole === 'teacher'
      ? 'from-emerald-600 to-teal-700'
      : 'from-amber-500 to-amber-700';

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
        {/* Header with back button */}
        <div className={`bg-gradient-to-r ${roleColorBg} p-5 text-white`}>
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToRoles}
              className="flex items-center gap-1 text-xs font-bold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-xl transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Đổi vai trò</span>
            </button>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded">
              {school.academicYear || '2026 - 2027'}
            </span>
          </div>

          <div className="mt-3 flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              {selectedRole === 'student' ? (
                <GraduationCap className="w-5 h-5" />
              ) : selectedRole === 'teacher' ? (
                <Users className="w-5 h-5" />
              ) : (
                <Building2 className="w-5 h-5" />
              )}
            </div>
            <div>
              <h2 className="font-extrabold text-base leading-tight">{roleTitle}</h2>
              <p className="text-[11px] text-white/80">Khối 8 • Năm học {school.academicYear || '2026 - 2027'}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span className="leading-snug">{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
              <span className="leading-snug">{successMsg}</span>
            </div>
          )}

          {/* ==================== A. CỔNG HỌC SINH (MỤC III) ==================== */}
          {selectedRole === 'student' && (
            <div>
              {/* If duplicate names exist in this class, show easy disambiguation cards */}
              {duplicateCandidates ? (
                <div className="space-y-3 animate-in fade-in">
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                    <p className="font-bold">Tìm thấy nhiều bạn có cùng họ tên trong lớp:</p>
                    <p className="text-[11px] text-amber-800">
                      Vui lòng chạm chọn tài khoản của em để tiếp tục xác nhận mã PIN:
                    </p>
                  </div>

                  <div className="space-y-2">
                    {duplicateCandidates.map((cand) => (
                      <button
                        key={cand.id}
                        type="button"
                        onClick={(e) => {
                          setSelectedDuplicateId(cand.id);
                          setDuplicateCandidates(null);
                          handleStudentLogin(e, cand.id);
                        }}
                        className="w-full p-3 rounded-xl border border-sky-200 bg-sky-50/50 hover:bg-sky-100/70 text-left transition flex items-center justify-between cursor-pointer"
                      >
                        <div>
                          <div className="font-bold text-xs text-slate-900">{cand.displayName}</div>
                          <div className="text-[11px] text-slate-500">
                            {cand.secondaryIdentifier ? `Phân biệt: ${cand.secondaryIdentifier}` : (cand.className ? `Lớp: ${cand.className}` : 'Chưa phân lớp')}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-sky-600" />
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setDuplicateCandidates(null)}
                    className="w-full text-center text-xs text-slate-500 hover:text-slate-800 cursor-pointer pt-2"
                  >
                    Quay lại
                  </button>
                </div>
              ) : (
                <form onSubmit={handleStudentLogin} className="space-y-3.5 text-xs">
                  {/* 1. Họ và tên (Mục III) */}
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      1. Họ và tên học sinh:
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={studentFullName}
                        onChange={(e) => setStudentFullName(e.target.value)}
                        placeholder="Ví dụ: Trần Minh Quang"
                        className="w-full min-h-[44px] pl-9 pr-3 text-xs rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        required
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    </div>
                  </div>

                  {/* 2. Lớp học (Đồng bộ theo danh sách lớp thực tế của trường) */}
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      2. Lớp học:
                    </label>
                    <select
                      value={studentClassId}
                      onChange={(e) => setStudentClassId(e.target.value)}
                      className="w-full min-h-[44px] px-3 text-xs font-bold rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      {classes.map((cls) => (
                        <option key={cls.id} value={cls.name}>
                          {cls.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 3. Mã PIN (Mục III & VI - Không hiển thị mật khẩu mặc định) */}
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      3. Mã PIN (6 chữ số):
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        maxLength={6}
                        inputMode="numeric"
                        value={studentPin}
                        onChange={(e) => setStudentPin(e.target.value.replace(/\D/g, ''))}
                        placeholder="••••••"
                        className="w-full min-h-[44px] pl-9 pr-3 text-xs font-mono tracking-widest rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        required
                      />
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[44px] rounded-2xl bg-sky-600 hover:bg-sky-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-xs shadow-md shadow-sky-600/20 transition cursor-pointer mt-2 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Đang xác thực...</span>
                      </>
                    ) : (
                      <span>Vào góc học tập</span>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400 pt-1">
                    Ứng dụng học tập • Khối 8
                  </p>
                </form>
              )}
            </div>
          )}

          {/* ==================== B. CỔNG GIÁO VIÊN (MỤC IV) ==================== */}
          {selectedRole === 'teacher' && (
            <form onSubmit={handleStaffLogin} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Tên đăng nhập Giáo viên:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Ví dụ: giaovienlan"
                    className="w-full min-h-[44px] pl-9 pr-3 text-xs rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Mã PIN (6 chữ số):
                </label>
                <div className="relative">
                  <input
                    type="password"
                    maxLength={6}
                    inputMode="numeric"
                    value={staffPin}
                    onChange={(e) => setStaffPin(e.target.value.replace(/\D/g, ''))}
                    placeholder="••••••"
                    className="w-full min-h-[44px] pl-9 pr-3 text-xs font-mono tracking-widest rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[44px] rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition cursor-pointer mt-2 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Đang xác thực...</span>
                  </>
                ) : (
                  <span>Đăng nhập Cổng Giáo Viên</span>
                )}
              </button>
            </form>
          )}

          {/* ==================== C. CỔNG QUẢN TRỊ VIÊN (MỤC V) ==================== */}
          {selectedRole === 'admin' && (
            <form onSubmit={handleStaffLogin} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Email hoặc Tên tài khoản Quản trị:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Email Firebase Console hoặc tên đăng nhập"
                    className="w-full min-h-[44px] pl-9 pr-3 text-xs rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Mật khẩu hoặc Mã PIN:
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={staffPin}
                    onChange={(e) => setStaffPin(e.target.value)}
                    placeholder="Mật khẩu tài khoản hoặc mã PIN"
                    className="w-full min-h-[44px] pl-9 pr-3 text-xs font-mono tracking-widest rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                </div>
                <p className="text-[10px] text-slate-500 mt-1">
                  💡 Hỗ trợ đăng nhập trực tiếp bằng tài khoản Email quản trị tạo từ Firebase Console.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[44px] rounded-2xl bg-amber-600 hover:bg-amber-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-xs shadow-md shadow-amber-600/20 transition cursor-pointer mt-2 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Đang xác thực...</span>
                  </>
                ) : (
                  <span>Đăng nhập Cổng Quản Trị Viên</span>
                )}
              </button>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Quyền hạn được xác thực bảo mật và bảo vệ trên hệ thống HỌC VUI MỖI NGÀY.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
