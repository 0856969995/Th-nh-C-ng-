import { openDB, DBSchema, IDBPDatabase } from 'idb';

export interface SyncQueueItem {
  id: string; // unique mutation ID
  idempotencyKey: string;
  collection: string;
  docId: string;
  action: 'create' | 'update' | 'delete';
  payload: any;
  timestamp: number;
  retryCount: number;
}

export interface LocalPreparationSheet {
  id: string;
  userId: string;
  studentName: string;
  schoolId: string;
  classId: string;
  subjectId: string;
  lessonId: string;
  lessonTitle: string;
  preClassNotes: string;
  keyQuestions: string;
  selfAssessment: string;
  status: 'draft' | 'submitted' | 'reviewed';
  score?: number;
  teacherComment?: string;
  offlineCreated: boolean;
  submittedAt?: string;
  createdAt: string;
  updatedAt: string;
  syncedToCloud: boolean;
}

export interface LocalQuizSubmission {
  id: string;
  idempotencyKey: string;
  userId: string;
  studentName: string;
  schoolId: string;
  classId: string;
  subjectId: string;
  lessonId: string;
  score: number;
  totalQuestions: number;
  firstTryCorrectCount: number;
  starsAwarded: number;
  waterAwarded: number;
  offlineCompleted: boolean;
  wrongQuestionIds?: string[];
  completedAt: string;
  syncedToCloud: boolean;
}

interface HocVuiDB extends DBSchema {
  sync_queue: {
    key: string;
    value: SyncQueueItem;
    indexes: { 'by-timestamp': number };
  };
  preparation_sheets: {
    key: string;
    value: LocalPreparationSheet;
    indexes: { 'by-user': string; 'by-lesson': string };
  };
  quiz_submissions: {
    key: string;
    value: LocalQuizSubmission;
    indexes: { 'by-user': string; 'by-idempotency': string };
  };
  rewarded_actions: {
    key: string; // e.g. "reward_read_toan_ch1_b1_user123"
    value: { key: string; userId: string; action: string; timestamp: number };
  };
  cache_store: {
    key: string;
    value: any;
  };
}

const DB_NAME = 'hoc_vui_offline_db';
const DB_VERSION = 1;

let dbPromise: Promise<IDBPDatabase<HocVuiDB>> | null = null;

export function getOfflineDB(): Promise<IDBPDatabase<HocVuiDB>> {
  if (!dbPromise) {
    dbPromise = openDB<HocVuiDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('sync_queue')) {
          const syncStore = db.createObjectStore('sync_queue', { keyPath: 'id' });
          syncStore.createIndex('by-timestamp', 'timestamp');
        }
        if (!db.objectStoreNames.contains('preparation_sheets')) {
          const sheetStore = db.createObjectStore('preparation_sheets', { keyPath: 'id' });
          sheetStore.createIndex('by-user', 'userId');
          sheetStore.createIndex('by-lesson', 'lessonId');
        }
        if (!db.objectStoreNames.contains('quiz_submissions')) {
          const quizStore = db.createObjectStore('quiz_submissions', { keyPath: 'id' });
          quizStore.createIndex('by-user', 'userId');
          quizStore.createIndex('by-idempotency', 'idempotencyKey');
        }
        if (!db.objectStoreNames.contains('rewarded_actions')) {
          db.createObjectStore('rewarded_actions', { keyPath: 'key' });
        }
        if (!db.objectStoreNames.contains('cache_store')) {
          db.createObjectStore('cache_store');
        }
      },
    });
  }
  return dbPromise;
}
