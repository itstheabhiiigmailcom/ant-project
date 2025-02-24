'use client';
import React, { useEffect, useState, useRef } from 'react';
import './index.scss';

const VideoScrollEffect = ({
  videoSrc,
  className = '',
  videoClassName = '',
  children,
  thresholdView = 0.5,
}) => {
  const parentRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleObserver = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        video.play().catch((err) => console.warn('Autoplay prevented:', err));
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: thresholdView,
    });

    observer.observe(video);

    return () => observer.disconnect();
  }, [thresholdView]);

  useEffect(() => {
    const parent = parentRef.current;
    const content = contentRef.current;
    if (!parent || !content) return;

    const totalChildren = React.Children.count(children);

    const handleScroll = () => {
      const parentRect = parent.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(1, -parentRect.top / (parentRect.height - window.innerHeight)),
      );

      const childHeight = 1 / totalChildren;

      for (let i = 0; i < content.children.length; i++) {
        const child = content.children[i];
        const childStart = i * childHeight;
        const childEnd = (i + 1) * childHeight;

        let visibilityProgress =
          (scrollProgress - childStart) / (childEnd - childStart);

        if (visibilityProgress < 0) visibilityProgress = 0;
        if (visibilityProgress > 1) visibilityProgress = 1;

        // Adjusted opacity logic for smooth fade-out at both ends
        const fadeOutStart = 0.2; // Start fading out early
        const fadeOutEnd = 0.8; // Fully faded out near the end

        let opacity;
        if (visibilityProgress < fadeOutStart) {
          opacity = visibilityProgress / fadeOutStart;
        } else if (visibilityProgress > fadeOutEnd) {
          opacity = (1 - visibilityProgress) / (1 - fadeOutEnd);
        } else {
          opacity = 1;
        }

        // Smooth transition effect
        const translateY = (1 - visibilityProgress) * 30;

        child.style.opacity = opacity;
        child.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [children]);

  return (
    <div ref={parentRef} className={`relative w-full ${className}`}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {isLoading && (
          <div className="shimmer-effect absolute inset-0 transition-opacity duration-500"></div>
        )}
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${videoClassName} ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoading(false)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white md:px-8 lg:px-16"
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="child-content flex h-screen items-center justify-center text-center"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoScrollEffect;
