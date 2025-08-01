import React, { useState } from "react";
import FlipCounter from "./FlipCounter";

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

  return (
    <header className="relative z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 h-[50px] mt-[10px] bg-daira-dark">
      <div className="flex items-center">
        <a
          href="/"
          className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-4 hover:opacity-80 transition-opacity duration-300"
        >
          <img src="/Union logo.png" alt="Logo" className="w-full h-full" />
        </a>
      </div>

      <div className="hidden sm:flex items-center space-x-2 md:space-x-4 ml-[10px] md:ml-[20px]">
        <span className="text-white text-lg md:text-xl lg:text-2xl font-normal flex items-center">
          bold-thinking
        </span>
        <FlipCounter
          words={["branding", "Creative", "Innovative"]}
          interval={3000}
        />
        <span className="text-white text-lg md:text-xl lg:text-2xl font-normal flex items-center">
          agency
        </span>
      </div>

      {/* Hamburger Menu */}
      <div className="relative group">
        <div className="flex items-center gap-1 sm:gap-2 cursor-pointer">
          <span className="text-white text-sm sm:text-lg font-bold hidden sm:block">Menu</span>
          <div className="flex flex-col justify-center items-center w-6 h-6 sm:w-8 sm:h-8">
            <span className="w-4 sm:w-6 h-0.5 bg-white transition-all duration-300 group-hover:rotate-45 group-hover:translate-y-1.5"></span>
            <span className="w-4 sm:w-6 h-0.5 bg-white transition-all duration-300 mt-1 group-hover:opacity-0"></span>
            <span className="w-4 sm:w-6 h-0.5 bg-white transition-all duration-300 mt-1 group-hover:-rotate-45 group-hover:-translate-y-1.5"></span>
          </div>
        </div>

        {/* Desktop Hover Menu */}
        <div className="hidden lg:block absolute right-0 mt-4 w-64 bg-daira-dark border border-daira-orange rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="py-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Click Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="absolute inset-0 w-full h-full opacity-0"
            aria-label="Toggle mobile menu"
          />
          <div
            className={`absolute right-0 mt-4 w-48 sm:w-64 bg-daira-dark border border-daira-orange rounded-lg shadow-lg z-50 transition-all duration-300 transform ${menuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}
          >
            <div className="py-2">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 sm:px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors text-sm sm:text-base"
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