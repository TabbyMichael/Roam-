
import React, { useState } from 'react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => Promise<any>;
  type: 'preorder' | 'inquiry';
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, onSave, type }) => {
  const [step, setStep] = useState(1);
  const [isSyncing, setIsSyncing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', location: 'Nairobi', quantity: '1' });

  if (!isOpen) return null;

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      if (!formData.name || !formData.email) return;
      setStep(step + 1);
    } else {
      setIsSyncing(true);
      try {
        await onSave({ ...formData, type });
        setSubmitted(true);
        setTimeout(() => {
          onClose();
          setSubmitted(false);
          setStep(1);
        }, 3000);
      } catch (err) {
        console.error('Lead sync failed:', err);
      } finally {
        setIsSyncing(false);
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl transition-opacity duration-500" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-zinc-900 w-full max-w-lg rounded-[48px] overflow-hidden shadow-[0_32px_128px_rgba(0,0,0,0.5)] border border-black/10 dark:border-white/10 p-8 md:p-14 animate-in fade-in zoom-in slide-in-from-bottom-12 duration-500">
        
        {submitted ? (
          <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-[#FF5C00] rounded-full flex items-center justify-center mx-auto mb-8 text-black shadow-[0_0_40px_rgba(255,92,0,0.3)]">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-4xl font-black text-black dark:text-white mb-4 tracking-tighter">SUCCESS.</h3>
            <p className="text-black/50 dark:text-white/50 text-lg font-light leading-relaxed">Our mobility experts are reviewing your request. We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-10">
              <div className="flex gap-2">
                {[1, 2].map((i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${step === i ? 'w-12 bg-[#FF5C00]' : 'w-4 bg-black/10 dark:bg-white/10'}`}></div>
                ))}
              </div>
              <button 
                onClick={onClose} 
                className="text-black/30 dark:text-white/30 hover:text-[#FF5C00] transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

            <h2 id="modal-title" className="text-4xl font-black text-black dark:text-white mb-2 uppercase tracking-tighter leading-none">
              {type === 'preorder' ? 'Pre-order Roam Air' : 'Fleet Solution'}
            </h2>
            <p className="text-black/40 dark:text-white/40 mb-10 text-sm tracking-wide font-medium uppercase">Step {step} of 2</p>
            
            <form onSubmit={handleNext} className="space-y-6">
              {step === 1 ? (
                <div className="space-y-6 animate-in slide-in-from-right-12 duration-300">
                  <div>
                    <label htmlFor="full-name" className="block text-[10px] uppercase tracking-[0.2em] font-black text-black/40 dark:text-white/40 mb-3">Your Identity</label>
                    <input 
                      id="full-name"
                      required 
                      type="text" 
                      placeholder="Full Name"
                      className="w-full bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-6 py-5 text-black dark:text-white focus:outline-none focus:border-[#FF5C00] transition-all" 
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      value={formData.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] font-black text-black/40 dark:text-white/40 mb-3">Contact Email</label>
                    <input 
                      id="email"
                      required 
                      type="email" 
                      placeholder="you@example.com"
                      className="w-full bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-6 py-5 text-black dark:text-white focus:outline-none focus:border-[#FF5C00] transition-all" 
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      value={formData.email}
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-6 animate-in slide-in-from-right-12 duration-300">
                  <div>
                    <label htmlFor="hub" className="block text-[10px] uppercase tracking-[0.2em] font-black text-black/40 dark:text-white/40 mb-3">Preferred Hub</label>
                    <select 
                      id="hub"
                      className="w-full bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-6 py-5 text-black dark:text-white focus:outline-none focus:border-[#FF5C00] appearance-none transition-all"
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      value={formData.location}
                    >
                      <option value="Nairobi Headquarters">Nairobi Headquarters</option>
                      <option value="Mombasa Logistics Hub">Mombasa Logistics Hub</option>
                      <option value="Kisumu Distribution">Kisumu Distribution</option>
                      <option value="Other / Regional">Other / Regional</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="units" className="block text-[10px] uppercase tracking-[0.2em] font-black text-black/40 dark:text-white/40 mb-3">{type === 'preorder' ? 'Units Requested' : 'Fleet Size'}</label>
                    <input 
                      id="units"
                      type="number" 
                      className="w-full bg-zinc-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-6 py-5 text-black dark:text-white focus:outline-none focus:border-[#FF5C00] transition-all" 
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      value={formData.quantity}
                    />
                  </div>
                </div>
              )}

              <div className="pt-6 flex gap-4">
                {step === 2 && !isSyncing && (
                  <button 
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 bg-black/5 dark:bg-white/5 text-black dark:text-white py-5 rounded-2xl font-bold hover:bg-black/10 transition-all uppercase tracking-widest text-xs"
                  >
                    Back
                  </button>
                )}
                <button 
                  type="submit"
                  disabled={isSyncing}
                  className="flex-[2] bg-[#FF5C00] text-black py-5 rounded-2xl font-black text-lg hover:shadow-[0_20px_40px_rgba(255,92,0,0.3)] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSyncing ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      SAVING...
                    </>
                  ) : (
                    step === 1 ? 'NEXT STEP' : 'FINALIZE REQUEST'
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadModal;
