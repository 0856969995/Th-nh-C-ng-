import React from 'react';
import { MathView } from '../common/MathView';

export const MathLesson11View: React.FC = () => {
  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-200">

      {/* =========================================================================
          HÌNH THANG
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <div className="text-xs sm:text-sm leading-relaxed">
          <span className="font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base">Hình thang: </span>
          <span className="text-slate-700 dark:text-slate-300">
            Tứ giác có hai cạnh đối song song.
          </span>
        </div>

        <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <p className="font-bold text-slate-800 dark:text-slate-200">
            Với hình thang ABCD có AB ∥ CD:
          </p>
          <ul className="space-y-1 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>AB và CD là hai đáy.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>AD và BC là hai cạnh bên.</span>
            </li>
          </ul>
        </div>

        {/* SVG HÌNH HỌC CHÍNH XÁC: Hình thang ABCD (AB ∥ CD) */}
        <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-sky-50/50 dark:bg-slate-800/60 border border-sky-100 dark:border-slate-700 max-w-sm mx-auto">
          <svg
            viewBox="0 0 320 200"
            className="w-full max-w-[280px] h-auto drop-shadow-xs select-none"
            aria-label="Hình thang ABCD với AB song song CD"
          >
            {/* Hình thang ABCD: AB ngang y=45, CD ngang y=165 (song song tuyệt đối) */}
            <polygon
              points="90,45 210,45 275,165 45,165"
              fill="rgba(14, 165, 233, 0.08)"
              stroke="#0284c7"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Các đỉnh A, B, C, D */}
            <circle cx="90" cy="45" r="4.5" fill="#0284c7" />
            <text x="75" y="38" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">A</text>

            <circle cx="210" cy="45" r="4.5" fill="#0284c7" />
            <text x="220" y="38" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">B</text>

            <circle cx="275" cy="165" r="4.5" fill="#0284c7" />
            <text x="285" y="175" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">C</text>

            <circle cx="45" cy="165" r="4.5" fill="#0284c7" />
            <text x="25" y="175" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">D</text>

            {/* Nhãn hai đáy và hai cạnh bên */}
            <text x="150" y="35" textAnchor="middle" className="text-[10px] font-bold fill-sky-800 dark:fill-sky-300">Đáy AB</text>
            <text x="160" y="185" textAnchor="middle" className="text-[10px] font-bold fill-sky-800 dark:fill-sky-300">Đáy CD</text>
            <text x="50" y="105" textAnchor="end" className="text-[10px] font-semibold fill-slate-600 dark:fill-slate-400">Cạnh bên AD</text>
            <text x="255" y="105" textAnchor="start" className="text-[10px] font-semibold fill-slate-600 dark:fill-slate-400">Cạnh bên BC</text>
          </svg>

          <div className="text-center text-xs font-bold text-sky-800 dark:text-sky-300 mt-2 select-all">
            Hình thang ABCD (AB ∥ CD)
          </div>
        </div>
      </section>

      {/* =========================================================================
          HÌNH THANG CÂN & TÍNH CHẤT & DẤU HIỆU NHẬN BIẾT
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        <div className="text-xs sm:text-sm leading-relaxed">
          <span className="font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base">Hình thang cân: </span>
          <span className="text-slate-700 dark:text-slate-300">
            Hình thang có hai góc kề một đáy bằng nhau.
          </span>
        </div>

        <div className="space-y-2">
          <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
            Với hình thang cân ABCD có AB ∥ CD:
          </p>

          {/* Hiển thị thành hai dòng riêng biệt - KHÔNG gạch đứng, KHÔNG ký tự |, dấu mũ trên từng chữ cái */}
          <div className="max-w-xs mx-auto py-3 px-4 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 text-center space-y-2 select-all">
            <MathView text="$$\widehat{A} = \widehat{B}$$" />
            <MathView text="$$\widehat{C} = \widehat{D}$$" />
          </div>
        </div>

        {/* Tính chất */}
        <div className="space-y-2">
          <span className="font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base block">
            Tính chất:
          </span>

          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Hai cạnh bên bằng nhau:</span>
            </li>
          </ul>
          {/* Hiển thị riêng */}
          <div className="max-w-xs mx-auto py-2 px-4 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 text-center font-black text-base sm:text-lg text-sky-950 dark:text-sky-100 select-all">
            AD = BC
          </div>

          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-1 pt-1">
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Hai đường chéo bằng nhau:</span>
            </li>
          </ul>
          {/* Hiển thị riêng */}
          <div className="max-w-xs mx-auto py-2 px-4 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 text-center font-black text-base sm:text-lg text-sky-950 dark:text-sky-100 select-all">
            AC = BD
          </div>
        </div>

        {/* Dấu hiệu nhận biết */}
        <div className="p-3 sm:p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed">
          <span className="font-black block mb-1 text-emerald-900 dark:text-emerald-200 text-sm">
            Dấu hiệu nhận biết:
          </span>
          <span>Hình thang có hai đường chéo bằng nhau là hình thang cân.</span>
        </div>

        {/* SVG HÌNH HỌC CHÍNH XÁC: Hình thang cân ABCD */}
        <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-sky-50/50 dark:bg-slate-800/60 border border-sky-100 dark:border-slate-700 max-w-sm mx-auto">
          <svg
            viewBox="0 0 320 210"
            className="w-full max-w-[280px] h-auto drop-shadow-xs select-none"
            aria-label="Hình thang cân ABCD minh họa hai cạnh bên bằng nhau và hai đường chéo bằng nhau"
          >
            {/* Hình thang cân ABCD đối xứng qua trục x = 160 */}
            <polygon
              points="100,45 220,45 270,165 50,165"
              fill="rgba(14, 165, 233, 0.08)"
              stroke="#0284c7"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Đường chéo AC */}
            <line
              x1="100"
              y1="45"
              x2="270"
              y2="165"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeDasharray="5,4"
            />

            {/* Đường chéo BD */}
            <line
              x1="220"
              y1="45"
              x2="50"
              y2="165"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeDasharray="5,4"
            />

            {/* Ký hiệu 2 cạnh bên bằng nhau AD = BC (hai vạch tick mark đôi) */}
            <line x1="70" y1="102" x2="80" y2="106" stroke="#0284c7" strokeWidth="2.5" />
            <line x1="68" y1="107" x2="78" y2="111" stroke="#0284c7" strokeWidth="2.5" />

            <line x1="242" y1="106" x2="252" y2="102" stroke="#0284c7" strokeWidth="2.5" />
            <line x1="244" y1="111" x2="254" y2="107" stroke="#0284c7" strokeWidth="2.5" />

            {/* Ký hiệu góc kề đáy dưới: D̂ = Ĉ (vòng cung đơn) */}
            <path d="M 70,165 A 20 20 0 0 0 59,144" fill="none" stroke="#10b981" strokeWidth="2.5" />
            <path d="M 261,144 A 20 20 0 0 0 250,165" fill="none" stroke="#10b981" strokeWidth="2.5" />
            {/* Góc D̂ */}
            <path d="M 69,146 L 73,141 L 77,146" fill="none" stroke="#047857" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            <text x="73" y="157" textAnchor="middle" className="text-xs font-black fill-emerald-700 dark:fill-emerald-400">D</text>
            {/* Góc Ĉ */}
            <path d="M 233,146 L 237,141 L 241,146" fill="none" stroke="#047857" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            <text x="237" y="157" textAnchor="middle" className="text-xs font-black fill-emerald-700 dark:fill-emerald-400">C</text>

            {/* Ký hiệu góc kề đáy trên: Â = B̂ (vòng cung kép) */}
            <path d="M 118,45 A 18 18 0 0 1 93,61" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <path d="M 122,45 A 22 22 0 0 1 91,65" fill="none" stroke="#f59e0b" strokeWidth="2" />

            <path d="M 227,61 A 18 18 0 0 1 202,45" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <path d="M 229,65 A 22 22 0 0 1 198,45" fill="none" stroke="#f59e0b" strokeWidth="2" />
            {/* Góc Â */}
            <path d="M 106,53 L 110,48 L 114,53" fill="none" stroke="#b45309" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            <text x="110" y="64" textAnchor="middle" className="text-xs font-black fill-amber-700 dark:fill-amber-400">A</text>
            {/* Góc B̂ */}
            <path d="M 190,53 L 194,48 L 198,53" fill="none" stroke="#b45309" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            <text x="194" y="64" textAnchor="middle" className="text-xs font-black fill-amber-700 dark:fill-amber-400">B</text>

            {/* 4 Đỉnh A, B, C, D */}
            <circle cx="100" cy="45" r="4.5" fill="#0284c7" />
            <text x="88" y="38" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">A</text>

            <circle cx="220" cy="45" r="4.5" fill="#0284c7" />
            <text x="228" y="38" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">B</text>

            <circle cx="270" cy="165" r="4.5" fill="#0284c7" />
            <text x="280" y="175" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">C</text>

            <circle cx="50" cy="165" r="4.5" fill="#0284c7" />
            <text x="32" y="175" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">D</text>
          </svg>

          {/* Chú giải dưới hình: hiển thị riêng từng dòng, không có | */}
          <div className="space-y-1 mt-2 text-center text-xs sm:text-sm font-black text-sky-900 dark:text-sky-200 select-all">
            <div>AD = BC</div>
            <div>AC = BD</div>
          </div>
        </div>
      </section>

    </div>
  );
};
