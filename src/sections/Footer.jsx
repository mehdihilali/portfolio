import { socialImgs, navLinks } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left column - Navigation links */}
                <div className="footer-nav">
                    <h3 className="footer-heading">Navigation</h3>
                    <ul className="footer-links">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.link} className="footer-link">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="#contact" className="footer-link">Contact</a>
                        </li>
                    </ul>
                </div>
                
                {/* Middle column - Social media */}
                <div className="footer-social">
                    <h3 className="footer-heading">Connect With Me</h3>
                    <div className="socials">
                        {socialImgs.map((socialImg, index) => (
                            <a 
                                key={index} 
                                href={socialImg.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="icon"
                                aria-label={`Visit my ${socialImg.name} profile`}
                            >
                                <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
                            </a>
                        ))}
                    </div>
                </div>
                
                {/* Right column - Copyright and terms */}
                <div className="footer-legal">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Elmehdi ELHILALI. All rights reserved.
                    </p>
                    <div className="footer-terms">
                        <a href="#" className="footer-link">Terms & Conditions</a>
                        <a href="#" className="footer-link">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;