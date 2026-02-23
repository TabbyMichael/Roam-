
import React from 'react';
import { translations } from '../translations';

// Fix: Added lang prop to CareersPageProps to resolve TypeScript error in App.tsx
interface CareersPageProps {
  lang: 'en' | 'sw';
}

const CareersPage: React.FC<CareersPageProps> = ({ lang }) => {
  const t = translations[lang];
  const values = [
    { title: lang === 'en' ? 'Innovation first' : 'Ubunifu kwanza', desc: lang === 'en' ? 'We solve unique challenges with creative engineering.' : 'Tunatatua changamoto za kipekee kwa uhandisi wa ubunifu.' },
    { title: lang === 'en' ? 'Inclusive culture' : 'Utamaduni jumuishi', desc: lang === 'en' ? 'We thrive on the diversity of our global team.' : 'Tunastawi kwa utofauti wa timu yetu ya kimataifa.' },
    { title: lang === 'en' ? 'Growth mindset' : 'Mtazamo wa ukuaji', desc: lang === 'en' ? 'Every day is a learning opportunity in a fast-paced environment.' : 'Kila siku ni fursa ya kujifunza katika mazingira ya haraka.' }
  ];

  return (
    <div className="animate-fade-in bg-white dark:bg-black transition-colors duration-500 min-h-screen">
      <section className="py-32 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-black dark:text-white uppercase">JOIN THE MISSION.</h1>
        <p className="max-w-xl mx-auto text-black/50 dark:text-white/50 text-xl font-light mb-12">
          {lang === 'en' ? 'We are looking for builders, dreamers, and doers to help us electrify Africa.' : 'Tunatafuta wajenzi, waotaji, na watendaji wa kutusaidia kuweka umeme barani Afrika.'}
        </p>
        <button className="bg-[#FF5C00] text-black px-12 py-5 rounded-2xl font-black text-lg hover:shadow-[0_20px_40px_rgba(255,92,0,0.3)] transition-all transform hover:-translate-y-1">
          {t.viewOpenings}
        </button>
      </section>

      <section className="py-24 bg-zinc-50 dark:bg-zinc-950 border-y border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="group p-10 bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-[40px] transition-all hover:border-[#FF5C00]/20">
                <div className="w-14 h-14 rounded-2xl bg-[#FF5C00]/10 flex items-center justify-center text-[#FF5C00] mb-8 group-hover:bg-[#FF5C00] group-hover:text-black transition-colors">
                  <span className="font-black text-xl">{i + 1}</span>
                </div>
                <h3 className="text-2xl font-black mb-4 dark:text-white uppercase tracking-tight">{v.title}</h3>
                <p className="text-black/40 dark:text-white/40 leading-relaxed font-light text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-12 tracking-tighter dark:text-white uppercase">CURRENT OPENINGS</h2>
        <div className="space-y-6">
          {[
            { role: 'Embedded Software Engineer', loc: 'Nairobi, Kenya', dept: 'Engineering' },
            { role: 'Senior Product Designer', loc: 'Remote / Nairobi', dept: 'Product' },
            { role: 'Fleet Operations Manager', loc: 'Mombasa, Kenya', dept: 'Operations' },
            { role: 'Financial Controller', loc: 'Nairobi, Kenya', dept: 'Finance' }
          ].map((job, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-10 bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-[40px] hover:border-[#FF5C00]/30 transition-all cursor-pointer group">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#FF5C00] font-black mb-2">{job.dept}</div>
                <h3 className="text-3xl font-black dark:text-white tracking-tight">{job.role}</h3>
                <div className="text-black/30 dark:text-white/30 text-sm mt-2 font-light">{job.loc}</div>
              </div>
              <div className="mt-8 md:mt-0 flex items-center text-black dark:text-white font-black uppercase tracking-[0.2em] text-xs group-hover:text-[#FF5C00] transition-colors">
                Apply Now 
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
