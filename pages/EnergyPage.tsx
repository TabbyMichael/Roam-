
import React from 'react';
import { translations } from '../translations';

interface EnergyPageProps {
  lang: 'en' | 'sw';
  onInquire?: () => void;
}

const EnergyPage: React.FC<EnergyPageProps> = ({ lang, onInquire }) => {
  const t = translations[lang];

  return (
    <div className="animate-fade-in">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/12/1920/1080" 
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Roam Hub Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 text-white uppercase tracking-tighter">ROAM HUB.</h1>
          <p className="text-xl md:text-2xl text-[#FF5C00] font-bold tracking-widest uppercase">
            {lang === 'en' ? 'Powering the Electric Revolution' : 'Kuwezesha Mapinduzi ya Umeme'}
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-black mb-6 dark:text-white uppercase tracking-tight">
            {lang === 'en' ? 'INTELLIGENT CHARGING INFRASTRUCTURE.' : 'MIUNDOMBINU YA KUCHAJI YENYE AKILI.'}
          </h2>
          <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed font-light">
            {lang === 'en' 
              ? 'Roam Hub is more than just a charging station. It is a modular battery-swapping and charging platform designed for maximum uptime and scalability.'
              : 'Roam Hub ni zaidi ya kituo cha kuchaji tu. Ni jukwaa la kubadilishana betri na kuchaji lililoundwa kwa ajili ya muda mrefu wa kazi na uwezo wa kukua.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="group bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 p-12 rounded-[48px] hover:border-[#FF5C00]/30 transition-all">
              <h3 className="text-2xl font-black mb-6 dark:text-white uppercase tracking-tight">
                {lang === 'en' ? 'BATTERY SWAPPING' : 'UBADILISHAJI WA BETRI'}
              </h3>
              <p className="text-black/50 dark:text-white/50 mb-8 font-light leading-relaxed">
                {lang === 'en' 
                  ? 'Our flagship swap stations allow riders to exchange depleted batteries for fully charged ones in less than 60 seconds.'
                  : 'Vituo vyetu vikuu vya kubadilishana huruhusu waendesha pikipiki kubadilisha betri zilizoisha kwa zile zilizochajiwa kikamilifu chini ya sekunde 60.'}
              </p>
              <div className="aspect-video bg-black/40 rounded-3xl overflow-hidden relative">
                <img src="https://picsum.photos/id/12/600/400" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" alt="Swapping Station" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-6 py-3 bg-[#FF5C00] text-black font-bold rounded-full text-sm uppercase tracking-widest">Fast Swap Tech</div>
                </div>
              </div>
           </div>

           <div className="group bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 p-12 rounded-[48px] hover:border-[#FF5C00]/30 transition-all">
              <h3 className="text-2xl font-black mb-6 dark:text-white uppercase tracking-tight">
                {lang === 'en' ? 'SMART GRID MONITORING' : 'UFUATILIAJI WA MTANDAO SMART'}
              </h3>
              <p className="text-black/50 dark:text-white/50 mb-8 font-light leading-relaxed">
                {lang === 'en' 
                  ? 'Every Roam Hub is connected to our cloud platform, allowing for real-time monitoring of energy consumption and battery health.'
                  : 'Kila Roam Hub imeunganishwa kwenye jukwaa letu la wingu, kuruhusu ufuatiliaji wa wakati halisi wa matumizi ya nishati na afya ya betri.'}
              </p>
              <div className="aspect-video bg-black/40 rounded-3xl overflow-hidden relative">
                <img src="https://picsum.photos/id/123/600/400" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" alt="Cloud Monitoring" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-6 py-3 bg-white text-black font-bold rounded-full text-sm uppercase tracking-widest">IoT Enabled</div>
                </div>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-transparent to-zinc-50 dark:to-zinc-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
           <h2 className="text-4xl font-black mb-12 dark:text-white uppercase tracking-tight">
             {lang === 'en' ? 'PARTNER WITH US' : 'SHIRIKIANA NASI'}
           </h2>
           <p className="max-w-xl text-black/50 dark:text-white/50 mb-12 text-lg font-light">
             {lang === 'en' 
               ? 'Interested in setting up a Roam Hub at your premises? Join our growing energy network across Kenya.'
               : 'Je, unavutiwa na kuanzisha Roam Hub katika eneo lako? Jiunge na mtandao wetu wa nishati unaokua kote Kenya.'}
           </p>
           <button 
             onClick={onInquire}
             className="bg-[#FF5C00] text-black px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform uppercase tracking-widest shadow-xl"
           >
             {lang === 'en' ? 'Inquire about Roam Hub' : 'Uliza kuhusu Roam Hub'}
           </button>
        </div>
      </section>
    </div>
  );
};

export default EnergyPage;
