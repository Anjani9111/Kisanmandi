import React, { useState } from 'react';
import { Calendar, ArrowUp, ArrowDown, Minus, TrendingUp, Layers } from 'lucide-react';
import { MONTHLY_PAST_YEAR_DATA, MonthlyRecord } from '../data/mandiData';

export const MonthlyPriceHistoryTable: React.FC = () => {
  const [selectedCropKey, setSelectedCropKey] = useState<string>('guar');

  const availableCrops = [
    { key: 'guar', name: 'ग्वार (गुवार)', icon: '🌿' },
    { key: 'moong', name: 'मूंग दाल', icon: '🫘' },
    { key: 'wheat', name: 'गेहूँ', icon: '🌾' },
    { key: 'mustard', name: 'सरसों (रायड़ा)', icon: '🌻' },
    { key: 'onion', name: 'प्याज (कांदा)', icon: '🧅' },
    { key: 'potato', name: 'आलू', icon: '🥔' },
  ];

  const monthRows: MonthlyRecord[] = MONTHLY_PAST_YEAR_DATA[selectedCropKey] || MONTHLY_PAST_YEAR_DATA['guar'];

  // Calculate annual metrics
  const prices = monthRows.map((m) => m.modalPrice);
  const avgPrice = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  const highMonth = monthRows.find((m) => m.modalPrice === maxPrice)?.monthName || '';
  const lowMonth = monthRows.find((m) => m.modalPrice === minPrice)?.monthName || '';

  return (
    <section id="monthly-history" className="py-8 sm:py-12 bg-[#F7FBF5] border-t border-b border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 3 Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
              <span>📅 वार्षिक भाव तालिका (Monthly History Table)</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              📈 पिछले साल का भाव — मासिक तालिका (माहवार भाव)
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
              जनवरी से दिसंबर तक हर महीने का औसत थोक भाव, न्यूनतम-अधिकतम दायरा और बाजार की स्थिति
            </p>
          </div>

          {/* Crop Selector Tabs for Mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {availableCrops.map((c) => {
              const isSelected = selectedCropKey === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setSelectedCropKey(c.key)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'bg-white hover:bg-emerald-50 text-slate-700 border border-slate-200'
                  }`}
                >
                  <span>{c.icon}</span>
                  <span>{c.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Annual Quick Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-5">
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-semibold text-slate-500 block">वार्षिक औसत भाव</span>
            <div className="text-base sm:text-xl font-bold text-slate-900 tabular-numbers mt-0.5">
              ₹{avgPrice.toLocaleString('en-IN')}<span className="text-xs font-normal text-slate-500">/qtl</span>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-semibold text-emerald-700 block">साल का उच्चतम भाव</span>
            <div className="text-base sm:text-xl font-bold text-emerald-950 tabular-numbers mt-0.5">
              ₹{maxPrice.toLocaleString('en-IN')}
            </div>
            <span className="text-[10px] text-slate-400 block truncate">{highMonth}</span>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-semibold text-rose-700 block">साल का न्यूनतम भाव</span>
            <div className="text-base sm:text-xl font-bold text-rose-950 tabular-numbers mt-0.5">
              ₹{minPrice.toLocaleString('en-IN')}
            </div>
            <span className="text-[10px] text-slate-400 block truncate">{lowMonth}</span>
          </div>

          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-semibold text-slate-500 block">भाव का दायरा (Spread)</span>
            <div className="text-base sm:text-xl font-bold text-slate-900 tabular-numbers mt-0.5">
              ₹{(maxPrice - minPrice).toLocaleString('en-IN')}
            </div>
            <span className="text-[10px] text-slate-400 block">उतार-चढ़ाव अंतर</span>
          </div>
        </div>

        {/* Monthly Data Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <th className="py-3 px-3 sm:px-4">महीना</th>
                  <th className="py-3 px-3 sm:px-4 text-right">औसत भाव (₹/क्विंटल)</th>
                  <th className="py-3 px-3 sm:px-4 text-right">न्यूनतम - अधिकतम</th>
                  <th className="py-3 px-3 sm:px-4 text-right">पिछले माह से</th>
                  <th className="py-3 px-3 sm:px-4 text-right hidden sm:table-cell">मासिक आवक</th>
                  <th className="py-3 px-3 sm:px-4 hidden md:table-cell">मंडी स्थिति / टिप्पणी</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {monthRows.map((row, index) => {
                  const isUp = row.changeVsPrev > 0;
                  const isDown = row.changeVsPrev < 0;

                  return (
                    <tr
                      key={row.monthName}
                      className="hover:bg-emerald-50/40 transition-colors"
                    >
                      {/* Month Name */}
                      <td className="py-3 px-3 sm:px-4 whitespace-nowrap">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          <span>{row.monthName}</span>
                        </div>
                      </td>

                      {/* Modal Price */}
                      <td className="py-3 px-3 sm:px-4 text-right whitespace-nowrap">
                        <span className="text-sm sm:text-base font-black text-slate-950 tabular-numbers">
                          ₹{row.modalPrice.toLocaleString('en-IN')}
                        </span>
                      </td>

                      {/* Min - Max */}
                      <td className="py-3 px-3 sm:px-4 text-right whitespace-nowrap">
                        <span className="text-xs text-slate-700 font-semibold tabular-numbers">
                          ₹{row.minPrice} - ₹{row.maxPrice}
                        </span>
                      </td>

                      {/* Change vs Prev Month */}
                      <td className="py-3 px-3 sm:px-4 text-right whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-0.5 text-xs font-bold tabular-numbers px-1.5 py-0.5 rounded ${
                            isUp
                              ? 'text-emerald-800 bg-emerald-50'
                              : isDown
                              ? 'text-rose-700 bg-rose-50'
                              : 'text-slate-600 bg-slate-100'
                          }`}
                        >
                          {isUp && <ArrowUp className="w-3 h-3" />}
                          {isDown && <ArrowDown className="w-3 h-3" />}
                          {!isUp && !isDown && <Minus className="w-3 h-3" />}
                          <span>
                            {isUp ? `+₹${row.changeVsPrev}` : isDown ? `-₹${Math.abs(row.changeVsPrev)}` : 'समान'}
                          </span>
                        </span>
                      </td>

                      {/* Monthly Arrivals */}
                      <td className="py-3 px-3 sm:px-4 text-right whitespace-nowrap hidden sm:table-cell">
                        <span className="font-semibold text-slate-800 tabular-numbers">
                          {row.arrivals.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-slate-400 block">क्विंटल</span>
                      </td>

                      {/* Market Situation Note */}
                      <td className="py-3 px-3 sm:px-4 hidden md:table-cell text-xs text-slate-600">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 font-medium">
                          {row.statusNote}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Insight Note */}
          <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-1">
            <span>
              💡 <strong className="text-slate-700">माहवार निष्कर्ष:</strong> आमतौर पर कटाई के महीने में आवक बढ़ने से भाव कम रहता है तथा 3 माह बाद भाव में सर्वाधिक उछाल आता है।
            </span>
            <span className="text-[11px] text-slate-400">
              वार्षिक APMC थोक डेटा
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
