const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 1, suffix: "+", label: "Years of Experience" },
    { value: 50, suffix: "+", label: "Satisfied Clients" },
    { value: 9, suffix: "+", label: "Completed Projects" },
    { value: 85, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/ENSAKHOURIBGA.png",
    },
    {
        imgPath: "/images/logos/powerGo.png",
    },
    {
        imgPath: "/images/logos/inkway.png",
    },
    {
        imgPath: "/images/logos/proway.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React",
        imgPath: "/images/logos/react.png",
        type: "Frontend"
    },
    {
        name: "NestJS",
        imgPath: "/images/logos/NestJS.png",
        type: "Backend"
    },
    {
        name: "Java",
        imgPath: "/images/logos/java.png",
        type: "Backend"
    },
    {
        name: "Angular",
        imgPath: "/images/logos/angular.png",
        type: "Frontend"
    },
    {
        name: "Git",
        imgPath: "/images/logos/git.png",
        type: "Version Control"
    },
    {
        name: "Spring Boot",
        imgPath: "/images/logos/spring.png",
        type: "Backend"
    },
    {
        name: "Docker",
        imgPath: "/images/logos/docker.png",
        type: "DevOps"
    },
    {
        name: "RabbitMQ",
        imgPath: "/images/logos/rabbitmq.png",
        type: "Backend"
    },
    {
        name: "React Native",
        imgPath: "/images/logos/reactnative.png",
        type: "Mobile"
    },
    {
        name: "Next.js",
        imgPath: "/images/logos/nextjs.png",
        type: "Frontend"
    },
    {
        name: "Keycloak",
        imgPath: "/images/logos/keycloak.png",
        type: "Security"
    },
    {
        name: "Langchain",
        imgPath: "/images/logos/langchain.png",
        type: "AI/ML"
    },
    {
        name: "Azure OpenAI",
        imgPath: "/images/logos/azureopenai.png",
        type: "AI/ML"
    },
    {
        name: "Expo",
        imgPath: "/images/logos/expo.png",
        type: "Mobile"
    },
];


const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "Elmehdi quickly became an integral part of the team at PowerGo, delivering a robust and performant mobile application. His efficiency and ability to adapt to new challenges made a big impact in a short period.",
        imgPath: "/images/logos/powerGo_logo1.png",
        logoPath: "/images/logos/powerGo_logo1.png",
        title: "Full Stack Mobile Developer Intern",
        date: "01 June 2024 - 01 September 2024",
        responsibilities: [
            "Developed a cross-platform mobile application using React Native and Expo for both Android and iOS.",
            "Collaborated with the design and backend teams to implement UI components and integrate APIs.",
            "Tested and optimized the application for smooth performance across devices.",
        ],
    },
    {
        review:
            "At Proway, Elmehdi demonstrated a deep understanding of backend microservices and modern frontend frameworks. His contributions to AI integration and system architecture were impressive and valuable.",
        imgPath: "/images/logos/proway_logo.png",
        logoPath: "/images/logos/proway_logo.png",
        title: "Full Stack Developer Intern",
        date: "01 March 2025 - Present",
        responsibilities: [
            "Worked on a microservices-based architecture using NestJS, Docker, RabbitMQ, and Keycloak for secure service communication.",
            "Developed scalable frontend features using React with Vite.",
            "Integrated Azure OpenAI and Langchain to implement AI-driven features within the application.",
        ],
    },
];


const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Elmechrafi Amine",
        mentions: "@elmechrafi.amine",
        review:
            "I can’t say enough good things about Elmehdi. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Elhamoussi Abdelkabir",
        mentions: "@elhamoussi.abdelkabir",
        review:
            "Working with Elmehdi was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Benerrguig Chafiq",
        mentions: "@benerrguig.chafiq",
        review:
            "Collaborating with Elmehdi was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Elmehdi's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and brand, Elmehdi is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Mikh Ayman",
        mentions: "@mikh.ayman",
        review:
            "Elmehdi was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Elhilali Youssef",
        mentions: "@elhilali.youssef",
        review:
            "Elmehdi’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Elhilali Zakaria",
        mentions: "@elhilali.zakaria",
        review:
            "Elmehdi was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
        url:"https://www.instagram.com/elmehdi_elhilali/"
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
        url:"https://www.facebook.com/profile.php?id=100008031885273"
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        url:"https://www.linkedin.com/in/elhilali-elmehdi-0356b22ba/",
    },
    {
        name: "github",
        imgPath: "/images/github.png",
        url:"https://github.com/mehdihilali"
    },
];

/**
 * Project data for the showcase section
 * @typedef {Object} Project
 * @property {number} id - Unique identifier for the project
 * @property {string} title - Project title
 * @property {string} description - Project description
 * @property {string} imgPath - Path to the project image
 * @property {string} bgColor - Background color for the project card (optional)
 * @property {boolean} featured - Whether this is a featured project (displayed prominently)
 * @property {string} projectUrl - URL to the project (optional)
 * @property {string[]} technologies - Array of technologies used in the project
 */

/**
 * Projects to showcase in the portfolio
 * @type {Project[]}
 */
const showcaseProjects = [
    {
        id: 1,
        title: "Proway — an AI-assisted career guidance and planning platform",
        description: "A platform built with NestJS (Microservices), React (Vite), and TailwindCSS for a fast, user-friendly experience. It leverages Docker for containerization, RabbitMQ for inter-service communication, and Azure OpenAI for intelligent, AI-powered interactions.",
        imgPath: "/images/Proway1.png",
        bgColor: "",
        featured: true,
        projectUrl: "#",
        technologies: ["React", "NestJS", "TailwindCSS", "Docker", "RabbitMQ", "Azure OpenAI"]
    },
    {
        id: 2,
        title: "Quizlytics — Quiz & Learning Analytics Platform",
        description: "An interactive quiz platform with advanced analytics to track learning progress and identify knowledge gaps.",
        imgPath: "/images/quiz.png",
        bgColor: "#ffefdb",
        featured: false,
        projectUrl: "#",
        technologies: ["Spring Boot", "Angular", "PostgreSQL", "Chart.js"]
    },
    {
        id: 3,
        title: "SportCoachApp — Personalized Gym Coaching Powered by AI",
        description: "A mobile application that provides personalized workout plans and real-time form correction using AI technology.",
        imgPath: "/images/sportCaoch.jpg",
        bgColor: "#ffe7db",
        featured: false,
        projectUrl: "#",
        technologies: ["React Native", "Gemini API", "Firebase", "Express JS", "NativeWind"]
    }
];

/**
 * Add a new project to the showcase
 * @param {Project} project - The project to add
 * @returns {Project[]} - The updated projects array
 */
const addProject = (project) => {
    // Generate a new ID if not provided
    if (!project.id) {
        const maxId = Math.max(...showcaseProjects.map(p => p.id), 0);
        project.id = maxId + 1;
    }
    
    // Add the project to the array
    showcaseProjects.push(project);
    return showcaseProjects;
};

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
    showcaseProjects,
    addProject,
};