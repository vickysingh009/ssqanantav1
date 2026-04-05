import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

const HeroContent = () => {
  const navigate = useNavigate();
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
        <button 
          className="btn-dark" 
          onClick={() => navigate('/portfolio')}
          style={{ position: 'relative', zIndex: 9999, touchAction: 'manipulation' }}
        >
          View Portfolio
        </button>
        <button 
          className="btn-light" 
          onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-consult-form')); }}
          style={{ position: 'relative', zIndex: 9999, touchAction: 'manipulation' }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
