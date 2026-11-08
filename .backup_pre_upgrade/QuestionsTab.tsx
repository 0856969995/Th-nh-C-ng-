import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Languages, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  RotateCcw, 
  Check, 
  Star, 
  Droplets,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Brain,
  Sparkles,
  HelpCircle,
  X,
  ZoomIn
} from 'lucide-react';
import { Subject, Chapter, LessonPreview, QuickQuiz, QuizQuestion, QuestionAnalyticsRecord, LessonStats } from '../../types';
import { INITIAL_SUBJECTS, INITIAL_CHAPTERS } from '../../data/mockData';
import { StorageService } from '../../services/storage';
import { MathView } from '../common/MathView';
import confetti from 'canvas-confetti';

interface QuestionsTabProps {
  initialLessonId?: string | null;
  onGoToLesson?: (lessonId: string) => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Calculator,
  Languages,
};

export const QuestionsTab: React.FC<QuestionsTabProps> = ({
  initialLessonId,
  onGoToLesson,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<LessonPreview | null>(null);

  // Question test states
  const [currentQuiz, setCurrentQuiz] = useState<QuickQuiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [zoomImg, setZoomImg] = useState<{ src: string; title: string } | null>(null);

  // Answering states for the active question (Phần V: Trợ lý AI khi học sinh trả lời sai)
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answersHistory, setAnswersHistory] = useState<number[]>([]);
  const [wrongTriesCount, setWrongTriesCount] = useState(0);
  const [isCurrentCorrect, setIsCurrentCorrect] = useState(false);
  const [currentWrongSelection, setCurrentWrongSelection] = useState<number | null>(null);
  const [hintsRequestedCount, setHintsRequestedCount] = useState(0);
  const [showHintBubble, setShowHintBubble] = useState(false);
  const [activeHintLevel, setActiveHintLevel] = useState(0); // 0, 1, 2...
  const [showReferenceModal, setShowReferenceModal] = useState(false);

  // Quiz summary states
  const [firstTryCorrectCount, setFirstTryCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Mistakes filter
  const [showMistakesOnly, setShowMistakesOnly] = useState(false);

  const allLessons = StorageService.getAllLessons();
  const allMistakes = StorageService.getWrongMistakes();

  // If initialLessonId passed from Lessons tab, auto-open it
  useEffect(() => {
    if (initialLessonId) {
      const targetLesson = allLessons.find((l) => l.id === initialLessonId);
      if (targetLesson) {
        const targetSubject = INITIAL_SUBJECTS.find((s) => s.id === targetLesson.subjectId);
        const targetChapter = INITIAL_CHAPTERS.find((c) => c.id === targetLesson.chapterId);
        if (targetSubject && targetChapter) {
          setSelectedSubject(targetSubject);
          setSelectedChapter(targetChapter);
          handleSelectLesson(targetLesson);
        }
      }
    }
  }, [initialLessonId]);

  const handleSelectSubject = (subj: Subject) => {
    setSelectedSubject(subj);
    setSelectedChapter(null);
    setSelectedLesson(null);
    setCurrentQuiz(null);
  };

  const handleSelectChapter = (ch: Chapter) => {
    setSelectedChapter(ch);
    setSelectedLesson(null);
    setCurrentQuiz(null);
  };

  const handleSelectLesson = (lesson: LessonPreview) => {
    setSelectedLesson(lesson);
    const quiz = StorageService.getQuizForLesson(lesson.id) || {
      id: `quiz_${lesson.id}`,
      lessonId: lesson.id,
      subjectId: lesson.subjectId,
      title: `5 Câu hỏi tự kiểm tra: ${lesson.title}`,
      timeLimitSeconds: 180,
      questions: [
        {
          id: `${lesson.id}_q1`,
          question: `Nội dung cốt lõi của bài học "${lesson.title}" là gì?`,
          options: [
            lesson.summary,
            'Không cần học thuộc hay vận dụng',
            'Chỉ áp dụng trong một vài trường hợp hiếm gặp',
            'Một phương pháp học cũ không còn dùng'
          ],
          correctIndex: 0,
          explanation: 'Tóm tắt bài học nêu bật nội dung cốt lõi và mục tiêu của bài.',
          hint: 'Đọc lại phần tóm tắt đầu bài để tìm câu trả lời chính xác nhất.',
          knowledgeTopic: 'Tổng quan bài học',
          lessonSectionRef: 'Khái niệm cơ bản'
        }
      ]
    };

    setCurrentQuiz(quiz);
    resetQuestionState();
    setCurrentQuestionIndex(0);
    setFirstTryCorrectCount(0);
    setIsFinished(false);
  };

  const resetQuestionState = () => {
    setSelectedOption(null);
    setAnswersHistory([]);
    setWrongTriesCount(0);
    setIsCurrentCorrect(false);
    setCurrentWrongSelection(null);
    setHintsRequestedCount(0);
    setShowHintBubble(false);
    setActiveHintLevel(0);
    setShowReferenceModal(false);
  };

  // ==================== PHẦN V: XỬ LÝ KHI CHỌN PHƯƠNG ÁN ====================
  const handleSelectOption = (idx: number) => {
    if (isCurrentCorrect || !currentQuiz) return;

    const q = currentQuiz.questions[currentQuestionIndex];
    const newHistory = [...answersHistory, idx];
    setAnswersHistory(newHistory);
    setSelectedOption(idx);

    const isCorrect = idx === q.correctIndex;

    if (isCorrect) {
      // 7. Khi học sinh trả lời đúng: trợ lý xác nhận và giải thích ngắn gọn
      setIsCurrentCorrect(true);
      setCurrentWrongSelection(null);

      const isFirstTry = newHistory.length === 1;
      if (isFirstTry) {
        setFirstTryCorrectCount((prev) => prev + 1);
      }

      // Lưu phân tích câu hỏi theo Phần VI
      const analyticsRecord: QuestionAnalyticsRecord = {
        id: `rec_${q.id}_${Date.now()}`,
        subjectId: currentQuiz.subjectId,
        chapterId: selectedChapter ? selectedChapter.id : 'ch_toan_1',
        lessonId: currentQuiz.lessonId,
        questionId: q.id,
        knowledgeTopic: q.knowledgeTopic || 'Kiến thức bài học',
        correctIndex: q.correctIndex,
        selectedAnswersHistory: newHistory,
        attemptsCount: newHistory.length,
        isCorrectFirstTry: isFirstTry,
        hintsUsedCount: hintsRequestedCount,
        isFinalCorrect: true,
        completedAt: new Date().toISOString(),
      };
      StorageService.saveQuestionAnalytics(analyticsRecord);

      try {
        confetti({
          particleCount: 25,
          spread: 45,
          origin: { y: 0.7 },
        });
      } catch {}

    } else {
      // Trả lời sai:
      // 1. Không hiển thị ngay đáp án đúng
      // 2. Trợ lý AI đưa ra lời gợi ý ngắn, dễ hiểu
      // 3. Gợi ý hướng học sinh quay lại phần kiến thức liên quan trong bài
      // 4. Cho phép học sinh chọn lại không giới hạn số lần
      // 5. Nếu học sinh tiếp tục sai, gợi ý lần sau cụ thể hơn lần trước
      // 6. Không đưa thẳng đáp án trước khi học sinh tự chọn lại
      // 8. Không trừ điểm khi học sinh trả lời sai
      // 9. Khuyến khích học sinh tự suy nghĩ, không tạo cảm giác bị phê bình
      const nextWrongCount = wrongTriesCount + 1;
      setWrongTriesCount(nextWrongCount);
      setCurrentWrongSelection(idx);
      setShowHintBubble(true);
      setActiveHintLevel(Math.min(nextWrongCount - 1, (q.hints?.length || 1) - 1));

      // Ghi nhận vào mục cần ôn tập (Mistakes) để học sinh xem lại sau
      StorageService.recordWrongMistake({
        lessonId: currentQuiz.lessonId,
        subjectId: currentQuiz.subjectId,
        subjectName: selectedSubject ? selectedSubject.name : 'Lớp 8',
        lessonTitle: selectedLesson ? selectedLesson.title : currentQuiz.title,
        lessonNumber: selectedLesson ? selectedLesson.lessonNumber : 1,
        questionId: q.id,
        questionText: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        userWrongIndex: idx,
        explanation: q.explanation,
        hint: q.hint,
      });
    }
  };

  const handleNextQuestion = () => {
    if (!currentQuiz) return;
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      resetQuestionState();
    } else {
      setIsFinished(true);
      // Ghi nhận sao thưởng & giọt nước tưới cây
      const starsEarned = (firstTryCorrectCount * 5) + ((currentQuiz.questions.length - firstTryCorrectCount) * 2);
      const waterEarned = currentQuiz.questions.length * 4;
      StorageService.addRewards(starsEarned, waterEarned);

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.5 },
        });
      } catch {}
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    resetQuestionState();
    setFirstTryCorrectCount(0);
    setIsFinished(false);
  };

  // ==================== LEVEL 4: BÀI TẬP CÂU HỎI CỦA BÀI ====================
  if (selectedLesson && selectedChapter && selectedSubject && currentQuiz) {
    const currentQ = currentQuiz.questions[currentQuestionIndex];
    const totalQ = currentQuiz.questions.length;

    // Lấy gợi ý hiện tại theo cấp độ tăng dần (progressive hints)
    const availableHints = currentQ.hints && currentQ.hints.length > 0 ? currentQ.hints : [currentQ.hint];
    const currentHintText = availableHints[Math.min(activeHintLevel, availableHints.length - 1)] || currentQ.hint;

    const userProfile = StorageService.getProfile();
    const isLessonRead = StorageService.isLessonRead(selectedLesson.id) || userProfile.completedLessonIds.includes(selectedLesson.id);

    if (!isLessonRead && !isFinished) {
      return (
        <div className="space-y-4 animate-in fade-in duration-150 pb-6">
          {/* Navigation Breadcrumb / Back button */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSelectedLesson(null)}
              className="min-h-[40px] px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center gap-1.5 shadow-2xs hover:bg-sky-50 transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Quay lại {selectedChapter.title.split(':')[0]}</span>
            </button>

            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
              Yêu cầu đọc trước bài
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-800 shadow-sm text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center border border-amber-200 dark:border-amber-800">
              <BookOpen className="w-7 h-7" />
            </div>

            <div className="space-y-1.5 max-w-sm mx-auto">
              <h2 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
                Hãy đọc bài trước khi làm câu hỏi
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Để làm bài kiểm tra đạt kết quả cao, em cần đọc kỹ phần <strong>Kiến thức trọng tâm</strong> và các ví dụ của <strong>{selectedLesson.title}</strong> trước nhé!
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2.5 max-w-xs mx-auto">
              <button
                onClick={() => onGoToLesson && onGoToLesson(selectedLesson.id)}
                className="min-h-[44px] w-full rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-md shadow-sky-500/20 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Đọc Kiến thức trọng tâm ngay</span>
              </button>

              <button
                onClick={() => setSelectedLesson(null)}
                className="min-h-[40px] w-full rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                <span>Quay lại chọn bài khác</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4 animate-in fade-in duration-150 pb-6">
        {/* Navigation Breadcrumb / Back button */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedLesson(null)}
            className="min-h-[40px] px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center gap-1.5 shadow-2xs hover:bg-sky-50 transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Quay lại {selectedChapter.title.split(':')[0]}</span>
          </button>

          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
            {selectedSubject.shortName} · Bài {selectedLesson.lessonNumber}
          </span>
        </div>

        {!isFinished ? (
          <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            
            {/* Header: Progress & Knowledge Topic */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold text-sky-700 dark:text-sky-400">
                  Câu {currentQuestionIndex + 1}/{totalQ}
                </span>
                <span className="text-[11px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                  {currentQ.knowledgeTopic}
                </span>
              </div>

              {/* Gợi ý học tập chủ động */}
              <button
                type="button"
                onClick={() => {
                  setShowHintBubble(true);
                  setHintsRequestedCount((prev) => prev + 1);
                }}
                className={`min-h-[32px] px-2.5 py-1 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  showHintBubble
                    ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300'
                    : 'bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300 hover:bg-sky-100'
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                <span>Gợi ý AI</span>
              </button>
            </div>

            {/* TRỢ LÝ AI: Khung gợi ý thông minh khi học sinh trả lời sai hoặc bấm gợi ý */}
            {showHintBubble && (
              <div className="p-3.5 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-950 dark:text-amber-100 space-y-2 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold flex items-center gap-1.5 text-xs text-amber-800 dark:text-amber-300">
                    <Brain className="w-4 h-4 text-amber-600" />
                    <span>Trợ lý gợi ý học tập (Cấp độ {activeHintLevel + 1}):</span>
                  </span>
                  
                  {wrongTriesCount > 0 && !isCurrentCorrect && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-200/60 text-amber-900 dark:bg-amber-900/60 dark:text-amber-200">
                      Chọn lại thoải mái
                    </span>
                  )}
                </div>

                <div className="text-xs leading-relaxed font-medium">
                  <MathView text={currentHintText} />
                </div>

                {/* Hướng học sinh quay lại phần kiến thức liên quan trong bài */}
                {currentQ.lessonSectionRef && (
                  <div className="pt-1 flex items-center justify-between border-t border-amber-200/60 dark:border-amber-900/50">
                    <span className="text-[11px] text-amber-800 dark:text-amber-300">
                      Phần liên quan: <strong>{currentQ.lessonSectionRef}</strong>
                    </span>
                    <button
                      onClick={() => setShowReferenceModal(true)}
                      className="text-[11px] font-bold text-sky-700 hover:text-sky-800 dark:text-sky-400 underline flex items-center gap-1 cursor-pointer"
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>Xem lại mục này trong SGK</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Modal xem nhanh kiến thức SGK liên quan */}
            {showReferenceModal && (
              <div className="p-3.5 rounded-2xl bg-sky-50 dark:bg-slate-800 border border-sky-200 dark:border-slate-700 space-y-2 text-xs animate-in zoom-in-95">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-sky-900 dark:text-sky-200 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-sky-600" />
                    <span>Đối chiếu kiến thức SGK: {currentQ.lessonSectionRef}</span>
                  </span>
                  <button
                    onClick={() => setShowReferenceModal(false)}
                    className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-sky-100 dark:border-slate-800 leading-relaxed text-slate-700 dark:text-slate-300">
                  {selectedLesson.keyConcepts.find(c => c.term.includes(currentQ.lessonSectionRef || ''))?.definition ? (
                    <MathView text={selectedLesson.keyConcepts.find(c => c.term.includes(currentQ.lessonSectionRef || ''))?.definition || ''} />
                  ) : (
                    <MathView text={selectedLesson.summary} />
                  )}
                </div>
              </div>
            )}

            {/* Question Image if present (ví dụ các câu hỏi Bài 20 có biểu đồ SGK) */}
            {currentQ.imageUrl && (
              <div className="flex flex-col items-center pt-1 pb-1">
                <div 
                  onClick={() => setZoomImg({ src: currentQ.imageUrl!, title: currentQ.imageAlt || 'Biểu đồ SGK' })}
                  className="w-full max-w-md p-1.5 sm:p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col items-center cursor-zoom-in group transition hover:border-sky-300"
                >
                  <div className="relative w-full flex justify-center">
                    <img
                      src={currentQ.imageUrl}
                      alt={currentQ.imageAlt || 'Biểu đồ SGK'}
                      className="w-full h-auto max-h-64 sm:max-h-72 object-contain rounded-xl select-none"
                      loading="eager"
                    />
                    <span className="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded bg-slate-900/70 text-white text-[10px] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition sm:flex hidden">
                      <ZoomIn className="w-3 h-3" />
                      <span>Phóng to</span>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Question Prompt */}
            <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/40 dark:bg-slate-800/50 border border-sky-100 dark:border-slate-700">
              <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100 leading-relaxed break-words whitespace-pre-line">
                <MathView text={currentQ.question} />
              </div>
            </div>

            {/* Bắt buộc hiển thị mỗi phương án trên một dòng riêng (xếp dọc A, B, C, D từ trên xuống dưới) */}
            <div className="flex flex-col space-y-2.5 sm:space-y-3 w-full">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;
                const wasWrongPicked = answersHistory.includes(idx) && !isCorrect;

                let btnStyle = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-sky-300';

                if (isCurrentCorrect) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold ring-2 ring-emerald-500/30';
                  } else {
                    btnStyle = 'opacity-40 border-slate-200 dark:border-slate-800 text-slate-400';
                  }
                } else if (currentWrongSelection === idx) {
                  btnStyle = 'bg-rose-50 dark:bg-rose-950/50 border-rose-400 text-rose-900 dark:text-rose-200';
                } else if (wasWrongPicked) {
                  btnStyle = 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-400 opacity-60';
                }

                return (
                  <button
                    key={idx}
                    disabled={isCurrentCorrect}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full min-h-[50px] sm:min-h-[54px] h-auto p-3 sm:p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-medium transition flex items-start justify-between gap-3 cursor-pointer shadow-2xs ${btnStyle}`}
                  >
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5 ${
                        isCurrentCorrect && isCorrect
                          ? 'bg-emerald-500 text-white'
                          : currentWrongSelection === idx
                            ? 'bg-rose-500 text-white'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <div className="flex-1 min-w-0 text-xs sm:text-sm leading-relaxed break-words whitespace-normal text-slate-800 dark:text-slate-200 pt-0.5">
                        <MathView text={opt} />
                      </div>
                    </div>

                    {isCurrentCorrect && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                    )}
                    {currentWrongSelection === idx && (
                      <XCircle className="w-5 h-5 text-rose-500 dark:text-rose-400 shrink-0 mt-1" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* AI Confirmation & Explanation (khi học sinh trả lời đúng) */}
            {isCurrentCorrect && (
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-950 dark:text-emerald-200 space-y-1.5 animate-in fade-in">
                <div className="flex items-center gap-1.5 font-extrabold text-emerald-800 dark:text-emerald-300">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Chính xác rồi! Tuyệt vời lắm.</span>
                </div>
                <div className="leading-relaxed text-slate-700 dark:text-slate-300 pt-0.5">
                  <strong>Giải thích chuẩn SGK: </strong>
                  <MathView text={currentQ.explanation} />
                </div>
              </div>
            )}

            {/* Next Question Button */}
            <div className="pt-2">
              <button
                disabled={!isCurrentCorrect}
                onClick={handleNextQuestion}
                className={`w-full min-h-[46px] rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer ${
                  isCurrentCorrect
                    ? 'bg-sky-500 hover:bg-sky-600 text-white shadow-md shadow-sky-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                }`}
              >
                <span>{currentQuestionIndex < totalQ - 1 ? 'Câu tiếp theo' : 'Xem thống kê'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* ==================== MỤC 2: CHỈ HIỂN THỊ THỐNG KÊ ==================== */
          <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-950 text-sky-600 mx-auto flex items-center justify-center">
                <Check className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h2 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
                Kết quả tự kiểm tra
              </h2>
              <p className="text-xs text-slate-500">
                {selectedLesson.title}
              </p>
            </div>

            {/* THỐNG KÊ KẾT QUẢ BÀI HỌC (Đúng 6 chỉ số theo Mục 2) */}
            {(() => {
              const lessonStats = StorageService.getLessonStats(selectedLesson.id);
              const totalQuestions = 5;
              const firstTryRate = Math.round((firstTryCorrectCount / totalQuestions) * 100);
              const completionRate = Math.round((totalQ / totalQuestions) * 100);

              return (
                <div className="p-4 rounded-2xl bg-sky-50/50 dark:bg-slate-800/50 border border-sky-100 dark:border-slate-700 space-y-3">
                  <h3 className="text-xs font-extrabold text-slate-900 dark:text-slate-100 uppercase tracking-wider flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-sky-600" />
                    <span>Thống kê kết quả</span>
                  </h3>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700">
                      <span className="text-slate-600 dark:text-slate-300">Tổng số câu hỏi:</span>
                      <strong className="text-slate-900 dark:text-slate-100 font-bold tabular-nums">{totalQuestions}</strong>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700">
                      <span className="text-slate-600 dark:text-slate-300">Số câu đúng ngay lần đầu:</span>
                      <strong className="text-emerald-600 font-bold tabular-nums">{firstTryCorrectCount}</strong>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700">
                      <span className="text-slate-600 dark:text-slate-300">Số câu trả lời sai lần đầu:</span>
                      <strong className="text-amber-600 font-bold tabular-nums">{totalQuestions - firstTryCorrectCount}</strong>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700">
                      <span className="text-slate-600 dark:text-slate-300">Số câu cần trợ lý gợi ý:</span>
                      <strong className="text-sky-600 font-bold tabular-nums">{lessonStats.neededHintCount}</strong>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700">
                      <span className="text-slate-600 dark:text-slate-300">Tỉ lệ đúng lần đầu:</span>
                      <strong className="text-sky-700 dark:text-sky-300 font-extrabold tabular-nums">{firstTryRate}%</strong>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700">
                      <span className="text-slate-600 dark:text-slate-300">Tỉ lệ hoàn thành sau các lần thử:</span>
                      <strong className="text-emerald-700 dark:text-emerald-300 font-extrabold tabular-nums">{completionRate}%</strong>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Bottom actions */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={handleRestartQuiz}
                className="min-h-[42px] px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Làm lại</span>
              </button>
              <button
                onClick={() => setSelectedLesson(null)}
                className="min-h-[42px] px-5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold shadow-md shadow-sky-500/20 cursor-pointer"
              >
                Hoàn tất
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ==================== LEVEL 3: DANH SÁCH BÀI CỦA CHƯƠNG ====================
  if (selectedChapter && selectedSubject) {
    const chapterLessons = allLessons.filter(
      (l) => l.chapterId === selectedChapter.id
    );

    return (
      <div className="space-y-4 animate-in fade-in duration-150 pb-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedChapter(null)}
            className="min-h-[40px] px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center gap-1.5 shadow-2xs hover:bg-sky-50 transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Quay lại các chương {selectedSubject.shortName}</span>
          </button>
        </div>

        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-sky-100 dark:border-slate-800 shadow-xs">
          <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">
            Luyện câu hỏi tự kiểm tra
          </span>
          <h1 className="text-base font-extrabold text-slate-900 dark:text-slate-100 mt-0.5">
            {selectedChapter.title}
          </h1>
        </div>

        <div className="space-y-2">
          {chapterLessons.map((lesson) => {
            const stats = StorageService.getLessonStats(lesson.id);
            const isDone = stats.totalQuestions > 0;
            const profile = StorageService.getProfile();
            const hasRead = StorageService.isLessonRead(lesson.id) || profile.completedLessonIds.includes(lesson.id);

            const handleItemClick = () => {
              handleSelectLesson(lesson);
            };

            return (
              <button
                key={lesson.id}
                onClick={handleItemClick}
                className="w-full min-h-[56px] p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-300 hover:shadow-xs text-left transition flex items-center justify-between gap-3 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 ${
                    hasRead
                      ? 'bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}>
                    {lesson.lessonNumber}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-extrabold text-sm text-slate-900 dark:text-slate-100 block">
                      {lesson.title}
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      5 câu hỏi tự kiểm tra chuẩn SGK
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold">
                  {hasRead ? (
                    <span className="text-sky-600">{isDone ? 'Luyện lại' : 'Luyện ngay'}</span>
                  ) : (
                    <span className="text-amber-600 dark:text-amber-400">Đọc bài trước</span>
                  )}
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ==================== LEVEL 2: DANH SÁCH CHƯƠNG ====================
  if (selectedSubject) {
    const chapters = INITIAL_CHAPTERS.filter(
      (c) => c.subjectId === selectedSubject.id
    );

    return (
      <div className="space-y-4 animate-in fade-in duration-150 pb-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedSubject(null)}
            className="min-h-[40px] px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center gap-1.5 shadow-2xs hover:bg-sky-50 transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Quay lại 3 môn học</span>
          </button>
        </div>

        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-sky-100 dark:border-slate-800 shadow-xs flex items-center gap-3">
          <div className={`w-12 h-12 rounded-2xl ${selectedSubject.colorBg} ${selectedSubject.colorText} flex items-center justify-center shrink-0 border ${selectedSubject.colorBorder}`}>
            {React.createElement(ICON_MAP[selectedSubject.iconName] || BookOpen, { className: 'w-6 h-6' })}
          </div>
          <div>
            <h1 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
              Câu hỏi {selectedSubject.name}
            </h1>
            <p className="text-xs text-slate-500">
              Chọn chương để bắt đầu luyện tập câu hỏi
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => handleSelectChapter(ch)}
              className="w-full min-h-[64px] p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-300 hover:shadow-xs text-left transition flex items-center justify-between gap-3 cursor-pointer"
            >
              <div className="min-w-0">
                <span className="font-extrabold text-sm text-slate-900 dark:text-slate-100 block truncate">
                  {ch.title}
                </span>
                {ch.description && (
                  <span className="text-xs text-slate-500 dark:text-slate-400 block truncate mt-0.5">
                    {ch.description}
                  </span>
                )}
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ==================== LEVEL 1: CHỌN MÔN HỌC ====================
  const unresolvedMistakes = allMistakes.filter((m) => !m.resolved);

  return (
    <div className="space-y-4 animate-in fade-in duration-150 pb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
            Câu hỏi tự kiểm tra
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Chọn môn học để làm 5 câu hỏi kiểm tra sau khi đọc bài
          </p>
        </div>

        {unresolvedMistakes.length > 0 && (
          <button
            onClick={() => setShowMistakesOnly(!showMistakesOnly)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
              showMistakesOnly
                ? 'bg-rose-500 text-white border-rose-500'
                : 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950 dark:text-rose-300'
            }`}
          >
            {unresolvedMistakes.length} câu làm sai
          </button>
        )}
      </div>

      {/* Review Mistakes Section if toggled */}
      {showMistakesOnly && unresolvedMistakes.length > 0 && (
        <div className="p-4 rounded-3xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 space-y-3">
          <h2 className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wider">
            Các câu hỏi từng làm sai:
          </h2>
          <div className="space-y-2">
            {unresolvedMistakes.map((m) => (
              <div
                key={m.id}
                className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-slate-800 text-xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-rose-700">{m.subjectName} · Bài {m.lessonNumber}</span>
                  <span className="text-[11px] text-slate-400">{m.lessonTitle}</span>
                </div>
                <div className="font-semibold text-slate-800 dark:text-slate-200">
                  <MathView text={m.questionText} />
                </div>
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-[11px] text-slate-600 dark:text-slate-400">
                  <strong>Giải thích: </strong>
                  <MathView text={m.explanation} />
                </div>
                <button
                  onClick={() => {
                    StorageService.resolveWrongMistake(m.id);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-sky-500 text-white font-bold text-xs hover:bg-sky-600 transition cursor-pointer"
                >
                  Đánh dấu đã hiểu (+5 ⭐, +10 💧)
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3 Subjects Cards */}
      <div className="space-y-3">
        {INITIAL_SUBJECTS.map((subj) => {
          const IconComp = ICON_MAP[subj.iconName] || BookOpen;

          return (
            <button
              key={subj.id}
              onClick={() => handleSelectSubject(subj)}
              className="w-full p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-300 hover:shadow-md text-left transition-all flex items-center justify-between gap-3.5 cursor-pointer group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className={`w-12 h-12 rounded-2xl ${subj.colorBg} ${subj.colorText} flex items-center justify-center shrink-0 border ${subj.colorBorder} group-hover:scale-105 transition-transform`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100 group-hover:text-sky-600 transition-colors">
                    {subj.name}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                    {subj.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs text-sky-600 font-bold shrink-0">
                <span>Làm câu hỏi</span>
                <ChevronRight className="w-4 h-4 text-slate-300 ml-1" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal phóng to ảnh */}
      {zoomImg && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex flex-col items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setZoomImg(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[92vh] bg-white dark:bg-slate-900 rounded-3xl p-3 sm:p-4 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 mb-2">
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                {zoomImg.title}
              </span>
              <button
                type="button"
                onClick={() => setZoomImg(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 cursor-pointer transition"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full flex-1 overflow-auto flex items-center justify-center p-1">
              <img
                src={zoomImg.src}
                alt={zoomImg.title}
                className="max-w-full max-h-[80vh] object-contain rounded-xl select-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
