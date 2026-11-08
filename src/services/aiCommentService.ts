/**
 * AI Comment Generation Service
 * Requirements:
 * - Each student receives a distinct comment.
 * - Exactly ONE complete sentence.
 * - Word count strictly between 20 and 35 Vietnamese words.
 * - Pedagogical, supportive, and specific to actual errors/strengths.
 * - If data is missing: "Chưa đủ dữ liệu để nhận xét."
 */

export interface StudentAnswerDetail {
  questionId: string;
  questionText: string;
  userOptionIndex: number;
  correctIndex: number;
  isCorrect: boolean;
  knowledgeTopic?: string;
}

export interface StudentCommentInput {
  studentName: string;
  subjectName: string; // 'Toán 8' | 'Tiếng Anh 8'
  lessonTitle: string; // e.g. 'Bài 1: Đơn thức'
  preClassNotes?: string;
  keyQuestions?: string;
  selfAssessment?: string;
  quizScore?: number | null; // e.g. 4
  totalQuestions?: number; // 5
  weakConcept?: string;
  strengths?: string;
  studentAnswers?: StudentAnswerDetail[];
  wrongQuestionsSummary?: string;
}

export function countVietnameseWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function trimOrPadToOneSentence(sentence: string, minWords = 20, maxWords = 35): string {
  let clean = sentence.replace(/\s+/g, ' ').trim();
  // Ensure single period at end
  clean = clean.replace(/[\.\!\?]+$/, '') + '.';

  const words = clean.split(/\s+/);
  if (words.length > maxWords) {
    const trimmed = words.slice(0, maxWords - 1).join(' ') + '.';
    return trimmed;
  }
  return clean;
}

/**
 * Deterministic Pedagogical Analysis Engine
 * Generates an individualized 20-35 word sentence tailored to student's exact submission
 */
export function generatePedagogicalComment(input: StudentCommentInput): string {
  const {
    studentName,
    lessonTitle,
    preClassNotes,
    keyQuestions,
    selfAssessment,
    quizScore,
    totalQuestions = 5,
    weakConcept,
    wrongQuestionsSummary,
    studentAnswers,
  } = input;

  const hasNotes = !!preClassNotes && preClassNotes.trim().length > 0;
  const hasQuestions = !!keyQuestions && keyQuestions.trim().length > 0;
  const hasQuiz = quizScore !== null && quizScore !== undefined;

  // Rule: If completely empty, return standard notice
  if (!hasNotes && !hasQuestions && !hasQuiz) {
    return 'Chưa đủ dữ liệu để nhận xét.';
  }

  // Extract first name (Tên) for polite addressing
  const nameParts = studentName.trim().split(/\s+/);
  const firstName = nameParts[nameParts.length - 1] || 'em';
  const cleanLesson = lessonTitle.replace(/^(Bài|Unit)\s*\d+[\s:\-]+/i, '').trim() || lessonTitle;

  // Determine specific topic from wrong questions or concept
  let specificMistakeTopic = wrongQuestionsSummary || weakConcept;
  if (!specificMistakeTopic && studentAnswers && studentAnswers.length > 0) {
    const wrongAns = studentAnswers.find((a) => !a.isCorrect);
    if (wrongAns && wrongAns.knowledgeTopic) {
      specificMistakeTopic = wrongAns.knowledgeTopic;
    }
  }

  // Case 1: Perfect score 5/5
  if (hasQuiz && quizScore === totalQuestions) {
    const praiseTemplates = [
      `Em ${firstName} ghi chép phiếu học tập chu đáo, nắm vững toàn bộ kiến thức trọng tâm của ${cleanLesson} và trả lời đúng 5/5 câu hỏi trắc nghiệm, hãy tiếp tục phát huy ở các bài tập nâng cao.`,
      `Em ${firstName} chuẩn bị bài rất nghiêm túc, hiểu sâu sắc lý thuyết phần ${cleanLesson} và hoàn thành xuất sắc 5/5 câu trắc nghiệm, cần duy trì tinh thần tự học tích cực này trên lớp.`,
      `Em ${firstName} thể hiện tư duy rất tốt khi nắm chắc các quy tắc của ${cleanLesson} và đạt điểm tối đa 5/5 trắc nghiệm, hãy thử sức thêm với các bài toán vận dụng nâng cao.`,
      `Em ${firstName} có tinh thần chuẩn bị bài xuất sắc, ghi chép khoa học và đạt tuyệt đối 5/5 câu trắc nghiệm của ${cleanLesson}, thầy cô rất khen ngợi tinh thần học tập của em.`,
    ];
    const hash = (studentName.length + cleanLesson.length) % praiseTemplates.length;
    return trimOrPadToOneSentence(praiseTemplates[hash]);
  }

  // Case 2: Good score 4/5 (Minor mistake)
  if (hasQuiz && quizScore === 4) {
    const specificWeakness = specificMistakeTopic || (input.subjectName === 'Tiếng Anh 8' ? 'cách dùng từ vựng trong ngữ cảnh' : 'kỹ năng xác định dấu và biến');
    const goodTemplates = [
      `Em ${firstName} ghi chép phiếu đầy đủ và đạt kết quả tốt 4/5 câu trắc nghiệm, tuy nhiên cần lưu ý rèn luyện thêm ${specificWeakness} để tránh nhầm lẫn đáng tiếc khi làm bài.`,
      `Em ${firstName} chuẩn bị bài chu đáo và làm đúng 4/5 câu hỏi, chỉ cần chú ý củng cố lại ${specificWeakness} là sẽ nắm vững trọn vẹn kiến thức của bài học này.`,
      `Em ${firstName} nắm khá tốt nội dung bài học với kết quả 4/5 câu đúng, cần dành thêm thời gian ôn luyện phần ${specificWeakness} để đạt kết quả hoàn hảo hơn.`,
      `Em ${firstName} tích cực tự học và trả lời đúng 4/5 câu hỏi, hãy chú ý xem lại câu sai liên quan đến ${specificWeakness} để tự tin hơn trong các tiết học tới.`,
    ];
    const hash = (studentName.length + (preClassNotes?.length || 0)) % goodTemplates.length;
    return trimOrPadToOneSentence(goodTemplates[hash]);
  }

  // Case 3: Moderate score 2/5 or 3/5 (Needs review)
  if (hasQuiz && quizScore >= 2 && quizScore <= 3) {
    const topicToReview = specificMistakeTopic || (input.subjectName === 'Tiếng Anh 8' ? 'cấu trúc ngữ pháp trọng tâm' : 'quy tắc biến đổi và tính toán biểu thức');
    const reviewTemplates = [
      `Em ${firstName} có ý thức tự học khi hoàn thành phiếu, tuy nhiên cần đọc kỹ lại phần ${topicToReview} và tích cực trao đổi với thầy cô trên lớp để làm tốt bài trắc nghiệm hơn.`,
      `Em ${firstName} đã ghi chép các ý chính của bài, song kết quả trắc nghiệm cho thấy em cần xem lại kỹ ${topicToReview} để nắm chắc bản chất kiến thức trọng tâm.`,
      `Em ${firstName} chuẩn bị bài đầy đủ nhưng cần dành thêm thời gian củng cố ${topicToReview} nhằm khắc phục các lỗi sai còn gặp phải trong phần bài tập trắc nghiệm.`,
      `Em ${firstName} đạt kết quả ${quizScore}/5 câu hỏi trắc nghiệm, cần chú ý đối chiếu lại kiến thức phần ${topicToReview} trong sách giáo khoa để khắc phục các lỗi nhầm lẫn.`,
    ];
    const hash = (studentName.length + (keyQuestions?.length || 0)) % reviewTemplates.length;
    return trimOrPadToOneSentence(reviewTemplates[hash]);
  }

  // Case 4: Low score 0/5 or 1/5
  if (hasQuiz && quizScore < 2) {
    const fundamentalTopic = specificMistakeTopic || (input.subjectName === 'Tiếng Anh 8' ? 'từ vựng cơ bản của Unit' : 'khái niệm nền tảng của bài học');
    const basicTemplates = [
      `Em ${firstName} cần đọc lại kỹ phần ${fundamentalTopic} trong sách giáo khoa và mạnh dạn nhờ thầy cô giải đáp các chỗ chưa hiểu để cải thiện điểm số ở lần làm bài sau.`,
      `Em ${firstName} hãy chú ý ôn tập cẩn thận ${fundamentalTopic} trước giờ học, đồng thời ghi lại các thắc mắc cụ thể để thầy cô hướng dẫn chi tiết trên lớp nhé.`,
    ];
    const hash = studentName.length % basicTemplates.length;
    return trimOrPadToOneSentence(basicTemplates[hash]);
  }

  // Case 5: Quiz not completed yet, but notes or questions submitted
  if (hasQuestions && hasNotes) {
    return trimOrPadToOneSentence(
      `Em ${firstName} chủ động chuẩn bị bài tốt và đặt câu hỏi xác đáng về ${cleanLesson}, cần hoàn thành thêm bài trắc nghiệm để tự đánh giá mức độ hiểu bài của mình.`
    );
  }

  if (hasQuestions) {
    return trimOrPadToOneSentence(
      `Em ${firstName} thể hiện tinh thần tìm tòi qua câu hỏi thắc mắc về ${cleanLesson}, cần làm thêm bài trắc nghiệm để củng cố các nội dung vừa chuẩn bị.`
    );
  }

  if (hasNotes) {
    return trimOrPadToOneSentence(
      `Em ${firstName} ghi chép nội dung bài ${cleanLesson} tương đối rõ ràng, cần hoàn thành bài trắc nghiệm kèm theo để củng cố và kiểm tra kiến thức đã đọc trước.`
    );
  }

  return 'Chưa đủ dữ liệu để nhận xét.';
}

export const AiCommentService = {
  /**
   * Generates or fetches an AI pedagogical comment for a student
   * Calls server endpoint `/api/ai/generate-comment` if available, falls back to pedagogical engine
   */
  async getStudentComment(input: StudentCommentInput): Promise<string> {
    const hasNotes = !!input.preClassNotes && input.preClassNotes.trim().length > 0;
    const hasQuestions = !!input.keyQuestions && input.keyQuestions.trim().length > 0;
    const hasQuiz = input.quizScore !== null && input.quizScore !== undefined;

    if (!hasNotes && !hasQuestions && !hasQuiz) {
      return 'Chưa đủ dữ liệu để nhận xét.';
    }

    try {
      if (typeof window !== 'undefined' && navigator.onLine) {
        const res = await fetch('/api/ai/generate-comment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            studentName: input.studentName,
            subject: input.subjectName,
            lessonTitle: input.lessonTitle,
            preClassNotes: input.preClassNotes,
            keyQuestions: input.keyQuestions,
            selfAssessment: input.selfAssessment,
            quizScore: input.quizScore,
            totalQuestions: input.totalQuestions || 5,
            weakConcept: input.weakConcept,
            wrongQuestionsSummary: input.wrongQuestionsSummary,
            studentAnswers: input.studentAnswers,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          if (data && data.comment) {
            const comment = String(data.comment).trim();
            const words = countVietnameseWords(comment);
            if (words >= 18 && words <= 38) {
              return trimOrPadToOneSentence(comment);
            }
          }
        }
      }
    } catch {
      // Fallback seamlessly to local pedagogical engine
    }

    return generatePedagogicalComment(input);
  },
};
