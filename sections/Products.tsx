
import React from 'react';
import { PRODUCTS } from '../constants';
import { translations } from '../translations';
import OptimizedImage from '../components/OptimizedImage';
import { motion } from 'framer-motion';

interface ProductsProps {
  onNavigate: (path: string) => void;
  lang: 'en' | 'sw';
}

const Products: React.FC<ProductsProps> = ({ onNavigate, lang }) => {
  const t = translations[lang];

  const handleProductClick = (category: string) => {
    switch (category) {
      case 'Motorcycles': onNavigate('/motorcycles'); break;
      case 'Buses': onNavigate('/electric-bus'); break;
      case 'Energy': onNavigate('/charging'); break;
      default: onNavigate('/'); break;
    }
  };

  return (
    <section id="products" className="py-32 bg-zinc-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#FF5C00] font-black text-xs tracking-[0.4em] uppercase mb-6 flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-[#FF5C00]"></span>
              {lang === 'en' ? 'Product Spotlight' : 'Mwangaza wa Bidhaa'}
            </motion.div>
            <h2 className="text-[12vw] md:text-[8vw] font-[900] tracking-[-0.05em] text-white leading-[0.85] uppercase">
              {t.lineupTitle}
            </h2>
          </div>
          <div className="flex gap-4">
             <button className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#FF5C00] hover:text-black transition-all group">
               <svg className="w-6 h-6 rotate-180 group-active:scale-75 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
             </button>
             <button className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#FF5C00] hover:text-black transition-all group">
               <svg className="w-6 h-6 group-active:scale-75 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
              onClick={() => handleProductClick(product.category)}
            >
              {/* Product Background Text */}
              <div className="absolute top-10 left-0 text-white/5 font-black text-8xl pointer-events-none select-none -translate-x-12 group-hover:translate-x-0 transition-transform duration-700">
                {product.name.split(' ')[1]}
              </div>

              <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden mb-12 bg-zinc-900 border border-white/5 shadow-2xl transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-[#FF5C00]/10">
                <OptimizedImage 
                  src={product.image} 
                  alt={product.name} 
                  width={800}
                  className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100"
                />
                
                {/* Overlay UI */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                <div className="absolute top-10 left-10">
                  <span className="px-5 py-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                    {product.category}
                  </span>
                </div>

                <div className="absolute bottom-12 left-12 right-12 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-5xl font-[900] text-white tracking-tighter mb-4 uppercase">{product.name}</h3>
                  <div className="h-1 w-20 bg-[#FF5C00] transition-all group-hover:w-full duration-700"></div>
                </div>
              </div>
              
              <div className="px-8">
                <p className="text-white/40 mb-12 font-light text-xl leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-2 gap-10 mb-12">
                  {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="border-l border-white/10 pl-6">
                      <div className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black mb-2">{key}</div>
                      <div className="text-2xl font-black text-white tracking-tight">{value as string}</div>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-[#FF5C00] hover:gap-8 transition-all">
                  Full Specifications
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
