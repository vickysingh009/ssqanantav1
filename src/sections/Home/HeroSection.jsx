import React from 'react';
import HeroContent from './HeroContent';
import bgDesktop from '../../assets/images/hero_section_image.webp';
import bgMobile from '../../assets/mobile_assets/hero_mobile.webp';

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Hero background image as real <img> for browser LCP priority */}
      <img
        src={bgDesktop}
        srcSet={`${bgMobile} 768w, ${bgDesktop} 1440w`}
        sizes="(max-width: 768px) 100vw, 100vw"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        loading="eager"
        decoding="sync"
        className="hero-bg-img"
      />
      <div className="hero-overlay"></div>
      <HeroContent />
    </div>
  );
};

export default HeroSection;
