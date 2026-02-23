
import React from 'react';
import { translations } from '../translations';

interface FooterProps {
  onNavigate: (path: string) => void;
  lang: 'en' | 'sw';
}

const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const t = translations[lang];
  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-8 cursor-pointer" onClick={(e) => handleLinkClick(e, '/')}>
              <span className="text-2xl font-black tracking-tighter text-white">ROAM</span>
              <div className="w-2 h-2 rounded-full bg-[#FF5C00]"></div>
            </div>
            <p className="text-white/40 font-light leading-relaxed pr-8">
              {t.footerTagline}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">{t.products}</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="/motorcycles" onClick={(e) => handleLinkClick(e, '/motorcycles')} className="hover:text-[#FF5C00] transition-colors">Roam Air</a></li>
              <li><a href="/electric-bus" onClick={(e) => handleLinkClick(e, '/electric-bus')} className="hover:text-[#FF5C00] transition-colors">Roam Rapid</a></li>
              <li><a href="/roam-move" onClick={(e) => handleLinkClick(e, '/roam-move')} className="hover:text-[#FF5C00] transition-colors">Roam Move</a></li>
              <li><a href="/charging" onClick={(e) => handleLinkClick(e, '/charging')} className="hover:text-[#FF5C00] transition-colors">Roam Hub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t.about}</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="hover:text-[#FF5C00] transition-colors">{t.about}</a></li>
              <li><a href="/impact" onClick={(e) => handleLinkClick(e, '/impact')} className="hover:text-[#FF5C00] transition-colors">{t.impact}</a></li>
              <li><a href="/careers" onClick={(e) => handleLinkClick(e, '/careers')} className="hover:text-[#FF5C00] transition-colors">{t.careers}</a></li>
              <li><a href="/press" onClick={(e) => handleLinkClick(e, '/press')} className="hover:text-[#FF5C00] transition-colors">Press Kit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t.stayUpdated}</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-[#FF5C00]/50 text-white"
              />
              <button className="absolute right-1 top-1 bottom-1 px-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <div className="text-xs text-white/30">
            {t.rights}
          </div>
          <div className="flex space-x-6 text-white/30 text-xs uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
