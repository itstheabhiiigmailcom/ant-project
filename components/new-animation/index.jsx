'use client';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import './index.scss';

const ImageWithLines = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showLines, setShowLines] = useState(false);
  const [reverseAnimation, setReverseAnimation] = useState(false);

  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const containerElement = containerRef.current; // Store the ref's current value

    if (!containerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(containerElement);

    return () => {
      observer.unobserve(containerElement); // Use the stored reference
    };
  }, []);

  useEffect(() => {
    if (startAnimation) {
      setTimeout(() => setShowImage(true), 2000);
      setTimeout(() => setShowLines(true), 2100);
      setTimeout(() => setReverseAnimation(true), 6000);
    }
  }, [startAnimation]);

  return (
    <div
      ref={containerRef}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <div className="text-label absolute top-10 left-10 text-2xl">
        Start Point
      </div>

      <div
        className={`absolute w-full max-w-[300px] items-center transition-transform duration-1000 ${showImage ? 'image-visible' : 'hidden'} ${reverseAnimation ? 'move-left' : ''}`}
      >
        <Image
          src="/image-grid/image1.jpeg"
          alt="Centered Image"
          width={200}
          height={200}
          className="m-auto h-auto w-1/2 object-contain"
          priority
        />
      </div>

      <svg
        className="absolute h-full w-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="5"
            refY="5"
            orient="auto"
          >
            <polygon points="0 0, 10 5, 0 10" fill="#007BFF" />
          </marker>
        </defs>

        {[...Array(8)].map((_, index) => {
          const angle = (index * 360) / 8;
          const radians = (angle * Math.PI) / 180;
          const centerX = 500;
          const centerY = 500;
          const radius = 80;
          const outerRadius = 225;

          const x1 = centerX + radius * Math.cos(radians);
          const y1 = centerY + radius * Math.sin(radians);
          const x2 = centerX + outerRadius * Math.cos(radians);
          const y2 = centerY + outerRadius * Math.sin(radians);

          const textX = centerX + (outerRadius + 10) * Math.cos(radians);
          const textY = centerY + (outerRadius + 10) * Math.sin(radians);

          return (
            <g
              key={index}
              className={`${showLines ? 'fade-group' : 'hidden'} ${reverseAnimation ? 'fade-out' : ''}`}
            >
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className="radial-line"
                strokeWidth="2"
              />

              <circle cx={x1} cy={y1} r="5" className="moving-spot">
                <animate
                  attributeName="cx"
                  from={x1}
                  to={x2}
                  begin="0.5s"
                  dur="1.5s"
                  fill="freeze"
                />
                <animate
                  attributeName="cy"
                  from={y1}
                  to={y2}
                  begin="0.5s"
                  dur="1.5s"
                  fill="freeze"
                />
              </circle>

              <text x={textX} y={textY} className="text-label">
                Text {index + 1}
              </text>
            </g>
          );
        })}

        <path
          ref={pathRef}
          d="M68.8,93c2.96,43.31-85.12,191.39 128.31,177.4c213.43,-13.99-7.64,60.18-41.46,62.22c-33.82,2.04-233.68,29.04-100.69,74.16l53.85,11.17c80.75,17.95 287.71,21.06 318.2,16.05"
          className={`curve-line ${startAnimation ? 'draw' : ''} ${reverseAnimation ? 'disappear' : ''}`}
          stroke="#2185c4"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
      </svg>
    </div>
  );
};

export default ImageWithLines;
