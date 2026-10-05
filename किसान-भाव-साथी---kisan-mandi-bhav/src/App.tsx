/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MANDIS, LIVE_CROP_PRICES, MandiInfo } from './data/mandiData';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveMandiTable } from './components/LiveMandiTable';
import { MonthlyPriceHistoryTable } from './components/MonthlyPriceHistoryTable';
import { SeasonalCrops } from './components/SeasonalCrops';
import { Footer } from './components/Footer';

export default function App() {
  const [currentMandi] = useState<MandiInfo>(() => MANDIS[0]);
  const [tableFilterMandi, setTableFilterMandi] = useState<string>('');
  const [tableFilterState, setTableFilterState] = useState<string>('all');
  const [tableSearchQuery, setTableSearchQuery] = useState<string>('');

  const handleHeroSearch = (query: string, mandiId: string, stateId: string) => {
    setTableSearchQuery(query);
    setTableFilterMandi(mandiId);
    if (stateId) setTableFilterState(stateId);
  };

  const handleQuickCropSelect = (cropName: string) => {
    setTableSearchQuery(cropName);
    const el = document.getElementById('all-state-bhav');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSeasonalCropSelect = (cropName: string) => {
    setTableSearchQuery(cropName);
    const el = document.getElementById('all-state-bhav');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FBF5] text-slate-800 font-sans">
      
      {/* Top Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* SECTION 1: Hero Section */}
        <Hero
          currentMandi={currentMandi}
          onSearch={handleHeroSearch}
          onSelectQuickCrop={handleQuickCropSelect}
        />

        {/* SECTION 2: All State Bhav for All Sabji ya Anaj in Table */}
        <LiveMandiTable
          cropPrices={LIVE_CROP_PRICES}
          filterMandiId={tableFilterMandi}
          filterStateId={tableFilterState}
          searchQuery={tableSearchQuery}
        />

        {/* SECTION 3: Last Year Bhav According to Monthly Table */}
        <MonthlyPriceHistoryTable />

        {/* SECTION 4: Seasonal Crops Section */}
        <SeasonalCrops
          onSelectCropAction={handleSeasonalCropSelect}
        />
      </main>

      {/* SECTION 5: Footer */}
      <Footer />

    </div>
  );
}
