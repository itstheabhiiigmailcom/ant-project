'use client';
import { useEffect, useState } from 'react';
import './index.scss';
import LineWithDot from './components/paths/line-with-dots';
import CurveLineWithDot from './components/paths/curve-line';
import MailIcon from './components/icons/mail-icon';
import UserIcon from './components/icons/user-icon';
import HomeIcon from './components/icons/home-icon';
import PlusIcon from './components/icons/plus-icon';
import CheckIcon from './components/icons/check-icon';

export default function ComplianceDashboard() {
  const [mounted, setMounted] = useState(false);
  // const pathRef = useRef(null); // Create a ref for the path
  // const [pathLength, setPathLength] = useState(0); // State to store the path length

  // Ensure animations only run on client-side
  useEffect(() => {
    setMounted(true);
  }, []);

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
          <div className="compliance-dashboard relative w-full overflow-hidden bg-white p-8">
            {/* Left side heading */}
            <div className="mb-16 max-w-md">
              <h1 className="text-4xl font-bold text-slate-800">
                State compliance <br />
                the <span className="text-emerald-600">easy way.</span>
              </h1>

              {/* Info box on right */}
              <div className="absolute top-8 right-8 max-w-xs border-l-2 border-slate-300 pl-4">
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
                <div className="space-y-20">
                  {/* Item-1 */}
                  <div className="flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
                    <div className="rounded-full bg-slate-100 p-1">
                      <MailIcon />
                    </div>
                    <span className="text-sm font-medium">
                      Withholding tax account
                    </span>
                  </div>

                  {/* Animated dotted line */}
                  <LineWithDot
                    mounted={mounted}
                    top={25} // Pass top position (percentage)
                    left={44} // Pass left position (percentage)
                    width={220}
                    height={120}
                    transform="rotate(36deg)"
                  />

                  {/* Item-2 */}
                  <div className="flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
                    <div className="rounded-full bg-slate-100 p-1">
                      <PlusIcon />
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Unemployment</span>
                      <br />
                      <span className="text-xs">Insurance account</span>
                    </div>

                    {/* Animated dotted line */}

                    <LineWithDot
                      mounted={mounted}
                      top={52} // Pass top position (percentage)
                      left={41.5} // Pass left position (percentage)
                      width={220}
                      height={120}
                      transform="rotate(26deg)"
                    />
                  </div>

                  {/* curve Animated line with dot */}
                  <CurveLineWithDot
                    className="-top-[81px] -left-[253px]" // Tailwind classes for positioning
                  />
                </div>

                {/* Center - City illustration */}
                <div className="mt-[121px] flex items-center justify-center">
                  <svg
                    width="200"
                    height="6"
                    className="home-icon-bottom-line absolute bottom-[40px] opacity-0"
                  >
                    <line
                      x1="0"
                      y1="3"
                      x2="200"
                      y2="3"
                      stroke="#22c55e"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="home-icon-fadein flex h-48 w-48 items-center justify-center rounded-full bg-slate-100">
                    <HomeIcon
                      width={100}
                      height={100}
                      strokeColor="#22c55e"
                      fillColor="#14532d"
                      className="custom-class"
                    />
                  </div>
                </div>

                {/* Right side items */}
                <div className="space-y-20">
                  <div className="flex w-fit items-center gap-3 rounded-full bg-slate-800 px-4 py-2 shadow-md">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-700">
                      <UserIcon
                        width={40}
                        height={40}
                        bgColor="#475569"
                        fillColor="#fff"
                        strokeColor="#fff"
                        className="custom-class"
                      />
                    </div>
                    <div className="text-white">
                      <div className="text-xs">New hire in New York</div>
                      <div className="font-medium">Leon Bennett</div>
                    </div>
                    {/* Animated dotted line */}

                    <LineWithDot
                      mounted={mounted}
                      top={30} // Pass top position (percentage)
                      left={56} // Pass left position (percentage)
                      width={220}
                      height={120}
                      transform="rotate(142deg)"
                    />
                  </div>

                  <div className="ml-[61px] flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
                    <div className="rounded-full bg-slate-100 p-1">
                      <CheckIcon />
                    </div>
                    <span className="text-sm font-medium">Employee move</span>
                  </div>

                  {/* Animated dotted line */}
                  <LineWithDot
                    mounted={mounted}
                    top={54} // Pass top position (percentage)
                    left={59} // Pass left position (percentage)
                    width={220}
                    height={120}
                    transform="rotate(-202deg)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </foreignObject>
    </svg>
  );
}
