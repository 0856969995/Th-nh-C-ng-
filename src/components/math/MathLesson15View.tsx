import React from 'react';
import { MathView } from '../common/MathView';

export const MathLesson15View: React.FC = () => {
  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-200">
      
      {/* =========================================================================
          1. TỈ SỐ HAI ĐOẠN THẲNG
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          1. Tỉ số hai đoạn thẳng
        </h2>

        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            Tỉ số hai đoạn thẳng là tỉ số độ dài của chúng khi được đo bằng cùng một đơn vị.
          </p>
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <p className="font-semibold text-slate-800 dark:text-slate-200">
            Hai cặp đoạn thẳng tỉ lệ nếu:
          </p>

          <div className="max-w-xs mx-auto py-2 px-4 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 text-center select-all">
            <MathView text="$$\frac{AB}{CD} = \frac{A'B'}{C'D'}$$" />
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-1 text-center">
            (Có thể viết tương đương: <MathView text="$\frac{AB}{A'B'} = \frac{CD}{C'D'}$" />)
          </p>
        </div>
      </section>

      {/* =========================================================================
          2. ĐỊNH LÍ THALÈS
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          2. Định lí Thalès
        </h2>

        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì tạo ra các đoạn thẳng tương ứng tỉ lệ.
          </p>
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <p className="font-semibold text-slate-800 dark:text-slate-200">
            Với tam giác ABC, B' thuộc AB, C' thuộc AC và B'C' song song BC:
          </p>

          <div className="max-w-xs mx-auto py-2.5 px-4 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 text-center select-all">
            <MathView text="$$\frac{AB'}{AB} = \frac{AC'}{AC}$$" />
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-0.5 text-center">
            (Hệ thức tương đương: <MathView text="$\frac{AB'}{B'B} = \frac{AC'}{C'C}$" /> hoặc <MathView text="$\frac{B'B}{AB} = \frac{C'C}{AC}$" />)
          </p>
        </div>

        {/* HÌNH MINH HỌA ĐỊNH LÍ THALÈS (SVG TOÁN HỌC CHÍNH XÁC) */}
        <div className="pt-2 flex flex-col items-center">
          <div className="w-full max-w-xs sm:max-w-sm p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col items-center">
            <svg
              viewBox="0 0 320 210"
              className="w-full max-w-[280px] h-auto select-none overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Hình minh họa Định lí Thalès trong tam giác ABC"
            >
              <defs>
                <linearGradient id="thalesGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {/* Tam giác ABC */}
              <polygon
                points="150,26 40,180 270,180"
                fill="url(#thalesGrad)"
                stroke="#0369a1"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              {/* Đoạn B'C' song song hoàn toàn với đáy BC (cùng song song trục hoành: y=104 vs y=180) */}
              <line
                x1="93"
                y1="104"
                x2="212"
                y2="104"
                stroke="#0284c7"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Ký hiệu mũi tên song song trên B'C' và BC */}
              <g fill="#0284c7">
                {/* Mũi tên trên B'C' (tại x=152, y=104) */}
                <polygon points="155,101 161,104 155,107" />
                <polygon points="149,101 155,104 149,107" />
              </g>
              <g fill="#0369a1">
                {/* Mũi tên trên BC (tại x=155, y=180) */}
                <polygon points="158,177 164,180 158,183" />
                <polygon points="152,177 158,180 152,183" />
              </g>

              {/* Các điểm A, B, C, B', C' */}
              <circle cx="150" cy="26" r="3.5" fill="#0369a1" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="40" cy="180" r="3.5" fill="#0369a1" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="270" cy="180" r="3.5" fill="#0369a1" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="93" cy="104" r="3.5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="212" cy="104" r="3.5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />

              {/* Tên các nhãn điểm */}
              <text x="150" y="17" textAnchor="middle" className="text-xs font-black fill-slate-900 dark:fill-slate-100">A</text>
              <text x="26" y="190" textAnchor="middle" className="text-xs font-black fill-slate-900 dark:fill-slate-100">B</text>
              <text x="284" y="190" textAnchor="middle" className="text-xs font-black fill-slate-900 dark:fill-slate-100">C</text>
              <text x="76" y="108" textAnchor="middle" className="text-xs font-black fill-sky-700 dark:fill-sky-300">B'</text>
              <text x="228" y="108" textAnchor="middle" className="text-xs font-black fill-sky-700 dark:fill-sky-300">C'</text>
            </svg>

            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 pt-2 text-center">
              Hình minh họa: Tam giác ABC có <MathView text="$B'C' \parallel BC$" />
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ĐỊNH LÍ THALÈS ĐẢO
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          3. Định lí Thalès đảo
        </h2>

        <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <p className="font-semibold text-slate-800 dark:text-slate-200">
            Nếu:
          </p>

          <div className="max-w-xs mx-auto py-2 px-4 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 text-center select-all">
            <MathView text="$$\frac{AB'}{AB} = \frac{AC'}{AC}$$" />
          </div>

          <p className="font-semibold text-slate-800 dark:text-slate-200 text-center">
            thì:
          </p>

          <div className="max-w-xs mx-auto py-2 px-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-center select-all">
            <MathView text="$$B'C' \parallel BC$$" />
          </div>
        </div>
      </section>

    </div>
  );
};
