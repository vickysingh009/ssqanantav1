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
  const SectionLoader = () => (
    <div className="w-full h-full min-h-[300px] flex justify-center items-center bg-[#F8F9FA]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-[#B89672]/30 border-t-[#B89672] rounded-full animate-spin"></div>
        <span className="text-[#8B7355] text-xs font-semibold uppercase tracking-widest animate-pulse">Loading...</span>
      </div>
    </div>
  );

  return (
    <div className="home-container">
      <SEO
        title="Home"
        description="Welcome to S-SQAnata Interior Design. Experience bespoke architectural spaces tailored to your lifestyle."
      />
      {/* Top of the fold components load immediately */}
      <HeroSection />

      {/* 
        Below-the-fold components are wrapped individually in LazyViewportReveal 
        and Suspense boundaries. This ensures they ONLY fetch when scrolled near,
        and won't block or hide other already-loaded sections while fetching.
      */}
      <LazyViewportReveal minHeight="150px">
        <Suspense fallback={<SectionLoader />}>
          <Ticker />
        </Suspense>
      </LazyViewportReveal>

      <LazyViewportReveal minHeight="800px">
        <Suspense fallback={<SectionLoader />}>
          <div id="services">
            <Services />
          </div>
        </Suspense>
      </LazyViewportReveal>

      <LazyViewportReveal minHeight="600px">
        <Suspense fallback={<SectionLoader />}>
          <WhyChooseUs />
        </Suspense>
      </LazyViewportReveal>

      <LazyViewportReveal minHeight="800px">
        <Suspense fallback={<SectionLoader />}>
          <Portfolio />
        </Suspense>
      </LazyViewportReveal>

      <LazyViewportReveal minHeight="800px">
        <Suspense fallback={<SectionLoader />}>
          <Walkthrough />
        </Suspense>
      </LazyViewportReveal>

      <LazyViewportReveal minHeight="500px">
        <Suspense fallback={<SectionLoader />}>
          <div id="contact">
            <ContactUs />
          </div>
        </Suspense>
      </LazyViewportReveal>
    </div>
  );
};

export default Home;
