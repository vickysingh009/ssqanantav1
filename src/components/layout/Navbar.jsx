import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { prefetchRoute } from '../../App';
import logoImg from '../../assets/logos/logo.webp';

const Navbar = ({ isHome }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Swipe gesture states
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    let ticking = false;
    const handleScrollEvent = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > window.innerHeight * 0.15);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScrollEvent, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [location.pathname]);

  const handleScroll = (e, targetId) => {
    if (location.pathname === '/') {
      e.preventDefault();
      setIsMenuOpen(false);
      document.body.style.overflow = 'auto';
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${targetId}`);
      }
    } else {
      setIsMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;

    // Agar upar ki taraf swipe (distance positive) 50px se zyada hai, toh close karein
    if (distance > 50 && isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  // Menu items config for mapping
  const menuConfig = [
    { name: 'Home', path: '/', isHash: false },
    { name: 'Services', path: '/services', isHash: false },
    { name: 'Portfolio', path: '/portfolio', isHash: false },
    { name: 'About', path: '/about', isHash: false },
    { name: 'Contact', path: location.pathname === '/' ? 'contact' : '/contact', isHash: location.pathname === '/' }
  ];

  return (
    <>
      <nav
        className={`navbar transition-[padding,background-color,box-shadow] duration-700 ease-in-out !z-[200] ${!isHome ? 'navbar-global' : ''
          } ${isMenuOpen
            ? 'max-md:!fixed max-md:!top-0 max-md:!left-0 max-md:!w-full max-md:!bg-transparent max-md:!shadow-none max-md:!py-6'
            : isHome
              ? (isScrolled ? '!fixed !top-0 !left-0 !w-full !bg-[#1A1A1A]/98 shadow-[0_4px_20px_rgba(0,0,0,0.5)] !py-[8px]' : '!fixed !top-0 !left-0 !w-full bg-transparent shadow-none !py-8')
              : ''
          }`}
      >
        {/* DESKTOP LOGO */}
        <Link to="/" className="logo relative !z-[210] hidden md:flex items-center" aria-label="Home - S² Ananta">
          <img src={logoImg} alt="E1 Logo" fetchPriority="high" decoding="sync" className={`transition-[height] duration-700 ${(!isHome || isScrolled) ? '!h-[48px]' : '!h-[60px]'}`} />
        </Link>

        {/* MOBILE TEXT LOGO */}
        <Link
          to="/"
          className={`relative !z-[210] flex flex-col md:hidden transition-[transform] duration-500 origin-left ${isHome && isScrolled && !isMenuOpen ? 'scale-[0.85]' : 'scale-100'
            }`}
          style={{ color: isMenuOpen ? '#F5E9DC' : '#FFFFFF' }}
        >
          <span className="font-serif text-[18px] tracking-[0.14em] uppercase">
            S² ANANTA
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="nav-links hidden md:flex">
          <Link to="/" onMouseEnter={() => prefetchRoute('/')} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/services" onMouseEnter={() => prefetchRoute('/services')} className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/portfolio" onMouseEnter={() => prefetchRoute('/portfolio')} className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
          <Link to="/about" onMouseEnter={() => prefetchRoute('/about')} className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          {location.pathname === '/' ? (
            <a href="/#contact" onMouseEnter={() => prefetchRoute('/contact')} onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
          ) : (
            <Link to="/contact" onMouseEnter={() => prefetchRoute('/contact')} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          )}
        </div>

        {/* DESKTOP ACTION */}
        <div className="nav-action hidden md:flex">
          {/* 
            TODO [Architecture Cleanup]: 
            Replace raw window.dispatchEvent with global state (like Zustand or React Context). 
            Pass 'openConsultModal' via context to decouple from raw DOM events.
          */}
          <button
            className="btn-consult"
            onClick={() => window.dispatchEvent(new Event('open-consult-form'))}
          >
            CONSULT NOW &rarr;
          </button>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={toggleMenu}
          className="relative !z-[210] w-8 h-8 flex items-center justify-end focus:outline-none md:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="relative w-7 h-4">
            <span className={`absolute right-0 w-7 h-[1.5px] top-1/2 transition-all duration-300 ease-in-out origin-center ${isMenuOpen ? '-translate-y-1/2 rotate-45 bg-[#F5E9DC]' : 'translate-y-[-7px] bg-[#EAE8E5]'
              }`}></span>

            <span className={`absolute right-0 w-7 h-[1.5px] top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out origin-center ${isMenuOpen ? 'scale-x-0 opacity-0 bg-[#F5E9DC]' : 'scale-x-100 opacity-100 bg-[#EAE8E5]'
              }`}></span>

            <span className={`absolute right-0 w-7 h-[1.5px] top-1/2 transition-all duration-300 ease-in-out origin-center ${isMenuOpen ? '-translate-y-1/2 -rotate-45 bg-[#F5E9DC]' : 'translate-y-[7px] bg-[#EAE8E5]'
              }`}></span>
          </div>
        </button>
      </nav>

      {/* MOBILE FULLSCREEN OVERLAY MENU */}
      <div
        id="mobile-menu"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={`fixed inset-0 bg-[#46332A] z-[150] flex flex-col pt-32 px-9 transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-y-0 menu-open' : '-translate-y-full'
          }`}
      >
        <div className="flex flex-col gap-[22px]">
          {menuConfig.map((item, index) => {
            const isActive = location.pathname === item.path || (location.pathname === '/' && item.name === 'Home');

            return (
              <div key={item.name} className={`menu-item delay-${index + 1}`}>
                {item.isHash ? (
                  <a
                    href={`#${item.path}`}
                    onClick={(e) => handleScroll(e, item.path)}
                    className="group flex items-baseline gap-4"
                  >
                    <span className="text-[#D4B38C] text-xs font-light tracking-wide">
                      0{index + 1}
                    </span>
                    <span className={`text-[38px] font-serif tracking-wide transition-colors ${isActive ? 'text-[#F5E9DC] italic' : 'text-[#D8C7B8] group-hover:text-[#F5E9DC]'}`}>
                      {item.name}
                    </span>
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    onMouseEnter={() => prefetchRoute(item.path)}
                    onTouchStart={() => prefetchRoute(item.path)}
                    onClick={() => { setIsMenuOpen(false); document.body.style.overflow = 'auto'; }}
                    className="group flex items-baseline gap-4"
                  >
                    <span className="text-[#D4B38C] text-xs font-light tracking-wide">
                      0{index + 1}
                    </span>
                    <span className={`text-[38px] font-serif tracking-wide transition-colors ${isActive ? 'text-[#F5E9DC] italic' : 'text-[#D8C7B8] group-hover:text-[#F5E9DC]'}`}>
                      {item.name}
                    </span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Book Consultation Button */}
        <div className="menu-item delay-6 mt-12 w-full">
          {/* TODO [Architecture Cleanup]: Replace dispatchEvent with Context API/Zustand logic */}
          <button
            onClick={() => { setIsMenuOpen(false); document.body.style.overflow = 'auto'; window.dispatchEvent(new Event('open-consult-form')); }}
            className="w-full bg-[#F5E9DC] text-[#3A2A24] py-3.5 px-6 text-[10px] font-bold uppercase tracking-[0.15em] rounded-[2px] hover:bg-white transition-colors"
          >
            Book Consultation
          </button>
        </div>

        {/* Menu Footer Info */}
        <div className="menu-item delay-7 absolute bottom-10 left-9 right-9">
          <div className="w-full h-[1px] bg-white/10 mb-5"></div>
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-1.5">
              <span className="text-[#D4B38C] text-[8px] uppercase tracking-widest font-bold">Contact</span>
              <a href="tel:+917878538299" className="text-[12px] font-light tracking-wide" style={{ color: '#FFFFFF' }}>+91 78785 38299</a>
            </div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/s_sq_ananta_design?igsh=MXMzaGoxam5odnZtdQ==" target="_blank" rel="noreferrer" className="hover:text-[#D4B38C] text-[10px] uppercase tracking-widest transition-colors" style={{ color: '#FFFFFF' }}>IG</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#D4B38C] text-[10px] uppercase tracking-widest transition-colors" style={{ color: '#FFFFFF' }}>FB</a>
            </div>
          </div>
        </div>

        {/* Swipe indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full"></div>
      </div>
    </>
  );
};

export default Navbar;
