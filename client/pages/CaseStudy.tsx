import { useParams } from "react-router-dom";
import { caseStudiesData, getCaseStudyById } from "../lib/caseStudiesData";
import React, { useState, useRef } from "react";
import FlipCounter from "../components/FlipCounter";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const [menuOpen, setMenuOpen] = useState(false);
  const { heroRef, addSectionRef } = useScrollAnimation();

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
          <a href="/our-work" className="text-daira-orange hover:underline">
            Back to Our Work
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-daira-dark text-white">
      {/* Header */}
      <header className="relative z-50 flex items-center justify-between px-8 h-[50px] mt-[10px] bg-daira-dark">
        <div className="flex items-center">
          <a
            href="/"
            className="w-8 h-8 mr-4 hover:opacity-80 transition-opacity duration-300"
          >
            <img src="/Union logo.png" alt="Logo" className="w-full h-full" />
          </a>
        </div>

        <div className="flex items-center space-x-4 ml-[20px]">
          <span className="text-white text-2xl font-normal flex items-center">
            bold-thinking
          </span>
          <FlipCounter
            words={["branding", "Creative", "Innovative"]}
            interval={3000}
          />
          <span className="text-white text-2xl font-normal flex items-center">
            agency
          </span>
        </div>

        {/* Hamburger Menu */}
        <div className="relative group">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-white text-lg font-bold">Menu</span>
            <div className="flex flex-col justify-center items-center w-8 h-8">
              <span className="w-6 h-0.5 bg-white transition-all duration-300 group-hover:rotate-45 group-hover:translate-y-1.5"></span>
              <span className="w-6 h-0.5 bg-white transition-all duration-300 mt-1 group-hover:opacity-0"></span>
              <span className="w-6 h-0.5 bg-white transition-all duration-300 mt-1 group-hover:-rotate-45 group-hover:-translate-y-1.5"></span>
            </div>
          </div>

          {/* Desktop Hover Menu */}
          <div className="absolute right-0 mt-4 w-64 bg-daira-dark border border-daira-orange rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="py-2">
              <a
                href="/our-work"
                className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors"
              >
                Our Work
              </a>
              <a
                href="/case-studies"
                className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors"
              >
                Case Studies
              </a>
              <a
                href="#about"
                className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors"
              >
                Contact Us
              </a>
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
              className={`absolute right-0 mt-4 w-64 bg-daira-dark border border-daira-orange rounded-lg shadow-lg z-50 transition-all duration-300 transform ${menuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}
            >
              <div className="py-2">
                <a
                  href="/our-work"
                  className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors"
                >
                  Our Work
                </a>
                <a
                  href="/case-studies"
                  className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors"
                >
                  Case Studies
                </a>
                <a
                  href="#about"
                  className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors"
                >
                  About Us
                </a>
                <a
                  href="/contact"
                  className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Fixed Background Logo - Always visible */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
          <img
            src={caseStudy.logo}
            alt={`${caseStudy.title} logo background`}
            className="w-[600px] h-[600px] object-contain opacity-10"
            style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))" }}
          />
        </div>

        {/* Hero Section with Logo */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Centered Logo - Initial position */}
          <div ref={heroRef} className="relative z-10 text-center logo-hero">
            <div className="mb-8">
              <img
                src={caseStudy.logo}
                alt={`${caseStudy.title} logo`}
                className="mx-auto"
                style={{
                  height:
                    caseStudy.id === "abu-dawood"
                      ? "200px"
                      : caseStudy.id === "cream-stream"
                        ? "150px"
                        : caseStudy.id === "kiswa"
                          ? "150px"
                          : caseStudy.id === "electrech"
                            ? "300px"
                            : caseStudy.id === "aman-care"
                              ? "80px"
                              : "100px",
                  filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))",
                }}
              />
            </div>

            {caseStudy.id !== "abu-dawood" &&
              caseStudy.id !== "cream-stream" &&
              caseStudy.id !== "kiswa" &&
              caseStudy.id !== "electrech" &&
              caseStudy.id !== "aman-care" && (
                <h1
                  className="text-6xl md:text-8xl font-black tracking-wide transition-all duration-1000"
                  style={{
                    color:
                      caseStudy.id === "aman-care"
                        ? "#a996fa"
                        : caseStudy.id === "cream-stream"
                          ? "#fbbf24"
                          : caseStudy.id === "abu-dawood"
                            ? "#c084fc"
                            : caseStudy.id === "kiswa"
                              ? "#f59e42"
                              : caseStudy.id === "electrech"
                                ? "#38bdf8"
                                : "#fff",
                  }}
                >
                  {caseStudy.title}
                </h1>
              )}
          </div>
        </section>

        {/* Content Sections - Transparent cards that scroll over the logo */}
        <div className="relative z-20">
          {/* Project Overview Section */}
          <section
            ref={(el) => addSectionRef(el)}
            className="px-8 md:px-24 py-32 scroll-trigger"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Text */}
                <div>
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                    Project Overview
                  </h2>
                  <p className="text-white text-xl leading-relaxed">
                    {caseStudy.overview.description}
                  </p>
                </div>
                {/* Right side - Overview Image */}
                <div className="flex justify-center lg:justify-end">
                  <img
                    src={
                      caseStudy.id === "abu-dawood"
                        ? "/pretend-2.png"
                        : caseStudy.id === "aman-care"
                          ? "/pretend-1.png"
                          : caseStudy.id === "cream-stream"
                            ? "/pretend-3.png"
                            : caseStudy.id === "kiswa"
                              ? "/pretend-4.png"
                              : caseStudy.overview.image
                    }
                    alt={`${caseStudy.title} overview`}
                    className="w-full h-auto max-w-2xl rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Challenge Section */}
          <section
            ref={(el) => addSectionRef(el)}
            className="px-8 md:px-24 py-32 scroll-trigger"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Challenge Image */}
                <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                  <img
                    src={caseStudy.challenge.image}
                    alt={`${caseStudy.title} challenge`}
                    className="w-full h-auto max-w-2xl rounded-2xl shadow-2xl"
                  />
                </div>
                {/* Right side - Text */}
                <div className="order-1 lg:order-2">
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                    {caseStudy.challenge.title}
                  </h2>
                  <p className="text-white text-xl leading-relaxed">
                    {caseStudy.challenge.description}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section
            ref={(el) => addSectionRef(el)}
            className="px-8 md:px-24 py-32 scroll-trigger"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Text */}
                <div>
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                    {caseStudy.solution.title}
                  </h2>
                  <p className="text-white text-xl leading-relaxed">
                    {caseStudy.solution.description}
                  </p>
                </div>
                {/* Right side - Solution Image */}
                <div className="flex justify-center lg:justify-end">
                  <img
                    src={caseStudy.solution.image}
                    alt={`${caseStudy.title} solution`}
                    className="w-full h-auto max-w-2xl rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Back to Our Work */}
          <section
            ref={(el) => addSectionRef(el)}
            className="px-8 md:px-24 py-16 scroll-trigger"
          >
            <div className="max-w-7xl mx-auto text-center">
              <a
                href="/our-work"
                className="inline-flex items-center gap-3 text-daira-orange hover:text-white transition-colors text-xl font-semibold group"
              >
                <svg
                  className="w-6 h-6 transform group-hover:-translate-x-2 transition-transform duration-300"
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
      </main>

      {/* Footer */}
      <footer className="bg-black text-white px-8 pt-16 pb-8 relative z-30">
        <div className="flex justify-between items-start mb-12">
          <div className="space-y-4">
            <a
              href="/our-work"
              className="block text-lg uppercase tracking-wide"
            >
              OUR WORK
            </a>
            <a href="#" className="block text-lg uppercase tracking-wide">
              ABOUT US
            </a>
            <a href="#" className="block text-lg uppercase tracking-wide">
              CONTACT US
            </a>
          </div>
          <div className="space-y-4 text-right">
            <a href="#" className="block text-lg uppercase tracking-wide">
              INSTAGRAM
            </a>
            <a href="#" className="block text-lg uppercase tracking-wide">
              FACEBOOK
            </a>
            <a href="#" className="block text-lg uppercase tracking-wide">
              LINKDLN
            </a>
            <a href="#" className="block text-lg uppercase tracking-wide">
              EMAIL
            </a>
          </div>
        </div>
        <div className="w-full mt-4">
          <h2 className="text-7xl md:text-8xl font-black uppercase text-white text-center">
            LET'S WORK TOGETHER
          </h2>
        </div>
      </footer>
    </div>
  );
}
