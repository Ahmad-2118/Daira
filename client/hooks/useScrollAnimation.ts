import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from './use-mobile';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  disableOnMobile?: boolean;
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
  disableOnMobile = false,
}: UseScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
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
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasAnimated(true);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: isMobile ? '50px' : rootMargin, // Smaller margin on mobile for better performance
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated, isMobile, disableOnMobile, prefersReducedMotion]);

  return { elementRef, isVisible, hasAnimated };
}
