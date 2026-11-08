import React, { useState, useEffect } from 'react';
import { PreparationSheetService } from '../../services/preparationSheetService';
import { LocalPreparationSheet } from '../../services/db';
import { X, Send, Save, CheckCircle2, Clock, FileText, BookOpen, HelpCircle, Sparkles, AlertCircle } from 'lucide-react';
import { StorageService } from '../../services/storage';

interface PreparationSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  studentName: string;
  lessonId: string;
  lessonTitle: string;
  subjectId: string;
  mandatory?: boolean;
  onSubmittedSuccessfully?: () => void;
}

export const PreparationSheetModal: React.FC<PreparationSheetModalProps> = ({
  isOpen,
  onClose,
  userId,
  studentName,
  lessonId,
  lessonTitle,
  subjectId,
  mandatory = false,
  onSubmittedSuccessfully,
}) => {
  const isEnglish = subjectId === 'tienganh';

  // Config labels and options according to subject
  const defaultAssessment = isEnglish
    ? 'Đã học phần lớn nội dung nhưng còn một số chỗ chưa hiểu.'
    : 'Đã hiểu các ý chính.';

  const assessmentOptions = isEnglish
    ? [
        'Đã hoàn thành và hiểu tốt các nội dung.',
        'Đã học phần lớn nội dung nhưng còn một số chỗ chưa hiểu.',
        'Còn nhiều nội dung cần thầy cô hướng dẫn.',
      ]
    : [
        'Đã hiểu rõ.',
        'Đã hiểu các ý chính.',
        'Cần thầy cô hướng dẫn thêm.',
      ];

  const modalTitle = isEnglish ? 'PHIẾU TỰ HỌC UNIT' : 'PHIẾU CHUẨN BỊ BÀI';
  const modalSubtitle = isEnglish
    ? 'Phiếu tự học Unit trước khi lên lớp'
    : 'Phiếu chuẩn bị bài trước khi lên lớp';

  const section1Title = isEnglish
    ? '1. Những kiến thức em đã tự học và ghi nhớ được trong Unit:'
    : '1. Kiến thức cốt lõi em ghi nhận được khi đọc trước:';
  const section1Hint = isEnglish
    ? 'Gợi ý: Ghi từ vựng mới, nghĩa của từ, cấu trúc ngữ pháp, nội dung bài đọc, bài nghe và những kiến thức giao tiếp quan trọng.'
    : 'Gợi ý: Ghi lại các khái niệm, công thức, quy tắc hoặc tính chất quan trọng trong bài.';
  const section1Placeholder = isEnglish
    ? 'Ghi từ vựng mới, nghĩa của từ, cấu trúc ngữ pháp, nội dung bài đọc, bài nghe và những kiến thức giao tiếp quan trọng...'
    : 'Gợi ý: Ghi lại các khái niệm, công thức, quy tắc hoặc tính chất quan trọng trong bài...';

  const section2Title = isEnglish
    ? '2. Những nội dung em chưa hiểu hoặc muốn hỏi thầy cô:'
    : '2. Câu hỏi hoặc điều em còn thắc mắc muốn hỏi thầy cô:';
  const section2Hint = isEnglish
    ? 'Gợi ý: Từ vựng khó, cấu trúc ngữ pháp, cách phát âm, bài đọc, bài nghe hoặc nội dung em chưa tự giải quyết được.'
    : 'Gợi ý: Ghi lại nội dung, công thức, phép biến đổi hoặc dạng bài em chưa hiểu.';
  const section2Placeholder = isEnglish
    ? 'Từ vựng khó, cấu trúc ngữ pháp, cách phát âm, bài đọc, bài nghe hoặc nội dung em chưa tự giải quyết được...'
    : 'Ghi lại nội dung, công thức, phép biến đổi hoặc dạng bài em chưa hiểu...';

  const section3Title = isEnglish
    ? '3. Tự đánh giá mức độ hoàn thành Unit:'
    : '3. Tự đánh giá mức độ hiểu bài trước khi đến lớp:';

  const [sheet, setSheet] = useState<LocalPreparationSheet | null>(null);
  const [preClassNotes, setPreClassNotes] = useState('');
  const [keyQuestions, setKeyQuestions] = useState('');
  const [selfAssessment, setSelfAssessment] = useState(defaultAssessment);
  const [isSaving, setIsSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isErrorToast, setIsErrorToast] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    PreparationSheetService.getSheetForLesson(userId, lessonId).then((existing) => {
      if (existing) {
        setSheet(existing);
        setPreClassNotes(existing.preClassNotes || '');
        setKeyQuestions(existing.keyQuestions || '');
        setSelfAssessment(existing.selfAssessment || defaultAssessment);
        if (existing.status === 'submitted' || existing.status === 'reviewed') {
          StorageService.markPreparationSheetSubmitted(lessonId);
        }
      } else {
        const id = `sheet_${userId}_${lessonId}`;
        const newSheet: LocalPreparationSheet = {
          id,
          userId,
          studentName,
          schoolId: 'school_main',
          classId: 'class_8a',
          subjectId,
          lessonId,
          lessonTitle,
          preClassNotes: '',
          keyQuestions: '',
          selfAssessment: defaultAssessment,
          status: 'draft',
          offlineCreated: !navigator.onLine,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          syncedToCloud: false,
        };
        setSheet(newSheet);
        setPreClassNotes('');
        setKeyQuestions('');
        setSelfAssessment(defaultAssessment);
      }
    });
  }, [isOpen, userId, lessonId, lessonTitle, subjectId, studentName, defaultAssessment]);

  if (!isOpen || !sheet) return null;

  const handleSave = async (submit: boolean = false) => {
    if (isSaving) return;

    if (submit) {
      // Bắt buộc hoàn thành cả 3 mục trước khi gửi
      if (!preClassNotes.trim() || !keyQuestions.trim() || !selfAssessment.trim()) {
        setIsErrorToast(true);
        setToastMessage('Em hãy hoàn thành và gửi phiếu học tập trước khi kết thúc nội dung này nhé!');
        return;
      }

      // Kiểm tra kết nối mạng thực tế
      if (!navigator.onLine) {
        setIsSaving(true);
        try {
          await PreparationSheetService.saveSheet({
            id: sheet.id,
            userId,
            studentName,
            schoolId: sheet.schoolId || 'school_main',
            classId: sheet.classId || 'class_8a',
            subjectId,
            lessonId,
            lessonTitle,
            preClassNotes,
            keyQuestions,
            selfAssessment,
            status: 'draft',
            offlineCreated: true,
            teacherComment: sheet.teacherComment,
          });
          setIsErrorToast(true);
          setToastMessage('Thiết bị đang mất kết nối Internet. Phiếu đã được lưu nháp an toàn trên thiết bị, em hãy kết nối mạng và gửi lại nhé!');
        } finally {
          setIsSaving(false);
        }
        return;
      }
    }

    setIsSaving(true);
    try {
      const updated = await PreparationSheetService.saveSheet({
        id: sheet.id,
        userId,
        studentName,
        schoolId: sheet.schoolId || 'school_main',
        classId: sheet.classId || 'class_8a',
        subjectId,
        lessonId,
        lessonTitle,
        preClassNotes,
        keyQuestions,
        selfAssessment,
        status: submit ? 'submitted' : 'draft',
        offlineCreated: !navigator.onLine,
        submittedAt: submit ? new Date().toISOString() : sheet.submittedAt,
        teacherComment: sheet.teacherComment,
      });
      setSheet(updated);
      setIsErrorToast(false);
      if (submit) {
        StorageService.markPreparationSheetSubmitted(lessonId);
        setToastMessage(isEnglish ? 'Đã gửi Phiếu tự học Unit thành công!' : 'Đã gửi Phiếu chuẩn bị bài thành công!');
        if (onSubmittedSuccessfully) {
          onSubmittedSuccessfully();
        }
        setTimeout(() => onClose(), 1200);
      } else {
        setToastMessage('Đã lưu bản nháp vào thiết bị');
        setTimeout(() => setToastMessage(null), 2500);
      }
    } catch (e) {
      console.error(e);
      setIsErrorToast(true);
      setToastMessage('Lỗi khi lưu phiếu học tập');
    } finally {
      setIsSaving(false);
    }
  };

  const handleClose = () => {
    // Tự động lưu nháp nếu học sinh đã nhập dữ liệu mà chưa nộp
    if (sheet.status !== 'submitted' && sheet.status !== 'reviewed') {
      if (preClassNotes.trim() || keyQuestions.trim()) {
        PreparationSheetService.saveSheet({
          id: sheet.id,
          userId,
          studentName,
          schoolId: sheet.schoolId || 'school_main',
          classId: sheet.classId || 'class_8a',
          subjectId,
          lessonId,
          lessonTitle,
          preClassNotes,
          keyQuestions,
          selfAssessment,
          status: 'draft',
          offlineCreated: !navigator.onLine,
          teacherComment: sheet.teacherComment,
        }).catch(() => {});
      }
    }
    onClose();
  };

  const isSubmitted = sheet.status === 'submitted' || sheet.status === 'reviewed';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-2xl bg-white dark:bg-slate-900 shadow-2xl overflow-hidden my-6 border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-5 py-4 text-white">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="rounded bg-white/20 px-2 py-0.5 text-[11px] font-bold tracking-wide uppercase">
                  {isEnglish ? 'Tiếng Anh 8' : 'Toán 8'}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-100">
                  {sheet.status === 'reviewed' ? (
                    <span className="flex items-center gap-1 text-emerald-200 bg-emerald-800/40 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3" /> Đã nhận xét
                    </span>
                  ) : sheet.status === 'submitted' ? (
                    <span className="flex items-center gap-1 text-teal-100 bg-teal-800/40 px-2 py-0.5 rounded">
                      <Clock className="w-3 h-3" /> Đã nộp bài
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-amber-200 bg-amber-800/40 px-2 py-0.5 rounded">
                      <FileText className="w-3 h-3" /> Bản nháp (Offline)
                    </span>
                  )}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold leading-snug line-clamp-1">{lessonTitle}</h2>
              <p className="text-xs font-semibold text-emerald-100 uppercase tracking-wide">{modalTitle}</p>
              <p className="text-[11px] text-emerald-100/90">{modalSubtitle}</p>
            </div>
            <button
              onClick={handleClose}
              className="rounded-full p-1.5 text-white/80 hover:bg-white/20 transition cursor-pointer"
              title="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {toastMessage && (
          <div className={`px-4 py-2.5 text-xs font-semibold flex items-center gap-2 border-b animate-in fade-in ${
            isErrorToast
              ? 'bg-amber-50 dark:bg-amber-950/80 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200'
              : 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
          }`}>
            {isErrorToast ? (
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            )}
            <span className="leading-snug">{toastMessage}</span>
          </div>
        )}

        <div className="p-4 sm:p-5 space-y-4 max-h-[72vh] overflow-y-auto">
          {/* Teacher Review Box (if reviewed by teacher) */}
          {sheet.status === 'reviewed' && sheet.teacherComment && (
            <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/80 dark:bg-emerald-950/30 p-3.5 space-y-1">
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Nhận xét của Thầy/Cô:
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                "{sheet.teacherComment}"
              </p>
            </div>
          )}

          {/* Section 1 */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 leading-snug">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{section1Title}</span>
            </label>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 italic leading-relaxed">
              {section1Hint}
            </p>
            <textarea
              value={preClassNotes}
              onChange={(e) => setPreClassNotes(e.target.value)}
              disabled={sheet.status === 'reviewed'}
              placeholder={section1Placeholder}
              rows={4}
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 disabled:bg-slate-50 dark:disabled:bg-slate-800/50 transition"
            />
          </div>

          {/* Section 2 */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 leading-snug">
              <HelpCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>{section2Title}</span>
            </label>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 italic leading-relaxed">
              {section2Hint}
            </p>
            <textarea
              value={keyQuestions}
              onChange={(e) => setKeyQuestions(e.target.value)}
              disabled={sheet.status === 'reviewed'}
              placeholder={section2Placeholder}
              rows={3}
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 disabled:bg-slate-50 dark:disabled:bg-slate-800/50 transition"
            />
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 leading-snug">
              <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>{section3Title}</span>
            </label>
            <div className="flex flex-col space-y-2">
              {assessmentOptions.map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  disabled={sheet.status === 'reviewed'}
                  onClick={() => setSelfAssessment(lvl)}
                  className={`rounded-xl border p-2.5 text-left text-xs font-semibold transition cursor-pointer flex items-center gap-2 ${
                    selfAssessment === lvl
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-850 dark:text-emerald-200 ring-1 ring-emerald-500'
                      : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                    selfAssessment === lvl ? 'border-emerald-600 bg-emerald-600' : 'border-slate-400'
                  }`}>
                    {selfAssessment === lvl && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </span>
                  <span>{lvl}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 px-4 sm:px-5 py-3 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            {isSubmitted ? 'Đã gửi tới giáo viên bộ môn' : 'Lưu trữ ngoại tuyến an toàn'}
          </span>
          <div className="flex items-center gap-2">
            {!isSubmitted && (
              <button
                type="button"
                onClick={() => handleSave(false)}
                disabled={isSaving}
                className="flex items-center gap-1 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition disabled:opacity-50 cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Lưu nháp</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => handleSave(true)}
              disabled={isSaving || sheet.status === 'reviewed'}
              className="flex items-center gap-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-4 py-2 text-xs font-bold text-white shadow-sm active:scale-95 transition disabled:opacity-50 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitted ? 'Cập nhật nộp lại' : 'Nộp phiếu'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
