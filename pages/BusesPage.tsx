
import React from 'react';
import { translations } from '../translations';

// Fix: Added lang prop to BusesPageProps to resolve TypeScript error in App.tsx
interface BusesPageProps {
  lang: 'en' | 'sw';
}

const BusesPage: React.FC<BusesPageProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="animate-fade-in bg-white dark:bg-black transition-colors duration-500">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/11/1920/1080" 
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Roam Rapid Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 text-white">ELECTRIC BUS.</h1>
          <p className="text-xl md:text-2xl text-[#FF5C00] font-bold tracking-widest uppercase">
            {lang === 'en' ? 'Sustainable Mass Transit for Modern Cities' : 'Usafiri Endelevu kwa Miji ya Kisasa'}
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div className="rounded-[40px] overflow-hidden aspect-video shadow-2xl order-2 lg:order-1">
            <img src="https://picsum.photos/id/11/1200/800" className="w-full h-full object-cover" alt="Roam Rapid" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-black mb-8 leading-tight dark:text-white uppercase tracking-tighter">
              {lang === 'en' ? 'ROAM RAPID: THE FUTURE OF COMMUTING.' : 'ROAM RAPID: MUSTAKABALI WA USAFIRI.'}
            </h2>
            <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed mb-8 font-light">
              {lang === 'en' 
                ? 'Roam Rapid is specifically designed for high-capacity urban mass transit. With zero emissions and ultra-low operating costs, it is the ideal solution for city authorities and private operators looking to modernize their fleet.'
                : 'Roam Rapid imeundwa mahususi kwa ajili ya usafiri wa umati wa mijini wenye uwezo mkubwa. Bila uzalishaji wa moshi na gharama za chini sana za uendeshaji, ni suluhisho bora kwa mamlaka za jiji na waendeshaji binafsi wanaotaka kuboresha meli zao.'}
            </p>
            <ul className="space-y-4">
              {[
                lang === 'en' ? 'Zero Direct Emissions' : 'Hakuna Uzalishaji wa Moja kwa Moja',
                lang === 'en' ? 'Reduced Noise Pollution' : 'Kupunguza Uchafuzi wa Kelele',
                lang === 'en' ? 'High Passenger Comfort with A/C' : 'Faraja ya Juu ya Abiria na A/C',
                lang === 'en' ? 'Fast DC Charging Capability' : 'Uwezo wa Kuchaji Haraka wa DC'
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF5C00] flex items-center justify-center">
                    <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="font-bold text-black dark:text-white uppercase tracking-tight text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-10 bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl">
              <div className="text-5xl font-black text-[#FF5C00] mb-4">360 KM</div>
              <p className="text-[10px] uppercase tracking-widest font-black opacity-40 dark:text-white/40">
                {lang === 'en' ? 'Range on Single Charge' : 'Masafa kwa Kuchaji Mara Moja'}
              </p>
            </div>
            <div className="p-10 bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl">
              <div className="text-5xl font-black text-[#FF5C00] mb-4">90</div>
              <p className="text-[10px] uppercase tracking-widest font-black opacity-40 dark:text-white/40">
                {lang === 'en' ? 'Passenger Capacity' : 'Uwezo wa Abiria'}
              </p>
            </div>
            <div className="p-10 bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl">
              <div className="text-5xl font-black text-[#FF5C00] mb-4">1.5 HRS</div>
              <p className="text-[10px] uppercase tracking-widest font-black opacity-40 dark:text-white/40">
                {lang === 'en' ? 'Charge Time (DC Fast)' : 'Muda wa Kuchaji (DC Haraka)'}
              </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default BusesPage;
