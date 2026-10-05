import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -60;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="text-lg sm:text-xl font-black tracking-tight text-emerald-900 flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <span className="text-xl">🌾</span>
              <span>किसान भाव साथी</span>
            </a>
          </div>

          {/* Zone 2: 3-4 Clean text navigation links corresponding to sections */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-bold text-slate-700">
            <button
              onClick={() => scrollTo('all-state-bhav')}
              className="hover:text-emerald-700 transition-colors cursor-pointer py-1"
            >
              आज का भाव (सभी राज्य)
            </button>
            <button
              onClick={() => scrollTo('monthly-history')}
              className="hover:text-emerald-700 transition-colors cursor-pointer py-1"
            >
              मासिक भाव तालिका (गत वर्ष)
            </button>
            <button
              onClick={() => scrollTo('seasonal-section')}
              className="hover:text-emerald-700 transition-colors cursor-pointer py-1"
            >
              सीजनल फसलें
            </button>
          </nav>

          {/* Zone 3: Quick Action */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollTo('footer-section')}
              className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 cursor-pointer"
            >
              हेल्पलाइन 1800-180-1551
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
              aria-label="मेनू खोलें"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 text-sm font-semibold">
          <button
            onClick={() => scrollTo('all-state-bhav')}
            className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-emerald-50 text-slate-800"
          >
            📊 1. आज का भाव (सभी राज्य)
          </button>
          <button
            onClick={() => scrollTo('monthly-history')}
            className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-emerald-50 text-slate-800"
          >
            📈 2. मासिक भाव तालिका (गत वर्ष)
          </button>
          <button
            onClick={() => scrollTo('seasonal-section')}
            className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-emerald-50 text-slate-800"
          >
            🌱 3. सीजनल फसलें
          </button>
          <button
            onClick={() => scrollTo('footer-section')}
            className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-emerald-50 text-slate-800"
          >
            📞 4. हेल्पलाइन व संपर्क
          </button>
        </div>
      )}
    </header>
  );
};
