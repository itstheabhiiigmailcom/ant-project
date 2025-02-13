'use client';
import { useEffect, useRef } from 'react';
import './index.scss';

const HeroAnimation = ({
  backgroundImage,
  floatingImage,
  className,
  floatingClassName = '',
}) => {
  const bgRef = useRef(null);
  const floatingRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const parent = parentRef.current;
    const floatingElement = floatingRef.current;
    const bg = bgRef.current;

    const handleScroll = () => {
      if (!parent || !floatingElement || !bg) return;

      // Get the scroll position relative to the parent
      const parentRect = parent.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(1, -parentRect.top / (parentRect.height / 2)),
      );

      // Floating element animation
      const rotation = scrollProgress * 180; // Rotate 180 degrees
      const scale = 2 + scrollProgress * 1.5; // Zoom in effect
      const translateY = -(scrollProgress * 250); // Move up gradually
      const opacity = scrollProgress < 1 ? 1 : 1 - (scrollProgress - 1) * 5; // Keep visible until it exits

      floatingElement.style.transform = `translate(-50%, ${translateY}%) rotate(${rotation}deg) scale(${scale})`;
      floatingElement.style.opacity = opacity;

      // Background opacity animation (fade out completely)
      const bgOpacity = 1 - scrollProgress;
      const bgScale = 1.5 - scrollProgress * 0.5;
      bg.style.transform = `scale(${bgScale})`;
      bg.style.opacity = bgOpacity;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={parentRef} className={`relative ${className}`}>
      <section className="sticky top-0 h-[50%] overflow-hidden">
        <div
          ref={bgRef}
          className="background-image absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: `scale(1.5)`,
          }}
        />
        <div
          ref={floatingRef}
          className={`floating-element absolute top-1/2 left-1/2 bg-contain bg-center bg-no-repeat ${floatingClassName}`}
          style={{
            backgroundImage: `url(${floatingImage})`,
            transform: `translate(-50%, -50%) rotate(0deg) scale(2)`, // Set initial position
            opacity: 1,
          }}
        />
      </section>
    </div>
  );
};

export default HeroAnimation;
