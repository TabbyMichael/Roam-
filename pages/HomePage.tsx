
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Hero from '../sections/Hero';
import Impact from '../sections/Impact';
import Products from '../sections/Products';
import Solutions from '../sections/Solutions';
import MobilityAssistant from '../sections/MobilityAssistant';
import NetworkMap from '../sections/NetworkMap';

interface HomePageProps {
  onNavigate: (path: string) => void;
  lang: 'en' | 'sw';
}

// Fix: Added Variants type and cast ease as a tuple [number, number, number, number] 
// to prevent TypeScript from inferring it as number[], which is incompatible with framer-motion's Easing type.
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  }
};

const HomePage: React.FC<HomePageProps> = ({ onNavigate, lang }) => {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-500 overflow-x-hidden">
      <Hero lang={lang} />
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
        <Impact lang={lang} />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
        <Products onNavigate={onNavigate} lang={lang} />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
        <NetworkMap lang={lang} />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
        <Solutions lang={lang} />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
        <MobilityAssistant lang={lang} />
      </motion.div>
    </div>
  );
};

export default HomePage;
