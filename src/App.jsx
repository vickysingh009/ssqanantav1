import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import SplashScreen from './components/layout/SplashScreen';
import Navbar from './components/layout/Navbar';
import ScrollToTop from './components/ScrollToTop';

// Route Splitting (Lazy Loading)
const Home = lazy(() => import('./sections/Home/Home'));
const PortfolioPage = lazy(() => import('./pages/Portfolio'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));

// A clean fallback loader while chunks are downloaded
const PageLoader = () => (
  <div className="min-h-screen w-full flex justify-center items-center bg-[#F8F9FA]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-[#B89672]/30 border-t-[#B89672] rounded-full animate-spin"></div>
      <span className="text-[#8B7355] text-xs font-semibold uppercase tracking-widest animate-pulse">Loading Room...</span>
    </div>
  </div>
);

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  return (
    <HelmetProvider>
      <ScrollToTop />
      <Navbar isHome={location.pathname === '/'} />
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
