'use client';
import { useEffect, useState, useRef } from 'react';
import './index.scss';

const VehicleScrollEffect = ({
  floatingImgScaleFactor = 2.5,
  backgroundImage,
  floatingImg,
  className = '',
  floatingImgClassName = '',
}) => {
  const parentRef = useRef(null);
  const backgroundRef = useRef(null);
  const carRef = useRef(null);
  const wheelFrontRef = useRef(null);
  const wheelBackRef = useRef(null);
  const [initialTop, setInitialTop] = useState(null);
  const [scrollDirection, setScrollDirection] = useState(null);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null); // Timeout to detect scroll stop

  useEffect(() => {
    const floatingElement = carRef.current;
    if (!floatingElement) return;

    const topMatch = floatingImgClassName.match(/top-\[(\d+)%\]/);
    if (topMatch) {
      setInitialTop(parseFloat(topMatch[1]));
    }
  }, [floatingImgClassName]);

  useEffect(() => {
    const parent = parentRef.current;
    const floatingElement = carRef.current;
    const wheelFront = wheelFrontRef.current;
    const wheelBack = wheelBackRef.current;

    if (!parent || !floatingElement || !wheelFront || !wheelBack) return;

    const handleScroll = () => {
      const parentRect = parent.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(1, -parentRect.top / (parentRect.height / 1.2)),
      );

      // Determine scroll direction
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;

      // Car Scaling
      const carScale = 1 + scrollProgress * floatingImgScaleFactor;
      const topPos = initialTop + scrollProgress * 10;
      const wheelScale = 1 + scrollProgress * 0.2;

      floatingElement.style.top = `${topPos}%`;
      floatingElement.style.transform = `scale(${carScale})`;

      // Apply the same transformation to the wheels
      wheelFront.style.transform = `scale(${wheelScale})`;
      wheelBack.style.transform = `scale(${wheelScale})`;

      // Apply animation based on scroll direction
      if (scrollDirection === 'down') {
        wheelFront.classList.add('wheel-rotate');
        wheelFront.classList.remove('wheel-reverse');
        wheelBack.classList.add('wheel-rotate');
        wheelBack.classList.remove('wheel-reverse');
      } else if (scrollDirection === 'up') {
        wheelFront.classList.add('wheel-reverse');
        wheelFront.classList.remove('wheel-rotate');
        wheelBack.classList.add('wheel-reverse');
        wheelBack.classList.remove('wheel-rotate');
      }

      // Clear the previous timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Set a new timeout to detect when scrolling stops
      scrollTimeout.current = setTimeout(() => {
        wheelFront.classList.remove('wheel-rotate', 'wheel-reverse');
        wheelBack.classList.remove('wheel-rotate', 'wheel-reverse');
        setScrollDirection(null); // Reset scroll direction
      }, 100); // Adjust the timeout duration as needed
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [initialTop, scrollDirection, floatingImgScaleFactor]);

  return (
    <div
      ref={parentRef}
      className={`vehicle-scroll-effect relative ${className}`}
    >
      <div className="sticky top-0 h-[50%] max-h-dvh overflow-hidden">
        {/* Background Image */}
        <div
          ref={backgroundRef}
          className="background-image absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />

        {/* Vehicle Image */}
        <div
          ref={carRef}
          className={`floating-element absolute ${floatingImgClassName} -translate-x-1/2 bg-contain bg-center bg-no-repeat`}
          style={{
            backgroundImage: `url(${floatingImg})`,
            opacity: 1,
          }}
        >
          {/* Front Wheel */}
          <div
            ref={wheelFrontRef}
            className="wheel absolute bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url('/vehicle-scroll-effect/left-wheel-copy2.png')`,
              width: '14%',
              height: '23%',
              top: '60%',
              left: '7.1%',
              transformOrigin: 'center center',
              transform: 'scale(1) rotate(-deg)',
            }}
          />

          {/* Rear Wheel */}
          <div
            ref={wheelBackRef}
            className="wheel absolute bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url('/vehicle-scroll-effect/right-wheel-copy3.png')`,
              width: '15%',
              height: '21%',
              top: '60%',
              left: '74.42%',
              transformOrigin: 'center center',
              transform: 'scale(1) rotateX(3deg) rotateY(0deg) rotateZ(-3deg)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VehicleScrollEffect;
