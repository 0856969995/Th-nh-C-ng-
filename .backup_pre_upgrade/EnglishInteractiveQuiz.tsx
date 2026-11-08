import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  Check,
  AlertCircle,
  FileText,
  Send
} from 'lucide-react';
import { QuizQuestion, EnglishUnitQuizRecord } from '../../types';
import { StorageService } from '../../services/storage';
import confetti from 'canvas-confetti';

interface EnglishInteractiveQuizProps {
  unitId: string;
  tabId: 'vocab' | 'grammar' | 'practice';
  title: string;
  badgeText: string;
  badgeColor?: 'sky' | 'indigo' | 'amber';
  questions: QuizQuestion[];
  onQuestionChange?: (question: QuizQuestion) => void;
  onQuizFinished?: () => void;
  onOpenSheet?: () => void;
}

export const EnglishInteractiveQuiz: React.FC<EnglishInteractiveQuizProps> = ({
  unitId,
  tabId,
  title,
  badgeText,
  badgeColor = 'sky',
  questions,
  onQuestionChange,
  onQuizFinished,
  onOpenSheet,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCurrentCorrect, setIsCurrentCorrect] = useState(false);
  const [lastWrongOption, setLastWrongOption] = useState<number | null>(null);
  const [wrongSelections, setWrongSelections] = useState<number[]>([]);
  const [wrongTriesThisQuestion, setWrongTriesThisQuestion] = useState(0);
  const [totalWrongAttempts, setTotalWrongAttempts] = useState(0);
  const [firstTryCorrectCount, setFirstTryCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentIndex];

  React.useEffect(() => {
    if (currentQ && onQuestionChange) {
      onQuestionChange(currentQ);
    }
  }, [currentIndex, currentQ, onQuestionChange]);

  const handleSelectOption = (idx: number) => {
    if (isCurrentCorrect) return; // Prevent selection after correct
    if (wrongSelections.includes(idx)) return; // Already tried and was incorrect

    setSelectedOption(idx);
    const isCorrect = idx === currentQ.correctIndex;

    if (isCorrect) {
      setIsCurrentCorrect(true);
      setLastWrongOption(null);
      if (wrongTriesThisQuestion === 0) {
        setFirstTryCorrectCount((prev) => prev + 1);
      }
      try {
        confetti({ particleCount: 25, spread: 45, origin: { y: 0.65 } });
      } catch {}
    } else {
      // Incorrect selection
      setLastWrongOption(idx);
      setWrongTriesThisQuestion((prev) => prev + 1);
      setTotalWrongAttempts((prev) => prev + 1);
      setWrongSelections((prev) => [...prev, idx]);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsCurrentCorrect(false);
      setLastWrongOption(null);
      setWrongSelections([]);
      setWrongTriesThisQuestion(0);
    } else {
      // Finished all questions in this tab
      setIsFinished(true);
      const score = firstTryCorrectCount;
      const record: EnglishUnitQuizRecord = {
        unitId,
        tabId,
        score,
        totalQuestions: questions.length,
        userAnswers: {},
        completedAt: new Date().toISOString(),
      };
      StorageService.saveEnglishQuizRecord(record);

      try {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.5 } });
      } catch {}

      if (onQuizFinished) {
        onQuizFinished();
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsCurrentCorrect(false);
    setLastWrongOption(null);
    setWrongSelections([]);
    setWrongTriesThisQuestion(0);
    setTotalWrongAttempts(0);
    setFirstTryCorrectCount(0);
    setIsFinished(false);
  };

  // Badge theme classes
  const badgeTheme = {
    sky: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border-sky-200 dark:border-sky-800',
    indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
    amber: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-800',
  }[badgeColor];

  const primaryBtnTheme = {
    sky: 'bg-sky-600 hover:bg-sky-700 shadow-sky-500/20',
    indigo: 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20',
    amber: 'bg-amber-600 hover:bg-amber-700 shadow-amber-500/20',
  }[badgeColor];

  // ==================== COMPLETION VIEW ====================
  if (isFinished) {
    const isSheetDone = StorageService.isPreparationSheetSubmitted(unitId);

    return (
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-5 animate-in fade-in duration-200">
        <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center mx-auto shadow-inner">
          <Award className="w-8 h-8" />
        </div>

        <div className="space-y-1 max-w-md mx-auto">
          <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-100">
            Chúc mừng em đã hoàn thành bài luyện tập! 🎉
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            {title}
          </p>
        </div>

        {/* Stats card */}
        <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-bold text-slate-400 block uppercase">
              Số câu hoàn thành
            </span>
            <span className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
              {questions.length}/{questions.length}
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-bold text-slate-400 block uppercase">
              Số lần trả lời sai
            </span>
            <span className={`text-xl font-extrabold ${totalWrongAttempts === 0 ? 'text-emerald-600' : 'text-amber-600'}`}>
              {totalWrongAttempts}
            </span>
          </div>
        </div>

        {/* Mandatory Unit Sheet Callout */}
        {onOpenSheet && !isSheetDone && (
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 space-y-2.5 text-left max-w-sm mx-auto shadow-2xs">
            <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-extrabold text-xs sm:text-sm">
              <FileText className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Bước bắt buộc: Gửi Phiếu tự học Unit</span>
            </div>
            <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
              Em hãy hoàn thành và gửi phiếu học tập trước khi kết thúc nội dung này nhé! Sau khi gửi thành công, Unit sẽ được xác nhận hoàn thành và nhận thưởng.
            </p>
            <button
              onClick={onOpenSheet}
              className="w-full min-h-[42px] rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition cursor-pointer active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Điền & Gửi Phiếu tự học Unit</span>
            </button>
          </div>
        )}

        <div className="pt-1">
          <button
            onClick={handleRestart}
            className={`min-h-[44px] px-6 rounded-2xl ${primaryBtnTheme} text-white font-bold text-xs inline-flex items-center gap-2 shadow-md transition cursor-pointer`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>Làm lại từ đầu</span>
          </button>
        </div>
      </div>
    );
  }

  // ==================== QUESTION IN PROGRESS VIEW ====================
  // Retrieve specific error and hint for the last chosen option
  const specificWrong = lastWrongOption !== null && currentQ.wrongFeedbacks?.[lastWrongOption];
  const errorText = specificWrong
    ? specificWrong.error
    : 'Lựa chọn chưa phù hợp với cấu trúc ngữ pháp hoặc ngữ cảnh của câu.';
  const hintText = specificWrong
    ? specificWrong.hint
    : currentQ.hint || 'Em hãy đọc kỹ lại từ khóa trong câu để chọn lại nhé!';

  return (
    <div className="p-4 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
      {/* Header with Title and Progress */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-lg border ${badgeTheme}`}>
            {badgeText}
          </span>
          <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
            {title}
          </h3>
        </div>

        {/* Progress Bar & Counter */}
        <div className="flex items-center gap-3">
          <div className="w-24 sm:w-32 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-sky-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + (isCurrentCorrect ? 1 : 0)) / questions.length) * 100}%` }}
            />
          </div>
          <span className="text-xs font-black text-slate-700 dark:text-slate-300 whitespace-nowrap">
            Câu {currentIndex + 1}/{questions.length}
          </span>
        </div>
      </div>

      {/* Question Card */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/80 space-y-4">
        {/* Question Text */}
        <div className="space-y-1">
          <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
            Câu hỏi {currentIndex + 1}
          </span>
          <p className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 leading-snug">
            {currentQ.question}
          </p>
        </div>

        {/* Bắt buộc hiển thị mỗi phương án trên một dòng riêng (xếp dọc A, B, C, D từ trên xuống dưới) */}
        <div className="flex flex-col space-y-2.5 w-full">
          {currentQ.options.map((opt, optIdx) => {
            const letter = String.fromCharCode(65 + optIdx);
            const isThisChosen = selectedOption === optIdx;
            const isWrong = wrongSelections.includes(optIdx);
            const isCorrectOption = isCurrentCorrect && optIdx === currentQ.correctIndex;

            let btnStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-sky-400 hover:shadow-xs';

            if (isCorrectOption) {
              btnStyle = 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-500 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-400 font-bold';
            } else if (isWrong) {
              btnStyle = 'bg-rose-50/70 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300 line-through opacity-70 cursor-not-allowed';
            } else if (isThisChosen && !isCurrentCorrect) {
              btnStyle = 'bg-sky-50 dark:bg-sky-950/70 border-sky-400 text-sky-950 dark:text-sky-100 font-semibold';
            }

            return (
              <button
                key={optIdx}
                disabled={isCurrentCorrect || isWrong}
                onClick={() => handleSelectOption(optIdx)}
                className={`min-h-[48px] sm:min-h-[52px] h-auto p-3 sm:p-3.5 rounded-xl border text-left text-xs sm:text-sm flex items-start gap-3 transition cursor-pointer shadow-2xs ${btnStyle}`}
              >
                <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center shrink-0 mt-0.5 ${
                  isCorrectOption 
                    ? 'bg-emerald-500 text-white' 
                    : isWrong 
                      ? 'bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-200' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                }`}>
                  {isCorrectOption ? <Check className="w-4 h-4 stroke-[3]" /> : letter}
                </span>
                <span className="flex-1 font-medium leading-relaxed break-words whitespace-normal pt-0.5">{opt}</span>
              </button>
            );
          })}
        </div>

        {/* FEEDBACK KHI ĐÚNG: Thông báo ngắn gọn + Tích xanh + Giải thích */}
        {isCurrentCorrect && (
          <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 space-y-1.5 animate-in fade-in">
            <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-200 font-black text-xs sm:text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>Chính xác!</span>
            </div>
            {currentQ.explanation && (
              <div className="text-xs text-slate-700 dark:text-slate-300 pl-7 leading-relaxed font-medium">
                {currentQ.explanation}
              </div>
            )}
          </div>
        )}

        {/* FEEDBACK KHI SAI: Thông báo ngắn gọn + "LỖI SAI" VÀ "GỢI Ý" */}
        {!isCurrentCorrect && lastWrongOption !== null && (
          <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2 text-xs sm:text-sm animate-in fade-in">
            <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-extrabold text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Câu trả lời chưa chính xác. Em hãy đọc gợi ý để suy nghĩ lại nhé!</span>
            </div>
            <div className="text-rose-700 dark:text-rose-300 leading-relaxed">
              <strong className="font-extrabold uppercase tracking-wide">Lỗi sai: </strong>
              <span>{errorText}</span>
            </div>
            <div className="text-slate-800 dark:text-slate-200 leading-relaxed">
              <strong className="font-extrabold uppercase tracking-wide text-amber-800 dark:text-amber-300">Gợi ý: </strong>
              <span>{hintText}</span>
            </div>
          </div>
        )}
      </div>

      {/* Nút Câu tiếp theo (Chỉ hiển thị khi đã trả lời đúng) */}
      <div className="flex items-center justify-between pt-1">
        <span className="text-[11px] text-slate-400">
          {!isCurrentCorrect 
            ? 'Chọn phương án đúng để tiếp tục' 
            : 'Nhấn nút để chuyển sang câu tiếp theo'}
        </span>

        {isCurrentCorrect && (
          <button
            onClick={handleNextQuestion}
            className={`min-h-[44px] px-6 rounded-2xl ${primaryBtnTheme} text-white font-extrabold text-xs flex items-center gap-2 shadow-md hover:scale-[1.02] active:scale-95 transition cursor-pointer`}
          >
            <span>{currentIndex < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
