import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from './firebase';
import { getOfflineDB, LocalPreparationSheet } from './db';
import { queueMutation, sanitizePayload } from './syncEngine';
import { normalizeClassName } from './schoolService';

export const PreparationSheetService = {
  async getSheetsForUser(userId: string): Promise<LocalPreparationSheet[]> {
    const idb = await getOfflineDB();
    const local = await idb.getAllFromIndex('preparation_sheets', 'by-user', userId);
    return local;
  },

  async getSheetById(id: string): Promise<LocalPreparationSheet | undefined> {
    const idb = await getOfflineDB();
    return idb.get('preparation_sheets', id);
  },

  async getSheetForLesson(userId: string, lessonId: string): Promise<LocalPreparationSheet | undefined> {
    const idb = await getOfflineDB();
    const sheets = await idb.getAllFromIndex('preparation_sheets', 'by-lesson', lessonId);
    return sheets.find((s) => s.userId === userId);
  },

  async saveSheet(sheetData: Omit<LocalPreparationSheet, 'createdAt' | 'updatedAt' | 'syncedToCloud'>): Promise<LocalPreparationSheet> {
    const idb = await getOfflineDB();
    const existing = await idb.get('preparation_sheets', sheetData.id);

    const now = new Date().toISOString();

    const sheet: LocalPreparationSheet = {
      ...sheetData,
      score: sheetData.score !== undefined ? sheetData.score : existing?.score,
      teacherComment: sheetData.teacherComment !== undefined ? sheetData.teacherComment : existing?.teacherComment,
      submittedAt: sheetData.submittedAt || existing?.submittedAt || (sheetData.status === 'submitted' ? now : undefined),
      createdAt: existing?.createdAt || now,
      updatedAt: now,
      syncedToCloud: false,
    };

    await idb.put('preparation_sheets', sheet);

    // Queue for sync to Firestore with clean sanitized payload (no undefined values)
    const rawPayload: Record<string, any> = {
      id: sheet.id,
      userId: sheet.userId,
      studentName: sheet.studentName,
      schoolId: 'school_main',
      classId: sheet.classId || 'class_8a',
      subjectId: sheet.subjectId,
      lessonId: sheet.lessonId,
      lessonTitle: sheet.lessonTitle,
      preClassNotes: sheet.preClassNotes,
      keyQuestions: sheet.keyQuestions,
      selfAssessment: sheet.selfAssessment,
      status: sheet.status,
      offlineCreated: sheet.offlineCreated,
      createdAt: sheet.createdAt,
      updatedAt: sheet.updatedAt,
    };

    if (sheet.score !== undefined && sheet.score !== null) {
      rawPayload.score = sheet.score;
    }
    if (sheet.teacherComment) {
      rawPayload.teacherComment = sheet.teacherComment;
    }
    if (sheet.submittedAt) {
      rawPayload.submittedAt = sheet.submittedAt;
    }

    await queueMutation({
      idempotencyKey: `sheet_${sheet.id}_${Date.now()}`,
      collection: 'preparation_sheets',
      docId: sheet.id,
      action: existing ? 'update' : 'create',
      payload: sanitizePayload(rawPayload),
    });

    return sheet;
  },

  async getAllSheetsForClass(classId: string): Promise<LocalPreparationSheet[]> {
    const idb = await getOfflineDB();
    const all = await idb.getAll('preparation_sheets');
    const normTarget = normalizeClassName(classId);
    return all.filter((s) => normalizeClassName(s.classId) === normTarget);
  },

  /**
   * Fetch recent sheets from Firestore cloud for school_main or specified student/class
   * Automatically populates local IndexedDB for multi-device sync
   */
  async fetchSheetsFromCloud(classId?: string, userId?: string): Promise<LocalPreparationSheet[]> {
    if (!auth.currentUser || (typeof navigator !== 'undefined' && !navigator.onLine)) {
      return classId ? this.getAllSheetsForClass(classId) : [];
    }

    try {
      let q;
      if (userId) {
        q = query(collection(db, 'preparation_sheets'), where('userId', '==', userId));
      } else {
        q = query(collection(db, 'preparation_sheets'), where('schoolId', '==', 'school_main'));
      }

      const snap = await getDocs(q);
      const idb = await getOfflineDB();
      const results: LocalPreparationSheet[] = [];

      for (const d of snap.docs) {
        const data = d.data() as LocalPreparationSheet;
        const sheet: LocalPreparationSheet = {
          ...data,
          id: d.id,
          syncedToCloud: true,
        };
        await idb.put('preparation_sheets', sheet);
        results.push(sheet);
      }

      if (classId) {
        const normTarget = normalizeClassName(classId);
        return results.filter((s) => normalizeClassName(s.classId) === normTarget);
      }
      return results;
    } catch (err) {
      console.warn('[PreparationSheetService] Could not fetch sheets from Firestore:', err);
      return classId ? this.getAllSheetsForClass(classId) : [];
    }
  },
};
