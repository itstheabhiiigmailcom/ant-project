'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const CarComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      },
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  // Points on the car image with adjusted arrow positions
  const points = [
    {
      id: 1,
      x: 207, // Dot X position
      y: 222, // Dot Y position (upper part)
      name: 'Headlight',
      textX: 207, // Text X position
      textY: 50, // Text Y position (upper part)
      direction: 'up',
    },
    {
      id: 2,
      x: 400,
      y: 300, // Upper part
      name: 'Wheel',
      textX: 400,
      textY: 50,
      direction: 'up',
    },
    {
      id: 3,
      x: 700,
      y: 150, // Lower part
      name: 'Mirror',
      textX: 700,
      textY: 350,
      direction: 'down',
    },
  ];

  return (
    <div
      ref={componentRef}
      className="relative flex h-screen w-full items-center justify-center bg-white"
    >
      {/* Car Image using Next.js Image component */}
      <div className="h-auto w-full">
        <Image
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Safety-Hero-Desktop-Global"
          alt="Car"
          width={2880}
          height={1620}
          unoptimized // Disable optimization for static export
          className="h-auto w-full"
        />
      </div>

      {/* Points, Text, and Arrows */}
      {points.map((point) => (
        <div
          key={point.id}
          className="absolute"
          style={{ top: `${point.textY}px`, left: `${point.textX}px` }}
        >
          {/* Dot */}
          <div
            style={{ top: `${point.y - point.textY}px`, left: '0px' }}
            className={`h-4 w-4 rounded-full bg-black ${
              isVisible ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 ease-in-out`}
          />

          {/* Text */}
          <div
            className={`text-sm font-semibold text-black ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            } transition-all delay-200 duration-1000 ease-in-out`}
          >
            {point.name}
          </div>

          {/* Arrow (Line) */}
          <svg
            className="overflow-visible"
            style={{
              top:
                point.direction === 'up' ? `${point.y - point.textY}px` : '0px',
              left: '0px',
            }}
            width="2"
            height={Math.abs(point.y - point.textY)}
          >
            <line
              x1="2"
              y1={
                point.direction === 'up' ? Math.abs(point.y - point.textY) : 0
              }
              x2="2"
              y2={
                point.direction === 'up' ? 0 : Math.abs(point.y - point.textY)
              }
              stroke="black"
              strokeWidth="2"
              className={`transition-all duration-1000 ease-in-out ${
                isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'
              }`}
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default CarComponent;
