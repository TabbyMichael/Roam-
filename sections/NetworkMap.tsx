
import React, { useState, useEffect, useRef } from 'react';
import { translations } from '../translations';
import { motion } from 'framer-motion';
import L from 'leaflet';

interface NetworkMapProps {
  lang: 'en' | 'sw';
}

interface Hub {
  id: number;
  name: string;
  status: string;
  coords: [number, number]; // [lat, lng]
  stats: number; 
  uptime: string;
}

const NetworkMap: React.FC<NetworkMapProps> = ({ lang }) => {
  const t = translations[lang];
  const [activeHub, setActiveHub] = useState<number | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<number, L.Marker>>({});
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains('dark'));

  const [hubs] = useState<Hub[]>([
    { id: 1, name: 'Roam Central (HQ)', status: lang === 'en' ? 'Operational' : 'Inafanya Kazi', coords: [-1.3126, 36.8485], stats: 46, uptime: '99.9%' },
    { id: 2, name: 'Westlands Station', status: lang === 'en' ? 'Operational' : 'Inafanya Kazi', coords: [-1.2662, 36.8062], stats: 12, uptime: '98.5%' },
    { id: 3, name: 'Mombasa Road Depot', status: lang === 'en' ? 'Maintenance' : 'Marekebisho', coords: [-1.3450, 36.9010], stats: 0, uptime: '85.2%' },
    { id: 4, name: 'Kilimani Hub', status: lang === 'en' ? 'Operational' : 'Inafanya Kazi', coords: [-1.2912, 36.7865], stats: 5, uptime: '99.1%' },
    { id: 5, name: 'Roam Hub Lusaka', status: lang === 'en' ? 'Operational' : 'Inafanya Kazi', coords: [-1.3005, 36.8370], stats: 18, uptime: '99.4%' },
    { id: 6, name: 'Roam Hub Waiyaki Way', status: lang === 'en' ? 'Operational' : 'Inafanya Kazi', coords: [-1.2635, 36.7915], stats: 22, uptime: '99.7%' },
    { id: 7, name: 'Roam Hub Harambee', status: lang === 'en' ? 'Operational' : 'Inafanya Kazi', coords: [-1.2865, 36.8220], stats: 31, uptime: '99.8%' },
    { id: 8, name: 'Roam Hub Suguta Centre', status: lang === 'en' ? 'Operational' : 'Inafanya Kazi', coords: [-1.2855, 36.7845], stats: 8, uptime: '98.9%' },
    { id: 9, name: 'Roam Hub Outering', status: lang === 'en' ? 'Operational' : 'Inafanya Kazi', coords: [-1.2840, 36.8830], stats: 15, uptime: '99.2%' },
    { id: 10, name: 'Roam Hub Kayole', status: lang === 'en' ? 'Operational' : 'Inafanya Kazi', coords: [-1.2810, 36.9080], stats: 27, uptime: '99.5%' },
    { id: 11, name: 'Roam Hub Roysambu', status: lang === 'en' ? 'Operational' : 'Inafanya Kazi', coords: [-1.2185, 36.8870], stats: 34, uptime: '99.9%' },
    { id: 12, name: 'Roam Hub Dagoretti', status: lang === 'en' ? 'Operational' : 'Inafanya Kazi', coords: [-1.2900, 36.7500], stats: 10, uptime: '99.0%' }
  ]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mapContainerRef.current || !L || !L.map) return;

    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current, {
        center: [-1.286389, 36.817223],
        zoom: 12,
        zoomControl: false,
        attributionControl: false
      });
    }

    const tileLayer = L.tileLayer(
      isDarkMode 
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      {
        subdomains: 'abcd',
        maxZoom: 20
      }
    ).addTo(mapRef.current);

    hubs.forEach(hub => {
      if (!markersRef.current[hub.id]) {
        const marker = L.marker(hub.coords, {
          icon: L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="w-4 h-4 rounded-full bg-[#FF5C00] border-2 border-white shadow-lg animate-pulse"></div>`,
            iconSize: [16, 16],
            iconAnchor: [8, 8]
          })
        }).addTo(mapRef.current!);
        
        marker.on('click', () => setActiveHub(hub.id));
        markersRef.current[hub.id] = marker;
      }
    });

    return () => {
      if (tileLayer) tileLayer.remove();
    };
  }, [isDarkMode, hubs]);

  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <section id="network" className="py-24 bg-white dark:bg-black transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-black dark:text-white uppercase leading-none">
            {t.networkTitle}
          </h2>
          <p className="text-black/50 dark:text-white/50 text-xl font-light max-w-2xl">
            {t.networkDesc}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-stretch h-[600px]">
          <div className="lg:col-span-2 relative rounded-[40px] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl z-10 bg-zinc-100 dark:bg-zinc-900">
            <div ref={mapContainerRef} className="w-full h-full" />
          </div>

          <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
            {hubs.map((hub) => (
              <motion.div
                key={hub.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => {
                  setActiveHub(hub.id);
                  if (mapRef.current) {
                    mapRef.current.setView(hub.coords, 14, { animate: true });
                  }
                }}
                className={`p-6 rounded-3xl border transition-all cursor-pointer ${
                  activeHub === hub.id
                    ? 'bg-[#FF5C00] border-[#FF5C00] text-black shadow-[0_20px_40px_rgba(255,92,0,0.2)]'
                    : 'bg-zinc-50 dark:bg-zinc-900 border-black/5 dark:border-white/5 text-black dark:text-white hover:border-[#FF5C00]/50'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-black text-lg uppercase tracking-tight">{hub.name}</h3>
                  <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-full ${
                    hub.status === (lang === 'en' ? 'Operational' : 'Inafanya Kazi')
                      ? 'bg-green-500/10 text-green-600'
                      : 'bg-yellow-500/10 text-yellow-600'
                  }`}>
                    {hub.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] font-black uppercase opacity-50 mb-1">{t.activeHubs}</div>
                    <div className="text-xl font-black">{hub.stats}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase opacity-50 mb-1">{t.uptime}</div>
                    <div className="text-xl font-black">{hub.uptime}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkMap;
