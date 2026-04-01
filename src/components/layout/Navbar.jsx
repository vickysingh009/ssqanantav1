import React from 'react';
import Button from '../ui/Button';
import logoImg from '../../assets/logos/logo.webp';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImg} alt="E1 Logo" />
      </div>
      
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      
      <div className="nav-action">
        <Button variant="light">Book Now</Button>
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
