import React from 'react';
import Navbar from '../../components/layout/Navbar';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Home;
