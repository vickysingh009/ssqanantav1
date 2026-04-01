import React, { useEffect, useState } from 'react';
import './SplashScreen.css';
import splashLogo from '../../assets/splashscreen/splashlogo.webp';

const SplashScreen = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fading out the splash after 1.8 seconds (duration of logo zoom animation)
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1800);

    // Tell the parent App to officially clear the splash state once CSS fade finishes
    const unmountTimer = setTimeout(() => {
      onComplete();
    }, 2600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [onComplete]);

  return (
    <div className={`splash-container ${isFading ? 'fade-out' : ''}`}>
      <img src={splashLogo} alt="E1 Premium Splash" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
