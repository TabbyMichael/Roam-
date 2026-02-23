
import React from 'react';
import { IMPACT_METRICS } from '../constants';
import { translations } from '../translations';

// Fix: Added lang prop to ImpactPageProps to resolve TypeScript error in App.tsx
interface ImpactPageProps {
  lang: 'en' | 'sw';
}

const ImpactPage: React.FC<ImpactPageProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="animate-fade-in bg-white dark:bg-black transition-colors duration-500">
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="text-[#FF5C00] font-black text-xs tracking-[0.3em] uppercase mb-4">
            {lang === 'en' ? 'Sustainability & Social Change' : 'Uendelevu na Mabadiliko ya Kijamii'}
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-black dark:text-white uppercase">OUR FOOTPRINT.</h1>
          <p className="max-w-2xl mx-auto text-black/50 dark:text-white/50 text-xl font-light">
            {lang === 'en' 
              ? "We don't just build vehicles; we build a cleaner future for the next generation of Africans."
              : "Hatujengi magari tu; tunajenga mustakabali safi kwa kizazi kijacho cha Waafrika."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {IMPACT_METRICS.map((metric, i) => (
            <div key={i} className="p-12 bg-zinc-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-[48px] text-center transition-all hover:border-[#FF5C00]/20">
              <div className="text-6xl font-black text-[#FF5C00] mb-4 tracking-tighter">
                {metric.value.toLocaleString()}{metric.suffix}
              </div>
              <div className="text-xl font-black mb-2 text-black dark:text-white uppercase tracking-tight">{metric.label}</div>
              <p className="text-black/40 dark:text-white/40 text-sm font-light leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div className="aspect-[4/5] rounded-[60px] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Green Energy" />
           </div>
           <div>
              <h2 className="text-5xl font-black mb-12 dark:text-white uppercase tracking-tighter leading-none">
                {lang === 'en' ? 'CIRCULAR ENERGY ECONOMY.' : 'UCHUMI WA NISHATI WA MVINGU.'}
              </h2>
              <div className="space-y-12">
                <div className="group">
                  <h3 className="text-[#FF5C00] font-black mb-3 uppercase tracking-widest text-sm">Battery Second Life</h3>
                  <p className="text-black/60 dark:text-white/50 leading-relaxed font-light">
                    {lang === 'en'
                      ? 'When Roam batteries reach the end of their vehicle life, we repurpose them for stationary energy storage solutions, powering local clinics and schools.'
                      : 'Wakati betri za Roam zinapofikia mwisho wa maisha ya gari lao, tunazitumia kwa suluhisho la uhifadhi wa nishati tuli, tukipeleka nguvu kwenye zahanati na shule za ndani.'}
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-[#FF5C00] font-black mb-3 uppercase tracking-widest text-sm">Local Sourcing</h3>
                  <p className="text-black/60 dark:text-white/50 leading-relaxed font-light">
                    {lang === 'en'
                      ? 'We prioritize raw materials and components sourced from within the African continent to minimize the carbon footprint of our supply chain.'
                      : 'Tunatoa kipaumbele kwa malighafi na vipengele vilivyopatikana ndani ya bara la Afrika ili kupunguza alama ya kaboni ya mnyororo wetu wa usambazaji.'}
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-[#FF5C00] font-black mb-3 uppercase tracking-widest text-sm">Empowerment</h3>
                  <p className="text-black/60 dark:text-white/50 leading-relaxed font-light">
                    {lang === 'en'
                      ? 'Our fleet financing programs enable riders to own their assets, increasing their daily earnings by up to 50% through fuel and maintenance savings.'
                      : 'Programu zetu za ufadhili wa meli huwezesha waendesha pikipiki kumiliki mali zao, na kuongeza mapato yao ya kila siku kwa hadi 50% kupitia mafuta na akiba ya matengenezo.'}
                  </p>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;
