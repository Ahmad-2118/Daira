import React, { useState, useEffect } from "react";
import { useIsMobile } from "../hooks/use-mobile";

interface AnimatedTextProps {
  text: string;
  type?: "typewriter" | "fadeIn" | "slideUp" | "bounce";
  speed?: number;
  delay?: number;
  className?: string;
  repeat?: boolean;
}

export default function AnimatedText({
  text,
  type = "fadeIn",
  speed = 100,
  delay = 0,
  className = "",
  repeat = false,
}: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useIsMobile();

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (type === "typewriter" && !prefersReducedMotion) {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else if (repeat) {
          setTimeout(() => {
            setCurrentIndex(0);
            setDisplayText("");
          }, 2000);
        }
      }, isMobile ? speed * 1.5 : speed); // Slower on mobile for better readability

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, type, repeat, isMobile, prefersReducedMotion]);

  useEffect(() => {
    if (type !== "typewriter") {
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [type, delay]);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out";

    // If user prefers reduced motion, show text immediately
    if (prefersReducedMotion) {
      return `${baseClasses} opacity-100 transform translate-y-0 scale-100`;
    }

    if (!isAnimating && type !== "typewriter") {
      switch (type) {
        case "fadeIn":
          return `${baseClasses} opacity-0`;
        case "slideUp":
          return `${baseClasses} opacity-0 transform translate-y-4 sm:translate-y-8`;
        case "bounce":
          return `${baseClasses} opacity-0 transform scale-75 sm:scale-50`;
        default:
          return `${baseClasses} opacity-0`;
      }
    } else {
      return `${baseClasses} opacity-100 transform translate-y-0 scale-100`;
    }
  };

  if (type === "typewriter") {
    return (
      <span className={`${className} ${isAnimating ? "animate-pulse" : ""} ${
        isMobile ? 'text-sm sm:text-base' : 'text-base sm:text-lg'
      }`}>
        {prefersReducedMotion ? text : displayText}
        {!prefersReducedMotion && <span className="animate-pulse">|</span>}
      </span>
    );
  }

  return (
    <span className={`${getAnimationClasses()} ${className} ${
      isMobile ? 'text-sm sm:text-base' : 'text-base sm:text-lg'
    }`}>
      {text}
    </span>
  );
}
