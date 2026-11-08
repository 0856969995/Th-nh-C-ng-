import React, { useEffect, useState } from 'react';
import { subscribeToSync, flushSyncQueue } from '../../services/syncEngine';
import { WifiOff, RefreshCw, CheckCircle2 } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const [syncState, setSyncState] = useState({
    isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
    pendingCount: 0,
    isSyncing: false,
  });
  const [showSyncedToast, setShowSyncedToast] = useState(false);

  useEffect(() => {
    return subscribeToSync((state) => {
      setSyncState((prev) => {
        if (!prev.isOnline && state.isOnline && state.pendingCount === 0) {
          setShowSyncedToast(true);
          setTimeout(() => setShowSyncedToast(false), 3000);
        }
        return state;
      });
    });
  }, []);

  if (!syncState.isOnline) {
    return (
      <div className="fixed bottom-20 left-4 right-4 z-40 max-w-md mx-auto flex items-center justify-between gap-2 rounded-xl bg-amber-600/95 backdrop-blur-md px-3.5 py-2 text-xs font-medium text-white shadow-lg animate-in slide-in-from-bottom-2">
        <div className="flex items-center gap-2">
          <WifiOff className="w-4 h-4 shrink-0 text-amber-200" />
          <span>
            Ngoại tuyến — Vẫn học tập & làm bài bình thường.
            {syncState.pendingCount > 0 && ` (${syncState.pendingCount} thay đổi chờ gửi)`}
          </span>
        </div>
      </div>
    );
  }

  if (syncState.isSyncing) {
    return (
      <div className="fixed bottom-20 right-4 z-40 flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md animate-pulse">
        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
        <span>Đang đồng bộ ({syncState.pendingCount})...</span>
      </div>
    );
  }

  if (showSyncedToast) {
    return (
      <div className="fixed bottom-20 right-4 z-40 flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md animate-in fade-in">
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span>Đã đồng bộ trực tuyến</span>
      </div>
    );
  }

  return null;
};
