import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from './firebase';
import { getOfflineDB, LocalQuizSubmission } from './db';
import { queueMutation, sanitizePayload } from './syncEngine';
import { normalizeClassName } from './schoolService';
import { StorageService } from './storage';

export interface QuizSubmissionRecord {
  id: string;
  userId: string;
  studentName: string;
  schoolId: string;
  classId: string;
  subjectId: string;
  lessonId: string;
  score: number;
  totalQuestions: number;
  firstTryCorrectCount?: number;
  wrongQuestionIds?: string[];
  completedAt: string;
  syncedToCloud?: boolean;
}

export const QuizService = {
  /**
   * Save a quiz submission locally in IndexedDB and queue it for Firestore sync
   */
  async saveSubmission(record: Omit<QuizSubmissionRecord, 'id' | 'completedAt' | 'syncedToCloud'>): Promise<QuizSubmissionRecord> {
    const idb = await getOfflineDB();
    const id = `quiz_${record.userId}_${record.lessonId}`;
    const now = new Date().toISOString();

    const submission: LocalQuizSubmission = {
      id,
      idempotencyKey: id,
      userId: record.userId,
      studentName: record.studentName,
      schoolId: record.schoolId || 'school_main',
      classId: normalizeClassName(record.classId),
      subjectId: record.subjectId,
      lessonId: record.lessonId,
      score: record.score,
      totalQuestions: record.totalQuestions || 5,
      firstTryCorrectCount: record.firstTryCorrectCount !== undefined ? record.firstTryCorrectCount : record.score,
      starsAwarded: record.score * 2,
      waterAwarded: record.score * 3,
      offlineCompleted: typeof navigator !== 'undefined' ? !navigator.onLine : false,
      completedAt: now,
      syncedToCloud: false,
    };

    try {
      await idb.put('quiz_submissions', submission);
    } catch (e) {
      console.warn('[QuizService] Failed to cache submission in idb:', e);
    }

    // Queue for Firestore sync
    await queueMutation({
      idempotencyKey: `quiz_${id}_${Date.now()}`,
      collection: 'quiz_submissions',
      docId: id,
      action: 'create',
      payload: sanitizePayload({
        id,
        userId: submission.userId,
        studentName: submission.studentName,
        schoolId: 'school_main',
        classId: submission.classId,
        subjectId: submission.subjectId,
        lessonId: submission.lessonId,
        score: submission.score,
        totalQuestions: submission.totalQuestions,
        firstTryCorrectCount: submission.firstTryCorrectCount,
        completedAt: submission.completedAt,
      }),
    });

    return submission;
  },

  /**
   * Fetch submissions from Firestore cloud for school_main or specified class
   */
  async fetchSubmissionsFromCloud(classId?: string): Promise<LocalQuizSubmission[]> {
    if (!auth.currentUser || (typeof navigator !== 'undefined' && !navigator.onLine)) {
      return this.getAllSubmissionsForClass(classId);
    }

    try {
      const q = query(collection(db, 'quiz_submissions'), where('schoolId', '==', 'school_main'));
      const snap = await getDocs(q);
      const idb = await getOfflineDB();
      const results: LocalQuizSubmission[] = [];

      for (const d of snap.docs) {
        const data = d.data() as LocalQuizSubmission;
        const sub: LocalQuizSubmission = {
          ...data,
          id: d.id,
          syncedToCloud: true,
        };
        try {
          await idb.put('quiz_submissions', sub);
        } catch {}
        results.push(sub);
      }

      if (classId) {
        const norm = normalizeClassName(classId);
        return results.filter((s) => normalizeClassName(s.classId) === norm);
      }
      return results;
    } catch (err) {
      console.warn('[QuizService] Could not fetch quiz submissions from Firestore:', err);
      return this.getAllSubmissionsForClass(classId);
    }
  },

  /**
   * Get all submissions from IndexedDB for a given class (or all classes if omitted)
   */
  async getAllSubmissionsForClass(classId?: string, subjectId?: string): Promise<LocalQuizSubmission[]> {
    try {
      const idb = await getOfflineDB();
      const all = await idb.getAll('quiz_submissions');
      if (!classId) {
        return subjectId ? all.filter((s) => s.subjectId === subjectId) : all;
      }
      const norm = normalizeClassName(classId);
      return all.filter((s) => {
        const matchesClass = normalizeClassName(s.classId) === norm;
        const matchesSubject = !subjectId || s.subjectId === subjectId;
        return matchesClass && matchesSubject;
      });
    } catch {
      return [];
    }
  },

  /**
   * Get submission for a specific student and lesson
   */
  async getSubmissionForStudent(userId: string, lessonId: string): Promise<LocalQuizSubmission | null> {
    try {
      const idb = await getOfflineDB();
      const id = `quiz_${userId}_${lessonId}`;
      const sub = await idb.get('quiz_submissions', id);
      if (sub) return sub;

      // Fallback: Check local storage quiz progress
      const localQuiz = StorageService.getQuizProgress(lessonId);
      if (localQuiz && localQuiz.isFinished) {
        return {
          id,
          idempotencyKey: id,
          userId,
          studentName: '',
          schoolId: 'school_main',
          classId: '',
          subjectId: localQuiz.subjectId,
          lessonId,
          score: localQuiz.correctAnswersCount,
          totalQuestions: localQuiz.totalQuestions || 5,
          firstTryCorrectCount: localQuiz.correctAnswersCount,
          starsAwarded: localQuiz.correctAnswersCount * 2,
          waterAwarded: localQuiz.correctAnswersCount * 3,
          offlineCompleted: false,
          completedAt: localQuiz.lastVisitedAt || new Date().toISOString(),
          syncedToCloud: false,
        };
      }
      return null;
    } catch {
      return null;
    }
  },
};
