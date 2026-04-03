import React, { Suspense, lazy } from 'react';
import Navbar from '../../components/layout/Navbar';
import HeroSection from './HeroSection';
import LazyViewportReveal from '../../components/layout/LazyViewportReveal';

// Advanced Code Splitting: Dynamically import below-the-fold components
// This drastically reduces the initial JavaScript bundle size.
const Ticker = lazy(() => import('../../components/ui/Ticker'));
const Services = lazy(() => import('../Services/Services'));
const WhyChooseUs = lazy(() => import('../WhyChooseUs/WhyChooseUs'));
const Portfolio = lazy(() => import('../Portfolio/Portfolio'));
const Walkthrough = lazy(() => import('../Walkthrough/Walkthrough'));

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      {/* Top of the fold components load immediately */}
      <HeroSection />
      
      {/* Each lazy component gets its own Suspense boundary to prevent scroll collapses when chunk-fetching */}
      <Suspense fallback={<div style={{ minHeight: '150px', backgroundColor: 'transparent' }}></div>}>
        <LazyViewportReveal minHeight="150px">
          <Ticker />
        </LazyViewportReveal>
      </Suspense>
      
      <Suspense fallback={<div style={{ minHeight: '600px', backgroundColor: 'transparent' }}></div>}>
        <LazyViewportReveal minHeight="600px">
          <Services />
        </LazyViewportReveal>
      </Suspense>
      
      <Suspense fallback={<div style={{ minHeight: '800px', backgroundColor: 'transparent' }}></div>}>
        <LazyViewportReveal minHeight="800px">
          <WhyChooseUs />
        </LazyViewportReveal>
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '600px', backgroundColor: 'transparent' }}></div>}>
        <LazyViewportReveal minHeight="600px">
          <Portfolio />
        </LazyViewportReveal>
      </Suspense>

      <Suspense fallback={<div style={{ minHeight: '800px', backgroundColor: 'transparent' }}></div>}>
        <LazyViewportReveal minHeight="800px">
          <Walkthrough />
        </LazyViewportReveal>
      </Suspense>
    </div>
  );
};

export default Home;
