import React, { useState, useEffect } from 'react';
import imgConsult from '../../assets/images/external/pexels-6489083.jpg';
import imgConsultWebP from '../../assets/images/external/pexels-6489083.webp';

export default function ConsultForm() {
  const [isOpen, setIsOpen] = useState(false); // Default to false
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSubmitted(false);
    };
    window.addEventListener('open-consult-form', handleOpen);
    return () => window.removeEventListener('open-consult-form', handleOpen);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9373fc8f-c027-4345-8e4d-32d2f04f668c",
          subject: "✨ New Lead from ConsultForm - S² Ananta",
          ...formData
        }),
      });
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert("Submission failed. Please try again or contact us directly.");
      }
    } catch (error) {
      alert('Network error! Please try again later.');
    }
  };

  // Completely hide when not open to avoid blocking UI
  if (!isOpen) return null;

  return (
    // Background Overlay (Dark & Blurred for focus)
    <div className="min-h-screen bg-[#2B2B2B]/80 backdrop-blur-md fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 font-sans" style={{ minHeight: '100vh', width: '100vw' }}>
      <style>
        {`
          @keyframes modalFadeScale {
            from { opacity: 0; transform: scale(0.95) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          .animate-modal {
            animation: modalFadeScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          /* Autofill fix for floating labels */
          input:-webkit-autofill, textarea:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
            -webkit-text-fill-color: #2B2B2B !important;
          }
        `}
      </style>

      {/* Modal Container - Ultra sleek rounded corners */}
      <div className="w-full max-w-[1000px] h-[90vh] md:h-auto overflow-y-auto md:overflow-visible bg-white rounded-2xl md:rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col md:flex-row relative animate-modal">
        
        {/* Floating Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 md:top-8 md:right-8 w-10 h-10 bg-white hover:bg-[#F5E9DC] shadow-md rounded-full flex items-center justify-center text-[#2B2B2B] transition-all duration-300 z-50 group border border-[#F5E9DC]/50"
        >
          <svg className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* LEFT SIDE: Editorial Image & Branding */}
        <div className="hidden md:flex w-[45%] relative bg-[#4E342E] flex-col justify-between overflow-hidden p-10 h-full min-h-[600px]">
          <picture>
            <source srcSet={imgConsultWebP} type="image/webp" />
            <img 
              src={imgConsult} 
              alt="Luxury Interior" 
              loading="lazy"
              decoding="async"
              width="600"
              height="800"
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-[#4E342E]/80 via-transparent to-[#4E342E]/90 z-0"></div>
          
          {/* Top Logo Area */}
          <div className="relative z-10 flex flex-col">
            <span className="text-[#F5E9DC] font-serif text-3xl tracking-wide">
              S<sup className="text-lg">2</sup> Ananta
            </span>
            <span className="text-[#FAF3EB]/70 text-[9px] uppercase tracking-[0.3em] mt-1 ml-1">
              by Sneha Soni
            </span>
          </div>

          {/* Bottom Text */}
          <div className="relative z-10">
            <h3 className="font-serif text-[40px] text-white leading-[1.1] mb-4">
              Transforming <br />
              <span className="italic text-[#F5E9DC]">Houses into</span> <br />
              Beautiful Homes.
            </h3>
            <p className="font-light text-[#FAF3EB]/80 text-sm leading-relaxed max-w-xs">
              Every great space begins with a conversation. Let's discuss your vision and bring it to reality.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Minimalist Form */}
        <div className="w-full md:w-[55%] p-8 sm:p-10 md:p-14 relative bg-white flex flex-col justify-center">
          
          {!isSubmitted ? (
            <div className="w-full max-w-md mx-auto">
              <div className="mb-10">
                <span className="text-[#4E342E] text-[10px] uppercase tracking-[0.3em] font-bold mb-3 block">
                  Book A Free Consultation
                </span>
                <h2 className="text-3xl md:text-[40px] font-serif text-[#2B2B2B] leading-tight">
                  Design Your <br/>Dream Space.
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                
                {/* Floating Label Input - Name */}
                <div className="relative group">
                  <input 
                    type="text" 
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-200 py-2 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#4E342E] transition-colors peer placeholder-transparent"
                    placeholder="Full Name"
                  />
                  <label htmlFor="name" className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#4E342E] peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-gray-500 pointer-events-none uppercase tracking-widest font-medium">
                    Full Name *
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Floating Label Input - Phone */}
                  <div className="relative group">
                    <input 
                      type="tel" 
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-gray-200 py-2 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#4E342E] transition-colors peer placeholder-transparent"
                      placeholder="Phone Number"
                    />
                    <label htmlFor="phone" className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#4E342E] peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-gray-500 pointer-events-none uppercase tracking-widest font-medium">
                      Phone No. *
                    </label>
                  </div>

                  {/* Floating Label Input - Email */}
                  <div className="relative group">
                    <input 
                      type="email" 
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-200 py-2 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#4E342E] transition-colors peer placeholder-transparent"
                      placeholder="Email Address"
                    />
                    <label htmlFor="email" className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#4E342E] peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-gray-500 pointer-events-none uppercase tracking-widest font-medium">
                      Email (Optional)
                    </label>
                  </div>
                </div>

                {/* Custom Styled Select */}
                <div className="relative group mt-2">
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={`w-full bg-transparent border-b border-gray-200 py-2 text-sm focus:outline-none focus:border-[#4E342E] transition-colors appearance-none cursor-pointer ${formData.service ? 'text-[#2B2B2B]' : 'text-gray-400'}`}
                  >
                    <option value="" disabled hidden>Select Service Required *</option>
                    <option value="Residential Interior" className="text-[#2B2B2B]">Residential Interior Design</option>
                    <option value="Modular Kitchen" className="text-[#2B2B2B]">Modular Kitchen Design</option>
                    <option value="Living Room" className="text-[#2B2B2B]">Living Room Styling</option>
                    <option value="Bedroom" className="text-[#2B2B2B]">Bedroom Design</option>
                    <option value="Office Interior" className="text-[#2B2B2B]">Office Interior Design</option>
                    <option value="Other" className="text-[#2B2B2B]">Other</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                {/* Floating Label Textarea - Message */}
                <div className="relative group mt-2">
                  <textarea 
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="2"
                    className="w-full bg-transparent border-b border-gray-200 py-2 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#4E342E] transition-colors peer placeholder-transparent resize-none"
                    placeholder="Briefly describe your need..."
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#4E342E] peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-gray-500 pointer-events-none uppercase tracking-widest font-medium">
                    Briefly describe your need
                  </label>
                </div>

                {/* Premium Submit Button */}
                <button 
                  type="submit"
                  className="mt-6 w-full bg-[#4E342E] hover:bg-[#3d2924] text-[#F5E9DC] py-4 rounded-md text-[13px] uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                >
                  Request Consultation
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>

              </form>
            </div>
          ) : (
            /* ULTRA PREMIUM SUCCESS STATE */
            <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-modal">
              <div className="w-24 h-24 rounded-full border border-[#4E342E]/20 flex items-center justify-center mb-8 relative">
                <div className="absolute inset-2 bg-[#F5E9DC] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#4E342E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                </div>
              </div>
              <h2 className="text-3xl md:text-[40px] font-serif text-[#2B2B2B] mb-4">Inquiry Received.</h2>
              <p className="text-[#6B635E] text-[15px] font-light max-w-sm mx-auto mb-10 leading-relaxed">
                Thank you, {formData.name || 'Guest'}. Our lead design team will review your request and contact you at {formData.phone} shortly.
              </p>
              <button 
                onClick={() => setIsOpen(false)}
                className="border border-[#4E342E] text-[#4E342E] hover:bg-[#4E342E] hover:text-[#F5E9DC] px-10 py-3.5 rounded-sm text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300"
              >
                Return to Site
              </button>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}
