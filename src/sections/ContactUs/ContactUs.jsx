import React from 'react';
import ContactForm from '../../components/forms/ContactForm';

export default function ContactUs() {

  return (
    <section className="py-16 md:py-32 bg-white font-sans text-[#4A4441] overflow-hidden relative border-t border-gray-300">

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

            {/* Key Features/Values */}
            <div className="hidden md:grid md:grid-cols-2 gap-y-4 gap-x-6 mb-12">
              {[
                'Award-winning designers',
                'Premium material selection',
                'Transparent pricing',
                'End-to-end execution'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FCFAF8] border border-[#B89672]/30 flex items-center justify-center text-[#B89672] flex-shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-[#1A1A1A] font-medium text-[13px] md:text-sm">{item}</span>
                </div>
              ))}
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
  );
}
