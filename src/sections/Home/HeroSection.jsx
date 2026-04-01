import React from 'react';
import HeroContent from './HeroContent';
import bgDesktop from '../../assets/images/hero_section_image.webp';
import bgMobile from '../../assets/mobile_assets/hero_mobile.webp';

const HeroSection = () => {
  return (
    <div 
      className="hero-container" 
      style={{ 
        '--bg-desktop': `url(${bgDesktop})`,
        '--bg-mobile': `url(${bgMobile})` 
      }}
    >
      <div className="hero-overlay"></div>
      <HeroContent />
    </div>
  );
};

export default HeroSection;
