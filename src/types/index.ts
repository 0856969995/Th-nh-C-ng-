/**
 * Type definitions for HỌC VUI MỖI NGÀY - Lớp 8 (Phiên bản Ứng dụng Di động)
 * Gồm 2 môn: Toán 8 và Tiếng Anh 8.
 */

export type SubjectId = 'toan' | 'tienganh';

export interface Subject {
  id: SubjectId;
  name: string;
  shortName: string;
  tagline: string;
  iconName: string;
  colorBg: string;
  colorBorder: string;
  colorText: string;
  colorAccent: string;
  totalChapters: number;
  totalLessons: number;
}

export interface Chapter {
  id: string;
  subjectId: SubjectId;
  chapterNumber: number;
  title: string;
  description: string;
  totalLessons: number;
}

export interface KeyConcept {
  term: string;
  definition: string;
  example?: string;
}

export interface VocabularyItem {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaning: string;
  example: string;
  exampleMeaning: string;
}

export interface LessonPreview {
  id: string;
  subjectId: SubjectId;
  subjectName: string;
  chapterId: string;
  chapterNumber: number;
  lessonNumber: number; // 1, 2, 3, 4...
  title: string;
  chapter: string;
  readTimeMinutes: number;
  summary: string;
  keyConcepts: KeyConcept[];
  importantTakeaways?: string[];
  preClassQuestion?: string; // Câu hỏi chuẩn bị trước khi lên lớp
  teacherTips?: string;      // Mẹo chú ý khi nghe thầy cô giảng
  didYouKnow?: string;      // Mục Em có biết? (khi có dữ liệu chuẩn SGK)
  vocabulary?: VocabularyItem[]; // Mục Từ vựng dành cho môn Tiếng Anh
  dialogueExpressions?: { english: string; vietnamese: string }[]; // Bảng cấu trúc/câu hội thoại SGK
  isCompleted?: boolean;
  isBookmarked?: boolean;
}

export interface LessonSectionItem {
  id: string;
  title: string;
  conceptDefinition?: string;
  explanationText?: string;
  examples?: {
    label: string;
    content: string;
    explanation?: string;
  }[];
  notes?: string[];
  practiceExercises?: {
    title: string;
    problem: string;
    solution: string;
  }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hint: string; // Trợ lý gợi ý học tập (gợi ý mặc định / cấp 1)
  hints?: string[]; // Danh sách các gợi ý tăng dần (progressive hints) khi học sinh thử lại
  knowledgeTopic: string; // Nội dung kiến thức được kiểm tra
  lessonSectionRef?: string; // Liên kết đến phần kiến thức tương ứng trong bài
  imageUrl?: string; // Ảnh biểu đồ đính kèm câu hỏi (nếu có)
  imageAlt?: string;
  wrongFeedbacks?: {
    [optionIndex: number]: {
      error: string;
      hint: string;
    };
  };
}

export interface QuickQuiz {
  id: string;
  lessonId: string;
  subjectId: SubjectId;
  title: string;
  timeLimitSeconds: number;
  questions: QuizQuestion[];
}

// Báo cáo chi tiết từng lần trả lời câu hỏi theo yêu cầu Phần VI
export interface QuestionAnalyticsRecord {
  id: string;
  subjectId: SubjectId;
  chapterId: string;
  lessonId: string;
  questionId: string;
  knowledgeTopic: string;
  correctIndex: number;
  selectedAnswersHistory: number[];
  attemptsCount: number;
  isCorrectFirstTry: boolean;
  hintsUsedCount: number;
  isFinalCorrect: boolean;
  completedAt: string;
}

export interface LessonStats {
  lessonId: string;
  totalQuestions: number;
  firstTryCorrectCount: number;
  firstTryWrongCount: number;
  neededHintCount: number;
  completedAfterHintCount: number;
}

export interface ChapterStats {
  chapterId: string;
  chapterTitle: string;
  totalQuestions: number;
  firstTryCorrectCount: number;
  completedCount: number;
  firstTryCorrectRate: number; // Tỉ lệ đúng lần đầu %
  completionRate: number; // Tỉ lệ hoàn thành %
}

export interface ReadingProgress {
  lessonId: string;
  subjectId: SubjectId;
  lastVisitedAt: string;
  currentSection: 'summary' | 'concepts' | 'preclass' | 'tips' | 'completed';
  sectionIndex: number;
  percentage: number;
  isFinished: boolean;
}

export interface QuizAttemptProgress {
  quizId: string;
  lessonId: string;
  subjectId: SubjectId;
  currentQuestionIndex: number;
  selectedAnswers: { [questionId: string]: number };
  isFinished: boolean;
  correctAnswersCount: number;
  totalQuestions: number;
  wrongQuestionIds: string[];
  lastVisitedAt: string;
}

export interface WrongMistakeItem {
  id: string;
  lessonId: string;
  subjectId: SubjectId;
  subjectName: string;
  lessonTitle: string;
  lessonNumber: number;
  questionId: string;
  questionText: string;
  options: string[];
  correctIndex: number;
  userWrongIndex: number;
  explanation: string;
  hint: string;
  resolved: boolean;
  recordedAt: string;
}

export type UserRole = 'student' | 'teacher' | 'admin';

export interface School {
  id: string;
  name: string;
  code: string;
  address: string;
  academicYear: string; // e.g. "2026 - 2027"
  principalName?: string;
  phone?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface ClassSubjectAssignment {
  subjectId: SubjectId;
  teacherId: string;
  teacherName: string;
}

export interface ClassInfo {
  id: string;
  schoolId: string;
  name: string; // e.g. "8A1"
  grade: number; // 8
  academicYear: string;
  homeroomTeacherId?: string;
  homeroomTeacherName?: string;
  teacherIds: string[];
  subjectAssignments?: ClassSubjectAssignment[];
  studentCount?: number;
  createdAt: string;
}

// User account with salted PIN hashing & recovery code & RBAC
export interface UserAccount {
  id: string;
  username: string; // Tên đăng nhập
  displayName: string; // Họ và tên
  role?: UserRole; // 'student' | 'teacher' | 'admin'
  schoolId?: string;
  schoolName?: string;
  classId?: string;
  className?: string;
  studentCode?: string; // Mã học sinh
  subjects?: SubjectId[]; // Môn giảng dạy nếu là giáo viên
  assignedClassIds?: string[]; // Danh sách lớp được phân công
  email?: string;
  isLocked?: boolean; // Khóa tài khoản
  mustChangePin?: boolean; // Bắt buộc đổi mã PIN ở lần đăng nhập đầu tiên
  secondaryIdentifier?: string; // Thông tin phân biệt nếu trùng họ tên trong cùng lớp (ví dụ: ngày sinh hoặc số thứ tự)
  saltHex: string;
  pinHashHex: string;
  recoveryCode: string;
  totalStars?: number;
  waterDrops?: number;
  seedsCount?: number;
  completedLessonIds?: string[];
  createdAt: string;
  updatedAt?: string;
}

export interface StudentProfile {
  username: string;
  name: string;
  nickname: string;
  role?: UserRole;
  grade: number; // 8
  school?: string;
  schoolId?: string;
  classId?: string;
  className?: string;
  studentCode?: string;
  isLocked?: boolean;
  totalStars: number;
  waterDrops: number; // Giọt nước dùng để chăm sóc khu vườn
  seedsCount: number; // Hạt giống tri thức
  completedLessonIds: string[];
  bookmarkedLessonIds: string[];
  lastActiveDate: string;
  totalTasksCompleted: number;
  totalQuestionsAnswered: number;
  correctQuestionsAnswered: number;
}

// Gamification: Khu vườn học tập (Garden)
export interface GardenPlant {
  id: string;
  subjectId: SubjectId;
  name: string;
  seedName: string;
  stage: 1 | 2 | 3 | 4 | 5; // 1: Hạt mầm, 2: Chồi non, 3: Cây non, 4: Đơm hoa, 5: Cây kết quả tri thức
  waterPoints: number; // Điểm nước hiện tại của giai đoạn
  requiredPoints: number; // Điểm nước cần để lên giai đoạn tiếp theo
  totalHarvests: number; // Số lần đã thu hoạch quả tri thức
}

export interface AchievementBadge {
  id: string;
  title: string;
  description: string;
  iconName: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export type BadgeTier = 'bronze' | 'silver' | 'gold';

export interface ChapterSummaryStats {
  chapterId: string;
  chapterTitle: string;
  subjectId: SubjectId;
  totalLessons: number;
  completedLessonsCount: number;
  isChapterCompleted: boolean;
  totalQuestions: number;
  firstTryCorrectCount: number;
  firstTryRate: number; // Tổng số câu đúng ngay lần đầu / Tổng số câu hỏi của chương * 100%
  completionRate: number; // Tổng số câu hoàn thành / Tổng số câu hỏi của chương * 100%
  badgeTier?: BadgeTier | null; // 'bronze' | 'silver' | 'gold' | null
  badgeStars: number; // 1, 2, 3
  aiComment?: string; // Nhận xét chung duy nhất khi hoàn thành chương
}

export type MainTabType = 'lessons' | 'questions' | 'achievements' | 'garden' | 'profile' | 'teacher_dashboard' | 'preparation_sheets';

export interface EnglishVocabularyItem {
  id: string;
  word: string;
  partOfSpeech: string; // 'n', 'phr', 'v'...
  meaning: string;
  example?: string;
  group?: string;
}

export interface EnglishGrammarPoint {
  id: string;
  title: string;
  formula: string;
  rule: string;
  example: { english: string; vietnamese: string };
  summary?: string;
  rules?: string[];
  examples?: { english: string; vietnamese: string }[];
  commonMistakes?: { wrong: string; correct: string; explanation: string }[];
}

export interface EnglishUnitQuizRecord {
  unitId: string;
  tabId: 'vocab' | 'grammar' | 'practice';
  score: number;
  totalQuestions: number;
  userAnswers: { [questionId: string]: number };
  completedAt: string;
}
