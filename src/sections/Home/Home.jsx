import React, { Suspense, lazy } from 'react';
import HeroSection from './HeroSection';
import LazyViewportReveal from '../../components/layout/LazyViewportReveal';

// Advanced Code Splitting: Dynamically import below-the-fold components
// This drastically reduces the initial JavaScript bundle size.
const Ticker = lazy(() => import('../../components/ui/Ticker'));
const Services = lazy(() => import('../Services/Services'));
const WhyChooseUs = lazy(() => import('../WhyChooseUs/WhyChooseUs'));
const Portfolio = lazy(() => import('../Portfolio/Portfolio'));
const Walkthrough = lazy(() => import('../Walkthrough/Walkthrough'));
const ContactUs = lazy(() => import('../ContactUs/ContactUs'));

import SEO from '../../components/seo/SEO';

const Home = () => {
  return (
    <div className="home-container">
      <SEO 
        title="Home" 
        description="Welcome to S-SQAnata Interior Design. Experience bespoke architectural spaces tailored to your lifestyle." 
      />
      {/* Top of the fold components load immediately */}
      <HeroSection />
      
      {/* 
        Below-the-fold components are loaded via React.lazy() to keep initial payload small. 
        We use a single Suspense boundary so they render as soon as fetched, ensuring 
        anchor links (like #contact) can reliably scroll to the correct DOM heights without layout-shifts. 
      */}
      <Suspense fallback={
        <div className="min-h-screen w-full flex justify-center items-center bg-[#F8F9FA]">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-[#B89672]/30 border-t-[#B89672] rounded-full animate-spin"></div>
            <span className="text-[#8B7355] text-xs font-semibold uppercase tracking-widest animate-pulse">Loading Room...</span>
          </div>
        </div>
      }>
        <Ticker />
        <div id="services">
          <Services />
        </div>
        <WhyChooseUs />
        <Portfolio />
        <Walkthrough />
        <div id="contact">
          <ContactUs />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
