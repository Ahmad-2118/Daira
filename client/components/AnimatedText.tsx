import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    if (type === "typewriter") {
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
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, type, repeat]);

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

    if (!isAnimating && type !== "typewriter") {
      switch (type) {
        case "fadeIn":
          return `${baseClasses} opacity-0`;
        case "slideUp":
          return `${baseClasses} opacity-0 transform translate-y-8`;
        case "bounce":
          return `${baseClasses} opacity-0 transform scale-50`;
        default:
          return `${baseClasses} opacity-0`;
      }
    } else {
      return `${baseClasses} opacity-100 transform translate-y-0 scale-100`;
    }
  };

  if (type === "typewriter") {
    return (
      <span className={`${className} ${isAnimating ? "animate-pulse" : ""}`}>
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    );
  }

  return (
    <span className={`${getAnimationClasses()} ${className}`}>{text}</span>
  );
}
