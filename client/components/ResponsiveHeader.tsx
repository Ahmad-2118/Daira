import React, { useState, useEffect } from "react";
import FlipCounter from "./FlipCounter";
import { useIsMobile } from "../hooks/use-mobile";

interface ResponsiveHeaderProps {
  menuItems?: Array<{ href: string; label: string }>;
}

export default function ResponsiveHeader({ 
  menuItems = [
    { href: "/our-work", label: "Our Work" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "#about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ]
}: ResponsiveHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (menuOpen && !target.closest('.menu-container')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-daira-dark/95 backdrop-blur-md shadow-lg' : 'bg-daira-dark'
    }`}>
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 h-16 sm:h-20">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-300 active:scale-95"
          >
            <img 
              src="/Union logo.png" 
              alt="Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10" 
            />
            {!isMobile && (
              <span className="ml-3 text-white text-lg sm:text-xl font-medium">
                Daira
              </span>
            )}
          </a>
        </div>

        {/* Desktop Brand Text */}
        <div className="hidden sm:flex items-center space-x-2 md:space-x-4">
          <span className="text-white text-base md:text-lg lg:text-xl font-normal flex items-center">
            bold-thinking
          </span>
          <FlipCounter
            words={["branding", "Creative", "Innovative"]}
            interval={3000}
            className="text-base md:text-lg lg:text-xl"
          />
          <span className="text-white text-base md:text-lg lg:text-xl font-normal flex items-center">
            agency
          </span>
        </div>

        {/* Mobile Brand Text */}
        {isMobile && (
          <div className="flex items-center space-x-1">
            <span className="text-white text-sm font-normal">bold-thinking</span>
            <FlipCounter
              words={["branding", "Creative", "Innovative"]}
              interval={3000}
              className="text-sm"
            />
            <span className="text-white text-sm font-normal">agency</span>
          </div>
        )}

                 {/* Menu Button */}
         <div className="menu-container relative group">
           <button
             onClick={() => setMenuOpen(!menuOpen)}
             className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 active:scale-95 touch-manipulation"
             aria-label="Toggle menu"
           >
            <span className="text-white text-sm sm:text-base font-medium hidden sm:block">
              Menu
            </span>
            <div className="flex flex-col justify-center items-center w-6 h-6 sm:w-7 sm:h-7">
              <span className={`w-5 sm:w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`w-5 sm:w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
                menuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`w-5 sm:w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
                menuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>

          {/* Desktop Hover Menu */}
          <div className="hidden lg:block absolute right-0 mt-2 w-64 bg-daira-dark border border-daira-orange rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="py-2">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {menuOpen && (
            <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
          )}
          
          {/* Mobile Menu */}
          <div className={`lg:hidden absolute right-0 mt-2 w-64 bg-daira-dark border border-daira-orange rounded-lg shadow-xl z-50 transition-all duration-300 transform ${
            menuOpen 
              ? "opacity-100 visible translate-y-0 scale-100" 
              : "opacity-0 invisible translate-y-2 scale-95"
          }`}>
            <div className="py-2">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-6 py-4 text-white hover:bg-daira-orange hover:text-black transition-colors duration-200 active:bg-daira-orange/80 touch-manipulation"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 