import React, { useState, useEffect } from "react";
import FlipCounter from "../components/FlipCounter";
import RevealOnScroll from "../components/RevealOnScroll";
import AnimatedText from "../components/AnimatedText";

export default function ContactForm() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    project: ""
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    // Get selected services from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const servicesParam = urlParams.get('services');
    if (servicesParam) {
      setSelectedServices(servicesParam.split(','));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { ...formData, selectedServices });
  };

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
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="flex-1 flex flex-col justify-center items-center px-8 py-16">
        <RevealOnScroll animation="slideUp" delay={300}>
          <div className="max-w-2xl w-full text-center">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 animate-fadeIn whitespace-nowrap">
              TIME TO CHAT!!
            </h1>
            
            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-white mb-16 animate-fadeIn" style={{animationDelay: '0.3s'}}>
              TELL US ABOUT YOURSELF
            </p>

            {/* Selected Services Display */}
            {selectedServices.length > 0 && (
              <div className="mb-8 animate-fadeIn" style={{animationDelay: '0.4s'}}>
                <p className="text-white text-lg mb-4">SELECTED SERVICES:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {selectedServices.map((service) => (
                    <span key={service} className="px-4 py-2 bg-daira-orange text-black rounded-lg text-sm font-medium">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-8 animate-fadeIn" style={{animationDelay: '0.6s'}}>
              {/* Name Field */}
              <div className="text-left">
                <label className="block text-white text-lg mb-2">YOUR NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-white text-white text-lg py-2 focus:outline-none focus:border-daira-orange transition-colors"
                  placeholder=""
                />
              </div>

              {/* Company Field */}
              <div className="text-left">
                <label className="block text-white text-lg mb-2">COMPANY NAME</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-white text-white text-lg py-2 focus:outline-none focus:border-daira-orange transition-colors"
                  placeholder=""
                />
              </div>

              {/* Email Field */}
              <div className="text-left">
                <label className="block text-white text-lg mb-2">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-white text-white text-lg py-2 focus:outline-none focus:border-daira-orange transition-colors"
                  placeholder=""
                />
              </div>

              {/* Project Description Field */}
              <div className="text-left">
                <label className="block text-white text-lg mb-2">BRIEFLY TELL US ABOUT YOUR PROJECT</label>
                <textarea
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-white text-white text-lg py-2 focus:outline-none focus:border-daira-orange transition-colors resize-none"
                  placeholder=""
                />
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  className="bg-daira-orange hover:bg-daira-orange-light transition-colors px-12 py-4 rounded-full text-black font-bold text-xl hover-lift hover-glow"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </RevealOnScroll>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-8 pt-16 pb-8">
        <div className="flex justify-between items-start mb-12">
          <div className="space-y-4">
            <a href="/our-work" className="block text-lg uppercase tracking-wide hover:text-daira-orange transition-colors">OUR WORK</a>
            <a href="#about" className="block text-lg uppercase tracking-wide hover:text-daira-orange transition-colors">ABOUT US</a>
            <a href="/contact" className="block text-lg uppercase tracking-wide hover:text-daira-orange transition-colors">CONTACT US</a>
          </div>
          <div className="space-y-4 text-right">
            <a href="#" className="block text-lg uppercase tracking-wide hover:text-daira-orange transition-colors">INSTAGRAM</a>
            <a href="#" className="block text-lg uppercase tracking-wide hover:text-daira-orange transition-colors">FACEBOOK</a>
            <a href="#" className="block text-lg uppercase tracking-wide hover:text-daira-orange transition-colors">LINKDLN</a>
            <a href="mailto:DAIRAPK@GMAIL.COM" className="block text-lg uppercase tracking-wide hover:text-daira-orange transition-colors">EMAIL</a>
          </div>
        </div>
        <div className="w-full mt-4">
          <h2 className="text-7xl md:text-8xl font-black uppercase text-white text-left">LET'S WORK TOGETHER</h2>
        </div>
      </footer>
    </div>
  );
} 