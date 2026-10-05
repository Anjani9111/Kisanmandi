import React, { useState, useMemo } from 'react';
import { Search, MapPin, ArrowRight, X, Sparkles, RefreshCw } from 'lucide-react';
import { MANDIS, MandiInfo, STATES_LIST, LIVE_CROP_PRICES, matchHinglishCrop, CropPriceRecord } from '../data/mandiData';

interface HeroProps {
  currentMandi: MandiInfo;
  onSearch: (cropQuery: string, mandiId: string, stateId: string) => void;
  onSelectQuickCrop: (cropName: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentMandi,
  onSearch,
  onSelectQuickCrop,
}) => {
  const [cropInput, setCropInput] = useState('');
  const [selectedStateId, setSelectedStateId] = useState('all');
  const [selectedMandiId, setSelectedMandiId] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Available mandis filtered by selected state
  const availableMandis = useMemo(() => {
    if (!selectedStateId || selectedStateId === 'all') return MANDIS;
    return MANDIS.filter((m) => m.stateId === selectedStateId);
  }, [selectedStateId]);

  // Live matching crops for instant preview as user types
  const matchingSuggestions = useMemo(() => {
    if (!cropInput.trim() || cropInput.trim().length < 2) return [];
    const query = cropInput.trim().toLowerCase();
    
    const matches: CropPriceRecord[] = [];
    const seen = new Set<string>();

    for (const crop of LIVE_CROP_PRICES) {
      if (matchHinglishCrop(crop, query)) {
        const key = `${crop.cropId}-${crop.mandiId}`;
        if (!seen.has(key)) {
          seen.add(key);
          matches.push(crop);
        }
      }
    }
    return matches.slice(0, 6);
  }, [cropInput]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsFocused(false);
    onSearch(cropInput, selectedMandiId, selectedStateId);
    const tableEl = document.getElementById('all-state-bhav');
    if (tableEl) {
      tableEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSuggestionClick = (crop: CropPriceRecord) => {
    setCropInput(crop.cropName);
    setIsFocused(false);
    onSearch(crop.cropName, crop.mandiId, crop.stateId);
    const tableEl = document.getElementById('all-state-bhav');
    if (tableEl) {
      tableEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Popular crops shortcuts
  const popularCrops = [
    { label: '🌿 ग्वार', search: 'ग्वार' },
    { label: '🫘 मूंग', search: 'मूंग' },
    { label: '🌻 सरसों', search: 'सरसों' },
    { label: '🌾 गेहूँ', search: 'गेहूँ' },
    { label: '🧅 प्याज', search: 'प्याज' },
    { label: '🥔 आलू', search: 'आलू' },
    { label: '🍅 टमाटर', search: 'टमाटर' },
    { label: '🧂 जीरा', search: 'जीरा' },
    { label: '🧄 लहसुन', search: 'लहसुन' },
    { label: '🌾 धान 1121', search: 'धान' },
  ];

  return (
    <div className="relative bg-[#14532D] text-white py-8 sm:py-12 border-b border-emerald-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Live Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/50 text-xs font-medium text-emerald-100 mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>आज 05 अक्टूबर 2026</span>
          <span className="text-emerald-400">·</span>
          <span>गूगल व एपीएमसी (APMC) प्रमाणित लाइव मंडी भाव</span>
        </div>

        {/* Clean Large Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2 leading-tight">
          🌾 आपकी फसल व सब्जी का आज क्या भाव है?
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-emerald-100 mb-6 font-normal">
          सभी राज्यों की मंडियों में आज का सही थोक भाव देखें — फसल या सब्जी का नाम लिखें या चुनें।
        </p>

        {/* Clean Mobile-First Search Box */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-2.5 sm:p-3 text-slate-800 border border-emerald-200 relative">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            
            {/* 1. Crop / Vegetable search input */}
            <div className="flex-1 relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
              <input
                type="text"
                value={cropInput}
                onChange={(e) => setCropInput(e.target.value)}
                onFocus={() => setIsFocused(true)}
                placeholder="फसल या सब्जी खोजें — मूंग, ग्वार, सरसों, गेहूँ, आलू, प्याज..."
                className="w-full pl-9 pr-8 py-3 text-sm sm:text-base rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 font-semibold text-slate-900 placeholder:text-slate-400"
              />
              {cropInput && (
                <button
                  type="button"
                  onClick={() => setCropInput('')}
                  className="absolute right-2.5 p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* 2. State selector */}
            <div className="sm:w-44 relative flex items-center">
              <select
                value={selectedStateId}
                onChange={(e) => {
                  setSelectedStateId(e.target.value);
                  setSelectedMandiId('');
                }}
                className="w-full px-3 py-3 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 font-bold text-slate-800 appearance-none cursor-pointer"
              >
                {STATES_LIST.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.nameHindi}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 pointer-events-none text-slate-400 text-xs">▼</div>
            </div>

            {/* 3. Mandi selector */}
            <div className="sm:w-44 relative flex items-center">
              <MapPin className="w-3.5 h-3.5 text-emerald-700 absolute left-2.5 pointer-events-none" />
              <select
                value={selectedMandiId}
                onChange={(e) => setSelectedMandiId(e.target.value)}
                className="w-full pl-8 pr-6 py-3 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 font-medium text-slate-800 appearance-none cursor-pointer"
              >
                <option value="">सभी मंडियाँ</option>
                {availableMandis.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.nameHindi} ({m.stateHindi})
                  </option>
                ))}
              </select>
              <div className="absolute right-2.5 pointer-events-none text-slate-400 text-xs">▼</div>
            </div>

            {/* 4. Action CTA Button */}
            <button
              type="submit"
              className="py-3 px-5 bg-emerald-700 hover:bg-emerald-800 active:scale-[0.98] text-white font-bold text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>आज का भाव देखें</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Instant Auto-Suggest Dropdown */}
          {isFocused && matchingSuggestions.length > 0 && (
            <>
              <div
                className="fixed inset-0 z-20"
                onClick={() => setIsFocused(false)}
              />
              <div className="absolute left-2 right-2 sm:left-3 sm:right-3 top-full mt-1.5 bg-white rounded-xl shadow-xl border border-slate-200 p-1.5 z-30 text-left max-h-72 overflow-y-auto">
                <div className="px-2.5 py-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100 flex justify-between">
                  <span>उपलब्ध फसल व मंडी परिणाम</span>
                  <span className="text-emerald-700">टैप करें</span>
                </div>
                {matchingSuggestions.map((crop) => (
                  <button
                    key={`${crop.id}-${crop.mandiId}`}
                    onClick={() => handleSuggestionClick(crop)}
                    className="w-full px-2.5 py-2 hover:bg-emerald-50 rounded-lg flex items-center justify-between transition-colors text-slate-800 cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{crop.icon}</span>
                      <div>
                        <div className="font-bold text-slate-900 text-xs sm:text-sm">
                          {crop.cropName} ({crop.variety})
                        </div>
                        <div className="text-[11px] text-slate-500">
                          📍 {crop.mandiHindi} ({crop.stateHindi})
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs sm:text-sm font-extrabold text-slate-950 tabular-numbers">
                        ₹{crop.price.toLocaleString('en-IN')}/{crop.unit}
                      </div>
                      <div className="text-[10px] text-emerald-700 font-bold">
                        {crop.change >= 0 ? `+₹${crop.change}` : `-₹${Math.abs(crop.change)}`}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Quick Shortcuts */}
          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center flex-wrap gap-1.5 text-xs text-left">
            <span className="text-slate-500 font-semibold text-[11px] mr-1">त्वरित चयन:</span>
            {popularCrops.map((item) => (
              <button
                key={item.search}
                type="button"
                onClick={() => {
                  setCropInput(item.search);
                  onSelectQuickCrop(item.search);
                  handleSubmit();
                }}
                className="px-2 py-0.5 rounded-md bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-semibold transition-colors cursor-pointer border border-emerald-200/50 text-[11px]"
              >
                {item.label}
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
