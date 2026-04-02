import React, { Suspense, lazy } from 'react';
import Navbar from '../../components/layout/Navbar';
import HeroSection from './HeroSection';
import LazyViewportReveal from '../../components/layout/LazyViewportReveal';

// Advanced Code Splitting: Dynamically import below-the-fold components
// This drastically reduces the initial JavaScript bundle size.
const Ticker = lazy(() => import('../../components/ui/Ticker'));
const Services = lazy(() => import('../Services/Services'));
const WhyChooseUs = lazy(() => import('../WhyChooseUs/WhyChooseUs'));

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      {/* Top of the fold components load immediately */}
      <HeroSection />
      
      {/* Below the fold components are strictly viewport-locked and JS-lazy-loaded on demand */}
      <Suspense fallback={<div style={{ minHeight: '300px', backgroundColor: '#efeadf' }}></div>}>
        <LazyViewportReveal minHeight="150px">
          <Ticker />
        </LazyViewportReveal>
        
        <LazyViewportReveal minHeight="600px">
          <Services />
        </LazyViewportReveal>
        
        <LazyViewportReveal minHeight="800px">
          <WhyChooseUs />
        </LazyViewportReveal>
      </Suspense>
    </div>
  );
};

export default Home;
