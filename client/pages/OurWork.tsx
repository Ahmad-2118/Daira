export default function OurWork() {
  return (
    <div className="min-h-screen bg-daira-dark text-white">
      {/* Header */}
      <header className="relative z-50 flex items-center justify-between px-8 py-6 bg-daira-dark">
        <div className="flex items-center">
          <div className="w-8 h-8 mr-4">
            <svg viewBox="0 0 29 29" className="w-full h-full fill-white">
              <path d="M14.5 0L29 14.5L14.5 29L0 14.5L14.5 0Z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <span className="text-white text-2xl font-normal">
            bold-thinking{" "}
          </span>
          <span className="text-daira-orange text-2xl font-normal font-serif italic">
            branding
          </span>
          <span className="text-white text-2xl font-normal"> agency</span>
        </div>

        <div className="flex items-center space-x-8">
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
            <div className="flex space-x-2">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
            <div className="flex space-x-2">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </div>
          <span className="text-white text-xl">Menu</span>
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
          {/* Row 1 - Aman Care & Cream Stream */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Aman Care */}
            <a
              href="/case-study/aman-care"
              className="relative bg-daira-dark border-2 border-white rounded-lg overflow-hidden h-96 block group transition-transform hover:scale-105"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/db32b218fb8968599b9f6d991d3bbec6a29abb73?width=1065"
                alt="Aman Care project"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-semibold text-white mb-4 group-hover:text-daira-orange transition-colors">
                  Aman Care
                </h3>
                <div className="flex gap-3">
                  <span className="px-4 py-1.5 border border-white rounded-full text-white text-sm">
                    Content
                  </span>
                  <span className="px-4 py-1.5 border border-white rounded-full text-white text-sm">
                    Graphics
                  </span>
                  <span className="px-4 py-1.5 border border-white rounded-full text-white text-sm">
                    Branding
                  </span>
                </div>
              </div>
            </a>

            {/* Cream Stream */}
            <a
              href="/case-study/cream-stream"
              className="relative bg-daira-dark border-2 border-white rounded-lg overflow-hidden h-96 block group transition-transform hover:scale-105"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/741e70a2a12ebe57a749cd85f1642bb2febff342?width=591"
                alt="Cream Stream project"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-semibold text-white mb-4 group-hover:text-daira-orange transition-colors">
                  Cream Stream
                </h3>
                <div className="flex gap-3">
                  <span className="px-4 py-1.5 border border-white rounded-full text-white text-sm">
                    Content
                  </span>
                  <span className="px-4 py-1.5 border border-white rounded-full text-white text-sm">
                    Graphics
                  </span>
                  <span className="px-4 py-1.5 border border-white rounded-full text-white text-sm">
                    Branding
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Row 2 - Abu Dawood & Kiswa */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Abu Dawood */}
            <a
              href="/case-study/abu-dawood"
              className="relative bg-daira-dark border-2 border-white rounded-lg overflow-hidden h-96 block group transition-transform hover:scale-105"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c68791bf195c2a1c0bd20665b75383269f6675e?width=627"
                alt="Abu Dawood project"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-semibold text-white mb-4 group-hover:text-daira-orange transition-colors">
                  Abu Dawood
                </h3>
                <div className="flex gap-3">
                  <span className="px-4 py-1.5 border border-white rounded-full text-white text-sm">
                    Content
                  </span>
                  <span className="px-4 py-1.5 border border-white rounded-full text-white text-sm">
                    Graphics
                  </span>
                </div>
              </div>
            </a>

            {/* Kiswa */}
            <a
              href="/case-study/kiswa"
              className="relative bg-daira-dark border border-white rounded-lg overflow-hidden h-96 block group transition-transform hover:scale-105"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2702eb52a82f0523cb6f187f43cf6096c307a237?width=723"
                alt="Kiswa project"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-semibold text-white mb-4 group-hover:text-daira-orange transition-colors">
                  Kiswa
                </h3>
                <div className="flex gap-3">
                  <span className="px-4 py-1.5 border border-white rounded-full text-white text-sm">
                    Graphics
                  </span>
                  <span className="px-4 py-1.5 border border-white rounded-full text-white text-sm">
                    Branding
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Row 3 - Electrech */}
          <div className="grid lg:grid-cols-2 gap-8">
            <a
              href="/case-study/electrech"
              className="relative bg-daira-dark border border-white rounded-lg overflow-hidden h-96 block group transition-transform hover:scale-105"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9a465244267f5954ab8ea414b16cdd5d18dddf3?width=514"
                alt="Electrech project"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-semibold text-white mb-4 group-hover:text-daira-orange transition-colors">
                  Electrech
                </h3>
                <div className="flex gap-3">
                  <span className="px-4 py-1.5 border border-white rounded-full text-white text-sm">
                    Content
                  </span>
                  <span className="px-4 py-1.5 border border-white rounded-full text-white text-sm">
                    Graphics
                  </span>
                  <span className="px-4 py-1.5 border border-white rounded-full text-white text-sm">
                    Branding
                  </span>
                </div>
              </div>
            </a>
            {/* Empty space for grid balance */}
            <div></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-daira-dark text-white px-8 py-16 mt-32">
        <div className="text-center mb-16">
          <h2 className="text-8xl font-black uppercase mb-4">
            Let's Work Together
          </h2>
        </div>

        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <a
              href="/"
              className="block text-2xl uppercase hover:text-daira-orange transition-colors"
            >
              Our work
            </a>
            <a
              href="#"
              className="block text-2xl uppercase hover:text-daira-orange transition-colors"
            >
              About us
            </a>
            <a
              href="#"
              className="block text-2xl uppercase hover:text-daira-orange transition-colors"
            >
              Contact us
            </a>
          </div>

          <div className="space-y-4 text-right">
            <a
              href="#"
              className="block text-xl uppercase hover:text-daira-orange transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="block text-xl uppercase hover:text-daira-orange transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="block text-xl uppercase hover:text-daira-orange transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="block text-xl uppercase hover:text-daira-orange transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
