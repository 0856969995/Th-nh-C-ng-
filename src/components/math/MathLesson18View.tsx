import React from 'react';

export const MathLesson18View: React.FC = () => {
  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-200">
      
      {/* =========================================================================
          a) THU THẬP DỮ LIỆU
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          a) Thu thập dữ liệu
        </h2>

        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2.5">
          <p className="font-medium text-slate-800 dark:text-slate-200">
            Thu thập dữ liệu có thể thực hiện trực tiếp hoặc gián tiếp:
          </p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span><strong>Thu thập trực tiếp:</strong> thu thập thông tin thông qua quan sát, làm thí nghiệm, lập bảng hỏi, phỏng vấn,...</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span><strong>Thu thập gián tiếp:</strong> thu thập thông tin từ những nguồn có sẵn như sách, báo, mạng Internet,...</span>
            </li>
          </ul>

          <div className="p-3 rounded-xl bg-sky-50/70 dark:bg-slate-800/60 border border-sky-100 dark:border-slate-700 text-slate-700 dark:text-slate-300">
            <p className="font-semibold text-sky-950 dark:text-sky-200">
              Lưu ý: Dữ liệu thu thập được cần bảo đảm tính đại diện cho đối tượng đang được quan tâm.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          b) PHÂN LOẠI DỮ LIỆU
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          b) Phân loại dữ liệu
        </h2>

        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-3">
          <p className="font-medium text-slate-800 dark:text-slate-200">
            Dữ liệu gồm hai nhóm:
          </p>

          <div className="space-y-3 pl-1">
            {/* Nhóm 1: Dữ liệu là số */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                <span>Dữ liệu là số:</span>
              </h3>
              <ul className="space-y-1.5 pl-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li className="list-disc">
                  <strong>Số liệu rời rạc:</strong> thường thu được từ việc đếm.
                </li>
                <li className="list-disc">
                  <strong>Số liệu liên tục:</strong> thường thu được từ việc đo.
                </li>
              </ul>
            </div>

            {/* Nhóm 2: Dữ liệu không là số */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Dữ liệu không là số:</span>
              </h3>
              <ul className="space-y-1.5 pl-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li className="list-disc">
                  Dữ liệu có thể sắp thứ tự.
                </li>
                <li className="list-disc">
                  Dữ liệu không thể sắp thứ tự.
                </li>
              </ul>
            </div>
          </div>

          {/* Ví dụ */}
          <div className="p-3.5 rounded-xl bg-sky-50/70 dark:bg-slate-800/60 border border-sky-100 dark:border-slate-700 space-y-2">
            <h4 className="font-bold text-sky-950 dark:text-sky-200 text-xs sm:text-sm">
              Ví dụ:
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-3">
              <li className="list-disc">
                <strong>Số học sinh trong lớp:</strong> số liệu rời rạc.
              </li>
              <li className="list-disc">
                <strong>Chiều cao, cân nặng:</strong> số liệu liên tục.
              </li>
              <li className="list-disc">
                <strong>Màu sắc yêu thích:</strong> dữ liệu không là số, không thể sắp thứ tự.
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};
