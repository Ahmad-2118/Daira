import React from "react";
import { useIsMobile } from "../hooks/use-mobile";

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

export default function ResponsiveContainer({ 
  children, 
  className = "", 
  maxWidth = "full",
  padding = "md"
}: ResponsiveContainerProps) {
  const isMobile = useIsMobile();

  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md", 
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-full"
  };

  const paddingClasses = {
    none: "",
    sm: "px-3 sm:px-4 md:px-6 lg:px-8",
    md: "px-4 sm:px-6 md:px-8 lg:px-12",
    lg: "px-6 sm:px-8 md:px-12 lg:px-16",
    xl: "px-8 sm:px-12 md:px-16 lg:px-24"
  };

  return (
    <div className={`w-full mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses[padding]} ${className} ${
      isMobile ? 'touch-manipulation' : ''
    }`}>
      {children}
    </div>
  );
} 