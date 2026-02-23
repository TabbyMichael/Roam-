
import React from 'react';
import { translations } from '../translations';

interface MotorcyclesPageProps {
  lang: 'en' | 'sw';
}

const MotorcyclesPage: React.FC<MotorcyclesPageProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="animate-fade-in">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/10/1920/1080" 
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Roam Air Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 text-white">ROAM AIR.</h1>
          <p className="text-xl md:text-2xl text-[#FF5C00] font-bold tracking-widest uppercase">
            {lang === 'en' ? 'The Next Generation Electric Motorcycle' : 'Kizazi Kipya cha Pikipiki ya Umeme'}
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black mb-8 dark:text-white">
            {lang === 'en' ? 'BUILT FOR EVERY TERRAIN.' : 'IMEJENGWA KWA KILA ARDHI.'}
          </h2>
          <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed mb-8">
            {lang === 'en' 
              ? 'Roam Air is a versatile electric motorcycle designed for high performance in all environments—whether you\'re navigating urban traffic or rural tracks.'
              : 'Roam Air ni pikipiki ya umeme inayofaa iliyoundwa kwa ajili ya utendaji wa hali ya juu katika mazingira yote—iwe unatembea kwenye msongamano wa magari mjini au njia za vijijini.'}
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 bg-zinc-100 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10">
              <div className="text-3xl font-black text-[#FF5C00] mb-2">180 KM</div>
              <div className="text-xs uppercase tracking-widest opacity-50 dark:text-white/50">
                {lang === 'en' ? 'Range with Dual Battery' : 'Masafa na Betri Mbili'}
              </div>
            </div>
            <div className="p-6 bg-zinc-100 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10">
              <div className="text-3xl font-black text-[#FF5C00] mb-2">90 KM/H</div>
              <div className="text-xs uppercase tracking-widest opacity-50 dark:text-white/50">
                {lang === 'en' ? 'Top Speed' : 'Kasi ya Juu'}
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[40px] overflow-hidden aspect-[4/3] shadow-2xl">
          <img src="https://picsum.photos/id/10/800/600" className="w-full h-full object-cover" alt="Roam Air Product" />
        </div>
      </section>

      <section className="bg-zinc-50 dark:bg-zinc-950 py-24 border-y border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-black mb-12 text-center tracking-tight dark:text-white uppercase">
            {lang === 'en' ? 'TECHNICAL SPECIFICATIONS' : 'VIPIMO VYA KITAALAMU'}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
             {[
               { label: lang === 'en' ? 'Battery Capacity' : 'Uwezo wa Betri', value: '3.24 kWh per battery' },
               { label: lang === 'en' ? 'Charging Time' : 'Muda wa Kuchaji', value: lang === 'en' ? '4 hours (Standard Outlet)' : 'Masaa 4 (Plagi ya Kawaida)' },
               { label: lang === 'en' ? 'Motor Power' : 'Nguvu ya Moto', value: '3000W Nominal' },
               { label: lang === 'en' ? 'Climbing Angle' : 'Pembe ya Kupanda', value: lang === 'en' ? '15 Degrees' : 'Digrii 15' },
               { label: lang === 'en' ? 'Brakes' : 'Breki', value: 'CBS (Combined Braking System)' },
               { label: lang === 'en' ? 'Weight' : 'Uzito', value: lang === 'en' ? '135 kg (incl. batteries)' : 'Kilo 135 (pamoja na betri)' }
             ].map((spec, i) => (
               <div key={i} className="flex justify-between items-center py-4 border-b border-black/10 dark:border-white/10">
                 <span className="text-black/40 dark:text-white/40 text-sm uppercase tracking-widest font-bold">{spec.label}</span>
                 <span className="font-bold dark:text-white">{spec.value}</span>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MotorcyclesPage;
