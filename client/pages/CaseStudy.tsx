import { useParams } from "react-router-dom";
import { caseStudiesData, getCaseStudyById } from "../lib/caseStudiesData";
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
          <div className="w-8 h-8 mr-4">
            <svg viewBox="0 0 29 29" className="w-full h-full fill-white">
              <path d="M14.5 0L29 14.5L14.5 29L0 14.5L14.5 0Z" />
            </svg>
          </div>
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

        {/* Menu Dropdown */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="bg-daira-orange-light hover:bg-daira-orange transition-colors px-6 py-2 rounded-xl text-black font-bold text-lg focus:outline-none"
            >
              Menu
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-daira-dark border border-daira-orange rounded-lg shadow-lg z-50 animate-fadeIn">
                <a href="/" className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors">Home</a>
                <a href="/our-work" className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors">Our Work</a>
                <a href="#about" className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors">About Us</a>
                <a href="#contact" className="block px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors">Contact</a>
              </div>
            )}
          </div>
          <button className="bg-daira-orange-light hover:bg-daira-orange transition-colors px-6 py-2 rounded-xl text-black font-bold text-lg focus:outline-none">
            Contact us
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <div className="px-24 pt-16 pb-32 flex flex-col animate-fadeIn transition-opacity duration-700">
          {/* Top Image (overview image for each case study) */}
          <img
            src={caseStudy.overview.image}
            alt={`${caseStudy.title} hero`}
            className="w-96 h-[28rem] rounded-xl object-contain mb-8"
          />
          {/* Logo and Text Centered Below Image */}
          <div className="flex flex-col items-center">
            <img
              src={caseStudy.logo}
              alt={`${caseStudy.title} logo`}
              className={
                caseStudy.id === 'abu-dawood' ? 'h-48 object-contain mb-2' :
                caseStudy.id === 'cream-stream' ? 'h-32 object-contain mb-2' :
                caseStudy.id === 'kiswa' ? 'h-32 object-contain mb-2' :
                caseStudy.id === 'electrech' ? 'h-64 object-contain mb-2' :
                caseStudy.id === 'aman-care' ? 'h-12 object-contain mb-2' :
                'h-8 object-contain mb-2'
              }
              style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))' }}
            />
            {caseStudy.id !== 'abu-dawood' && caseStudy.id !== 'cream-stream' && caseStudy.id !== 'kiswa' && caseStudy.id !== 'electrech' && caseStudy.id !== 'aman-care' && (
              <span
                className="text-4xl font-bold tracking-wide"
                style={{ color:
                  caseStudy.id === 'aman-care' ? '#a996fa' :
                  caseStudy.id === 'cream-stream' ? '#fbbf24' :
                  caseStudy.id === 'abu-dawood' ? '#c084fc' :
                  caseStudy.id === 'kiswa' ? '#f59e42' :
                  caseStudy.id === 'electrech' ? '#38bdf8' : '#fff'
                }}
              >
                {caseStudy.title}
              </span>
            )}
          </div>
        </div>

        {/* Project Overview Section */}
        <section className="px-24 pb-32">
          <div className="grid grid-cols-2 gap-16">
            {/* Left side - Text */}
            <div className="pt-8">
              <h2 className="text-4xl font-bold text-white mb-8">
                Project Overview
              </h2>
              <p className="text-white text-xl leading-relaxed max-w-lg">
                {caseStudy.overview.description}
              </p>
            </div>
            {/* Right side - Overview Image */}
            <div className="flex justify-start">
              <img
                src={caseStudy.id === 'abu-dawood' ? '/pretend-2.png' : caseStudy.id === 'aman-care' ? '/pretend-1.png' : caseStudy.id === 'cream-stream' ? '/pretend-3.png' : caseStudy.id === 'kiswa' ? '/pretend-4.png' : caseStudy.overview.image}
                alt={`${caseStudy.title} overview`}
                className="w-full h-auto max-w-2xl rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="px-24 pb-32">
          <div className="grid grid-cols-2 gap-16">
            {/* Left side - Challenge Image */}
            <div className="flex justify-start">
              <img
                src={caseStudy.challenge.image}
                alt={`${caseStudy.title} challenge`}
                className="w-full h-auto max-w-2xl rounded-lg"
              />
            </div>
            {/* Right side - Text */}
            <div className="pt-8">
              <h2 className="text-4xl font-bold text-white mb-8 text-right">
                {caseStudy.challenge.title}
              </h2>
              <p className="text-white text-xl leading-relaxed max-w-lg text-right ml-auto">
                {caseStudy.challenge.description}
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="px-24 pb-32">
          <div className="grid grid-cols-2 gap-16">
            {/* Left side - Text */}
            <div className="pt-8">
              <h2 className="text-4xl font-bold text-white mb-8">
                {caseStudy.solution.title}
              </h2>
              <p className="text-white text-xl leading-relaxed max-w-lg">
                {caseStudy.solution.description}
              </p>
            </div>
            {/* Right side - Solution Image */}
            <div className="flex justify-start">
              <img
                src={caseStudy.solution.image}
                alt={`${caseStudy.title} solution`}
                className="w-full h-auto max-w-2xl rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Back to Our Work */}
        <div className="text-center">
          <a
            href="/our-work"
            className="inline-flex items-center text-daira-orange hover:text-white transition-colors text-lg transition-transform duration-300 hover:scale-105 hover:brightness-110"
          >
            ← Back to Our Work
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white px-8 pt-16 pb-8">
        <div className="flex justify-between items-start mb-12">
          <div className="space-y-4">
            <a href="/our-work" className="block text-lg uppercase tracking-wide">OUR WORK</a>
            <a href="#" className="block text-lg uppercase tracking-wide">ABOUT US</a>
            <a href="#" className="block text-lg uppercase tracking-wide">CONTACT US</a>
          </div>
          <div className="space-y-4 text-right">
            <a href="#" className="block text-lg uppercase tracking-wide">INSTAGRAM</a>
            <a href="#" className="block text-lg uppercase tracking-wide">FACEBOOK</a>
            <a href="#" className="block text-lg uppercase tracking-wide">LINKDLN</a>
            <a href="#" className="block text-lg uppercase tracking-wide">EMAIL</a>
          </div>
        </div>
        <div className="w-full mt-4">
          <h2 className="text-7xl md:text-8xl font-black uppercase text-white text-left">LET'S WORK TOGETHER</h2>
        </div>
      </footer>
    </div>
  );
}
