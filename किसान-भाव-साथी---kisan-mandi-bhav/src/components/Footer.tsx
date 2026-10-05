import React from 'react';
import { Phone, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer-section" className="bg-[#14532D] text-emerald-100 pt-8 pb-6 border-t border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-emerald-800/80">
          
          {/* Col 1: Brand & Commitment */}
          <div>
            <div className="flex items-center gap-2 text-white font-black text-lg mb-2">
              <span>🌾</span>
              <span>किसान भाव साथी</span>
            </div>
            <p className="text-emerald-200 text-xs leading-relaxed mb-3">
              “आज का सही भाव, किसान के हाथ में” — देश के सभी राज्यों की मंडियों में अनाज, दलहन, तिलहन व सब्जियों का प्रमाणित दैनिक थोक भाव।
            </p>
            <div className="text-xs text-emerald-300 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>ई-नाम (e-NAM) व एपीएमसी आधिकारिक स्रोत</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              त्वरित लिंक
            </h4>
            <ul className="space-y-1.5 text-xs text-emerald-200">
              <li>
                <button
                  onClick={() => scrollTo('all-state-bhav')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  📊 सभी राज्यों का आज का मंडी भाव
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('monthly-history')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  📈 पिछले साल का भाव (मासिक तालिका)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('seasonal-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  🌱 सीजन के अनुसार प्रमुख फसलें
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Farmer Helpline */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              किसान हेल्पलाइन (Toll-Free)
            </h4>
            <div className="bg-emerald-900/70 p-3 rounded-xl border border-emerald-700/60">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-800 text-emerald-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-emerald-300">किसान कॉल सेंटर (भारत सरकार)</div>
                  <div className="text-base font-extrabold text-white tabular-numbers">
                    1800-180-1551
                  </div>
                </div>
              </div>
              <div className="text-[11px] text-emerald-200/90 mt-1.5">
                सुबह 6:00 बजे से रात 10:00 बजे तक सभी भारतीय भाषाओं में निःशुल्क सेवा।
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-emerald-300/80 gap-2 text-center sm:text-left">
          <div>
            © 2026 किसान भाव साथी. गूगल व एपीएमसी मंडी भाव से सिंक किया गया।
          </div>
          <div>
            भारतीय किसान भाइयों की समृद्धि हेतु समर्पित 🌾
          </div>
        </div>

      </div>
    </footer>
  );
};
