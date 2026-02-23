
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { translations } from '../translations';
import { analytics } from '../lib/analytics';
import { motion, AnimatePresence } from 'framer-motion';

interface MobilityAssistantProps {
  lang: 'en' | 'sw';
}

const MobilityAssistant: React.FC<MobilityAssistantProps> = ({ lang }) => {
  const t = translations[lang];
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: lang === 'en' ? "Welcome to the Roam Mobility Advisor. How can I help you transition to electric today?" : "Karibu kwa Mshauri wa Roam. Ninawezaje kukusaidia kuanza kutumia umeme leo?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput('');
    const newMessages = [...messages, { role: 'user' as const, content: userMsg }];
    setMessages(newMessages);
    setIsTyping(true);

    analytics.track({ type: 'AI_ADVISOR_ENGAGE', messageCount: newMessages.length });

    try {
      // Use process.env.API_KEY directly as per guidelines. 
      // The polyfill in index.html ensures 'process' is globally available.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
            { role: 'user', parts: [{ text: `You are a professional mobility consultant for Roam Electric. User language: ${lang}. Current year is 2024. Provide insightful, data-driven advice about Roam products and EV infrastructure in Africa. User: ${userMsg}` }] }
        ],
        config: {
          systemInstruction: "Expert, authoritative, yet approachable tone. Focus on sustainability, ROI for fleet owners, and performance in African conditions.",
          temperature: 0.8
        }
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response.text || "I am currently processing. Please try again." }]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: lang === 'en' ? "I'm having trouble connecting to my knowledge base right now. Please try again later." : "Nina shida kuunganishwa na hifadhidata yangu sasa hivi. Tafadhali jaribu tena baadaye." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section className="py-40 bg-black overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#FF5C00] font-black text-[10px] tracking-[0.5em] uppercase mb-8"
          >
            Digital Concierge
          </motion.div>
          <h2 className="text-7xl md:text-9xl font-[900] tracking-[-0.06em] text-white leading-[0.8] uppercase mb-10">
            {t.advisorTitle}
          </h2>
          <p className="text-white/40 mt-6 text-2xl font-light max-w-2xl mx-auto">{t.advisorSubtitle}</p>
        </div>

        <div className="relative glass-panel rounded-[80px] overflow-hidden flex flex-col h-[700px] shadow-[0_0_120px_rgba(255,92,0,0.05)] border-white/10">
          <div className="absolute top-0 left-0 right-0 h-24 bg-white/5 backdrop-blur-3xl border-b border-white/5 z-20 flex items-center px-12 justify-between">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Advisor v3.2_Online</span>
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 italic">Encrypted Connection</div>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto pt-32 p-12 space-y-10 custom-scrollbar">
            <AnimatePresence>
              {messages.map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[75%] p-8 rounded-[40px] text-lg leading-relaxed ${
                    m.role === 'user' 
                    ? 'bg-[#FF5C00] text-black font-black rounded-tr-none' 
                    : 'bg-white/5 text-white/80 rounded-tl-none border border-white/5'
                  }`}>
                    {m.content}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-8 rounded-[40px] rounded-tl-none border border-white/5">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-[#FF5C00] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#FF5C00] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-[#FF5C00] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-10 border-t border-white/5 bg-black/40 backdrop-blur-3xl">
            <div className="flex gap-6">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'en' ? "Type your inquiry..." : "Andika hapa..."}
                className="flex-grow bg-white/5 border border-white/10 rounded-full px-12 py-6 text-xl focus:outline-none focus:border-[#FF5C00] transition-all text-white placeholder:text-white/20"
              />
              <button
                onClick={handleSend}
                disabled={isTyping}
                className="w-20 h-20 bg-[#FF5C00] text-black rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-2xl disabled:opacity-50"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilityAssistant;
