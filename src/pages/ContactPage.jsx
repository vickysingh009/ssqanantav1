import React from 'react';
import ContactForm from '../components/forms/ContactForm';
import SEO from '../components/seo/SEO';

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <SEO 
        title="Contact Us" 
        description="Get in touch with S-SQAnata Design to discuss your luxury interior architecture and decoration requirements." 
      />
    <section id="contact" className="py-16 md:py-32 bg-white font-sans text-[#4A4441] overflow-hidden relative border-t border-gray-300">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* ========================================= */}
        {/* CENTERED SECTION HEADING                  */}
        {/* ========================================= */}
        <div className="flex justify-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] border-b-[3px] border-[#B89672] pb-2 px-1">
            Contact Us
          </h2>
        </div>

        {/* ========================================= */}
        {/* ABOUT & CONTACT HYBRID SECTION            */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Contact Details */}
          <div className="flex flex-col">
            
            <h3 className="text-4xl md:text-5xl lg:text-[56px] font-serif text-[#1A1A1A] leading-[1.15] mb-6 md:mb-8 tracking-tight">
              Crafting spaces that tell your unique story.
            </h3>
            
            <p className="text-gray-500 text-[13px] md:text-[15px] leading-relaxed mb-5 font-light">
              At S-SQ Anata Design, we believe every space has a story. Our goal is to transform ordinary interiors into elegant, functional, and inspiring environments.
            </p>

            <p className="text-gray-500 text-[13px] md:text-[15px] leading-relaxed mb-10 font-light">
              From modern minimal designs to luxurious interiors, we bring creativity, detail, and comfort into every project.
            </p>

            {/* Contact Information Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-10 gap-x-6 mt-2 border-t border-gray-200/60 pt-10">
              
              {/* Designer Details */}
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-full bg-white border border-[#E5E0D8] group-hover:border-[#B89672] transition-colors duration-500 flex items-center justify-center text-[#B89672] flex-shrink-0 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-[#2D2825] font-serif text-[22px] leading-none mb-1.5">Sneha Soni</h4>
                  <p className="text-[#B89672] text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium">Interior Designer</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-full bg-white border border-[#E5E0D8] group-hover:border-[#B89672] transition-colors duration-500 flex items-center justify-center text-[#B89672] flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#8C837C] text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold mb-1.5">Direct Line</p>
                  <a href="tel:+917878538299" className="text-[#2D2825] text-[15px] font-medium hover:text-[#B89672] transition-colors leading-none">+91 78785 38299</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-full bg-white border border-[#E5E0D8] group-hover:border-[#B89672] transition-colors duration-500 flex items-center justify-center text-[#B89672] flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#8C837C] text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold mb-1.5">Email Address</p>
                  <a href="mailto:snehasoni543210@gmail.com" className="text-[#2D2825] text-[15px] font-medium hover:text-[#B89672] transition-colors leading-none break-all">snehasoni543210@gmail.com</a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-full bg-white border border-[#E5E0D8] group-hover:border-[#B89672] transition-colors duration-500 flex items-center justify-center text-[#B89672] flex-shrink-0 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#8C837C] text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold mb-1.5">Office Location</p>
                  <p className="text-[#2D2825] text-[15px] font-medium leading-[1.3]">K.B.H.B, <br/>Jodhpur, Rajasthan</p>
                </div>
              </div>

            </div>
          </div>

          {/* Form Right Side: Clean Gray Card */}
          <div className="bg-[#F5F5F7] rounded-[2rem] p-8 md:p-12 lg:p-14 w-full">
            <h3 className="text-2xl md:text-[28px] font-sans font-medium text-[#1A1A1A] mb-3 tracking-tight">
              Get in Touch
            </h3>
            <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed mb-10 max-w-sm font-light">
              Define your goals and identify areas where we can add value to your business.
            </p>

            <ContactForm />
          </div>

        </div>

      </div>
    </section>
    </div>
  );
}
