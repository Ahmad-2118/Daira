import React from "react";

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
}

export default function ResponsiveGrid({ 
  children, 
  className = "",
  cols = { mobile: 1, tablet: 2, desktop: 3, wide: 4 },
  gap = "md"
}: ResponsiveGridProps) {
  const gapClasses = {
    sm: "gap-2 sm:gap-3 md:gap-4",
    md: "gap-4 sm:gap-6 md:gap-8",
    lg: "gap-6 sm:gap-8 md:gap-12",
    xl: "gap-8 sm:gap-12 md:gap-16"
  };

  const gridCols = `grid-cols-${cols.mobile} sm:grid-cols-${cols.tablet} md:grid-cols-${cols.desktop} lg:grid-cols-${cols.wide}`;

  return (
    <div className={`grid ${gridCols} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
} 