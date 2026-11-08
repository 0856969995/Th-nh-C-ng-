import React from 'react';
import { MathView } from '../common/MathView';

export const MathLesson24View: React.FC = () => {
  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-200">
      
      {/* =========================================================================
          1. LÝ THUYẾT (CHỈ LẤY NỘI DUNG TRONG HAI Ô VÀNG SGK)
      ========================================================================= */}
      
      {/* Ô vàng 1: Quy tắc nhân hai phân thức */}
      <section className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/90 dark:border-amber-800/60 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 border-b border-amber-200/70 dark:border-amber-800/60 pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
          <h2 className="font-extrabold text-base sm:text-lg text-amber-950 dark:text-amber-200">
            Quy tắc nhân hai phân thức
          </h2>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/50 shadow-xs space-y-2.5 leading-relaxed text-xs sm:text-sm">
          <div className="py-1 text-center font-bold text-sm sm:text-base text-sky-700 dark:text-sky-300">
            <MathView text={"\\[\\frac{A}{B} \\cdot \\frac{C}{D} = \\frac{A \\cdot C}{B \\cdot D}\\]"} />
          </div>

          <p className="text-slate-800 dark:text-slate-200">
            Muốn nhân hai phân thức, ta nhân các tử thức với nhau, nhân các mẫu thức với nhau.
          </p>
        </div>
      </section>

      {/* Ô vàng 2: Quy tắc chia hai phân thức */}
      <section className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/90 dark:border-amber-800/60 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 border-b border-amber-200/70 dark:border-amber-800/60 pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
          <h2 className="font-extrabold text-base sm:text-lg text-amber-950 dark:text-amber-200">
            Quy tắc chia hai phân thức
          </h2>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/50 shadow-xs space-y-2.5 leading-relaxed text-xs sm:text-sm">
          <p className="text-slate-800 dark:text-slate-200">
            Với phân thức <MathView text={"$\\frac{C}{D} \\ne 0$"} />:
          </p>

          <div className="py-1 text-center font-bold text-sm sm:text-base text-sky-700 dark:text-sky-300">
            <MathView text={"\\[\\frac{A}{B} : \\frac{C}{D} = \\frac{A}{B} \\cdot \\frac{D}{C}\\]"} />
          </div>

          <p className="text-slate-800 dark:text-slate-200">
            Muốn chia phân thức <MathView text={"$\\frac{A}{B}$"} /> cho phân thức <MathView text={"$\\frac{C}{D}$"} /> khác 0, ta nhân <MathView text={"$\\frac{A}{B}$"} /> với phân thức <MathView text={"$\\frac{D}{C}$"} />.
          </p>
        </div>
      </section>

      {/* =========================================================================
          2. VÍ DỤ (TIÊU ĐỀ CHỈ GHI VÍ DỤ, GIỮ NGUYÊN ĐẦY ĐỦ CÁC BƯỚC BIẾN ĐỔI SGK)
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-500 shrink-0" />
          <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100">
            Ví dụ
          </h2>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {/* Đề bài ngắn gọn, đúng SGK */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-sky-50/60 dark:bg-slate-800/60 border border-sky-100 dark:border-slate-700">
            <p className="leading-relaxed">
              Nhân hai phân thức <MathView text={"$\\frac{2x - 1}{5x + 1}$"} /> và <MathView text={"$\\frac{5x + 1}{4x^2 - 1}$"} />.
            </p>
          </div>

          {/* Lời giải liền mạch theo đúng SGK */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2.5">
            <div className="text-center py-1 font-semibold text-sky-800 dark:text-sky-300 overflow-x-auto">
              <MathView text={"\\[\\begin{aligned} \\text{Ta có:}\\quad &\\frac{2x - 1}{5x + 1} \\cdot \\frac{5x + 1}{4x^2 - 1} \\\\ &= \\frac{(2x - 1)(5x + 1)}{(5x + 1)(4x^2 - 1)} \\\\ &= \\frac{(2x - 1)(5x + 1)}{(5x + 1)(2x - 1)(2x + 1)} \\\\ &= \\frac{1}{2x + 1}. \\end{aligned}\\]"} />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
