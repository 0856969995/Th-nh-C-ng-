import React, { useState, useEffect, useMemo } from 'react';
import { UserAccount, SubjectId, ClassInfo } from '../../types';
import { PreparationSheetService } from '../../services/preparationSheetService';
import { LocalPreparationSheet, LocalQuizSubmission, getOfflineDB } from '../../services/db';
import { SchoolService } from '../../services/schoolService';
import { subscribeToStorage, StorageService } from '../../services/storage';
import { QuizService } from '../../services/quizService';
import { AiCommentService } from '../../services/aiCommentService';
import { SAMPLE_QUIZZES, INITIAL_CHAPTERS, INITIAL_LESSONS } from '../../data/mockData';
import { ENGLISH_UNITS } from '../../data/englishUnitData';
import * as XLSX from 'xlsx';
import {
  FileCheck2,
  BarChart3,
  GraduationCap,
  Sparkles,
  CheckCircle,
  MessageSquare,
  Search,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  Download,
  LogOut,
  Send,
  BookOpen,
  Languages,
  Calculator,
  Loader2,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

interface TeacherDashboardProps {
  currentUser: UserAccount;
  onLogout?: () => void;
}

// Vietnamese collation helper for sorting by First Name (Tên)
function getVietnameseSortKey(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length <= 1) return fullName;
  const firstName = parts[parts.length - 1]; // Tên
  const rest = parts.slice(0, -1).join(' '); // Họ và đệm
  return `${firstName} ${rest}`;
}

export function sortStudentsByName<T>(items: T[], getName: (item: T) => string): T[] {
  return [...items].sort((a, b) => {
    const keyA = getVietnameseSortKey(getName(a));
    const keyB = getVietnameseSortKey(getName(b));
    return keyA.localeCompare(keyB, 'vi', { sensitivity: 'base' });
  });
}

// Math structure definition
const MATH_CHAPTERS = [
  {
    id: 'ch_toan_1',
    chapterNumber: 1,
    title: 'Chương I: Đa thức',
    lessons: [
      { id: 'toan_ch1_b1', lessonNumber: 1, title: 'Bài 1: Đơn thức' },
      { id: 'toan_ch1_b2', lessonNumber: 2, title: 'Bài 2: Đa thức' },
      { id: 'toan_ch1_b3', lessonNumber: 3, title: 'Bài 3: Phép cộng và phép trừ đa thức' },
      { id: 'toan_ch1_b4', lessonNumber: 4, title: 'Bài 4: Phép nhân đa thức' },
      { id: 'toan_ch1_b5', lessonNumber: 5, title: 'Bài 5: Phép chia đa thức cho đơn thức' },
    ],
  },
  {
    id: 'ch_toan_2',
    chapterNumber: 2,
    title: 'Chương II: Hằng đẳng thức đáng nhớ và ứng dụng',
    lessons: [
      { id: 'toan_ch2_b6', lessonNumber: 6, title: 'Bài 6: Hiệu hai bình phương. Bình phương của một tổng. Bình phương của một hiệu' },
      { id: 'toan_ch2_b7', lessonNumber: 7, title: 'Bài 7: Lập phương của một tổng. Lập phương của một hiệu' },
      { id: 'toan_ch2_b8', lessonNumber: 8, title: 'Bài 8: Tổng và hiệu hai lập phương' },
      { id: 'toan_ch2_b9', lessonNumber: 9, title: 'Bài 9: Phân tích đa thức thành nhân tử' },
    ],
  },
  {
    id: 'ch_toan_3',
    chapterNumber: 3,
    title: 'Chương III: Tứ giác',
    lessons: [
      { id: 'toan_ch3_b10', lessonNumber: 10, title: 'Bài 10: Tứ giác' },
      { id: 'toan_ch3_b11', lessonNumber: 11, title: 'Bài 11: Hình thang cân' },
      { id: 'toan_ch3_b12', lessonNumber: 12, title: 'Bài 12: Hình bình hành' },
      { id: 'toan_ch3_b13', lessonNumber: 13, title: 'Bài 13: Hình chữ nhật' },
      { id: 'toan_ch3_b14', lessonNumber: 14, title: 'Bài 14: Hình thoi và hình vuông' },
    ],
  },
  {
    id: 'ch_toan_4',
    chapterNumber: 4,
    title: 'Chương IV: Định lí Thalès',
    lessons: [
      { id: 'toan_ch4_b15', lessonNumber: 15, title: 'Bài 15: Định lí Thalès trong tam giác' },
      { id: 'toan_ch4_b16', lessonNumber: 16, title: 'Bài 16: Đường trung bình của tam giác' },
      { id: 'toan_ch4_b17', lessonNumber: 17, title: 'Bài 17: Tính chất đường phân giác của tam giác' },
    ],
  },
  {
    id: 'ch_toan_5',
    chapterNumber: 5,
    title: 'Chương V: Dữ liệu và biểu đồ',
    lessons: [
      { id: 'toan_ch5_b18', lessonNumber: 18, title: 'Bài 18: Thu thập và phân loại dữ liệu' },
      { id: 'toan_ch5_b19', lessonNumber: 19, title: 'Bài 19: Biểu diễn dữ liệu bằng bảng, biểu đồ' },
      { id: 'toan_ch5_b20', lessonNumber: 20, title: 'Bài 20: Phân tích số liệu thống kê dựa vào biểu đồ' },
    ],
  },
  {
    id: 'ch_toan_6',
    chapterNumber: 6,
    title: 'Chương VI: Phân thức đại số',
    lessons: [
      { id: 'toan_ch6_b21', lessonNumber: 21, title: 'Bài 21: Phân thức đại số' },
      { id: 'toan_ch6_b22', lessonNumber: 22, title: 'Bài 22: Tính chất cơ bản của phân thức đại số' },
      { id: 'toan_ch6_b23', lessonNumber: 23, title: 'Bài 23: Phép cộng và phép trừ phân thức đại số' },
      { id: 'toan_ch6_b24', lessonNumber: 24, title: 'Bài 24: Phép nhân và phép chia phân thức đại số' },
    ],
  },
];

// English units definition
const ENGLISH_UNITS_LIST = [
  { id: 'ch_tienganh_1', unitNumber: 1, title: 'Unit 1: Leisure Time', skillFocus: 'Từ vựng hoạt động rảnh rỗi & Verbs of liking' },
  { id: 'ch_tienganh_2', unitNumber: 2, title: 'Unit 2: Life in the Countryside', skillFocus: 'Từ vựng nông thôn & So sánh hơn của trạng từ' },
  { id: 'ch_tienganh_3', unitNumber: 3, title: 'Unit 3: Teenagers', skillFocus: 'Từ vựng áp lực thanh thiếu niên & Câu ghép, câu phức' },
  { id: 'ch_tienganh_4', unitNumber: 4, title: 'Unit 4: Ethnic Groups of Viet Nam', skillFocus: 'Từ vựng các dân tộc Việt Nam & Câu hỏi Yes/No, Wh-' },
  { id: 'ch_tienganh_5', unitNumber: 5, title: 'Unit 5: Our Customs and Traditions', skillFocus: 'Phong tục tập quán & Đại từ nhân xưng, mạo từ' },
  { id: 'ch_tienganh_6', unitNumber: 6, title: 'Unit 6: Lifestyles', skillFocus: 'Lối sống truyền thống & hiện đại, liên từ chỉ thời gian' },
  { id: 'ch_tienganh_7', unitNumber: 7, title: 'Unit 7: Environmental Protection', skillFocus: 'Bảo vệ môi trường & Câu điều kiện loại 1' },
  { id: 'ch_tienganh_8', unitNumber: 8, title: 'Unit 8: Shopping', skillFocus: 'Kỹ năng mua sắm & Thì hiện tại đơn diễn tả tương lai' },
  { id: 'ch_tienganh_9', unitNumber: 9, title: 'Unit 9: Natural Disasters', skillFocus: 'Thiên tai hiểm họa & Thì quá khứ tiếp diễn' },
  { id: 'ch_tienganh_10', unitNumber: 10, title: 'Unit 10: Communication in the Future', skillFocus: 'Giao tiếp tương lai & Đại từ sở hữu' },
  { id: 'ch_tienganh_11', unitNumber: 11, title: 'Unit 11: Science and Technology', skillFocus: 'Khoa học công nghệ & Câu gián tiếp (Reported speech)' },
  { id: 'ch_tienganh_12', unitNumber: 12, title: 'Unit 12: Life on Other Planets', skillFocus: 'Hành tinh ngoài vũ trụ & Ôn tập ngữ pháp nâng cao' },
];

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  currentUser,
  onLogout,
}) => {
  // Navigation: Only 2 tabs (Section I.2: Deleted Students tab)
  const [activeNavTab, setActiveNavTab] = useState<'sheets' | 'analytics'>('sheets');

  // Class Selection (Scoped to assigned classes)
  const [allClasses, setAllClasses] = useState<ClassInfo[]>(() => SchoolService.getClasses());
  const [selectedClassId, setSelectedClassId] = useState<string>('8A');

  // Real-time Data
  const [sheets, setSheets] = useState<LocalPreparationSheet[]>([]);
  const [quizSubmissions, setQuizSubmissions] = useState<LocalQuizSubmission[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Tab 1 (Phiếu chuẩn bị bài) Navigation States
  const [sheetSubject, setSheetSubject] = useState<'toan' | 'tienganh'>('toan');
  const [selectedMathChapterId, setSelectedMathChapterId] = useState<string>('ch_toan_1');
  const [selectedMathLessonId, setSelectedMathLessonId] = useState<string>('toan_ch1_b1');
  const [selectedEnglishUnitId, setSelectedEnglishUnitId] = useState<string>('ch_tienganh_1');

  // Modal Review State
  const [selectedSheet, setSelectedSheet] = useState<LocalPreparationSheet | null>(null);
  const [teacherComment, setTeacherComment] = useState('');
  const [isSavingFeedback, setIsSavingFeedback] = useState(false);

  // Tab 2 (Phân tích học tập) Navigation States
  const [analyticsSubject, setAnalyticsSubject] = useState<'toan' | 'tienganh'>('toan');
  const [analyticsMathChapterId, setAnalyticsMathChapterId] = useState<string>('ch_toan_1');
  const [analyticsEnglishGroup, setAnalyticsEnglishGroup] = useState<'u1_u6' | 'u6_u12'>('u1_u6');
  const [expandedLessonDetail, setExpandedLessonDetail] = useState<string | null>(null);

  // Excel Export State
  const [isExportingExcel, setIsExportingExcel] = useState(false);

  // Filter assigned classes
  const assignedClasses = useMemo(() => {
    return allClasses.filter((c) => {
      if (currentUser.role === 'admin') return true;
      const normClass = SchoolService.normalizeClassName(c.name || c.id);
      if (
        currentUser.assignedClassIds &&
        currentUser.assignedClassIds.some((cid) => {
          const normCid = SchoolService.normalizeClassName(cid);
          return normCid === normClass || cid === c.id || cid === c.name;
        })
      ) {
        return true;
      }
      return c.teacherIds.includes(currentUser.id) || c.homeroomTeacherId === currentUser.id;
    });
  }, [allClasses, currentUser]);

  const currentClass =
    assignedClasses.find(
      (c) =>
        SchoolService.normalizeClassName(c.id) === SchoolService.normalizeClassName(selectedClassId) ||
        SchoolService.normalizeClassName(c.name) === SchoolService.normalizeClassName(selectedClassId)
    ) ||
    assignedClasses[0] ||
    allClasses[0];

  useEffect(() => {
    if (
      assignedClasses.length > 0 &&
      !assignedClasses.some(
        (c) =>
          SchoolService.normalizeClassName(c.id) === SchoolService.normalizeClassName(selectedClassId) ||
          SchoolService.normalizeClassName(c.name) === SchoolService.normalizeClassName(selectedClassId)
      )
    ) {
      setSelectedClassId(assignedClasses[0].id);
    }
  }, [assignedClasses, selectedClassId]);

  // Load real-time data from Firestore / local IndexedDB
  useEffect(() => {
    loadClassData();
    const unsub = subscribeToStorage(() => {
      setAllClasses(SchoolService.getClasses());
      loadClassData();
    });
    return unsub;
  }, [selectedClassId]);

  const loadClassData = async () => {
    setIsLoadingData(true);
    try {
      // 1. Fetch sheets from Firestore / local cache
      const cloudSheets = await PreparationSheetService.fetchSheetsFromCloud(selectedClassId);
      setSheets(cloudSheets);

      // 2. Fetch quiz submissions from Firestore / local cache
      const cloudQuizzes = await QuizService.fetchSubmissionsFromCloud(selectedClassId);
      setQuizSubmissions(cloudQuizzes);
    } catch (err) {
      console.warn('Error loading class data for teacher:', err);
    } finally {
      setIsLoadingData(false);
    }
  };

  // Currently active lesson in Math
  const activeMathChapter = MATH_CHAPTERS.find((c) => c.id === selectedMathChapterId) || MATH_CHAPTERS[0];
  const activeMathLesson =
    activeMathChapter.lessons.find((l) => l.id === selectedMathLessonId) || activeMathChapter.lessons[0];

  // Currently active English unit
  const activeEnglishUnit =
    ENGLISH_UNITS_LIST.find((u) => u.id === selectedEnglishUnitId) || ENGLISH_UNITS_LIST[0];

  // Current target lesson/unit ID and title for Tab 1
  const activeTargetId = sheetSubject === 'toan' ? activeMathLesson.id : activeEnglishUnit.id;
  const activeTargetTitle = sheetSubject === 'toan' ? activeMathLesson.title : activeEnglishUnit.title;
  const activeTargetChapter = sheetSubject === 'toan' ? activeMathChapter.title : 'Tiếng Anh 8';

  // Sheets for the selected lesson/unit only
  const currentLessonSheets = useMemo(() => {
    const normClass = SchoolService.normalizeClassName(selectedClassId);
    const filtered = sheets.filter((s) => {
      const matchClass = SchoolService.normalizeClassName(s.classId) === normClass;
      const matchLesson = s.lessonId === activeTargetId;
      return matchClass && matchLesson;
    });

    // Deduplicate by student userId
    const uniqueMap = new Map<string, LocalPreparationSheet>();
    for (const sheet of filtered) {
      if (!uniqueMap.has(sheet.userId) || (sheet.submittedAt && !uniqueMap.get(sheet.userId)?.submittedAt)) {
        uniqueMap.set(sheet.userId, sheet);
      }
    }
    const uniqueList = Array.from(uniqueMap.values());

    // Sort Vietnamese ABC by first name (Tên)
    return sortStudentsByName(uniqueList, (s) => s.studentName);
  }, [sheets, selectedClassId, activeTargetId]);

  // Open sheet review modal
  const handleOpenReview = (sheet: LocalPreparationSheet) => {
    setSelectedSheet(sheet);
    setTeacherComment(sheet.teacherComment || '');
  };

  // Save teacher review and comment
  const handleSaveReview = async () => {
    if (!selectedSheet) return;
    setIsSavingFeedback(true);
    try {
      const updated = await PreparationSheetService.saveSheet({
        ...selectedSheet,
        teacherComment,
        status: 'reviewed',
      });
      setSelectedSheet(updated);
      setSheets((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
      setToastMessage('Đã lưu nhận xét và đồng bộ lên hệ thống!');
      setTimeout(() => setToastMessage(null), 2500);
    } catch (e) {
      console.error(e);
      setToastMessage('Lỗi khi lưu nhận xét');
    } finally {
      setIsSavingFeedback(false);
    }
  };

  // ==================== EXPORT EXCEL FUNCTION (Section II.3 & II.4) ====================
  const handleExportExcel = async () => {
    if (currentLessonSheets.length === 0) {
      alert('Chưa có học sinh nào nộp phiếu bài này để xuất Excel.');
      return;
    }

    setIsExportingExcel(true);
    setToastMessage('Đang phân tích AI và tạo file Excel chuẩn hóa...');

    try {
      // Find standard quiz questions for this lesson to match correct concepts
      const standardQuiz = SAMPLE_QUIZZES[activeTargetId];
      const standardQuestions = standardQuiz ? standardQuiz.questions : [];

      const excelRows: any[][] = [];

      for (let i = 0; i < currentLessonSheets.length; i++) {
        const sheet = currentLessonSheets[i];

        // 1. Fetch student's actual quiz submission
        const sub = await QuizService.getSubmissionForStudent(sheet.userId, activeTargetId);

        let quizColText = 'Chưa làm';
        let quizScoreNum: number | null = null;
        let weakConceptText = '';

        if (sub && sub.score !== undefined && sub.score !== null) {
          quizScoreNum = sub.score;
          quizColText = `${sub.score}/5`;

          // If student got some answers wrong, find knowledge topic of mistaken question
          if (sub.score < 5 && standardQuestions.length > 0) {
            const wrongIds = sub.wrongQuestionIds || [];
            if (wrongIds.length > 0) {
              const wrongQ = standardQuestions.find((q) => wrongIds.includes(q.id));
              if (wrongQ && wrongQ.knowledgeTopic) {
                weakConceptText = wrongQ.knowledgeTopic;
              }
            } else {
              // Default to first question topic if score < 5
              const firstTopic = standardQuestions.find((q) => q.knowledgeTopic)?.knowledgeTopic;
              if (firstTopic) weakConceptText = firstTopic;
            }
          }
        } else if (sheet.score !== undefined && sheet.score !== null) {
          quizScoreNum = sheet.score;
          quizColText = `${sheet.score}/5`;
        }

        // 2. AI Individualized Comment (Section II.4)
        // If teacher has entered a custom comment, prioritize it; otherwise generate AI comment
        let commentText = sheet.teacherComment || '';
        if (!commentText) {
          commentText = await AiCommentService.getStudentComment({
            studentName: sheet.studentName,
            subjectName: sheetSubject === 'toan' ? 'Toán 8' : 'Tiếng Anh 8',
            lessonTitle: activeTargetTitle,
            preClassNotes: sheet.preClassNotes,
            keyQuestions: sheet.keyQuestions,
            selfAssessment: sheet.selfAssessment,
            quizScore: quizScoreNum,
            totalQuestions: 5,
            weakConcept: weakConceptText,
          });
        }

        excelRows.push([
          i + 1, // STT
          sheet.studentName, // Tên HS
          sheet.preClassNotes || '', // Kiến thức
          sheet.keyQuestions || '', // Câu hỏi
          sheet.selfAssessment || '', // Tự đánh giá
          quizColText, // Câu hỏi trắc nghiệm (số câu đúng/5 câu)
          commentText, // Nhận xét
        ]);
      }

      // Build SheetJS Workbook
      const wb = XLSX.utils.book_new();

      const headerTitle = `BÁO CÁO PHIẾU CHUẨN BỊ BÀI - ${sheetSubject === 'toan' ? 'TOÁN 8' : 'TIẾNG ANH 8'}`;
      const classInfoLine = `Lớp: ${currentClass?.name || selectedClassId} | ${activeTargetChapter} - ${activeTargetTitle}`;
      const timestampLine = `Thời gian xuất: ${new Date().toLocaleDateString('vi-VN')} ${new Date().toLocaleTimeString('vi-VN')}`;

      const aoaData = [
        [headerTitle],
        [classInfoLine],
        [timestampLine],
        [], // Blank line
        [
          'STT',
          'Tên HS',
          'Kiến thức',
          'Câu hỏi',
          'Tự đánh giá',
          'Câu hỏi trắc nghiệm (số câu đúng/5 câu)',
          'Nhận xét',
        ],
        ...excelRows,
      ];

      const ws = XLSX.utils.aoa_to_sheet(aoaData);

      // Auto column widths & wrap text
      ws['!cols'] = [
        { wch: 6 },  // STT
        { wch: 22 }, // Tên HS
        { wch: 45 }, // Kiến thức
        { wch: 35 }, // Câu hỏi
        { wch: 25 }, // Tự đánh giá
        { wch: 22 }, // Câu hỏi trắc nghiệm
        { wch: 55 }, // Nhận xét
      ];

      XLSX.utils.book_append_sheet(wb, ws, 'PhieuChuanBiBai');

      const safeLesson = activeTargetTitle.replace(/[^a-zA-Z0-9_\u00C0-\u024F\u1EA0-\u1EF9]/g, '_');
      const filename = `Phieu_Bai_${safeLesson}_Lop_${currentClass?.name || '8A'}.xlsx`;

      XLSX.writeFile(wb, filename);

      setToastMessage('Đã xuất file Excel thành công!');
      setTimeout(() => setToastMessage(null), 3000);
    } catch (err) {
      console.error('Error generating Excel:', err);
      alert('Có lỗi xảy ra khi tạo file Excel.');
    } finally {
      setIsExportingExcel(false);
    }
  };

  // ==================== SECTION III: PHÂN TÍCH HỌC TẬP VÀ ĐÁNH GIÁ ====================
  // 1. Math Analysis: Check if students completed all lessons of the chapter
  const activeAnalyticsMathChapter =
    MATH_CHAPTERS.find((c) => c.id === analyticsMathChapterId) || MATH_CHAPTERS[0];

  const mathChapterAnalysis = useMemo(() => {
    const normClass = SchoolService.normalizeClassName(selectedClassId);
    const chapterLessons = activeAnalyticsMathChapter.lessons;

    // Submissions for this class
    const classSubs = quizSubmissions.filter((q) => SchoolService.normalizeClassName(q.classId) === normClass);

    // Group submissions by lessonId
    const lessonSubMap: Record<string, LocalQuizSubmission[]> = {};
    for (const sub of classSubs) {
      if (!lessonSubMap[sub.lessonId]) lessonSubMap[sub.lessonId] = [];
      // unique student per lesson
      if (!lessonSubMap[sub.lessonId].some((s) => s.userId === sub.userId)) {
        lessonSubMap[sub.lessonId].push(sub);
      }
    }

    // Check condition: A chapter is considered complete when all lessons in the chapter have at least completed submissions
    const completedLessonCount = chapterLessons.filter((l) => (lessonSubMap[l.id]?.length || 0) > 0).length;
    const isChapterCompleted = completedLessonCount === chapterLessons.length && chapterLessons.length > 0;

    // If completed, compute stats for each lesson
    const lessonStats = chapterLessons.map((lesson) => {
      const subs = lessonSubMap[lesson.id] || [];
      const totalStudentsDone = subs.length;
      // Số HS sai: students with score < totalQuestions (at least 1 wrong)
      const wrongStudents = subs.filter((s) => s.score < (s.totalQuestions || 5)).length;
      const wrongRate = totalStudentsDone > 0 ? (wrongStudents / totalStudentsDone) * 100 : 0;

      // Extract core knowledge concept
      const quiz = SAMPLE_QUIZZES[lesson.id];
      const concept = quiz?.questions?.[0]?.knowledgeTopic || 'Khái niệm & quy tắc biến đổi trọng tâm';

      return {
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        totalStudentsDone,
        wrongStudents,
        wrongRate,
        knowledgeTopic: concept,
        questions: quiz?.questions || [],
      };
    });

    // Sort by most wrong students first (Sắp xếp bài có nhiều học sinh sai lên trước)
    const sortedStats = [...lessonStats].sort((a, b) => {
      if (b.wrongStudents !== a.wrongStudents) return b.wrongStudents - a.wrongStudents;
      return b.wrongRate - a.wrongRate;
    });

    return {
      isChapterCompleted,
      completedLessonCount,
      totalLessons: chapterLessons.length,
      sortedStats,
    };
  }, [quizSubmissions, selectedClassId, activeAnalyticsMathChapter]);

  // 2. English Analysis: Check if 6 units completed
  const englishUnitsGroup = useMemo(() => {
    if (analyticsEnglishGroup === 'u1_u6') {
      return ENGLISH_UNITS_LIST.slice(0, 6);
    } else {
      return ENGLISH_UNITS_LIST.slice(5, 12); // Unit 6 đến 12
    }
  }, [analyticsEnglishGroup]);

  const englishGroupAnalysis = useMemo(() => {
    const normClass = SchoolService.normalizeClassName(selectedClassId);
    const classSubs = quizSubmissions.filter(
      (q) => SchoolService.normalizeClassName(q.classId) === normClass && q.subjectId === 'tienganh'
    );

    const unitSubMap: Record<string, LocalQuizSubmission[]> = {};
    for (const sub of classSubs) {
      if (!unitSubMap[sub.lessonId]) unitSubMap[sub.lessonId] = [];
      if (!unitSubMap[sub.lessonId].some((s) => s.userId === sub.userId)) {
        unitSubMap[sub.lessonId].push(sub);
      }
    }

    const completedUnitsCount = englishUnitsGroup.filter((u) => (unitSubMap[u.id]?.length || 0) > 0).length;
    // Condition: All units in the group must be completed (at least 6 units)
    const isGroupCompleted = completedUnitsCount >= 6;

    const unitStats = englishUnitsGroup.map((unit) => {
      const subs = unitSubMap[unit.id] || [];
      const totalStudentsDone = subs.length;
      const wrongStudents = subs.filter((s) => s.score < (s.totalQuestions || 5)).length;
      const wrongRate = totalStudentsDone > 0 ? (wrongStudents / totalStudentsDone) * 100 : 0;

      return {
        unitId: unit.id,
        unitTitle: unit.title,
        totalStudentsDone,
        wrongStudents,
        wrongRate,
        skillFocus: unit.skillFocus,
      };
    });

    // Sort Unit có số lượng học sinh sai nhiều nhất lên đầu
    const sortedStats = [...unitStats].sort((a, b) => {
      if (b.wrongStudents !== a.wrongStudents) return b.wrongStudents - a.wrongStudents;
      return b.wrongRate - a.wrongRate;
    });

    return {
      isGroupCompleted,
      completedUnitsCount,
      totalUnits: englishUnitsGroup.length,
      sortedStats,
    };
  }, [quizSubmissions, selectedClassId, englishUnitsGroup]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 pb-20 font-sans">
      {/* ==================== 1. HEADER (Section I.1: Removed student view preview) ==================== */}
      <header className="sticky top-0 z-30 bg-emerald-900 text-white px-4 py-3 shadow-md border-b border-emerald-800">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-black shadow-md">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-extrabold tracking-tight">
                  Cổng Giáo Viên Bộ Môn
                </h1>
                <span className="rounded bg-emerald-800/80 text-emerald-200 border border-emerald-700 px-2 py-0.5 text-[10px] font-bold">
                  {currentUser.displayName}
                </span>
              </div>
              <p className="text-xs text-emerald-200/80">
                Khối 8 • Năm học 2026 - 2027
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onLogout && (
              <button
                onClick={onLogout}
                className="flex items-center gap-1.5 rounded-xl bg-rose-900/60 hover:bg-rose-900 text-rose-200 border border-rose-800 px-3 py-1.5 text-xs font-bold transition cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Đăng xuất / Chuyển tài khoản</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Class Selector Bar */}
      <div className="bg-white border-b border-slate-200 px-4 py-2.5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">Lớp phân công:</span>
            <div className="flex gap-1.5">
              {assignedClasses.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedClassId(c.id)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold border transition cursor-pointer ${
                    SchoolService.normalizeClassName(selectedClassId) === SchoolService.normalizeClassName(c.id)
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Đồng bộ dữ liệu hai chiều Firestore</span>
          </div>
        </div>
      </div>

      {toastMessage && (
        <div className="fixed top-16 right-4 z-50 flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-xl animate-in fade-in slide-in-from-top-2">
          <CheckCircle className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* ==================== SECTION I.2: ONLY 2 TABS (Deleted Students Tab) ==================== */}
        <div className="flex border-b border-slate-200 mb-6 gap-2">
          <button
            onClick={() => setActiveNavTab('sheets')}
            className={`flex items-center gap-2 border-b-2 px-5 py-3 text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer ${
              activeNavTab === 'sheets'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileCheck2 className="w-4 h-4" />
            <span>Phiếu chuẩn bị bài (Lớp {currentClass?.name})</span>
          </button>

          <button
            onClick={() => setActiveNavTab('analytics')}
            className={`flex items-center gap-2 border-b-2 px-5 py-3 text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer ${
              activeNavTab === 'analytics'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Phân tích Học tập & Đánh giá</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* ==================== TAB 1: PHIẾU CHUẨN BỊ BÀI (Section II) ============= */}
        {/* ========================================================================= */}
        {activeNavTab === 'sheets' && (
          <div className="space-y-6">
            {/* Subject Selector: Toán 8 vs Tiếng Anh 8 (Section II.1) */}
            <div className="bg-white p-2 rounded-2xl border border-slate-200 flex gap-2">
              <button
                onClick={() => setSheetSubject('toan')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  sheetSubject === 'toan'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Calculator className="w-4 h-4" />
                <span>Toán 8</span>
              </button>

              <button
                onClick={() => setSheetSubject('tienganh')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  sheetSubject === 'tienganh'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Languages className="w-4 h-4" />
                <span>Tiếng Anh 8</span>
              </button>
            </div>

            {/* SUBJECT: TOÁN 8 */}
            {sheetSubject === 'toan' && (
              <div className="space-y-4">
                {/* 1. Chapter Tabs (Chương I to Chương VI) */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Chọn Chương Toán 8:
                  </span>
                  <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                    {MATH_CHAPTERS.map((ch) => (
                      <button
                        key={ch.id}
                        onClick={() => {
                          setSelectedMathChapterId(ch.id);
                          setSelectedMathLessonId(ch.lessons[0].id);
                        }}
                        className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap border transition cursor-pointer ${
                          selectedMathChapterId === ch.id
                            ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {ch.title.split(':')[0]}
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-xs font-semibold text-sky-800">
                    {activeMathChapter.title}
                  </p>
                </div>

                {/* 2. Lesson Tabs inside selected Chapter */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Chọn Bài học trong {activeMathChapter.title.split(':')[0]}:
                  </span>
                  <div className="flex gap-2 flex-wrap">
                    {activeMathChapter.lessons.map((l) => (
                      <button
                        key={l.id}
                        onClick={() => setSelectedMathLessonId(l.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                          selectedMathLessonId === l.id
                            ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {l.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SUBJECT: TIẾNG ANH 8 */}
            {sheetSubject === 'tienganh' && (
              <div className="bg-white p-3 rounded-2xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Chọn Unit Tiếng Anh 8 (Unit 1 đến Unit 12):
                </span>
                <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                  {ENGLISH_UNITS_LIST.map((u) => (
                    <button
                      key={u.id}
                      onClick={() => setSelectedEnglishUnitId(u.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap border transition cursor-pointer ${
                        selectedEnglishUnitId === u.id
                          ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Unit {u.unitNumber}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-xs font-semibold text-purple-800">
                  {activeEnglishUnit.title} • {activeEnglishUnit.skillFocus}
                </p>
              </div>
            )}

            {/* SECTION II.2: LIST OF STUDENTS WHO SUBMITTED FOR THIS EXACT LESSON */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
              <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">
                    Danh sách học sinh đã nộp phiếu: {activeTargetTitle}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Lớp {currentClass?.name} • Sắp xếp theo thứ tự ABC tiếng Việt (theo Tên)
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1">
                    {currentLessonSheets.length} học sinh đã nộp
                  </span>

                  {/* SECTION II.3: EXCEL EXPORT BUTTON */}
                  <button
                    onClick={handleExportExcel}
                    disabled={isExportingExcel || currentLessonSheets.length === 0}
                    className="flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white px-3.5 py-1.5 text-xs font-bold shadow-xs transition cursor-pointer"
                  >
                    {isExportingExcel ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Download className="w-3.5 h-3.5" />
                    )}
                    <span>XUẤT FILE EXCEL</span>
                  </button>
                </div>
              </div>

              {/* Table of Students: Only STT and Họ và tên học sinh (Section II.2) */}
              <div className="divide-y divide-slate-100">
                {currentLessonSheets.length === 0 ? (
                  <div className="p-8 text-center text-xs text-slate-500">
                    Chưa có học sinh nào nộp phiếu chuẩn bị bài cho <strong>{activeTargetTitle}</strong>.
                  </div>
                ) : (
                  currentLessonSheets.map((sheet, index) => (
                    <div
                      key={sheet.id || sheet.userId}
                      onClick={() => handleOpenReview(sheet)}
                      className="p-3.5 sm:p-4 hover:bg-slate-50 transition flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-800 transition">
                          {index + 1}
                        </span>
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-emerald-700 transition">
                            {sheet.studentName}
                          </p>
                          <span className="text-[11px] text-slate-400">
                            Nộp lúc: {sheet.submittedAt ? new Date(sheet.submittedAt).toLocaleTimeString('vi-VN') + ' ' + new Date(sheet.submittedAt).toLocaleDateString('vi-VN') : 'Mới nộp'}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {sheet.teacherComment ? (
                          <span className="rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1">
                            Đã nhận xét
                          </span>
                        ) : (
                          <span className="rounded bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-1">
                            Chờ nhận xét
                          </span>
                        )}
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition" />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* ==================== TAB 2: PHÂN TÍCH HỌC TẬP & ĐÁNH GIÁ (Section III) == */}
        {/* ========================================================================= */}
        {activeNavTab === 'analytics' && (
          <div className="space-y-6">
            {/* Subject Selector for Analytics */}
            <div className="bg-white p-2 rounded-2xl border border-slate-200 flex gap-2">
              <button
                onClick={() => setAnalyticsSubject('toan')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  analyticsSubject === 'toan'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Calculator className="w-4 h-4" />
                <span>Phân tích Toán 8</span>
              </button>

              <button
                onClick={() => setAnalyticsSubject('tienganh')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  analyticsSubject === 'tienganh'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Languages className="w-4 h-4" />
                <span>Phân tích Tiếng Anh 8</span>
              </button>
            </div>

            {/* ==================== 1. PHÂN TÍCH TOÁN 8 (Section III.2) ==================== */}
            {analyticsSubject === 'toan' && (
              <div className="space-y-4">
                {/* Chapter Sub-tabs */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Chọn chương Toán 8 cần phân tích:
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                        mathChapterAnalysis.isChapterCompleted
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {mathChapterAnalysis.isChapterCompleted
                        ? 'Trạng thái: Đủ điều kiện thống kê'
                        : 'Trạng thái: Đang học / Chưa đủ dữ liệu'}
                    </span>
                  </div>

                  <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                    {MATH_CHAPTERS.map((ch) => (
                      <button
                        key={ch.id}
                        onClick={() => {
                          setAnalyticsMathChapterId(ch.id);
                          setExpandedLessonDetail(null);
                        }}
                        className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap border transition cursor-pointer ${
                          analyticsMathChapterId === ch.id
                            ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {ch.title.split(':')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Condition Verification (Section III.2) */}
                {!mathChapterAnalysis.isChapterCompleted ? (
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center space-y-2">
                    <AlertCircle className="w-8 h-8 text-amber-600 mx-auto" />
                    <h3 className="text-sm font-extrabold text-amber-900">
                      Chưa đủ dữ liệu để thống kê
                    </h3>
                    <p className="text-xs text-amber-800 max-w-md mx-auto leading-relaxed">
                      Môn Toán 8 chỉ thống kê khi học sinh lớp {currentClass?.name} đã hoàn thành toàn bộ các bài thuộc{' '}
                      <strong>{activeAnalyticsMathChapter.title}</strong> (Đã hoàn thành {mathChapterAnalysis.completedLessonCount}/{mathChapterAnalysis.totalLessons} bài).
                    </p>
                    <span className="inline-block mt-2 text-[11px] font-semibold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                      Hệ thống tự động bảo lưu nguyên tắc: không hiển thị kết luận hoặc số liệu giả
                    </span>
                  </div>
                ) : (
                  /* Completed Chapter Table (Section III.2) */
                  <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
                    <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                      <div>
                        <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">
                          Bảng thống kê tỷ lệ sai {activeAnalyticsMathChapter.title} (Lớp {currentClass?.name})
                        </h3>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Sắp xếp theo số lượng và tỷ lệ học sinh làm sai nhiều nhất lên trước
                        </p>
                      </div>
                      <span className="rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1">
                        Hoàn thành 100% các bài trong chương
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100 text-slate-700 font-extrabold border-b border-slate-200">
                          <tr>
                            <th className="p-3 w-12 text-center">STT</th>
                            <th className="p-3">Bài học</th>
                            <th className="p-3 text-center">Số HS đã làm</th>
                            <th className="p-3 text-center">Số HS sai</th>
                            <th className="p-3 text-center">Tỷ lệ sai</th>
                            <th className="p-3">Kiến thức cần củng cố</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {mathChapterAnalysis.sortedStats.map((item, idx) => (
                            <React.Fragment key={item.lessonId}>
                              <tr
                                onClick={() =>
                                  setExpandedLessonDetail(
                                    expandedLessonDetail === item.lessonId ? null : item.lessonId
                                  )
                                }
                                className="hover:bg-slate-50 cursor-pointer transition"
                              >
                                <td className="p-3 text-center font-bold text-slate-500">{idx + 1}</td>
                                <td className="p-3 font-bold text-slate-800 flex items-center gap-1.5">
                                  <span>{item.lessonTitle}</span>
                                  <ChevronDown
                                    className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                                      expandedLessonDetail === item.lessonId ? 'rotate-180' : ''
                                    }`}
                                  />
                                </td>
                                <td className="p-3 text-center font-semibold text-slate-700">
                                  {item.totalStudentsDone}
                                </td>
                                <td className="p-3 text-center font-bold text-amber-600">
                                  {item.wrongStudents}
                                </td>
                                <td className="p-3 text-center font-extrabold text-rose-600">
                                  {item.wrongRate.toFixed(1)}%
                                </td>
                                <td className="p-3 text-slate-600">{item.knowledgeTopic}</td>
                              </tr>

                              {expandedLessonDetail === item.lessonId && (
                                <tr className="bg-sky-50/60">
                                  <td colSpan={6} className="p-4 space-y-2">
                                    <h4 className="text-[11px] font-extrabold text-sky-900 uppercase">
                                      Chi tiết 5 câu hỏi trắc nghiệm của {item.lessonTitle}:
                                    </h4>
                                    <div className="space-y-1.5 text-xs text-slate-700">
                                      {item.questions.map((q, qIdx) => (
                                        <div
                                          key={q.id}
                                          className="p-2.5 rounded-xl bg-white border border-sky-100 flex items-start gap-2"
                                        >
                                          <span className="font-bold text-sky-700 shrink-0">
                                            Câu {qIdx + 1}:
                                          </span>
                                          <div>
                                            <p className="font-medium text-slate-800">{q.question}</p>
                                            <p className="text-[11px] text-slate-500 mt-0.5">
                                              Kiến thức trọng tâm: <strong>{q.knowledgeTopic || 'Khái niệm SGK'}</strong> • Đáp án đúng: {String.fromCharCode(65 + q.correctIndex)}
                                            </p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ==================== 2. PHÂN TÍCH TIẾNG ANH 8 (Section III.3) ==================== */}
            {analyticsSubject === 'tienganh' && (
              <div className="space-y-4">
                {/* 2 Tabs: Unit 1 đến Unit 6 & Unit 6 đến 12 (Section III.3) */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Chọn giai đoạn Unit Tiếng Anh 8:
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                        englishGroupAnalysis.isGroupCompleted
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {englishGroupAnalysis.isGroupCompleted
                        ? 'Trạng thái: Đủ điều kiện thống kê'
                        : 'Trạng thái: Đang học / Chưa đủ dữ liệu'}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setAnalyticsEnglishGroup('u1_u6')}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                        analyticsEnglishGroup === 'u1_u6'
                          ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Unit 1 đến Unit 6
                    </button>

                    <button
                      onClick={() => setAnalyticsEnglishGroup('u6_u12')}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                        analyticsEnglishGroup === 'u6_u12'
                          ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Unit 6 đến 12
                    </button>
                  </div>
                </div>

                {/* Condition Verification (Section III.3: Chỉ thống kê khi đã hoàn thành đủ 6 Unit) */}
                {!englishGroupAnalysis.isGroupCompleted ? (
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center space-y-2">
                    <AlertCircle className="w-8 h-8 text-amber-600 mx-auto" />
                    <h3 className="text-sm font-extrabold text-amber-900">
                      Chưa đủ dữ liệu để thống kê
                    </h3>
                    <p className="text-xs text-amber-800 max-w-md mx-auto leading-relaxed">
                      Môn Tiếng Anh 8 chỉ hiển thị bảng phân tích khi học sinh lớp {currentClass?.name} đã hoàn thành đủ 6 Unit trong giai đoạn{' '}
                      <strong>{analyticsEnglishGroup === 'u1_u6' ? 'Unit 1 đến Unit 6' : 'Unit 6 đến 12'}</strong> (Hiện tại đã hoàn thành {englishGroupAnalysis.completedUnitsCount}/6 Unit).
                    </p>
                    <span className="inline-block mt-2 text-[11px] font-semibold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                      Hệ thống tự động bảo lưu nguyên tắc: không đưa ra nhận định giả
                    </span>
                  </div>
                ) : (
                  /* Completed English Group Table */
                  <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
                    <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                      <div>
                        <h3 className="text-xs sm:text-sm font-extrabold text-slate-900">
                          Bảng thống kê tỷ lệ sai {analyticsEnglishGroup === 'u1_u6' ? 'Unit 1 đến Unit 6' : 'Unit 6 đến 12'} (Lớp {currentClass?.name})
                        </h3>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Sắp xếp Unit có số lượng học sinh sai nhiều nhất lên đầu
                        </p>
                      </div>
                      <span className="rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1">
                        Đủ điều kiện 6 Unit
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100 text-slate-700 font-extrabold border-b border-slate-200">
                          <tr>
                            <th className="p-3 w-12 text-center">STT</th>
                            <th className="p-3">Unit</th>
                            <th className="p-3 text-center">Số HS đã làm</th>
                            <th className="p-3 text-center">Số HS sai</th>
                            <th className="p-3 text-center">Tỷ lệ sai</th>
                            <th className="p-3">Kiến thức / kỹ năng cần củng cố</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {englishGroupAnalysis.sortedStats.map((item, idx) => (
                            <tr key={item.unitId} className="hover:bg-slate-50 transition">
                              <td className="p-3 text-center font-bold text-slate-500">{idx + 1}</td>
                              <td className="p-3 font-bold text-slate-800">{item.unitTitle}</td>
                              <td className="p-3 text-center font-semibold text-slate-700">
                                {item.totalStudentsDone}
                              </td>
                              <td className="p-3 text-center font-bold text-amber-600">
                                {item.wrongStudents}
                              </td>
                              <td className="p-3 text-center font-extrabold text-rose-600">
                                {item.wrongRate.toFixed(1)}%
                              </td>
                              <td className="p-3 text-slate-600">{item.skillFocus}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      {/* ==================== MODAL XEM PHIẾU CHUẨN BỊ BÀI (Section II.2) ==================== */}
      {selectedSheet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95">
            <div className="bg-emerald-700 px-5 py-4 text-white flex items-center justify-between">
              <div>
                <span className="rounded bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                  Phiếu chuẩn bị bài học sinh
                </span>
                <h3 className="mt-1 text-base font-bold">{selectedSheet.lessonTitle}</h3>
                <p className="text-xs text-emerald-100">Học sinh: {selectedSheet.studentName}</p>
              </div>
              <button
                onClick={() => setSelectedSheet(null)}
                className="rounded-full p-1 text-white/80 hover:bg-white/20 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
              {/* Section 1: Kiến thức */}
              <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200 space-y-1">
                <span className="text-[11px] font-bold text-slate-700 uppercase">
                  1. Kiến thức cốt lõi em ghi nhận được khi đọc trước:
                </span>
                <p className="text-xs text-slate-800 leading-relaxed whitespace-pre-wrap">
                  {selectedSheet.preClassNotes || 'Không có ghi chép.'}
                </p>
              </div>

              {/* Section 2: Câu hỏi */}
              <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200 space-y-1">
                <span className="text-[11px] font-bold text-slate-700 uppercase">
                  2. Câu hỏi hoặc điều em còn thắc mắc muốn hỏi thầy cô:
                </span>
                <p className="text-xs text-slate-800 leading-relaxed whitespace-pre-wrap">
                  {selectedSheet.keyQuestions || 'Không có câu hỏi.'}
                </p>
              </div>

              {/* Section 3: Tự đánh giá */}
              <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200 space-y-1">
                <span className="text-[11px] font-bold text-slate-700 uppercase">
                  3. Tự đánh giá mức độ hiểu bài trước khi đến lớp:
                </span>
                <p className="text-xs font-semibold text-emerald-800">
                  {selectedSheet.selfAssessment || 'Chưa đánh giá.'}
                </p>
              </div>

              {/* Teacher Comment */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nhận xét & Khích lệ của Thầy/Cô (sẽ đồng bộ tới học sinh):
                </label>
                <textarea
                  value={teacherComment}
                  onChange={(e) => setTeacherComment(e.target.value)}
                  rows={3}
                  className="w-full rounded-xl border border-slate-300 p-3 text-xs text-slate-800 focus:border-emerald-500 focus:outline-none"
                  placeholder="Ghi nhận xét gửi cho học sinh..."
                />
              </div>
            </div>

            <div className="border-t border-slate-200 bg-slate-50 px-5 py-3 flex items-center justify-end gap-2">
              <button
                onClick={() => setSelectedSheet(null)}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                Đóng
              </button>
              <button
                onClick={handleSaveReview}
                disabled={isSavingFeedback}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 active:scale-95 transition cursor-pointer"
              >
                {isSavingFeedback ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                <span>Lưu & Gửi nhận xét</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
