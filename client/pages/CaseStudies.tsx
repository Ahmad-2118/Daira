import React, { useState } from "react";
import FlipCounter from "../components/FlipCounter";
import RevealOnScroll from "../components/RevealOnScroll";
import AnimatedText from "../components/AnimatedText";
import { getAllCaseStudies } from "../lib/caseStudiesData";
import ResponsiveHeader from "../components/ResponsiveHeader";

export default function CaseStudies() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="min-h-screen bg-daira-dark text-white overflow-x-hidden">
      {/* Header */}
      <ResponsiveHeader />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 md:pt-32 pb-16">
        <RevealOnScroll animation="slideUp">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white mb-6 sm:mb-8 leading-tight">
              Case Studies
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 max-w-3xl leading-relaxed">
              I worked on these projects as both a developer and designer,
              creating memorable experiences with smooth animations and
              interactive elements.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* Projects Grid */}
      <section className="px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16">
            {caseStudies.map((caseStudy, index) => (
              <RevealOnScroll
                key={caseStudy.id}
                animation="slideUp"
                delay={index * 200}
              >
                <div className="group cursor-pointer">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative overflow-hidden rounded-2xl">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <img
                          src={caseStudy.overview.image}
                          alt={`${caseStudy.title} project`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-6xl font-black text-daira-orange">
                          {(index + 1).toString().padStart(2, "0")}.
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white group-hover:text-daira-orange transition-colors duration-300">
                          {caseStudy.title}
                        </h2>
                      </div>

                      <p className="text-xl text-white/80 leading-relaxed">
                        {caseStudy.overview.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-3 pt-4">
                        {caseStudy.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-daira-orange hover:text-black transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* View Project Button */}
                      <div className="pt-6">
                        <a
                          href={`/case-study/${caseStudy.id}`}
                          className="inline-flex items-center gap-3 text-white text-lg font-semibold group-hover:text-daira-orange transition-colors duration-300"
                        >
                          View Project
                          <svg
                            className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 py-32 bg-black/50">
        <RevealOnScroll animation="slideUp">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8">
              Ready to work together?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Let's create something amazing. Get in touch and let's discuss
              your next project.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-4 bg-daira-orange hover:bg-daira-orange-light text-black px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Let's Talk
              <svg
                className="w-6 h-6 transform rotate-45 group-hover:rotate-90 transition-transform duration-300"
                viewBox="0 0 23 24"
                fill="none"
              >
                <path
                  d="M22.8555 2.83985C22.8555 1.73527 21.96 0.839844 20.8555 0.839845L2.85547 0.839845C1.7509 0.839845 0.855468 1.73528 0.855468 2.83984C0.855468 3.94441 1.7509 4.83985 2.85547 4.83985L18.8555 4.83984L18.8555 20.8398C18.8555 21.9444 19.7509 22.8398 20.8555 22.8398C21.96 22.8398 22.8555 21.9444 22.8555 20.8398L22.8555 2.83985ZM1.64258 22.0527L3.05679 23.4669L22.2697 4.25406L20.8555 2.83984L19.4413 1.42563L0.228365 20.6385L1.64258 22.0527Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </RevealOnScroll>
      </section>

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
