import React, { useState, useEffect } from "react";
import FlipCounter from "../components/FlipCounter";
import RevealOnScroll from "../components/RevealOnScroll";
import AnimatedText from "../components/AnimatedText";
import ResponsiveHeader from "../components/ResponsiveHeader";
import { sendContactFormEmail, initEmailJS } from "../lib/emailjs";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    project: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  useEffect(() => {
    // Initialize EmailJS
    initEmailJS();
    
    // Get selected services from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const servicesParam = urlParams.get("services");
    if (servicesParam) {
      setSelectedServices(servicesParam.split(","));
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const result = await sendContactFormEmail({
        ...formData,
        selectedServices,
      });

      setSubmitStatus({
        success: result.success,
        message: result.message,
      });

      if (result.success) {
        // Reset form on success
        setFormData({
          name: "",
          company: "",
          email: "",
          project: "",
        });
        setSelectedServices([]);
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-daira-dark text-white overflow-x-hidden">
      {/* Header */}
      <ResponsiveHeader />
      
      {/* Main Content */}
      <div className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
          <RevealOnScroll animation="slideUp">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
                Contact Form
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Tell us more about your project and we'll get back to you soon.
              </p>
            </div>
          </RevealOnScroll>
        </section>

        {/* Contact Form Section */}
        <section className="flex-1 flex flex-col justify-center items-center px-8 py-16">
          <RevealOnScroll animation="slideUp" delay={300}>
            <div className="max-w-2xl w-full text-center">
              {/* Main Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 animate-fadeIn whitespace-nowrap">
                TIME TO CHAT!!
              </h1>

              {/* Sub-headline */}
              <p
                className="text-xl md:text-2xl text-white mb-16 animate-fadeIn"
                style={{ animationDelay: "0.3s" }}
              >
                TELL US ABOUT YOURSELF
              </p>

              {/* Selected Services Display */}
              {selectedServices.length > 0 && (
                <div
                  className="mb-8 animate-fadeIn"
                  style={{ animationDelay: "0.4s" }}
                >
                  <p className="text-white text-lg mb-4">SELECTED SERVICES:</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {selectedServices.map((service) => (
                      <span
                        key={service}
                        className="px-4 py-2 bg-daira-orange text-black rounded-lg text-sm font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Submit Status Message */}
              {submitStatus.message && (
                <div
                  className={`mb-8 p-4 rounded-lg ${
                    submitStatus.success
                      ? "bg-green-500/20 border border-green-500 text-green-400"
                      : "bg-red-500/20 border border-red-500 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-8 animate-fadeIn"
                style={{ animationDelay: "0.6s" }}
              >
                {/* Name Field */}
                <div className="text-left">
                  <label className="block text-white text-lg mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b-2 border-white text-white text-lg py-2 focus:outline-none focus:border-daira-orange transition-colors"
                    placeholder=""
                  />
                </div>

                {/* Company Field */}
                <div className="text-left">
                  <label className="block text-white text-lg mb-2">
                    COMPANY NAME
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
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
                    required
                    className="w-full bg-transparent border-b-2 border-white text-white text-lg py-2 focus:outline-none focus:border-daira-orange transition-colors"
                    placeholder=""
                  />
                </div>

                {/* Project Description Field */}
                <div className="text-left">
                  <label className="block text-white text-lg mb-2">
                    BRIEFLY TELL US ABOUT YOUR PROJECT
                  </label>
                  <textarea
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white text-white text-lg py-2 focus:outline-none focus:border-daira-orange transition-colors resize-none"
                    placeholder=""
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-daira-orange hover:bg-daira-orange-light transition-colors px-12 py-4 rounded-full text-black font-bold text-xl hover-lift hover-glow ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </div>
              </form>
            </div>
          </RevealOnScroll>
        </section>
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
