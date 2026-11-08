import { SubjectId, QuestionAnalyticsRecord } from '../types';
import { LocalPreparationSheet, LocalQuizSubmission } from './db';

export interface StudentOfflineAnalytics {
  userId: string;
  studentName: string;
  totalQuizzesTaken: number;
  averageScoreRate: number; // 0 - 100%
  firstTrySuccessRate: number; // 0 - 100%
  preparationSheetsCompleted: number;
  weakTopics: { topic: string; subjectId: SubjectId; errorCount: number; recommendation: string }[];
  subjectPerformance: {
    [subject in SubjectId]: {
      totalAnswered: number;
      correctFirstTry: number;
      hintsUsed: number;
      completionRate: number;
    };
  };
  learningHabitRating: 'Tích cực xuất sắc' | 'Chăm chỉ tiến bộ' | 'Cần củng cố thêm';
  aiFeedbackSummary: string;
}

export const OfflineAnalyticsService = {
  // Analyze a single preparation sheet locally
  evaluatePreparationSheet(sheet: Partial<LocalPreparationSheet>): {
    completenessScore: number; // 0 - 100
    qualityRating: 'Xuất sắc' | 'Đạt yêu cầu' | 'Cần bổ sung';
    feedback: string;
  } {
    let score = 0;
    const notesLen = (sheet.preClassNotes || '').trim().length;
    const questionsLen = (sheet.keyQuestions || '').trim().length;
    const assessLen = (sheet.selfAssessment || '').trim().length;

    // Rule 1: Pre-class notes
    if (notesLen >= 100) score += 40;
    else if (notesLen >= 30) score += 25;
    else if (notesLen > 0) score += 10;

    // Rule 2: Inquiring questions
    if (questionsLen >= 50) score += 40;
    else if (questionsLen >= 15) score += 25;
    else if (questionsLen > 0) score += 10;

    // Rule 3: Self assessment
    if (assessLen >= 20) score += 20;
    else if (assessLen > 0) score += 10;

    let qualityRating: 'Xuất sắc' | 'Đạt yêu cầu' | 'Cần bổ sung' = 'Cần bổ sung';
    let feedback = '';

    if (score >= 80) {
      qualityRating = 'Xuất sắc';
      feedback = 'Phiếu chuẩn bị bài rất chi tiết, có câu hỏi phản biện sâu sắc. Rất đáng khen ngợi!';
    } else if (score >= 50) {
      qualityRating = 'Đạt yêu cầu';
      feedback = 'Đã nắm được ý chính của bài học. Em nên đặt thêm 1-2 câu hỏi thắc mắc trước khi lên lớp nhé.';
    } else {
      qualityRating = 'Cần bổ sung';
      feedback = 'Nội dung chuẩn bị còn ngắn. Em hãy ghi thêm các khái niệm quan trọng và điều em chưa rõ.';
    }

    return { completenessScore: score, qualityRating, feedback };
  },

  // Compute student offline analytics across all records
  computeStudentAnalytics(
    userId: string,
    studentName: string,
    quizRecords: QuestionAnalyticsRecord[],
    sheets: LocalPreparationSheet[]
  ): StudentOfflineAnalytics {
    const totalQuizzes = quizRecords.length;
    const firstTryCorrect = quizRecords.filter((r) => r.isCorrectFirstTry).length;
    const firstTrySuccessRate = totalQuizzes > 0 ? Math.round((firstTryCorrect / totalQuizzes) * 100) : 100;

    const subjectStats: StudentOfflineAnalytics['subjectPerformance'] = {
      toan: { totalAnswered: 0, correctFirstTry: 0, hintsUsed: 0, completionRate: 0 },
      tienganh: { totalAnswered: 0, correctFirstTry: 0, hintsUsed: 0, completionRate: 0 },
    };

    const topicFails: { [key: string]: { count: number; subjectId: SubjectId } } = {};

    quizRecords.forEach((r) => {
      const subj = r.subjectId || 'toan';
      if (subjectStats[subj]) {
        subjectStats[subj].totalAnswered += 1;
        if (r.isCorrectFirstTry) subjectStats[subj].correctFirstTry += 1;
        subjectStats[subj].hintsUsed += r.hintsUsedCount || 0;
      }

      if (!r.isCorrectFirstTry && r.knowledgeTopic) {
        if (!topicFails[r.knowledgeTopic]) {
          topicFails[r.knowledgeTopic] = { count: 0, subjectId: subj };
        }
        topicFails[r.knowledgeTopic].count += 1;
      }
    });

    Object.keys(subjectStats).forEach((k) => {
      const s = subjectStats[k as SubjectId];
      s.completionRate = s.totalAnswered > 0 ? Math.round((s.correctFirstTry / s.totalAnswered) * 100) : 0;
    });

    const weakTopics = Object.entries(topicFails)
      .filter(([_, data]) => data.count >= 1)
      .map(([topic, data]) => ({
        topic,
        subjectId: data.subjectId,
        errorCount: data.count,
        recommendation: `Xem lại quy tắc và công thức phần "${topic}" trong SGK để khắc phục lỗi sai.`,
      }))
      .slice(0, 5);

    const completedSheets = sheets.filter((s) => s.status === 'submitted' || s.status === 'reviewed').length;

    let learningHabitRating: 'Tích cực xuất sắc' | 'Chăm chỉ tiến bộ' | 'Cần củng cố thêm' = 'Cần củng cố thêm';
    if (firstTrySuccessRate >= 80 && completedSheets >= 1) {
      learningHabitRating = 'Tích cực xuất sắc';
    } else if (firstTrySuccessRate >= 60 || completedSheets >= 1) {
      learningHabitRating = 'Chăm chỉ tiến bộ';
    }

    let aiFeedbackSummary = `Học sinh ${studentName} duy trì tỉ lệ trả lời đúng ${firstTrySuccessRate}%. `;
    if (weakTopics.length > 0) {
      aiFeedbackSummary += `Cần chú ý củng cố chủ đề: ${weakTopics.map((w) => w.topic).join(', ')}.`;
    } else {
      aiFeedbackSummary += `Nắm chắc kiến thức nền tảng cả 2 môn Toán 8 và Tiếng Anh 8.`;
    }

    return {
      userId,
      studentName,
      totalQuizzesTaken: totalQuizzes,
      averageScoreRate: firstTrySuccessRate,
      firstTrySuccessRate,
      preparationSheetsCompleted: completedSheets,
      weakTopics,
      subjectPerformance: subjectStats,
      learningHabitRating,
      aiFeedbackSummary,
    };
  },
};
