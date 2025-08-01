import React, { useState, useRef, useEffect, useCallback } from "react";
import { useIsMobile } from "../hooks/use-mobile";
import TouchOptimized from "./TouchOptimized";

interface MobileCarouselProps {
  children: React.ReactNode[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  loop?: boolean;
}

export default function MobileCarousel({
  children,
  className = "",
  autoPlay = false,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  loop = true,
}: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const totalSlides = children.length;

  const goToSlide = useCallback((index: number) => {
    if (index < 0) {
      setCurrentIndex(loop ? totalSlides - 1 : 0);
    } else if (index >= totalSlides) {
      setCurrentIndex(loop ? 0 : totalSlides - 1);
    } else {
      setCurrentIndex(index);
    }
  }, [totalSlides, loop]);

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isMobile) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, nextSlide, isMobile]);

  // Handle swipe gestures
  const handleSwipe = useCallback((direction: 'left' | 'right' | 'up' | 'down') => {
    if (direction === 'left') {
      nextSlide();
    } else if (direction === 'right') {
      prevSlide();
    }
  }, [nextSlide, prevSlide]);

  // Handle touch interactions
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile || !isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (!isMobile || !isDragging) return;
    setIsDragging(false);
    
    if (Math.abs(translateX) > 50) {
      if (translateX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    setTranslateX(0);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="flex transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${totalSlides * 100}%`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full"
            style={{ width: `${100 / totalSlides}%` }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && totalSlides > 1 && (
        <>
          <TouchOptimized
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
            onTap={prevSlide}
            feedback={true}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </TouchOptimized>
          
          <TouchOptimized
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
            onTap={nextSlide}
            feedback={true}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </TouchOptimized>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && totalSlides > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <TouchOptimized
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              onTap={() => goToSlide(index)}
              feedback={true}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      {totalSlides > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm z-10">
          {currentIndex + 1} / {totalSlides}
        </div>
      )}
    </div>
  );
} 