import React from 'react';
import { MathView } from '../common/MathView';

export const MathLesson22View: React.FC = () => {
  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-200">
      
      {/* =========================================================================
          1. LÝ THUYẾT (THEO ĐÚNG 3 Ô VÀNG SGK)
      ========================================================================= */}
      
      {/* Ô vàng 1 – Tính chất cơ bản của phân thức */}
      <section className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/90 dark:border-amber-800/60 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 border-b border-amber-200/70 dark:border-amber-800/60 pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
          <h2 className="font-extrabold text-base sm:text-lg text-amber-950 dark:text-amber-200">
            Tính chất cơ bản của phân thức
          </h2>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/50 shadow-xs space-y-3 leading-relaxed text-xs sm:text-sm">
          <div className="space-y-1">
            <p className="text-slate-800 dark:text-slate-200">
              Nếu nhân cả tử và mẫu của một phân thức với cùng một đa thức khác đa thức 0 thì được một phân thức bằng phân thức đã cho:
            </p>
            <div className="py-1 text-center font-bold text-sm sm:text-base text-sky-700 dark:text-sky-300">
              <MathView text={"\\[\\frac{A}{B} = \\frac{A \\cdot M}{B \\cdot M}\\]"} />
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] sm:text-xs text-center">
              (với <MathView text={"$M$"} /> là một đa thức khác đa thức 0).
            </p>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-2.5 space-y-1">
            <p className="text-slate-800 dark:text-slate-200">
              Nếu chia cả tử và mẫu của một phân thức cho một nhân tử chung của chúng thì được một phân thức bằng phân thức đã cho:
            </p>
            <div className="py-1 text-center font-bold text-sm sm:text-base text-sky-700 dark:text-sky-300">
              <MathView text={"\\[\\frac{A}{B} = \\frac{A : N}{B : N}\\]"} />
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] sm:text-xs text-center">
              (với <MathView text={"$N$"} /> là một nhân tử chung).
            </p>
          </div>
        </div>
      </section>

      {/* Ô vàng 2 – Cách rút gọn phân thức */}
      <section className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/90 dark:border-amber-800/60 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 border-b border-amber-200/70 dark:border-amber-800/60 pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
          <h2 className="font-extrabold text-base sm:text-lg text-amber-950 dark:text-amber-200">
            Quy tắc rút gọn phân thức
          </h2>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/50 shadow-xs space-y-2 leading-relaxed text-xs sm:text-sm">
          <p className="font-semibold text-slate-800 dark:text-slate-200">
            Muốn rút gọn một phân thức ta có thể làm như sau:
          </p>
          <ul className="space-y-1.5 pl-3 list-disc text-slate-700 dark:text-slate-300">
            <li>
              Phân tích tử và mẫu thành nhân tử (nếu cần) để tìm nhân tử chung.
            </li>
            <li>
              Chia cả tử và mẫu cho nhân tử chung.
            </li>
          </ul>
        </div>
      </section>

      {/* Ô vàng 3 – Cách quy đồng mẫu thức nhiều phân thức */}
      <section className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/90 dark:border-amber-800/60 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 border-b border-amber-200/70 dark:border-amber-800/60 pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
          <h2 className="font-extrabold text-base sm:text-lg text-amber-950 dark:text-amber-200">
            Quy tắc quy đồng mẫu thức nhiều phân thức
          </h2>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/50 shadow-xs space-y-2 leading-relaxed text-xs sm:text-sm">
          <p className="font-semibold text-slate-800 dark:text-slate-200">
            Muốn quy đồng mẫu thức nhiều phân thức ta có thể làm như sau:
          </p>
          <ul className="space-y-1.5 pl-3 list-disc text-slate-700 dark:text-slate-300">
            <li>
              Phân tích các mẫu thức thành nhân tử rồi tìm mẫu thức chung.
            </li>
            <li>
              Tìm nhân tử phụ của mỗi mẫu thức bằng cách chia mẫu thức chung cho mẫu thức đó.
            </li>
            <li>
              Nhân cả tử và mẫu của mỗi phân thức với nhân tử phụ tương ứng.
            </li>
          </ul>
        </div>
      </section>

      {/* =========================================================================
          2. VÍ DỤ (TIÊU ĐỀ CHỈ GHI VÍ DỤ, LỜI GIẢI TRÌNH BÀY LIỀN MẠCH THEO SGK)
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
              Dùng tính chất cơ bản của phân thức, giải thích vì sao: <MathView text={"$\\frac{2x + 2}{x^2 - 1} = \\frac{2}{x - 1}$"} />
            </p>
          </div>

          {/* Lời giải liền mạch theo chuẩn SGK */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2.5">
            <p className="font-bold text-slate-900 dark:text-slate-100">
              Lời giải:
            </p>

            <div className="space-y-2">
              <div className="text-center py-1 text-sky-800 dark:text-sky-300 font-bold overflow-x-auto">
                <MathView text={"\\[\\frac{2x + 2}{x^2 - 1} = \\frac{2(x + 1)}{(x - 1)(x + 1)} = \\frac{2}{x - 1}\\]"} />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
