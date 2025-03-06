import React, { useEffect, useState } from 'react';

const CurveLineWithDot = ({ className }) => {
  const [mounted, setMounted] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Ensure animations only run on client-side
  useEffect(() => {
    setMounted(true);
    setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false); // Start disappearing animation after 6 seconds
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <svg
      className={`absolute ${className}`} // Use the className prop for positioning
      width="869"
      height="450"
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="matrix(1,0,0,1,211,194.5)">
        <g transform="matrix(1,0,0,1,0.018,0.266)">
          <path
            className={`curve-line ${animate ? '' : 'disappear'}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeMiterlimit="4"
            stroke="#059669"
            strokeOpacity="1"
            strokeWidth="2"
            d="M 37 -185 C 37 -185 75.863 -185.5 75.863 -185.5 C 86.7614 -185.5 95.5958 -170.776 95.5958 -152.612 C 95.5958 -134.448 86.7614 -119.724 75.863 -119.724 C 75.863 -119.724 -111.3646 -119.724 -111.3646 -119.724 C -123.3046 -119.724 -132.9838 -103.592 -132.9838 -83.692 C -132.9838 -63.792 -123.3046 -47.66 -111.3646 -47.66 C -111.3646 -47.66 55.229 -47.66 55.229 -47.66 C 67.5698 -47.66 77.5736 -30.987 77.5736 -10.419 C 77.5736 10.149 67.5698 26.822 55.229 26.822 C 55.229 26.822 -70.3288 26.822 -70.3288 26.822 C -81.7078 26.822 -90.9322 42.196 -90.9322 61.161 C -90.9322 80.126 -81.7078 95.5 -70.3288 95.5 C -70.3288 95.5 62.6756 95.5 610 92"
          />
          {mounted && (
            <circle
              cx="0"
              cy="0"
              r="8"
              fill="#059669"
              stroke="#fff"
              strokeWidth="2"
              className={`${animate ? 'opacity-0' : 'curve-dot-animation'}`}
            />
          )}
        </g>
      </g>
    </svg>
  );
};

export default CurveLineWithDot;
