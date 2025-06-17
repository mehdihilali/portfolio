# Project Showcase Guide

## How to Add New Projects to Your Portfolio

This guide explains how to add new projects to the showcase section of your portfolio.

### Project Structure

The showcase section is designed to display your projects in a modern and professional way. It consists of:

1. **Featured Project** - A large, prominent display for your most important project
2. **Regular Projects** - Smaller cards for additional projects

### Adding a New Project

There are two ways to add new projects:

#### Method 1: Edit the constants/index.js file directly

1. Open `src/constants/index.js`
2. Find the `showcaseProjects` array
3. Add a new project object with the following structure:

```javascript
{
    id: 4, // Increment from the last ID
    title: "Your Project Title",
    description: "A brief description of your project.",
    imgPath: "/images/your-image.png", // Add your image to the public/images folder
    bgColor: "#color-code", // Optional: background color for the image container
    featured: false, // Set to true if you want this to be the featured project
    projectUrl: "https://your-project-url.com", // Link to your project
    technologies: ["Tech1", "Tech2", "Tech3"] // Technologies used in the project
}
```

#### Method 2: Use the addProject function

You can also use the `addProject` function to add new projects programmatically:

```javascript
import { addProject } from './constants';

// Add a new project
addProject({
    title: "Your Project Title",
    description: "A brief description of your project.",
    imgPath: "/images/your-image.png",
    bgColor: "#color-code", // Optional
    featured: false,
    projectUrl: "https://your-project-url.com",
    technologies: ["Tech1", "Tech2", "Tech3"]
});
```

### Project Images

- Place your project images in the `public/images/` directory
- Recommended image dimensions: 800x600px or 16:9 aspect ratio
- Use PNG or JPG format for best compatibility
- For consistent appearance, use images with similar styles

### Styling Tips

- Keep project titles concise and descriptive
- Write clear, brief descriptions that highlight the key features
- List the most important technologies (3-6 is ideal)
- Use background colors that complement your images
- Only mark one project as `featured: true`

### Example

```javascript
// Adding a new project to the showcase
addProject({
    title: "Portfolio Website — Modern React Portfolio",
    description: "A responsive portfolio website built with React, TailwindCSS, and GSAP animations.",
    imgPath: "/images/portfolio.png",
    bgColor: "#f5f5f5",
    featured: false,
    projectUrl: "https://your-portfolio-url.com",
    technologies: ["React", "TailwindCSS", "GSAP", "Vite"]
});
```

### Troubleshooting

If your project doesn't appear correctly:

1. Check that the image path is correct
2. Verify that the project object has all required fields
3. Make sure you've exported the updated array
4. Check the browser console for any errors

---

By following this guide, you can easily add and showcase new projects in your portfolio while maintaining a professional and modern design.