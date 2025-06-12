import React, { useState, useEffect } from 'react';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    
    // Show button when user scrolls down 300px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        
        window.addEventListener('scroll', toggleVisibility);
        
        // Clean up the event listener
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    
    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    return (
        <button 
            className={`back-to-top ${visible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            >
                <path d="m18 15-6-6-6 6"/>
            </svg>
        </button>
    );
};

export default BackToTop;