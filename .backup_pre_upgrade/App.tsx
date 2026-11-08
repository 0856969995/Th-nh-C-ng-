/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MobileHeader } from './components/layout/MobileHeader';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { LoginScreen } from './components/auth/LoginScreen';
import { LessonsTab } from './components/tabs/LessonsTab';
import { QuestionsTab } from './components/tabs/QuestionsTab';
import { AchievementsTab } from './components/tabs/AchievementsTab';
import { GardenTab } from './components/tabs/GardenTab';
import { ProfileTab } from './components/tabs/ProfileTab';
import { TeacherDashboard } from './components/teacher/TeacherDashboard';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { OfflineIndicator } from './components/common/OfflineIndicator';
import { StorageService, subscribeToStorage } from './services/storage';
import { AuthService } from './services/authService';
import { auth } from './services/firebase';
import { initRealtimeSyncForUser, stopRealtimeSync } from './services/syncEngine';
import { MainTabType, UserAccount, UserRole } from './types';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [profile, setProfile] = useState(() => StorageService.getProfile());
  const [badges, setBadges] = useState(() => StorageService.getBadges());
  const [mistakes, setMistakes] = useState(() => StorageService.getWrongMistakes());

  // View override for Admin / Teacher previewing student or teacher portal
  const [viewOverride, setViewOverride] = useState<'admin' | 'teacher' | 'student' | null>(null);

  // Main 5 tabs for students: lessons, questions, achievements, garden, profile
  const [activeTab, setActiveTab] = useState<MainTabType>('lessons');
  const [jumpToLessonId, setJumpToLessonId] = useState<string | null>(null);
  const [jumpToReadLessonId, setJumpToReadLessonId] = useState<string | null>(null);

  // 1. Firebase Auth state restoration & verified cloud profile validation
  useEffect(() => {
    const unsubAuth = auth.onAuthStateChanged(async (fbUser) => {
      if (fbUser) {
        try {
          const verifiedUser = await AuthService.getVerifiedUser(fbUser.uid);
          if (verifiedUser) {
            setCurrentUser(verifiedUser);
            initRealtimeSyncForUser(verifiedUser);
          } else {
            const cached = StorageService.getCurrentUser();
            if (cached && (cached.id === fbUser.uid || cached.email === fbUser.email)) {
              setCurrentUser(cached);
              initRealtimeSyncForUser(cached);
            } else {
              setCurrentUser(null);
              stopRealtimeSync();
            }
          }
        } catch (e) {
          console.warn('[App] Error verifying auth session from Firestore:', e);
          const cached = StorageService.getCurrentUser();
          if (cached) {
            setCurrentUser(cached);
          }
        }
      } else {
        setCurrentUser(null);
        stopRealtimeSync();
      }
      setIsLoadingAuth(false);
    });

    return () => {
      unsubAuth();
      stopRealtimeSync();
    };
  }, []);

  // 2. Sync state whenever StorageService data updates
  useEffect(() => {
    const unsubscribe = subscribeToStorage(() => {
      const current = StorageService.getCurrentUser();
      if (current) {
        setCurrentUser(current);
      }
      setProfile(StorageService.getProfile());
      setBadges(StorageService.getBadges());
      setMistakes(StorageService.getWrongMistakes());
    });
    return unsubscribe;
  }, []);

  const handleLoginSuccess = (account: UserAccount) => {
    setCurrentUser(account);
    setProfile(StorageService.getProfile());
    setViewOverride(null); // Return to their native portal
    setActiveTab('lessons');
    initRealtimeSyncForUser(account);
  };

  const handleLogout = async () => {
    stopRealtimeSync();
    await AuthService.logout();
    StorageService.logout();
    setCurrentUser(null);
    setViewOverride(null);
  };

  const handleUpdateProfile = (updatedProfile: typeof profile) => {
    StorageService.saveProfile(updatedProfile);
  };

  const handleGoToQuestionsForLesson = (lessonId: string) => {
    setJumpToLessonId(lessonId);
    setActiveTab('questions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Initial auth session check
  if (isLoadingAuth) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-700">
        <div className="w-9 h-9 border-3 border-sky-600 border-t-transparent rounded-full animate-spin mb-3" />
        <p className="text-xs font-semibold text-slate-500">Đang khôi phục phiên đăng nhập an toàn...</p>
      </div>
    );
  }

  // If not logged in, show the 3-role portal selection & login screen
  if (!currentUser) {
    return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
  }

  // Determine current active view based on actual verified role (Section VI.1)
  const userRole: UserRole = currentUser.role || 'student';

  // Security guard: Students can never access teacher or admin views
  let effectiveView: 'admin' | 'teacher' | 'student' = 'student';
  if (userRole === 'admin') {
    effectiveView = viewOverride || 'admin';
  } else if (userRole === 'teacher') {
    effectiveView = viewOverride === 'student' ? 'student' : 'teacher';
  } else {
    effectiveView = 'student';
  }

  // ==================== 1. ADMIN PORTAL ====================
  if (effectiveView === 'admin' && userRole === 'admin') {
    return (
      <>
        <AdminDashboard
          currentUser={currentUser}
          onLogout={handleLogout}
          onSwitchToStudentView={() => setViewOverride('student')}
          onSwitchToTeacherView={() => setViewOverride('teacher')}
        />
        <OfflineIndicator />
      </>
    );
  }

  // ==================== 2. TEACHER PORTAL ====================
  if (effectiveView === 'teacher' && (userRole === 'teacher' || userRole === 'admin')) {
    return (
      <>
        {userRole === 'admin' && (
          <div className="bg-amber-500 text-slate-950 px-4 py-2 text-xs font-bold flex items-center justify-between">
            <span>Đang xem thử Cổng Giáo viên (Tài khoản Quản trị viên)</span>
            <button
              onClick={() => setViewOverride('admin')}
              className="flex items-center gap-1 rounded-lg bg-slate-900 text-white px-2.5 py-1 text-[11px] font-bold hover:bg-slate-800 transition"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Quay về Cổng Quản trị</span>
            </button>
          </div>
        )}
        <TeacherDashboard
          currentUser={currentUser}
          onLogout={handleLogout}
          onSwitchToStudentView={() => setViewOverride('student')}
        />
        <OfflineIndicator />
      </>
    );
  }

  // ==================== 3. STUDENT LEARNING PORTAL ====================
  const unresolvedMistakesCount = mistakes.filter((m) => !m.resolved).length;

  return (
    <div className="min-h-screen bg-sky-100/40 dark:bg-slate-950 flex flex-col items-center font-sans transition-colors selection:bg-sky-200">
      {/* Return Banner if Admin or Teacher is previewing Student interface */}
      {userRole !== 'student' && (
        <div className="w-full bg-slate-900 text-white px-4 py-2 text-xs font-bold flex items-center justify-between shadow-md">
          <span>
            Đang xem thử Giao diện Học sinh ({userRole === 'admin' ? 'Quản trị viên' : 'Giáo viên'})
          </span>
          <button
            onClick={() => setViewOverride(userRole === 'admin' ? 'admin' : 'teacher')}
            className="flex items-center gap-1 rounded-lg bg-amber-500 text-slate-950 px-2.5 py-1 text-[11px] font-bold hover:bg-amber-400 transition"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Quay về Cổng {userRole === 'admin' ? 'Quản trị' : 'Giáo viên'}</span>
          </button>
        </div>
      )}

      {/* Mobile App Viewport Container: 375px - 440px on mobile, neatly centered on tablet/desktop */}
      <div className="w-full max-w-md min-h-screen bg-slate-50/70 dark:bg-slate-900 flex flex-col relative shadow-2xl border-x border-sky-100/60 dark:border-slate-800">
        {/* Sticky Mobile App Top Bar */}
        <MobileHeader
          profile={profile}
          currentUser={currentUser}
          onOpenTeacherDashboard={
            userRole === 'admin'
              ? () => setViewOverride('admin')
              : userRole === 'teacher'
              ? () => setViewOverride('teacher')
              : undefined
          }
        />

        {/* Scrollable Tab Content Container */}
        <main className="flex-1 px-4 pt-3 pb-24 overflow-y-auto">
          {/* TAB 1: BÀI HỌC (3 Môn -> Các chương -> Bài 1, 2, 3... -> Chi tiết) */}
          {activeTab === 'lessons' && (
            <LessonsTab
              initialLessonId={jumpToReadLessonId}
              onGoToQuestionsForLesson={handleGoToQuestionsForLesson}
            />
          )}

          {/* TAB 2: CÂU HỎI (3 Môn -> Các chương -> Bài 1, 2, 3... -> Luyện câu hỏi + Trợ lý gợi ý học tập) */}
          {activeTab === 'questions' && (
            <QuestionsTab
              initialLessonId={jumpToLessonId}
              onGoToLesson={(lessonId) => {
                setJumpToReadLessonId(lessonId);
                setActiveTab('lessons');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {/* TAB 3: THÀNH TÍCH (Số bài xong, kết quả câu hỏi, tiến độ, nội dung cần ôn tập) */}
          {activeTab === 'achievements' && (
            <AchievementsTab
              profile={profile}
              badges={badges}
              mistakes={mistakes}
              onOpenQuestionsTab={() => setActiveTab('questions')}
            />
          )}

          {/* TAB 4: KHU VƯỜN (Cây trồng, hạt giống, điểm thưởng và chăm sóc cây) */}
          {activeTab === 'garden' && <GardenTab profile={profile} />}

          {/* TAB 5: CÁ NHÂN (Tên học sinh, hồ sơ, đổi mã PIN, mã khôi phục, đăng xuất) */}
          {activeTab === 'profile' && (
            <ProfileTab
              currentUser={currentUser}
              profile={profile}
              onLogout={handleLogout}
              onUpdateProfile={handleUpdateProfile}
            />
          )}
        </main>

        {/* Fixed 5-Tab Mobile Bottom Navigation Bar */}
        <MobileBottomNav
          activeTab={activeTab}
          onChangeTab={(tab) => {
            setActiveTab(tab);
            setJumpToLessonId(null);
            setJumpToReadLessonId(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          reviewCount={unresolvedMistakesCount}
        />

        {/* Global Offline / Sync Indicator */}
        <OfflineIndicator />
      </div>
    </div>
  );
}
