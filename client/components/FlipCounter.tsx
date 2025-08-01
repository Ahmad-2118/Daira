import React, { useState, useEffect } from "react";
import { useIsMobile } from "../hooks/use-mobile";

interface FlipCounterProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function FlipCounter({
  words,
  interval = 3000,
  className = "",
}: FlipCounterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipping(true);

      // Wait for flip animation to complete before changing word
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsFlipping(false);
      }, 150); // Half of the flip animation duration
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  // Pause animation on mobile when not visible
  useEffect(() => {
    if (isMobile) {
      const handleVisibilityChange = () => {
        if (document.hidden) {
          // Pause animation when tab is not visible
          setIsFlipping(false);
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);
      return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }
  }, [isMobile]);

  return (
    <span
      className={`text-daira-orange font-normal flex items-center transition-all duration-300 ${
        isMobile ? 'text-sm sm:text-base' : 'text-lg sm:text-xl md:text-2xl'
      } ${
        isFlipping ? "animate-flipOut" : "animate-flipIn"
      } ${className}`}
      style={{
        fontFamily: "'Aguafina Script', cursive",
        transformStyle: "preserve-3d",
        perspective: "1000px",
        minHeight: isMobile ? "1.5rem" : "2rem",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <span className="relative">
        {words[currentIndex]}
        {isMobile && (
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-daira-orange/30 rounded-full"></span>
        )}
      </span>
    </span>
  );
}
