import React, { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../hooks/use-mobile";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  backgroundImage?: string;
  disableOnMobile?: boolean;
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  className = "",
  backgroundImage,
  disableOnMobile = true,
}: ParallaxSectionProps) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    // Disable parallax on mobile or if user prefers reduced motion
    if ((isMobile && disableOnMobile) || prefersReducedMotion) {
      return;
    }

    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffset(rate);
      }
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, isMobile, disableOnMobile, prefersReducedMotion]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: (isMobile && disableOnMobile) || prefersReducedMotion 
              ? 'none' 
              : `translateY(${offset}px)`,
            willChange: (isMobile && disableOnMobile) || prefersReducedMotion 
              ? 'auto' 
              : 'transform',
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
