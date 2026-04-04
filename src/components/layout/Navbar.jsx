import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import logoImg from '../../assets/logos/logo.webp';

const Navbar = ({ isHome }) => {
  const location = useLocation();

  const handleScroll = (e, targetId) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${targetId}`);
      }
    }
  };

  return (
    <nav className={`navbar ${!isHome ? 'navbar-global' : ''}`}>
      <Link to="/" className="logo">
        <img src={logoImg} alt="E1 Logo" fetchPriority="high" decoding="sync" />
      </Link>
      
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <a href="/#services" onClick={(e) => handleScroll(e, 'services')}>Services</a>
        <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        {location.pathname === '/' ? (
          <a href="/#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
        ) : (
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        )}
      </div>
      
      <div className="nav-action">
        <button className="btn-consult">CONSULT NOW &rarr;</button>
      </div>

      <button className="hamburger-menu" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
