import { doc, setDoc, deleteDoc, onSnapshot, collection, query, where, Unsubscribe } from 'firebase/firestore';
import { db, auth, handleFirestoreError, OperationType } from './firebase';
import { getOfflineDB, SyncQueueItem, LocalPreparationSheet, LocalQuizSubmission } from './db';
import { UserAccount, StudentProfile } from '../types';
import { notifyListeners } from './storage';

export function sanitizePayload<T>(obj: T): T {
  if (obj === null || obj === undefined) return null as any;
  if (Array.isArray(obj)) return obj.map(sanitizePayload) as any;
  if (typeof obj === 'object') {
    const clean: Record<string, any> = {};
    for (const [k, v] of Object.entries(obj)) {
      if (v !== undefined) {
        clean[k] = sanitizePayload(v);
      }
    }
    return clean as any;
  }
  return obj;
}

type SyncListener = (status: { isOnline: boolean; pendingCount: number; isSyncing: boolean }) => void;
const syncListeners: Set<SyncListener> = new Set();
const activeUnsubscribers: Set<Unsubscribe> = new Set();

let isSyncing = false;

// Clean up any stale items that exceeded max retries on initialization
if (typeof window !== 'undefined') {
  (async () => {
    try {
      const idb = await getOfflineDB();
      const queue = await idb.getAll('sync_queue');
      for (const item of queue) {
        if (item.retryCount >= 5) {
          await idb.delete('sync_queue', item.id);
        }
      }
      notifySyncState();
    } catch {}
  })();
}

export function subscribeToSync(listener: SyncListener): () => void {
  syncListeners.add(listener);
  notifySyncState();
  return () => {
    syncListeners.delete(listener);
  };
}

async function notifySyncState() {
  const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
  let pendingCount = 0;
  try {
    const idb = await getOfflineDB();
    pendingCount = await idb.count('sync_queue');
  } catch {}
  syncListeners.forEach((fn) => fn({ isOnline, pendingCount, isSyncing }));
}

// Real-Time two-way sync subscriptions based on user role
export function initRealtimeSyncForUser(user: UserAccount): void {
  stopRealtimeSync();

  if (!auth.currentUser) return;

  try {
    // 1. STUDENT REAL-TIME LISTENERS
    if (user.role === 'student') {
      // Listen to student's user profile document (rewards, stars, completed lessons, class updates)
      const unsubUser = onSnapshot(doc(db, 'users', user.id), (snap) => {
        if (snap.exists()) {
          const data = snap.data();
          const profileKey = `hoc_vui_v3_${user.id}_profile`;
          try {
            const rawProf = localStorage.getItem(profileKey);
            const prof: StudentProfile = rawProf ? JSON.parse(rawProf) : {
              username: user.displayName,
              name: user.displayName,
              nickname: 'Học sinh lớp 8',
              grade: 8,
              school: 'HỌC VUI MỖI NGÀY',
              totalStars: 40,
              waterDrops: 30,
              seedsCount: 3,
              completedLessonIds: [],
              bookmarkedLessonIds: [],
              lastActiveDate: new Date().toISOString().split('T')[0],
              totalTasksCompleted: 0,
              totalQuestionsAnswered: 0,
              correctQuestionsAnswered: 0,
            };

            let changed = false;
            if (data.totalStars !== undefined && data.totalStars !== prof.totalStars) {
              prof.totalStars = data.totalStars;
              changed = true;
            }
            if (data.waterDrops !== undefined && data.waterDrops !== prof.waterDrops) {
              prof.waterDrops = data.waterDrops;
              changed = true;
            }
            if (data.seedsCount !== undefined && data.seedsCount !== prof.seedsCount) {
              prof.seedsCount = data.seedsCount;
              changed = true;
            }
            if (data.className && data.className !== prof.className) {
              prof.className = data.className;
              changed = true;
            }
            if (data.classId && data.classId !== prof.classId) {
              prof.classId = data.classId;
              changed = true;
            }
            if (data.displayName && data.displayName !== prof.name) {
              prof.name = data.displayName;
              changed = true;
            }
            if (Array.isArray(data.completedLessonIds)) {
              for (const lid of data.completedLessonIds) {
                if (!prof.completedLessonIds.includes(lid)) {
                  prof.completedLessonIds.push(lid);
                  changed = true;
                }
              }
            }

            // CRITICAL: Also synchronize changes to accounts in hoc_vui_accounts_v3
            // so StorageService.getCurrentUser() immediately returns updated class
            try {
              const rawAccounts = localStorage.getItem('hoc_vui_accounts_v3');
              if (rawAccounts) {
                const accounts: UserAccount[] = JSON.parse(rawAccounts);
                const accIdx = accounts.findIndex((a) => a.id === user.id || a.id === snap.id);
                if (accIdx !== -1) {
                  let accChanged = false;
                  if (data.className && accounts[accIdx].className !== data.className) {
                    accounts[accIdx].className = data.className;
                    accChanged = true;
                  }
                  if (data.classId && accounts[accIdx].classId !== data.classId) {
                    accounts[accIdx].classId = data.classId;
                    accChanged = true;
                  }
                  if (data.displayName && accounts[accIdx].displayName !== data.displayName) {
                    accounts[accIdx].displayName = data.displayName;
                    accChanged = true;
                  }
                  if (accChanged) {
                    localStorage.setItem('hoc_vui_accounts_v3', JSON.stringify(accounts));
                    changed = true;
                  }
                }
              }
            } catch {}

            if (changed) {
              localStorage.setItem(profileKey, JSON.stringify(prof));
              notifyListeners();
            }
          } catch {}
        }
      }, (err) => {
        console.warn('[SyncEngine] Realtime student profile listener error:', err);
      });
      activeUnsubscribers.add(unsubUser);

      // Listen to classes for student
      const qStudentClasses = query(collection(db, 'classes'), where('schoolId', '==', 'school_main'));
      const unsubStudentClasses = onSnapshot(qStudentClasses, (snap) => {
        try {
          const rawClasses = localStorage.getItem('hoc_vui_classes_list_v1');
          const classes = rawClasses ? JSON.parse(rawClasses) : [];
          let changed = false;
          for (const change of snap.docChanges()) {
            const c = change.doc.data();
            const idx = classes.findIndex((item: any) => item.id === change.doc.id);
            if (change.type === 'removed') {
              if (idx !== -1) {
                classes.splice(idx, 1);
                changed = true;
              }
            } else {
              if (idx !== -1) {
                classes[idx] = { ...classes[idx], ...c, id: change.doc.id };
                changed = true;
              } else {
                classes.push({ ...c, id: change.doc.id });
                changed = true;
              }
            }
          }
          if (changed) {
            localStorage.setItem('hoc_vui_classes_list_v1', JSON.stringify(classes));
            notifyListeners();
          }
        } catch {}
      });
      activeUnsubscribers.add(unsubStudentClasses);

      // Listen to student's preparation sheets (e.g. feedback/scores given by teachers)
      const qSheets = query(collection(db, 'preparation_sheets'), where('userId', '==', user.id));
      const unsubSheets = onSnapshot(qSheets, async (snap) => {
        try {
          const idb = await getOfflineDB();
          let hasChange = false;
          for (const change of snap.docChanges()) {
            const sheet = change.doc.data() as LocalPreparationSheet;
            sheet.id = change.doc.id;
            sheet.syncedToCloud = true;
            await idb.put('preparation_sheets', sheet);
            hasChange = true;
          }
          if (hasChange) {
            notifyListeners();
          }
        } catch (e) {
          console.warn('[SyncEngine] Error caching realtime sheet for student:', e);
        }
      }, (err) => {
        console.warn('[SyncEngine] Realtime student sheets listener error:', err);
      });
      activeUnsubscribers.add(unsubSheets);
    }

    // 2. TEACHER REAL-TIME LISTENERS
    if (user.role === 'teacher') {
      // Listen to teacher's own document (name change, assignedClassIds change by admin)
      const unsubTeacherDoc = onSnapshot(doc(db, 'users', user.id), (snap) => {
        if (snap.exists()) {
          const data = snap.data();
          const rawAccounts = localStorage.getItem('hoc_vui_accounts_v3');
          const accounts: UserAccount[] = rawAccounts ? JSON.parse(rawAccounts) : [];
          const idx = accounts.findIndex((a) => a.id === user.id);
          if (idx !== -1) {
            let changed = false;
            if (data.displayName && data.displayName !== accounts[idx].displayName) {
              accounts[idx].displayName = data.displayName;
              user.displayName = data.displayName;
              changed = true;
            }
            if (Array.isArray(data.assignedClassIds)) {
              accounts[idx].assignedClassIds = data.assignedClassIds;
              user.assignedClassIds = data.assignedClassIds;
              changed = true;
            }
            if (Array.isArray(data.subjects)) {
              accounts[idx].subjects = data.subjects;
              user.subjects = data.subjects;
              changed = true;
            }
            if (changed) {
              localStorage.setItem('hoc_vui_accounts_v3', JSON.stringify(accounts));
              notifyListeners();
            }
          }
        }
      }, (err) => {
        console.warn('[SyncEngine] Realtime teacher profile listener error:', err);
      });
      activeUnsubscribers.add(unsubTeacherDoc);

      // Listen to classes for teacher (to see newly created classes like 8D immediately)
      const qTeacherClasses = query(collection(db, 'classes'), where('schoolId', '==', 'school_main'));
      const unsubTeacherClasses = onSnapshot(qTeacherClasses, (snap) => {
        try {
          const rawClasses = localStorage.getItem('hoc_vui_classes_list_v1');
          const classes = rawClasses ? JSON.parse(rawClasses) : [];
          let changed = false;

          for (const change of snap.docChanges()) {
            const c = change.doc.data();
            const idx = classes.findIndex((item: any) => item.id === change.doc.id);
            if (change.type === 'removed') {
              if (idx !== -1) {
                classes.splice(idx, 1);
                changed = true;
              }
            } else {
              if (idx !== -1) {
                classes[idx] = { ...classes[idx], ...c, id: change.doc.id };
                changed = true;
              } else {
                classes.push({ ...c, id: change.doc.id });
                changed = true;
              }
            }
          }
          if (changed) {
            localStorage.setItem('hoc_vui_classes_list_v1', JSON.stringify(classes));
            notifyListeners();
          }
        } catch {}
      }, (err) => {
        console.warn('[SyncEngine] Realtime teacher classes listener error:', err);
      });
      activeUnsubscribers.add(unsubTeacherClasses);

      // Listen to preparation sheets submitted by students for school_main
      const qSheets = query(collection(db, 'preparation_sheets'), where('schoolId', '==', 'school_main'));
      const unsubSheets = onSnapshot(qSheets, async (snap) => {
        try {
          const idb = await getOfflineDB();
          let hasChange = false;
          for (const change of snap.docChanges()) {
            const sheet = change.doc.data() as LocalPreparationSheet;
            sheet.id = change.doc.id;
            sheet.syncedToCloud = true;
            await idb.put('preparation_sheets', sheet);
            hasChange = true;
          }
          if (hasChange) {
            notifyListeners();
          }
        } catch (e) {
          console.warn('[SyncEngine] Error saving realtime sheets for teacher:', e);
        }
      }, (err) => {
        console.warn('[SyncEngine] Realtime teacher sheets listener error:', err);
      });
      activeUnsubscribers.add(unsubSheets);

      // Listen to users roster for school_main
      const qUsers = query(collection(db, 'users'), where('schoolId', '==', 'school_main'));
      const unsubUsers = onSnapshot(qUsers, (snap) => {
        try {
          const rawAccounts = localStorage.getItem('hoc_vui_accounts_v3');
          const accounts: UserAccount[] = rawAccounts ? JSON.parse(rawAccounts) : [];
          let updated = false;

          for (const d of snap.docs) {
            const u = d.data() as UserAccount;
            const idx = accounts.findIndex(
              (a) =>
                a.id === d.id ||
                a.username === u.username ||
                (a.role === 'student' && a.displayName?.trim().toLowerCase() === u.displayName?.trim().toLowerCase())
            );
            if (idx !== -1) {
              accounts[idx] = { ...accounts[idx], ...u, id: d.id };
              updated = true;
            } else {
              accounts.push({ ...u, id: d.id });
              updated = true;
            }
          }
          if (updated) {
            localStorage.setItem('hoc_vui_accounts_v3', JSON.stringify(accounts));
            notifyListeners();
          }
        } catch {}
      }, (err) => {
        console.warn('[SyncEngine] Realtime teacher user roster error:', err);
      });
      activeUnsubscribers.add(unsubUsers);

      // Listen to quiz submissions for school_main
      const qQuizTeacher = query(collection(db, 'quiz_submissions'), where('schoolId', '==', 'school_main'));
      const unsubQuizTeacher = onSnapshot(qQuizTeacher, async (snap) => {
        try {
          const idb = await getOfflineDB();
          let hasChange = false;
          for (const change of snap.docChanges()) {
            const quiz = change.doc.data() as LocalQuizSubmission;
            quiz.id = change.doc.id;
            quiz.syncedToCloud = true;
            await idb.put('quiz_submissions', quiz);
            hasChange = true;
          }
          if (hasChange) {
            notifyListeners();
          }
        } catch (e) {
          console.warn('[SyncEngine] Error saving realtime quiz submissions for teacher:', e);
        }
      }, (err) => {
        console.warn('[SyncEngine] Realtime teacher quiz submissions listener error:', err);
      });
      activeUnsubscribers.add(unsubQuizTeacher);
    }

    // 3. ADMIN REAL-TIME LISTENERS
    if (user.role === 'admin') {
      // Listen to all users in school_main
      const qUsers = query(collection(db, 'users'), where('schoolId', '==', 'school_main'));
      const unsubUsers = onSnapshot(qUsers, (snap) => {
        try {
          const rawAccounts = localStorage.getItem('hoc_vui_accounts_v3');
          const accounts: UserAccount[] = rawAccounts ? JSON.parse(rawAccounts) : [];
          let changed = false;

          for (const change of snap.docChanges()) {
            if (change.type === 'removed') {
              const remIdx = accounts.findIndex((a) => a.id === change.doc.id);
              if (remIdx !== -1) {
                accounts.splice(remIdx, 1);
                changed = true;
              }
            } else {
              const u = change.doc.data() as UserAccount;
              const idx = accounts.findIndex(
                (a) =>
                  a.id === change.doc.id ||
                  a.username === u.username ||
                  (a.role === 'student' && a.displayName?.trim().toLowerCase() === u.displayName?.trim().toLowerCase())
              );
              if (idx !== -1) {
                accounts[idx] = { ...accounts[idx], ...u, id: change.doc.id };
                changed = true;
              } else {
                accounts.push({ ...u, id: change.doc.id });
                changed = true;
              }
            }
          }
          if (changed) {
            localStorage.setItem('hoc_vui_accounts_v3', JSON.stringify(accounts));
            notifyListeners();
          }
        } catch {}
      }, (err) => {
        console.warn('[SyncEngine] Realtime admin users listener error:', err);
      });
      activeUnsubscribers.add(unsubUsers);

      // Listen to classes in school_main
      const qClasses = query(collection(db, 'classes'), where('schoolId', '==', 'school_main'));
      const unsubClasses = onSnapshot(qClasses, (snap) => {
        try {
          const rawClasses = localStorage.getItem('hoc_vui_classes_list_v1');
          const classes = rawClasses ? JSON.parse(rawClasses) : [];
          let changed = false;

          for (const change of snap.docChanges()) {
            const c = change.doc.data();
            const idx = classes.findIndex((item: any) => item.id === change.doc.id);
            if (change.type === 'removed') {
              if (idx !== -1) {
                classes.splice(idx, 1);
                changed = true;
              }
            } else {
              if (idx !== -1) {
                classes[idx] = { ...classes[idx], ...c, id: change.doc.id };
                changed = true;
              } else {
                classes.push({ ...c, id: change.doc.id });
                changed = true;
              }
            }
          }
          if (changed) {
            localStorage.setItem('hoc_vui_classes_list_v1', JSON.stringify(classes));
            notifyListeners();
          }
        } catch {}
      }, (err) => {
        console.warn('[SyncEngine] Realtime admin classes listener error:', err);
      });
      activeUnsubscribers.add(unsubClasses);

      // Listen to preparation sheets for administrative reports
      const qSheets = query(collection(db, 'preparation_sheets'), where('schoolId', '==', 'school_main'));
      const unsubSheets = onSnapshot(qSheets, async (snap) => {
        try {
          const idb = await getOfflineDB();
          for (const change of snap.docChanges()) {
            const sheet = change.doc.data() as LocalPreparationSheet;
            sheet.id = change.doc.id;
            sheet.syncedToCloud = true;
            await idb.put('preparation_sheets', sheet);
          }
          notifyListeners();
        } catch {}
      }, (err) => {
        console.warn('[SyncEngine] Realtime admin sheets listener error:', err);
      });
      activeUnsubscribers.add(unsubSheets);
    }
  } catch (err) {
    console.error('[SyncEngine] Error initializing realtime sync:', err);
  }
}

export function stopRealtimeSync(): void {
  activeUnsubscribers.forEach((unsub) => {
    try {
      unsub();
    } catch {}
  });
  activeUnsubscribers.clear();
}

// Check idempotency for reward actions
export async function checkAndClaimReward(
  userId: string,
  rewardActionKey: string
): Promise<{ canClaim: boolean; alreadyClaimed: boolean }> {
  try {
    const idb = await getOfflineDB();
    const existing = await idb.get('rewarded_actions', rewardActionKey);
    if (existing) {
      return { canClaim: false, alreadyClaimed: true };
    }
    await idb.put('rewarded_actions', {
      key: rewardActionKey,
      userId,
      action: rewardActionKey,
      timestamp: Date.now(),
    });
    return { canClaim: true, alreadyClaimed: false };
  } catch (e) {
    console.error('Error checking reward idempotency:', e);
    return { canClaim: true, alreadyClaimed: false };
  }
}

// Queue a mutation for sync
export async function queueMutation(item: Omit<SyncQueueItem, 'id' | 'timestamp' | 'retryCount'>): Promise<void> {
  const idb = await getOfflineDB();
  const queueItem: SyncQueueItem = {
    ...item,
    payload: sanitizePayload(item.payload),
    id: `sync_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: Date.now(),
    retryCount: 0,
  };
  await idb.put('sync_queue', queueItem);
  notifySyncState();

  // If online and authenticated, trigger flush immediately
  if (typeof navigator !== 'undefined' && navigator.onLine && auth.currentUser) {
    flushSyncQueue();
  }
}

// Flush all items in sync_queue to Firestore
export async function flushSyncQueue(): Promise<{ processed: number; failed: number }> {
  if (isSyncing) return { processed: 0, failed: 0 };
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return { processed: 0, failed: 0 };
  }

  if (!auth.currentUser) {
    return { processed: 0, failed: 0 };
  }

  isSyncing = true;
  notifySyncState();

  let processed = 0;
  let failed = 0;

  try {
    const idb = await getOfflineDB();
    const queue = await idb.getAllFromIndex('sync_queue', 'by-timestamp');

    for (const item of queue) {
      if (item.retryCount >= 5) {
        await idb.delete('sync_queue', item.id);
        continue;
      }

      try {
        const targetDocRef = doc(db, item.collection, item.docId);
        if (item.action === 'delete') {
          await deleteDoc(targetDocRef);
        } else {
          const clean = sanitizePayload(item.payload);
          await setDoc(targetDocRef, clean, { merge: true });
        }

        // Update local object to marked as synced if applicable
        if (item.collection === 'preparation_sheets') {
          const sheet = await idb.get('preparation_sheets', item.docId);
          if (sheet) {
            sheet.syncedToCloud = true;
            await idb.put('preparation_sheets', sheet);
          }
        } else if (item.collection === 'quiz_submissions') {
          const quiz = await idb.get('quiz_submissions', item.docId);
          if (quiz) {
            quiz.syncedToCloud = true;
            await idb.put('quiz_submissions', quiz);
          }
        }

        // Successfully synced -> remove from queue
        await idb.delete('sync_queue', item.id);
        processed++;
      } catch (err) {
        console.warn(`Sync failed for item ${item.id}:`, err);
        item.retryCount += 1;
        if (item.retryCount >= 5) {
          await idb.delete('sync_queue', item.id);
          console.warn(`[SyncEngine] Item ${item.id} reached retry limit (5). Removed from sync queue.`);
        } else {
          await idb.put('sync_queue', item);
        }
        failed++;
      }
    }
  } catch (err) {
    console.error('Error during flushSyncQueue:', err);
  } finally {
    isSyncing = false;
    notifySyncState();
  }

  return { processed, failed };
}

// Setup network and auth event listeners
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    console.log('[SyncEngine] Network connection restored. Flushing queue...');
    notifySyncState();
    if (auth.currentUser) {
      flushSyncQueue();
    }
  });
  window.addEventListener('offline', () => {
    console.log('[SyncEngine] Network connection lost. Entering offline mode.');
    notifySyncState();
  });
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('[SyncEngine] Firebase Auth session active. Flushing pending sync queue...');
      flushSyncQueue();
    } else {
      stopRealtimeSync();
    }
  });
}
