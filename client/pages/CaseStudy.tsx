import { useParams } from "react-router-dom";

interface CaseStudyData {
  id: string;
  title: string;
  logo: string;
  overview: {
    description: string;
    image: string;
  };
  challenge: {
    title: string;
    description: string;
    image: string;
  };
  solution: {
    title: string;
    description: string;
    image: string;
  };
  tags: string[];
}

const caseStudiesData: Record<string, CaseStudyData> = {
  "aman-care": {
    id: "aman-care",
    title: "aman care",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/4cbaf06a5c0ca2cbfed8ac6de839f3f070012c02?width=949",
    overview: {
      description:
        "Aman Care is an online mental health platform designed to make therapy more accessible, affordable, and stigma-free for people across Pakistan. With a focus on empathy, privacy, and convenience, Aman Care connects users with certified therapists through secure online sessions — providing support for everything from anxiety and stress to relationship issues and personality disorders.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5d3300b7a5140684abca2192b6274eae6974a082?width=993",
    },
    challenge: {
      title: "The Challenge",
      description:
        "In a market where mental health is still a sensitive and often ignored topic, Aman Care needed a brand identity that felt safe, calming, and approachable — while steering clear of overly clinical or cliché designs. The brand also struggled with digital engagement and lacked a visual system to build trust with potential clients on social platforms.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d9a1196fbff95c07ccae7f0dbb6fde184d5b3b5b?width=1235",
    },
    solution: {
      title: "Our Solution",
      description:
        'We created a clean, modern brand identity that balances professionalism with warmth. The logo, inspired by themes of mindfulness and calm, set the tone for a simple, inviting colour palette and typography system. We also designed a series of content templates and light-hearted reels to humanize the conversation around therapy. From their session booking confirmations to Instagram carousels, every touchpoint was crafted to feel safe, friendly, and reassuring — removing the "formal hospital" vibe often associated with mental health brands.',
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4e94b5e6b4cbd5bdf225ad9802bee9e96ec321c3?width=1340",
    },
    tags: ["Content", "Graphics", "Branding"],
  },
  "cream-stream": {
    id: "cream-stream",
    title: "cream stream",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ee99a77c116f9f88e01b6d7b15fd32b86b0c39e?width=433",
    overview: {
      description:
        "Cream Stream is a lively, youth-focused café offering a mix of shakes, fast food, and casual hangout vibes in Lahore. The brand wanted to stand out in a crowded local food scene while creating a strong identity that felt fun, modern, and approachable for their Gen Z and millennial customers.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b1b9b8388f324ba3f692bd2c3824e66ebc11f092?width=994",
    },
    challenge: {
      title: "The Challenge",
      description:
        "When we joined the project, Cream Stream didn't have a cohesive brand identity or content strategy. Their visuals lacked consistency, and they struggled to communicate the energetic, light-hearted personality they envisioned for the café. They needed a brand system and social media content that could instantly connect with their audience — while standing out visually against dozens of similar spots.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fdb8de1b46490884623f2cad3eb71596245c7e81?width=1235",
    },
    solution: {
      title: "Our Solution",
      description:
        "We built Cream Stream's complete brand identity from scratch — starting with a playful, modern logo and a colour palette designed to feel fun and appetizing. From there, we created packaging designs, in-store branding elements, and a content library of product photography, social media posts, and promotional creatives. We also developed quirky, conversation-starting post and reel concepts tailored for Instagram to help build engagement and give the caf�� a distinct personality online. The new identity gave Cream Stream a look and feel that was both consistent and memorable, helping them build a loyal local following.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bb5a6f6d801f53a55bdd947083246871714b1e5e?width=1340",
    },
    tags: ["Content", "Graphics", "Branding"],
  },
  "abu-dawood": {
    id: "abu-dawood",
    title: "abu dawood",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c37a2005334381cdb50ebf2928e8fdf20c114b4?width=810",
    overview: {
      description:
        "Abu Dawood is a premium perfume brand offering high-quality, long-lasting impressions of world-renowned fragrances, carefully crafted for the Pakistani market. Focused on luxury experiences at accessible price points, the brand needed a strong digital presence to match the quality of its products.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/03924d53b3defeb431b387e21ce3951bcceaf108?width=994",
    },
    challenge: {
      title: "The Challenge",
      description:
        "When Abu Dawood approached us, their Instagram page was inactive, their ad account wasn't performing, and their online visibility was practically non-existent. Despite having a quality product, sales were slow, engagement was minimal, and the overall brand presence lacked direction.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/27f14d92e5cd5ce8acdc6de268c62a0fd0d713aa?width=1235",
    },
    solution: {
      title: "Our Solution",
      description:
        "We immediately got to work revitalizing their online presence. Starting with a clean-up and refresh of their Instagram feed, we introduced product photography, manipulated visuals, and engaging post designs to elevate their aesthetic. Simultaneously, we audited and relaunched their ad campaigns with targeted creatives designed to stop the scroll and drive clicks. Within less than 2 weeks, Abu Dawood started receiving 2–3 orders daily through digital platforms — a significant jump from their prior zero-activity days. Alongside this, we optimized their website visuals, layout, and product pages to improve user experience and convert curiosity into sales.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/912e859f9af9662a8879429ca1af8f527fe1593f?width=1340",
    },
    tags: ["Content", "Graphics", "Digital Marketing"],
  },
  kiswa: {
    id: "kiswa",
    title: "kiswa",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9465e4de76182aeb3f1c174e8172a53be7718a8?width=796",
    overview: {
      description:
        "Kiswa Travel is a specialized travel agency dedicated to offering seamless and spiritually fulfilling Umrah packages for families and individuals across Pakistan. Focused on affordability, reliability, and sincere customer care, Kiswa Travel aimed to position itself as a trustworthy, faith-driven service provider in a highly competitive niche.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ee49f08fed49010036e24f04ad1859598ec0a0a9?width=994",
    },
    challenge: {
      title: "The Challenge",
      description:
        "When Kiswa approached us, they lacked a defined brand identity and visual system that reflected the spiritual and respectful nature of their services. Their social media presence felt generic and didn't evoke the emotional connection essential for religious travel services. They needed a distinct, warm, and professional identity — paired with content that could build trust and resonate with their target audience.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/27b8a21df316e339f19dd23f4fccf3e35840677d?width=1235",
    },
    solution: {
      title: "Our Solution",
      description:
        "We developed a brand identity for Kiswa that balances modern aesthetics with subtle traditional cues. The logo, colour palette, and typography were chosen to reflect calm, trust, and reverence, while remaining clean and contemporary. Alongside this, we designed a range of social media posts and templates tailored for their audience — focusing on Umrah tips, package announcements, spiritual reflections, and customer testimonials. The new branding helped position Kiswa as a caring, reliable travel companion, while the fresh content began building steady engagement and inquiries.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a4b40666fcdf76ff1e29603f4d6c5d06b0891131?width=1340",
    },
    tags: ["Graphics", "Branding"],
  },
  electrech: {
    id: "electrech",
    title: "electrech",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5e33348572a6c77cc9fa38a750bd87f9c83f381?width=994",
    overview: {
      description:
        "Electrech Private Limited is an established electrical power solutions company providing smart power systems since 1994. Based in Township Block 5, Lahore, Pakistan, they specialize in industrial electrical installations, power distribution systems, and comprehensive electrical solutions for commercial and industrial clients across Pakistan.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c5e33348572a6c77cc9fa38a750bd87f9c83f381?width=994",
    },
    challenge: {
      title: "The Challenge",
      description:
        "Electrech needed to modernize their brand identity while maintaining their reputation as a trusted industrial partner. With nearly three decades in business, they required a contemporary digital presence that would appeal to both traditional industrial clients and younger facility managers looking for smart building solutions.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ce6852fa6c5289c34d3859c9958aef84c97026c2?width=1235",
    },
    solution: {
      title: "Our Solution",
      description:
        "We developed a professional, technology-focused brand identity that balances Electrech's industrial heritage with modern innovation. The design includes a comprehensive product catalog system, location-based services integration, and professional marketing materials that communicate both reliability and cutting-edge electrical solutions. We also created a complete product showcase featuring their electrical equipment range, team profiles, and integrated mapping solutions for their Lahore operations.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/74566755d4f9360d8138c478d02d90b905542c53?width=1340",
    },
    tags: ["Content", "Graphics", "Branding"],
  },
};

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !caseStudiesData[slug]) {
    return (
      <div className="min-h-screen bg-daira-dark text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <a href="/our-work" className="text-daira-orange hover:underline">
            Back to Our Work
          </a>
        </div>
      </div>
    );
  }

  const caseStudy = caseStudiesData[slug];

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
      <main>
        {/* Hero Section */}
        {caseStudy.id === "electrech" ? (
          <div className="px-24 pt-16 pb-32">
            <div className="grid grid-cols-2 gap-16">
              {/* Left side - Industrial building design */}
              <div className="flex flex-col space-y-8">
                <div className="w-80 h-96 bg-gray-900 rounded-xl p-8 relative overflow-hidden">
                  {/* Building silhouette */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {/* Building blocks representation */}
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="w-full h-8 border border-gray-400"
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-4 right-4">
                    <h3 className="text-white text-lg font-bold mb-2">
                      Smart Power Solutions
                    </h3>
                    <div className="text-blue-400 text-2xl font-bold">
                      Since 1994
                    </div>
                    <p className="text-gray-400 text-xs mt-2">
                      From industrial plants to corporate complexes, our smart
                      power systems have been built into Pakistan's
                      infrastructure since 1994.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Logo with lightning bolts */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <svg
                    className="w-64 h-48 text-white absolute inset-0 opacity-20"
                    viewBox="0 0 262 190"
                    fill="currentColor"
                  >
                    <path d="M0.623047 14.3947C0.623047 3.33236 6.48968 0.671193 9.42299 0.723405L170.502 2.31038L166.145 4.5612L53.1048 62.9689L174.348 62.1947L54.4225 125.061L176.051 126.3L54.4225 189.189H0.623047V14.3947Z" />
                    <path d="M261.377 14.3947C261.377 3.33236 255.51 0.671193 252.577 0.723405L195.519 2.0777L91.4984 55.3695L210.576 56.128L91.4984 120.062H207.578L78.4788 189.189H207.578H261.377V14.3947Z" />
                  </svg>
                  <div className="relative z-10 text-center">
                    <h2 className="text-4xl font-bold text-white mb-2">
                      ELECTRECH
                    </h2>
                    <p className="text-gray-400">Private Limited</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : caseStudy.id === "kiswa" ? (
          <div className="px-24 pt-16 pb-32">
            <div className="grid grid-cols-2 gap-16">
              {/* Left side - Travel poster from Figma */}
              <div className="flex justify-start">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee49f08fed49010036e24f04ad1859598ec0a0a9?width=994"
                  alt="Last Ashura In Madina travel poster"
                  className="w-80 h-auto rounded-xl object-contain"
                />
              </div>

              {/* Right side - Logo positioned centrally */}
              <div className="flex items-center justify-center">
                <img
                  src={caseStudy.logo}
                  alt={`${caseStudy.title} logo`}
                  className="h-32 object-contain"
                />
              </div>
            </div>
          </div>
        ) : caseStudy.id === "cream-stream" ? (
          <div className="px-24 pt-16 pb-32">
            <div className="grid grid-cols-2 gap-16">
              {/* Left side - Bubble drink card */}
              <div className="flex justify-start">
                <div className="w-80 h-96 rounded-xl overflow-hidden relative">
                  {/* Left orange section with drink */}
                  <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-b from-orange-400 to-red-600 flex items-center justify-center">
                    <div className="text-white font-bold text-xs transform -rotate-12">
                      <div className="bg-orange-700 px-2 py-1 rounded">
                        CREAM
                      </div>
                      <div className="bg-orange-700 px-2 py-1 rounded mt-1">
                        STREAM
                      </div>
                    </div>
                  </div>
                  {/* Right blue section with text */}
                  <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-b from-cyan-200 to-blue-300 flex items-center justify-center">
                    <div className="text-orange-500 font-bold text-xl leading-tight">
                      Bubble
                      <br />
                      Drink
                      <br />
                      <span className="text-sm text-gray-600">
                        FRESH & TASTY
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Mascot and logo positioned like Figma */}
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e915415b9179f201eeb3f05ba5f5fde5280d2933?width=275"
                    alt="Cream Stream mascot bear"
                    className="w-20 h-24 object-contain"
                  />
                  <img
                    src={caseStudy.logo}
                    alt={`${caseStudy.title} logo`}
                    className="h-20 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : caseStudy.id === "abu-dawood" ? (
          <div className="px-24 pt-16 pb-32">
            <div className="grid grid-cols-2 gap-16">
              {/* Left side - Red square with perfume bottle */}
              <div className="flex flex-col space-y-8">
                <div className="w-64 h-80 bg-gradient-to-br from-red-800 to-red-900 rounded-xl flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03924d53b3defeb431b387e21ce3951bcceaf108?width=994"
                    alt="Abu Dawood perfume bottle"
                    className="w-32 h-48 object-contain"
                  />
                </div>
                {/* Large perfume bottle image */}
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/03924d53b3defeb431b387e21ce3951bcceaf108?width=994"
                  alt="Abu Dawood Artemis perfume"
                  className="w-full max-w-md h-auto rounded-lg"
                />
              </div>

              {/* Right side - Arabic logo centered */}
              <div className="flex items-center justify-center">
                <img
                  src={caseStudy.logo}
                  alt={`${caseStudy.title} logo`}
                  className="h-40 object-contain"
                />
              </div>
            </div>
          </div>
        ) : (
          /* Default hero for other case studies */
          <div className="relative flex justify-center pt-20 pb-32">
            <div className="absolute left-24 top-20">
              <div className="w-96 h-96 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center">
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                  <div className="w-20 h-16 bg-purple-400 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-96 left-1/2 transform -translate-x-1/2 mt-32">
              <img
                src={caseStudy.logo}
                alt={`${caseStudy.title} logo`}
                className="h-16 object-contain"
              />
            </div>
          </div>
        )}

        {/* Project Overview Section */}
        <section className="px-24 pb-32">
          <div className="grid grid-cols-2 gap-16">
            {/* Left side - Text */}
            <div className="pt-8">
              <h2 className="text-4xl font-bold text-white mb-8">
                Project Overview
              </h2>
              <p className="text-white text-xl leading-relaxed max-w-lg">
                {caseStudy.overview.description}
              </p>
            </div>
            {/* Right side - Image */}
            <div className="flex justify-start">
              <img
                src={caseStudy.overview.image}
                alt={`${caseStudy.title} overview`}
                className="w-96 h-96 rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="px-24 pb-32">
          <div className="grid grid-cols-2 gap-16">
            {/* Left side - Large Image */}
            <div>
              <img
                src={caseStudy.challenge.image}
                alt={`${caseStudy.title} challenge`}
                className="w-full h-auto max-w-2xl rounded-lg"
              />
            </div>
            {/* Right side - Text aligned right */}
            <div className="flex flex-col justify-center pl-8">
              <h2 className="text-4xl font-bold text-white mb-8 text-right">
                {caseStudy.challenge.title}
              </h2>
              <p className="text-white text-xl leading-relaxed text-right max-w-lg ml-auto">
                {caseStudy.challenge.description}
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="px-24 pb-32">
          <div className="grid grid-cols-2 gap-16">
            {/* Left side - Text */}
            <div className="pt-8">
              <h2 className="text-4xl font-bold text-white mb-8">
                {caseStudy.solution.title}
              </h2>
              <p className="text-white text-xl leading-relaxed max-w-lg">
                {caseStudy.solution.description}
              </p>
            </div>
            {/* Right side - Large Image */}
            <div>
              <img
                src={caseStudy.solution.image}
                alt={`${caseStudy.title} solution`}
                className="w-full h-auto max-w-2xl rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Tags */}
        <section className="text-center mb-16">
          <div className="flex justify-center gap-4 flex-wrap">
            {caseStudy.tags.map((tag, index) => (
              <span
                key={index}
                className="px-6 py-2 border border-white rounded-full text-white text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Back to Our Work */}
        <div className="text-center">
          <a
            href="/our-work"
            className="inline-flex items-center text-daira-orange hover:text-white transition-colors text-lg"
          >
            ← Back to Our Work
          </a>
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
