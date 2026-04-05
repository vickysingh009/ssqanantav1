import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import SplashScreen from './components/layout/SplashScreen';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
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

  if (!project) {
    // If no project data (e.g. direct URL access), redirect back to portfolio
    React.useEffect(() => { navigate('/portfolio'); }, []);
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
      <ScrollToTop />
      <Navbar isHome={location.pathname === '/'} />
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project/:id" element={<DetailPageWrapper />} />
        </Routes>
      </Suspense>
      <Footer />
      <FloatingChat />
      <ConsultForm />
    </HelmetProvider>
  );
}

export default App;
