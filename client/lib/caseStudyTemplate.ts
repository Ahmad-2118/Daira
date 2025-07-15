// Template for adding a new case study
// Copy this structure and replace the placeholder values

export const newCaseStudyTemplate = {
  id: "new-case-study-id", // Use kebab-case, no spaces
  title: "New Case Study Title", // Display name
  logo: "https://your-logo-url.com/logo.png", // Client logo URL
  overview: {
    description: "A comprehensive description of the project, client, and objectives. This should be 2-3 sentences explaining what the project was about and what the client wanted to achieve.",
    image: "https://your-overview-image-url.com/overview.jpg", // Hero/overview image
  },
  challenge: {
    title: "The Challenge", // Usually "The Challenge"
    description: "Detailed explanation of the challenges the client faced before working with you. This should be 2-3 sentences describing the problems, pain points, or obstacles that needed to be overcome.",
    image: "https://your-challenge-image-url.com/challenge.jpg", // Challenge section image
  },
  solution: {
    title: "Our Solution", // Usually "Our Solution"
    description: "Comprehensive explanation of how you solved the client's problems. This should be 3-4 sentences describing your approach, the work you did, and the results achieved. Include specific details about branding, content, graphics, or digital marketing work.",
    image: "https://your-solution-image-url.com/solution.jpg", // Solution section image
  },
  tags: ["Content", "Graphics", "Branding"], // Choose from: Content, Graphics, Branding, Digital Marketing
};

// Example of how to add to caseStudiesData:
/*
"new-case-study-id": {
  id: "new-case-study-id",
  title: "New Case Study Title",
  logo: "https://your-logo-url.com/logo.png",
  overview: {
    description: "A comprehensive description of the project...",
    image: "https://your-overview-image-url.com/overview.jpg",
  },
  challenge: {
    title: "The Challenge",
    description: "Detailed explanation of the challenges...",
    image: "https://your-challenge-image-url.com/challenge.jpg",
  },
  solution: {
    title: "Our Solution",
    description: "Comprehensive explanation of how you solved...",
    image: "https://your-solution-image-url.com/solution.jpg",
  },
  tags: ["Content", "Graphics", "Branding"],
},
*/ 