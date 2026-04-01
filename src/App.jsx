import React, { useState } from 'react';
import './App.css';
import Home from './sections/Home/Home';
import SplashScreen from './components/layout/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Home />
    </>
  );
}

export default App;
