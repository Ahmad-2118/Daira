export default function Index() {
  return (
    <div className="min-h-screen bg-daira-dark text-white overflow-x-hidden">
      {/* Header */}
      <header className="relative z-50 flex items-center justify-between px-8 h-[50px] my-[10px] bg-daira-dark">
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
          <span className="text-daira-orange text-2xl font-normal flex items-center mt-2" style={{ fontFamily: "'Aguafina Script', cursive" }}>
            branding
          </span>
          <span className="text-white text-2xl font-normal flex items-center">
            agency
          </span>
        </div>

        <button className="bg-daira-orange-light hover:bg-daira-orange transition-colors px-8 py-3 rounded-xl text-black font-bold text-xl">
          Contact us
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[634px] mx-8 mt-4 rounded-lg overflow-hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/790a3264ab2d3856b10e60f5a2ad24b54f307934?width=2764"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Large Daira Text Overlay */}
          <div className="absolute bottom-16 left-0 right-0 px-8">
            <svg
              viewBox="0 0 1384 429"
              className="w-full max-w-6xl mx-auto h-auto fill-daira-yellow"
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
        </div>

        {/* Taglines */}
        <div className="flex justify-between px-8 mt-4 text-sm uppercase tracking-wide text-daira-orange">
          <span>your story deserves better</span>
          <span>Your Ideas, In Full Orbit</span>
          <span>Living in the details</span>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="px-8 mt-16">
        <div className="flex items-center justify-between mb-8">
          <a
            href="/our-work"
            className="text-8xl font-normal hover:text-daira-orange transition-colors"
          >
            Our Work
          </a>
          <div className="w-16 h-16 flex items-center justify-center">
            <svg
              className="w-12 h-12 stroke-white stroke-2 transform rotate-45"
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
          {/* Aman Care Project */}
          <div className="relative">
            {/* Wall Background with Image */}
            <div 
              className="rounded-xl relative h-[781.46px] bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/2a47fd68fc66712cd20c44dd97144b071d02e8f0?width=2537)',
                backgroundColor: '#B8C6DB'
              }}
            >
              {/* Posters Container - Absolute positioning to overlay background image */}
              <div className="absolute inset-0 flex justify-between px-8 pt-8">
                {/* Left Poster */}
                <div className="bg-white rounded-2xl overflow-hidden w-[294px] h-[454px] shadow-xl relative" style={{ border: '1px solid rgba(0,0,0,0.1)' }}>
                  <div className="p-8 h-full relative">
                    <h2 className="text-[#A5B4FF] text-5xl font-bold leading-tight">
                      STEP<br />INTO<br />A NEW<br />LIFE
                    </h2>
                  </div>
                </div>

                {/* Center Logo */}
                <div className="bg-black rounded-2xl flex items-center justify-center w-[294px] h-[454px] shadow-xl">
                  <img
                    src="/aman-care-logo.png"
                    alt="Aman Care"
                    className="w-1/2 h-auto"
                  />
                </div>

                {/* Right Poster */}
                <div className="bg-white rounded-2xl overflow-hidden w-[294px] h-[454px] shadow-xl relative" style={{ border: '1px solid rgba(0,0,0,0.1)' }}>
                  <div className="p-8 h-full relative">
                    <h2 className="text-[#A5B4FF] text-5xl font-bold leading-tight">
                      HAPPY<br />LIFE<br />AWAITS<br />YOU
                    </h2>
                  </div>
                </div>
              </div>

              {/* Grass Container */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3">
                <div className="h-16 bg-[#2A5E1C] rounded-t-lg"></div>
                <div className="h-4 bg-gray-300"></div>
              </div>
            </div>

            {/* Project Info */}
            <div className="mt-6 flex justify-between items-center px-4">
              <h3 className="text-white text-3xl font-bold">Aman Care</h3>
              <div className="flex gap-4">
                <span className="px-6 py-2 border-2 border-daira-orange rounded-full text-daira-orange text-sm hover:bg-daira-orange hover:text-black transition-colors duration-300">
                  Content
                </span>
                <span className="px-6 py-2 border-2 border-daira-orange rounded-full text-daira-orange text-sm hover:bg-daira-orange hover:text-black transition-colors duration-300">
                  Graphics
                </span>
                <span className="px-6 py-2 border-2 border-daira-orange rounded-full text-daira-orange text-sm hover:bg-daira-orange hover:text-black transition-colors duration-300">
                  Branding
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Do Section */}
      <section className="px-8 mt-32">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h2 className="text-7xl font-semibold">We do a lot</h2>
            <button className="bg-daira-yellow hover:bg-daira-orange transition-colors px-8 py-4 rounded-full text-black font-bold text-lg flex items-center gap-2">
              Contact us
              <svg
                className="w-6 h-6 transform rotate-45"
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
          <h2 className="text-7xl font-semibold">We do it well</h2>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-daira-orange mt-16 py-16">
        <div className="px-8">
          <div className="space-y-8">
            <div className="flex justify-between items-center border-b-2 border-black pb-8">
              <h3 className="text-8xl font-black text-black">Branding</h3>
              <div className="max-w-lg">
                <p className="text-black text-xl leading-relaxed">
                  We identify and unlock your brand's potential to create a
                  unique identity that distinguishes and powerfully positions it
                  within its ecosystem. Every aspect is designed to reflect your
                  culture, connect with your audience, and tell your story.
                </p>
                <div className="mt-8 space-y-4 text-right">
                  <div className="border-b border-black pb-2">
                    <span className="text-black font-bold text-xl">
                      Strategy & Discovery Session
                    </span>
                  </div>
                  <div className="border-b border-black pb-2">
                    <span className="text-black font-bold text-xl">
                      Logo Design
                    </span>
                  </div>
                  <div className="border-b border-black pb-2">
                    <span className="text-black font-bold text-xl">
                      Colour Palette & Typography Selection
                    </span>
                  </div>
                  <div className="border-b border-black pb-2">
                    <span className="text-black font-bold text-xl">
                      Brand Mockups
                    </span>
                  </div>
                  <div className="border-b border-black pb-2">
                    <span className="text-black font-bold text-xl">
                      Logo Animation
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b-2 border-black pb-8">
              <h3 className="text-8xl font-black text-black">Product Shoot</h3>
            </div>

            <div className="border-b-2 border-black pb-8">
              <h3 className="text-8xl font-black text-black">
                Content Creation
              </h3>
            </div>

            <div className="border-b-2 border-black pb-8">
              <h3 className="text-8xl font-black text-black">Ad Creatives</h3>
            </div>

            <div className="pb-8">
              <h3 className="text-8xl font-black text-black">Websites</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* First Row */}
          <div className="bg-daira-cyan rounded-2xl p-12 relative">
            <blockquote className="text-4xl font-bold text-black uppercase leading-tight">
              "Our sales were dead. Daira revived our Insta and got orders
              rolling in within two weeks!"
            </blockquote>
            <div className="mt-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-8 h-8"
                      viewBox="0 0 93 76"
                      fill="none"
                    >
                      <path
                        d="M34.3125 0.25L41.8778 23.5336H66.3596L46.5534 37.9236L54.1187 61.2072L34.3125 46.8171L14.5063 61.2072L22.0716 37.9236L2.26542 23.5336H26.7472L34.3125 0.25Z"
                        fill="black"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <h4 className="text-2xl font-medium text-black uppercase">
                Huzaifa Jabran
              </h4>
              <p className="text-lg text-black uppercase">CEO, Abdudawood</p>
            </div>
          </div>

          <div className="bg-daira-green rounded-2xl p-12 relative">
            <blockquote className="text-4xl font-bold text-black uppercase leading-tight">
              "Daira captured our vision perfectly — modern, empathetic, and
              clean. Loved the brand identity!"
            </blockquote>
            <div className="mt-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-8 h-8"
                      viewBox="0 0 93 76"
                      fill="none"
                    >
                      <path
                        d="M34.3125 0.25L41.8778 23.5336H66.3596L46.5534 37.9236L54.1187 61.2072L34.3125 46.8171L14.5063 61.2072L22.0716 37.9236L2.26542 23.5336H26.7472L34.3125 0.25Z"
                        fill="black"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <h4 className="text-2xl font-medium text-black uppercase">
                Ammaz
              </h4>
              <p className="text-lg text-black uppercase">Founder, Aman Care</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="bg-daira-yellow rounded-2xl p-12 relative">
            <blockquote className="text-4xl font-bold text-black uppercase leading-tight">
              "Fun, bold, and quirky — exactly what we needed. Our café finally
              feels like a brand."
            </blockquote>
            <div className="mt-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-8 h-8"
                      viewBox="0 0 93 76"
                      fill="none"
                    >
                      <path
                        d="M34.3125 0.25L41.8778 23.5336H66.3596L46.5534 37.9236L54.1187 61.2072L34.3125 46.8171L14.5063 61.2072L22.0716 37.9236L2.26542 23.5336H26.7472L34.3125 0.25Z"
                        fill="black"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <h4 className="text-2xl font-medium text-black uppercase">
                Tariq Mahmood
              </h4>
              <p className="text-lg text-black uppercase">CEO, Creamstream</p>
            </div>
          </div>

          <div className="bg-daira-purple rounded-2xl p-12 relative">
            <blockquote className="text-4xl font-bold text-black uppercase leading-tight">
              They gave us a fresh, modern identity without losing the spiritual
              touch. Beautiful work
            </blockquote>
            <div className="mt-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-8 h-8"
                      viewBox="0 0 93 76"
                      fill="none"
                    >
                      <path
                        d="M34.3125 0.25L41.8778 23.5336H66.3596L46.5534 37.9236L54.1187 61.2072L34.3125 46.8171L14.5063 61.2072L22.0716 37.9236L2.26542 23.5336H26.7472L34.3125 0.25Z"
                        fill="black"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <h4 className="text-2xl font-medium text-black uppercase">
                M. Abdullah
              </h4>
              <p className="text-lg text-black uppercase">CEO, Kiswa Travels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-daira-dark text-white px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-8xl font-black uppercase mb-4">
            Let's Work Together
          </h2>
        </div>

        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <a
              href="/our-work"
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
