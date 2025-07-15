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
      <header className="relative z-50 flex items-center justify-between px-8 h-[50px] mt-[10px] bg-daira-dark">
        <div className="flex items-center">
          <div className="w-8 h-8 mr-4">
            <img src="/Union logo.png" alt="Logo" className="w-full h-full" />
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
              </div>
            )}
          </div>
          <a href="/contact" className="bg-daira-orange-light hover:bg-daira-orange transition-colors px-6 py-2 rounded-xl text-black font-bold text-lg focus:outline-none">
            Contact us
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <ParallaxSection speed={0.3}>
        <section className="relative">
          <div className="relative h-[634px] mx-8 mt-4 rounded-lg overflow-hidden animate-fadeIn transition-opacity duration-700 hover-scale">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/790a3264ab2d3856b10e60f5a2ad24b54f307934?width=2764"
              alt="Hero background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Union PNG Overlay - Bottom Centered */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center px-8 z-10">
              <img
                src="/Union.png"
                alt="Daira logo"
                className="h-32 md:h-48 lg:h-64 xl:h-80 w-auto animate-fadeIn drop-shadow-lg"
              />
            </div>
          </div>

          {/* Taglines */}
          <RevealOnScroll animation="slideUp" delay={800}>
            <div className="flex justify-between px-8 mt-4 text-sm uppercase tracking-wide text-daira-orange">
              <AnimatedText text="YOUR STORY DESERVES BETTER" type="slideUp" delay={1000} />
              <AnimatedText text="YOUR IDEAS, IN FULL ORBIT" type="slideUp" delay={1200} />
              <AnimatedText text="LIVING IN THE DETAILS" type="slideUp" delay={1400} />
            </div>
          </RevealOnScroll>
        </section>
      </ParallaxSection>

      {/* Our Work Section */}
      <RevealOnScroll animation="slideUp">
        <section className="px-8 mt-16">
          <div className="flex items-center justify-between mb-8">
            <a
              href="/our-work"
              className="text-8xl font-normal hover:text-daira-orange transition-colors hover-scale"
            >
              Our Work
            </a>
            <div className="w-16 h-16 flex items-center justify-center animate-float">
              <svg
                className="w-12 h-12 stroke-white stroke-2 transform rotate-45 hover:rotate-90 transition-transform duration-300"
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
        <div className="grid gap-8">
          {/* First Row - Aman Care */}
          <RevealOnScroll animation="slideUp" delay={200}>
            <div className="bg-[#222222] rounded-xl p-8 relative overflow-hidden h-[434px] hover-lift">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a47fd68fc66712cd20c44dd97144b071d02e8f0?width=2537"
                alt="Aman Care project"
                className="w-full h-full object-cover rounded-lg hover-scale transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full flex items-center justify-between bg-[#222222] px-8 py-6" style={{height: '70px'}}>
                <h3 className="text-white text-3xl font-bold">Aman Care</h3>
                <div className="flex gap-8">
                  <span className="px-8 py-2 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-lg font-medium bg-[#222222] hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                    Content
                  </span>
                  <span className="px-8 py-2 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-lg font-medium bg-[#222222] hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                    Graphics
                  </span>
                  <span className="px-8 py-2 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-lg font-medium bg-[#222222] hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                    Branding
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Second Row - Two Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            <RevealOnScroll animation="slideLeft" delay={400}>
              <div className="flex flex-col hover-lift">
                <div className="bg-[#222222] rounded-t-xl rounded-b-none overflow-hidden h-96">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f89423905d0ca0e6c2f30532876f98601aff4fb5?width=1392"
                    alt="Cream Stream project"
                    className="w-full h-full object-cover hover-scale transition-transform duration-500"
                  />
                </div>
                <div className="w-full flex items-center justify-between bg-[#222222] rounded-b-xl rounded-t-none px-6 py-4" style={{height: '60px'}}>
                  <h3 className="text-white text-xl font-extrabold whitespace-nowrap">Cream Stream</h3>
                  <div className="flex gap-4">
                    <span className="px-6 py-1 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-base font-medium bg-[#222222] hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                      Content
                    </span>
                    <span className="px-6 py-1 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-base font-medium bg-[#222222] hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                      Graphics
                    </span>
                    <span className="px-6 py-1 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-base font-medium bg-[#222222] hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                      Branding
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="slideRight" delay={600}>
              <div className="flex flex-col hover-lift">
                <div className="bg-[#222222] rounded-t-xl rounded-b-none overflow-hidden h-96">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/39650eeeb9c6023fbc3d16426f5e9a26bdb9af3b?width=972"
                    alt="Electrech project"
                    className="w-full h-full object-cover hover-scale transition-transform duration-500"
                  />
                </div>
                <div className="w-full flex items-center justify-between bg-[#222222] rounded-b-xl rounded-t-none px-6 py-4" style={{height: '60px'}}>
                  <h3 className="text-white text-2xl font-extrabold">Electrech</h3>
                  <div className="flex gap-4">
                    <span className="px-6 py-1 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-base font-medium bg-[#222222] hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                      UI/UX
                    </span>
                    <span className="px-6 py-1 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-base font-medium bg-[#222222] hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                      3D model
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      </RevealOnScroll>

      {/* We Do Section */}
      <RevealOnScroll animation="slideUp" delay={200}>
        <section className="px-8 mt-32">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h2 className="text-7xl font-semibold hover-scale">We do a lot</h2>
              <a href="/contact" className="bg-daira-yellow hover:bg-daira-orange transition-colors px-8 py-4 rounded-full text-black font-bold text-lg flex items-center gap-2 hover-lift hover-glow">
                Contact us
                <svg
                  className="w-6 h-6 transform rotate-45 hover:rotate-90 transition-transform duration-300"
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
            <h2 className="text-7xl font-semibold hover-scale">We do it well</h2>
          </div>
        </section>
      </RevealOnScroll>

      {/* Services Section */}
      <RevealOnScroll animation="slideUp" delay={400}>
        <section className="bg-daira-orange mt-16 py-16">
          <div className="px-8">
            <div className="space-y-8">
              <RevealOnScroll animation="slideLeft" delay={600}>
                <div className="border-b-2 border-black pb-8">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 'branding' ? null : 'branding')}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-8xl font-black text-black">Branding</h3>
                    <svg
                      className={`w-8 h-8 text-black transform transition-transform duration-300 ${activeAccordion === 'branding' ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeAccordion === 'branding' && (
                    <div className="mt-8 animate-fadeIn">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex flex-col">
                          <p className="text-black text-xl leading-relaxed max-w-lg mb-6">
                            We identify and unlock your brand's potential to create a unique identity that distinguishes and powerfully positions it within its ecosystem. Every aspect is designed to reflect your culture, connect with your audience, and tell your story.
                          </p>
                          <p className="text-black text-lg leading-relaxed max-w-lg">
                            From initial brand strategy to final implementation, we craft comprehensive brand identities that resonate with your target audience and drive business growth. Our process includes deep research, creative exploration, and strategic positioning.
                          </p>
                        </div>
                        <div className="max-w-lg">
                          <div className="space-y-4 text-right">
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Strategy & Discovery Session</span>
                            </div>
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Logo Design</span>
                            </div>
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Colour Palette & Typography Selection</span>
                            </div>
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Brand Mockups</span>
                            </div>
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Logo Animation</span>
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
                    onClick={() => setActiveAccordion(activeAccordion === 'product-shoot' ? null : 'product-shoot')}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-8xl font-black text-black">Product Shoot</h3>
                    <svg
                      className={`w-8 h-8 text-black transform transition-transform duration-300 ${activeAccordion === 'product-shoot' ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeAccordion === 'product-shoot' && (
                    <div className="mt-8 animate-fadeIn">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex flex-col">
                          <p className="text-black text-xl leading-relaxed max-w-lg mb-6">
                            Professional product photography that showcases your products in their best light. We create stunning visuals that highlight quality, features, and appeal to your target audience.
                          </p>
                          <p className="text-black text-lg leading-relaxed max-w-lg">
                            Our studio setup includes professional lighting, high-resolution cameras, and creative styling to ensure your products look irresistible. Perfect for e-commerce, marketing materials, and social media campaigns.
                          </p>
                        </div>
                        <div className="max-w-lg">
                          <div className="space-y-4 text-right">
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Studio Photography</span>
                            </div>
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Lifestyle Shoots</span>
                            </div>
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">360° Product Views</span>
                            </div>
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Retouching & Editing</span>
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
                    onClick={() => setActiveAccordion(activeAccordion === 'content-creation' ? null : 'content-creation')}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-8xl font-black text-black">Content Creation</h3>
                    <svg
                      className={`w-8 h-8 text-black transform transition-transform duration-300 ${activeAccordion === 'content-creation' ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeAccordion === 'content-creation' && (
                    <div className="mt-8 animate-fadeIn">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex flex-col">
                          <p className="text-black text-xl leading-relaxed max-w-lg mb-6">
                            Engaging content that tells your story and connects with your audience. We create compelling copy, visuals, and multimedia content that drives engagement and conversions.
                          </p>
                          <p className="text-black text-lg leading-relaxed max-w-lg">
                            From social media posts to blog articles, we craft content that resonates with your brand voice and speaks directly to your target audience. Our content strategy focuses on building relationships and driving meaningful engagement.
                          </p>
                        </div>
                        <div className="max-w-lg">
                          <div className="space-y-4 text-right">
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Social Media Content</span>
                            </div>
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Blog Writing</span>
                            </div>
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Email Campaigns</span>
                            </div>
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Video Content</span>
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
                    onClick={() => setActiveAccordion(activeAccordion === 'ad-creatives' ? null : 'ad-creatives')}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-8xl font-black text-black">Ad Creatives</h3>
                    <svg
                      className={`w-8 h-8 text-black transform transition-transform duration-300 ${activeAccordion === 'ad-creatives' ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeAccordion === 'ad-creatives' && (
                    <div className="mt-8 animate-fadeIn">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex flex-col">
                          <p className="text-black text-xl leading-relaxed max-w-lg mb-6">
                            Eye-catching advertising creatives that convert. We design compelling visuals and copy that grab attention and drive action across all digital platforms.
                          </p>
                          <p className="text-black text-lg leading-relaxed max-w-lg">
                            From Facebook ads to Google display campaigns, we create high-converting ad creatives that align with your brand and target audience. Our designs are optimized for performance and engagement.
                          </p>
                        </div>
                        <div className="max-w-lg">
                          <div className="space-y-4 text-right">
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Social Media Ads</span>
                            </div>
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Google Display Ads</span>
                            </div>
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Banner Designs</span>
                            </div>
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Video Ads</span>
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
                    onClick={() => setActiveAccordion(activeAccordion === 'websites' ? null : 'websites')}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-8xl font-black text-black">Websites</h3>
                    <svg
                      className={`w-8 h-8 text-black transform transition-transform duration-300 ${activeAccordion === 'websites' ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeAccordion === 'websites' && (
                    <div className="mt-8 animate-fadeIn">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex flex-col">
                          <p className="text-black text-xl leading-relaxed max-w-lg mb-6">
                            Modern, responsive websites that convert visitors into customers. We build beautiful, functional websites that reflect your brand and drive business growth.
                          </p>
                          <p className="text-black text-lg leading-relaxed max-w-lg">
                            From simple landing pages to complex e-commerce platforms, we create websites that are fast, secure, and optimized for search engines. Our development process ensures your site works perfectly across all devices.
                          </p>
                        </div>
                        <div className="max-w-lg">
                          <div className="space-y-4 text-right">
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Landing Pages</span>
                            </div>
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">E-commerce Sites</span>
                            </div>
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Corporate Websites</span>
                            </div>
                            <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end">
                              <span className="text-black font-bold text-xl">Web Applications</span>
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
        <section className="py-16 bg-daira-dark">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 justify-items-center items-start mx-20">
            {/* Card 1 */}
            <RevealOnScroll animation="scaleIn" delay={400}>
              <div className="relative w-[500px] h-[650px] bg-cyan-300 rounded-[19px] p-8 flex flex-col justify-between overflow-hidden hover-lift">
                {/* Mask group corner - top left */}
                <img src="/Mask group.png" alt="Mask group" className="absolute top-0 left-0 w-[325px] h-[325px] -translate-x-[35px] -translate-y-[100px] rotate-0    " />
                <blockquote className="w-[350px] text-right text-black text-4xl font-bold font-['Inter'] uppercase leading-[45px] mt-20 mb-6 ml-auto translate-y-[95px]">
                  “OUR SALES WERE DEAD. DAIRA REVIVED OUR INSTA AND GOT ORDERS ROLLING IN WITHIN TWO WEEKS!”
                </blockquote>
                {/* Name/Designation bottom left, Stars bottom right */}
                <div className="absolute bottom-6 left-8 flex flex-col items-start">
                  <div className="text-black text-2xl font-medium font-['Inter'] uppercase leading-[48px]">HUZAIFA JABRAN</div>
                  <div className="text-black text-lg font-medium font-['Inter'] uppercase leading-[30px]">CEO, ABDUDAWOOD</div>
                </div>
                <div className="absolute bottom-6 right-8 flex gap-2">
                  <svg width="36" height="36" fill="black" viewBox="0 0 24 24"><polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10"/></svg>
                  <svg width="36" height="36" fill="black" viewBox="0 0 24 24"><polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10"/></svg>
                </div>
              </div>
            </RevealOnScroll>
            {/* Card 2 */}
            <RevealOnScroll animation="scaleIn" delay={600}>
              <div className="relative w-[500px] h-[650px] bg-lime-400 rounded-[19px] p-8 flex flex-col justify-between overflow-hidden hover-lift">
                {/* Mask group corner - top right */}
                <img src="/Mask group.png" alt="Mask group" className="absolute top-0 right-0 w-[325px] h-[325px] translate-x-[105px] -translate-y-[40px] rotate-[90deg]" />
                <blockquote className="w-[350px] text-left text-black text-3xl font-bold font-['Inter'] uppercase leading-[45px] mt-20 mb-6 translate-y-[95px] ">
                  “DAIRA CAPTURED OUR VISION PERFECTLY — MODERN, EMPATHETIC, AND CLEAN. LOVED THE BRAND IDENTITY!”
                </blockquote>
                <div className="absolute bottom-6 left-8 flex flex-col items-start">
                  <div className="text-black text-2xl font-medium font-['Inter'] uppercase leading-[48px]">AMMAZ</div>
                  <div className="text-black text-lg font-medium font-['Inter'] uppercase leading-[30px]">FOUNDER, AMAN CARE</div>
                </div>
                <div className="absolute bottom-6 right-8 flex gap-2">
                  <svg width="36" height="36" fill="black" viewBox="0 0 24 24"><polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10"/></svg>
                  <svg width="36" height="36" fill="black" viewBox="0 0 24 24"><polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10"/></svg>
                </div>
              </div>
            </RevealOnScroll>
            {/* Card 3 */}
            <RevealOnScroll animation="scaleIn" delay={800}>
              <div className="relative w-[500px] h-[650px] bg-yellow-400 rounded-[19px] p-8 flex flex-col justify-between overflow-hidden hover-lift">
                {/* Mask group corner - top left */}
                <img src="/Mask group.png" alt="Mask group" className="absolute top-0 left-0 w-[325px] h-[325px] -translate-x-[35px] -translate-y-[100px] rotate-0" />
                <blockquote className="w-[350px] text-right text-black text-4xl font-bold font-['Inter'] uppercase leading-[45px] mt-20 mb-6 ml-auto translate-y-[95px]">
                  "FUN, BOLD, AND QUIRKY — EXACTLY WHAT WE NEEDED. OUR CAFÉ FINALLY FEELS LIKE A BRAND."
                </blockquote>
                <div className="absolute bottom-6 left-8 flex flex-col items-start">
                  <div className="text-black text-2xl font-medium font-['Inter'] uppercase leading-[48px]">TARIQ MAHMOOD</div>
                  <div className="text-black text-lg font-medium font-['Inter'] uppercase leading-[30px]">CEO, CREAMSTREAM</div>
                </div>
                <div className="absolute bottom-6 right-8 flex gap-2">
                  <svg width="36" height="36" fill="black" viewBox="0 0 24 24"><polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10"/></svg>
                  <svg width="36" height="36" fill="black" viewBox="0 0 24 24"><polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10"/></svg>
                </div>
              </div>
            </RevealOnScroll>
            {/* Card 4 */}
            <RevealOnScroll animation="scaleIn" delay={1000}>
              <div className="relative w-[500px] h-[650px] bg-fuchsia-400 rounded-[19px] p-8 flex flex-col justify-between overflow-hidden hover-lift">
                {/* Mask group corner - top right */}
                <img src="/Mask group.png" alt="Mask group" className="absolute top-0 right-0 w-[325px] h-[325px] translate-x-[105px] -translate-y-[45px] rotate-90" />
                <blockquote className="w-[350px] text-left text-black text-4xl font-bold font-['Inter'] uppercase leading-[45px] mt-20 mb-6 translate-y-[95px]">
                  THEY GAVE US A FRESH, MODERN IDENTITY WITHOUT LOSING THE SPIRITUAL TOUCH. BEAUTIFUL WORK
                </blockquote>
                <div className="absolute bottom-6 left-8 flex flex-col items-start">
                  <div className="text-black text-2xl font-medium font-['Inter'] uppercase leading-[48px]">M. ABDULLAH</div>
                  <div className="text-black text-lg font-medium font-['Inter'] uppercase leading-[30px]">CEO, KISWA TRAVELS</div>
                </div>
                <div className="absolute bottom-6 right-8 flex gap-2">
                  <svg width="36" height="36" fill="black" viewBox="0 0 24 24"><polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10"/></svg>
                  <svg width="36" height="36" fill="black" viewBox="0 0 24 24"><polygon points="12,2 15,10 24,10 17,15 19,24 12,19 5,24 7,15 0,10 9,10"/></svg>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </RevealOnScroll>

      {/* Footer */}
      <footer className="bg-black text-white px-8 pt-16 pb-8">
        <div className="flex justify-between items-start mb-12">
          <div className="space-y-4">
            <a href="/our-work" className="block text-lg uppercase tracking-wide hover:text-daira-orange transition-colors">OUR WORK</a>
            <a href="#about" className="block text-lg uppercase tracking-wide hover:text-daira-orange transition-colors">ABOUT US</a>
            <a href="/contact" className="block text-lg uppercase tracking-wide hover:text-daira-orange transition-colors">CONTACT US</a>
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
