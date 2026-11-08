import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Star, 
  TrendingUp, 
  Calculator,
  Languages,
  Check,
  Droplets,
  BookOpen
} from 'lucide-react';
import { StudentProfile, ChapterSummaryStats, SubjectId } from '../../types';
import { INITIAL_SUBJECTS, INITIAL_CHAPTERS } from '../../data/mockData';
import { StorageService } from '../../services/storage';

interface AchievementsTabProps {
  profile: StudentProfile;
  badges?: any;
  mistakes?: any;
  onOpenQuestionsTab?: () => void;
}

const SUBJECT_TABS: { id: SubjectId; label: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'toan', label: 'Toán', icon: Calculator },
  { id: 'tienganh', label: 'Tiếng Anh', icon: Languages },
];

export const AchievementsTab: React.FC<AchievementsTabProps> = ({
  profile,
}) => {
  // Mặc định hiển thị môn Toán 8
  const [selectedSubjectTab, setSelectedSubjectTab] = useState<SubjectId>('toan');

  // Thống kê câu hỏi đã làm
  const totalQuestionsAnswered = StorageService.getAllQuestionAnalytics().length;

  // Lấy dữ liệu các chương Toán 8
  const mathChaptersSummary: ChapterSummaryStats[] = INITIAL_CHAPTERS
    .filter((ch) => ch.subjectId === 'toan')
    .map((ch) => StorageService.getChapterSummaryStats(ch.id));

  // Lấy danh sách Unit Tiếng Anh 8
  const englishUnits = INITIAL_CHAPTERS.filter((ch) => ch.subjectId === 'tienganh');

  // Tính toán đề xuất ôn tập thực tế cho từng môn
  const getRecommendation = (): { type: 'weak' | 'good' | 'no_data'; targetTitle?: string } => {
    const allAnalytics = StorageService.getAllQuestionAnalytics();

    if (selectedSubjectTab === 'toan') {
      const chapterAccuracies: { chapterTitle: string; rate: number; count: number }[] = [];

      for (const cs of mathChaptersSummary) {
        const records = allAnalytics.filter((r) => r.chapterId === cs.chapterId);
        if (records.length >= 3) {
          const firstTryCorrect = records.filter((r) => r.isCorrectFirstTry).length;
          const rate = Math.round((firstTryCorrect / records.length) * 100);
          chapterAccuracies.push({ chapterTitle: cs.chapterTitle, rate, count: records.length });
        }
      }

      if (chapterAccuracies.length === 0) {
        return { type: 'no_data' };
      }

      chapterAccuracies.sort((a, b) => a.rate - b.rate);
      const lowest = chapterAccuracies[0];

      if (lowest.rate < 80) {
        return { type: 'weak', targetTitle: lowest.chapterTitle };
      }

      return { type: 'good' };
    }

    if (selectedSubjectTab === 'tienganh') {
      const unitAccuracies: { unitTitle: string; rate: number; count: number }[] = [];

      for (const u of englishUnits) {
        const vRec = StorageService.getEnglishQuizRecord(u.id, 'vocab');
        const gRec = StorageService.getEnglishQuizRecord(u.id, 'grammar');
        const pRec = StorageService.getEnglishQuizRecord(u.id, 'practice');
        const directRecords = allAnalytics.filter((r) => r.chapterId === u.id);

        let totalQ = 0;
        let score = 0;

        if (vRec) { totalQ += vRec.totalQuestions; score += vRec.score; }
        if (gRec) { totalQ += gRec.totalQuestions; score += gRec.score; }
        if (pRec) { totalQ += pRec.totalQuestions; score += pRec.score; }
        if (directRecords.length > 0) {
          totalQ += directRecords.length;
          score += directRecords.filter((r) => r.isCorrectFirstTry).length;
        }

        if (totalQ >= 3) {
          const rate = Math.round((score / totalQ) * 100);
          unitAccuracies.push({ unitTitle: u.title.split(':')[0], rate, count: totalQ });
        }
      }

      if (unitAccuracies.length === 0) {
        return { type: 'no_data' };
      }

      unitAccuracies.sort((a, b) => a.rate - b.rate);
      const lowest = unitAccuracies[0];

      if (lowest.rate < 80) {
        return { type: 'weak', targetTitle: lowest.unitTitle };
      }

      return { type: 'good' };
    }

    return { type: 'no_data' };
  };

  const recommendation = getRecommendation();

  return (
    <div className="space-y-4 animate-in fade-in duration-150 pb-8">
      {/* Tiêu đề trang */}
      <div>
        <h1 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
          Thành tích học tập
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Theo dõi tiến độ hoàn thành các chương và Unit theo chuẩn SGK
        </p>
      </div>

      {/* 1. TỔNG QUAN TÍCH LŨY */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-2xs">
          <Droplets className="w-5 h-5 text-sky-500 fill-sky-500 mx-auto mb-1" />
          <span className="block font-extrabold text-base text-slate-900 dark:text-slate-100 tabular-nums">
            {profile.waterDrops}
          </span>
          <span className="text-[10px] text-slate-500 font-medium">Giọt nước</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-2xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
          <span className="block font-extrabold text-base text-slate-900 dark:text-slate-100 tabular-nums">
            {totalQuestionsAnswered}
          </span>
          <span className="text-[10px] text-slate-500 font-medium">Câu hỏi đã làm</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-2xs">
          <Star className="w-5 h-5 text-amber-500 fill-amber-500 mx-auto mb-1" />
          <span className="block font-extrabold text-base text-slate-900 dark:text-slate-100 tabular-nums">
            {profile.totalStars}
          </span>
          <span className="text-[10px] text-slate-500 font-medium">Sao thưởng</span>
        </div>
      </div>

      {/* 2. TIẾN ĐỘ HOÀN THÀNH THEO MÔN */}
      <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <div>
          <h2 className="text-xs font-extrabold text-slate-900 dark:text-slate-100 uppercase tracking-wider flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-sky-600" />
            <span>TIẾN ĐỘ HOÀN THÀNH</span>
          </h2>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            {selectedSubjectTab === 'toan'
              ? 'Tiến độ hoàn thành từng chương môn Toán 8'
              : 'Tiến độ hoàn thành từng Unit môn Tiếng Anh 8'}
          </p>
        </div>

        {/* 2 Tab chọn môn học: Toán 8, Tiếng Anh 8 */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
          {SUBJECT_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedSubjectTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedSubjectTab(tab.id)}
                className={`flex-1 min-h-[38px] px-2 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-sky-500 text-white shadow-xs font-extrabold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{tab.label} 8</span>
              </button>
            );
          })}
        </div>

        {/* ==================== DANH SÁCH MÔN TOÁN 8 ==================== */}
        {selectedSubjectTab === 'toan' && (
          <div className="space-y-3 pt-1">
            {mathChaptersSummary.map((cs) => {
              // Phần trăm hoàn thành: Số bài đã hoàn thành hợp lệ / Tổng số bài × 100%
              const percent = cs.totalLessons > 0
                ? Math.round((cs.completedLessonsCount / cs.totalLessons) * 100)
                : 0;
              const isCompleted = percent === 100;

              return (
                <div
                  key={cs.chapterId}
                  className={`p-4 rounded-2xl border transition space-y-3 ${
                    isCompleted
                      ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60'
                      : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-slate-100 block leading-snug">
                      {cs.chapterTitle}
                    </span>

                    <span
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider shrink-0 flex items-center gap-1 ${
                        isCompleted
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                          : 'bg-slate-200/70 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <Check className="w-3 h-3 stroke-[2.5]" />
                          <span>Hoàn thành</span>
                        </>
                      ) : (
                        <span>Đang học</span>
                      )}
                    </span>
                  </div>

                  {/* Thanh tiến độ & Phần trăm hoàn thành */}
                  <div className="space-y-1.5 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 dark:text-slate-300 font-medium">Tiến độ hoàn thành:</span>
                      <span className="font-bold text-sky-600 dark:text-sky-400 tabular-nums">
                        {percent}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isCompleted ? 'bg-emerald-500' : 'bg-sky-500'
                        }`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ==================== DANH SÁCH MÔN TIẾNG ANH 8 ==================== */}
        {selectedSubjectTab === 'tienganh' && (
          <div className="space-y-3 pt-1">
            {englishUnits.map((u) => {
              // Hoàn thành Unit: Hoàn thành đầy đủ câu hỏi và gửi thành công Phiếu tự học Unit
              const isUnitCompleted = StorageService.isLessonCompleted(u.id);
              const percent = isUnitCompleted ? 100 : 0;

              return (
                <div
                  key={u.id}
                  className={`p-4 rounded-2xl border transition space-y-3 ${
                    isUnitCompleted
                      ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60'
                      : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-slate-100 block leading-snug">
                      {u.title}
                    </span>

                    <span
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider shrink-0 flex items-center gap-1 ${
                        isUnitCompleted
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                          : 'bg-slate-200/70 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }`}
                    >
                      {isUnitCompleted ? (
                        <>
                          <Check className="w-3 h-3 stroke-[2.5]" />
                          <span>Hoàn thành</span>
                        </>
                      ) : (
                        <span>Đang học</span>
                      )}
                    </span>
                  </div>

                  {/* Thanh tiến độ & Phần trăm hoàn thành */}
                  <div className="space-y-1.5 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 dark:text-slate-300 font-medium">Tiến độ hoàn thành:</span>
                      <span className="font-bold text-sky-600 dark:text-sky-400 tabular-nums">
                        {percent}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isUnitCompleted ? 'bg-emerald-500' : 'bg-sky-500'
                        }`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 3. DÒNG ĐỀ XUẤT ÔN TẬP CUỐI TRANG */}
        <div className="pt-2">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2.5 shadow-2xs">
            <BookOpen className="w-4 h-4 text-sky-600 shrink-0" />
            <div className="min-w-0 flex-1 leading-relaxed">
              {recommendation.type === 'weak' ? (
                <span>
                  <strong>Cần ôn tập thêm:</strong> {recommendation.targetTitle}.
                </span>
              ) : recommendation.type === 'good' ? (
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                  Em đang học tốt, hãy tiếp tục phát huy nhé!
                </span>
              ) : (
                <span className="text-slate-500 italic">
                  Chưa đủ dữ liệu để đề xuất ôn tập.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
