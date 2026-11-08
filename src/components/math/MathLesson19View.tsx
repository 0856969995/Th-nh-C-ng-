import React from 'react';

export const MathLesson19View: React.FC = () => {
  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-200">
      
      {/* =========================================================================
          a) LỰA CHỌN BIỂU ĐỒ TRANH HAY BIỂU ĐỒ CỘT
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          a) Lựa chọn biểu đồ tranh hay biểu đồ cột
        </h2>

        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span><strong>Biểu đồ tranh:</strong> dùng hình ảnh hoặc biểu tượng để biểu diễn dữ liệu.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span><strong>Biểu đồ cột:</strong> dùng các cột để biểu diễn dữ liệu.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Khi số lượng lớn, phải dùng quá nhiều biểu tượng thì nên chọn <strong>biểu đồ cột</strong>.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* =========================================================================
          b) LỰA CHỌN BIỂU ĐỒ CỘT HAY BIỂU ĐỒ ĐOẠN THẲNG
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          b) Lựa chọn biểu đồ cột hay biểu đồ đoạn thẳng
        </h2>

        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span><strong>Biểu đồ cột:</strong> thích hợp để biểu diễn, so sánh số liệu giữa các đối tượng.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span><strong>Biểu đồ đoạn thẳng:</strong> thích hợp để biểu diễn sự thay đổi của một đại lượng theo thời gian.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Khi số thời điểm quan sát ít, cũng có thể biểu diễn bằng biểu đồ cột.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* =========================================================================
          c) LỰA CHỌN BIỂU ĐỒ CỘT KÉP HAY BIỂU ĐỒ HÌNH QUẠT TRÒN
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          c) Lựa chọn biểu đồ cột kép hay biểu đồ hình quạt tròn
        </h2>

        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span><strong>Biểu đồ cột kép:</strong> dùng để so sánh hai nhóm số liệu tương ứng.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span><strong>Biểu đồ hình quạt tròn:</strong> dùng để biểu diễn tỉ lệ các phần trong tổng thể.</span>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
};
