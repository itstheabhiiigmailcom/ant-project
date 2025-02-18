'use client';
import { useEffect, useRef } from 'react';
import './index.scss';

const VehicleScrollEffect = ({
  topPosition = 63,
  leftPosition = 49.8,
  floatingImgScaleFactor = 2.5,
  backgroundImage,
  floatingImg,
  className = '',
}) => {
  const parentRef = useRef(null);
  const backgroundRef = useRef(null);
  const carRef = useRef(null);

  // const initialBgScale = 1.8; // Background starts more zoomed in

  useEffect(() => {
    const parent = parentRef.current;
    const bg = backgroundRef.current;
    const floatingElement = carRef.current;

    if (!parent || !bg || !floatingElement) return;

    const handleScroll = () => {
      const parentRect = parent.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(1, -parentRect.top / (parentRect.height / 1.2)),
      );

      // Car Scaling
      const carScale = 1 + scrollProgress * floatingImgScaleFactor;

      // Adjust the car's top position dynamically (keeping initial position consistent)
      const topPos = topPosition + scrollProgress * 10; // Moves from 65% to 85%

      floatingElement.style.top = `${topPos}%`;
      floatingElement.style.transform = `scale(${carScale})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={parentRef} className={`card-animation relative ${className}`}>
      <section className="sticky top-0 h-[50%] max-h-dvh overflow-hidden">
        {/* Background Image */}
        <div
          ref={backgroundRef}
          className="background-image absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />

        {/* Car Image */}
        <div
          ref={carRef}
          className="floating-element absolute h-20 w-20 -translate-x-1/2 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${floatingImg})`,
            top: `${topPosition}%`, // Initial position remains constant,
            left: `${leftPosition}%`,
            opacity: 1,
          }}
        />
      </section>
    </div>
  );
};

export default VehicleScrollEffect;
