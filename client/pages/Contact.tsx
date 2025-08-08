import React, { useState } from "react";
import FlipCounter from "../components/FlipCounter";
import RevealOnScroll from "../components/RevealOnScroll";
import AnimatedText from "../components/AnimatedText";
import ResponsiveHeader from "../components/ResponsiveHeader";
import { sendDirectMessageEmail, initEmailJS } from "../lib/emailjs";

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

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

  const handleDirectEmail = async () => {
    if (selectedServices.length === 0) {
      setSubmitStatus({
        success: false,
        message: "Please select at least one service before sending a direct message.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      // Initialize EmailJS
      initEmailJS();
      
      const result = await sendDirectMessageEmail(selectedServices);

      setSubmitStatus({
        success: result.success,
        message: result.success 
          ? "Direct message sent successfully! We'll get back to you soon."
          : result.message,
      });

      if (result.success) {
        setSelectedServices([]);
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to send direct message. Please try the contact form instead.",
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
                Let's Work Together
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Ready to bring your vision to life? Let's discuss your project and create something amazing together.
              </p>
            </div>
          </RevealOnScroll>
        </section>

        {/* Main Content Section */}
        <section className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
          <RevealOnScroll animation="slideUp" delay={300}>
            <div className="max-w-2xl w-full text-center">
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 animate-fadeIn whitespace-nowrap">
                TIME TO CHAT!!
              </h1>

              {/* Instructions */}
              <p
                className="text-lg sm:text-xl md:text-2xl text-white mb-4 animate-fadeIn"
                style={{ animationDelay: "0.3s" }}
              >
                SELECT THE SERVICES YOU ARE LOOKING TO PARTNER WITH US ON.
              </p>
              <p
                className="text-base sm:text-lg text-white mb-8 sm:mb-12 animate-fadeIn"
                style={{ animationDelay: "0.4s" }}
              >
                YOU CAN ALWAYS SELECT MORE THAN ONE
              </p>

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

              {/* Service Selection Grid */}
              <div
                className="mb-8 sm:mb-12 animate-fadeIn"
                style={{ animationDelay: "0.6s" }}
              >
                {/* First Row - 3 buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
                  {services.slice(0, 3).map((service) => (
                    <button
                      key={service}
                      onClick={() => toggleService(service)}
                      className={`px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm sm:text-base ${
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div></div>
                  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <button
                      onClick={() => toggleService(services[3])}
                      className={`px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm sm:text-base ${
                        selectedServices.includes(services[3])
                          ? "border-daira-orange bg-daira-orange text-black"
                          : "border-daira-orange text-white hover:bg-daira-orange hover:text-black"
                      }`}
                    >
                      {services[3]}
                    </button>
                    <button
                      onClick={() => toggleService(services[4])}
                      className={`px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm sm:text-base ${
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

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* NEXT Button */}
                <button
                  onClick={handleNext}
                  disabled={selectedServices.length === 0 || isSubmitting}
                  className={`mb-8 sm:mb-12 px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2 sm:gap-3 mx-auto ${
                    selectedServices.length > 0 && !isSubmitting
                      ? "bg-daira-orange text-white hover:bg-daira-orange-light cursor-pointer"
                      : "bg-daira-orange text-white opacity-50 cursor-not-allowed"
                  }`}
                >
                  NEXT
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </button>

                {/* Direct Contact Button */}
                <button
                  onClick={handleDirectEmail}
                  disabled={selectedServices.length === 0 || isSubmitting}
                  className={`px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2 sm:gap-3 mx-auto ${
                    selectedServices.length > 0 && !isSubmitting
                      ? "bg-daira-yellow text-black hover:bg-daira-orange cursor-pointer"
                      : "bg-daira-yellow text-black opacity-50 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? 'SENDING...' : 'DIRECT MESSAGE'}
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>

              {/* Direct Contact Information */}
              <div
                className="text-center animate-fadeIn"
                style={{ animationDelay: "0.8s" }}
              >
                <p className="text-base sm:text-lg text-white mb-4">
                  DON'T WANT TO FILL A FORM? JUST MESSAGE US
                </p>
                <div className="space-y-2">
                  <p className="text-white text-base sm:text-lg">+92 325 4666640</p>
                  <p className="text-white text-base sm:text-lg">DAIRAPK@GMAIL.COM</p>
                </div>
              </div>
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
