import React from 'react';
import { MathView } from '../common/MathView';

export const MathLesson12View: React.FC = () => {
  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-200">
      
      {/* =========================================================================
          1. ĐỊNH NGHĨA HÌNH BÌNH HÀNH
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <div className="text-xs sm:text-sm leading-relaxed">
          <span className="font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
            Định nghĩa: 
          </span>
          <span className="text-slate-700 dark:text-slate-300 ml-1">
            Hình bình hành là tứ giác có các cạnh đối song song.
          </span>
        </div>

        <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <p className="font-bold text-slate-800 dark:text-slate-200">
            Với hình bình hành ABCD:
          </p>
          <div className="max-w-xs mx-auto py-2.5 px-4 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 text-center space-y-1.5 select-all">
            <MathView text="$$AB \parallel CD$$" />
            <MathView text="$$AD \parallel BC$$" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. TÍNH CHẤT HÌNH BÌNH HÀNH
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        <h2 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
          Tính chất:
        </h2>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          {/* Cạnh đối bằng nhau */}
          <div className="space-y-1.5">
            <div className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Các cạnh đối bằng nhau:</span>
            </div>
            <div className="max-w-xs mx-auto py-2.5 px-4 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 text-center space-y-1 select-all">
              <MathView text="$$AB = CD$$" />
              <MathView text="$$AD = BC$$" />
            </div>
          </div>

          {/* Góc đối bằng nhau */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Các góc đối bằng nhau:</span>
            </div>
            <div className="max-w-xs mx-auto py-2.5 px-4 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 text-center space-y-1 select-all">
              <MathView text="$$\widehat{A} = \widehat{C}$$" />
              <MathView text="$$\widehat{B} = \widehat{D}$$" />
            </div>
          </div>

          {/* Hai đường chéo cắt nhau tại trung điểm của mỗi đường */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Hai đường chéo cắt nhau tại trung điểm của mỗi đường:
              </span>
            </div>
            <div className="max-w-xs mx-auto py-2.5 px-4 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 text-center space-y-1 select-all">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Gọi O là giao điểm hai đường chéo AC và BD:</p>
              <MathView text="$$OA = OC$$" />
              <MathView text="$$OB = OD$$" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. DẤU HIỆU NHẬN BIẾT
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
        <h2 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
          Dấu hiệu nhận biết:
        </h2>

        <ol className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-1">
          <li className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <span className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
            <span>Tứ giác có các cạnh đối song song là hình bình hành.</span>
          </li>
          <li className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <span className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
            <span>Tứ giác có các cạnh đối bằng nhau là hình bình hành.</span>
          </li>
          <li className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <span className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
            <span>Tứ giác có một cặp cạnh đối vừa song song vừa bằng nhau là hình bình hành.</span>
          </li>
          <li className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <span className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
            <span>Tứ giác có các góc đối bằng nhau là hình bình hành.</span>
          </li>
          <li className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <span className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
            <span>Tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường là hình bình hành.</span>
          </li>
        </ol>
      </section>

    </div>
  );
};
