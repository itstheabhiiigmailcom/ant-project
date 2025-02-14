'use client';
import './index.scss';
import { useEffect, useRef, useState } from 'react';

export const BackgroundVideo = ({
  className,
  videoUrl,
  thresholdView = 0.5,
  children,
}) => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleObserver = (entries) => {
      const entry = entries[0];

      if (video) {
        if (entry.isIntersecting) {
          video.play().catch((err) => console.warn('Autoplay prevented:', err));
        } else {
          video.pause();
        }
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: thresholdView,
    });

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [thresholdView]);

  return (
    <div className={`relative w-full bg-black ${className}`}>
      {/* Video Wrapper - Ensures it stays inside the container */}
      <div className="relative h-full w-full overflow-hidden">
        {/* Gray Background while Loading */}
        {isLoading && (
          <div className="shimmer-effect absolute inset-0 transition-opacity duration-500"></div>
        )}

        {/* Background Video (Inside the Wrapper) */}
        <video
          ref={videoRef}
          src={videoUrl}
          className={`h-full w-full object-cover opacity-80 blur-[1px] transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          muted
          loop
          playsInline
          onLoadedData={() => setIsLoading(false)}
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-1 flex items-center justify-center text-white">
        {children}
      </div>
    </div>
  );
};
