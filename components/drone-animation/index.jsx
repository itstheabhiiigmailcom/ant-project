'use client';
import { useEffect, useRef } from 'react';
import './index.scss';

const DroneHero = ({ backgroundImage, droneImage }) => {
  const bgRef = useRef(null);
  const overlayRef = useRef(null);
  const droneRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const parent = parentRef.current;
    const drone = droneRef.current;
    const bg = bgRef.current;
    const overlay = overlayRef.current;

    const handleScroll = () => {
      if (!parent || !drone || !bg || !overlay) return;

      // Get the scroll position relative to the parent
      const parentRect = parent.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(1, -parentRect.top / (parentRect.height / 2)),
      );
      // console.log(scrollProgress);
      // Drone animation
      const rotation = scrollProgress * 180; // Rotate 180 degrees
      const scale = 2 + scrollProgress * 1.5; // Zoom in effect
      const translateY = -(scrollProgress * 250); // Move up gradually
      const opacity = scrollProgress < 1 ? 1 : 1 - (scrollProgress - 1) * 5; // Keep visible until it exits

      drone.style.transform = `translate(-50%, ${translateY}%) rotate(${rotation}deg) scale(${scale})`;
      drone.style.opacity = opacity;

      // Black overlay animation
      const overlayOpacity = scrollProgress < 0.9 ? scrollProgress * 0.8 : 1;
      overlay.style.opacity = overlayOpacity;

      // Background zoom animation
      const bgScale = 1.5 - scrollProgress * 0.5;
      bg.style.transform = `scale(${bgScale})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={parentRef} className="parentSection">
      <header className="heroSection">
        <div
          ref={bgRef}
          className="backgroundImage"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div ref={overlayRef} className="blackOverlay" />
        <div
          ref={droneRef}
          className="droneImage"
          style={{ backgroundImage: `url(${droneImage})` }}
        />
      </header>
    </div>
  );
};

export default DroneHero;
