import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import { MathView } from '../common/MathView';

export const MathLesson20View: React.FC = () => {
  const [zoomImg, setZoomImg] = useState<{ src: string; title: string } | null>(null);

  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-200">
      
      {/* =========================================================================
          1. ĐỌC SỐ LIỆU VÀ SO SÁNH SỐ LIỆU GIỮA CÁC ĐỐI TƯỢNG (BIỂU ĐỒ CỘT)
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          1. Đọc và so sánh số liệu giữa các đối tượng
        </h2>

        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
          <p>
            Khi đọc biểu đồ cột, ta cần quan sát tiêu đề biểu đồ, tên các trục, đơn vị đo và giá trị tương ứng ở đỉnh mỗi cột để so sánh số liệu giữa các đối tượng.
          </p>
          <ul className="space-y-1.5 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Cột cao hơn biểu diễn số liệu lớn hơn; cột thấp hơn biểu diễn số liệu nhỏ hơn.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Từ đó xác định đối tượng có số liệu cao nhất, thấp nhất hoặc chênh lệch giữa các đối tượng.</span>
            </li>
          </ul>
        </div>

        {/* HÌNH 2: Hình 5.10, trang 100 SGK */}
        <div className="pt-2 flex flex-col items-center">
          <div 
            onClick={() => setZoomImg({ src: '/assets/aistudio/image_774b881b.png', title: 'Hình 5.10 (SGK Toán 8)' })}
            className="w-full max-w-lg p-2 sm:p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col items-center cursor-zoom-in group transition hover:border-sky-300"
          >
            <div className="relative w-full flex justify-center">
              <img
                src="/assets/aistudio/image_774b881b.png"
                alt="Hình 5.10 SGK trang 100 - Số lượt bình chọn các món ăn Việt Nam được ưa thích"
                className="w-full h-auto max-h-80 object-contain rounded-xl select-none"
                loading="eager"
              />
              <span className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-slate-900/70 text-white text-[11px] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition sm:flex hidden">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Phóng to</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ĐỌC TỈ LỆ PHẦN TRĂM VÀ PHÂN TÍCH CƠ CẤU TRONG TỔNG THỂ (BIỂU ĐỒ HÌNH QUẠT TRÒN)
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          2. Đọc tỉ lệ phần trăm và phân tích cơ cấu trong tổng thể
        </h2>

        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
          <p>
            Biểu đồ hình quạt tròn biểu diễn tỉ lệ phần trăm của từng thành phần cấu thành trong một tổng thể (toàn bộ hình tròn tương ứng với 100%).
          </p>
          <ul className="space-y-1.5 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Hình quạt có diện tích lớn hơn biểu diễn tỉ lệ phần trăm cao hơn trong tổng thể.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>
                Khi biết tổng số và tỉ lệ phần trăm của một nhóm, ta tính số lượng nhóm đó bằng công thức:
              </span>
            </li>
          </ul>

          <div className="max-w-xs mx-auto py-2 px-4 rounded-xl bg-sky-50 dark:bg-slate-800/80 border border-sky-200 dark:border-slate-700 text-center select-all">
            <MathView text="$$\text{Số lượng} = \frac{\text{Tổng số} \times \text{Tỉ lệ phần trăm}}{100}$$" />
          </div>
        </div>

        {/* HÌNH 3: Hình 5.13, trang 101 SGK */}
        <div className="pt-2 flex flex-col items-center">
          <div 
            onClick={() => setZoomImg({ src: '/assets/aistudio/image_f9123d4e.png', title: 'Hình 5.13 (SGK Toán 8)' })}
            className="w-full max-w-lg p-2 sm:p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col items-center cursor-zoom-in group transition hover:border-sky-300"
          >
            <div className="relative w-full flex justify-center">
              <img
                src="/assets/aistudio/image_f9123d4e.png"
                alt="Hình 5.13 SGK trang 101 - Cơ cấu dân số Việt Nam năm 2010 và năm 2020"
                className="w-full h-auto max-h-80 object-contain rounded-xl select-none"
                loading="eager"
              />
              <span className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-slate-900/70 text-white text-[11px] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition sm:flex hidden">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Phóng to</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. NHẬN XÉT XU HƯỚNG VÀ SO SÁNH SỰ THAY ĐỔI THEO THỜI GIAN (BIỂU ĐỒ ĐOẠN THẲNG)
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          3. Nhận xét xu hướng và so sánh sự thay đổi của đại lượng theo thời gian
        </h2>

        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
          <p>
            Biểu đồ đoạn thẳng thích hợp để theo dõi diễn biến và xu hướng biến đổi của đại lượng qua các mốc thời gian liên tiếp:
          </p>
          <ul className="space-y-1.5 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Đoạn thẳng đi lên từ trái sang phải biểu thị xu hướng tăng; đoạn thẳng đi xuống biểu thị xu hướng giảm.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold shrink-0">•</span>
              <span>Khi có nhiều đường biểu diễn trên cùng một hệ trục, ta có thể so sánh sự biến đổi giữa các đối tượng và tìm các thời điểm có giá trị tương đương (hai đường cắt nhau).</span>
            </li>
          </ul>
        </div>

        {/* HÌNH 4: Hình 5.15, trang 102 SGK */}
        <div className="pt-2 flex flex-col items-center">
          <div 
            onClick={() => setZoomImg({ src: '/assets/aistudio/image_c265666b.png', title: 'Hình 5.15 (SGK Toán 8)' })}
            className="w-full max-w-lg p-2 sm:p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col items-center cursor-zoom-in group transition hover:border-sky-300"
          >
            <div className="relative w-full flex justify-center">
              <img
                src="/assets/aistudio/image_c265666b.png"
                alt="Hình 5.15 SGK trang 102 - Số giờ ban ngày theo tháng tại Canberra và Moscow"
                className="w-full h-auto max-h-80 object-contain rounded-xl select-none"
                loading="eager"
              />
              <span className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-slate-900/70 text-white text-[11px] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition sm:flex hidden">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Phóng to</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CÁC LƯU Ý KHI ĐỌC VÀ DIỄN GIẢI BIỂU ĐỒ
      ========================================================================= */}
      <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3.5">
        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          4. Các lưu ý khi đọc và diễn giải biểu đồ
        </h2>

        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2.5">
          <p>
            Khi đọc và phân tích biểu đồ thống kê, cần kiểm tra kĩ gốc tọa độ, thang đo và cách chia các trục:
          </p>
          <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-amber-950 dark:text-amber-200 text-xs sm:text-sm">
            <span className="font-bold">Lưu ý quan trọng: </span>
            Việc trục đứng không bắt đầu từ 0 có thể làm sự chênh lệch giữa các cột hoặc các mốc số liệu trông lớn hơn nhiều so với thực tế, gây ra ấn tượng thị giác sai lệch.
          </div>
        </div>

        {/* HÌNH 1: Hình 5.9, trang 99 SGK */}
        <div className="pt-2 flex flex-col items-center">
          <div 
            onClick={() => setZoomImg({ src: '/assets/aistudio/image_9a83987e.png', title: 'Hình 5.9 (SGK Toán 8)' })}
            className="w-full max-w-lg p-2 sm:p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col items-center cursor-zoom-in group transition hover:border-sky-300"
          >
            <div className="relative w-full flex justify-center">
              <img
                src="/assets/aistudio/image_9a83987e.png"
                alt="Hình 5.9 SGK trang 99 - Tỉ lệ học sinh khá, giỏi với trục đứng từ 80% và từ 0%"
                className="w-full h-auto max-h-80 object-contain rounded-xl select-none"
                loading="eager"
              />
              <span className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-slate-900/70 text-white text-[11px] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition sm:flex hidden">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Phóng to</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LIGHTBOX MODAL PHÓNG TO HÌNH ẢNH TRÊN ĐIỆN THOẠI & MÁY TÍNH
      ========================================================================= */}
      {zoomImg && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex flex-col items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setZoomImg(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[92vh] bg-white dark:bg-slate-900 rounded-3xl p-3 sm:p-4 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 mb-2">
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                {zoomImg.title}
              </span>
              <button
                type="button"
                onClick={() => setZoomImg(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 cursor-pointer transition"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full flex-1 overflow-auto flex items-center justify-center p-1">
              <img
                src={zoomImg.src}
                alt={zoomImg.title}
                className="max-w-full max-h-[80vh] object-contain rounded-xl select-none"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
