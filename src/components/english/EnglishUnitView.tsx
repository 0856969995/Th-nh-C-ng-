import React, { useState } from 'react';
import { 
  ChevronLeft, 
  BookOpen, 
  GraduationCap, 
  PenTool,
  FileText,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QuizQuestion } from '../../types';
import { ENGLISH_UNITS, ENGLISH_UNIT_1_DATA, EnglishUnitData } from '../../data/englishUnitData';
import { EnglishInteractiveQuiz } from './EnglishInteractiveQuiz';
import { EnglishAITutor } from './EnglishAITutor';
import { PreparationSheetModal } from '../common/PreparationSheetModal';
import { StorageService } from '../../services/storage';

interface EnglishUnitViewProps {
  unitId?: string;
  onBack: () => void;
}

type TabType = 'vocab' | 'grammar' | 'practice';

export const EnglishUnitView: React.FC<EnglishUnitViewProps> = ({
  unitId = 'ch_tienganh_1',
  onBack,
}) => {
  const unitData: EnglishUnitData = ENGLISH_UNITS[unitId] || ENGLISH_UNIT_1_DATA;
  const [activeTab, setActiveTab] = useState<TabType>('vocab');
  const [activeQuestionForAI, setActiveQuestionForAI] = useState<QuizQuestion | null>(null);
  const [showUnitSheet, setShowUnitSheet] = useState(false);
  const [unitAlert, setUnitAlert] = useState<string | null>(null);

  const isSheetDone = StorageService.isPreparationSheetSubmitted(unitData.id);

  React.useEffect(() => {
    setActiveTab('vocab');
    setActiveQuestionForAI(null);
  }, [unitId, unitData.unitNumber]);

  const handleBack = () => {
    if (!StorageService.isPreparationSheetSubmitted(unitData.id)) {
      setUnitAlert('Em hãy hoàn thành và gửi phiếu học tập trước khi kết thúc nội dung này nhé!');
      setTimeout(() => setUnitAlert(null), 4000);
    }
    onBack();
  };

  return (
    <div className="space-y-4 pb-16 animate-in fade-in duration-150">
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleBack}
          className="min-h-[40px] px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center gap-1.5 shadow-2xs hover:bg-sky-50 dark:hover:bg-slate-800 transition cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Danh sách Unit Tiếng Anh 8</span>
        </button>

        <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300">
          Global Success · Lớp 8
        </span>
      </div>

      {/* Cảnh báo nhẹ nhàng nếu chưa nộp phiếu */}
      {unitAlert && (
        <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-200 text-xs font-semibold flex items-center justify-between gap-2 shadow-xs animate-in slide-in-from-top-2">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{unitAlert}</span>
          </div>
          <button
            onClick={() => setUnitAlert(null)}
            className="text-amber-800 hover:text-amber-950 font-extrabold text-sm px-1 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Unit Header Card */}
      <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-sky-600 text-white text-[10px] font-black uppercase tracking-wider">
            Unit {unitData.unitNumber}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {unitData.topic}
          </span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100">
          {unitData.title}
        </h1>
        {unitData.vietnameseTitle && (
          <p className="text-sm sm:text-base font-extrabold text-sky-700 dark:text-sky-300 uppercase tracking-wide">
            {unitData.vietnameseTitle}
          </p>
        )}

        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          {unitData.description}
        </p>

        <div className="pt-2.5 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Phiếu tự học Unit:</span>
            {isSheetDone ? (
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Đã nộp phiếu (Hoàn thành Unit)</span>
              </span>
            ) : (
              <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400">
                (Bắt buộc để hoàn thành Unit)
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => setShowUnitSheet(true)}
            className="flex items-center gap-1.5 rounded-xl border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 px-3 py-1.5 text-xs font-bold hover:bg-emerald-100 dark:hover:bg-emerald-900 transition active:scale-95 shadow-2xs cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{isSheetDone ? 'Xem Phiếu tự học' : 'Phiếu tự học Unit'}</span>
          </button>
        </div>
      </div>

      {/* 3 TABS SELECTOR */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
        <button
          onClick={() => {
            setActiveTab('vocab');
            setActiveQuestionForAI(null);
          }}
          className={`flex-1 min-h-[42px] px-2 py-1.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'vocab'
              ? 'bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-300 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <BookOpen className="w-4 h-4 shrink-0 text-sky-500" />
          <span className="truncate">1. Từ vựng</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('grammar');
            setActiveQuestionForAI(null);
          }}
          className={`flex-1 min-h-[42px] px-2 py-1.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'grammar'
              ? 'bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <GraduationCap className="w-4 h-4 shrink-0 text-indigo-500" />
          <span className="truncate">2. Ngữ pháp</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('practice');
            setActiveQuestionForAI(null);
          }}
          className={`flex-1 min-h-[42px] px-2 py-1.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'practice'
              ? 'bg-white dark:bg-slate-900 text-amber-700 dark:text-amber-300 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <PenTool className="w-4 h-4 shrink-0 text-amber-500" />
          <span className="truncate">3. Luyện tập</span>
        </button>
      </div>

      {/* ==================== TAB 1: TỪ VỰNG (VOCABULARY) ==================== */}
      {activeTab === 'vocab' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          {/* Section 1: Danh sách 10 từ vựng trọng tâm dạng bảng hàng ngang 3 cột */}
          <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                <h2 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                  Từ vựng Unit {unitData.unitNumber}
                </h2>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                10 từ vựng trọng tâm
              </span>
            </div>

            {/* Bảng danh sách hàng ngang đúng 3 cột: STT – Từ vựng – Nghĩa tiếng Việt */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50/75 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 font-bold">
                    <th className="py-2.5 px-3 sm:px-4 w-12 sm:w-16 text-center">STT</th>
                    <th className="py-2.5 px-3 sm:px-4 w-1/2">Từ vựng</th>
                    <th className="py-2.5 px-3 sm:px-4">Nghĩa tiếng Việt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {unitData.vocabularyList.map((item, idx) => (
                    <tr 
                      key={item.id}
                      className="hover:bg-sky-50/40 dark:hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="py-3 px-3 sm:px-4 text-center font-bold text-slate-400">
                        {idx + 1}
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-extrabold text-sky-950 dark:text-sky-200 break-words whitespace-normal leading-snug">
                        {item.word}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-slate-700 dark:text-slate-300 font-medium break-words whitespace-normal leading-snug">
                        {item.meaning}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: 5 Câu hỏi củng cố từ vựng (từng câu một) */}
          <EnglishInteractiveQuiz
            unitId={unitData.id}
            tabId="vocab"
            title="Củng cố từ vựng"
            badgeText="Củng cố từ vựng"
            badgeColor="sky"
            questions={unitData.vocabQuestions}
            onQuestionChange={setActiveQuestionForAI}
          />
        </div>
      )}

      {/* ==================== TAB 2: NGỮ PHÁP (GRAMMAR) ==================== */}
      {activeTab === 'grammar' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          {/* Section 1: Ngữ pháp tinh gọn */}
          <div className="space-y-4">
            {unitData.grammarTopic && (
              <div className="p-3.5 sm:p-4 rounded-3xl bg-indigo-50/90 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-indigo-950 dark:text-indigo-200">
                <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 tracking-wider block">
                  Chủ điểm ngữ pháp
                </span>
                <h2 className="text-sm sm:text-base font-extrabold mt-0.5">
                  {unitData.grammarTopic}
                </h2>
              </div>
            )}

            {unitData.grammarPoints.map((gp) => (
              <div
                key={gp.id}
                className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-2xs"
              >
                {/* Tên điểm ngữ pháp */}
                <h2 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                  {gp.title}
                </h2>

                {/* Quy tắc đặt trong khung nổi bật */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/80 text-xs sm:text-sm font-semibold text-indigo-950 dark:text-indigo-200 whitespace-pre-line leading-relaxed">
                  {gp.formula}
                </div>

                {/* Một câu ví dụ minh họa chung */}
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-0.5 pt-0.5">
                  <div className="font-medium">
                    <span className="font-bold text-slate-900 dark:text-slate-100">Ví dụ: </span>
                    <span className="italic">{gp.example.english}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 pl-8 sm:pl-9">
                    ({gp.example.vietnamese})
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section 2: 5 Câu hỏi củng cố ngữ pháp (từng câu một) */}
          <EnglishInteractiveQuiz
            unitId={unitData.id}
            tabId="grammar"
            title="Củng cố ngữ pháp"
            badgeText="Củng cố ngữ pháp"
            badgeColor="indigo"
            questions={unitData.grammarQuestions}
            onQuestionChange={setActiveQuestionForAI}
          />
        </div>
      )}

      {/* ==================== TAB 3: LUYỆN TẬP (PRACTICE) ==================== */}
      {activeTab === 'practice' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          {/* Tinh gọn: Chỉ giữ tên tab chính LUYỆN TẬP, không có mô tả phụ hay nút xáo trộn */}
          <EnglishInteractiveQuiz
            unitId={unitData.id}
            tabId="practice"
            title="LUYỆN TẬP"
            badgeText="Luyện tập"
            badgeColor="amber"
            questions={unitData.practiceQuestions}
            onQuestionChange={setActiveQuestionForAI}
            onOpenSheet={() => setShowUnitSheet(true)}
            onQuizFinished={() => {
              if (!StorageService.isPreparationSheetSubmitted(unitData.id)) {
                setShowUnitSheet(true);
              }
            }}
          />
        </div>
      )}

      {/* Trợ lý AI đồng hành */}
      <EnglishAITutor
        currentTab={activeTab}
        activeQuestion={activeQuestionForAI}
        unitTitle={unitData.title}
      />

      {showUnitSheet && (
        <PreparationSheetModal
          isOpen={showUnitSheet}
          onClose={() => setShowUnitSheet(false)}
          userId={StorageService.getCurrentUser()?.id || 'guest'}
          studentName={StorageService.getCurrentUser()?.displayName || 'Học sinh'}
          lessonId={unitData.id}
          lessonTitle={`${unitData.title}${unitData.vietnameseTitle ? ` - ${unitData.vietnameseTitle}` : ''}`}
          subjectId="tienganh"
          mandatory={true}
          onSubmittedSuccessfully={() => {
            StorageService.markPreparationSheetSubmitted(unitData.id);
            StorageService.markLessonFullyCompleted(unitData.id);
            StorageService.claimLessonReward(unitData.id, 25, 30);
            try {
              confetti({ particleCount: 70, spread: 80, origin: { y: 0.5 } });
            } catch {}
          }}
        />
      )}
    </div>
  );
};
