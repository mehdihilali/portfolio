import React, {useEffect, useState} from 'react'
import {navLinks} from "../constants/index.js";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('#hero');

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
            
            // Update active link based on scroll position
            const sections = navLinks.map(link => link.link);
            const currentPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const element = document.querySelector(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    
                    if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
                        setActiveLink(section);
                    }
                }
            });
        }
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a href="#hero" className="logo">
                    Elmehdi | S.E
                </a>
                <div className="nav-container">
                    <nav className="desktop">
                        <ul>
                            {navLinks.map(({link, name}) => (
                                <li key={name} className={`group ${activeLink === link ? 'active' : ''}`}>
                                    <a href={link} onClick={() => setActiveLink(link)}>
                                        <span>{name}</span>
                                        <span className="underline" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="flex gap-4">
                    <a href="/cv/ELMEHDI_ELHILALI_CV_2025.pdf" download className="download-btn group">
                        <div className="inner">
                            <span>Download CV</span>
                        </div>
                    </a>
                    <a href="#contact" className="contact-btn group">
                        <div className="inner">
                            <span>Contact me</span>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    )
}
export default NavBar
