import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export default function RevealOnScroll({ 
  children, 
  animation = 'fadeIn', 
  delay = 0, 
  duration = 1000,
  threshold = 0.1,
  className = "" 
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold, hasAnimated]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeIn':
          return `${baseClasses} opacity-0`;
        case 'slideUp':
          return `${baseClasses} opacity-0 transform translate-y-12`;
        case 'slideLeft':
          return `${baseClasses} opacity-0 transform -translate-x-12`;
        case 'slideRight':
          return `${baseClasses} opacity-0 transform translate-x-12`;
        case 'scaleIn':
          return `${baseClasses} opacity-0 transform scale-75`;
        case 'rotateIn':
          return `${baseClasses} opacity-0 transform rotate-12 scale-75`;
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
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
} 