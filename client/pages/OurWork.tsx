import { getAllCaseStudies } from "../lib/caseStudiesData";
import React, { useState } from "react";
import FlipCounter from "../components/FlipCounter";

export default function OurWork() {
  const caseStudies = getAllCaseStudies();

  // Group case studies into pairs for 2-column layout
  const caseStudyPairs = [];
  for (let i = 0; i < caseStudies.length; i += 2) {
    caseStudyPairs.push(caseStudies.slice(i, i + 2));
  }

  const [menuOpen, setMenuOpen] = useState(false);

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
      <main className="px-8 py-16">
        {/* Title Section */}
        <div className="flex justify-between items-start mb-16">
          <h1 className="text-8xl font-normal">Our Work</h1>
          <div className="max-w-lg text-right">
            <p className="text-white text-base leading-relaxed">
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
        <div className="w-full h-px bg-white mb-16"></div>

        {/* Portfolio Grid */}
        <div className="space-y-16">
          {caseStudyPairs.map((pair, rowIndex) => (
            <div key={rowIndex} className="grid lg:grid-cols-2 gap-5">
              {pair.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className="space-y-4 animate-fadeIn transition-opacity duration-700"
                >
                  <a
                    href={`/case-study/${caseStudy.id}`}
                    className="relative bg-daira-dark border-2 border-white rounded-lg overflow-hidden block group transition-transform hover:scale-105 hover:brightness-110 duration-300"
                    style={{ height: "600px" }}
                  >
                    {/* 2x2 Image Grid */}
                    <div className="flex items-center justify-center h-full">
                      <div
                        className="grid grid-cols-2 grid-rows-2 gap-0 p-32
                      "
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
                            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
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
                  <div className="flex justify-between items-center">
                    <div className="text-left">
                      <h3 className="text-2xl font-semibold text-white">
                        {caseStudy.title}
                      </h3>
                    </div>
                    <div className="flex gap-3">
                      {caseStudy.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 border border-white rounded-full text-white text-sm"
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
      </main>

      {/* Footer */}
      <footer className="bg-black text-white px-8 pt-16 pb-8">
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
