import React, { useState, useRef, useEffect } from "react";
import { useIsMobile } from "../hooks/use-mobile";

interface TouchOptimizedProps {
  children: React.ReactNode;
  className?: string;
  onTap?: () => void;
  onLongPress?: () => void;
  onSwipe?: (direction: 'left' | 'right' | 'up' | 'down') => void;
  disabled?: boolean;
  feedback?: boolean;
}

export default function TouchOptimized({
  children,
  className = "",
  onTap,
  onLongPress,
  onSwipe,
  disabled = false,
  feedback = true,
}: TouchOptimizedProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [isLongPressing, setIsLongPressing] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();

  const handleTouchStart = (e: React.TouchEvent) => {
    if (disabled) return;

    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    };

    if (feedback) {
      setIsPressed(true);
    }

    // Start long press timer
    if (onLongPress) {
      longPressTimerRef.current = setTimeout(() => {
        setIsLongPressing(true);
        onLongPress();
      }, 500);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (disabled || !touchStartRef.current) return;

    const touch = e.touches[0];
    const deltaX = Math.abs(touch.clientX - touchStartRef.current.x);
    const deltaY = Math.abs(touch.clientY - touchStartRef.current.y);

    // Cancel long press if user moves finger
    if (deltaX > 10 || deltaY > 10) {
      if (longPressTimerRef.current) {
        clearTimeout(longPressTimerRef.current);
        longPressTimerRef.current = null;
      }
      setIsLongPressing(false);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (disabled || !touchStartRef.current) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const deltaTime = Date.now() - touchStartRef.current.time;

    // Clear long press timer
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }

    // Handle swipe gestures
    if (onSwipe && deltaTime < 300) {
      const minSwipeDistance = 50;
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      if (absDeltaX > minSwipeDistance || absDeltaY > minSwipeDistance) {
        if (absDeltaX > absDeltaY) {
          onSwipe(deltaX > 0 ? 'right' : 'left');
        } else {
          onSwipe(deltaY > 0 ? 'down' : 'up');
        }
      }
    }

    // Handle tap
    if (onTap && deltaTime < 300 && Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
      onTap();
    }

    // Reset states
    setIsPressed(false);
    setIsLongPressing(false);
    touchStartRef.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (disabled || isMobile) return;

    if (feedback) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (disabled || isMobile) return;

    setIsPressed(false);
    if (onTap) {
      onTap();
    }
  };

  const handleMouseLeave = () => {
    if (disabled || isMobile) return;

    setIsPressed(false);
  };

  return (
    <div
      className={`${className} ${
        feedback && isPressed ? 'scale-95 opacity-80' : ''
      } ${
        isLongPressing ? 'scale-90 opacity-60' : ''
      } transition-all duration-150 ease-out touch-manipulation ${
        disabled ? 'pointer-events-none opacity-50' : ''
      }`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none',
      }}
    >
      {children}
    </div>
  );
} 