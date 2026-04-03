import React, { useState } from 'react';
import './WhyChooseUs.css';
import imgLivingRoom1 from '../../assets/images/why choose us/why choose us.webp';
import imgLivingRoom2 from '../../assets/images/why choose us/why choose us 2.webp';
import imgLivingRoom3 from '../../assets/images/why choose us/why choose us 3.webp';

const images = [imgLivingRoom1, imgLivingRoom2, imgLivingRoom3];

const WhyChooseUs = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  return (
    <section className="why-choose-us-section">
      <div className="wcu-main-container">
        
        {/* Left Content */}
        <div className="wcu-left-content">
          <h2 className="wcu-heading">Why Choose Us</h2>
          <p className="wcu-subtext">
            We blend creativity, functionality, and precision to craft spaces that truly feel like yours.
          </p>

          <div className="wcu-grid">
            <div className="wcu-grid-item">
              <div className="wcu-num-container">
                <span className="wcu-num">01</span>
                <div className="wcu-num-line"></div>
              </div>
              <h4 className="wcu-item-title">Personalized Designs</h4>
              <p className="wcu-item-desc">Tailored to your vision<br/>and lifestyle.</p>
            </div>
            <div className="wcu-grid-item">
              <div className="wcu-num-container">
                <span className="wcu-num">02</span>
                <div className="wcu-num-line"></div>
              </div>
              <h4 className="wcu-item-title">Attention to Detail</h4>
              <p className="wcu-item-desc">Precision in every element<br/>we design.</p>
            </div>
            <div className="wcu-grid-item">
              <div className="wcu-num-container">
                <span className="wcu-num">03</span>
                <div className="wcu-num-line"></div>
              </div>
              <h4 className="wcu-item-title">Modern & Functional</h4>
              <p className="wcu-item-desc">Stylish, practical spaces that<br/>elevate everyday living.</p>
            </div>
            <div className="wcu-grid-item">
              <div className="wcu-num-container">
                <span className="wcu-num">04</span>
                <div className="wcu-num-line"></div>
              </div>
              <h4 className="wcu-item-title">Budget-Friendly Solutions</h4>
              <p className="wcu-item-desc">Premium quality designs<br/>that fit your budget.</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="wcu-right-wrapper">
          <div className="wcu-color-dots">
            <span className="wcu-color-hint">CHOOSE COLOR</span>
            <span 
              className={`wcu-dot cream ${activeImageIndex === 0 ? 'active' : ''}`} 
              onClick={() => setActiveImageIndex(0)}
            ></span>
            <span 
              className={`wcu-dot blue ${activeImageIndex === 1 ? 'active' : ''}`} 
              onClick={() => setActiveImageIndex(1)}
            ></span>
            <span 
              className={`wcu-dot green ${activeImageIndex === 2 ? 'active' : ''}`} 
              onClick={() => setActiveImageIndex(2)}
            ></span>
          </div>

          <div className="wcu-right-image">
            {images.map((imgSrc, index) => (
              <img 
                key={index}
                src={imgSrc} 
                alt="Modern Beige Living Room Variant" 
                className={`variant-img ${activeImageIndex === index ? 'active' : ''}`}
                loading="lazy" 
                decoding="async"
              />
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Stats Container */}
      <div className="wcu-stats-container">
        <div className="wcu-stat">
          <h3 className="wcu-stat-num">100+</h3>
          <p className="wcu-stat-label">Happy Clients</p>
          <p className="wcu-stat-sub">Satisfied homeowners & businesses</p>
        </div>
        <div className="wcu-stat-divider"></div>
        <div className="wcu-stat">
          <h3 className="wcu-stat-num">80+</h3>
          <p className="wcu-stat-label">Projects Completed</p>
          <p className="wcu-stat-sub">Across residential & commercial</p>
        </div>
        <div className="wcu-stat-divider"></div>
        <div className="wcu-stat">
          <h3 className="wcu-stat-num">5+</h3>
          <p className="wcu-stat-label">Years Experience</p>
          <p className="wcu-stat-sub">Trusted expertise since 2019</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
