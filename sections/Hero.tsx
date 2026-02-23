
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { translations } from '../translations';

interface HeroProps {
  lang: 'en' | 'sw';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-[120vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background */}
      <motion.div 
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center grayscale opacity-60 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
        
        {/* Animated Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#FF5C00]/20 blur-[160px] rounded-full animate-pulse-slow"></div>
      </motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-6 py-2 mb-10 border border-white/10 rounded-full bg-white/5 backdrop-blur-xl text-white/80 text-[10px] font-black tracking-[0.4em] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF5C00] animate-ping"></span>
            {lang === 'en' ? 'Pioneering African EV Tech' : 'Teknolojia ya EV ya Afrika'}
          </motion.div>
          
          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[14vw] md:text-[11vw] font-[900] mb-4 tracking-[-0.06em] leading-[0.8] text-white uppercase"
            >
              {t.heroTitle}
            </motion.h1>
            <motion.div
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1.2, delay: 0.5 }}
               className="text-[8vw] md:text-[6vw] font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C4D] leading-none"
            >
              {t.heroSubtitle}
            </motion.div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="max-w-2xl mt-12 text-lg md:text-2xl text-white/60 font-light leading-relaxed tracking-tight"
          >
            {t.heroDesc}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <button className="group relative overflow-hidden bg-[#FF5C00] text-black px-16 py-6 rounded-full font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(255,92,0,0.4)]">
              <span className="relative z-10">{t.discover}</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
            <button className="px-16 py-6 rounded-full font-black text-xl text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-md">
              {t.joinFleet}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Shutter Layers */}
      <motion.div 
        style={{ x: useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]) }}
        className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#FF5C00]"
      ></motion.div>
      <motion.div 
        style={{ x: useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]) }}
        className="absolute bottom-0 right-0 w-1/2 h-1 bg-[#FF5C00]"
      ></motion.div>
    </section>
  );
};

export default Hero;
