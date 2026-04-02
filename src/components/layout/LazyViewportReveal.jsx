import React, { useState, useEffect, useRef } from 'react';

/**
 * LazyViewportReveal Wrapper
 * Blocks child components (and their Heavy JS/Image fetching) from executing 
 * until they physically intersect with the user's viewport, establishing true lazy loading limits.
 */
const LazyViewportReveal = ({ children, minHeight = "400px", fallbackBg = "transparent" }) => {
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // If Observer API is missing (very old browsers), gracefully fallback to native load
    if (!('IntersectionObserver' in window)) {
      setHasEnteredViewport(true);
      return;
    }

    const currentRef = containerRef.current;
    
    // Execute intersection trigger efficiently
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Permanently unlock this section for the lifespan of page route
          setHasEnteredViewport(true);
          observer.disconnect();
        }
      },
      {
        // Fire when the component is within 300px off-screen to prevent visible flashing on fast scrolls
        rootMargin: '300px 0px', 
        threshold: 0.01
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  // Once scrolled over, cleanly inject actual content into standard document flow
  if (hasEnteredViewport) {
    return <>{children}</>;
  }

  // Pre-intersection transparent skeleton to maintain scroll height layout metrics
  return (
    <div 
      ref={containerRef} 
      style={{ 
        minHeight: minHeight, 
        backgroundColor: fallbackBg, 
        width: '100%', 
        position: 'relative' 
      }}
    />
  );
};

export default LazyViewportReveal;
