import React, { useState, useMemo } from 'react';
import { Search, MapPin, Filter, ArrowUp, ArrowDown, Minus, RefreshCw, X, Download, Check } from 'lucide-react';
import { CropPriceRecord, MANDIS, CROP_CATEGORIES, STATES_LIST, matchHinglishCrop } from '../data/mandiData';

interface LiveMandiTableProps {
  cropPrices: CropPriceRecord[];
  filterMandiId?: string;
  filterStateId?: string;
  searchQuery?: string;
  onSelectForHistory?: (cropId: string, mandiName: string) => void;
}

export const LiveMandiTable: React.FC<LiveMandiTableProps> = ({
  cropPrices,
  filterMandiId = '',
  filterStateId = 'all',
  searchQuery = '',
  onSelectForHistory,
}) => {
  const [stateFilter, setStateFilter] = useState(filterStateId);
  const [mandiFilter, setMandiFilter] = useState(filterMandiId);
  const [categoryFilter, setCategoryFilter] = useState('सभी');
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [sortBy, setSortBy] = useState<'price_desc' | 'price_asc' | 'change_desc' | 'arrivals_desc'>('change_desc');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  React.useEffect(() => {
    if (filterStateId) {
      setStateFilter(filterStateId);
    }
  }, [filterStateId]);

  React.useEffect(() => {
    if (filterMandiId !== undefined) {
      setMandiFilter(filterMandiId);
    }
  }, [filterMandiId]);

  React.useEffect(() => {
    if (searchQuery !== undefined) {
      setSearchTerm(searchQuery);
    }
  }, [searchQuery]);

  const availableMandis = useMemo(() => {
    if (!stateFilter || stateFilter === 'all') return MANDIS;
    return MANDIS.filter((m) => m.stateId === stateFilter);
  }, [stateFilter]);

  const filteredData = useMemo(() => {
    return cropPrices
      .filter((crop) => {
        if (stateFilter && stateFilter !== 'all' && crop.stateId !== stateFilter) {
          return false;
        }
        if (mandiFilter && crop.mandiId !== mandiFilter) {
          return false;
        }
        if (categoryFilter !== 'सभी' && crop.category !== categoryFilter) {
          return false;
        }
        if (searchTerm.trim()) {
          if (!matchHinglishCrop(crop, searchTerm)) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price_desc') return b.price - a.price;
        if (sortBy === 'price_asc') return a.price - b.price;
        if (sortBy === 'change_desc') return b.change - a.change;
        if (sortBy === 'arrivals_desc') return b.arrivals - a.arrivals;
        return 0;
      });
  }, [cropPrices, stateFilter, mandiFilter, categoryFilter, searchTerm, sortBy]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  const handleShareRow = (crop: CropPriceRecord) => {
    const text = `🌾 आज का मंडी भाव: ${crop.cropName} (${crop.variety})\n📍 मंडी: ${crop.mandiHindi} (${crop.stateHindi})\n💰 भाव: ₹${crop.price}/क्विंटल\n📊 बदलाव: ${crop.change >= 0 ? '+' : ''}${crop.change} रु\n⏱️ स्रोत: ई-नाम / एपीएमसी`;
    navigator.clipboard.writeText(text);
    setCopiedId(crop.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setMandiFilter('');
    setStateFilter('all');
    setCategoryFilter('सभी');
  };

  return (
    <section id="all-state-bhav" className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 2 Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
              <span>● आज का दैनिक थोक भाव (Daily Mandi Bhav)</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              📊 सभी राज्यों का मंडी भाव (अनाज, दलहन, तिलहन व सब्जियाँ)
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
              गूगल व सरकारी ई-नाम (e-NAM) तथा कृषि उपज मंडियों के दैनिक थोक सौदे
            </p>
          </div>

          {/* Refresh Action */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-lg transition-colors cursor-pointer"
              title="ताज़ा भाव लोड करें"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>भाव रीफ्रेश करें</span>
            </button>
          </div>
        </div>

        {/* 1. Quick State Filter Scroll Bar (Mobile Friendly) */}
        <div className="mb-4 overflow-x-auto pb-1 scrollbar-none">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-700 mr-1 shrink-0">राज्य:</span>
            {STATES_LIST.map((state) => {
              const isActive = stateFilter === state.id;
              return (
                <button
                  key={state.id}
                  onClick={() => {
                    setStateFilter(state.id);
                    setMandiFilter('');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-emerald-50 text-slate-700 border border-slate-200'
                  }`}
                >
                  {state.nameHindi}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Category & Search Filters Bar */}
        <div className="bg-[#F7FBF5] p-3 sm:p-4 rounded-xl border border-emerald-900/10 mb-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
            
            {/* Category selection */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                फसल या सब्जी श्रेणी
              </label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-2.5 py-2 text-xs sm:text-sm bg-white rounded-lg border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-semibold cursor-pointer"
              >
                {CROP_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'सभी' ? 'सभी फसलें व सब्जियां' : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Mandi selection */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                मंडी चुनें
              </label>
              <select
                value={mandiFilter}
                onChange={(e) => setMandiFilter(e.target.value)}
                className="w-full px-2.5 py-2 text-xs sm:text-sm bg-white rounded-lg border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-medium cursor-pointer"
              >
                <option value="">सभी संबंधित मंडियाँ</option>
                {availableMandis.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.nameHindi} ({m.stateHindi})
                  </option>
                ))}
              </select>
            </div>

            {/* Search input */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                नाम से खोजें
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="मूंग, ग्वार, सरसों, आलू, प्याज..."
                  className="w-full px-2.5 py-2 pr-7 text-xs sm:text-sm bg-white rounded-lg border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-semibold placeholder:text-slate-400"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2 top-2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Sort by */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                क्रमबद्ध (Sort By)
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-2.5 py-2 text-xs sm:text-sm bg-white rounded-lg border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-medium cursor-pointer"
              >
                <option value="change_desc">बदलाव: सबसे बड़ी बढ़त</option>
                <option value="price_desc">भाव: ज्यादा से कम</option>
                <option value="price_asc">भाव: कम से ज्यादा</option>
                <option value="arrivals_desc">आवक: ज्यादा से कम</option>
              </select>
            </div>

          </div>

          {/* Active indicator & reset */}
          {(searchTerm || stateFilter !== 'all' || mandiFilter || categoryFilter !== 'सभी') && (
            <div className="flex items-center justify-between pt-1 border-t border-slate-200 text-xs">
              <span className="text-slate-600">
                दिखाई जा रही प्रविष्टियाँ: <span className="font-bold text-emerald-800">{filteredData.length}</span>
              </span>
              <button
                onClick={handleClearFilters}
                className="text-xs font-bold text-rose-700 hover:underline cursor-pointer"
              >
                ✕ सभी फ़िल्टर साफ़ करें
              </button>
            </div>
          )}
        </div>

        {/* Clean Responsive Table for Mobile & Desktop */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <th className="py-3 px-3 sm:px-4">फसल / सब्जी</th>
                  <th className="py-3 px-3 sm:px-4">मंडी व राज्य</th>
                  <th className="py-3 px-3 sm:px-4 text-right">आज का भाव</th>
                  <th className="py-3 px-3 sm:px-4 text-right">कल से बदलाव</th>
                  <th className="py-3 px-3 sm:px-4 text-right hidden sm:table-cell">न्यूनतम - अधिकतम</th>
                  <th className="py-3 px-3 sm:px-4 text-center">साझा</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-10 text-slate-500">
                      <div className="text-2xl mb-1">🌾</div>
                      <p className="font-bold text-slate-800">कोई फसल या सब्जी नहीं मिली</p>
                      <button
                        onClick={handleClearFilters}
                        className="mt-2 px-3 py-1 bg-emerald-700 text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 cursor-pointer"
                      >
                        फ़िल्टर हटाएं
                      </button>
                    </td>
                  </tr>
                ) : (
                  filteredData.map((crop) => {
                    const isPositive = crop.change > 0;
                    const isNegative = crop.change < 0;

                    return (
                      <tr
                        key={crop.id}
                        className="hover:bg-emerald-50/40 transition-colors"
                      >
                        {/* Crop Name */}
                        <td className="py-3 px-3 sm:px-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xl sm:text-2xl">{crop.icon}</span>
                            <div>
                              <div className="font-bold text-slate-900 leading-tight">
                                {crop.cropName}
                              </div>
                              <div className="text-[11px] text-slate-500">
                                {crop.variety} · <span className="text-emerald-700 font-medium">{crop.category}</span>
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Mandi & State */}
                        <td className="py-3 px-3 sm:px-4 whitespace-nowrap">
                          <div className="font-bold text-slate-800 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-emerald-700 shrink-0" />
                            <span>{crop.mandiHindi}</span>
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {crop.stateHindi}
                          </div>
                        </td>

                        {/* Today's Rate */}
                        <td className="py-3 px-3 sm:px-4 text-right whitespace-nowrap">
                          <div className="text-base sm:text-lg font-black text-slate-950 tabular-numbers">
                            ₹{crop.price.toLocaleString('en-IN')}
                          </div>
                          <div className="text-[10px] text-slate-500">
                            प्रति {crop.unit}
                          </div>
                        </td>

                        {/* Change vs Yesterday */}
                        <td className="py-3 px-3 sm:px-4 text-right whitespace-nowrap">
                          <div
                            className={`inline-flex items-center gap-0.5 font-bold tabular-numbers text-xs px-2 py-0.5 rounded-md ${
                              isPositive
                                ? 'text-emerald-800 bg-emerald-50'
                                : isNegative
                                ? 'text-rose-700 bg-rose-50'
                                : 'text-slate-600 bg-slate-100'
                            }`}
                          >
                            {isPositive && <ArrowUp className="w-3 h-3" />}
                            {isNegative && <ArrowDown className="w-3 h-3" />}
                            {!isPositive && !isNegative && <Minus className="w-3 h-3" />}
                            <span>
                              {isPositive ? `+₹${crop.change}` : isNegative ? `-₹${Math.abs(crop.change)}` : 'समान'}
                            </span>
                          </div>
                        </td>

                        {/* Min - Max */}
                        <td className="py-3 px-3 sm:px-4 text-right whitespace-nowrap hidden sm:table-cell">
                          <div className="text-xs text-slate-700 font-semibold tabular-numbers">
                            ₹{crop.minPrice.toLocaleString('en-IN')} - ₹{crop.maxPrice.toLocaleString('en-IN')}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            आवक: {crop.arrivals} qtl
                          </div>
                        </td>

                        {/* Share */}
                        <td className="py-3 px-3 sm:px-4 text-center whitespace-nowrap">
                          <button
                            onClick={() => handleShareRow(crop)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-slate-100 transition-colors cursor-pointer"
                            title="भाव कॉपी करें"
                          >
                            {copiedId === crop.id ? (
                              <Check className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <Download className="w-4 h-4" />
                            )}
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-1">
            <span>
              कुल सूचीबद्ध: <span className="font-bold text-slate-800">{filteredData.length} जिंस व सब्जियां</span>
            </span>
            <span className="text-[11px] text-slate-400">
              * भाव संबंधित एपीएमसी नीलामी हॉल से सीधे संकलित हैं
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
