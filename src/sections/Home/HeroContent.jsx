import React from 'react';
import Button from '../../components/ui/Button';

const HeroContent = () => {
  return (
    <div className="hero-content">
      <p className="subtitle">Designing Spaces That Reflect You</p>
      <h1 className="title">
        Elegant Interiors,<br/>
        Thoughtfully Designed
      </h1>
      
      {/* Dynamic text based on screen size as requested */}
      <p className="description desktop-text">
        We create beautiful, functional spaces that match your lifestyle.
      </p>
      <p className="description mobile-text">
        We create beautiful, functional spaces that<br />match your lifestyle.
      </p>
      
      <div className="button-group">
        <Button variant="dark">View Portfolio</Button>
        <Button variant="light">Book Now</Button>
      </div>
    </div>
  );
};

export default HeroContent;
