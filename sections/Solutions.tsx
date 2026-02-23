
import React from 'react';
import { translations } from '../translations';

interface SolutionsProps {
  lang: 'en' | 'sw';
}

const Solutions: React.FC<SolutionsProps> = ({ lang }) => {
  const t = translations[lang];
  const solutions = [
    { title: 'Fleet Management', icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7' },
    { title: 'Public Transport', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
    { title: 'Financing', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
  ];

  return (
    <section id="solutions" className="py-24 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <div className="text-[#FF5C00] font-black text-xs tracking-[0.3em] uppercase mb-4">Ecosystem</div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-black dark:text-white leading-[0.9]">{t.beyondTitle}</h2>
            <p className="text-black/50 dark:text-white/50 text-2xl font-light mb-12 leading-relaxed">
              {t.beyondDesc}
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-center p-8 bg-zinc-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-[32px] hover:bg-zinc-100 dark:hover:bg-white/[0.05] transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-[#FF5C00]/10 flex items-center justify-center text-[#FF5C00] mr-8 group-hover:bg-[#FF5C00] group-hover:text-black transition-colors">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={s.icon} />
                    </svg>
                  </div>
                  <span className="text-xl font-black text-black dark:text-white uppercase tracking-tight">{s.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group reveal">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C00]/20 to-purple-600/20 blur-[100px] group-hover:blur-[120px] transition-all opacity-40"></div>
            <div className="relative aspect-square rounded-[60px] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
              <img src="https://picsum.photos/id/122/800/800" alt="Roam Ecosystem" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white/95 dark:bg-black/90 backdrop-blur-2xl p-10 rounded-[40px] border border-black/10 dark:border-white/10 text-center max-w-xs shadow-2xl animate-pulse-slow">
                    <div className="text-5xl font-black mb-3 text-[#FF5C00]">99%</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-black/60 dark:text-white/60 font-black">Network Uptime</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
