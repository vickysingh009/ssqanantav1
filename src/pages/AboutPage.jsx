import React from 'react';
import imgHero1 from '../assets/images/external/pexels-6489083.jpg';
import imgHero1WebP from '../assets/images/external/pexels-6489083.webp';
import imgHero2 from '../assets/images/external/pexels-5998120.jpg';
import imgHero2WebP from '../assets/images/external/pexels-5998120.webp';
import ContactForm from '../components/forms/ContactForm';
import SEO from '../components/seo/SEO';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FCFAF8] font-sans text-[#4A4441] overflow-hidden relative">
      <SEO
        title="About Us"
        description="Learn more about S-SQAnata Design, our vision, and why we are the premium choice for luxury interior design."
      />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block">
        <div className="absolute top-[5%] -left-[10%] w-[500px] h-[500px] rounded-full border-[1px] border-[#B89672]/20 blur-[1px]"></div>
        <div className="absolute bottom-[20%] -right-[5%] w-[400px] h-[400px] rounded-full bg-[#B89672]/5 blur-3xl"></div>
      </div>

      {/* Main Page Content */}
      <main className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-24 py-16 md:py-32 relative z-10">

        {/* Mobile Section Label */}
        <div className="flex lg:hidden items-center justify-center gap-4 mb-12">
          <div className="w-12 h-[1.5px] bg-[#B89672]"></div>
          <span className="text-[#B89672] text-[14px] sm:text-base uppercase tracking-[0.3em] font-bold">
            About Us
          </span>
        </div>

        {/* ========================================= */}
        {/* TOP PART: ABOUT CONTENT                   */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT: IMAGE COMPOSITION */}
          <div className="relative w-full pb-8 md:pb-0 px-2 sm:px-0">
            {/* Main Large Image */}
            <div className="relative w-[90%] md:w-[75%] lg:w-[80%] aspect-[4/5] rounded-3xl md:rounded-tl-[5rem] md:rounded-br-[5rem] md:rounded-tr-xl md:rounded-bl-xl overflow-hidden shadow-lg mx-auto md:mx-0">
              <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none"></div>
              <picture>
                <source srcSet={imgHero1WebP} type="image/webp" />
                <img
                  src={imgHero1}
                  alt="Luxury Interior Design"
                  fetchPriority="high"
                  decoding="sync"
                  width="800"
                  height="1000"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>

            {/* Overlapping Small Image */}
            <div className="absolute -bottom-4 right-0 md:bottom-0 md:right-0 w-[55%] md:w-[45%] lg:w-[50%] aspect-square rounded-2xl md:rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-[6px] md:border-[12px] border-[#FCFAF8] z-20">
              <picture>
                <source srcSet={imgHero2WebP} type="image/webp" />
                <img
                  src={imgHero2}
                  alt="Interior Details and Textures"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="800"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </picture>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute top-4 left-0 md:top-10 md:-left-8 bg-white py-3 px-4 md:p-5 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-gray-100 z-30 flex items-center gap-3 animate-bounce will-change-transform" style={{ animationDuration: '4s' }}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FCFAF8] flex items-center justify-center text-[#B89672]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[22px] md:text-2xl font-serif font-extrabold text-[#2D2825] leading-none mb-0.5">10+</div>
                <div className="text-[9px] md:text-[10px] font-bold text-[#8C837C] uppercase tracking-widest leading-tight">Years of<br />Excellence</div>
              </div>
            </div>
          </div>

          {/* RIGHT: TEXT CONTENT */}
          <div className="flex flex-col justify-center mt-6 md:mt-0">

            {/* Desktop Section Label (Hidden on mobile) */}
            <div className="hidden lg:inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-[#B89672]"></div>
              <span className="text-[#B89672] text-xs uppercase tracking-[0.3em] font-bold">
                About Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[34px] md:text-5xl lg:text-6xl font-serif text-[#2D2825] leading-[1.15] mb-5 md:mb-6">
              Crafting spaces that tell your unique story.
            </h2>

            {/* Description */}
            <p className="text-[#6B635E] text-[14px] md:text-base leading-relaxed font-light mb-8">
              At S-SQ Anata Design, we believe every space has a story. Our goal is to transform ordinary interiors into elegant, functional, and inspiring environments.
              <br /><br />
              From modern minimal designs to luxurious interiors, we bring creativity, detail, and comfort into every project.
            </p>

            {/* Key Features/Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 md:gap-y-4 gap-x-6 mb-10">
              {[
                'Award-winning designers',
                'Premium material selection',
                'Transparent pricing',
                'End-to-end execution'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FCFAF8] border border-[#B89672]/40 flex items-center justify-center text-[#B89672] flex-shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-[#4A4441] font-medium text-[14px] md:text-sm">{item}</span>
                </div>
              ))}
            </div>



          </div>
        </div>

        {/* ========================================= */}
        {/* BOTTOM PART: CONTACT / INQUIRY FORM       */}
        {/* ========================================= */}
        <div className="mt-20 md:mt-32 bg-white rounded-3xl shadow-xl shadow-[#B89672]/5 border border-gray-100 overflow-hidden flex flex-col lg:flex-row">

          {/* Form Left Side: Contact Details */}
          <div className="w-full lg:w-2/5 bg-[#2D2825] p-8 md:p-14 text-white flex flex-col justify-center relative overflow-hidden">
            {/* Dark background graphic element */}
            <div className="absolute -bottom-20 -right-20 w-48 md:w-64 h-48 md:h-64 border-[1px] border-white/10 rounded-full pointer-events-none"></div>
            <div className="absolute top-10 left-10 w-16 md:w-20 h-16 md:h-20 bg-[#B89672]/10 rounded-full blur-2xl pointer-events-none"></div>

            <h3 className="text-3xl md:text-4xl font-serif mb-2 relative z-10">Sneha Soni</h3>
            <p className="text-[#B89672] font-medium tracking-widest text-[11px] md:text-xs uppercase mb-8 relative z-10">
              Interior Designer
            </p>
            <p className="text-gray-400 font-light mb-8 md:mb-10 text-[14px] md:text-sm leading-relaxed relative z-10">
              Ready to transform your space? Get in touch to discuss your vision and take the first step towards your dream interiors.
            </p>

            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#B89672] flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-[11px] md:text-xs text-gray-500 uppercase tracking-widest font-medium mb-1">Call Us</p>
                  <a href="tel:+917878538299" className="text-[14px] md:text-sm font-medium hover:text-[#B89672] transition-colors inline-block pb-1" style={{ WebkitTextFillColor: 'currentColor' }}>+91 78785 38299</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#B89672] flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-[11px] md:text-xs text-gray-500 uppercase tracking-widest font-medium mb-1">Email Us</p>
                  <a href="mailto:snehasoni543210@gmail.com" className="text-[14px] md:text-sm font-medium hover:text-[#B89672] transition-colors break-all">snehasoni543210@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#B89672] flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-[11px] md:text-xs text-gray-500 uppercase tracking-widest font-medium mb-1">Location</p>
                  <p className="text-[14px] md:text-sm font-medium">K.B.H.B<br />Jodhpur, Rajasthan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Right Side: Inputs */}
          <div className="w-full lg:w-3/5 p-8 sm:p-10 md:p-14 bg-white">
            <ContactForm />
          </div>

        </div>
      </main>
    </div>
  );
}
