import React from 'react';
import { BookOpen, HelpCircle, Award, Sprout, User } from 'lucide-react';
import { MainTabType } from '../../types';

interface MobileBottomNavProps {
  activeTab: MainTabType;
  onChangeTab: (tab: MainTabType) => void;
  reviewCount?: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onChangeTab,
  reviewCount = 0,
}) => {
  const tabs: { id: MainTabType; label: string; icon: React.FC<{ className?: string }>; badge?: number }[] = [
    { id: 'lessons', label: 'Bài học', icon: BookOpen },
    { id: 'questions', label: 'Câu hỏi', icon: HelpCircle },
    { id: 'achievements', label: 'Thành tích', icon: Award, badge: reviewCount },
    { id: 'garden', label: 'Khu vườn', icon: Sprout },
    { id: 'profile', label: 'Cá nhân', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-sky-100 dark:border-slate-800 pb-safe shadow-lg">
      <div className="max-w-md mx-auto grid grid-cols-5 h-16 items-center px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChangeTab(tab.id)}
              className={`min-h-[44px] flex flex-col items-center justify-center transition-all relative py-1 focus:outline-none cursor-pointer ${
                isActive
                  ? 'text-sky-600 dark:text-sky-400 font-extrabold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
              }`}
            >
              <div
                className={`p-1 rounded-xl transition-all relative ${
                  isActive ? 'bg-sky-100 dark:bg-sky-950/60 scale-105' : ''
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                {Boolean(tab.badge && tab.badge > 0) && (
                  <span className="absolute -top-1 -right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-extrabold flex items-center justify-center">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] tracking-tight mt-0.5 whitespace-nowrap">
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute bottom-1 w-1.5 h-1 rounded-full bg-sky-500" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
