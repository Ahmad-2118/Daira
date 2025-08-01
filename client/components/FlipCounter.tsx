import React, { useState, useEffect } from "react";

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

  return (
    <span
      className={`text-daira-orange text-2xl font-normal flex items-center mt-2 ${
        isFlipping ? "animate-flipOut" : "animate-flipIn"
      } ${className}`}
      style={{
        fontFamily: "'Aguafina Script', cursive",
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {words[currentIndex]}
    </span>
  );
}
