import React from 'react';

export const MathLesson14View: React.FC = () => {
  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-200">
      
      {/* =========================================================================
          1. HÌNH THOI
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          1. Hình thoi
        </h2>

        {/* Định nghĩa */}
        <div className="text-xs sm:text-sm leading-relaxed">
          <span className="font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
            Định nghĩa: 
          </span>
          <span className="text-slate-700 dark:text-slate-300 ml-1">
            Hình thoi là tứ giác có bốn cạnh bằng nhau.
          </span>
        </div>

        {/* Tính chất */}
        <div className="space-y-1.5 pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <span className="font-extrabold text-slate-900 dark:text-slate-100 block">
            Tính chất:
          </span>
          <ul className="space-y-1.5 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Hình thoi có đầy đủ các tính chất của hình bình hành.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Hai đường chéo vuông góc với nhau.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Hai đường chéo là các đường phân giác của các góc trong hình thoi.</span>
            </li>
          </ul>
        </div>

        {/* Dấu hiệu nhận biết */}
        <div className="space-y-1.5 pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <span className="font-extrabold text-slate-900 dark:text-slate-100 block">
            Dấu hiệu nhận biết:
          </span>
          <ul className="space-y-1.5 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Hình bình hành có hai cạnh kề bằng nhau là hình thoi.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Hình bình hành có hai đường chéo vuông góc với nhau là hình thoi.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Hình bình hành có một đường chéo là đường phân giác của một góc là hình thoi.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* =========================================================================
          2. HÌNH VUÔNG
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          2. Hình vuông
        </h2>

        {/* Định nghĩa */}
        <div className="text-xs sm:text-sm leading-relaxed">
          <span className="font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
            Định nghĩa: 
          </span>
          <span className="text-slate-700 dark:text-slate-300 ml-1">
            Hình vuông là tứ giác có bốn góc vuông và bốn cạnh bằng nhau.
          </span>
        </div>

        {/* Tính chất */}
        <div className="space-y-1.5 pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <span className="font-extrabold text-slate-900 dark:text-slate-100 block">
            Tính chất:
          </span>
          <ul className="space-y-1.5 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Hình vuông vừa là hình chữ nhật, vừa là hình thoi.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Hai đường chéo bằng nhau.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Hai đường chéo vuông góc với nhau.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Hai đường chéo cắt nhau tại trung điểm của mỗi đường.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Hai đường chéo là các đường phân giác của các góc trong hình vuông.</span>
            </li>
          </ul>
        </div>

        {/* Dấu hiệu nhận biết */}
        <div className="space-y-1.5 pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <span className="font-extrabold text-slate-900 dark:text-slate-100 block">
            Dấu hiệu nhận biết:
          </span>
          <ul className="space-y-1.5 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Hình chữ nhật có hai cạnh kề bằng nhau là hình vuông.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Hình chữ nhật có hai đường chéo vuông góc với nhau là hình vuông.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Hình chữ nhật có một đường chéo là đường phân giác của một góc là hình vuông.</span>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
};
