
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MotorcyclesPage from './pages/MotorcyclesPage';
import BusesPage from './pages/BusesPage';
import EnergyPage from './pages/EnergyPage';
import AboutPage from './pages/AboutPage';
import ImpactPage from './pages/ImpactPage';
import CareersPage from './pages/CareersPage';
import PressPage from './pages/PressPage';
import RoamMovePage from './pages/RoamMovePage';
import LegalPage from './pages/LegalPage';
import LeadModal from './components/LeadModal';
import { translations } from './translations';
import { analytics } from './lib/analytics';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [lang, setLang] = useState<'en' | 'sw'>('en');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'preorder' | 'inquiry'>('preorder');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    analytics.track({ type: 'PAGE_VIEW', path: currentPath });

    const titles: Record<string, string> = {
      '/motorcycles': 'Roam Air | Electric Motorcycles for Africa',
      '/electric-bus': 'Roam Rapid | Zero Emission Mass Transit',
      '/roam-move': 'Roam Move | Agile Urban Commuting',
      '/charging': 'Roam Hub | Energy Infrastructure',
      '/about': 'Our Mission | Scaling EV Tech in Kenya',
      '/impact': 'Our Impact | Sustainable Mobility for Africa',
      '/careers': 'Join Roam | Build the Future of Transport',
      '/press': 'Press & News | Roam Electric Updates',
      '/privacy': 'Privacy Policy | Roam Electric',
      '/terms': 'Terms of Service | Roam Electric',
      '/': 'Roam | Leading Electric Mobility in Africa'
    };
    
    document.title = titles[currentPath] || 'Roam Electric';
  }, [currentPath]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const navigate = useCallback((path: string) => {
    const [rawPathname, hash] = path.split('#');
    // Ensure we handle the base path correctly
    const targetPathname = rawPathname || '/';

    // If navigating to the same page but with a hash, just scroll
    if (targetPathname === window.location.pathname) {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    // Standard navigation
    window.history.pushState({}, '', path);
    setCurrentPath(targetPathname);

    // Scroll handling
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    analytics.track({ type: 'THEME_TOGGLE', theme: newTheme });
  };
  
  const toggleLang = () => setLang(prev => prev === 'en' ? 'sw' : 'en');

  const openLeadModal = (type: 'preorder' | 'inquiry') => {
    setModalType(type);
    setIsModalOpen(true);
    analytics.track({ type: 'PREORDER_CLICK', source: currentPath });
  };

  const handleSaveLead = async (data: any) => {
    analytics.track({ type: 'INQUIRY_SUBMIT', category: data.type });
    return new Promise((resolve) => {
      setTimeout(() => {
        const existingLeads = JSON.parse(localStorage.getItem('roam_leads') || '[]');
        localStorage.setItem('roam_leads', JSON.stringify([...existingLeads, { ...data, timestamp: new Date().toISOString() }]));
        resolve(true);
      }, 1500);
    });
  };

  const renderPage = () => {
    const pageProps = { lang };
    switch (currentPath) {
      case '/motorcycles': return <MotorcyclesPage {...pageProps} />;
      case '/electric-bus': return <BusesPage {...pageProps} />;
      case '/roam-move': return <RoamMovePage {...pageProps} />;
      case '/charging': return <EnergyPage lang={lang} onInquire={() => openLeadModal('inquiry')} />;
      case '/about': return <AboutPage {...pageProps} />;
      case '/impact': return <ImpactPage {...pageProps} />;
      case '/careers': return <CareersPage {...pageProps} />;
      case '/press': return <PressPage {...pageProps} />;
      case '/privacy':
      case '/terms': return <LegalPage {...pageProps} />;
      case '/':
      default: return <HomePage onNavigate={navigate} lang={lang} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <Navbar 
        onNavigate={navigate} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        lang={lang} 
        toggleLang={toggleLang} 
        onOpenModal={() => openLeadModal('preorder')}
      />
      
      <main className="flex-grow pt-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigate} lang={lang} />

      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSaveLead}
        type={modalType} 
      />
    </div>
  );
};

export default App;
