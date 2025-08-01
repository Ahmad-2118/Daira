import React, { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../hooks/use-mobile";

interface RevealOnScrollProps {
  children: React.ReactNode;
  animation?:
    | "fadeIn"
    | "slideUp"
    | "slideLeft"
    | "slideRight"
    | "scaleIn"
    | "rotateIn";
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  disableOnMobile?: boolean;
}

export default function RevealOnScroll({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 1000,
  threshold = 0.1,
  className = "",
  disableOnMobile = false,
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    // If disabled on mobile or user prefers reduced motion, show immediately
    if ((isMobile && disableOnMobile) || prefersReducedMotion) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      { 
        threshold,
        rootMargin: isMobile ? '50px' : '100px' // Smaller margin on mobile for better performance
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold, hasAnimated, isMobile, disableOnMobile, prefersReducedMotion]);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out";

    // If disabled on mobile or user prefers reduced motion, show immediately
    if ((isMobile && disableOnMobile) || prefersReducedMotion) {
      return `${baseClasses} opacity-100 transform translate-y-0 translate-x-0 scale-100 rotate-0`;
    }

    if (!isVisible) {
      switch (animation) {
        case "fadeIn":
          return `${baseClasses} opacity-0`;
        case "slideUp":
          return `${baseClasses} opacity-0 transform translate-y-6 sm:translate-y-12`;
        case "slideLeft":
          return `${baseClasses} opacity-0 transform -translate-x-6 sm:-translate-x-12`;
        case "slideRight":
          return `${baseClasses} opacity-0 transform translate-x-6 sm:translate-x-12`;
        case "scaleIn":
          return `${baseClasses} opacity-0 transform scale-90 sm:scale-75`;
        case "rotateIn":
          return `${baseClasses} opacity-0 transform rotate-6 sm:rotate-12 scale-90 sm:scale-75`;
        default:
          return `${baseClasses} opacity-0`;
      }
    } else {
      return `${baseClasses} opacity-100 transform translate-y-0 translate-x-0 scale-100 rotate-0`;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className} ${
        isMobile ? 'touch-manipulation' : ''
      }`}
      style={{ 
        transitionDuration: `${duration}ms`,
        // Optimize for mobile performance
        ...(isMobile && {
          willChange: isVisible ? 'auto' : 'transform, opacity',
        })
      }}
    >
      {children}
    </div>
  );
}
