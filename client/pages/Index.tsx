import React, { useState } from "react";
import FlipCounter from "../components/FlipCounter";
import RevealOnScroll from "../components/RevealOnScroll";
import AnimatedText from "../components/AnimatedText";
import ParallaxSection from "../components/ParallaxSection";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-daira-dark text-white overflow-x-hidden">
      {/* Header */}
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
              className={`absolute right-0 mt-4 w-48 sm:w-64 bg-daira-dark border border-daira-orange rounded-lg shadow-lg z-50 transition-all duration-300 transform ${menuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}
            >
              <div className="py-2">
                <a
                  href="/our-work"
                  className="block px-4 sm:px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors text-sm sm:text-base"
                >
                  Our Work
                </a>
                <a
                  href="/case-studies"
                  className="block px-4 sm:px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors text-sm sm:text-base"
                >
                  Case Studies
                </a>
                <a
                  href="#about"
                  className="block px-4 sm:px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors text-sm sm:text-base"
                >
                  About Us
                </a>
                <a
                  href="/contact"
                  className="block px-4 sm:px-6 py-3 text-white hover:bg-daira-orange hover:text-black transition-colors text-sm sm:text-base"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <ParallaxSection speed={0.3}>
        <section className="relative">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[634px] mx-4 sm:mx-6 md:mx-8 mt-4 rounded-lg overflow-hidden animate-fadeIn transition-opacity duration-700 hover-scale">
            <video
              src="/daira intro.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="https://cdn.builder.io/api/v1/image/assets/TEMP/790a3264ab2d3856b10e60f5a2ad24b54f307934?width=2764"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Union PNG Overlay - Bottom Centered */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 flex justify-center px-4 sm:px-6 md:px-8 z-10">
              <img
                src="/Union.png"
                alt="Daira logo"
                className="h-20 sm:h-24 md:h-32 lg:h-48 xl:h-64 2xl:h-80 w-auto animate-fadeIn drop-shadow-lg"
              />
            </div>
          </div>

          {/* Taglines */}
          <RevealOnScroll animation="slideUp" delay={800}>
            <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-6 md:px-8 mt-4 text-xs sm:text-sm uppercase tracking-wide text-daira-orange space-y-2 sm:space-y-0">
              <AnimatedText
                text="YOUR STORY DESERVES BETTER"
                type="slideUp"
                delay={1000}
              />
              <AnimatedText
                text="YOUR IDEAS, IN FULL ORBIT"
                type="slideUp"
                delay={1200}
              />
              <AnimatedText
                text="LIVING IN THE DETAILS"
                type="slideUp"
                delay={1400}
              />
            </div>
          </RevealOnScroll>
        </section>
      </ParallaxSection>

      {/* Our Work Section */}
      <RevealOnScroll animation="slideUp">
        <section className="px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-0">
            <a
              href="/our-work"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal hover:text-daira-orange transition-colors hover-scale"
            >
              Our Work
            </a>
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center animate-float">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-white stroke-2 transform rotate-45 hover:rotate-90 transition-transform duration-300"
                viewBox="0 0 51 50"
                fill="none"
              >
                <path
                  d="M50.8047 3C50.8047 1.34315 49.4615 2.10319e-06 47.8047 -4.1496e-09L20.8047 1.00737e-06C19.1478 1.00737e-06 17.8047 1.34315 17.8047 3C17.8047 4.65686 19.1478 6 20.8047 6H44.8047V30C44.8047 31.6569 46.1478 33 47.8047 33C49.4615 33 50.8047 31.6569 50.8047 30L50.8047 3ZM3 47.8047L5.12132 49.926L49.926 5.12132L47.8047 3L45.6834 0.878681L0.87868 45.6834L3 47.8047Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid gap-4 sm:gap-6 md:gap-8">
            {/* First Row - Aman Care */}
            <RevealOnScroll animation="slideUp" delay={200}>
              <a href="/case-study/aman-care" className="block">
                <div className="bg-[#222222] rounded-xl p-4 sm:p-6 md:p-8 relative overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[781px] hover-lift">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a47fd68fc66712cd20c44dd97144b071d02e8f0?width=2537"
                    alt="Aman Care project"
                    className="w-full h-full object-cover rounded-lg hover-scale transition-transform duration-500"
                  />
                  <div
                    className="absolute bottom-0 left-0 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#222222] px-4 sm:px-6 md:px-8 py-4 sm:py-6 gap-2 sm:gap-0"
                    style={{ minHeight: "70px" }}
                  >
                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">Aman Care</h3>
                    <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-8">
                      <span className="px-3 sm:px-4 md:px-8 py-1 sm:py-2 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-xs sm:text-sm md:text-lg font-medium bg-[#222222] hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                        Content
                      </span>
                      <span className="px-3 sm:px-4 md:px-8 py-1 sm:py-2 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-xs sm:text-sm md:text-lg font-medium bg-[#222222] hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                        Graphics
                      </span>
                      <span className="px-3 sm:px-4 md:px-8 py-1 sm:py-2 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-xs sm:text-sm md:text-lg font-medium bg-[#222222] hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                        Branding
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </RevealOnScroll>

            {/* Second Row - Two Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <RevealOnScroll animation="slideLeft" delay={400}>
                <a href="/case-study/cream-stream" className="block">
                  <div className="flex flex-col hover-lift">
                    <div className="bg-[#222222] rounded-t-xl rounded-b-none overflow-hidden h-48 sm:h-64 md:h-80 lg:h-96">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f89423905d0ca0e6c2f30532876f98601aff4fb5?width=1392"
                        alt="Cream Stream project"
                        className="w-full h-full object-cover hover-scale transition-transform duration-500"
                      />
                    </div>
                    <div
                      className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#222222] rounded-b-xl rounded-t-none px-4 sm:px-6 py-3 sm:py-4 gap-2 sm:gap-0"
                      style={{ minHeight: "60px" }}
                    >
                      <h3 className="text-white text-lg sm:text-xl font-extrabold whitespace-nowrap">
                        Cream Stream
                      </h3>
                      <div className="flex flex-wrap gap-2 sm:gap-4">
                        <span className="px-3 sm:px-4 md:px-6 py-1 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-xs sm:text-sm md:text-base font-medium bg-[#222222] hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                          Content
                        </span>
                        <span className="px-3 sm:px-4 md:px-6 py-1 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-xs sm:text-sm md:text-base font-medium bg-[#222222] hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                          Graphics
                        </span>
                        <span className="px-3 sm:px-4 md:px-6 py-1 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-xs sm:text-sm md:text-base font-medium bg-[#222222] hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                          Branding
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </RevealOnScroll>

              <RevealOnScroll animation="slideRight" delay={600}>
                <a href="/case-study/electrech" className="block">
                  <div className="flex flex-col hover-lift">
                    <div className="bg-[#222222] rounded-t-xl rounded-b-none overflow-hidden h-48 sm:h-64 md:h-80 lg:h-96">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/39650eeeb9c6023fbc3d16426f5e9a26bdb9af3b?width=972"
                        alt="Electrech project"
                        className="w-full h-full object-cover hover-scale transition-transform duration-500"
                      />
                    </div>
                    <div
                      className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#222222] rounded-b-xl rounded-t-none px-4 sm:px-6 py-3 sm:py-4 gap-2 sm:gap-0"
                      style={{ minHeight: "60px" }}
                    >
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-extrabold">
                        Electrech
                      </h3>
                      <div className="flex flex-wrap gap-2 sm:gap-4">
                        <span className="px-3 sm:px-4 md:px-6 py-1 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-xs sm:text-sm md:text-base font-medium bg-[#222222] hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                          UI/UX
                        </span>
                        <span className="px-3 sm:px-4 md:px-6 py-1 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-xs sm:text-sm md:text-base font-medium bg-[#222222] hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                          3D model
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* We Do Section */}
      <RevealOnScroll animation="slideUp" delay={200}>
        <section className="px-4 sm:px-6 md:px-8 mt-16 sm:mt-20 md:mt-24 lg:mt-32">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold hover-scale">
                We do a lot
              </h2>
              <a
                href="/contact"
                className="bg-daira-yellow hover:bg-daira-orange transition-colors px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-black font-bold text-sm sm:text-base md:text-lg flex items-center gap-2 hover-lift hover-glow whitespace-nowrap"
              >
                Contact us
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transform rotate-45 hover:rotate-90 transition-transform duration-300"
                  viewBox="0 0 23 24"
                  fill="none"
                >
                  <path
                    d="M22.8555 2.83985C22.8555 1.73527 21.96 0.839844 20.8555 0.839845L2.85547 0.839845C1.7509 0.839845 0.855468 1.73528 0.855468 2.83984C0.855468 3.94441 1.7509 4.83985 2.85547 4.83985L18.8555 4.83984L18.8555 20.8398C18.8555 21.9444 19.7509 22.8398 20.8555 22.8398C21.96 22.8398 22.8555 21.9444 22.8555 20.8398L22.8555 2.83985ZM1.64258 22.0527L3.05679 23.4669L22.2697 4.25406L20.8555 2.83984L19.4413 1.42563L0.228365 20.6385L1.64258 22.0527Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold hover-scale">
              We do it well
            </h2>
          </div>
        </section>
      </RevealOnScroll>

      {/* Services Section */}
      <RevealOnScroll animation="slideUp" delay={400}>
        <section className="bg-daira-orange mt-8 sm:mt-12 md:mt-16 py-8 sm:py-12 md:py-16">
          <div className="px-4 sm:px-6 md:px-8">
            <div className="space-y-6 sm:space-y-8">
              <RevealOnScroll animation="slideLeft" delay={600}>
                <div className="border-b-2 border-black pb-8">
                  <button
                    onClick={() =>
                      setActiveAccordion(
                        activeAccordion === "branding" ? null : "branding",
                      )
                    }
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-black">Branding</h3>
                    <svg
                      className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black transform transition-transform duration-300 ${activeAccordion === "branding" ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeAccordion === "branding" && (
                    <div className="mt-6 sm:mt-8 animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="flex flex-col">
                          <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mb-4 sm:mb-6">
                            We identify and unlock your brand's potential to
                            create a unique identity that distinguishes and
                            powerfully positions it within its ecosystem. Every
                            aspect is designed to reflect your culture, connect
                            with your audience, and tell your story.
                          </p>
                          <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                            From initial brand strategy to final implementation,
                            we craft comprehensive brand identities that
                            resonate with your target audience and drive
                            business growth. Our process includes deep research,
                            creative exploration, and strategic positioning.
                          </p>
                        </div>
                        <div className="max-w-lg">
                          <div className="space-y-3 sm:space-y-4 text-right">
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Strategy & Discovery Session
                              </span>
                            </div>
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Logo Design
                              </span>
                            </div>
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Colour Palette & Typography Selection
                              </span>
                            </div>
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Brand Mockups
                              </span>
                            </div>
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Logo Animation
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </RevealOnScroll>

              <RevealOnScroll animation="slideRight" delay={800}>
                <div className="border-b-2 border-black pb-8">
                  <button
                    onClick={() =>
                      setActiveAccordion(
                        activeAccordion === "product-shoot"
                          ? null
                          : "product-shoot",
                      )
                    }
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-black">
                      Product Shoot
                    </h3>
                    <svg
                      className={`w-8 h-8 text-black transform transition-transform duration-300 ${activeAccordion === "product-shoot" ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeAccordion === "product-shoot" && (
                    <div className="mt-6 sm:mt-8 animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="flex flex-col">
                          <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mb-4 sm:mb-6">
                            Professional product photography that showcases your
                            products in their best light. We create stunning
                            visuals that highlight quality, features, and appeal
                            to your target audience.
                          </p>
                          <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                            Our studio setup includes professional lighting,
                            high-resolution cameras, and creative styling to
                            ensure your products look irresistible. Perfect for
                            e-commerce, marketing materials, and social media
                            campaigns.
                          </p>
                        </div>
                        <div className="max-w-lg">
                          <div className="space-y-3 sm:space-y-4 text-right">
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Studio Photography
                              </span>
                            </div>
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Lifestyle Shoots
                              </span>
                            </div>
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                360° Product Views
                              </span>
                            </div>
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Retouching & Editing
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </RevealOnScroll>

              <RevealOnScroll animation="slideLeft" delay={1000}>
                <div className="border-b-2 border-black pb-8">
                  <button
                    onClick={() =>
                      setActiveAccordion(
                        activeAccordion === "content-creation"
                          ? null
                          : "content-creation",
                      )
                    }
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-black">
                      Content Creation
                    </h3>
                    <svg
                      className={`w-8 h-8 text-black transform transition-transform duration-300 ${activeAccordion === "content-creation" ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeAccordion === "content-creation" && (
                    <div className="mt-6 sm:mt-8 animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="flex flex-col">
                          <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mb-4 sm:mb-6">
                            Engaging content that tells your story and connects
                            with your audience. We create compelling copy,
                            visuals, and multimedia content that drives
                            engagement and conversions.
                          </p>
                          <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                            From social media posts to blog articles, we craft
                            content that resonates with your brand voice and
                            speaks directly to your target audience. Our content
                            strategy focuses on building relationships and
                            driving meaningful engagement.
                          </p>
                        </div>
                        <div className="max-w-lg">
                          <div className="space-y-3 sm:space-y-4 text-right">
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Social Media Content
                              </span>
                            </div>
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Blog Writing
                              </span>
                            </div>
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Email Campaigns
                              </span>
                            </div>
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Video Content
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </RevealOnScroll>

              <RevealOnScroll animation="slideRight" delay={1200}>
                <div className="border-b-2 border-black pb-8">
                  <button
                    onClick={() =>
                      setActiveAccordion(
                        activeAccordion === "ad-creatives"
                          ? null
                          : "ad-creatives",
                      )
                    }
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-black">
                      Ad Creatives
                    </h3>
                    <svg
                      className={`w-8 h-8 text-black transform transition-transform duration-300 ${activeAccordion === "ad-creatives" ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeAccordion === "ad-creatives" && (
                    <div className="mt-6 sm:mt-8 animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="flex flex-col">
                          <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mb-4 sm:mb-6">
                            Eye-catching advertising creatives that convert. We
                            design compelling visuals and copy that grab
                            attention and drive action across all digital
                            platforms.
                          </p>
                          <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                            From Facebook ads to Google display campaigns, we
                            create high-converting ad creatives that align with
                            your brand and target audience. Our designs are
                            optimized for performance and engagement.
                          </p>
                        </div>
                        <div className="max-w-lg">
                          <div className="space-y-3 sm:space-y-4 text-right">
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Social Media Ads
                              </span>
                            </div>
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Google Display Ads
                              </span>
                            </div>
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Banner Designs
                              </span>
                            </div>
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Video Ads
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </RevealOnScroll>

              <RevealOnScroll animation="slideLeft" delay={1400}>
                <div className="pb-8">
                  <button
                    onClick={() =>
                      setActiveAccordion(
                        activeAccordion === "websites" ? null : "websites",
                      )
                    }
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-black">Websites</h3>
                    <svg
                      className={`w-8 h-8 text-black transform transition-transform duration-300 ${activeAccordion === "websites" ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeAccordion === "websites" && (
                    <div className="mt-6 sm:mt-8 animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="flex flex-col">
                          <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mb-4 sm:mb-6">
                            Modern, responsive websites that convert visitors
                            into customers. We build beautiful, functional
                            websites that reflect your brand and drive business
                            growth.
                          </p>
                          <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                            From simple landing pages to complex e-commerce
                            platforms, we create websites that are fast, secure,
                            and optimized for search engines. Our development
                            process ensures your site works perfectly across all
                            devices.
                          </p>
                        </div>
                        <div className="max-w-lg">
                          <div className="space-y-3 sm:space-y-4 text-right">
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Landing Pages
                              </span>
                            </div>
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                E-commerce Sites
                              </span>
                            </div>
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Corporate Websites
                              </span>
                            </div>
                            <div className="border-b border-black pb-2 w-full sm:w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-sm sm:text-base md:text-xl">
                                Web Applications
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Testimonials Section */}
      <RevealOnScroll animation="slideUp" delay={200}>
        <section className="py-8 sm:py-12 md:py-16 bg-daira-dark">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-x-12 md:gap-y-16 justify-items-center items-start mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
            {/* Card 1 */}
            <RevealOnScroll animation="scaleIn" delay={400}>
              <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] bg-cyan-300 rounded-[19px] p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden hover-lift">
                {/* Mask group corner - top left */}
                <img
                  src="/Mask group.png"
                  alt="Mask group"
                  className="absolute top-0 left-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[325px] lg:h-[325px] -translate-x-[15px] sm:-translate-x-[20px] md:-translate-x-[25px] lg:-translate-x-[35px] -translate-y-[40px] sm:-translate-y-[60px] md:-translate-y-[80px] lg:-translate-y-[100px] rotate-0"
                />
                <blockquote className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[350px] text-right text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-['Inter'] uppercase leading-tight sm:leading-snug md:leading-normal lg:leading-[45px] mt-10 sm:mt-12 md:mt-16 lg:mt-20 mb-3 sm:mb-4 md:mb-6 ml-auto translate-y-[30px] sm:translate-y-[40px] md:translate-y-[60px] lg:translate-y-[95px]">
                  "OUR SALES WERE DEAD. DAIRA REVIVED OUR INSTA AND GOT ORDERS
                  ROLLING IN WITHIN TWO WEEKS!"
                </blockquote>
                {/* Name/Designation bottom left, Stars bottom right */}
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-8 flex flex-col items-start">
                  <div className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium font-['Inter'] uppercase leading-tight sm:leading-tight md:leading-tight lg:leading-[48px]">
                    HUZAIFA JABRAN
                  </div>
                  <div className="text-black text-xs sm:text-sm md:text-base lg:text-lg font-medium font-['Inter'] uppercase leading-tight sm:leading-tight md:leading-tight lg:leading-[30px]">
                    CEO, ABDUDAWOOD
                  </div>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-8 flex gap-1 sm:gap-1.5 md:gap-2">
                  <svg width="16" height="16" className="sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px]" fill="black" viewBox="0 0 24 24">
                    <polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10" />
                  </svg>
                  <svg width="16" height="16" className="sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px]" fill="black" viewBox="0 0 24 24">
                    <polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10" />
                  </svg>
                </div>
              </div>
            </RevealOnScroll>
            {/* Card 2 */}
            <RevealOnScroll animation="scaleIn" delay={600}>
              <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] bg-lime-400 rounded-[19px] p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden hover-lift">
                {/* Mask group corner - top right */}
                <img
                  src="/Mask group.png"
                  alt="Mask group"
                  className="absolute top-0 right-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[325px] lg:h-[325px] translate-x-[40px] sm:translate-x-[60px] md:translate-x-[80px] lg:translate-x-[105px] -translate-y-[20px] sm:-translate-y-[25px] md:-translate-y-[30px] lg:-translate-y-[40px] rotate-[90deg]"
                />
                <blockquote className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[350px] text-left text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-['Inter'] uppercase leading-tight sm:leading-snug md:leading-normal lg:leading-[45px] mt-10 sm:mt-12 md:mt-16 lg:mt-20 mb-3 sm:mb-4 md:mb-6 translate-y-[30px] sm:translate-y-[40px] md:translate-y-[60px] lg:translate-y-[95px]">
                  "DAIRA CAPTURED OUR VISION PERFECTLY — MODERN, EMPATHETIC, AND
                  CLEAN. LOVED THE BRAND IDENTITY!"
                </blockquote>
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-8 flex flex-col items-start">
                  <div className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium font-['Inter'] uppercase leading-tight sm:leading-tight md:leading-tight lg:leading-[48px]">
                    AMMAZ
                  </div>
                  <div className="text-black text-xs sm:text-sm md:text-base lg:text-lg font-medium font-['Inter'] uppercase leading-tight sm:leading-tight md:leading-tight lg:leading-[30px]">
                    FOUNDER, AMAN CARE
                  </div>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-8 flex gap-1 sm:gap-1.5 md:gap-2">
                  <svg width="16" height="16" className="sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px]" fill="black" viewBox="0 0 24 24">
                    <polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10" />
                  </svg>
                  <svg width="16" height="16" className="sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px]" fill="black" viewBox="0 0 24 24">
                    <polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10" />
                  </svg>
                </div>
              </div>
            </RevealOnScroll>
            {/* Card 3 */}
            <RevealOnScroll animation="scaleIn" delay={800}>
              <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] bg-yellow-400 rounded-[19px] p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden hover-lift">
                {/* Mask group corner - top left */}
                <img
                  src="/Mask group.png"
                  alt="Mask group"
                  className="absolute top-0 left-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[325px] lg:h-[325px] -translate-x-[15px] sm:-translate-x-[20px] md:-translate-x-[25px] lg:-translate-x-[35px] -translate-y-[40px] sm:-translate-y-[60px] md:-translate-y-[80px] lg:-translate-y-[100px] rotate-0"
                />
                <blockquote className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[350px] text-right text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-['Inter'] uppercase leading-tight sm:leading-snug md:leading-normal lg:leading-[45px] mt-10 sm:mt-12 md:mt-16 lg:mt-20 mb-3 sm:mb-4 md:mb-6 ml-auto translate-y-[30px] sm:translate-y-[40px] md:translate-y-[60px] lg:translate-y-[95px]">
                  "FUN, BOLD, AND QUIRKY — EXACTLY WHAT WE NEEDED. OUR CAFÉ
                  FINALLY FEELS LIKE A BRAND."
                </blockquote>
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-8 flex flex-col items-start">
                  <div className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium font-['Inter'] uppercase leading-tight sm:leading-tight md:leading-tight lg:leading-[48px]">
                    TARIQ MAHMOOD
                  </div>
                  <div className="text-black text-xs sm:text-sm md:text-base lg:text-lg font-medium font-['Inter'] uppercase leading-tight sm:leading-tight md:leading-tight lg:leading-[30px]">
                    CEO, CREAMSTREAM
                  </div>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-8 flex gap-1 sm:gap-1.5 md:gap-2">
                  <svg width="16" height="16" className="sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px]" fill="black" viewBox="0 0 24 24">
                    <polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10" />
                  </svg>
                  <svg width="16" height="16" className="sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px]" fill="black" viewBox="0 0 24 24">
                    <polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10" />
                  </svg>
                </div>
              </div>
            </RevealOnScroll>
            {/* Card 4 */}
            <RevealOnScroll animation="scaleIn" delay={1000}>
              <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] bg-fuchsia-400 rounded-[19px] p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden hover-lift">
                {/* Mask group corner - top right */}
                <img
                  src="/Mask group.png"
                  alt="Mask group"
                  className="absolute top-0 right-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[325px] lg:h-[325px] translate-x-[40px] sm:translate-x-[60px] md:translate-x-[80px] lg:translate-x-[105px] -translate-y-[25px] sm:-translate-y-[30px] md:-translate-y-[35px] lg:-translate-y-[45px] rotate-90"
                />
                <blockquote className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[350px] text-left text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-['Inter'] uppercase leading-tight sm:leading-snug md:leading-normal lg:leading-[45px] mt-10 sm:mt-12 md:mt-16 lg:mt-20 mb-3 sm:mb-4 md:mb-6 translate-y-[30px] sm:translate-y-[40px] md:translate-y-[60px] lg:translate-y-[95px]">
                  THEY GAVE US A FRESH, MODERN IDENTITY WITHOUT LOSING THE
                  SPIRITUAL TOUCH. BEAUTIFUL WORK
                </blockquote>
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-8 flex flex-col items-start">
                  <div className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium font-['Inter'] uppercase leading-tight sm:leading-tight md:leading-tight lg:leading-[48px]">
                    AMMAR
                  </div>
                  <div className="text-black text-xs sm:text-sm md:text-base lg:text-lg font-medium font-['Inter'] uppercase leading-tight sm:leading-tight md:leading-tight lg:leading-[30px]">
                    FOUNDER, KISWA
                  </div>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-8 flex gap-1 sm:gap-1.5 md:gap-2">
                  <svg width="16" height="16" className="sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px]" fill="black" viewBox="0 0 24 24">
                    <polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10" />
                  </svg>
                  <svg width="16" height="16" className="sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px]" fill="black" viewBox="0 0 24 24">
                    <polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10" />
                  </svg>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </RevealOnScroll>

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
