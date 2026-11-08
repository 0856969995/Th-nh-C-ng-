import React from 'react';
import { BookOpen, Droplets, Star, ChevronLeft, ShieldCheck, GraduationCap } from 'lucide-react';
import { StudentProfile, UserAccount } from '../../types';
import { PWAInstallButton } from '../common/PWAInstallButton';

interface MobileHeaderProps {
  profile: StudentProfile;
  currentUser?: UserAccount | null;
  title?: string;
  onBack?: () => void;
  onOpenTeacherDashboard?: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  profile,
  currentUser,
  title,
  onBack,
  onOpenTeacherDashboard,
}) => {
  const isTeacherOrAdmin = currentUser?.role === 'teacher' || currentUser?.role === 'admin';

  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-sky-100 dark:border-slate-800 transition-colors shadow-xs">
      <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between gap-2">
        {/* Left: Back button or App Brand */}
        <div className="flex items-center gap-2 min-w-0">
          {onBack ? (
            <button
              onClick={onBack}
              className="min-h-[40px] px-2 -ml-2 rounded-xl text-sky-700 dark:text-sky-300 hover:bg-sky-50 dark:hover:bg-slate-800 flex items-center gap-1 text-xs font-bold transition cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Quay lại</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-sky-500 text-white flex items-center justify-center shadow-xs">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap">
                HỌC VUI MỖI NGÀY
              </span>
            </div>
          )}
        </div>

        {/* Center Title if specified and not overflowing */}
        {title && onBack && (
          <span className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate max-w-[120px]">
            {title}
          </span>
        )}

        {/* Right Actions: PWA Install + Teacher portal link + Garden Rewards */}
        <div className="flex items-center gap-1.5 shrink-0">
          <PWAInstallButton />

          {isTeacherOrAdmin && onOpenTeacherDashboard && (
            <button
              onClick={onOpenTeacherDashboard}
              className="flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-1 text-[11px] font-bold hover:bg-emerald-200 transition"
              title="Chuyển sang Cổng Giáo viên / Quản trị"
            >
              <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
              <span className="hidden sm:inline">Cổng GV</span>
            </button>
          )}

          {/* Water drops for garden */}
          <div
            title={`Bạn có ${profile.waterDrops} giọt nước để tưới cây trong Khu vườn`}
            className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-bold"
          >
            <Droplets className="w-3.5 h-3.5 text-sky-500 fill-sky-500" />
            <span className="tabular-nums font-mono text-[11px]">{profile.waterDrops}</span>
          </div>

          {/* Stars */}
          <div
            title={`Bạn có ${profile.totalStars} sao tích lũy`}
            className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold"
          >
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="tabular-nums font-mono text-[11px]">{profile.totalStars}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
