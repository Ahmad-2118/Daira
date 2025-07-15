import React, { useState } from "react";
import FlipCounter from "../components/FlipCounter";
import RevealOnScroll from "../components/RevealOnScroll";
import AnimatedText from "../components/AnimatedText";
import ParallaxSection from "../components/ParallaxSection";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-daira-dark text-white overflow-x-hidden">
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

            {/* Large Daira Text Overlay */}
            <RevealOnScroll animation="slideUp" delay={500}>
              <div className="absolute bottom-16 left-0 right-0 px-8">
                <svg
                  viewBox="0 0 1384 429"
                  className="w-full max-w-6xl mx-auto h-auto fill-daira-yellow animate-float"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M315.559 270.554C315.559 357.639 245.125 428.234 158.24 428.234C71.3549 428.234 0.920898 357.639 0.920898 270.554C0.920898 183.47 71.3549 112.875 158.24 112.875C198.533 112.875 235.286 128.059 263.119 153.028V0.246094H315.559V270.554ZM158.24 172.943C104.454 172.943 60.8519 216.645 60.8519 270.554C60.8519 324.464 104.454 368.166 158.24 368.166C212.026 368.166 255.628 324.464 255.628 270.554C255.628 216.645 212.026 172.943 158.24 172.943Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M522.82 112.875C608.871 112.875 678.783 182.122 680.117 268.052H680.139V428.234H627.699V388.079C599.866 413.048 563.113 428.234 522.82 428.234C435.935 428.234 365.501 357.639 365.501 270.554C365.501 183.47 435.935 112.875 522.82 112.875ZM522.82 172.943C469.034 172.943 425.432 216.645 425.432 270.554C425.432 324.464 469.034 368.166 522.82 368.166C576.606 368.166 620.208 324.464 620.208 270.554C620.208 216.645 576.606 172.943 522.82 172.943Z"
                  />
                  <path d="M802.498 428.234H742.567V112.875H802.498V428.234Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1225.76 112.875C1311.81 112.875 1381.72 182.122 1383.06 268.052H1383.08V428.234H1330.64V388.079C1302.81 413.048 1266.05 428.234 1225.76 428.234C1138.88 428.234 1068.44 357.639 1068.44 270.554C1068.44 183.47 1138.88 112.875 1225.76 112.875ZM1225.76 172.943C1171.97 172.943 1128.37 216.645 1128.37 270.554C1128.37 324.464 1171.97 368.166 1225.76 368.166C1279.55 368.166 1323.15 324.464 1323.15 270.554C1323.15 216.645 1279.55 172.943 1225.76 172.943Z"
                  />
                  <path d="M1019.12 112.249C1032.23 112.249 1045.34 114.126 1058.45 117.255L1052.83 175.446C1040.97 171.692 1029.11 169.814 1017.87 169.814C964.811 169.814 926.105 177.323 926.105 249.28V426.983H866.174V112.875H922.984V170.44C942.337 131.646 974.799 112.249 1019.12 112.249Z" />
                  <path d="M773.781 0.246094C796.879 0.246094 816.232 19.0175 816.232 42.1689C816.232 67.1974 796.879 85.3431 773.781 85.3431C748.81 85.3431 730.081 67.1974 730.081 42.1689C730.081 17.7661 748.81 0.246094 773.781 0.246094Z" />
                </svg>
              </div>
            </RevealOnScroll>
          </div>

          {/* Taglines */}
          <RevealOnScroll animation="slideUp" delay={800}>
            <div className="flex justify-between px-8 mt-4 text-sm uppercase tracking-wide text-daira-orange">
              <AnimatedText text="your story deserves better" type="slideUp" delay={1000} />
              <AnimatedText text="Your Ideas, In Full Orbit" type="slideUp" delay={1200} />
              <AnimatedText text="Living in the details" type="slideUp" delay={1400} />
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
            <div className="bg-black rounded-xl p-8 relative overflow-hidden h-[434px] hover-lift">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a47fd68fc66712cd20c44dd97144b071d02e8f0?width=2537"
                alt="Aman Care project"
                className="w-full h-full object-cover rounded-lg hover-scale transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full flex items-center justify-between bg-black px-8 py-6" style={{height: '70px'}}>
                <h3 className="text-white text-3xl font-bold">Aman Care</h3>
                <div className="flex gap-8">
                  <span className="px-8 py-2 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-lg font-medium bg-black hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                    Content
                  </span>
                  <span className="px-8 py-2 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-lg font-medium bg-black hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                    Graphics
                  </span>
                  <span className="px-8 py-2 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-lg font-medium bg-black hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
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
                <div className="bg-black rounded-t-xl rounded-b-none overflow-hidden h-96">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f89423905d0ca0e6c2f30532876f98601aff4fb5?width=1392"
                    alt="Cream Stream project"
                    className="w-full h-full object-cover hover-scale transition-transform duration-500"
                  />
                </div>
                <div className="w-full flex items-center justify-between bg-black rounded-b-xl rounded-t-none px-6 py-4" style={{height: '60px'}}>
                  <h3 className="text-white text-xl font-extrabold whitespace-nowrap">Cream Stream</h3>
                  <div className="flex gap-4">
                    <span className="px-6 py-1 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-base font-medium bg-black hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                      Content
                    </span>
                    <span className="px-6 py-1 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-base font-medium bg-black hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                      Graphics
                    </span>
                    <span className="px-6 py-1 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-base font-medium bg-black hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                      Branding
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="slideRight" delay={600}>
              <div className="flex flex-col hover-lift">
                <div className="bg-black rounded-t-xl rounded-b-none overflow-hidden h-96">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/39650eeeb9c6023fbc3d16426f5e9a26bdb9af3b?width=972"
                    alt="Electrech project"
                    className="w-full h-full object-cover hover-scale transition-transform duration-500"
                  />
                </div>
                <div className="w-full flex items-center justify-between bg-black rounded-b-xl rounded-t-none px-6 py-4" style={{height: '60px'}}>
                  <h3 className="text-white text-2xl font-extrabold">Electrech</h3>
                  <div className="flex gap-4">
                    <span className="px-6 py-1 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-base font-medium bg-black hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
                      UI/UX
                    </span>
                    <span className="px-6 py-1 border-2 border-[#FFA500] rounded-full text-[#FFA500] text-base font-medium bg-black hover:bg-[#FFA500] hover:text-black transition-colors duration-300 hover-glow">
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
              <button className="bg-daira-yellow hover:bg-daira-orange transition-colors px-8 py-4 rounded-full text-black font-bold text-lg flex items-center gap-2 hover-lift hover-glow">
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
              </button>
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
                <div className="flex justify-between items-center border-b-2 border-black pb-8 hover-lift">
                  <div className="flex flex-col">
                    <h3 className="text-8xl font-black text-black mb-4 -mt-4 hover-scale">Branding</h3>
                    <p className="text-black text-xl leading-relaxed max-w-lg">
                      We identify and unlock your brand's potential to create a unique identity that distinguishes and powerfully positions it within its ecosystem. Every aspect is designed to reflect your culture, connect with your audience, and tell your story.
                    </p>
                  </div>
                  <div className="max-w-lg">
                    <div className="mt-8 space-y-4 text-right">
                      <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end hover-glow">
                        <span className="text-black font-bold text-xl">
                          Strategy & Discovery Session
                        </span>
                      </div>
                      <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end hover-glow">
                        <span className="text-black font-bold text-xl">
                          Logo Design
                        </span>
                      </div>
                      <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end hover-glow">
                        <span className="text-black font-bold text-xl">
                          Colour Palette & Typography Selection
                        </span>
                      </div>
                      <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end hover-glow">
                        <span className="text-black font-bold text-xl">
                          Brand Mockups
                        </span>
                      </div>
                      <div className="border-b border-black pb-2 w-4/5 ml-auto flex flex-col items-end hover-glow">
                        <span className="text-black font-bold text-xl">
                          Logo Animation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll animation="slideRight" delay={800}>
                <div className="border-b-2 border-black pb-8 hover-lift">
                  <h3 className="text-8xl font-black text-black hover-scale">Product Shoot</h3>
                </div>
              </RevealOnScroll>

              <RevealOnScroll animation="slideLeft" delay={1000}>
                <div className="border-b-2 border-black pb-8 hover-lift">
                  <h3 className="text-8xl font-black text-black hover-scale">
                    Content Creation
                  </h3>
                </div>
              </RevealOnScroll>

              <RevealOnScroll animation="slideRight" delay={1200}>
                <div className="border-b-2 border-black pb-8 hover-lift">
                  <h3 className="text-8xl font-black text-black hover-scale">Ad Creatives</h3>
                </div>
              </RevealOnScroll>

              <RevealOnScroll animation="slideLeft" delay={1400}>
                <div className="pb-8 hover-lift">
                  <h3 className="text-8xl font-black text-black hover-scale">Websites</h3>
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
                {/* Black corner */}
                <svg className="absolute top-0 left-0" width="140" height="140" viewBox="0 0 180 180"><polygon points="0,0 180,0 0,180 60,60" fill="black"/></svg>
                <blockquote className="w-[350px] text-right text-black text-4xl font-bold font-['Inter'] uppercase leading-[48px] mt-20 mb-6 ml-auto">
                  “OUR SALES WERE DEAD. DAIRA REVIVED OUR INSTA AND GOT ORDERS ROLLING IN WITHIN TWO WEEKS!”
                </blockquote>
                {/* Name/Designation bottom left, Stars bottom right */}
                <div className="absolute bottom-6 left-8 flex flex-col items-start">
                  <div className="text-black text-2xl font-medium font-['Inter'] uppercase leading-[48px]">HUZAIFA JABRAN</div>
                  <div className="text-black text-lg font-medium font-['Inter'] uppercase leading-[48px]">CEO, ABDUDAWOOD</div>
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
                <svg className="absolute top-0 right-0" width="140" height="140" viewBox="0 0 180 180"><polygon points="180,0 180,180 0,0 120,60" fill="black"/></svg>
                <blockquote className="w-[350px] text-left text-black text-4xl font-bold font-['Inter'] uppercase leading-[48px] mt-20 mb-6">
                  “DAIRA CAPTURED OUR VISION PERFECTLY — MODERN, EMPATHETIC, AND CLEAN. LOVED THE BRAND IDENTITY!”
                </blockquote>
                <div className="absolute bottom-6 left-8 flex flex-col items-start">
                  <div className="text-black text-2xl font-medium font-['Inter'] uppercase leading-[48px]">AMMAZ</div>
                  <div className="text-black text-lg font-medium font-['Inter'] uppercase leading-[48px]">FOUNDER, AMAN CARE</div>
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
                <svg className="absolute top-0 left-0" width="140" height="140" viewBox="0 0 180 180"><polygon points="0,0 180,0 0,180 60,60" fill="black"/></svg>
                <blockquote className="w-[350px] text-right text-black text-4xl font-bold font-['Inter'] uppercase leading-[48px] mt-20 mb-6 ml-auto">
                  "FUN, BOLD, AND QUIRKY — EXACTLY WHAT WE NEEDED. OUR CAFÉ FINALLY FEELS LIKE A BRAND."
                </blockquote>
                <div className="absolute bottom-6 left-8 flex flex-col items-start">
                  <div className="text-black text-2xl font-medium font-['Inter'] uppercase leading-[48px]">TARIQ MAHMOOD</div>
                  <div className="text-black text-lg font-medium font-['Inter'] uppercase leading-[48px]">CEO, CREAMSTREAM</div>
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
                <svg className="absolute top-0 right-0" width="140" height="140" viewBox="0 0 180 180"><polygon points="180,0 180,180 0,0 120,60" fill="black"/></svg>
                <blockquote className="w-[350px] text-left text-black text-4xl font-bold font-['Inter'] uppercase leading-[48px] mt-20 mb-6">
                  THEY GAVE US A FRESH, MODERN IDENTITY WITHOUT LOSING THE SPIRITUAL TOUCH. BEAUTIFUL WORK
                </blockquote>
                <div className="absolute bottom-6 left-8 flex flex-col items-start">
                  <div className="text-black text-2xl font-medium font-['Inter'] uppercase leading-[48px]">M. ABDULLAH</div>
                  <div className="text-black text-lg font-medium font-['Inter'] uppercase leading-[48px]">CEO, KISWA TRAVELS</div>
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
