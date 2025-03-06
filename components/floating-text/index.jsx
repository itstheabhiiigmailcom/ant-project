'use client';

import { useEffect, useRef, useState } from 'react';
import './index.scss';

const FloatingText = ({
  className = 'size-full',
  text = 'Red Ant Technologies',
  textColor = '#000000',
  fontSize = '22px',
  fontFamily = 'Cursive',
  letterSpacing = '2px',
  animationDuration = 0.3,
  animationDelay = 0.2,
  maxCharsPerLine = 40,
  lineSpacing = 8,
  backgroundImage = '/text-animation/text-bg.avif',
}) => {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Split text into lines
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  words.forEach((word) => {
    if ((currentLine + word).length <= maxCharsPerLine) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  });
  if (currentLine) lines.push(currentLine);

  useEffect(() => {
    const containerNode = containerRef.current; // Store the current value in a variable

    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.5, // 50% of the element must be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting);
      });
    }, options);

    if (containerNode) {
      observer.observe(containerNode);
    }

    return () => {
      if (containerNode) {
        observer.unobserve(containerNode);
      }
    };
  }, []);

  // Calculate total animation duration for text animation
  const totalTextDuration =
    lines.reduce((acc, line) => acc + line.length, 0) * animationDelay +
    animationDuration +
    1; // Add 1 second buffer

  return (
    <div
      ref={containerRef}
      className={`floating-text relative flex items-center justify-center overflow-hidden ${className}`}
    >
      <div
        className={`kenburns-right-normal absolute inset-0 h-full w-full ${isInView ? 'animate' : ''}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5,
        }}
      ></div>

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        className="z-10 max-h-full max-w-full"
      >
        <g className="layer">
          {lines.map((line, lineIndex) => (
            <text
              className={`${fontSize} ${letterSpacing}`}
              key={lineIndex}
              x="10%"
              y={`${35 + lineIndex * lineSpacing}%`}
              textAnchor="start"
              dominantBaseline="middle"
              style={{
                fontFamily,
                fill: textColor,
              }}
            >
              {line.split('').map((char, index) => (
                <tspan key={index}>
                  {char}
                  {isInView && (
                    <animate
                      attributeName="opacity"
                      values="0; 1; 1; 0"
                      keyTimes="0; 0.1; 0.9; 1"
                      dur={`${totalTextDuration}s`}
                      begin={`${(lineIndex * maxCharsPerLine + index) * animationDelay}s`}
                      repeatCount="indefinite"
                    />
                  )}
                </tspan>
              ))}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default FloatingText;
