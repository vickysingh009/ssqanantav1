import { useEffect, useRef, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * NavigationProgress - Top loading bar (NProgress style)
 * Shows a slim gold bar instantly on any internal link click.
 * More visible: 5px height, bright gold, strong glow.
 */
export default function NavigationProgress() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const rafRef = useRef(null);
  const timerRef = useRef(null);
  const isNavigating = useRef(false);

  const startProgress = useCallback(() => {
    // Always restart — cancel any in-progress animation
    cancelAnimationFrame(rafRef.current);
    clearTimeout(timerRef.current);
    isNavigating.current = true;
    setShow(true);
    setProgress(0);

    let p = 0;
    const tick = () => {
      p = p < 30 ? p + 10 : p < 60 ? p + 4 : p < 80 ? p + 1 : p;
      setProgress(p);
      if (p < 80) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const completeProgress = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setProgress(100);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShow(false);
      setProgress(0);
      isNavigating.current = false;
    }, 400);
  }, []);

  // Complete when new route renders
  useEffect(() => {
    if (isNavigating.current) {
      completeProgress();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Intercept internal link clicks
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;
      const isInternal = href.startsWith('/') && !href.startsWith('//');
      const isSamePage = href === location.pathname;
      if (isInternal && !isSamePage) {
        startProgress();
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [location.pathname, startProgress]);

  // Intercept programmatic navigation
  useEffect(() => {
    const originalPushState = window.history.pushState.bind(window.history);
    window.history.pushState = (...args) => {
      startProgress();
      return originalPushState(...args);
    };
    return () => { window.history.pushState = originalPushState; };
  }, [startProgress]);

  if (!show) return null;

  return (
    <>
      {/* Main progress bar */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '5px',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #8B6B4A 0%, #B89672 35%, #C9A882 60%, #B89672 80%, #9A7A5A 100%)',
          zIndex: 99999,
          transition: progress === 100
            ? 'width 0.2s ease-out'
            : 'width 0.12s linear',
          boxShadow: '0 0 14px 2px rgba(184, 150, 114, 0.7), 0 2px 6px rgba(184, 150, 114, 0.4)',
          borderRadius: '0 4px 4px 0',
          pointerEvents: 'none',
        }}
      />
      {/* Glowing dot at the tip */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '-2px',
          left: `calc(${progress}% - 6px)`,
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: '#C9A882',
          boxShadow: '0 0 10px 4px rgba(184, 150, 114, 0.85)',
          zIndex: 99999,
          transition: progress === 100
            ? 'left 0.2s ease-out'
            : 'left 0.12s linear',
          pointerEvents: 'none',
          opacity: progress > 2 && progress < 100 ? 1 : 0,
        }}
      />
    </>
  );
}
