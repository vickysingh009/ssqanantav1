import React, { useState, useEffect } from 'react';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  // Smooth staggering animation
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowOptions(true), 150);
    } else {
      setShowOptions(false);
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-10 z-[100] flex flex-col items-end font-sans pointer-events-none">
      
      {/* Chat Menu Popup */}
      <div 
        className={`mb-5 w-[320px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#EAE8E5] overflow-hidden transition-all duration-400 ease-out origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0 pointer-events-auto' : 'scale-90 opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        {/* Header Section (Personalized) */}
        <div className="bg-gradient-to-b from-[#FCFAF8] to-white p-6 md:p-8 text-center border-b border-[#EAE8E5]/60 relative overflow-hidden">
          {/* Background subtle arc */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#B89672]/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Profile Avatar Placeholder */}
            <div className="w-16 h-16 rounded-full bg-[#EAE8E5] border-2 border-white shadow-md flex items-center justify-center mb-3 overflow-hidden">
              <svg className="w-8 h-8 text-[#B89672]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="font-serif text-xl text-[#2D2825] mb-0.5">Sneha Soni</h3>
            <p className="text-[#B89672] text-[10px] uppercase tracking-[0.2em] font-bold mb-3">Lead Designer</p>
            <p className="text-[#6B635E] text-sm font-light leading-relaxed">
              Ready to transform your space? Let's discuss your vision today.
            </p>
          </div>
        </div>
        
        {/* Contact Options List */}
        <div className="p-4 flex flex-col gap-2 bg-white">
          
          {/* WhatsApp Option */}
          <a 
            href="https://wa.me/917878538299" 
            target="_blank" 
            rel="noreferrer" 
            className={`flex items-center gap-4 p-3.5 rounded-2xl hover:bg-[#F9F8F6] transition-all duration-300 group transform ${showOptions ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
            style={{ transitionDelay: '50ms' }}
          >
            <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#2D2825] font-medium text-[15px]">WhatsApp Us</span>
              <span className="text-[#8C837C] text-[12px] font-light">Instant consultation</span>
            </div>
            <svg className="w-4 h-4 ml-auto text-[#B89672] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>

          {/* Consult Now Option */}
          <button 
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-consult-form')); }}
            className={`w-full text-left flex items-center gap-4 p-3.5 rounded-2xl hover:bg-[#F9F8F6] transition-all duration-300 group transform ${showOptions ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="w-12 h-12 rounded-full bg-[#1A1817]/5 text-[#1A1817] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#2D2825] font-medium text-[15px]">Consult Now</span>
              <span className="text-[#8C837C] text-[12px] font-light">Book a free session</span>
            </div>
            <svg className="w-4 h-4 ml-auto text-[#B89672] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Call Option */}
          <a 
            href="tel:+917878538299" 
            className={`flex items-center gap-4 p-3.5 rounded-2xl hover:bg-[#F9F8F6] transition-all duration-300 group transform ${showOptions ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="w-12 h-12 rounded-full bg-[#B89672]/10 text-[#B89672] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#2D2825] font-medium text-[15px]">Call Direct</span>
              <span className="text-[#8C837C] text-[12px] font-light">+91 78785 38299</span>
            </div>
            <svg className="w-4 h-4 ml-auto text-[#B89672] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>

          {/* Instagram Option */}
          <a 
            href="https://www.instagram.com/s_sq_ananta_design?igsh=MXMzaGoxam5odnZtdQ==" 
            target="_blank" 
            rel="noreferrer" 
            className={`flex items-center gap-4 p-3.5 rounded-2xl hover:bg-[#F9F8F6] transition-all duration-300 group transform ${showOptions ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-12 h-12 rounded-full bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#2D2825] font-medium text-[15px]">Instagram</span>
              <span className="text-[#8C837C] text-[12px] font-light">@s_sq_ananta_design</span>
            </div>
            <svg className="w-4 h-4 ml-auto text-[#B89672] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>

        </div>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={toggleChat}
        className={`relative w-14 h-14 md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center text-white transition-all duration-500 shadow-[0_10px_30px_rgba(184,150,114,0.35)] z-50 hover:scale-105 hover:-translate-y-1 pointer-events-auto ${
          isOpen ? 'bg-[#2D2825] shadow-xl rotate-90' : 'bg-[#B89672]'
        }`}
      >
        {/* Outer glow effect matching your screenshot */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full border-2 border-[#B89672]/60 animate-ping" style={{ animationDuration: '3s' }}></div>
        )}

        {/* Icons with beautiful cross-fade */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {/* Close Icon */}
          <svg 
            className={`absolute w-6 h-6 transition-all duration-500 ${isOpen ? 'opacity-100 scale-100 -rotate-90' : 'opacity-0 scale-50 -rotate-90'}`} 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          
          {/* Chat Icon */}
          <svg 
            className={`absolute w-[26px] h-[26px] transition-all duration-500 ${isOpen ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`} 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
      </button>
      
    </div>
  );
}
