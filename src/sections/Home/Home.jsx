import React, { Suspense, lazy } from 'react';
import Navbar from '../../components/layout/Navbar';
import HeroSection from './HeroSection';

// Advanced Code Splitting: Dynamically import below-the-fold components
// This drastically reduces the initial JavaScript bundle size.
const Ticker = lazy(() => import('../../components/ui/Ticker'));
const Services = lazy(() => import('../Services/Services'));

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      {/* Top of the fold components load immediately */}
      <HeroSection />
      
      {/* Below the fold components are lazy-loaded on demand */}
      <Suspense fallback={<div style={{ minHeight: '300px', backgroundColor: '#efeadf' }}></div>}>
        <Ticker />
        <Services />
      </Suspense>
    </div>
  );
};

export default Home;
