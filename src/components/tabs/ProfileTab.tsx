import React, { useState } from 'react';
import { User, KeyRound, Shield, LogOut, Check, AlertCircle, Copy, Edit2, Sparkles, Droplets, Star } from 'lucide-react';
import { StudentProfile, UserAccount } from '../../types';
import { StorageService } from '../../services/storage';

interface ProfileTabProps {
  currentUser: UserAccount;
  profile: StudentProfile;
  onLogout: () => void;
  onUpdateProfile: (updated: StudentProfile) => void;
}

export const ProfileTab: React.FC<ProfileTabProps> = ({
  currentUser,
  profile,
  onLogout,
  onUpdateProfile,
}) => {
  const [isChangingPin, setIsChangingPin] = useState(false);
  const [currentPin, setCurrentPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmNewPin, setConfirmNewPin] = useState('');

  const [pinError, setPinError] = useState('');
  const [pinSuccess, setPinSuccess] = useState('');

  const [showRecoveryCode, setShowRecoveryCode] = useState(false);
  const [hasCopiedCode, setHasCopiedCode] = useState(false);

  // Profile Edit
  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [editName, setEditName] = useState(profile.name);

  const handleChangePin = async (e: React.FormEvent) => {
    e.preventDefault();
    setPinError('');
    setPinSuccess('');

    if (!/^\d{6}$/.test(newPin)) {
      setPinError('Mã PIN mới phải gồm đúng 6 chữ số (0-9).');
      return;
    }
    if (newPin !== confirmNewPin) {
      setPinError('Xác nhận mã PIN mới không trùng khớp.');
      return;
    }

    const res = await StorageService.changePin(currentPin, newPin);
    if (res.success) {
      setPinSuccess('Đổi mã PIN thành công!');
      setCurrentPin('');
      setNewPin('');
      setConfirmNewPin('');
      setTimeout(() => {
        setIsChangingPin(false);
        setPinSuccess('');
      }, 2000);
    } else {
      setPinError(res.error || 'Đổi mã PIN thất bại.');
    }
  };

  const handleSaveInfo = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({
      ...profile,
      name: editName.trim() || profile.name,
      className: currentUser.className || profile.className,
      classId: currentUser.classId || profile.classId,
    });
    setIsEditingInfo(false);
  };

  const handleCopyRecoveryCode = () => {
    navigator.clipboard.writeText(currentUser.recoveryCode);
    setHasCopiedCode(true);
    setTimeout(() => setHasCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-150 pb-6">
      <div>
        <h1 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
          Cá nhân & Tài khoản
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Thông tin học sinh và bảo mật trên thiết bị
        </p>
      </div>

      {/* User Info Card */}
      <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-extrabold text-lg shrink-0 shadow-xs">
            {profile.name.charAt(0).toUpperCase()}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100 truncate">
                {currentUser.displayName || profile.name}
              </h2>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                {currentUser.className || profile.className ? `Lớp ${currentUser.className || profile.className}` : 'Chưa phân lớp'}
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsEditingInfo(!isEditingInfo)}
            className="p-2 rounded-xl text-slate-400 hover:text-sky-600 hover:bg-sky-50 transition cursor-pointer"
            title="Chỉnh sửa thông tin"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        </div>

        {/* Edit Info Form */}
        {isEditingInfo && (
          <form onSubmit={handleSaveInfo} className="p-3.5 rounded-2xl bg-sky-50/50 dark:bg-slate-800/50 border border-sky-100 dark:border-slate-700 space-y-2.5 animate-in fade-in">
            <div>
              <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Tên hiển thị:
              </label>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="w-full text-xs p-2 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
                required
              />
            </div>
            <div className="flex justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setIsEditingInfo(false)}
                className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-500"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-3.5 py-1 rounded-lg text-xs font-bold bg-sky-500 text-white"
              >
                Lưu
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Account Security (PIN & Recovery Code) */}
      <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        <h3 className="text-xs font-extrabold text-slate-900 dark:text-slate-100 uppercase tracking-wider flex items-center gap-1.5">
          <Shield className="w-4 h-4 text-sky-600" />
          <span>Bảo mật tài khoản trên máy</span>
        </h3>

        {/* Recovery Code Display */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
              Mã khôi phục riêng:
            </span>
            <button
              onClick={() => setShowRecoveryCode(!showRecoveryCode)}
              className="text-xs text-sky-600 font-bold hover:underline cursor-pointer"
            >
              {showRecoveryCode ? 'Ẩn mã' : 'Xem mã'}
            </button>
          </div>

          {showRecoveryCode && (
            <div className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-900 border border-sky-200 font-mono font-bold text-xs text-sky-800 dark:text-sky-300 animate-in fade-in">
              <span>{currentUser.recoveryCode}</span>
              <button
                onClick={handleCopyRecoveryCode}
                className="px-2 py-0.5 rounded-md bg-sky-100 hover:bg-sky-200 text-sky-800 text-[11px] flex items-center gap-1 cursor-pointer"
              >
                {hasCopiedCode ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{hasCopiedCode ? 'Đã sao chép' : 'Sao chép'}</span>
              </button>
            </div>
          )}
          <p className="text-[11px] text-slate-400">
            Dùng để đặt lại mã PIN khi bạn lỡ quên.
          </p>
        </div>

        {/* Change PIN Accordion */}
        <div className="pt-1">
          {!isChangingPin ? (
            <button
              onClick={() => setIsChangingPin(true)}
              className="w-full min-h-[42px] px-3.5 rounded-2xl border border-sky-200 dark:border-slate-700 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center justify-center gap-2 hover:bg-sky-50 transition cursor-pointer"
            >
              <KeyRound className="w-4 h-4" />
              <span>Đổi mã PIN 6 chữ số</span>
            </button>
          ) : (
            <form onSubmit={handleChangePin} className="p-3.5 rounded-2xl bg-sky-50/40 dark:bg-slate-800/40 border border-sky-200 dark:border-slate-700 space-y-2.5 animate-in fade-in">
              <span className="font-extrabold text-xs text-slate-900 dark:text-slate-100 block">
                Đổi mã PIN
              </span>

              {pinError && (
                <div className="p-2 rounded-xl bg-rose-50 text-[11px] text-rose-700 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{pinError}</span>
                </div>
              )}

              {pinSuccess && (
                <div className="p-2 rounded-xl bg-emerald-50 text-[11px] text-emerald-700 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>{pinSuccess}</span>
                </div>
              )}

              <input
                type="password"
                inputMode="numeric"
                maxLength={6}
                value={currentPin}
                onChange={(e) => setCurrentPin(e.target.value.replace(/\D/g, ''))}
                placeholder="Mã PIN hiện tại"
                className="w-full text-xs p-2 font-mono tracking-widest text-center rounded-xl border border-slate-200 bg-white text-slate-900"
                required
              />

              <input
                type="password"
                inputMode="numeric"
                maxLength={6}
                value={newPin}
                onChange={(e) => setNewPin(e.target.value.replace(/\D/g, ''))}
                placeholder="Mã PIN mới (6 chữ số)"
                className="w-full text-xs p-2 font-mono tracking-widest text-center rounded-xl border border-slate-200 bg-white text-slate-900"
                required
              />

              <input
                type="password"
                inputMode="numeric"
                maxLength={6}
                value={confirmNewPin}
                onChange={(e) => setConfirmNewPin(e.target.value.replace(/\D/g, ''))}
                placeholder="Nhập lại mã PIN mới"
                className="w-full text-xs p-2 font-mono tracking-widest text-center rounded-xl border border-slate-200 bg-white text-slate-900"
                required
              />

              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsChangingPin(false)}
                  className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-500"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-3.5 py-1 rounded-lg text-xs font-bold bg-sky-500 text-white"
                >
                  Cập nhật PIN
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Logout button */}
      <div className="pt-2">
        <button
          onClick={onLogout}
          className="w-full min-h-[46px] rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-rose-600 dark:text-rose-400 font-bold text-xs hover:bg-rose-50 dark:hover:bg-rose-950/20 transition flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
        >
          <LogOut className="w-4 h-4" />
          <span>Đăng xuất / Chuyển tài khoản</span>
        </button>
        <p className="text-[11px] text-slate-400 text-center mt-1.5">
          Dữ liệu học tập và khu vườn được lưu trữ an toàn trên thiết bị này.
        </p>
      </div>
    </div>
  );
};
