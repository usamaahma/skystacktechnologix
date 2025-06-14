import React, { useState, useEffect } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPhone } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileMenuOpen) setActiveMobileDropdown(null);
    };

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    const toggleMobileDropdown = (dropdownName) => {
        setActiveMobileDropdown(activeMobileDropdown === dropdownName ? null : dropdownName);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Left Section - Logo */}
                <div className="navbar-left">
                    <img
                        src="../images/skystacklogo.png"
                        alt="Sky Stack Technologies Logo"
                        className="nav-logo"
                    />
                </div>

                {/* Center Section - Navigation Links */}
                <div className="navbar-center">
                    <div className="navbar-links">
                        <a href="/" className="nav-link">Home</a>
                        <a href="/about" className="nav-link">About</a>

                        <div className={`nav-dropdown ${activeDropdown === 'services' ? 'active' : ''}`}>
                            <button
                                className="nav-link dropdown-toggle"
                                onClick={() => toggleDropdown('services')}
                            >
                                Services <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                            </button>
                            <div className="dropdown-menu">
                                <a href="/web-design" className="dropdown-item">Web Design</a>
                                <a href="/web-development" className="dropdown-item">Web Development</a>
                                <a href="/mobile-app-development" className="dropdown-item">Mobile App Development</a>
                                <a href="/crm" className="dropdown-item">CRM</a>
                                <a href="/digital-marketing" className="dropdown-item">Digital Marketing</a>
                            </div>
                        </div>

                        <div className={`nav-dropdown ${activeDropdown === 'portfolio' ? 'active' : ''}`}>
                            <button
                                className="nav-link dropdown-toggle"
                                onClick={() => toggleDropdown('portfolio')}
                            >
                                Portfolio <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                            </button>
                            <div className="dropdown-menu">
                                <a href="/recent-projects" className="dropdown-item">Recent Projects</a>
                                <a href="/case-studies" className="dropdown-item">Client Case Studies</a>
                            </div>
                        </div>

                        <a href="/blog" className="nav-link">Blog</a>
                        <a href="/contact" className="nav-link">Contact</a>
                    </div>
                </div>

                {/* Right Section - Phone Button */}
                <div className="navbar-right">
                    <a href="tel:1300000000" className="phone-button">
                        <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                        <span>1300 000 000</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-navbar ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-nav-container">
                    <a href="/" className="mobile-nav-link active">Home</a>
                    <a href="/about" className="mobile-nav-link">About</a>

                    <div className="mobile-nav-dropdown">
                        <button
                            className="mobile-nav-link dropdown-toggle"
                            onClick={() => toggleMobileDropdown('services')}
                        >
                            Services <FontAwesomeIcon
                                icon={faChevronDown}
                                className={`dropdown-icon ${activeMobileDropdown === 'services' ? 'active' : ''}`}
                            />
                        </button>
                        <div className={`dropdown-menu ${activeMobileDropdown === 'services' ? 'active' : ''}`}>
                            <a href="/web-design" className="dropdown-item">Web Design</a>
                            <a href="/web-development" className="dropdown-item">Web Development</a>
                            <a href="/seo" className="dropdown-item">SEO Services</a>
                            <a href="/digital-marketing" className="dropdown-item">Digital Marketing</a>
                        </div>
                    </div>

                    <div className="mobile-nav-dropdown">
                        <button
                            className="mobile-nav-link dropdown-toggle"
                            onClick={() => toggleMobileDropdown('portfolio')}
                        >
                            Portfolio <FontAwesomeIcon
                                icon={faChevronDown}
                                className={`dropdown-icon ${activeMobileDropdown === 'portfolio' ? 'active' : ''}`}
                            />
                        </button>
                        <div className={`dropdown-menu ${activeMobileDropdown === 'portfolio' ? 'active' : ''}`}>
                            <a href="/recent-projects" className="dropdown-item">Recent Projects</a>
                            <a href="/case-studies" className="dropdown-item">Client Case Studies</a>
                        </div>
                    </div>

                    <a href="/blog" className="mobile-nav-link">Blog</a>
                    <a href="/contact" className="mobile-nav-link">Contact</a>
                    <a href="tel:1300000000" className="mobile-phone-button">
                        <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                        <span>1300 000 000</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;