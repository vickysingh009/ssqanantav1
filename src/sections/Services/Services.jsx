import React from 'react';
import './Services.css';

import imgModular from '../../assets/images/our services/Modular Kitchen Design.webp';
import imgLiving from '../../assets/images/our services/Living Room Design.webp';
import imgBedroom from '../../assets/images/our services/Bedroom Interior.webp';
import imgOffice from '../../assets/images/our services/Office & Commercial.webp';

// Use placeholder URLs directly until the physical files are added to the folder
const imgResidential = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop";
const imgMap = "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop";

const Services = () => {
  return (
    <section className="services-section">
      {/* Top Header Section */}
      <div className="services-header">
        <div className="services-header-left">
          <span className="services-label">OUR SERVICES</span>
          <h2 className="services-title">
            Crafted for Every<br />
            <span>Kind of Space</span>
          </h2>
        </div>
        <div className="services-header-right">
          <p className="services-desc">
            From intimate homes to expansive commercial projects <br />
            every space we touch becomes a signature of your identity.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="services-grid">
        
        {/* Mobile Swipe Hint (Hidden on Desktop) */}
        <div className="mobile-swipe-hint">
          <span>Swipe</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </div>

        {/* SLIDER GROUP (Top 3 items for mobile slider) */}
        <div className="mobile-slider-wrapper">
          <div className="service-card card-tall">
            <img src={imgModular} alt="Modular Kitchen Design" className="service-img" loading="lazy" />
            <div className="service-overlay">
              <h3 className="service-name">Modular Kitchen Design</h3>
              <p className="service-tagline">Smart storage · Premium finishes</p>
            </div>
          </div>

          <div className="service-card card-half-right-top">
            <img src={imgResidential} alt="Residential Interior Design" className="service-img" loading="lazy" 
                 onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"; }} />
            <div className="service-overlay">
              <h3 className="service-name">Residential Interior Design</h3>
              <p className="service-tagline">Creating comfortable and stylish homes tailored to your lifestyle</p>
            </div>
          </div>
          
          <div className="service-card card-quarter-1">
            <img src={imgOffice} alt="Office & Commercial" className="service-img" loading="lazy" />
            <div className="service-overlay">
              <h3 className="service-name">Office & Commercial</h3>
              <p className="service-tagline">Inspire · Perform · Brand</p>
            </div>
          </div>
        </div>

        {/* BOTTOM FIXED GROUP (Bottom 3 items for mobile grid) */}
        <div className="mobile-bottom-grid">
          <div className="service-card card-half-top">
            <img src={imgLiving} alt="Living Room Design" className="service-img" loading="lazy" />
            <div className="service-overlay">
              <h3 className="service-name">Living Room Design</h3>
              <p className="service-tagline">Designing welcoming spaces that reflect your taste</p>
            </div>
          </div>

          <div className="service-card card-half-bottom">
            <img src={imgBedroom} alt="Bedroom Interior" className="service-img" loading="lazy" />
            <div className="service-overlay">
              <h3 className="service-name">Bedroom Interior</h3>
              <p className="service-tagline">Cozy and aesthetic designs for relaxation and comfort</p>
            </div>
          </div>

          <div className="service-card card-quarter-2">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3579.6955691457447!2d73.03348897541532!3d26.20657967707512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDEyJzIzLjciTiA3M8KwMDInMDkuOCJF!5e0!3m2!1sen!2sin!4v1775128186745!5m2!1sen!2sin" 
              style={{ border: 0, width: "100%", height: "100%" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="service-img"
            ></iframe>
            {/* Keep the overlay text floating above the map (interaction still works) */}
            <div className="service-overlay">
              <h3 className="service-name">Map</h3>
              <p className="service-tagline">Find us easily · Visit our studio</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
