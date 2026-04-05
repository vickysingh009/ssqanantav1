import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-[#4E342E] font-sans text-[#FAF3EB] pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none -translate-y-1/2 translate-x-1/3" style={{ background: 'radial-gradient(circle, rgba(245,233,220,0.08) 0%, transparent 60%)' }}></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">

        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 border-b border-[#F5E9DC]/10 pb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-tight">
              Designing Spaces <br className="hidden md:block" />
              <span className="text-[#F5E9DC] italic">That Reflect You.</span>
            </h2>
            <p className="text-[#F5E9DC]/80 font-light max-w-md">
              At S²Ananta Design, we create beautiful and functional spaces that reflect your personality and lifestyle.
            </p>
          </div>
          <button
            onClick={() => window.dispatchEvent(new Event('open-consult-form'))}
            className="bg-[#F5E9DC] text-[#4E342E] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Book Now
          </button>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Info (Col span 4) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="mb-6 flex flex-col">
              <span className="text-3xl font-serif text-white tracking-wide">
                S<sup className="text-xl">2</sup>Ananta Design
              </span>
              <span className="text-[#F5E9DC]/70 text-xs tracking-[0.2em] uppercase mt-1">
                by Sneha Soni
              </span>
            </div>
            <p className="text-[#FAF3EB]/70 text-sm leading-relaxed mb-8 max-w-sm font-light">
              Transforming Houses into Beautiful Homes. From modern minimal to luxurious interiors, we bring creativity, detail, and comfort into every project.
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#F5E9DC]/20 flex items-center justify-center hover:bg-[#F5E9DC] hover:text-[#4E342E] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </a>
              <a href="https://www.instagram.com/s_sq_ananta_design?igsh=MXMzaGoxam5odnZtdQ==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[#F5E9DC]/20 flex items-center justify-center hover:bg-[#F5E9DC] hover:text-[#4E342E] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links (Col span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-serif text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 font-light text-sm text-[#FAF3EB]/70">
              <li><Link to="/" className="hover:text-[#F5E9DC] hover:translate-x-1 inline-block transition-all">Home</Link></li>
              <li><Link to="/services" className="hover:text-[#F5E9DC] hover:translate-x-1 inline-block transition-all">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#F5E9DC] hover:translate-x-1 inline-block transition-all">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-[#F5E9DC] hover:translate-x-1 inline-block transition-all">About</Link></li>
              <li><Link to="/contact" className="hover:text-[#F5E9DC] hover:translate-x-1 inline-block transition-all">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services (Col span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-serif text-white mb-6">Our Services</h4>
            <ul className="flex flex-col gap-4 font-light text-sm text-[#FAF3EB]/70">
              <li><Link to="/portfolio?category=Residential" className="hover:text-[#F5E9DC] transition-colors">Residential Interior Design</Link></li>
              <li><Link to="/portfolio?category=Modular+Kitchen" className="hover:text-[#F5E9DC] transition-colors">Modular Kitchen Design</Link></li>
              <li><Link to="/portfolio?category=Living+Room" className="hover:text-[#F5E9DC] transition-colors">Living Room Styling</Link></li>
              <li><Link to="/portfolio?category=Bedroom" className="hover:text-[#F5E9DC] transition-colors">Bedroom Design</Link></li>
              <li><Link to="/portfolio?category=Commercial" className="hover:text-[#F5E9DC] transition-colors">Office Interior Design</Link></li>
            </ul>
          </div>

          {/* Contact Details (Col span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-serif text-white mb-6">Contact Us</h4>

            <div className="flex flex-col gap-5 text-sm font-light text-[#FAF3EB]/80">
              {/* Designer Name */}
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 flex justify-center text-[#F5E9DC]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div>
                  <p className="font-medium text-white uppercase tracking-widest text-xs">Sneha Soni</p>
                  <p className="text-[11px] uppercase tracking-widest text-[#F5E9DC]/60 mt-0.5">Interior Designer</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 group">
                <div className="w-5 flex justify-center text-[#F5E9DC]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <a href="tel:+917878538299" className="hover:text-white transition-colors">+91 78785 38299</a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-5 flex justify-center text-[#F5E9DC]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <a href="mailto:snehasoni543210@gmail.com" className="hover:text-white transition-colors break-all">
                  snehasoni543210@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 flex justify-center text-[#F5E9DC]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <span>
                  K.B.H.B <br />
                  Jodhpur, Rajasthan
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-[#F5E9DC]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-[#FAF3EB]/50 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} S²Ananta Design. All rights reserved.</p>
          <a href="https://ssqananta.com" target="_blank" rel="noreferrer" className="hover:text-[#F5E9DC] transition-colors flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            ssqananta.com
          </a>
        </div>

      </div>
    </footer>
  );
}
