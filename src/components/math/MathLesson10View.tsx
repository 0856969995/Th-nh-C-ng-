import React from 'react';
import { MathView } from '../common/MathView';

export const MathLesson10View: React.FC = () => {
  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-200">
      
      {/* =========================================================================
          TỨ GIÁC
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <div className="text-xs sm:text-sm leading-relaxed">
          <span className="font-extrabold text-slate-900 dark:text-slate-100 text-sm sm:text-base">Tứ giác: </span>
          <span className="text-slate-700 dark:text-slate-300">
            Tứ giác ABCD gồm bốn cạnh AB, BC, CD, DA. Bốn điểm A, B, C, D là các đỉnh.
          </span>
        </div>

        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-sky-500 font-bold shrink-0">•</span>
            <span>Hai đỉnh không cùng thuộc một cạnh là hai đỉnh đối nhau.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-sky-500 font-bold shrink-0">•</span>
            <span>Hai cạnh không có đỉnh chung là hai cạnh đối nhau.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-sky-500 font-bold shrink-0">•</span>
            <span>
              Đoạn thẳng nối hai đỉnh đối nhau là đường chéo. Hai đường chéo là AC và BD.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-sky-500 font-bold shrink-0">•</span>
            <span>
              Tứ giác lồi là tứ giác mà hai đỉnh bất kì thuộc một cạnh luôn nằm về một phía của đường thẳng đi qua hai đỉnh còn lại.
            </span>
          </li>
        </ul>

        {/* SVG HÌNH HỌC CHÍNH XÁC: Tứ giác lồi ABCD và 2 đường chéo AC, BD */}
        <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-sky-50/50 dark:bg-slate-800/60 border border-sky-100 dark:border-slate-700 max-w-sm mx-auto">
          <svg
            viewBox="0 0 320 220"
            className="w-full max-w-[280px] h-auto drop-shadow-xs select-none"
            aria-label="Hình tứ giác ABCD và hai đường chéo AC, BD"
          >
            {/* Tứ giác lồi ABCD */}
            <polygon
              points="70,45 245,40 280,180 40,170"
              fill="rgba(14, 165, 233, 0.08)"
              stroke="#0284c7"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Đường chéo AC */}
            <line
              x1="70"
              y1="45"
              x2="280"
              y2="180"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeDasharray="5,4"
            />

            {/* Đường chéo BD */}
            <line
              x1="245"
              y1="40"
              x2="40"
              y2="170"
              stroke="#ec4899"
              strokeWidth="2"
              strokeDasharray="5,4"
            />

            {/* 4 Đỉnh A, B, C, D */}
            <circle cx="70" cy="45" r="4.5" fill="#0284c7" />
            <text x="50" y="38" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">A</text>

            <circle cx="245" cy="40" r="4.5" fill="#0284c7" />
            <text x="255" y="38" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">B</text>

            <circle cx="280" cy="180" r="4.5" fill="#0284c7" />
            <text x="290" y="192" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">C</text>

            <circle cx="40" cy="170" r="4.5" fill="#0284c7" />
            <text x="22" y="180" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">D</text>

            {/* Chú thích cạnh */}
            <text x="155" y="33" textAnchor="middle" className="text-[10px] font-semibold fill-slate-500">AB</text>
            <text x="270" y="110" textAnchor="start" className="text-[10px] font-semibold fill-slate-500">BC</text>
            <text x="160" y="195" textAnchor="middle" className="text-[10px] font-semibold fill-slate-500">CD</text>
            <text x="48" y="105" textAnchor="end" className="text-[10px] font-semibold fill-slate-500">DA</text>
          </svg>

          {/* Chú giải 2 đường chéo */}
          <div className="flex items-center gap-4 mt-2 text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-purple-700 dark:text-purple-300">
              <span className="w-3.5 h-0.5 bg-purple-500 inline-block"></span>
              Đường chéo AC
            </span>
            <span className="flex items-center gap-1.5 text-pink-700 dark:text-pink-300">
              <span className="w-3.5 h-0.5 bg-pink-500 inline-block"></span>
              Đường chéo BD
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TỔNG CÁC GÓC CỦA TỨ GIÁC
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
        <h2 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100">
          Tổng các góc của tứ giác:
        </h2>

        {/* Hiển thị công thức thành một dòng riêng, căn giữa với dấu mũ trên từng chữ cái */}
        <div className="max-w-lg mx-auto py-3.5 px-4 rounded-2xl bg-sky-50/80 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 text-center space-y-2">
          <div className="text-center font-black text-base sm:text-xl tracking-wider text-sky-950 dark:text-sky-100 select-all overflow-x-auto py-1">
            <MathView text="$$\widehat{A} + \widehat{B} + \widehat{C} + \widehat{D} = 360^\circ$$" />
          </div>

          {/* Ngay bên dưới, hiển thị */}
          <div className="text-center text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium pt-1">
            <span>Trong đó: </span>
            <MathView text="$\widehat{A}, \widehat{B}, \widehat{C}, \widehat{D}$" />
            <span> là bốn góc của tứ giác ABCD.</span>
          </div>
        </div>

        {/* SVG HÌNH HỌC CHÍNH XÁC: Minh họa tổng 4 góc của tứ giác bằng 360° */}
        <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-sky-50/40 dark:bg-slate-800/50 border border-sky-100 dark:border-slate-700 max-w-sm mx-auto">
          <svg
            viewBox="0 0 320 220"
            className="w-full max-w-[280px] h-auto drop-shadow-xs select-none"
            aria-label="Hình minh họa tổng 4 góc của tứ giác ABCD bằng 360 độ"
          >
            {/* Tứ giác ABCD */}
            <polygon
              points="70,45 245,40 280,180 40,170"
              fill="rgba(14, 165, 233, 0.08)"
              stroke="#0284c7"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Vòng cung góc A tại (70,45) */}
            <path
              d="M 90,45 A 20 20 0 0 1 65,65"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.5"
            />
            {/* Góc Â: vẽ dấu mũ sắc nét trực tiếp phía trên chữ A */}
            <path d="M 78,57 L 82,53 L 86,57" fill="none" stroke="#b45309" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            <text x="82" y="68" textAnchor="middle" className="text-xs font-bold fill-amber-700 dark:fill-amber-400">A</text>

            {/* Vòng cung góc B tại (245,40) */}
            <path
              d="M 225,40 A 20 20 0 0 0 250,60"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
            />
            {/* Góc B̂: vẽ dấu mũ sắc nét trực tiếp phía trên chữ B */}
            <path d="M 224,56 L 228,52 L 232,56" fill="none" stroke="#047857" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            <text x="228" y="67" textAnchor="middle" className="text-xs font-bold fill-emerald-700 dark:fill-emerald-400">B</text>

            {/* Vòng cung góc C tại (280,180) */}
            <path
              d="M 276,160 A 20 20 0 0 0 260,178"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2.5"
            />
            {/* Góc Ĉ: vẽ dấu mũ sắc nét trực tiếp phía trên chữ C */}
            <path d="M 244,156 L 248,152 L 252,156" fill="none" stroke="#1d4ed8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            <text x="248" y="167" textAnchor="middle" className="text-xs font-bold fill-blue-700 dark:fill-blue-400">C</text>

            {/* Vòng cung góc D tại (40,170) */}
            <path
              d="M 60,171 A 20 20 0 0 0 46,150"
              fill="none"
              stroke="#ec4899"
              strokeWidth="2.5"
            />
            {/* Góc D̂: vẽ dấu mũ sắc nét trực tiếp phía trên chữ D */}
            <path d="M 52,147 L 56,143 L 60,147" fill="none" stroke="#be185d" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            <text x="56" y="158" textAnchor="middle" className="text-xs font-bold fill-pink-700 dark:fill-pink-400">D</text>

            {/* 4 Đỉnh A, B, C, D */}
            <circle cx="70" cy="45" r="4.5" fill="#0284c7" />
            <text x="52" y="38" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">A</text>

            <circle cx="245" cy="40" r="4.5" fill="#0284c7" />
            <text x="255" y="38" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">B</text>

            <circle cx="280" cy="180" r="4.5" fill="#0284c7" />
            <text x="290" y="192" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">C</text>

            <circle cx="40" cy="170" r="4.5" fill="#0284c7" />
            <text x="22" y="180" className="text-xs font-bold fill-slate-900 dark:fill-slate-100">D</text>
          </svg>

          {/* Sửa cả chú thích dưới hình với dấu mũ trên từng chữ cái */}
          <div className="w-full text-center text-xs sm:text-sm font-extrabold text-sky-900 dark:text-sky-200 mt-2 select-all overflow-x-auto">
            <MathView text="$$\widehat{A} + \widehat{B} + \widehat{C} + \widehat{D} = 360^\circ$$" />
          </div>
        </div>
      </section>

    </div>
  );
};
