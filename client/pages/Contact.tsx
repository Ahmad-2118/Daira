import React, { useState } from "react";
import FlipCounter from "../components/FlipCounter";
import RevealOnScroll from "../components/RevealOnScroll";
import AnimatedText from "../components/AnimatedText";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    "Branding",
    "Content",
    "Marketing",
    "web-design",
    "development",
  ];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  const handleNext = () => {
    // Navigate to the form page with selected services
    const servicesParam = selectedServices.join(",");
    window.location.href = `/contact-form?services=${encodeURIComponent(servicesParam)}`;
  };

  return (
    <div className="min-h-screen bg-daira-dark text-white overflow-x-hidden">
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
      <section className="flex-1 flex flex-col justify-center items-center px-8 py-16">
        <RevealOnScroll animation="slideUp" delay={300}>
          <div className="max-w-2xl w-full text-center">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 animate-fadeIn whitespace-nowrap">
              TIME TO CHAT!!
            </h1>

            {/* Instructions */}
            <p
              className="text-xl md:text-2xl text-white mb-4 animate-fadeIn"
              style={{ animationDelay: "0.3s" }}
            >
              SELECT THE SERVICES YOU ARE LOOKING TO PARTNER WITH US ON.
            </p>
            <p
              className="text-lg text-white mb-12 animate-fadeIn"
              style={{ animationDelay: "0.4s" }}
            >
              YOU CAN ALWAYS SELECT MORE THAN ONE
            </p>

            {/* Service Selection Grid */}
            <div
              className="mb-12 animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              {/* First Row - 3 buttons */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                {services.slice(0, 3).map((service) => (
                  <button
                    key={service}
                    onClick={() => toggleService(service)}
                    className={`px-6 py-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm ${
                      selectedServices.includes(service)
                        ? "border-daira-orange bg-daira-orange text-black"
                        : "border-daira-orange text-white hover:bg-daira-orange hover:text-black"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
              {/* Second Row - 2 buttons centered */}
              <div className="grid grid-cols-3 gap-4">
                <div></div>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => toggleService(services[3])}
                    className={`px-6 py-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm ${
                      selectedServices.includes(services[3])
                        ? "border-daira-orange bg-daira-orange text-black"
                        : "border-daira-orange text-white hover:bg-daira-orange hover:text-black"
                    }`}
                  >
                    {services[3]}
                  </button>
                  <button
                    onClick={() => toggleService(services[4])}
                    className={`px-6 py-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm ${
                      selectedServices.includes(services[4])
                        ? "border-daira-orange bg-daira-orange text-black"
                        : "border-daira-orange text-white hover:bg-daira-orange hover:text-black"
                    }`}
                  >
                    {services[4]}
                  </button>
                </div>
                <div></div>
              </div>
            </div>

            {/* NEXT Button */}
            <button
              onClick={handleNext}
              disabled={selectedServices.length === 0}
              className={`mb-12 px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto ${
                selectedServices.length > 0
                  ? "bg-daira-orange text-white hover:bg-daira-orange-light cursor-pointer"
                  : "bg-daira-orange text-white opacity-50 cursor-not-allowed"
              }`}
            >
              NEXT
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </button>

            {/* Direct Contact Information */}
            <div
              className="text-center animate-fadeIn"
              style={{ animationDelay: "0.8s" }}
            >
              <p className="text-lg text-white mb-4">
                DON'T WANT TO FILL A FORM? JUST MESSAGE US
              </p>
              <div className="space-y-2">
                <p className="text-white text-lg">+92 325 4666640</p>
                <p className="text-white text-lg">DAIRAPK@GMAIL.COM</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-8 pt-16 pb-8">
        <div className="flex justify-between items-start mb-12">
          <div className="space-y-4">
            <a
              href="/our-work"
              className="block text-lg uppercase tracking-wide hover:text-daira-orange transition-colors"
            >
              OUR WORK
            </a>
            <a
              href="#about"
              className="block text-lg uppercase tracking-wide hover:text-daira-orange transition-colors"
            >
              ABOUT US
            </a>
            <a
              href="/contact"
              className="block text-lg uppercase tracking-wide hover:text-daira-orange transition-colors"
            >
              CONTACT US
            </a>
          </div>
          <div className="space-y-4 text-right">
            <a
              href="#"
              className="block text-lg uppercase tracking-wide hover:text-daira-orange transition-colors"
            >
              INSTAGRAM
            </a>
            <a
              href="#"
              className="block text-lg uppercase tracking-wide hover:text-daira-orange transition-colors"
            >
              FACEBOOK
            </a>
            <a
              href="#"
              className="block text-lg uppercase tracking-wide hover:text-daira-orange transition-colors"
            >
              LINKDLN
            </a>
            <a
              href="mailto:DAIRAPK@GMAIL.COM"
              className="block text-lg uppercase tracking-wide hover:text-daira-orange transition-colors"
            >
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
