import React from 'react';
import { MathView } from '../common/MathView';

export const MathLesson21View: React.FC = () => {
  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-200">
      
      {/* =========================================================================
          LÝ THUYẾT (THEO ĐÚNG Ô VÀNG SGK)
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/90 dark:border-amber-800/60 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 border-b border-amber-200/70 dark:border-amber-800/60 pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
          <h2 className="font-extrabold text-base sm:text-lg text-amber-950 dark:text-amber-200">
            Định nghĩa phân thức đại số
          </h2>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/50 shadow-xs space-y-2.5 leading-relaxed text-xs sm:text-sm">
          <p className="text-slate-800 dark:text-slate-200">
            Một <strong>phân thức đại số</strong> (hay nói gọn là <strong>phân thức</strong>) là một biểu thức có dạng <MathView text={"$\\frac{A}{B}$"} />, trong đó <MathView text={"$A, B$"} /> là những đa thức và <MathView text={"$B$"} /> khác đa thức 0.
          </p>

          <p className="text-slate-800 dark:text-slate-200">
            <MathView text={"$A$"} /> được gọi là <strong>tử thức</strong> (hay tử), <MathView text={"$B$"} /> được gọi là <strong>mẫu thức</strong> (hay mẫu).
          </p>

          <p className="text-slate-700 dark:text-slate-300 pt-1 border-t border-slate-100 dark:border-slate-800">
            Mỗi đa thức cũng được coi như một phân thức với mẫu thức bằng 1. Đặc biệt, số 0, số 1 cũng là những phân thức đại số.
          </p>
        </div>
      </section>

      {/* =========================================================================
          VÍ DỤ (TIÊU ĐỀ CHỈ GHI VÍ DỤ, LỜI GIẢI TRÌNH BÀY LIỀN MẠCH THEO SGK)
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-500 shrink-0" />
          <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100">
            Ví dụ
          </h2>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {/* Đề bài ngắn gọn, liền mạch */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-sky-50/60 dark:bg-slate-800/60 border border-sky-100 dark:border-slate-700">
            <p className="leading-relaxed">
              Tính giá trị của phân thức <MathView text={"$P = \\frac{x^2 - x - 1}{x^2 + 3x}$"} /> tại <MathView text={"$x = 2$"} /> và tại <MathView text={"$x = 1$"} />.
            </p>
          </div>

          {/* Lời giải liền mạch theo chuẩn SGK, không ngắt dòng vụn vặt */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2.5">
            <p className="font-bold text-slate-900 dark:text-slate-100">
              Lời giải:
            </p>

            <div className="space-y-2.5">
              {/* Ý 1: Điều kiện xác định nằm trọn trên cùng một đoạn/dòng */}
              <p className="leading-relaxed">
                Điều kiện xác định của phân thức: <MathView text={"$x^2 + 3x \\ne 0$"} />, hay <MathView text={"$x(x + 3) \\ne 0$"} />, do đó <MathView text={"$x \\ne 0,\\ x \\ne -3$"} />.
              </p>

              {/* Ý 2: Tại x = 2 */}
              <div className="space-y-1 pt-1">
                <p className="leading-relaxed">
                  Tại <MathView text={"$x = 2$"} /> (thỏa mãn điều kiện xác định):
                </p>
                <div className="py-1 text-center font-semibold text-sky-800 dark:text-sky-300 overflow-x-auto">
                  <MathView text={"\\[P = \\frac{2^2 - 2 - 1}{2^2 + 3 \\cdot 2} = \\frac{4 - 2 - 1}{4 + 6} = \\frac{1}{10}\\]"} />
                </div>
              </div>

              {/* Ý 3: Tại x = 1 */}
              <div className="space-y-1 pt-1">
                <p className="leading-relaxed">
                  Tại <MathView text={"$x = 1$"} /> (thỏa mãn điều kiện xác định):
                </p>
                <div className="py-1 text-center font-semibold text-sky-800 dark:text-sky-300 overflow-x-auto">
                  <MathView text={"\\[P = \\frac{1^2 - 1 - 1}{1^2 + 3 \\cdot 1} = \\frac{1 - 1 - 1}{1 + 3} = -\\frac{1}{4}\\]"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
