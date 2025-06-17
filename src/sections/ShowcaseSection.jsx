import React, { useRef, createRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { showcaseProjects } from '../constants';

gsap.registerPlugin(ScrollTrigger);

/**
 * Project View Button Component
 */
const ProjectButton = ({ url = "#", text = "View Project" }) => {
    return (
        <a 
            href={url} 
            className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-sm font-medium transition-all duration-300 rounded-full bg-black-200 hover:bg-white-50 hover:text-black group"
            target="_blank" 
            rel="noopener noreferrer"
        >
            <span>{text}</span>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </a>
    );
};

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    
    // Create refs for each project dynamically
    const projectRefs = useRef(showcaseProjects.map(() => createRef()));
    
    // Find the featured project (if any)
    const featuredProject = showcaseProjects.find(project => project.featured);
    const regularProjects = showcaseProjects.filter(project => !project.featured);

    useGSAP(() => {
        // Animate all project refs
        projectRefs.current.forEach((ref, index) => {
            if (ref.current) {
                gsap.fromTo(
                    ref.current,
                    {
                        y: 50, opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: 0.3 * (index + 1),
                        scrollTrigger: {
                            trigger: ref.current,
                            start: 'top bottom -= 100'
                        }
                    }
                )
            }
        })
        
        // Animate section
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5})
    }, [])
    
    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-white-50 rounded-full"></div>
                </div>
                
                <div className="showcaselayout">
                    {/* LEFT - Featured Project */}
                    {featuredProject && (
                        <div 
                            className="first-project-wrapper transition-transform duration-300 hover:translate-y-[-5px]" 
                            ref={projectRefs.current[0]}
                        >
                            <div className="image-wrapper overflow-hidden rounded-xl">
                                <img 
                                    src={featuredProject.imgPath} 
                                    alt={featuredProject.title} 
                                    className="transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="text-content">
                                <h2 className="hover:text-white-50 transition-colors duration-300">
                                    {featuredProject.title}
                                </h2>
                                <p className="text-white-50 md:text-xl">
                                    {featuredProject.description}
                                </p>
                                {featuredProject.technologies && (
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {featuredProject.technologies.map((tech, index) => (
                                            <span 
                                                key={index} 
                                                className="px-3 py-1 text-sm bg-black-200 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    
                    {/* RIGHT - Regular Projects */}
                    <div className="project-list-wrapper overflow-hidden">
                        {regularProjects.map((project, index) => (
                            <div 
                                className="project transition-transform duration-300 hover:translate-y-[-5px]" 
                                key={project.id} 
                                ref={projectRefs.current[index + 1]}
                            >
                                <div 
                                    className="image-wrapper overflow-hidden" 
                                    style={{ backgroundColor: project.bgColor || 'transparent' }}
                                >
                                    <img 
                                        src={project.imgPath} 
                                        alt={project.title} 
                                        className="transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <h2 className="hover:text-white-50 transition-colors duration-300">
                                    {project.title}
                                </h2>
                                <p className="text-white-50 text-sm mt-2">{project.description}</p>
                                
                                {project.technologies && (
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                            <span 
                                                key={techIndex} 
                                                className="px-2 py-1 text-xs bg-black-200 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection
