import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Languages, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Clock, 
  Lightbulb, 
  BookOpen, 
  HelpCircle, 
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Award,
  AlertCircle,
  Lock,
  Brain,
  X,
  FileText,
  ZoomIn,
  Send
} from 'lucide-react';
import { Subject, Chapter, LessonPreview, SubjectId, QuizQuestion, QuestionAnalyticsRecord } from '../../types';
import { INITIAL_SUBJECTS, INITIAL_CHAPTERS } from '../../data/mockData';
import { StorageService } from '../../services/storage';
import { MathView } from '../common/MathView';
import { EnglishUnitView } from '../english/EnglishUnitView';
import { MathLesson10View } from '../math/MathLesson10View';
import { MathLesson11View } from '../math/MathLesson11View';
import { MathLesson12View } from '../math/MathLesson12View';
import { MathLesson13View } from '../math/MathLesson13View';
import { MathLesson14View } from '../math/MathLesson14View';
import { MathLesson15View } from '../math/MathLesson15View';
import { MathLesson16View } from '../math/MathLesson16View';
import { MathLesson17View } from '../math/MathLesson17View';
import { MathLesson18View } from '../math/MathLesson18View';
import { MathLesson19View } from '../math/MathLesson19View';
import { MathLesson20View } from '../math/MathLesson20View';
import { MathLesson21View } from '../math/MathLesson21View';
import { MathLesson22View } from '../math/MathLesson22View';
import { MathLesson23View } from '../math/MathLesson23View';
import { MathLesson24View } from '../math/MathLesson24View';
import { PreparationSheetModal } from '../common/PreparationSheetModal';
import confetti from 'canvas-confetti';

interface LessonsTabProps {
  onGoToQuestionsForLesson?: (lessonId: string) => void;
  onUpdateTitle?: (title: string, onBack?: () => void) => void;
  initialLessonId?: string | null;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Calculator,
  Languages,
};

export const LessonsTab: React.FC<LessonsTabProps> = ({
  onGoToQuestionsForLesson,
  initialLessonId,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<LessonPreview | null>(null);

  // Active section inside the detailed lesson view: Đúng 2 tab theo Mục 1
  const [lessonActiveSection, setLessonActiveSection] = useState<'concepts' | 'didyouknow'>('concepts');

  // Inline Vocabulary Practice Quiz states (đặt ở cuối tab Từ vựng theo yêu cầu)
  const [vQuizIndex, setVQuizIndex] = useState(0);
  const [vQuizSelected, setVQuizSelected] = useState<number | null>(null);
  const [vQuizIsCorrect, setVQuizIsCorrect] = useState<boolean | null>(null);
  const [vQuizWrongCount, setVQuizWrongCount] = useState(0);
  const [vQuizScore, setVQuizScore] = useState(0);
  const [vQuizFinished, setVQuizFinished] = useState(false);

  // KHTN 8: Luồng câu hỏi trắc nghiệm & tiến độ
  const [khtnInQuiz, setKhtnInQuiz] = useState(false);
  const [khtnQIndex, setKhtnQIndex] = useState(0);
  const [khtnSelectedOption, setKhtnSelectedOption] = useState<number | null>(null);
  const [khtnIsCorrect, setKhtnIsCorrect] = useState(false);
  const [khtnWrongSelections, setKhtnWrongSelections] = useState<number[]>([]);
  const [khtnWrongAttempts, setKhtnWrongAttempts] = useState(0);
  const [khtnFirstTryCount, setKhtnFirstTryCount] = useState(0);
  const [khtnQuizFinished, setKhtnQuizFinished] = useState(false);
  const [khtnReadNotification, setKhtnReadNotification] = useState<string | null>(null);
  const [khtnLockedAlert, setKhtnLockedAlert] = useState<string | null>(null);
  const [khtnActiveHintLevel, setKhtnActiveHintLevel] = useState(0);
  const [khtnShowReference, setKhtnShowReference] = useState(false);
  const [prepSheetLesson, setPrepSheetLesson] = useState<LessonPreview | null>(null);
  const [quizZoomImg, setQuizZoomImg] = useState<{ src: string; title: string } | null>(null);

  const allLessons = StorageService.getAllLessons();

  const handleSelectSubject = (subj: Subject) => {
    setSelectedSubject(subj);
    setSelectedChapter(null);
    setSelectedLesson(null);
    setKhtnInQuiz(false);
    setKhtnLockedAlert(null);
  };

  const handleSelectChapter = (ch: Chapter) => {
    setSelectedChapter(ch);
    setSelectedLesson(null);
    setKhtnInQuiz(false);
    setKhtnLockedAlert(null);
  };

  const handleSelectLesson = (lesson: LessonPreview) => {
    setSelectedLesson(lesson);
    setLessonActiveSection('concepts');
    setVQuizIndex(0);
    setVQuizSelected(null);
    setVQuizIsCorrect(null);
    setVQuizWrongCount(0);
    setVQuizScore(0);
    setVQuizFinished(false);
    setKhtnReadNotification(null);
    setKhtnLockedAlert(null);

    // Phục hồi hoặc khởi tạo trạng thái làm quiz KHTN từ Storage
    const savedKhtn = StorageService.getKhtnQuizState(lesson.id);
    if (savedKhtn) {
      setKhtnQIndex(savedKhtn.qIndex || 0);
      setKhtnFirstTryCount(savedKhtn.firstTryCount || 0);
      setKhtnWrongAttempts(savedKhtn.wrongAttempts || 0);
      setKhtnWrongSelections(savedKhtn.wrongSelections || []);
      setKhtnQuizFinished(savedKhtn.isFinished || false);
    } else {
      setKhtnQIndex(0);
      setKhtnFirstTryCount(0);
      setKhtnWrongAttempts(0);
      setKhtnWrongSelections([]);
      setKhtnQuizFinished(false);
    }

    setKhtnInQuiz(false);
    setKhtnSelectedOption(null);
    setKhtnIsCorrect(false);
    setKhtnActiveHintLevel(0);
    setKhtnShowReference(false);

    // Lưu tiến độ đọc bài mà KHÔNG tự ý đánh dấu hoàn thành bài
    StorageService.saveReadingProgress({
      lessonId: lesson.id,
      subjectId: lesson.subjectId,
      lastVisitedAt: new Date().toISOString(),
      currentSection: 'concepts',
      sectionIndex: 0,
      percentage: 25,
      isFinished: false,
    });
  };

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

  // KHTN 8: Xử lý bấm "Hoàn thành đọc bài" (+10 ⭐, +15 💧)
  const handleMarkKhtnRead = (lessonId: string) => {
    const res = StorageService.markLessonRead(lessonId);
    if (!res.alreadyRewarded) {
      try {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch {}
      setKhtnReadNotification('Đã hoàn thành đọc bài (+10 ⭐, +15 💧)');
    } else {
      setKhtnReadNotification('Em đã hoàn thành đọc bài này trước đó (+10 ⭐, +15 💧)');
    }
    setTimeout(() => {
      setKhtnReadNotification(null);
    }, 4500);
  };

  const handleStartKhtnQuiz = () => {
    if (!selectedLesson) return;
    // Khôi phục câu đang dở dang nếu có
    const savedState = StorageService.getKhtnQuizState(selectedLesson.id);
    if (savedState && !savedState.isFinished) {
      setKhtnQIndex(savedState.qIndex || 0);
      setKhtnFirstTryCount(savedState.firstTryCount || 0);
      setKhtnWrongAttempts(savedState.wrongAttempts || 0);
      setKhtnWrongSelections(savedState.wrongSelections || []);
      setKhtnQuizFinished(false);
    } else if (savedState?.isFinished) {
      // Làm lại bài
      setKhtnQIndex(0);
      setKhtnFirstTryCount(0);
      setKhtnWrongAttempts(0);
      setKhtnWrongSelections([]);
      setKhtnQuizFinished(false);
    } else {
      setKhtnQIndex(0);
      setKhtnFirstTryCount(0);
      setKhtnWrongAttempts(0);
      setKhtnWrongSelections([]);
      setKhtnQuizFinished(false);
    }

    setKhtnSelectedOption(null);
    setKhtnIsCorrect(false);
    setKhtnActiveHintLevel(0);
    setKhtnShowReference(false);
    setKhtnInQuiz(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKhtnSelectOption = (idx: number, currentQ: QuizQuestion) => {
    if (khtnIsCorrect) return;
    if (khtnWrongSelections.includes(idx)) return;

    setKhtnSelectedOption(idx);
    const isCorrect = idx === currentQ.correctIndex;

    if (isCorrect) {
      setKhtnIsCorrect(true);
      const isFirstTry = khtnWrongSelections.length === 0;
      const newFirstTryCount = isFirstTry ? khtnFirstTryCount + 1 : khtnFirstTryCount;
      if (isFirstTry) {
        setKhtnFirstTryCount(newFirstTryCount);
      }
      try {
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 } });
      } catch {}

      // Lưu ngay tiến độ câu hỏi này vào Storage
      if (selectedLesson) {
        StorageService.saveKhtnQuizState(selectedLesson.id, {
          qIndex: khtnQIndex,
          firstTryCount: newFirstTryCount,
          wrongAttempts: khtnWrongAttempts,
          isFinished: false,
          wrongSelections: khtnWrongSelections,
        });
      }
    } else {
      const updatedWrong = [...khtnWrongSelections, idx];
      const updatedAttempts = khtnWrongAttempts + 1;
      setKhtnWrongSelections(updatedWrong);
      setKhtnWrongAttempts(updatedAttempts);

      // Tự động chuyển cấp độ gợi ý:
      // Lần sai 1 -> Cấp độ 1 (index 0)
      // Lần sai 2 -> Cấp độ 2 (index 1)
      // Lần sai 3 -> Cấp độ 3 (index 2)
      const maxLevels = currentQ.hints ? currentQ.hints.length : 1;
      const nextLevel = Math.min(updatedWrong.length - 1, maxLevels - 1);
      setKhtnActiveHintLevel(Math.max(0, nextLevel));

      if (selectedLesson && selectedSubject) {
        // Lưu ngay phương án vừa chọn sai vào Storage để nếu thoát giữa chừng vẫn lưu
        StorageService.saveKhtnQuizState(selectedLesson.id, {
          qIndex: khtnQIndex,
          firstTryCount: khtnFirstTryCount,
          wrongAttempts: updatedAttempts,
          isFinished: false,
          wrongSelections: updatedWrong,
        });

        StorageService.recordWrongMistake({
          lessonId: selectedLesson.id,
          subjectId: selectedSubject.id,
          subjectName: selectedSubject.name,
          lessonTitle: selectedLesson.title,
          lessonNumber: selectedLesson.lessonNumber,
          questionId: currentQ.id,
          questionText: currentQ.question,
          options: currentQ.options,
          correctIndex: currentQ.correctIndex,
          userWrongIndex: idx,
          explanation: currentQ.explanation,
          hint: currentQ.hint,
        });
      }
    }
  };

  const handleKhtnNextQuestion = (totalQuestions: number, currentQ: QuizQuestion) => {
    if (!selectedLesson || !selectedChapter || !selectedSubject) return;
    
    // Lưu bản ghi phân tích câu hỏi
    const isFirstTry = khtnWrongSelections.length === 0;
    const analyticsRecord: QuestionAnalyticsRecord = {
      id: `rec_${currentQ.id}_${Date.now()}`,
      subjectId: selectedSubject.id,
      chapterId: selectedChapter.id,
      lessonId: selectedLesson.id,
      questionId: currentQ.id,
      knowledgeTopic: currentQ.knowledgeTopic || 'Kiến thức trọng tâm',
      correctIndex: currentQ.correctIndex,
      selectedAnswersHistory: [...khtnWrongSelections, currentQ.correctIndex],
      attemptsCount: khtnWrongSelections.length + 1,
      isCorrectFirstTry: isFirstTry,
      hintsUsedCount: khtnWrongSelections.length > 0 ? 1 : 0,
      isFinalCorrect: true,
      completedAt: new Date().toISOString(),
    };
    StorageService.saveQuestionAnalytics(analyticsRecord);

    if (khtnQIndex < totalQuestions - 1) {
      const nextQIndex = khtnQIndex + 1;
      setKhtnQIndex(nextQIndex);
      setKhtnSelectedOption(null);
      setKhtnIsCorrect(false);
      setKhtnWrongSelections([]);
      setKhtnActiveHintLevel(0);
      setKhtnShowReference(false);

      // Lưu tiến độ câu tiếp theo
      StorageService.saveKhtnQuizState(selectedLesson.id, {
        qIndex: nextQIndex,
        firstTryCount: khtnFirstTryCount,
        wrongAttempts: khtnWrongAttempts,
        isFinished: false,
        wrongSelections: [],
      });
    } else {
      // ĐÃ HOÀN THÀNH ĐỦ 5 CÂU HỎI TRẮC NGHIỆM!
      setKhtnQuizFinished(true);
      const finalScore = khtnFirstTryCount + (isFirstTry ? 1 : 0);

      // Lưu trạng thái hoàn tất 5 câu hỏi
      StorageService.saveKhtnQuizState(selectedLesson.id, {
        qIndex: totalQuestions - 1,
        firstTryCount: finalScore,
        wrongAttempts: khtnWrongAttempts,
        isFinished: true,
        wrongSelections: [],
      });

      StorageService.saveQuizProgress({
        quizId: `quiz_${selectedLesson.id}`,
        lessonId: selectedLesson.id,
        subjectId: selectedSubject.id,
        currentQuestionIndex: totalQuestions - 1,
        selectedAnswers: {},
        isFinished: true,
        correctAnswersCount: finalScore,
        totalQuestions,
        wrongQuestionIds: [],
        lastVisitedAt: new Date().toISOString(),
      });

      // Kiểm tra trạng thái đã nộp phiếu chuẩn bị bài
      const isSheetDone = StorageService.isPreparationSheetSubmitted(selectedLesson.id);
      if (isSheetDone) {
        if (StorageService.isLessonRead(selectedLesson.id)) {
          StorageService.markLessonFullyCompleted(selectedLesson.id);
          StorageService.claimLessonReward(selectedLesson.id, 15, 20);
        }
      } else {
        // Tự động mở Phiếu chuẩn bị bài để học sinh hoàn thành và gửi
        setPrepSheetLesson(selectedLesson);
      }

      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.5 },
        });
      } catch {}
    }
  };

  const handleKhtnResetQuiz = () => {
    if (selectedLesson) {
      StorageService.clearKhtnQuizState(selectedLesson.id);
    }
    setKhtnQIndex(0);
    setKhtnSelectedOption(null);
    setKhtnIsCorrect(false);
    setKhtnWrongSelections([]);
    setKhtnWrongAttempts(0);
    setKhtnFirstTryCount(0);
    setKhtnActiveHintLevel(0);
    setKhtnShowReference(false);
    setKhtnQuizFinished(false);
  };

  const handleVQuizSelect = (idx: number, correctIdx: number) => {
    if (vQuizIsCorrect) return;
    setVQuizSelected(idx);
    if (idx === correctIdx) {
      setVQuizIsCorrect(true);
      if (vQuizWrongCount === 0) {
        setVQuizScore(prev => prev + 1);
      }
      try {
        confetti({ particleCount: 25, spread: 50, origin: { y: 0.7 } });
      } catch {}
    } else {
      setVQuizIsCorrect(false);
      setVQuizWrongCount(prev => prev + 1);
    }
  };

  const handleVQuizNext = (totalQuestions: number) => {
    if (vQuizIndex < totalQuestions - 1) {
      setVQuizIndex(prev => prev + 1);
      setVQuizSelected(null);
      setVQuizIsCorrect(null);
      setVQuizWrongCount(0);
    } else {
      setVQuizFinished(true);
    }
  };

  const handleVQuizReset = () => {
    setVQuizIndex(0);
    setVQuizSelected(null);
    setVQuizIsCorrect(null);
    setVQuizWrongCount(0);
    setVQuizScore(0);
    setVQuizFinished(false);
  };

  const handleBack = () => {
    if (selectedLesson) {
      setSelectedLesson(null);
    } else if (selectedChapter) {
      setSelectedChapter(null);
    } else if (selectedSubject) {
      setSelectedSubject(null);
    }
  };

  const handleMarkCompleted = (lessonId: string) => {
    StorageService.markLessonCompleted(lessonId);
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {}
    if (selectedLesson) {
      setSelectedLesson({ ...selectedLesson, isCompleted: true });
    }
  };

  // ==================== LEVEL 4: CHI TIẾT BÀI HỌC ====================
  if (selectedLesson && selectedChapter && selectedSubject) {
    const isDone = StorageService.isLessonCompleted(selectedLesson.id);

    // ==================== TRÌNH BÀY TRỰC TIẾP CHO TOÁN 8 (KHÔNG CHIA TAB) ====================
    if (selectedSubject.id === 'toan') {
      const subjectBadge = 'Toán 8';
      const khtnQuiz = StorageService.getQuizForLesson(selectedLesson.id);
      const khtnQuestions = khtnQuiz?.questions || [];

      // Màn hình làm 5 câu hỏi trắc nghiệm của bài học
      if (khtnInQuiz) {
        const currentQ = khtnQuestions[khtnQIndex];

        if (khtnQuizFinished) {
          const isSheetDone = StorageService.isPreparationSheetSubmitted(selectedLesson.id);

          const handleExitQuiz = () => {
            if (!StorageService.isPreparationSheetSubmitted(selectedLesson.id)) {
              setKhtnLockedAlert('Em hãy hoàn thành và gửi phiếu học tập trước khi kết thúc nội dung này nhé!');
              setTimeout(() => setKhtnLockedAlert(null), 4000);
            }
            setKhtnInQuiz(false);
            setSelectedLesson(null);
          };

          return (
            <div className="space-y-4 animate-in fade-in duration-150 pb-8">
              {/* Top Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handleExitQuiz}
                  className="min-h-[40px] px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-700 dark:text-cyan-300 font-bold text-xs flex items-center gap-1.5 shadow-2xs hover:bg-cyan-50 transition cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Danh sách bài học</span>
                </button>

                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                  Hoàn thành 5/5 câu
                </span>
              </div>

              {/* Summary Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mx-auto shadow-inner">
                  <Award className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-slate-100">
                    Chúc mừng em đã hoàn thành 5 câu hỏi! 🎉
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    {selectedLesson.title}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto pt-1">
                  <div className="p-3 rounded-2xl bg-cyan-50/60 dark:bg-slate-800/60 border border-cyan-100 dark:border-slate-700">
                    <span className="text-[11px] font-bold text-slate-400 block uppercase">
                      Đúng lần đầu
                    </span>
                    <span className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
                      {khtnFirstTryCount} / {khtnQuestions.length}
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span className="text-[11px] font-bold text-slate-400 block uppercase">
                      Số lần chọn lại
                    </span>
                    <span className="text-xl font-extrabold text-amber-600 dark:text-amber-400">
                      {khtnWrongAttempts}
                    </span>
                  </div>
                </div>

                {/* Yêu cầu bắt buộc: Gửi Phiếu chuẩn bị bài */}
                {!isSheetDone ? (
                  <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 space-y-2.5 text-left max-w-sm mx-auto shadow-2xs">
                    <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-extrabold text-xs sm:text-sm">
                      <FileText className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Bước bắt buộc: Gửi Phiếu chuẩn bị bài</span>
                    </div>
                    <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                      Em hãy hoàn thành và gửi phiếu học tập trước khi kết thúc nội dung này nhé! Sau khi gửi thành công, bài học sẽ được xác nhận hoàn thành và nhận thưởng sao.
                    </p>
                    <button
                      onClick={() => setPrepSheetLesson(selectedLesson)}
                      className="w-full min-h-[42px] rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition cursor-pointer active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Điền & Gửi Phiếu chuẩn bị bài</span>
                    </button>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-bold flex items-center justify-center gap-2 max-w-sm mx-auto">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Đã gửi Phiếu chuẩn bị bài và hoàn thành bài học! (+15 ⭐, +20 💧)</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-2 pt-2 max-w-sm mx-auto">
                  <button
                    onClick={handleKhtnResetQuiz}
                    className="flex-1 min-h-[42px] px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Làm lại 5 câu hỏi</span>
                  </button>

                  <button
                    onClick={() => setKhtnInQuiz(false)}
                    className="flex-1 min-h-[42px] px-4 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow-sm shadow-cyan-600/20"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Xem lại kiến thức</span>
                  </button>
                </div>
              </div>

              {prepSheetLesson && (
                <PreparationSheetModal
                  isOpen={!!prepSheetLesson}
                  onClose={() => setPrepSheetLesson(null)}
                  userId={StorageService.getCurrentUser()?.id || 'guest'}
                  studentName={StorageService.getCurrentUser()?.displayName || 'Học sinh'}
                  lessonId={prepSheetLesson.id}
                  lessonTitle={prepSheetLesson.title}
                  subjectId={selectedSubject.id}
                  mandatory={true}
                  onSubmittedSuccessfully={() => {
                    StorageService.markPreparationSheetSubmitted(prepSheetLesson.id);
                    if (StorageService.isLessonRead(prepSheetLesson.id)) {
                      StorageService.markLessonFullyCompleted(prepSheetLesson.id);
                      StorageService.claimLessonReward(prepSheetLesson.id, 15, 20);
                    }
                    try {
                      confetti({ particleCount: 60, spread: 70, origin: { y: 0.5 } });
                    } catch {}
                  }}
                />
              )}
            </div>
          );
        }

        // Đang làm câu hỏi trắc nghiệm
        return (
          <div className="space-y-3.5 animate-in fade-in duration-150 pb-8">
            {/* Top Navigation Bar */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setKhtnInQuiz(false)}
                className="min-h-[38px] px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center gap-1.5 shadow-2xs hover:bg-slate-100 transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Xem lại kiến thức bài học</span>
              </button>

              <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300">
                {subjectBadge} · 5 Câu hỏi
              </span>
            </div>

            {/* Question Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
              {/* Question Header & Counter */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="text-xs font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  Câu hỏi {khtnQIndex + 1} / {khtnQuestions.length}
                </span>

                <div className="w-24 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-cyan-500 rounded-full transition-all duration-300"
                    style={{ width: `${((khtnQIndex + (khtnIsCorrect ? 1 : 0)) / khtnQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Image if present (cho các bài như Bài 20 có biểu đồ SGK) */}
              {currentQ?.imageUrl && (
                <div className="flex flex-col items-center pt-1 pb-1">
                  <div 
                    onClick={() => setQuizZoomImg({ src: currentQ.imageUrl!, title: currentQ.imageAlt || 'Biểu đồ SGK' })}
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
              <div className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 leading-snug whitespace-pre-line">
                <MathView text={currentQ ? currentQ.question : ''} />
              </div>

              {/* Bắt buộc hiển thị mỗi phương án trên một dòng riêng (xếp dọc A, B, C, D từ trên xuống dưới) */}
              <div id="quiz-options-container" className="flex flex-col space-y-2.5 sm:space-y-3 w-full pt-1">
                {currentQ?.options.map((opt, optIdx) => {
                  const letter = String.fromCharCode(65 + optIdx);
                  const isThisChosen = khtnSelectedOption === optIdx;
                  const isWrong = khtnWrongSelections.includes(optIdx);
                  const isCorrectOption = khtnIsCorrect && optIdx === currentQ.correctIndex;

                  let btnStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-cyan-400 hover:shadow-xs';

                  if (isCorrectOption) {
                    btnStyle = 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-500 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-400 font-bold';
                  } else if (isWrong) {
                    btnStyle = 'bg-rose-50/70 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300 line-through opacity-70 cursor-not-allowed';
                  } else if (isThisChosen && !khtnIsCorrect) {
                    btnStyle = 'bg-cyan-50 dark:bg-cyan-950/70 border-cyan-400 text-cyan-950 dark:text-cyan-100 font-semibold';
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={khtnIsCorrect || isWrong}
                      onClick={() => handleKhtnSelectOption(optIdx, currentQ)}
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
                      <span className="flex-1 font-medium leading-relaxed break-words whitespace-normal pt-0.5 text-slate-800 dark:text-slate-200">
                        <MathView text={opt} />
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback khi ĐÚNG */}
              {khtnIsCorrect && (
                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 space-y-1.5 animate-in fade-in">
                  <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-200 font-black text-xs sm:text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>Chính xác! Làm rất tốt! 👏</span>
                  </div>
                  {currentQ?.explanation && (
                    <div className="text-xs text-slate-700 dark:text-slate-300 pl-7 leading-relaxed font-medium">
                      <MathView text={currentQ.explanation} />
                    </div>
                  )}
                </div>
              )}

              {/* TRỢ LÝ AI GỢI Ý HỌC TẬP (Khi học sinh trả lời sai) */}
              {!khtnIsCorrect && khtnWrongSelections.length > 0 && currentQ && (
                <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-950 dark:text-amber-100 space-y-2.5 animate-in fade-in duration-200">
                  {/* Tiêu đề Trợ lý AI gợi ý học tập (Cấp độ 1/2/3) */}
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold flex items-center gap-1.5 text-xs text-amber-800 dark:text-amber-300">
                      <Brain className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Trợ lý AI gợi ý học tập (Cấp độ {khtnActiveHintLevel + 1})</span>
                    </span>

                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-200/60 text-amber-900 dark:bg-amber-900/60 dark:text-amber-200">
                      Chọn lại thoải mái
                    </span>
                  </div>

                  {/* Nội dung gợi ý của cấp độ hiện tại */}
                  <div className="text-xs leading-relaxed font-medium text-slate-800 dark:text-slate-200 bg-white/70 dark:bg-slate-900/70 p-2.5 rounded-xl border border-amber-200/60 dark:border-amber-900/40">
                    <MathView text={currentQ.hints?.[khtnActiveHintLevel] || currentQ.hint || ''} />
                  </div>

                  {/* Phần kiến thức liên quan để học sinh xem lại nội dung bài học */}
                  {currentQ.lessonSectionRef && (
                    <div className="pt-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-t border-amber-200/60 dark:border-amber-900/50">
                      <span className="text-[11px] text-amber-800 dark:text-amber-300">
                        Kiến thức liên quan: <strong>{currentQ.lessonSectionRef}</strong>
                      </span>
                      <button
                        type="button"
                        onClick={() => setKhtnShowReference(!khtnShowReference)}
                        className="text-[11px] font-bold text-cyan-700 hover:text-cyan-800 dark:text-cyan-400 underline flex items-center gap-1 cursor-pointer w-fit"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{khtnShowReference ? 'Ẩn kiến thức liên quan' : 'Xem lại kiến thức liên quan'}</span>
                      </button>
                    </div>
                  )}

                  {/* Khung đối chiếu kiến thức liên quan khi học sinh bấm xem */}
                  {khtnShowReference && (
                    <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-300/80 dark:border-slate-700 space-y-2 text-xs animate-in zoom-in-95">
                      <div className="flex items-center justify-between font-bold text-slate-800 dark:text-slate-200">
                        <span className="flex items-center gap-1.5 text-cyan-700 dark:text-cyan-300 font-black">
                          <BookOpen className="w-3.5 h-3.5 text-cyan-600" />
                          <span>Đối chiếu kiến thức: {currentQ.lessonSectionRef}</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => setKhtnShowReference(false)}
                          className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="p-2.5 rounded-lg bg-sky-50/50 border-sky-100 dark:bg-slate-800/80 border dark:border-slate-700 leading-relaxed text-slate-700 dark:text-slate-200">
                        {selectedLesson.id === 'toan_ch3_b10' ? (
                          currentQ.lessonSectionRef?.includes('Tổng các góc') || currentQ.lessonSectionRef?.includes('3.') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Tổng các góc của tứ giác:</strong>
                              <div className="text-[11px] font-extrabold text-sky-800 dark:text-sky-200 py-0.5">
                                <MathView text="$$\widehat{A} + \widehat{B} + \widehat{C} + \widehat{D} = 360^\circ$$" />
                              </div>
                              <div className="text-[11px] text-slate-600 dark:text-slate-300">
                                <span>Trong đó: </span>
                                <MathView text="$\widehat{A}, \widehat{B}, \widehat{C}, \widehat{D}$" />
                                <span> là bốn góc của tứ giác ABCD.</span>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Tứ giác:</strong>
                              <p className="text-[11px] leading-relaxed">
                                Tứ giác ABCD gồm bốn cạnh AB, BC, CD, DA. Bốn điểm A, B, C, D là các đỉnh.
                              </p>
                              <ul className="text-[11px] space-y-0.5 text-slate-600 dark:text-slate-300">
                                <li>• Hai đỉnh không cùng thuộc một cạnh là hai đỉnh đối nhau.</li>
                                <li>• Hai cạnh không có đỉnh chung là hai cạnh đối nhau.</li>
                                <li>• Đoạn thẳng nối hai đỉnh đối nhau là đường chéo. Hai đường chéo là AC và BD.</li>
                                <li>• Tứ giác lồi là tứ giác mà hai đỉnh bất kì thuộc một cạnh luôn nằm về một phía của đường thẳng đi qua hai đỉnh còn lại.</li>
                              </ul>
                            </div>
                          )
                        ) : selectedLesson.id === 'toan_ch3_b11' ? (
                          currentQ.lessonSectionRef?.includes('Dấu hiệu') || currentQ.lessonSectionRef?.includes('4.') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Dấu hiệu nhận biết:</strong>
                              <p className="text-[11px] leading-relaxed">
                                Hình thang có hai đường chéo bằng nhau là hình thang cân.
                              </p>
                            </div>
                          ) : currentQ.lessonSectionRef?.includes('Tính chất') || currentQ.lessonSectionRef?.includes('3.') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Tính chất:</strong>
                              <div className="space-y-0.5 text-[11px] text-slate-700 dark:text-slate-200">
                                <div>• Hai cạnh bên bằng nhau: <strong>AD = BC</strong></div>
                                <div>• Hai đường chéo bằng nhau: <strong>AC = BD</strong></div>
                              </div>
                            </div>
                          ) : currentQ.lessonSectionRef?.includes('cân') || currentQ.lessonSectionRef?.includes('2.') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Hình thang cân:</strong>
                              <p className="text-[11px] leading-relaxed">
                                Hình thang có hai góc kề một đáy bằng nhau.
                              </p>
                              <p className="text-[11px] text-slate-600 dark:text-slate-300">
                                Với hình thang cân ABCD có AB ∥ CD:
                              </p>
                              <div className="text-[11px] font-bold text-sky-800 dark:text-sky-200 space-y-1 py-1">
                                <MathView text="$$\widehat{A} = \widehat{B}$$" />
                                <MathView text="$$\widehat{C} = \widehat{D}$$" />
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Hình thang:</strong>
                              <p className="text-[11px] leading-relaxed">
                                Tứ giác có hai cạnh đối song song.
                              </p>
                              <p className="text-[11px] text-slate-600 dark:text-slate-300">
                                Với hình thang ABCD có AB ∥ CD:
                              </p>
                              <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                                <li>AB và CD là hai đáy.</li>
                                <li>AD và BC là hai cạnh bên.</li>
                              </ul>
                            </div>
                          )
                        ) : selectedLesson.id === 'toan_ch3_b12' ? (
                          currentQ.lessonSectionRef?.includes('Dấu hiệu') || currentQ.lessonSectionRef?.includes('3.') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">5 Dấu hiệu nhận biết hình bình hành:</strong>
                              <ol className="text-[11px] space-y-0.5 text-slate-600 dark:text-slate-300 list-decimal list-inside">
                                <li>Tứ giác có các cạnh đối song song.</li>
                                <li>Tứ giác có các cạnh đối bằng nhau.</li>
                                <li>Tứ giác có một cặp cạnh đối vừa song song vừa bằng nhau.</li>
                                <li>Tứ giác có các góc đối bằng nhau.</li>
                                <li>Tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường.</li>
                              </ol>
                            </div>
                          ) : currentQ.lessonSectionRef?.includes('Tính chất') || currentQ.lessonSectionRef?.includes('2.') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Tính chất hình bình hành:</strong>
                              <ul className="text-[11px] space-y-0.5 text-slate-600 dark:text-slate-300">
                                <li>• Các cạnh đối bằng nhau: <strong>AB = CD, AD = BC</strong></li>
                                <li>• Các góc đối bằng nhau: <MathView text="$\widehat{A} = \widehat{C}, \widehat{B} = \widehat{D}$" /></li>
                                <li>• Hai đường chéo cắt nhau tại trung điểm của mỗi đường: <strong>OA = OC, OB = OD</strong></li>
                              </ul>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Định nghĩa hình bình hành:</strong>
                              <p className="text-[11px] leading-relaxed">
                                Hình bình hành là tứ giác có các cạnh đối song song.
                              </p>
                              <p className="text-[11px] text-slate-600 dark:text-slate-300">
                                Với hình bình hành ABCD: <strong>AB ∥ CD</strong> và <strong>AD ∥ BC</strong>.
                              </p>
                            </div>
                          )
                        ) : selectedLesson.id === 'toan_ch3_b13' ? (
                          currentQ.lessonSectionRef?.includes('Dấu hiệu') || currentQ.lessonSectionRef?.includes('3.') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Dấu hiệu nhận biết hình chữ nhật:</strong>
                              <ol className="text-[11px] space-y-0.5 text-slate-600 dark:text-slate-300 list-decimal list-inside">
                                <li>Hình bình hành có một góc vuông là hình chữ nhật.</li>
                                <li>Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật.</li>
                                <li>Tứ giác có ba góc vuông là hình chữ nhật.</li>
                              </ol>
                            </div>
                          ) : currentQ.lessonSectionRef?.includes('Tính chất') || currentQ.lessonSectionRef?.includes('2.') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Tính chất hình chữ nhật:</strong>
                              <ul className="text-[11px] space-y-0.5 text-slate-600 dark:text-slate-300">
                                <li>• Hình chữ nhật có tất cả các tính chất của hình bình hành.</li>
                                <li>• Hai đường chéo bằng nhau: <strong>AC = BD</strong></li>
                                <li>• Cắt nhau tại trung điểm của mỗi đường: <strong>OA = OB = OC = OD</strong></li>
                              </ul>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Định nghĩa hình chữ nhật:</strong>
                              <p className="text-[11px] leading-relaxed">
                                Hình chữ nhật là tứ giác có bốn góc vuông.
                              </p>
                              <div className="text-[11px] text-slate-600 dark:text-slate-300 py-0.5">
                                <MathView text="$$\widehat{A} = \widehat{B} = \widehat{C} = \widehat{D} = 90^\circ$$" />
                              </div>
                            </div>
                          )
                        ) : selectedLesson.id === 'toan_ch3_b14' ? (
                          currentQ.lessonSectionRef?.includes('Hình vuông') || currentQ.lessonSectionRef?.includes('2.') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Hình vuông:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • <strong>Định nghĩa:</strong> Tứ giác có bốn góc vuông và bốn cạnh bằng nhau.
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                • <strong>Tính chất hai đường chéo:</strong> Bằng nhau, vuông góc, cắt nhau tại trung điểm mỗi đường và là các đường phân giác của các góc.
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                • <strong>Dấu hiệu:</strong> Hình chữ nhật có hai cạnh kề bằng nhau (hoặc hai đường chéo vuông góc, hoặc một đường chéo là phân giác) là hình vuông.
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Hình thoi:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • <strong>Định nghĩa:</strong> Tứ giác có bốn cạnh bằng nhau.
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                • <strong>Tính chất hai đường chéo:</strong> Vuông góc với nhau và là các đường phân giác của các góc trong hình thoi.
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                • <strong>Dấu hiệu:</strong> Hình bình hành có hai cạnh kề bằng nhau (hoặc hai đường chéo vuông góc, hoặc một đường chéo là phân giác) là hình thoi.
                              </p>
                            </div>
                          )
                        ) : selectedLesson.id === 'toan_ch4_b15' ? (
                          currentQ.lessonSectionRef?.includes('3.') || currentQ.lessonSectionRef?.includes('đảo') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">3. Định lí Thalès đảo:</strong>
                              <p className="text-[11px] leading-relaxed">
                                Nếu một đường thẳng cắt hai cạnh của một tam giác và định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ thì đường thẳng ấy song song với cạnh còn lại của tam giác.
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                Nếu <MathView text="$\frac{AB'}{AB} = \frac{AC'}{AC}$" /> thì <MathView text="$B'C' \parallel BC$" />.
                              </p>
                            </div>
                          ) : currentQ.lessonSectionRef?.includes('2.') || currentQ.lessonSectionRef?.includes('Thalès') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">2. Định lí Thalès:</strong>
                              <p className="text-[11px] leading-relaxed">
                                Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì tạo ra các đoạn thẳng tương ứng tỉ lệ.
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                Với tam giác ABC, B' thuộc AB, C' thuộc AC và B'C' ∥ BC: <MathView text="$\frac{AB'}{AB} = \frac{AC'}{AC}$" />.
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">1. Tỉ số hai đoạn thẳng:</strong>
                              <p className="text-[11px] leading-relaxed">
                                Tỉ số hai đoạn thẳng là tỉ số độ dài của chúng khi được đo bằng cùng một đơn vị.
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                Hai cặp đoạn thẳng tỉ lệ nếu <MathView text="$\frac{AB}{CD} = \frac{A'B'}{C'D'}$" />.
                              </p>
                            </div>
                          )
                        ) : selectedLesson.id === 'toan_ch4_b16' ? (
                          currentQ.lessonSectionRef?.includes('1.') || currentQ.lessonSectionRef?.includes('nghĩa') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">1. Định nghĩa:</strong>
                              <p className="text-[11px] leading-relaxed">
                                Đường trung bình của tam giác là đoạn thẳng nối trung điểm hai cạnh của tam giác.
                              </p>
                            </div>
                          ) : currentQ.lessonSectionRef?.includes('2.') || currentQ.lessonSectionRef?.includes('chất') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">2. Tính chất:</strong>
                              <p className="text-[11px] leading-relaxed">
                                Đường trung bình song song với cạnh thứ ba và bằng một nửa cạnh ấy.
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                Với D, E lần lượt là trung điểm AB, AC: <MathView text="$DE \parallel BC$" />, <MathView text="$DE = \frac{1}{2}BC$" />.
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">3. Định lí đảo:</strong>
                              <p className="text-[11px] leading-relaxed">
                                Trong một tam giác, nếu một đường thẳng đi qua trung điểm của một cạnh và song song với cạnh thứ hai thì đi qua trung điểm của cạnh thứ ba.
                              </p>
                            </div>
                          )
                        ) : selectedLesson.id === 'toan_ch4_b17' ? (
                          currentQ.lessonSectionRef?.includes('2.') || currentQ.lessonSectionRef?.includes('Dấu hiệu') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">2. Dấu hiệu nhận biết đường phân giác:</strong>
                              <p className="text-[11px] leading-relaxed">
                                Trong tam giác ABC, nếu D thuộc cạnh BC và <MathView text="$\frac{DB}{DC} = \frac{AB}{AC}$" /> thì AD là đường phân giác của góc A.
                              </p>
                            </div>
                          ) : currentQ.lessonSectionRef?.includes('3.') || currentQ.lessonSectionRef?.includes('vận dụng') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">3. Cách vận dụng:</strong>
                              <p className="text-[11px] leading-relaxed">
                                Sử dụng tính chất đường phân giác để lập tỉ lệ thức rồi giải tìm đoạn thẳng chưa biết.
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">1. Tính chất đường phân giác của tam giác:</strong>
                              <p className="text-[11px] leading-relaxed">
                                Trong tam giác, đường phân giác của một góc chia cạnh đối diện thành hai đoạn thẳng tỉ lệ với hai cạnh kề hai đoạn ấy.
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                Với AD là phân giác góc A: <MathView text="$\frac{DB}{DC} = \frac{AB}{AC}$" />.
                              </p>
                            </div>
                          )
                        ) : selectedLesson.id === 'toan_ch5_b18' ? (
                          currentQ.lessonSectionRef?.includes('b)') || currentQ.lessonSectionRef?.includes('Phân loại') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">b) Phân loại dữ liệu:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • <strong>Dữ liệu là số:</strong> Số liệu rời rạc (từ việc đếm, ví dụ số học sinh); Số liệu liên tục (từ việc đo, ví dụ chiều cao, cân nặng).
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                • <strong>Dữ liệu không là số:</strong> Có thể sắp thứ tự; Không thể sắp thứ tự (ví dụ màu sắc yêu thích).
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">a) Thu thập dữ liệu:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • <strong>Thu thập trực tiếp:</strong> quan sát, làm thí nghiệm, lập bảng hỏi, phỏng vấn, đo đạc,...
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                • <strong>Thu thập gián tiếp:</strong> thu thập thông tin từ những nguồn có sẵn như sách, báo, mạng Internet,...
                              </p>
                            </div>
                          )
                        ) : selectedLesson.id === 'toan_ch5_b19' ? (
                          currentQ.lessonSectionRef?.includes('c)') || currentQ.lessonSectionRef?.includes('cột kép') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">c) Biểu đồ cột kép hay hình quạt tròn:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • <strong>Biểu đồ cột kép:</strong> dùng để so sánh hai nhóm số liệu tương ứng (ví dụ nam và nữ).
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                • <strong>Biểu đồ hình quạt tròn:</strong> dùng để biểu diễn tỉ lệ các phần trong tổng thể.
                              </p>
                            </div>
                          ) : currentQ.lessonSectionRef?.includes('b)') || currentQ.lessonSectionRef?.includes('đoạn thẳng') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">b) Biểu đồ cột hay đoạn thẳng:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • <strong>Biểu đồ cột:</strong> thích hợp để biểu diễn, so sánh số liệu giữa các đối tượng.
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                • <strong>Biểu đồ đoạn thẳng:</strong> thích hợp để biểu diễn sự thay đổi của một đại lượng theo thời gian.
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">a) Biểu đồ tranh hay biểu đồ cột:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • Biểu đồ tranh dùng hình ảnh/biểu tượng; biểu đồ cột dùng các cột. Khi số lượng lớn, phải dùng quá nhiều biểu tượng thì nên chọn biểu đồ cột.
                              </p>
                            </div>
                          )
                        ) : selectedLesson.id === 'toan_ch5_b20' ? (
                          currentQ.lessonSectionRef?.includes('4.') || currentQ.lessonSectionRef?.includes('lưu ý') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">4. Các lưu ý khi đọc và diễn giải biểu đồ:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • Trục đứng không bắt đầu từ 0 có thể làm sự chênh lệch giữa các cột nhìn có vẻ lớn hơn thực tế.
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                • Cần kiểm tra kĩ thang đo và cách chia trục trước khi so sánh hai biểu đồ.
                              </p>
                            </div>
                          ) : currentQ.lessonSectionRef?.includes('3.') || currentQ.lessonSectionRef?.includes('thời gian') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">3. Nhận xét xu hướng và so sánh theo thời gian:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • Biểu đồ đoạn thẳng: điểm cắt nhau giữa hai đường biểu diễn thể hiện giá trị hai đối tượng xấp xỉ nhau tại thời điểm đó.
                              </p>
                            </div>
                          ) : currentQ.lessonSectionRef?.includes('2.') || currentQ.lessonSectionRef?.includes('phần trăm') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">2. Đọc tỉ lệ phần trăm và cơ cấu:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • Số lượng thành phần = (Tổng số × Tỉ lệ %) : 100.
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">1. Đọc và so sánh số liệu giữa các đối tượng:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • So sánh giá trị trên các cột để xác định đối tượng có số lượt bình chọn cao nhất, thấp nhất.
                              </p>
                            </div>
                          )
                        ) : selectedLesson.id === 'toan_ch6_b21' ? (
                          currentQ.lessonSectionRef?.includes('Ví dụ') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Ví dụ:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • Tìm điều kiện xác định để mẫu thức khác 0: <MathView text={"$B \\ne 0$"} />.
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                • Thay giá trị của biến (thỏa mãn ĐKXĐ) vào phân thức rồi tính toán giá trị.
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Định nghĩa phân thức đại số:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • Một phân thức đại số là biểu thức có dạng <MathView text={"$\\frac{A}{B}$"} />, trong đó <MathView text={"$A, B$"} /> là hai đa thức và <MathView text={"$B \\ne 0$"} />.
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                • <MathView text={"$A$"} /> là tử thức (nằm trên), <MathView text={"$B$"} /> là mẫu thức (nằm dưới).
                              </p>
                            </div>
                          )
                        ) : selectedLesson.id === 'toan_ch6_b22' ? (
                          currentQ.lessonSectionRef?.includes('quy đồng') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Cách quy đồng mẫu thức nhiều phân thức:</strong>
                              <ul className="space-y-0.5 text-[11px]">
                                <li>• Phân tích các mẫu thức thành nhân tử rồi tìm mẫu thức chung (MTC).</li>
                                <li>• Tìm nhân tử phụ của mỗi mẫu thức bằng cách lấy MTC chia cho mẫu thức đó.</li>
                                <li>• Nhân cả tử và mẫu của mỗi phân thức với nhân tử phụ tương ứng.</li>
                              </ul>
                            </div>
                          ) : currentQ.lessonSectionRef?.includes('rút gọn') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Cách rút gọn phân thức đại số:</strong>
                              <ul className="space-y-0.5 text-[11px]">
                                <li>• Phân tích tử và mẫu thành nhân tử để tìm nhân tử chung.</li>
                                <li>• Chia cả tử và mẫu cho nhân tử chung đó.</li>
                              </ul>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Tính chất cơ bản của phân thức:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • <MathView text="$\frac{A}{B} = \frac{A \cdot M}{B \cdot M}$" /> (với đa thức <MathView text="$M \ne 0$" />).
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                • <MathView text="$\frac{A}{B} = \frac{A : N}{B : N}$" /> (với nhân tử chung <MathView text="$N \ne 0$" />).
                              </p>
                            </div>
                          )
                        ) : selectedLesson.id === 'toan_ch6_b23' ? (
                          currentQ.lessonSectionRef?.includes('Trừ') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Trừ hai phân thức:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • Cùng mẫu: trừ các tử thức và giữ nguyên mẫu thức.
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                • Khác mẫu: quy đồng mẫu thức rồi trừ các phân thức có cùng mẫu thức vừa tìm được.
                              </p>
                            </div>
                          ) : currentQ.lessonSectionRef?.includes('khác mẫu') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Cộng hai phân thức khác mẫu:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • Quy đồng mẫu thức rồi cộng các phân thức có cùng mẫu thức vừa tìm được.
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Cộng hai phân thức cùng mẫu:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • <MathView text={"$\\frac{A}{M} + \\frac{B}{M} = \\frac{A + B}{M}$"} />
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                • Cộng các tử thức với nhau và giữ nguyên mẫu thức.
                              </p>
                            </div>
                          )
                        ) : selectedLesson.id === 'toan_ch6_b24' ? (
                          currentQ.lessonSectionRef?.includes('chia') || currentQ.knowledgeTopic?.includes('chia') || currentQ.knowledgeTopic?.includes('nghịch đảo') ? (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Quy tắc chia hai phân thức:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • <MathView text={"$\\frac{A}{B} : \\frac{C}{D} = \\frac{A}{B} \\cdot \\frac{D}{C}$"} /> (với <MathView text={"$\\frac{C}{D} \\ne 0$"} />).
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                • Muốn chia phân thức cho phân thức khác 0, ta nhân với phân thức nghịch đảo.
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <strong className="block text-sky-950 dark:text-sky-200 font-bold">Quy tắc nhân hai phân thức:</strong>
                              <p className="text-[11px] leading-relaxed">
                                • <MathView text={"$\\frac{A}{B} \\cdot \\frac{C}{D} = \\frac{A \\cdot C}{B \\cdot D}$"} />
                              </p>
                              <p className="text-[11px] leading-relaxed">
                                • Nhân các tử thức với nhau, nhân các mẫu thức với nhau.
                              </p>
                            </div>
                          )
                        ) : null}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Nút Chuyển câu tiếp theo */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-slate-400">
                  {!khtnIsCorrect ? 'Chọn phương án đúng để tiếp tục' : 'Bấm nút để sang câu tiếp theo'}
                </span>

                {khtnIsCorrect && (
                  <button
                    onClick={() => handleKhtnNextQuestion(khtnQuestions.length, currentQ)}
                    className="min-h-[42px] px-5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-sm shadow-cyan-600/20 transition cursor-pointer"
                  >
                    <span>{khtnQIndex < khtnQuestions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      }

      // Màn hình xem bài học Toán 8 trực tiếp (Không có tab, cuộn dọc tự nhiên, nút bắt đầu làm câu hỏi)
      return (
        <div className="space-y-3.5 animate-in fade-in duration-150 pb-8">
          {/* Navigation Breadcrumb / Back button */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSelectedLesson(null)}
              className="min-h-[40px] px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-700 dark:text-sky-300 hover:bg-sky-50 font-bold text-xs flex items-center gap-1.5 shadow-2xs transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Quay lại {selectedChapter.title.split(':')[0]}</span>
            </button>

            <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300">
              {subjectBadge} · Bài {selectedLesson.lessonNumber}
            </span>
          </div>

          {/* Lesson Full Title & Header Card */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400">
              <span>Bài {selectedLesson.lessonNumber}</span>
              <span>·</span>
              <span className="text-slate-400 font-medium">Thời lượng đọc ~{selectedLesson.readTimeMinutes} phút</span>
            </div>

            <h1 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-slate-100 leading-snug">
              {selectedLesson.title}
            </h1>

            {selectedLesson.summary && (
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-0.5">
                {selectedLesson.summary}
              </p>
            )}

            <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] text-slate-500 font-medium">Chuẩn bị trước bài học:</span>
              <button
                type="button"
                onClick={() => setPrepSheetLesson(selectedLesson)}
                className="flex items-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 px-3 py-1.5 text-xs font-bold hover:bg-emerald-100 transition active:scale-95 shadow-2xs cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-600" />
                <span>Phiếu chuẩn bị bài</span>
              </button>
            </div>
          </div>

          {/* Nội dung kiến thức trọng tâm trình bày trực tiếp, không chia tab */}
          {selectedLesson.id === 'toan_ch3_b10' ? (
            <MathLesson10View />
          ) : selectedLesson.id === 'toan_ch3_b11' ? (
            <MathLesson11View />
          ) : selectedLesson.id === 'toan_ch3_b12' ? (
            <MathLesson12View />
          ) : selectedLesson.id === 'toan_ch3_b13' ? (
            <MathLesson13View />
          ) : selectedLesson.id === 'toan_ch3_b14' ? (
            <MathLesson14View />
          ) : selectedLesson.id === 'toan_ch4_b15' ? (
            <MathLesson15View />
          ) : selectedLesson.id === 'toan_ch4_b16' ? (
            <MathLesson16View />
          ) : selectedLesson.id === 'toan_ch4_b17' ? (
            <MathLesson17View />
          ) : selectedLesson.id === 'toan_ch5_b18' ? (
            <MathLesson18View />
          ) : selectedLesson.id === 'toan_ch5_b19' ? (
            <MathLesson19View />
          ) : selectedLesson.id === 'toan_ch5_b20' ? (
            <MathLesson20View />
          ) : selectedLesson.id === 'toan_ch6_b21' ? (
            <MathLesson21View />
          ) : selectedLesson.id === 'toan_ch6_b22' ? (
            <MathLesson22View />
          ) : selectedLesson.id === 'toan_ch6_b23' ? (
            <MathLesson23View />
          ) : selectedLesson.id === 'toan_ch6_b24' ? (
            <MathLesson24View />
          ) : (
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                <h2 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                  Kiến thức trọng tâm bài học
                </h2>
              </div>

              <div className="space-y-3">
                {selectedLesson.keyConcepts.map((concept, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-cyan-50/40 dark:bg-slate-800/40 border border-cyan-100/70 dark:border-slate-700 space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed"
                  >
                    <h3 className="font-bold text-cyan-950 dark:text-cyan-200 text-sm leading-snug">
                      <MathView text={concept.term} />
                    </h3>

                    {concept.definition && (
                      <div className="leading-relaxed break-words whitespace-pre-line text-xs sm:text-sm">
                        <MathView text={concept.definition} />
                      </div>
                    )}

                    {concept.example && (
                      <div className="leading-relaxed break-words pt-1 text-xs text-slate-600 dark:text-slate-300 bg-white/70 dark:bg-slate-900/70 p-2.5 rounded-lg border border-cyan-100/60 dark:border-slate-700">
                        <span className="font-bold text-slate-800 dark:text-slate-200">Ví dụ: </span>
                        <MathView text={concept.example} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Các điểm ghi nhớ bổ trợ (nếu có) */}
              {selectedLesson.importantTakeaways && selectedLesson.importantTakeaways.length > 0 && (
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1.5">
                  <span className="font-bold text-xs text-slate-800 dark:text-slate-200 block">
                    Ghi nhớ:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {selectedLesson.importantTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="text-cyan-600 font-bold shrink-0">•</span>
                        <span><MathView text={item} /></span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Khung hoàn thành bài học (Quy trình 2 bước) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            {/* Thông báo thưởng khi bấm "Hoàn thành đọc bài" */}
            {khtnReadNotification && (
              <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-bold flex items-center justify-between gap-2 shadow-xs animate-in slide-in-from-bottom-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{khtnReadNotification}</span>
                </div>
                <button
                  onClick={() => setKhtnReadNotification(null)}
                  className="text-emerald-700 hover:text-emerald-900 font-extrabold text-sm px-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            )}

            {/* QUY TRÌNH HOÀN THÀNH BÀI HỌC (2 BƯỚC BẮT BUỘC) */}
            {(() => {
              const isRead = StorageService.isLessonRead(selectedLesson.id);
              const isQuizDone = StorageService.isLessonQuizCompleted(selectedLesson.id);
              const isSheetDone = StorageService.isPreparationSheetSubmitted(selectedLesson.id);
              const savedQuizState = StorageService.getKhtnQuizState(selectedLesson.id);
              const inProgressQIndex = savedQuizState && !savedQuizState.isFinished ? savedQuizState.qIndex : 0;

              return (
                <div className="space-y-2.5">
                  {/* BƯỚC 1: NÚT HOÀN THÀNH ĐỌC BÀI */}
                  <button
                    onClick={() => handleMarkKhtnRead(selectedLesson.id)}
                    className={`min-h-[46px] w-full rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer shadow-xs ${
                      isRead
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-sky-600 hover:bg-sky-700 shadow-sky-600/20 text-white shadow-md active:scale-[0.98]'
                    }`}
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>{isRead ? 'Đã hoàn thành đọc bài (+10 ⭐, +15 💧)' : 'Hoàn thành đọc bài (+10 ⭐, +15 💧)'}</span>
                  </button>

                  {/* BƯỚC 2: NÚT LÀM 5 CÂU HỎI TRẮC NGHIỆM */}
                  {!isRead ? (
                    <button
                      disabled
                      className="min-h-[46px] w-full rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 cursor-not-allowed opacity-80"
                    >
                      <Lock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>Bước 2: Cần bấm "Hoàn thành đọc bài" trước</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleStartKhtnQuiz}
                      className="min-h-[46px] w-full rounded-2xl bg-sky-600 hover:bg-sky-700 shadow-sky-600/20 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition cursor-pointer active:scale-[0.98]"
                    >
                      <span>
                        {isQuizDone
                          ? 'Làm lại 5 câu hỏi trắc nghiệm'
                          : inProgressQIndex > 0
                            ? 'Tiếp tục làm câu hỏi trắc nghiệm'
                            : 'Bắt đầu làm 5 câu hỏi trắc nghiệm'}
                      </span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  )}

                  {/* BƯỚC 3: PHIẾU CHUẨN BỊ BÀI */}
                  {isQuizDone && (
                    !isSheetDone ? (
                      <button
                        onClick={() => setPrepSheetLesson(selectedLesson)}
                        className="min-h-[46px] w-full rounded-2xl bg-amber-600 hover:bg-amber-700 shadow-amber-600/20 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition cursor-pointer active:scale-[0.98]"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Bước 3: Gửi Phiếu chuẩn bị bài (Bắt buộc)</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setPrepSheetLesson(selectedLesson)}
                        className="min-h-[46px] w-full rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-850 dark:text-emerald-200 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition cursor-pointer"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Đã gửi Phiếu chuẩn bị bài (Xem lại)</span>
                      </button>
                    )
                  )}
                </div>
              );
            })()}
          </div>

          {prepSheetLesson && (
            <PreparationSheetModal
              isOpen={!!prepSheetLesson}
              onClose={() => setPrepSheetLesson(null)}
              userId={StorageService.getCurrentUser()?.id || 'guest'}
              studentName={StorageService.getCurrentUser()?.displayName || 'Học sinh'}
              lessonId={prepSheetLesson.id}
              lessonTitle={prepSheetLesson.title}
              subjectId={selectedSubject.id}
              mandatory={true}
              onSubmittedSuccessfully={() => {
                StorageService.markPreparationSheetSubmitted(prepSheetLesson.id);
                if (StorageService.isLessonRead(prepSheetLesson.id)) {
                  StorageService.markLessonFullyCompleted(prepSheetLesson.id);
                  StorageService.claimLessonReward(prepSheetLesson.id, 15, 20);
                }
                setKhtnReadNotification('Đã gửi Phiếu chuẩn bị bài và hoàn thành bài học! (+15 ⭐, +20 💧)');
                try {
                  confetti({ particleCount: 60, spread: 70, origin: { y: 0.5 } });
                } catch {}
              }}
            />
          )}
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

          <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300">
            {selectedSubject.shortName} · {selectedSubject.id === 'tienganh' ? selectedLesson.title : `Bài ${selectedLesson.lessonNumber}`}
          </span>
        </div>

        {/* Lesson Full Title & Header Card */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-sky-100 dark:border-slate-800 shadow-sm space-y-2">
          {selectedSubject.id !== 'tienganh' && (
            <div className="flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400">
              <span>Bài {selectedLesson.lessonNumber}</span>
              <span>·</span>
              <span className="text-slate-400 font-medium">Thời lượng đọc ~{selectedLesson.readTimeMinutes} phút</span>
            </div>
          )}

          <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100 leading-snug">
            {selectedLesson.title}
          </h1>

          {selectedSubject.id !== 'tienganh' && selectedLesson.summary && (
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              {selectedLesson.summary}
            </p>
          )}

          <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
            <span className="text-[11px] text-slate-500 font-medium">
              {selectedSubject?.id === 'tienganh' ? 'Tự học theo Unit:' : 'Chuẩn bị trước bài học:'}
            </span>
            <button
              type="button"
              onClick={() => setPrepSheetLesson(selectedLesson)}
              className="flex items-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 px-3 py-1.5 text-xs font-bold hover:bg-emerald-100 transition active:scale-95 shadow-2xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-600" />
              <span>{selectedSubject?.id === 'tienganh' ? 'Phiếu tự học Unit' : 'Phiếu chuẩn bị bài'}</span>
            </button>
          </div>
        </div>

        {/* Section Pills: Đúng 2 tab theo yêu cầu (Kiến thức trọng tâm & Từ vựng) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
          <button
            onClick={() => setLessonActiveSection('concepts')}
            className={`flex-1 min-h-[38px] px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
              lessonActiveSection === 'concepts'
                ? 'bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-300 shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Kiến thức trọng tâm
          </button>
          {selectedSubject.id === 'tienganh' && (
            <button
              onClick={() => setLessonActiveSection('didyouknow')}
              className={`flex-1 min-h-[38px] px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                lessonActiveSection === 'didyouknow'
                  ? 'bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-300 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Từ vựng
            </button>
          )}
        </div>

        {/* Active Section Content */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          
          {/* TAB 1: KIẾN THỨC TRỌNG TÂM */}
          {lessonActiveSection === 'concepts' && (
            <div className="space-y-4 animate-in fade-in">
              <div className="space-y-3.5">
                {selectedLesson.keyConcepts.map((concept, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-sky-50/50 dark:bg-slate-800/50 border border-sky-100 dark:border-slate-700 space-y-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed"
                  >
                    <h3 className="font-extrabold text-sky-950 dark:text-sky-200 text-sm sm:text-base leading-snug">
                      <MathView text={concept.term} />
                    </h3>

                    {concept.definition && (
                      <div className="leading-relaxed break-words whitespace-pre-line">
                        <MathView text={concept.definition} />
                      </div>
                    )}

                    {concept.example && (
                      <div className="leading-relaxed break-words pt-1">
                        <MathView text={concept.example} />
                      </div>
                    )}
                  </div>
                ))}

                {/* Bảng các câu diễn đạt trong hội thoại SGK */}
                {selectedLesson.dialogueExpressions && selectedLesson.dialogueExpressions.length > 0 && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/50 dark:bg-slate-800/50 border border-sky-100 dark:border-slate-700 space-y-3">
                    <h3 className="font-extrabold text-sky-950 dark:text-sky-200 text-sm sm:text-base leading-snug">
                      Các câu diễn đạt trong hội thoại SGK
                    </h3>
                    <div className="overflow-x-auto rounded-xl border border-sky-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xs">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-sky-100/70 dark:bg-slate-800 text-sky-950 dark:text-sky-200 font-extrabold uppercase text-[11px] tracking-wider">
                          <tr>
                            <th className="py-2.5 px-3 border-b border-sky-200/80 dark:border-slate-700">Câu tiếng Anh</th>
                            <th className="py-2.5 px-3 border-b border-sky-200/80 dark:border-slate-700">Nghĩa tiếng Việt</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-sky-100 dark:divide-slate-800">
                          {selectedLesson.dialogueExpressions.map((item, idx) => (
                            <tr key={idx} className="hover:bg-sky-50/40 dark:hover:bg-slate-800/50 transition">
                              <td className="py-2.5 px-3 font-bold text-sky-950 dark:text-sky-100">{item.english}</td>
                              <td className="py-2.5 px-3 text-slate-800 dark:text-slate-200">{item.vietnamese}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* Các điểm ghi nhớ bổ trợ (chỉ hiển thị nếu có ở môn Toán/Khoa học, Tiếng Anh bỏ hoàn toàn) */}
              {selectedSubject.id !== 'tienganh' && selectedLesson.importantTakeaways && selectedLesson.importantTakeaways.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
                  <span className="font-bold text-xs text-slate-800 dark:text-slate-200 block">
                    Ghi nhớ:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    {selectedLesson.importantTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-sky-600 font-bold shrink-0">•</span>
                        <span>
                          <MathView text={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: TỪ VỰNG (MÔN TIẾNG ANH) HOẶC EM CÓ BIẾT? (MÔN KHÁC) */}
          {lessonActiveSection === 'didyouknow' && (
            <div className="animate-in fade-in py-1 space-y-6">
              {selectedSubject.id === 'tienganh' ? (
                /* HIỂN THỊ TỪ VỰNG TIẾNG ANH 8 */
                selectedLesson.vocabulary && selectedLesson.vocabulary.length > 0 ? (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-1 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-xs font-extrabold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                        Bảng từ vựng ({selectedLesson.vocabulary.length} mục)
                      </span>
                      <span className="text-[11px] text-sky-600 font-bold">
                        Chuẩn SGK Tiếng Anh 8
                      </span>
                    </div>

                    {/* Kiểm tra nếu bài có định dạng bảng 3 cột chuẩn (không IPA, không ví dụ) như Lesson 1 */}
                    {selectedLesson.vocabulary[0]?.phonetic === '' ? (
                      /* BẢNG TỪ VỰNG ĐÚNG 3 CỘT: Từ/cụm từ | Từ loại | Nghĩa tiếng Việt */
                      <div className="overflow-x-auto rounded-2xl border border-sky-200/80 dark:border-slate-700 shadow-2xs">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-sky-100/70 dark:bg-slate-800 text-sky-950 dark:text-sky-200 font-extrabold uppercase text-[11px] tracking-wider">
                            <tr>
                              <th className="py-3 px-3.5 border-b border-sky-200/80 dark:border-slate-700">Từ / cụm từ</th>
                              <th className="py-3 px-3 border-b border-sky-200/80 dark:border-slate-700">Từ loại</th>
                              <th className="py-3 px-3.5 border-b border-sky-200/80 dark:border-slate-700">Nghĩa tiếng Việt</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-sky-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                            {selectedLesson.vocabulary.map((vocab) => (
                              <tr key={vocab.id} className="hover:bg-sky-50/40 dark:hover:bg-slate-800/50 transition">
                                <td className="py-3 px-3.5 font-bold text-sky-950 dark:text-sky-100 whitespace-nowrap">
                                  {vocab.word}
                                </td>
                                <td className="py-3 px-3">
                                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-sky-50 dark:bg-slate-800 border border-sky-200 dark:border-slate-700 text-sky-700 dark:text-sky-300">
                                    {vocab.partOfSpeech}
                                  </span>
                                </td>
                                <td className="py-3 px-3.5 text-slate-800 dark:text-slate-200 font-medium">
                                  {vocab.meaning}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      /* DẠNG THẺ (CARD) CHO CÁC BÀI CÓ PHIÊN ÂM VÀ VÍ DỤ */
                      <div className="space-y-3">
                        {selectedLesson.vocabulary.map((vocab) => (
                          <div
                            key={vocab.id}
                            className="p-3.5 rounded-2xl bg-sky-50/40 dark:bg-slate-800/50 border border-sky-100 dark:border-slate-700 space-y-2"
                          >
                            <div className="flex flex-wrap items-baseline justify-between gap-1.5">
                              <div className="flex items-baseline gap-2 flex-wrap">
                                <span className="font-black text-base text-sky-950 dark:text-sky-100">
                                  {vocab.word}
                                </span>
                                {vocab.phonetic && (
                                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                                    {vocab.phonetic}
                                  </span>
                                )}
                              </div>
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-sky-700 dark:text-sky-300">
                                {vocab.partOfSpeech}
                              </span>
                            </div>

                            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                              {vocab.meaning}
                            </div>

                            {vocab.example && (
                              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 space-y-1 text-xs">
                                <div className="text-slate-900 dark:text-slate-100 font-medium">
                                  "{vocab.example}"
                                </div>
                                {vocab.exampleMeaning && (
                                  <div className="text-slate-500 dark:text-slate-400 text-[11px] italic">
                                    → {vocab.exampleMeaning}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* BÀI TẬP TRẮC NGHIỆM TỪ VỰNG (ĐẶT Ở CUỐI TAB TỪ VỰNG THEO YÊU CẦU) */}
                    {(() => {
                      const inlineQuiz = StorageService.getQuizForLesson(selectedLesson.id);
                      if (!inlineQuiz || !inlineQuiz.questions || inlineQuiz.questions.length === 0) return null;

                      const currentQ = inlineQuiz.questions[vQuizIndex];

                      return (
                        <div className="pt-5 border-t border-slate-200 dark:border-slate-800 space-y-3.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 shrink-0" />
                              <h3 className="text-sm font-extrabold text-slate-900 dark:text-slate-100">
                                Bài tập trắc nghiệm từ vựng (5 câu)
                              </h3>
                            </div>
                            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                              {vQuizFinished ? 'Hoàn tất' : `Câu ${vQuizIndex + 1} / ${inlineQuiz.questions.length}`}
                            </span>
                          </div>

                          {!vQuizFinished ? (
                            <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/40 dark:bg-slate-800/40 border border-sky-100 dark:border-slate-700 space-y-3.5">
                              {/* Đề bài */}
                              <div className="text-sm font-extrabold text-slate-900 dark:text-slate-100 leading-snug">
                                Câu {vQuizIndex + 1}. {currentQ.question}
                              </div>

                              {/* Bắt buộc hiển thị mỗi phương án trên một dòng riêng (xếp dọc A, B, C, D từ trên xuống dưới) */}
                              <div className="flex flex-col space-y-2.5 w-full pt-1">
                                {currentQ.options.map((opt, optIdx) => {
                                  const optLetter = String.fromCharCode(65 + optIdx);
                                  const isSelected = vQuizSelected === optIdx;
                                  const isThisCorrect = optIdx === currentQ.correctIndex;

                                  let btnStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-sky-300 text-slate-800 dark:text-slate-200';
                                  if (isSelected) {
                                    if (vQuizIsCorrect === true) {
                                      btnStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-bold';
                                    } else if (vQuizIsCorrect === false) {
                                      btnStyle = 'bg-rose-50 dark:bg-rose-950/40 border-rose-400 text-rose-800 dark:text-rose-300 font-bold';
                                    }
                                  } else if (vQuizIsCorrect === true && isThisCorrect) {
                                    btnStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-bold';
                                  }

                                  return (
                                    <button
                                      key={optIdx}
                                      onClick={() => handleVQuizSelect(optIdx, currentQ.correctIndex)}
                                      disabled={vQuizIsCorrect === true}
                                      className={`p-3 sm:p-3.5 rounded-xl border text-left text-xs sm:text-sm transition flex items-start justify-between gap-3 cursor-pointer shadow-2xs ${btnStyle}`}
                                    >
                                      <div className="flex items-start gap-3 flex-1 min-w-0">
                                        <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center shrink-0 mt-0.5 ${
                                          vQuizIsCorrect === true && isThisCorrect
                                            ? 'bg-emerald-500 text-white'
                                            : isSelected && vQuizIsCorrect === false
                                              ? 'bg-rose-500 text-white'
                                              : 'bg-slate-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400 border border-slate-200 dark:border-slate-700'
                                        }`}>
                                          {optLetter}
                                        </span>
                                        <span className="flex-1 font-medium leading-relaxed break-words whitespace-normal pt-0.5 text-slate-800 dark:text-slate-200">
                                          <MathView text={opt} />
                                        </span>
                                      </div>
                                      {isSelected && vQuizIsCorrect === true && (
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                                      )}
                                      {isSelected && vQuizIsCorrect === false && (
                                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                                      )}
                                    </button>
                                  );
                                })}
                              </div>

                              {/* Thông báo Đúng & Giải thích */}
                              {vQuizIsCorrect === true && (
                                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-2 animate-in fade-in">
                                  <div className="text-xs font-extrabold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Chính xác! Làm rất tốt! 👏</span>
                                  </div>
                                  <div className="text-xs text-emerald-700 dark:text-emerald-400">
                                    {currentQ.explanation}
                                  </div>
                                  <div className="pt-1 flex justify-end">
                                    <button
                                      onClick={() => handleVQuizNext(inlineQuiz.questions.length)}
                                      className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                                    >
                                      <span>{vQuizIndex < inlineQuiz.questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}</span>
                                      <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>
                              )}

                              {/* Gợi ý khi trả lời sai (Không hiện đáp án, để học sinh chọn lại) */}
                              {vQuizIsCorrect === false && (
                                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-1 animate-in fade-in">
                                  <div className="text-xs font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                                    <span>Chưa chính xác. Hãy suy nghĩ và chọn lại nhé!</span>
                                  </div>
                                  <div className="text-xs text-amber-800 dark:text-amber-300 pl-5.5">
                                    Gợi ý: {currentQ.hint}
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            /* Tổng kết kết quả sau 5 câu */
                            <div className="p-5 rounded-2xl bg-sky-50/70 dark:bg-slate-800 border border-sky-200 dark:border-slate-700 text-center space-y-3 animate-in fade-in">
                              <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center mx-auto shadow-md shadow-sky-500/20">
                                <Award className="w-6 h-6" />
                              </div>
                              <div>
                                <h4 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
                                  Hoàn thành bài luyện tập từ vựng!
                                </h4>
                                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                                  Bạn đã trả lời đúng ngay lần đầu <span className="font-extrabold text-sky-600 dark:text-sky-400">{vQuizScore} / {inlineQuiz.questions.length}</span> câu.
                                </p>
                              </div>
                              <button
                                onClick={handleVQuizReset}
                                className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold inline-flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                              >
                                <RotateCcw className="w-4 h-4" />
                                <span>Làm lại bài luyện tập</span>
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                ) : (
                  <div className="py-8 text-center text-xs text-slate-400">
                    Chưa có danh sách từ vựng cho bài học này.
                  </div>
                )
              ) : null}
            </div>
          )}

        </div>

        {/* Bottom Actions */}
        <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => handleMarkCompleted(selectedLesson.id)}
            className={`min-h-[44px] flex-1 rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer ${
              isDone
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300'
                : 'bg-sky-500 hover:bg-sky-600 text-white shadow-md shadow-sky-500/20'
            }`}
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>{isDone ? 'Đã hoàn thành bài đọc' : 'Đánh dấu đã đọc bài (+10 ⭐, +15 💧)'}</span>
          </button>

          {onGoToQuestionsForLesson && (
            <button
              onClick={() => {
                handleMarkCompleted(selectedLesson.id);
                onGoToQuestionsForLesson(selectedLesson.id);
              }}
              className="min-h-[44px] px-4 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm shadow-sky-500/20"
            >
              <span>Luyện 5 câu hỏi tự kiểm tra</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {prepSheetLesson && (
          <PreparationSheetModal
            isOpen={!!prepSheetLesson}
            onClose={() => setPrepSheetLesson(null)}
            userId={StorageService.getCurrentUser()?.id || 'guest'}
            studentName={StorageService.getCurrentUser()?.displayName || 'Học sinh'}
            lessonId={prepSheetLesson.id}
            lessonTitle={prepSheetLesson.title}
            subjectId={selectedSubject?.id || prepSheetLesson.subjectId}
          />
        )}
      </div>
    );
  }

  // ==================== LEVEL 3: DANH SÁCH BÀI (BÀI 1, BÀI 2...) ====================
  if (selectedChapter && selectedSubject) {
    if (selectedSubject.id === 'tienganh') {
      return (
        <EnglishUnitView 
          unitId={selectedChapter.id} 
          onBack={() => setSelectedChapter(null)} 
        />
      );
    }

    const chapterLessons = allLessons.filter(
      (l) => l.chapterId === selectedChapter.id
    );

    return (
      <div className="space-y-4 animate-in fade-in duration-150 pb-6">
        {/* Navigation Breadcrumb / Back button */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedChapter(null)}
            className="min-h-[40px] px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center gap-1.5 shadow-2xs hover:bg-sky-50 transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Quay lại các chương {selectedSubject.shortName}</span>
          </button>
        </div>

        {/* Chapter Header */}
        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-sky-100 dark:border-slate-800 shadow-xs">
          <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">
            {selectedSubject.name}
          </span>
          <h1 className="text-base font-extrabold text-slate-900 dark:text-slate-100 mt-0.5">
            {selectedChapter.title}
          </h1>
          {selectedChapter.description && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {selectedChapter.description}
            </p>
          )}
        </div>

        {/* Cảnh báo khi bấm vào bài học đang bị khóa tuần tự */}
        {khtnLockedAlert && (
          <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-200 text-xs font-semibold flex items-center justify-between gap-2 shadow-xs animate-in slide-in-from-top-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{khtnLockedAlert}</span>
            </div>
            <button
              onClick={() => setKhtnLockedAlert(null)}
              className="text-amber-800 hover:text-amber-950 font-extrabold text-sm px-1 cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* Clean list of Bài 1, Bài 2, Bài 3 */}
        <div className="space-y-2">
          {chapterLessons.map((lesson, idx) => {
            const isToanCh3 = selectedSubject.id === 'toan' && selectedChapter.id === 'ch_toan_3';
            const isToanCh4 = selectedSubject.id === 'toan' && selectedChapter.id === 'ch_toan_4';
            const isToanCh5 = selectedSubject.id === 'toan' && selectedChapter.id === 'ch_toan_5';
            const isToanCh6 = selectedSubject.id === 'toan' && selectedChapter.id === 'ch_toan_6';
            const isSequential = isToanCh3 || isToanCh4 || isToanCh5 || isToanCh6;
            // Quy tắc tuần tự: Bài sau chỉ mở khi bài trước đã hoàn thành đủ cả 2 bước
            const isUnlocked = !isSequential || idx === 0 || StorageService.isLessonCompleted(chapterLessons[idx - 1].id);
            const isRead = isSequential ? StorageService.isLessonRead(lesson.id) : false;
            const isDone = isSequential ? StorageService.isLessonCompleted(lesson.id) : (StorageService.isLessonCompleted(lesson.id) || lesson.isCompleted);

            const handleLessonClick = () => {
              if (!isUnlocked) {
                setKhtnLockedAlert(`Em cần hoàn thành đủ cả 2 bước (đọc bài + làm 5 câu hỏi) của Bài ${chapterLessons[idx - 1].lessonNumber} trước khi sang bài tiếp theo nhé!`);
                setTimeout(() => setKhtnLockedAlert(null), 4500);
                return;
              }
              handleSelectLesson(lesson);
            };

            let itemStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-sky-300 hover:shadow-xs cursor-pointer';
            if (!isUnlocked) {
              itemStyle = 'bg-slate-50/70 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800 text-slate-400 opacity-70 cursor-not-allowed';
            } else if (isDone) {
              itemStyle = 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50 cursor-pointer';
            }

            return (
              <button
                key={lesson.id}
                onClick={handleLessonClick}
                className={`w-full min-h-[52px] p-3.5 rounded-2xl border text-left transition flex items-center justify-between gap-3 ${itemStyle}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 ${
                      !isUnlocked
                        ? 'bg-slate-200 dark:bg-slate-800 text-slate-400'
                        : isDone
                          ? 'bg-emerald-500 text-white'
                          : 'bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300'
                    }`}
                  >
                    {!isUnlocked ? (
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                    ) : isDone ? (
                      <Check className="w-4 h-4 stroke-[3]" />
                    ) : (
                      lesson.lessonNumber
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="font-extrabold text-sm text-slate-900 dark:text-slate-100 block">
                      {lesson.title}
                    </span>
                    {selectedSubject.id !== 'tienganh' && (
                      <span className="text-xs text-slate-400 block mt-0.5">
                        Thời lượng ~{lesson.readTimeMinutes} phút
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs shrink-0">
                  {!isUnlocked ? (
                    <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                      <span>Khóa</span>
                    </span>
                  ) : isDone ? (
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">Đã hoàn thành</span>
                  ) : isRead ? (
                    <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400">Đang học</span>
                  ) : (
                    <span className="text-[11px] text-slate-400">Chưa học</span>
                  )}
                  {isUnlocked && <ChevronRight className="w-4 h-4 text-slate-300" />}
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
        {/* Navigation Breadcrumb / Back button */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedSubject(null)}
            className="min-h-[40px] px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center gap-1.5 shadow-2xs hover:bg-sky-50 transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Quay lại các môn học</span>
          </button>
        </div>

        {/* Subject Card Header */}
        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-sky-100 dark:border-slate-800 shadow-xs flex items-center gap-3.5">
          <div className={`w-12 h-12 rounded-2xl ${selectedSubject.colorBg} ${selectedSubject.colorText} flex items-center justify-center shrink-0 border ${selectedSubject.colorBorder}`}>
            {React.createElement(ICON_MAP[selectedSubject.iconName] || BookOpen, { className: 'w-6 h-6' })}
          </div>
          <div>
            <h1 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
              {selectedSubject.name}
            </h1>
            {selectedSubject.id !== 'tienganh' && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {selectedSubject.tagline}
              </p>
            )}
          </div>
        </div>

        {/* Chapters / Units list */}
        <div className="space-y-2.5">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => handleSelectChapter(ch)}
              className="w-full min-h-[56px] p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-300 hover:shadow-xs text-left transition flex items-center justify-between gap-3 cursor-pointer"
            >
              <div className="min-w-0">
                <span className="font-extrabold text-sm text-slate-900 dark:text-slate-100 block truncate">
                  {ch.title}
                </span>
                {selectedSubject.id !== 'tienganh' && (
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

  // ==================== LEVEL 1: DANH SÁCH 3 MÔN HỌC ====================
  return (
    <div className="space-y-4 animate-in fade-in duration-150 pb-6">
      <div className="text-left">
        <h1 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
          Bài học lớp 8
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Chọn một môn học để bắt đầu đọc bài chuẩn bị
        </p>
      </div>

      <div className="space-y-3">
        {INITIAL_SUBJECTS.map((subj) => {
          const IconComp = ICON_MAP[subj.iconName] || BookOpen;
          const subjectLessons = allLessons.filter(l => l.subjectId === subj.id);
          const completedCount = subjectLessons.filter(l => l.isCompleted).length;

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

              <div className="text-right shrink-0">
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal phóng to ảnh */}
      {quizZoomImg && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex flex-col items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setQuizZoomImg(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[92vh] bg-white dark:bg-slate-900 rounded-3xl p-3 sm:p-4 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 mb-2">
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                {quizZoomImg.title}
              </span>
              <button
                type="button"
                onClick={() => setQuizZoomImg(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 cursor-pointer transition"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full flex-1 overflow-auto flex items-center justify-center p-1">
              <img
                src={quizZoomImg.src}
                alt={quizZoomImg.title}
                className="max-w-full max-h-[80vh] object-contain rounded-xl select-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
