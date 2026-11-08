import React, { useState } from 'react';
import { Sprout, Droplets, Star, Sparkles, Plus, Award } from 'lucide-react';
import { StudentProfile, GardenPlant } from '../../types';
import { StorageService } from '../../services/storage';
import confetti from 'canvas-confetti';

interface GardenTabProps {
  profile: StudentProfile;
}

export const GardenTab: React.FC<GardenTabProps> = ({ profile }) => {
  const [plants, setPlants] = useState<GardenPlant[]>(() => StorageService.getGardenPlants());
  const [selectedPlantId, setSelectedPlantId] = useState<string>(plants[0]?.id || 'plant_toan');
  const [actionNotice, setActionNotice] = useState<string>('');

  const currentPlant = plants.find((p) => p.id === selectedPlantId) || plants[0];

  const handleWater = () => {
    if (profile.waterDrops < 10) {
      setActionNotice('Bạn cần ít nhất 10 giọt nước để tưới cây! Hãy đọc bài hoặc làm câu hỏi để tích lũy thêm nhé.');
      setTimeout(() => setActionNotice(''), 3000);
      return;
    }

    const res = StorageService.waterPlant(currentPlant.id, 10);
    if (res.success) {
      setPlants(StorageService.getGardenPlants());
      if (res.harvested) {
        setActionNotice('🎉 Cây đã ra quả tri thức! Bạn được thu hoạch và nhận thưởng +30 sao!');
        try {
          confetti({
            particleCount: 60,
            spread: 80,
            origin: { y: 0.6 },
          });
        } catch {}
      } else if (res.leveledUp) {
        setActionNotice('🌿 Cây đã phát triển lên giai đoạn mới!');
        try {
          confetti({
            particleCount: 30,
            spread: 50,
            origin: { y: 0.6 },
          });
        } catch {}
      } else {
        setActionNotice('💧 Đã tưới 10 giọt nước cho cây!');
      }
      setTimeout(() => setActionNotice(''), 3000);
    }
  };

  const getStageInfo = (stage: number) => {
    switch (stage) {
      case 1:
        return { name: 'Hạt giống', desc: 'Hạt mầm tri thức đang nảy mầm', emoji: '🌱' };
      case 2:
        return { name: 'Chồi non', desc: 'Chồi non đang vươn lên đón ánh sáng', emoji: '🌿' };
      case 3:
        return { name: 'Cây non', desc: 'Cây phát triển cành lá khỏe khoắn', emoji: '🪴' };
      case 4:
        return { name: 'Đơm hoa', desc: 'Những bông hoa tri thức đang bung nở', emoji: '🌸' };
      case 5:
        return { name: 'Kết quả tri thức', desc: 'Cây trĩu quả tri thức sẵn sàng thu hoạch!', emoji: '🌳🍎' };
      default:
        return { name: 'Cây trồng', desc: 'Đang chăm sóc', emoji: '🌱' };
    }
  };

  const currentStageInfo = getStageInfo(currentPlant?.stage || 1);
  const progressPercent = Math.min(100, Math.round(((currentPlant?.waterPoints || 0) / (currentPlant?.requiredPoints || 100)) * 100));

  return (
    <div className="space-y-4 animate-in fade-in duration-150 pb-6">
      <div>
        <h1 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
          Khu vườn tri thức
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Tưới nước chăm sóc cây học tập bằng điểm thưởng tích lũy từ bài học
        </p>
      </div>

      {/* Garden Resources Strip */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="p-3 rounded-2xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-center">
          <Droplets className="w-5 h-5 text-sky-500 fill-sky-500 mx-auto mb-1" />
          <span className="block font-extrabold text-base text-sky-900 dark:text-sky-100 tabular-nums">
            {profile.waterDrops}
          </span>
          <span className="text-[10px] text-slate-500 font-medium">Giọt nước</span>
        </div>

        <div className="p-3 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-center">
          <Star className="w-5 h-5 text-amber-500 fill-amber-500 mx-auto mb-1" />
          <span className="block font-extrabold text-base text-amber-900 dark:text-amber-100 tabular-nums">
            {profile.totalStars}
          </span>
          <span className="text-[10px] text-slate-500 font-medium">Sao tích lũy</span>
        </div>

        <div className="p-3 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center">
          <Sprout className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
          <span className="block font-extrabold text-base text-emerald-900 dark:text-emerald-100 tabular-nums">
            {currentPlant?.totalHarvests || 0}
          </span>
          <span className="text-[10px] text-slate-500 font-medium">Lần thu hoạch</span>
        </div>
      </div>

      {/* Plant Selection Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
        {plants.map((p) => {
          const isSelected = p.id === selectedPlantId;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedPlantId(p.id)}
              className={`flex-1 min-h-[38px] px-2 py-1 rounded-xl text-xs font-bold transition truncate cursor-pointer ${
                isSelected
                  ? 'bg-white dark:bg-slate-900 text-sky-700 dark:text-sky-300 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {p.subjectId === 'toan' ? 'Cây Toán' : 'Cây Tiếng Anh'}
            </button>
          );
        })}
      </div>

      {/* Main Tree Canvas Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-b from-sky-50 via-white to-emerald-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border border-sky-100 dark:border-slate-800 text-center space-y-4 shadow-sm relative overflow-hidden">
        
        {/* Soft background glow */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-sky-200/30 blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-2">
          <span className="text-xs font-extrabold text-sky-700 dark:text-sky-400 uppercase tracking-wider">
            {currentPlant.name}
          </span>

          {/* Plant Visual Art */}
          <div className="w-32 h-32 mx-auto flex items-center justify-center relative">
            <div className="text-6xl select-none transition-transform hover:scale-105 duration-300 filter drop-shadow-md">
              {currentStageInfo.emoji}
            </div>
          </div>

          <div className="space-y-0.5">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
              Giai đoạn {currentPlant.stage}: {currentStageInfo.name}
            </h2>
            <p className="text-xs text-slate-500">
              {currentStageInfo.desc}
            </p>
          </div>

          {/* Watering Growth Progress Bar */}
          <div className="max-w-xs mx-auto space-y-1.5 pt-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Độ tươi tốt</span>
              <span className="font-extrabold text-sky-600 tabular-nums">
                {currentPlant.waterPoints}/{currentPlant.requiredPoints} 💧 ({progressPercent}%)
              </span>
            </div>

            <div className="w-full h-2.5 rounded-full bg-slate-200/70 dark:bg-slate-700 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-400 to-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Action Notice feedback */}
          {actionNotice && (
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-sky-200 text-xs font-bold text-sky-800 dark:text-sky-200 animate-in fade-in max-w-xs mx-auto">
              {actionNotice}
            </div>
          )}

          {/* Water Button */}
          <div className="pt-2">
            <button
              onClick={handleWater}
              className="min-h-[46px] px-6 rounded-2xl bg-sky-500 hover:bg-sky-600 active:scale-95 text-white font-extrabold text-xs shadow-md shadow-sky-500/20 transition flex items-center justify-center gap-2 mx-auto cursor-pointer"
            >
              <Droplets className="w-4 h-4 fill-white" />
              <span>Tưới nước cho cây (-10 💧)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Guide Card */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
        <span className="font-bold text-slate-900 dark:text-slate-100 block">
          🌱 Cách kiếm thêm giọt nước và nuôi lớn cây:
        </span>
        <ul className="space-y-1 list-disc list-inside">
          <li>Hoàn thành 1 bài đọc chuẩn bị: <strong>+15 giọt nước</strong></li>
          <li>Mỗi câu hỏi trắc nghiệm làm đúng: <strong>+5 giọt nước</strong></li>
          <li>Ôn tập và sửa đúng câu hỏi từng sai: <strong>+10 giọt nước</strong></li>
          <li>Khi cây lớn đến Giai đoạn 5: thu hoạch quả tri thức được thưởng <strong>+30 sao</strong>!</li>
        </ul>
      </div>
    </div>
  );
};
