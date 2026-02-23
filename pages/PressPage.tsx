
import React from 'react';
import { translations } from '../translations';

// Fix: Added lang prop to PressPageProps to resolve TypeScript error in App.tsx
interface PressPageProps {
  lang: 'en' | 'sw';
}

const PressPage: React.FC<PressPageProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="animate-fade-in bg-white dark:bg-black transition-colors duration-500 min-h-screen">
      <section className="py-32 max-w-7xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-16 text-black dark:text-white uppercase">PRESS CENTER.</h1>
        
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-2xl font-black mb-8 tracking-[0.2em] uppercase border-b border-black/10 dark:border-white/10 pb-6 text-black/40 dark:text-white/40">Latest News</h2>
            {[
              { date: lang === 'en' ? 'June 12, 2024' : 'Juni 12, 2024', title: lang === 'en' ? 'Roam Partners with Local Financing to Accelerate EV Adoption in Kenya' : 'Roam Inashirikiana na Ufadhili wa Ndani ili Kuharakisha Kupitishwa kwa EV nchini Kenya', source: 'The EastAfrican' },
              { date: lang === 'en' ? 'May 28, 2024' : 'Mei 28, 2024', title: lang === 'en' ? 'Roam Rapid: Africa’s Largest Electric Bus Fleet Hits Nairobi Streets' : 'Roam Rapid: Meli Kubwa ya Mabasi ya Umeme barani Afrika Yaingia Mitaani mwa Nairobi', source: 'Reuters' },
              { date: lang === 'en' ? 'April 15, 2024' : 'Aprili 15, 2024', title: lang === 'en' ? 'Roam Raises $24M in Series A Funding for Production Expansion' : 'Roam Inapata $24M katika Ufadhili wa Msururu A kwa Upanuzi wa Uzalishaji', source: 'TechCrunch' }
            ].map((news, i) => (
              <div key={i} className="group cursor-pointer border-b border-black/5 dark:border-white/5 pb-10">
                <div className="text-[#FF5C00] text-xs font-black uppercase tracking-[0.3em] mb-4">{news.date}</div>
                <h3 className="text-3xl font-black mb-4 dark:text-white group-hover:text-[#FF5C00] transition-colors leading-tight tracking-tight">{news.title}</h3>
                <div className="text-black/30 dark:text-white/30 text-sm font-light italic">{news.source}</div>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            <div className="p-12 bg-zinc-50 dark:bg-zinc-900 rounded-[48px] border border-black/5 dark:border-white/5">
              <h2 className="text-2xl font-black mb-6 tracking-tight dark:text-white uppercase">MEDIA ASSETS</h2>
              <p className="text-black/40 dark:text-white/40 text-sm mb-10 font-light leading-relaxed">
                {lang === 'en' ? 'Download high-resolution photos, brand logos, and fact sheets for media use.' : 'Pakua picha zenye azimio la juu, nembo za chapa, na karatasi za ukweli kwa matumizi ya media.'}
              </p>
              <button className="w-full bg-black dark:bg-white text-white dark:text-black py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#FF5C00] dark:hover:bg-[#FF5C00] transition-colors">Download Kit (.ZIP)</button>
            </div>

            <div className="p-12 bg-[#FF5C00]/5 dark:bg-[#FF5C00]/10 rounded-[48px] border border-[#FF5C00]/20">
              <h2 className="text-2xl font-black mb-6 tracking-tight text-[#FF5C00] uppercase">CONTACT PRESS</h2>
              <p className="text-black/60 dark:text-white/60 text-sm mb-6 font-light">
                {lang === 'en' ? 'For interviews and media inquiries:' : 'Kwa mahojiano na maswali ya media:'}
              </p>
              <a href="mailto:press@roam-electric.com" className="text-xl font-black block mb-2 dark:text-white hover:text-[#FF5C00] transition-colors tracking-tight">press@roam-electric.com</a>
              <p className="text-black/30 dark:text-white/30 text-[10px] font-black uppercase tracking-widest mt-6">Average response time: 24 hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressPage;
