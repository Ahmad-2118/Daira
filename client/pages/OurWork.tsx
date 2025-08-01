import { getAllCaseStudies } from "../lib/caseStudiesData";
import React, { useState } from "react";
import FlipCounter from "../components/FlipCounter";
import ResponsiveHeader from "../components/ResponsiveHeader";

export default function OurWork() {
  const caseStudies = getAllCaseStudies();

  // Group case studies into pairs for 2-column layout
  const caseStudyPairs = [];
  for (let i = 0; i < caseStudies.length; i += 2) {
    caseStudyPairs.push(caseStudies.slice(i, i + 2));
  }

  return (
    <div className="min-h-screen bg-daira-dark text-white">
      {/* Header */}
      <ResponsiveHeader />
      
      {/* Main Content */}
      <div className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="px-4 sm:px-6 md:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
                Our Work
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Discover our portfolio of creative projects and successful campaigns
              </p>
            </div>
          </div>
        </section>

        {/* Title Section */}
        <div className="px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal">Our Work</h1>
          <div className="max-w-lg text-left lg:text-right">
            <p className="text-white text-sm sm:text-base leading-relaxed">
              It doesn't matter whether you're launching a fashion label,
              brewing the next cult-favourite perfume, opening a cozy cafe, or
              creating an online therapy platform. At Daira, we approach every
              project with the same mindset: tell a story that feels real, looks
              great, and leaves a mark. Big or small, every brand deserves work
              that stands out — and we're here to make sure it does.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="px-4 sm:px-6 md:px-8 w-full h-px bg-white mb-8 sm:mb-12 md:mb-16"></div>

        {/* Portfolio Grid */}
        <div className="px-4 sm:px-6 md:px-8 space-y-8 sm:space-y-12 md:space-y-16">
          {caseStudyPairs.map((pair, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {pair.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className="space-y-3 sm:space-y-4 animate-fadeIn transition-opacity duration-700"
                >
                  <a
                    href={`/case-study/${caseStudy.id}`}
                    className="relative bg-daira-dark border-2 border-white rounded-lg overflow-hidden block group transition-transform hover:scale-105 hover:brightness-110 duration-300 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                  >
                    {/* 2x2 Image Grid */}
                    <div className="flex items-center justify-center h-full">
                      <div
                        className="grid grid-cols-2 grid-rows-2 gap-0 p-8 sm:p-16 md:p-24 lg:p-32"
                      >
                        {/* Top Left Image */}
                        <div className="relative overflow-hidden">
                          <img
                            src={caseStudy.overview.image}
                            alt={`${caseStudy.title} - Overview`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Top Right Image */}
                        <div className="relative overflow-hidden">
                          <img
                            src={caseStudy.challenge.image}
                            alt={`${caseStudy.title} - Challenge`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Bottom Left Image */}
                        <div className="relative overflow-hidden">
                          <img
                            src={caseStudy.solution.image}
                            alt={`${caseStudy.title} - Solution`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Bottom Right Image - Logo or additional image */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-daira-orange/10 to-transparent">
                          <img
                            src={caseStudy.logo}
                            alt={`${caseStudy.title} - Logo`}
                            className="w-full h-full object-contain p-2 sm:p-3 md:p-4 transition-transform duration-500 group-hover:scale-110"
                            style={{
                              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))",
                            }}
                          />
                          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                    <div className="text-left">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                        {caseStudy.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {caseStudy.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 sm:px-4 py-1 sm:py-1.5 border border-white rounded-full text-white text-xs sm:text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              {/* Add empty div for odd number of case studies to maintain grid */}
              {pair.length === 1 && <div></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
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
