import { useParams } from "react-router-dom";
import { caseStudiesData, getCaseStudyById } from "../lib/caseStudiesData";
import React, { useState, useRef } from "react";
import FlipCounter from "../components/FlipCounter";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import ResponsiveHeader from "../components/ResponsiveHeader";

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
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
      <ResponsiveHeader />
      
      {/* Main Content */}
      <div className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
              {caseStudy.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 max-w-3xl leading-relaxed">
              {caseStudy.description}
            </p>
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
      </div>

      {/* Footer */}
      <footer className="bg-black text-white px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 relative z-30">
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
