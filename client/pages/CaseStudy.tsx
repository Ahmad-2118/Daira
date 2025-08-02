import { useParams } from "react-router-dom";
import { getCaseStudyById } from "../lib/caseStudiesData";
import React, { useState } from "react";
import FlipCounter from "../components/FlipCounter";

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const [menuOpen, setMenuOpen] = useState(false);

  if (!slug) {
    return (
      <div className="min-h-screen bg-daira-dark text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <a href="/our-work" className="text-daira-orange hover:underline">
            Back to Our Work
          </a>
        </div>
      </div>
    );
  }

  const caseStudy = getCaseStudyById(slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-daira-dark text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-xl mb-4">Case study "{slug}" not found</p>
          <a href="/our-work" className="text-daira-orange hover:underline">
            Back to Our Work
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-daira-dark text-white overflow-x-hidden">
      {/* Fixed Brand Logo Background */}
      <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none">
        <img
          src={caseStudy.logo}
          alt={`${caseStudy.title} Logo`}
          className="max-w-md max-h-md w-auto h-auto object-contain opacity-5 animate-pulse"
        />
      </div>

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 h-[50px] mt-[10px] bg-daira-dark">
        <div className="flex items-center">
          <a href="/" className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-4 hover:opacity-80 transition-opacity duration-300">
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
              <a href="/our-work" className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors">Our Work</a>
              <a href="/case-studies" className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors">Case Studies</a>
              <a href="#about" className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors">About Us</a>
              <a href="/contact" className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors">Contact Us</a>
            </div>
          </div>
          
          {/* Mobile Click Menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="absolute inset-0 w-full h-full opacity-0"
              aria-label="Toggle mobile menu"
            />
            <div className={`absolute right-0 mt-4 w-48 sm:w-64 bg-daira-dark border border-daira-orange rounded-lg shadow-lg z-50 transition-all duration-300 transform ${menuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <div className="py-2">
                <a href="/our-work" className="block px-4 sm:px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors text-sm sm:text-base">Our Work</a>
                <a href="/case-studies" className="block px-4 sm:px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors text-sm sm:text-base">Case Studies</a>
                <a href="#about" className="block px-4 sm:px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors text-sm sm:text-base">About Us</a>
                <a href="/contact" className="block px-4 sm:px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors text-sm sm:text-base">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Sections - All transparent with brand logo behind */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 md:px-8 mt-4">
          <div className="rounded-xl p-4 sm:p-6 md:p-8 relative overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[634px] hover-lift">
            {/* Hero Content */}
            <div className="relative z-20 text-center h-full flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-tight">
                {caseStudy.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                {caseStudy.overview.description}
              </p>
            </div>
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-16">
          <div className="rounded-xl p-4 sm:p-6 md:p-8 hover-lift">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              {/* Left side - Text */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
                  Project Overview
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                  {caseStudy.overview.description}
                </p>
              </div>
              {/* Right side - Overview Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src={caseStudy.id === 'abu-dawood' ? '/pretend-2.png' : caseStudy.id === 'aman-care' ? '/pretend-1.png' : caseStudy.id === 'cream-stream' ? '/pretend-3.png' : caseStudy.id === 'kiswa' ? '/pretend-4.png' : caseStudy.overview.image}
                  alt={`${caseStudy.title} overview`}
                  className="w-full h-auto max-w-lg sm:max-w-xl md:max-w-2xl rounded-lg shadow-lg hover-scale transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-16">
          <div className="rounded-xl p-4 sm:p-6 md:p-8 hover-lift">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              {/* Left side - Challenge Image */}
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <img
                  src={caseStudy.challenge.image}
                  alt={`${caseStudy.title} challenge`}
                  className="w-full h-auto max-w-lg sm:max-w-xl md:max-w-2xl rounded-lg shadow-lg hover-scale transition-transform duration-500"
                />
              </div>
              {/* Right side - Text */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
                  {caseStudy.challenge.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                  {caseStudy.challenge.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-16">
          <div className="rounded-xl p-4 sm:p-6 md:p-8 hover-lift">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              {/* Left side - Text */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
                  {caseStudy.solution.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                  {caseStudy.solution.description}
                </p>
              </div>
              {/* Right side - Solution Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src={caseStudy.solution.image}
                  alt={`${caseStudy.title} solution`}
                  className="w-full h-auto max-w-lg sm:max-w-xl md:max-w-2xl rounded-lg shadow-lg hover-scale transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-16">
          <div className="rounded-xl p-4 sm:p-6 md:p-8 hover-lift">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-12">
                Services Provided
              </h2>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 sm:px-4 md:px-8 py-1 sm:py-2 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-xs sm:text-sm md:text-lg font-medium hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Back to Our Work */}
        <section className="px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-12 md:mb-16">
          <div className="text-center">
            <a
              href="/our-work"
              className="inline-flex items-center gap-3 text-daira-orange hover:text-white transition-colors text-lg sm:text-xl font-semibold group"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:-translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Our Work
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-20 bg-black text-white px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-12 gap-6 sm:gap-0">
          <div className="space-y-3 sm:space-y-4">
            <a
              href="/our-work"
              className="block text-sm sm:text-base md:text-lg uppercase tracking-wide hover:text-daira-orange transition-colors"
            >
              OUR WORK
            </a>
            <a
              href="#about"
              className="block text-sm sm:text-base md:text-lg uppercase tracking-wide hover:text-daira-orange transition-colors"
            >
              ABOUT US
            </a>
            <a
              href="/contact"
              className="block text-sm sm:text-base md:text-lg uppercase tracking-wide hover:text-daira-orange transition-colors"
            >
              CONTACT US
            </a>
          </div>
          <div className="space-y-3 sm:space-y-4 text-left sm:text-right">
            <a 
              href="https://www.instagram.com/_daira.pk_?igsh=OXN5dW4ybmIwazFx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-sm sm:text-base md:text-lg uppercase tracking-wide hover:text-daira-orange transition-colors"
            >
              INSTAGRAM
            </a>
            <a 
              href="https://www.linkedin.com/company/dairapk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-sm sm:text-base md:text-lg uppercase tracking-wide hover:text-daira-orange transition-colors"
            >
              LINKEDIN
            </a>
            <a 
              href="mailto:DAIRAPK@GMAIL.COM"
              className="block text-sm sm:text-base md:text-lg uppercase tracking-wide hover:text-daira-orange transition-colors"
            >
              EMAIL
            </a>
          </div>
        </div>
        <div className="w-full mt-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black uppercase text-white text-center">
            LET'S WORK TOGETHER
          </h2>
        </div>
      </footer>
    </div>
  );
} 