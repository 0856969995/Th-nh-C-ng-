import React from 'react';
import { MathView } from '../common/MathView';

export const MathLesson16View: React.FC = () => {
  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-200">
      
      {/* =========================================================================
          1. ĐỊNH NGHĨA
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          1. Định nghĩa
        </h2>

        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
          <p>
            Đường trung bình của tam giác là đoạn thẳng nối trung điểm hai cạnh của tam giác.
          </p>
          <div className="p-3 rounded-xl bg-sky-50/70 dark:bg-slate-800/60 border border-sky-100 dark:border-slate-700">
            <span className="font-bold text-sky-950 dark:text-sky-200">Ví dụ: </span>
            <span>Trong tam giác ABC, nếu D là trung điểm của AB, E là trung điểm của AC thì DE là đường trung bình của tam giác ABC.</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. TÍNH CHẤT
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          2. Tính chất
        </h2>

        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            Đường trung bình của tam giác song song với cạnh thứ ba và bằng nửa cạnh ấy.
          </p>
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <p className="font-semibold text-slate-800 dark:text-slate-200">
            Với D, E lần lượt là trung điểm của AB, AC, ta có:
          </p>

          <div className="max-w-xs mx-auto py-2.5 px-4 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 text-center space-y-1.5 select-all">
            <MathView text="$$DE \parallel BC$$" />
            <MathView text="$$DE = \frac{1}{2} BC$$" />
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-1 text-center">
            Trong đó: DE là đường trung bình; BC là cạnh thứ ba của tam giác.
          </p>
        </div>

        {/* HÌNH MINH HỌA HÌNH HỌC CHÍNH XÁC: ĐƯỜNG TRUNG BÌNH */}
        <div className="pt-2 flex flex-col items-center">
          <div className="w-full max-w-xs sm:max-w-sm p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col items-center">
            <svg
              viewBox="0 0 320 215"
              className="w-full max-w-[280px] h-auto select-none overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Hình minh họa đường trung bình DE của tam giác ABC"
            >
              <defs>
                <linearGradient id="midlineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {/* Tam giác ABC */}
              <polygon
                points="150,24 40,180 270,180"
                fill="url(#midlineGrad)"
                stroke="#0369a1"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              {/* Đoạn đường trung bình DE (nối trung điểm AB và AC: song song tuyệt đối với đáy BC vì cùng y=102) */}
              <line
                x1="95"
                y1="102"
                x2="210"
                y2="102"
                stroke="#0284c7"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Hai ký hiệu gạch nhỏ giống nhau trên AD và DB để thể hiện rõ AD = DB (1 vạch nhỏ mỗi đoạn) */}
              <line x1="118" y1="59" x2="127" y2="67" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="63" y1="137" x2="72" y2="145" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" />

              {/* Hai ký hiệu gạch nhỏ giống nhau trên AE và EC để thể hiện rõ AE = EC (2 vạch nhỏ mỗi đoạn) */}
              <g stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round">
                <line x1="174" y1="67" x2="184" y2="59" />
                <line x1="177" y1="70" x2="187" y2="62" />

                <line x1="234" y1="145" x2="244" y2="137" />
                <line x1="237" y1="148" x2="247" y2="140" />
              </g>

              {/* Mũi tên thể hiện DE song song BC */}
              <g fill="#0284c7">
                <polygon points="155,99 161,102 155,105" />
              </g>
              <g fill="#0369a1">
                <polygon points="158,177 164,180 158,183" />
              </g>

              {/* Các điểm A, B, C, D, E */}
              <circle cx="150" cy="24" r="3.5" fill="#0369a1" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="40" cy="180" r="3.5" fill="#0369a1" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="270" cy="180" r="3.5" fill="#0369a1" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="95" cy="102" r="3.5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="210" cy="102" r="3.5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />

              {/* Tên các nhãn điểm A, B, C, D, E: bố trí thoáng, không đè lên đường vẽ */}
              <text x="150" y="14" textAnchor="middle" className="text-xs font-black fill-slate-900 dark:fill-slate-100">A</text>
              <text x="24" y="190" textAnchor="middle" className="text-xs font-black fill-slate-900 dark:fill-slate-100">B</text>
              <text x="286" y="190" textAnchor="middle" className="text-xs font-black fill-slate-900 dark:fill-slate-100">C</text>
              <text x="78" y="106" textAnchor="middle" className="text-xs font-black fill-sky-700 dark:fill-sky-300">D</text>
              <text x="226" y="106" textAnchor="middle" className="text-xs font-black fill-sky-700 dark:fill-sky-300">E</text>
            </svg>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ĐỊNH LÍ ĐẢO VỀ ĐƯỜNG TRUNG BÌNH
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          3. Định lí đảo về đường trung bình
        </h2>

        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
          <p>
            Trong một tam giác, nếu một đường thẳng đi qua trung điểm của một cạnh và song song với cạnh thứ hai thì đi qua trung điểm của cạnh thứ ba.
          </p>
          <div className="p-3 rounded-xl bg-sky-50/70 dark:bg-slate-800/60 border border-sky-100 dark:border-slate-700 space-y-1">
            <p>
              <span className="font-bold text-sky-950 dark:text-sky-200">Ví dụ: </span>
              <span>Trong tam giác ABC, nếu D là trung điểm của AB, đường thẳng đi qua D và song song với BC, cắt AC tại E, thì E là trung điểm của AC.</span>
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
              Trong đó: D, E lần lượt là trung điểm của AB, AC.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
