
import React from 'react';
import { IMPACT_METRICS } from '../constants';
import { translations } from '../translations';
import OptimizedImage from '../components/OptimizedImage';
import { motion } from 'framer-motion';

interface ImpactProps {
  lang: 'en' | 'sw';
}

const Impact: React.FC<ImpactProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="impact" className="py-32 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Metric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
          {IMPACT_METRICS.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="relative p-12 glass-panel rounded-[60px] overflow-hidden"
            >
              <div className="absolute -bottom-10 -right-10 text-[120px] font-black text-white/[0.03] leading-none pointer-events-none">
                0{idx + 1}
              </div>
              <div className="relative z-10">
                <div className="text-[#FF5C00] text-7xl font-black mb-6 tracking-[-0.05em] flex items-end gap-1">
                  {metric.value.toLocaleString()}
                  <span className="text-3xl mb-3">{metric.suffix}</span>
                </div>
                <div className="text-xl font-black mb-6 text-white uppercase tracking-tight">{metric.label}</div>
                <p className="text-white/40 font-light text-lg leading-relaxed max-w-[240px]">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Origin Story Large Block */}
        <div className="relative p-12 md:p-32 rounded-[100px] bg-zinc-900 border border-white/5 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" 
              alt="Industrial background"
              className="w-full h-full object-cover opacity-20 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-transparent"></div>
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 bg-[#FF5C00] text-black font-black text-[10px] tracking-[0.4em] uppercase rounded-full mb-10">
                The Origin
              </div>
              <h2 className="text-[10vw] lg:text-[7vw] font-[900] mb-10 tracking-[-0.06em] text-white leading-[0.8] uppercase">
                {t.impactTitle}
              </h2>
              <p className="text-white/50 text-2xl font-light leading-relaxed mb-12 max-w-xl">
                {t.impactDesc}
              </p>
              <div className="flex flex-wrap gap-4">
                {['Robot-Welded', 'Solar Powered', 'Local Talent'].map(tag => (
                  <span key={tag} className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[80px] overflow-hidden shadow-[0_0_100px_rgba(255,92,0,0.15)] border border-white/10"
            >
              <OptimizedImage 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                alt="Roam Facility" 
                width={1200}
                className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12">
                 <div className="text-white font-black text-3xl tracking-tighter uppercase mb-2">Innovation Hub</div>
                 <div className="text-[#FF5C00] text-xs font-black uppercase tracking-[0.4em]">Nairobi, Kenya</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
