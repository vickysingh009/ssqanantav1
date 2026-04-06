import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import SplashScreen from './components/layout/SplashScreen';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import NavigationProgress from './components/layout/NavigationProgress';
import FloatingChat from './components/widgets/FloatingChat';
import ConsultForm from './components/widgets/ConsultForm';

// Route Splitting (Lazy Loading)
export const prefetchRoute = (path) => {
  const routes = {
    '/': () => import('./sections/Home/Home'),
    '/portfolio': () => import('./pages/Portfolio'),
    '/about': () => import('./pages/AboutPage'),
    '/contact': () => import('./pages/ContactPage'),
    '/projects': () => import('./pages/ProjectsPage'),
    '/services': () => import('./pages/ServicesPage'),
  };
  if (routes[path]) {
    routes[path]().catch(err => console.warn('Prefetch failed:', err));
  }
};

const Home = lazy(() => import('./sections/Home/Home'));
const PortfolioPage = lazy(() => import('./pages/Portfolio'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const DetailPage = lazy(() => import('./pages/DetailPage'));

// Wrapper: reads project from React Router location.state
function DetailPageWrapper() {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project || null;

  React.useEffect(() => {
    if (!project) {
      navigate('/portfolio');
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return <DetailPage project={project} />;
}

// A clean fallback loader while chunks are downloaded
const PageLoader = () => (
  <div className="min-h-screen w-full bg-[#1C1A19]" aria-hidden="true" />
);

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  return (
    <HelmetProvider>
      <NavigationProgress />
      <ScrollToTop />
      <Navbar isHome={location.pathname === '/'} />
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Routes>
        <Route path="/" element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
        <Route path="/services" element={<Suspense fallback={<PageLoader />}><ServicesPage /></Suspense>} />
        <Route path="/portfolio" element={<Suspense fallback={<PageLoader />}><PortfolioPage /></Suspense>} />
        <Route path="/projects" element={<Suspense fallback={<PageLoader />}><ProjectsPage /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<PageLoader />}><AboutPage /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<PageLoader />}><ContactPage /></Suspense>} />
        <Route path="/project/:id" element={<Suspense fallback={<PageLoader />}><DetailPageWrapper /></Suspense>} />
      </Routes>
      <Footer />
      <FloatingChat />
      <ConsultForm />
    </HelmetProvider>
  );
}

export default App;
