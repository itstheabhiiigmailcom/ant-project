'use client';

import { useState, useEffect, useRef } from 'react';
import './index.scss';

export default function ComplianceDashboard() {
  const [mounted, setMounted] = useState(false);
  const [animationState, setAnimationState] = useState('initial'); // initial, hold, undraw
  const cityRef = useRef(null);
  const leftItemsRef = useRef(null);
  const rightItemsRef = useRef(null);
  const curveLineRef = useRef(null);
  const curveDotRef = useRef(null);

  // Animation sequence timing
  useEffect(() => {
    setMounted(true);

    // Step 1: Initial draw (happens automatically with CSS)

    // Step 2: Hold for a few seconds, then fade out side items
    const holdTimer = setTimeout(() => {
      setAnimationState('hold');
      if (leftItemsRef.current)
        leftItemsRef.current.classList.add('fade-out-items');
      if (rightItemsRef.current)
        rightItemsRef.current.classList.add('fade-out-items');
    }, 3000);

    // Step 3: Start undrawing the curve and move city out
    const undrawTimer = setTimeout(() => {
      setAnimationState('undraw');
      if (curveLineRef.current) curveLineRef.current.classList.add('disappear');
      if (curveDotRef.current) curveDotRef.current.classList.add('disappear');
      if (cityRef.current) cityRef.current.classList.add('city-slide-out');
    }, 5000);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(undrawTimer);
    };
  }, []);

  // Custom PlusIcon component
  const PlusIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flip-icon h-5 w-5 text-slate-600"
    >
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Custom CheckIcon component
  const CheckIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flip-icon h-5 w-5 text-emerald-600"
    >
      <path
        d="M5 12L10 17L19 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1500 800"
      preserveAspectRatio="xMidYMid meet"
    >
      <foreignObject width="100%" height="100%">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Your entire component */}
          <div className="relative w-full overflow-hidden bg-white p-8">
            {/* Left side heading */}
            <div className="mb-16 max-w-md">
              <h1 className="text-slide-in text-4xl font-bold text-slate-800">
                State compliance <br />
                the <span className="text-emerald-600">easy way.</span>
              </h1>

              {/* Info box on right */}
              <div className="text-slide-in absolute top-8 right-8 max-w-xs border-l-2 border-slate-300 pl-4">
                <p className="text-sm text-slate-700">
                  Mosey has everything you need to get compliant in{' '}
                  <span className="font-medium text-emerald-600">
                    all 50 states
                  </span>{' '}
                  in one, easy to use, platform.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="mb-16 grid grid-cols-3 gap-[20px]">
                {/* Left side items */}
                <div ref={leftItemsRef} className="fade-in space-y-20">
                  {/* Item-1 */}
                  <div className="flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
                    <div className="rounded-full bg-slate-100 p-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flip-icon"
                      >
                        <path
                          d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                          stroke="#475569"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 7L12 13L21 7"
                          stroke="#475569"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-slide-in text-sm font-medium">
                      Withholding tax account
                    </span>
                  </div>

                  {/* Animated dotted line */}
                  <svg
                    className="absolute top-[25%] left-[44%] -translate-x-1/2 -translate-y-1/2 transform"
                    width="220"
                    height="120"
                    viewBox="0 0 220 120"
                    style={{
                      transform: 'rotate(36deg)',
                    }}
                  >
                    <path
                      d="M 38 59 H 136"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                    />
                    {mounted && (
                      <circle
                        cx="0"
                        cy="0"
                        r="5"
                        fill="#059669"
                        stroke="#fff"
                        strokeWidth="2"
                        className="dot-animation-2"
                      />
                    )}
                  </svg>

                  {/* Item-2 */}
                  <div className="flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
                    <div className="rounded-full bg-slate-100 p-1">
                      <PlusIcon />
                    </div>
                    <div className="text-slide-in text-sm">
                      <span className="font-medium">Unemployment</span>
                      <br />
                      <span className="text-xs">Insurance account</span>
                    </div>
                    {/* Animated dotted line */}
                    <svg
                      className="absolute top-[52%] left-[41.5%] -translate-x-1/2 -translate-y-1/2 transform"
                      width="220"
                      height="120"
                      viewBox="0 0 220 120"
                      style={{ transform: 'rotate(26deg)' }}
                    >
                      <path
                        d="M 38 59 H 136"
                        fill="none"
                        stroke="#059669"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                      />
                      {mounted && (
                        <circle
                          cx="0"
                          cy="0"
                          r="5"
                          fill="#059669"
                          stroke="#fff"
                          strokeWidth="2"
                          className="dot-animation-2"
                        />
                      )}
                    </svg>
                  </div>

                  {/* curve Animated line with dot */}
                  <svg
                    className="absolute -top-[81px] -left-[40px]"
                    width="450"
                    height="450"
                    viewBox="0 0 420 420"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="matrix(1,0,0,1,211,194.5)">
                      <g transform="matrix(1,0,0,1,0.018,0.266)">
                        <path
                          ref={curveLineRef}
                          className="curve-line"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          strokeMiterlimit="4"
                          stroke="#059669"
                          strokeOpacity="1"
                          strokeWidth="2"
                          d="M 37 -185 C 37 -185 75.863 -185.5 75.863 -185.5 C 86.7614 -185.5 95.5958 -170.776 95.5958 -152.612 C 95.5958 -134.448 86.7614 -119.724 75.863 -119.724 C 75.863 -119.724 -111.3646 -119.724 -111.3646 -119.724 C -123.3046 -119.724 -132.9838 -103.592 -132.9838 -83.692 C -132.9838 -63.792 -123.3046 -47.66 -111.3646 -47.66 C -111.3646 -47.66 55.229 -47.66 55.229 -47.66 C 67.5698 -47.66 77.5736 -30.987 77.5736 -10.419 C 77.5736 10.149 67.5698 26.822 55.229 26.822 C 55.229 26.822 -70.3288 26.822 -70.3288 26.822 C -81.7078 26.822 -90.9322 42.196 -90.9322 61.161 C -90.9322 80.126 -81.7078 95.5 -70.3288 95.5 C -70.3288 95.5 62.6756 95.5 363 95"
                        />
                        {/* Fixed dot at the end of the curve */}
                        <circle
                          ref={curveDotRef}
                          cx="363"
                          cy="95"
                          className="curve-dot"
                        />
                      </g>
                    </g>
                  </svg>
                </div>

                {/* Center - City illustration */}
                <div
                  ref={cityRef}
                  className="mt-[121px] flex items-center justify-center"
                >
                  <div className="flex h-48 w-48 items-center justify-center rounded-full bg-slate-100">
                    <svg
                      width="120"
                      height="120"
                      viewBox="0 0 120 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M60 20V10M40 30H30M90 30H80M85 85H35V45L60 30L85 45V85Z"
                        stroke="#0f766e"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M50 85V65H70V85M35 55H85M35 65H85M35 75H85"
                        stroke="#0f766e"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M50 45H70V55H50V45Z"
                        stroke="#0f766e"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="40"
                        y="85"
                        width="40"
                        height="10"
                        fill="#0f766e"
                      />
                    </svg>
                  </div>
                </div>

                {/* Right side items */}
                <div ref={rightItemsRef} className="fade-in space-y-20">
                  <div className="flex w-fit items-center gap-3 rounded-full bg-slate-800 px-4 py-2 shadow-md">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-700">
                      <svg
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flip-icon"
                      >
                        <rect width="36" height="36" fill="#64748b" />
                        <path
                          d="M18 15C20.2091 15 22 13.2091 22 11C22 8.79086 20.2091 7 18 7C15.7909 7 14 8.79086 14 11C14 13.2091 15.7909 15 18 15Z"
                          fill="#e2e8f0"
                        />
                        <path
                          d="M26 29V27C26 23.6863 23.3137 21 20 21H16C12.6863 21 10 23.6863 10 27V29"
                          stroke="#e2e8f0"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div className="text-slide-in text-white">
                      <div className="text-xs">New hire in New York</div>
                      <div className="font-medium">Leon Bennett</div>
                    </div>
                    {/* Animated dotted line */}
                    <svg
                      className="absolute top-[16%] right-[37%]"
                      width="200"
                      height="100"
                      viewBox="0 0 200 100"
                      style={{
                        transform: 'rotate(142deg)',
                      }}
                    >
                      <path
                        d="M38, 59 H136"
                        fill="none"
                        stroke="#059669"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                      />
                      {mounted && (
                        <circle
                          cx="0"
                          cy="0"
                          r="5"
                          fill="#059669"
                          stroke="#fff"
                          strokeWidth="2"
                          className="dot-animation-2"
                        />
                      )}
                    </svg>
                  </div>

                  <div className="ml-[61px] flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
                    <div className="rounded-full bg-slate-100 p-1">
                      <CheckIcon />
                    </div>
                    <span className="text-slide-in text-sm font-medium">
                      Employee move
                    </span>
                  </div>

                  {/* Animated dotted line */}
                  <svg
                    className="absolute top-[37%] right-[34%]"
                    width="220"
                    height="120"
                    viewBox="0 0 220 120"
                    style={{ transform: 'rotate(-206deg)' }}
                  >
                    <path
                      d="M38, 59 H136"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                    />
                    {mounted && (
                      <circle
                        cx="0"
                        cy="0"
                        r="5"
                        fill="#059669"
                        stroke="#fff"
                        strokeWidth="2"
                        className="dot-animation-2"
                      />
                    )}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </foreignObject>
    </svg>
  );
}
