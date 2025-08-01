import React from "react";
import { useIsMobile } from "../hooks/use-mobile";

interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    wide?: number;
  };
  gap?: "sm" | "md" | "lg" | "xl";
  autoFit?: boolean;
  autoFill?: boolean;
}

export default function ResponsiveGrid({ 
  children, 
  className = "",
  cols = { mobile: 1, tablet: 2, desktop: 3, wide: 4 },
  gap = "md",
  autoFit = false,
  autoFill = false
}: ResponsiveGridProps) {
  const isMobile = useIsMobile();

  const gapClasses = {
    sm: "gap-2 sm:gap-3 md:gap-4",
    md: "gap-3 sm:gap-4 md:gap-6 lg:gap-8",
    lg: "gap-4 sm:gap-6 md:gap-8 lg:gap-12",
    xl: "gap-6 sm:gap-8 md:gap-12 lg:gap-16"
  };

  // Use auto-fit or auto-fill for more flexible layouts
  if (autoFit) {
    return (
      <div className={`grid auto-fit gap-3 sm:gap-4 md:gap-6 lg:gap-8 ${className}`}>
        {children}
      </div>
    );
  }

  if (autoFill) {
    return (
      <div className={`grid auto-fill gap-3 sm:gap-4 md:gap-6 lg:gap-8 ${className}`}>
        {children}
      </div>
    );
  }

  const gridCols = `grid-cols-${cols.mobile} sm:grid-cols-${cols.tablet} md:grid-cols-${cols.desktop} lg:grid-cols-${cols.wide}`;

  return (
    <div className={`grid ${gridCols} ${gapClasses[gap]} ${className} ${
      isMobile ? 'touch-manipulation' : ''
    }`}>
      {children}
    </div>
  );
} 