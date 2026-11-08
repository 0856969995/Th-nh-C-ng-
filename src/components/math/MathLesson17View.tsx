import React from 'react';
import { MathView } from '../common/MathView';

export const MathLesson17View: React.FC = () => {
  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-200">
      
      {/* =========================================================================
          1. TÍNH CHẤT ĐƯỜNG PHÂN GIÁC CỦA TAM GIÁC
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          1. Tính chất đường phân giác của tam giác
        </h2>

        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            Trong tam giác, đường phân giác của một góc chia cạnh đối diện thành hai đoạn thẳng tỉ lệ với hai cạnh kề hai đoạn ấy.
          </p>
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <p className="font-semibold text-slate-800 dark:text-slate-200">
            Với tam giác ABC, AD là đường phân giác của góc A, D thuộc cạnh BC, ta có:
          </p>

          <div className="max-w-xs mx-auto py-2.5 px-4 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 text-center select-all">
            <MathView text="$$\frac{DB}{DC} = \frac{AB}{AC}$$" />
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-1 text-center">
            Trong đó: DB, DC là hai đoạn của cạnh BC; AB, AC là hai cạnh kề với góc A.
          </p>
        </div>

        {/* HÌNH MINH HỌA HÌNH HỌC CHÍNH XÁC: ĐƯỜNG PHÂN GIÁC */}
        <div className="pt-2 flex flex-col items-center">
          <div className="w-full max-w-xs sm:max-w-sm p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col items-center">
            <svg
              viewBox="0 0 320 220"
              className="w-full max-w-[280px] h-auto select-none overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Hình minh họa đường phân giác AD của tam giác ABC"
            >
              <defs>
                <linearGradient id="bisectorGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {/* Tam giác ABC (cạnh AB < AC, không cân, để AD không trùng trung tuyến hoặc đường cao) */}
              <polygon
                points="115,26 35,180 285,180"
                fill="url(#bisectorGrad)"
                stroke="#0369a1"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              {/* Đường phân giác AD nối đỉnh A với điểm D trên cạnh BC (DB < DC, không vuông góc, không chia đôi đáy) */}
              <line
                x1="115"
                y1="26"
                x2="143"
                y2="180"
                stroke="#0284c7"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Ký hiệu hai cung góc bằng nhau tại đỉnh A: góc BAD và góc DAC */}
              {/* Cung góc BAD */}
              <path
                d="M 101.2 52.6 A 30 30 0 0 0 120.4 55.5"
                fill="none"
                stroke="#0284c7"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              {/* Vạch nhỏ đánh dấu cung góc BAD */}
              <line x1="108" y1="52" x2="114" y2="56" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />

              {/* Cung góc DAC */}
              <path
                d="M 120.4 55.5 A 30 30 0 0 0 137.2 46.1"
                fill="none"
                stroke="#0284c7"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              {/* Vạch nhỏ đánh dấu cung góc DAC */}
              <line x1="126" y1="49" x2="132" y2="53" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />

              {/* Các điểm A, B, C, D */}
              <circle cx="115" cy="26" r="3.5" fill="#0369a1" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="35" cy="180" r="3.5" fill="#0369a1" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="285" cy="180" r="3.5" fill="#0369a1" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="143" cy="180" r="3.5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />

              {/* Tên các nhãn điểm A, B, C, D: thoáng, không chồng lên đường nét */}
              <text x="115" y="14" textAnchor="middle" className="text-xs font-black fill-slate-900 dark:fill-slate-100">A</text>
              <text x="22" y="188" textAnchor="middle" className="text-xs font-black fill-slate-900 dark:fill-slate-100">B</text>
              <text x="298" y="188" textAnchor="middle" className="text-xs font-black fill-slate-900 dark:fill-slate-100">C</text>
              <text x="143" y="200" textAnchor="middle" className="text-xs font-black fill-sky-700 dark:fill-sky-300">D</text>
            </svg>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. DẤU HIỆU NHẬN BIẾT ĐƯỜNG PHÂN GIÁC
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          2. Dấu hiệu nhận biết đường phân giác
        </h2>

        <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <p className="font-semibold text-slate-800 dark:text-slate-200">
            Trong tam giác ABC, nếu D thuộc cạnh BC và:
          </p>

          <div className="max-w-xs mx-auto py-2.5 px-4 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 text-center select-all">
            <MathView text="$$\frac{DB}{DC} = \frac{AB}{AC}$$" />
          </div>

          <p className="text-center font-bold text-sky-950 dark:text-sky-200 pt-1">
            thì AD là đường phân giác của góc A.
          </p>
        </div>
      </section>

      {/* =========================================================================
          3. CÁCH VẬN DỤNG
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          3. Cách vận dụng
        </h2>

        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-1">
          <li className="flex items-start gap-2">
            <span className="text-sky-500 font-bold shrink-0">•</span>
            <span>Khi biết đường phân giác, sử dụng tính chất đường phân giác để lập tỉ lệ thức.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-sky-500 font-bold shrink-0">•</span>
            <span>Khi biết các độ dài và cần tìm đoạn thẳng chưa biết, lập tỉ lệ thức rồi giải.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-sky-500 font-bold shrink-0">•</span>
            <span>Khi cần chứng minh một đường thẳng là đường phân giác, có thể sử dụng dấu hiệu nhận biết nêu trên.</span>
          </li>
        </ul>
      </section>

    </div>
  );
};
