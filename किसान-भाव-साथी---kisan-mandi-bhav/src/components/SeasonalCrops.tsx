import React, { useState } from 'react';
import { CloudRain, Snowflake, Sun, Calendar, ArrowRight } from 'lucide-react';
import { SEASONAL_DATA, SeasonalGroup, LIVE_CROP_PRICES } from '../data/mandiData';

interface SeasonalCropsProps {
  onSelectCropAction: (cropName: string) => void;
}

export const SeasonalCrops: React.FC<SeasonalCropsProps> = ({ onSelectCropAction }) => {
  const [activeSeason, setActiveSeason] = useState<'kharif' | 'rabi' | 'zayed'>('rabi');

  const currentGroup = SEASONAL_DATA.find((g) => g.seasonKey === activeSeason) || SEASONAL_DATA[1];

  const getSeasonIcon = (key: string) => {
    switch (key) {
      case 'kharif':
        return <CloudRain className="w-5 h-5 text-sky-600" />;
      case 'rabi':
        return <Snowflake className="w-5 h-5 text-emerald-600" />;
      case 'zayed':
        return <Sun className="w-5 h-5 text-amber-500" />;
      default:
        return null;
    }
  };

  return (
    <section id="seasonal-section" className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 4 Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 mb-2">
            <span>🌱 सीजनल कृषि संदर्शिका (Seasonal Crops)</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            सीजन के अनुसार प्रमुख फसलें व सब्जियाँ
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            खरीफ, रबी और जायद चक्र की प्रमुख फसलें, बुवाई-कटाई का समय और वर्तमान सामान्य भाव दायरा
          </p>
        </div>

        {/* Season Selector Tabs */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {SEASONAL_DATA.map((season) => {
            const isActive = activeSeason === season.seasonKey;
            return (
              <button
                key={season.seasonKey}
                onClick={() => setActiveSeason(season.seasonKey)}
                className={`flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-emerald-50 text-slate-700 border border-slate-200'
                }`}
              >
                <span className="text-base">{season.emoji}</span>
                <span>{season.title}</span>
              </button>
            );
          })}
        </div>

        {/* Clean Info Header Card (NO IMAGES as requested) */}
        <div className="bg-[#F7FBF5] rounded-2xl border border-emerald-900/10 p-4 sm:p-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                {getSeasonIcon(currentGroup.seasonKey)}
                <h3 className="text-lg font-bold text-slate-900">
                  {currentGroup.title} ({currentGroup.badge})
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                {currentGroup.description}
              </p>
            </div>

            {/* Sowing and Harvest Pills */}
            <div className="flex items-center gap-2 text-xs shrink-0">
              <div className="bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <span className="text-slate-400 block text-[10px]">बुवाई समय:</span>
                <span className="font-bold text-slate-800">🌱 {currentGroup.sowingPeriod}</span>
              </div>
              <div className="bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <span className="text-slate-400 block text-[10px]">कटाई/आवक:</span>
                <span className="font-bold text-slate-800">🚜 {currentGroup.harvestPeriod}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Crops Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {currentGroup.crops.map((c) => {
            const liveMatch = LIVE_CROP_PRICES.find((lp) => lp.cropId === c.cropId);

            return (
              <div
                key={c.name}
                className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs hover:border-emerald-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-1.5">
                    <h4 className="text-base font-bold text-slate-900">
                      {c.name}
                    </h4>
                    {liveMatch && (
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                        आज: ₹{liveMatch.price}
                      </span>
                    )}
                  </div>

                  <div className="text-xs text-slate-700 font-semibold mb-2">
                    थोक रेंज: <span className="font-bold text-slate-900 tabular-numbers">{c.typicalPriceRange}</span>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    {c.keyFact}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button
                    onClick={() => onSelectCropAction(c.name)}
                    className="w-full py-1.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-bold rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>आज का भाव देखें</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
