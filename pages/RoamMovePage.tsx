
import React from 'react';
import { translations } from '../translations';

// Fix: Added lang prop to RoamMovePageProps to resolve TypeScript error in App.tsx
interface RoamMovePageProps {
  lang: 'en' | 'sw';
}

const RoamMovePage: React.FC<RoamMovePageProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="animate-fade-in bg-white dark:bg-black transition-colors duration-500">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-50 grayscale"
            alt="Roam Move Bus"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 text-white">ROAM MOVE.</h1>
          <p className="text-xl md:text-2xl text-[#FF5C00] font-bold tracking-widest uppercase">
            {lang === 'en' ? 'The Agile Urban Electric Bus' : 'Basi la Umeme la Mijini lenye Weledi'}
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8 leading-tight dark:text-white uppercase tracking-tighter">
              {lang === 'en' ? 'TAILORED FOR CITY COMMUTING.' : 'ILIYOUNDWA KWA AJILI YA USAFIRI WA MJINI.'}
            </h2>
            <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed mb-8 font-light">
              {lang === 'en' 
                ? 'Roam Move is optimized for urban environments with frequent stops and tight navigation. It offers the perfect balance of passenger capacity and maneuverability for modern African cities.'
                : 'Roam Move imeboreshwa kwa ajili ya mazingira ya mijini yenye vituo vya mara kwa mara na urambazaji mgumu. Inatoa usawa kamili wa uwezo wa abiria na ujanja kwa miji ya kisasa ya Afrika.'}
            </p>
            <div className="grid grid-cols-2 gap-6">
               <div className="p-8 bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/10 rounded-[32px]">
                  <div className="text-[#FF5C00] text-4xl font-black mb-1">51</div>
                  <div className="text-[10px] uppercase tracking-widest font-black opacity-40 dark:text-white/40">
                    {lang === 'en' ? 'Passengers' : 'Abiria'}
                  </div>
               </div>
               <div className="p-8 bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/10 rounded-[32px]">
                  <div className="text-[#FF5C00] text-4xl font-black mb-1">200 KM</div>
                  <div className="text-[10px] uppercase tracking-widest font-black opacity-40 dark:text-white/40">
                    {lang === 'en' ? 'City Range' : 'Masafa ya Mjini'}
                  </div>
               </div>
            </div>
          </div>
          <div className="aspect-video rounded-[48px] overflow-hidden shadow-2xl border border-black/5 dark:border-white/10">
            <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="City Bus" />
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 dark:bg-zinc-950 py-24 border-y border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight dark:text-white uppercase">
              {lang === 'en' ? 'WHY ROAM MOVE?' : 'KWANINI ROAM MOVE?'}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: lang === 'en' ? 'Lower Operating Costs' : 'Gharama za Chini za Uendeshaji', desc: lang === 'en' ? 'Up to 50% reduction in maintenance and fuel costs compared to diesel buses.' : 'Hadi 50% ya upunguzaji wa gharama za matengenezo na mafuta ikilinganishwa na mabasi ya dizeli.' },
              { title: lang === 'en' ? 'Silent Operation' : 'Uendeshaji wa Kimya', desc: lang === 'en' ? 'Improve city noise levels and provide a calmer ride for passengers.' : 'Boresha viwango vya kelele jijini na upe safari tulivu kwa abiria.' },
              { title: lang === 'en' ? 'Fast Charging' : 'Kuchaji Haraka', desc: lang === 'en' ? 'Get back on the road quickly with integrated DC fast charging technology.' : 'Rudi barabarani haraka na teknolojia jumuishi ya kuchaji haraka ya DC.' }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 rounded-[32px] bg-[#FF5C00]/10 flex items-center justify-center text-[#FF5C00] mx-auto mb-8 group-hover:bg-[#FF5C00] group-hover:text-black transition-all">
                   <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-xl font-black mb-4 dark:text-white uppercase tracking-tight">{item.title}</h3>
                <p className="text-black/50 dark:text-white/40 font-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoamMovePage;
