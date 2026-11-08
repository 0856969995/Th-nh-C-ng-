import React, { useState } from 'react';
import { usePWAInstall } from './usePWAInstall';
import { Download, Smartphone } from 'lucide-react';

export const PWAInstallButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) {
    return null;
  }

  if (isInstallable) {
    return (
      <button
        onClick={install}
        className={`flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 active:scale-95 transition ${className}`}
        title="Cài đặt ứng dụng vào thiết bị"
      >
        <Download className="w-3.5 h-3.5" />
        <span>Cài đặt App</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className={`flex items-center gap-1.5 rounded-full border border-emerald-300 bg-white/80 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm hover:bg-emerald-50 active:scale-95 transition ${className}`}
          title="Hướng dẫn cài đặt trên iPhone / iPad"
        >
          <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
          <span>Cài trên iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl animate-in fade-in zoom-in-95">
              <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-emerald-600" />
                Cài đặt trên iPhone / iPad
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 space-y-2">
                1. Nhấn vào nút <strong>Chia sẻ (Share)</strong> trên thanh công cụ Safari.<br />
                2. Cuộn xuống và chọn <strong>Thêm vào MH chính (Add to Home Screen)</strong>.<br />
                3. Nhấn <strong>Thêm</strong> để dùng ứng dụng mượt mà không cần mở trình duyệt.
              </p>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-4 w-full rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition"
              >
                Đã hiểu
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
