import React from 'react';
import { MathView } from '../common/MathView';

export const MathLesson13View: React.FC = () => {
  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-200">
      
      {/* =========================================================================
          1. ĐỊNH NGHĨA HÌNH CHỮ NHẬT
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <div className="text-xs sm:text-sm leading-relaxed">
          <span className="font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
            Định nghĩa: 
          </span>
          <span className="text-slate-700 dark:text-slate-300 ml-1">
            Hình chữ nhật là tứ giác có bốn góc vuông.
          </span>
        </div>

        <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <p className="font-bold text-slate-800 dark:text-slate-200">
            Với hình chữ nhật ABCD:
          </p>
          <div className="max-w-xs mx-auto py-2.5 px-4 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 text-center select-all">
            <MathView text="$$\widehat{A} = \widehat{B} = \widehat{C} = \widehat{D} = 90^\circ$$" />
          </div>
        </div>

        {/* SVG HÌNH HỌC CHÍNH XÁC: Hình chữ nhật ABCD với 4 góc vuông và 2 đường chéo */}
        <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-sky-50/50 dark:bg-slate-800/60 border border-sky-100 dark:border-slate-700 max-w-sm mx-auto">
          <svg
            viewBox="0 0 320 220"
            className="w-full max-w-[280px] h-auto drop-shadow-xs select-none"
            aria-label="Hình chữ nhật ABCD có 4 góc vuông và hai đường chéo bằng nhau cắt nhau tại O"
          >
            {/* Hình chữ nhật ABCD: A(60,50), B(260,50), C(260,160), D(60,160) */}
            <rect
              x="60"
              y="50"
              width="200"
              height="110"
              fill="rgba(14, 165, 233, 0.08)"
              stroke="#0284c7"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Ký hiệu 4 góc vuông */}
            {/* Góc A */}
            <polyline points="60,62 72,62 72,50" fill="none" stroke="#0284c7" strokeWidth="1.5" />
            {/* Góc B */}
            <polyline points="260,62 248,62 248,50" fill="none" stroke="#0284c7" strokeWidth="1.5" />
            {/* Góc C */}
            <polyline points="260,148 248,148 248,160" fill="none" stroke="#0284c7" strokeWidth="1.5" />
            {/* Góc D */}
            <polyline points="60,148 72,148 72,160" fill="none" stroke="#0284c7" strokeWidth="1.5" />

            {/* Đường chéo AC */}
            <line
              x1="60"
              y1="50"
              x2="260"
              y2="160"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeDasharray="5,4"
            />

            {/* Đường chéo BD */}
            <line
              x1="260"
              y1="50"
              x2="60"
              y2="160"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeDasharray="5,4"
            />

            {/* Giao điểm O tại (160, 105) */}
            <circle cx="160" cy="105" r="4" fill="#8b5cf6" />
            <text x="160" y="94" textAnchor="middle" className="text-xs font-black fill-purple-700 dark:fill-purple-300">O</text>

            {/* Ký hiệu OA = OB = OC = OD (1 vạch tick mark trên mỗi đoạn) */}
            <line x1="107" y1="81" x2="113" y2="74" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
            <line x1="207" y1="74" x2="213" y2="81" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
            <line x1="207" y1="136" x2="213" y2="129" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
            <line x1="107" y1="129" x2="113" y2="136" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />

            {/* 4 Đỉnh A, B, C, D */}
            <circle cx="60" cy="50" r="4.5" fill="#0284c7" />
            <text x="46" y="44" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">A</text>

            <circle cx="260" cy="50" r="4.5" fill="#0284c7" />
            <text x="274" y="44" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">B</text>

            <circle cx="260" cy="160" r="4.5" fill="#0284c7" />
            <text x="274" y="172" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">C</text>

            <circle cx="60" cy="160" r="4.5" fill="#0284c7" />
            <text x="46" y="172" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">D</text>
          </svg>

          <div className="text-center text-xs font-bold text-sky-800 dark:text-sky-300 mt-2 select-all">
            Hình chữ nhật ABCD (AC = BD, OA = OB = OC = OD)
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. TÍNH CHẤT HÌNH CHỮ NHẬT
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        <h2 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
          Tính chất:
        </h2>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <div className="flex items-start gap-2">
            <span className="text-sky-500 font-bold shrink-0">•</span>
            <span>Hình chữ nhật có tất cả các tính chất của hình bình hành.</span>
          </div>

          <div className="space-y-1.5 pt-1">
            <div className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường:
              </span>
            </div>
            <div className="max-w-xs mx-auto py-2.5 px-4 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 text-center space-y-1 select-all">
              <MathView text="$$AC = BD$$" />
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Gọi O là giao điểm hai đường chéo AC và BD:</p>
              <MathView text="$$OA = OB = OC = OD$$" />
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
          <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <span className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
            <span>Hình bình hành có một góc vuông là hình chữ nhật.</span>
          </li>
          <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <span className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
            <span>Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật.</span>
          </li>
          <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <span className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
            <span>Tứ giác có ba góc vuông là hình chữ nhật.</span>
          </li>
        </ol>
      </section>

    </div>
  );
};
