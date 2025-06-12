import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

import TitleHeader from "../components/TitleHeader";
// import TechIconCardExperience from "../components/TechIconCardExperience.jsx";
// import { techStackIcons } from "../constants";
import { techStackImgs } from "../constants";

const TechStack = () => {
    // State for filter
    const [activeFilter, setActiveFilter] = useState("All");

    // Animate the tech cards in the skills section
    useGSAP(() => {
        gsap.fromTo(
            ".tech-card",
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                },
            }
        );
    });

    // Group technologies by type
    const groupedTechnologies = techStackImgs.reduce((groups, tech) => {
        if (!groups[tech.type]) {
            groups[tech.type] = [];
        }
        groups[tech.type].push(tech);
        return groups;
    }, {});

    // Order of technology types to display
    const typeOrder = [
        "Frontend", 
        "Backend", 
        "Mobile", 
        "DevOps", 
        "Version Control", 
        "Security", 
        "AI/ML"
    ];

    // Get all unique technology types for filter buttons
    const filterOptions = ["All", ...typeOrder];

    // Filter technologies based on active filter
    const filteredTypes = activeFilter === "All" 
        ? typeOrder 
        : typeOrder.filter(type => type === activeFilter);

    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="How I Can Contribute & My Key Skills"
                    sub="🤝 What I Bring to the Table"
                />
                
                {/* Filter buttons */}
                <div className="mt-10">
                    <div className="flex flex-wrap justify-center gap-4">
                        {filterOptions.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className="mt-16">
                    {filteredTypes.map((type) => (
                        groupedTechnologies[type] && (
                            <div key={type} className="mb-12">
                                <h3 className="tech-category-title">{type}</h3>
                                <div className="tech-grid">
                                    {groupedTechnologies[type].map((tech, index) => (
                                        <div
                                            key={`${type}-${index}`}
                                            className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                                        >
                                            <div className="tech-card-animated-bg" />
                                            <div className="tech-card-content">
                                                <div className="tech-icon-wrapper">
                                                    <img src={tech.imgPath} alt={tech.name} />
                                                </div>
                                                <div className="padding-x w-full">
                                                    <p>{tech.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
