export interface CaseStudyData {
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

export const caseStudiesData: Record<string, CaseStudyData> = {
  "aman-care": {
    id: "aman-care",
    title: "aman care",
    logo: "/amancare.png",
    overview: {
      description:
        "Aman Care is an online mental health platform designed to make therapy more accessible, affordable, and stigma-free for people across Pakistan. With a focus on empathy, privacy, and convenience, Aman Care connects users with certified therapists through secure online sessions — providing support for everything from anxiety and stress to relationship issues and personality disorders.",
      image: "/profile picture 1.png",
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
        "We built Cream Stream's complete brand identity from scratch — starting with a playful, modern logo and a colour palette designed to feel fun and appetizing. From there, we created packaging designs, in-store branding elements, and a content library of product photography, social media posts, and promotional creatives. We also developed quirky, conversation-starting post and reel concepts tailored for Instagram to help build engagement and give the café a distinct personality online. The new identity gave Cream Stream a look and feel that was both consistent and memorable, helping them build a loyal local following.",
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
  "kiswa": {
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
  "electrech": {
    id: "electrech",
    title: "electrech",
    logo: "/logo electrec.png",
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

// Helper function to get all case study IDs
export const getAllCaseStudyIds = (): string[] => {
  return Object.keys(caseStudiesData);
};

// Helper function to get a specific case study by ID
export const getCaseStudyById = (id: string): CaseStudyData | null => {
  return caseStudiesData[id] || null;
};

// Helper function to get all case studies
export const getAllCaseStudies = (): CaseStudyData[] => {
  return Object.values(caseStudiesData);
}; 