
import React from 'react';
import { motion } from 'framer-motion';

interface LegalPageProps {
  lang: 'en' | 'sw';
}

const LegalPage: React.FC<LegalPageProps> = ({ lang }) => {
  const isPrivacy = window.location.pathname === '/privacy';
  
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <header>
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">
            {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
          </h1>
          <p className="text-zinc-500 uppercase tracking-widest text-sm font-bold">
            Last Updated: February 2024
          </p>
        </header>

        <section className="prose prose-invert max-w-none">
          <div className="space-y-8 text-zinc-400 leading-relaxed">
            <p>
              This is a placeholder for the Roam Electric {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}. 
              In a real application, this page would contain detailed legal information regarding your 
              {isPrivacy ? ' data protection and privacy rights' : ' use of our services and vehicles'}.
            </p>
            
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">1. Introduction</h2>
            <p>
              Welcome to Roam. We are committed to providing sustainable mobility solutions for Africa. 
              By using our website and services, you agree to the terms outlined on this page.
            </p>

            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">2. Use of Information</h2>
            <p>
              We collect information to improve our products and services, including our electric motorcycles, 
              buses, and charging infrastructure. Your data helps us optimize the Roam Hub network and 
              provide better support for our fleet.
            </p>

            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">3. Contact Us</h2>
            <p>
              If you have any questions about our {isPrivacy ? 'privacy practices' : 'terms'}, please contact 
              us at legal@roam-electric.com.
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default LegalPage;
