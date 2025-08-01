# Case Studies Data Management

This directory contains the data structure for case studies used throughout the application.

## Files

- `caseStudiesData.ts` - Contains all case study data, interfaces, and helper functions

## How to Add a New Case Study

1. Open `caseStudiesData.ts`
2. Add a new entry to the `caseStudiesData` object with the following structure:

```typescript
"your-case-study-id": {
  id: "your-case-study-id",
  title: "Your Case Study Title",
  logo: "https://your-logo-url.com/image.jpg",
  overview: {
    description: "A detailed description of the project...",
    image: "https://your-overview-image-url.com/image.jpg",
  },
  challenge: {
    title: "The Challenge",
    description: "Description of the challenges faced...",
    image: "https://your-challenge-image-url.com/image.jpg",
  },
  solution: {
    title: "Our Solution",
    description: "Description of the solution provided...",
    image: "https://your-solution-image-url.com/image.jpg",
  },
  tags: ["Content", "Graphics", "Branding"],
},
```

## Data Structure

### CaseStudyData Interface

- `id`: Unique identifier for the case study (used in URLs)
- `title`: Display name of the case study
- `logo`: URL to the client's logo image
- `overview`: Object containing description and image for the overview section
- `challenge`: Object containing title, description, and image for the challenge section
- `solution`: Object containing title, description, and image for the solution section
- `tags`: Array of tags for categorization

## Helper Functions

- `getAllCaseStudyIds()`: Returns array of all case study IDs
- `getCaseStudyById(id)`: Returns a specific case study by ID
- `getAllCaseStudies()`: Returns array of all case study objects

## Usage

The case studies are automatically used in:

- `/our-work` page - displays all case studies in a grid
- `/case-study/[id]` pages - displays individual case study details

## Image Requirements

- All images should be high quality and properly sized
- Logo images should be transparent backgrounds when possible
- Overview, challenge, and solution images should be landscape orientation
- Recommended image formats: JPG, PNG, WebP
- Consider using CDN URLs for better performance
