import React from 'react';
import './Ticker.css';

const Ticker = () => {
  const items = [
    "RESIDENTIAL DESIGN",
    "COMMERCIAL INTERIORS",
    "MODULAR KITCHENS",
    "LUXURY BESPOKE",
    "SPACE PLANNING",
    "OFFICE & COMMERCIAL SPACES",
    "BEDROOM INTERIOR",
    "LIVING ROOM DESIGN"
  ];

  return (
    <div className="ticker-container">
      <div className="ticker-track">
        {/* Original Set */}
        <div className="ticker-content">
          {items.map((item, index) => (
            <span key={`set1-${index}`} className="ticker-item-group">
              <span className="ticker-item">{item}</span>
              <span className="ticker-separator">◆</span>
            </span>
          ))}
        </div>
        
        {/* Duplicate Set for Seamless Infinite Loop */}
        <div className="ticker-content" aria-hidden="true">
          {items.map((item, index) => (
            <span key={`set2-${index}`} className="ticker-item-group">
              <span className="ticker-item">{item}</span>
              <span className="ticker-separator">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
