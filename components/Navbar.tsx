
import React, { useState, useEffect } from 'react';
import { translations } from '../translations';

interface NavbarProps {
  onNavigate: (path: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  lang: 'en' | 'sw';
  toggleLang: () => void;
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, theme, toggleTheme, lang, toggleLang, onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 border-b border-black/5 dark:border-white/5' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="flex items-center space-x-2 group">
          <span className="text-2xl font-black tracking-tighter text-black dark:text-white">ROAM</span>
          <div className="w-2 h-2 rounded-full bg-[#FF5C00] group-hover:scale-150 transition-transform"></div>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="text-sm font-bold text-black/70 dark:text-white/70 hover:text-[#FF5C00] transition-colors flex items-center gap-1 uppercase tracking-widest">
              {t.products}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <a href="/motorcycles" onClick={(e) => handleLinkClick(e, '/motorcycles')} className="block px-4 py-3 text-sm text-black dark:text-white hover:bg-[#FF5C00] hover:text-black transition-colors font-bold uppercase tracking-widest">Motorcycles</a>
              <a href="/electric-bus" onClick={(e) => handleLinkClick(e, '/electric-bus')} className="block px-4 py-3 text-sm text-black dark:text-white hover:bg-[#FF5C00] hover:text-black transition-colors font-bold uppercase tracking-widest">Buses</a>
              <a href="/charging" onClick={(e) => handleLinkClick(e, '/charging')} className="block px-4 py-3 text-sm text-black dark:text-white hover:bg-[#FF5C00] hover:text-black transition-colors font-bold uppercase tracking-widest">Charging</a>
            </div>
          </div>

          <a href="/#solutions" onClick={(e) => handleLinkClick(e, '/#solutions')} className="text-sm font-bold text-black/70 dark:text-white/70 hover:text-[#FF5C00] transition-colors uppercase tracking-widest">{t.solutions}</a>
          <a href="/impact" onClick={(e) => handleLinkClick(e, '/impact')} className="text-sm font-bold text-black/70 dark:text-white/70 hover:text-[#FF5C00] transition-colors uppercase tracking-widest">{t.impact}</a>
          <a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="text-sm font-bold text-black/70 dark:text-white/70 hover:text-[#FF5C00] transition-colors uppercase tracking-widest">{t.about}</a>

          <div className="h-4 w-[1px] bg-black/10 dark:bg-white/10"></div>

          <button onClick={toggleLang} className="text-[10px] font-black uppercase tracking-widest text-black/50 dark:text-white/50 hover:text-[#FF5C00]">
            {lang === 'en' ? 'SW' : 'EN'}
          </button>

          <button onClick={toggleTheme} className="p-2 text-black dark:text-white">
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h1M4 12h1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
          
          <button onClick={onOpenModal} className="bg-[#FF5C00] text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
            {t.preOrder}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleLang} className="text-xs font-black">{lang === 'en' ? 'SW' : 'EN'}</button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-black dark:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white dark:bg-black pt-24 px-6">
          <div className="flex flex-col space-y-8 text-center">
            <a href="/motorcycles" onClick={(e) => handleLinkClick(e, '/motorcycles')} className="text-2xl font-black uppercase">Motorcycles</a>
            <a href="/electric-bus" onClick={(e) => handleLinkClick(e, '/electric-bus')} className="text-2xl font-black uppercase">Buses</a>
            <a href="/charging" onClick={(e) => handleLinkClick(e, '/charging')} className="text-2xl font-black uppercase">Charging</a>
            <a href="/#solutions" onClick={(e) => handleLinkClick(e, '/#solutions')} className="text-2xl font-black uppercase">{t.solutions}</a>
            <a href="/impact" onClick={(e) => handleLinkClick(e, '/impact')} className="text-2xl font-black uppercase">{t.impact}</a>
            <a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="text-2xl font-black uppercase">{t.about}</a>
            <button onClick={onOpenModal} className="bg-[#FF5C00] text-black py-5 rounded-3xl text-lg font-black uppercase">{t.preOrder}</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
