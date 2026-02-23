
import React from 'react';
import { translations } from '../translations';

// Fix: Added lang prop to AboutPageProps to resolve TypeScript error in App.tsx
interface AboutPageProps {
  lang: 'en' | 'sw';
}

const AboutPage: React.FC<AboutPageProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="animate-fade-in bg-white dark:bg-black min-h-screen transition-colors duration-500">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Team collaboration"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-white uppercase">WE ARE ROAM.</h1>
          <p className="text-xl md:text-2xl text-[#FF5C00] font-bold tracking-widest uppercase">
            {lang === 'en' ? 'Pioneering Sustainable Transport' : 'Uanzishaji wa Usafiri Endelevu'}
          </p>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <h2 className="text-4xl font-black leading-tight dark:text-white uppercase tracking-tighter">
              {lang === 'en' ? 'DRIVING CHANGE FROM NAIROBI TO THE WORLD.' : 'KUENDESHA MABADILIKO KUTOKA NAIROBI KWENDA ULIMWENGUNI.'}
            </h2>
            <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed font-light">
              {lang === 'en' 
                ? 'Founded with the belief that electric mobility is the key to Africa\'s sustainable development, Roam (formerly Opibus) has grown from a visionary startup to a continental leader in electric vehicle technology.'
                : 'Ilianzishwa kwa imani kwamba usafiri wa umeme ni ufunguo wa maendeleo endelevu ya Afrika, Roam (zamani Opibus) imekua kutoka mwanzo wa maono hadi kiongozi wa bara katika teknolojia ya gari la umeme.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-black/5 dark:border-white/5">
              <h3 className="text-[#FF5C00] text-xl font-black mb-4 uppercase tracking-wider">Mission</h3>
              <p className="text-black/50 dark:text-white/50 font-light text-sm leading-relaxed">
                {lang === 'en' 
                  ? 'To make electric vehicles accessible to everyone in Africa, creating a cleaner and more efficient future.'
                  : 'Kufanya magari ya umeme kufikiwa na kila mtu barani Afrika, kutengeneza mustakabali safi na wenye ufanisi zaidi.'}
              </p>
            </div>
            <div className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-black/5 dark:border-white/5">
              <h3 className="text-[#FF5C00] text-xl font-black mb-4 uppercase tracking-wider">Vision</h3>
              <p className="text-black/50 dark:text-white/50 font-light text-sm leading-relaxed">
                {lang === 'en' 
                  ? 'To become the backbone of Africa\'s transport infrastructure through modular and scalable electric solutions.'
                  : 'Kuwa uti wa mgongo wa miundombinu ya usafiri wa Afrika kupitia suluhisho za umeme za msimu na zinazoweza kupanuka.'}
              </p>
            </div>
            <div className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-black/5 dark:border-white/5">
              <h3 className="text-[#FF5C00] text-xl font-black mb-4 uppercase tracking-wider">Values</h3>
              <p className="text-black/50 dark:text-white/50 font-light text-sm leading-relaxed">
                {lang === 'en' 
                  ? 'Local innovation, radical transparency, and a relentless focus on solving real-world mobility problems.'
                  : 'Ubunifu wa ndani, uwazi wa kimsingi, na msisitizo usioyumba wa kutatua matatizo ya usafiri wa ulimwengu wa kweli.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50 dark:bg-zinc-950 border-y border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-16 tracking-tight dark:text-white uppercase">
            {lang === 'en' ? 'OUR GLOBAL PARTNERS' : 'WASHIRIKA WETU WA KIMATAIFA'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 dark:opacity-60">
            {/* Logos placeholder */}
            <div className="h-16 bg-black/10 dark:bg-white/10 rounded-2xl flex items-center justify-center font-black text-xs text-black dark:text-white uppercase tracking-widest">UNEP</div>
            <div className="h-16 bg-black/10 dark:bg-white/10 rounded-2xl flex items-center justify-center font-black text-xs text-black dark:text-white uppercase tracking-widest">GOV OF KENYA</div>
            <div className="h-16 bg-black/10 dark:bg-white/10 rounded-2xl flex items-center justify-center font-black text-xs text-black dark:text-white uppercase tracking-widest">SIEMENS</div>
            <div className="h-16 bg-black/10 dark:bg-white/10 rounded-2xl flex items-center justify-center font-black text-xs text-black dark:text-white uppercase tracking-widest">ABB</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
