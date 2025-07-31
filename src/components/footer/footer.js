import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faEnvelope,
    faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="sky-footer">
            <div className="footer-container">
                {/* Top Section */}
                <div className="footer-top">
                    <div className="footer-brand">
                        <img
                            src="../images/skystacklogo.png"
                            alt="Sky Stack Technologiz"
                            className="footer-logo"
                            onError={(e) => {
                                e.target.src =
                                    "https://via.placeholder.com/180x60?text=Sky+Stack+Logo";
                            }}
                        />
                        <p className="footer-tagline">
                            Elevating businesses through innovative digital solutions
                            all over the World.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="links-column">
                            <h3 className="links-title">Services</h3>
                            <ul>
                                <li>
                                    <a href="/web-design">Web Design</a>
                                </li>
                                <li>
                                    <a href="/web-development">Web Development</a>
                                </li>
                                <li>
                                    <a href="/mobile-app-development">Mobile App Development</a>
                                </li>
                                <li>
                                    <a href="/digital-marketing">Digital Marketing</a>
                                </li>
                                <li>
                                    <a href="/seo">SEO Services</a>
                                </li>
                            </ul>
                        </div>

                        <div className="links-column">
                            <h3 className="links-title">Company</h3>
                            <ul>
                                <li>
                                    <a href="/about">About Us</a>
                                </li>
                                <li>
                                    <a href="/portfolio">Portfolio</a>
                                </li>
                                <li>
                                    <a href="/blog">Blog</a>
                                </li>
                                <li>
                                    <a href="/careers">Careers</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className="links-column">
                            <h3 className="links-title">Support</h3>
                            <ul>
                                <li>
                                    <a href="/faq">FAQ</a>
                                </li>
                                <li>
                                    <a href="/privacy-policy">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="/terms">Terms of Service</a>
                                </li>
                                <li>
                                    <a href="/support">Help Center</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <h3 className="contact-title">Get in Touch</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                                <a href="tel:+923088798324" className="contact-link">
                                    <span>+92 308 8798324</span>
                                </a>
                            </div>
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                                <a
                                    href="mailto:skystacktechnologiz@gmail.com"
                                    className="contact-link"
                                >
                                    <span>skystacktechnologiz@gmail.com</span>
                                </a>
                            </div>
                            <div className="contact-item">
                                <FontAwesomeIcon
                                    icon={faMapMarkerAlt}
                                    className="contact-icon"
                                />
                                <span className="contact-link">
                                    Office # 1022, Third Floor، Siddique Trade Center, Main
                                    Boulevard Gulberg, Block H Gulberg 2, Lahore, 54660
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div className="copyright">
                        © {new Date().getFullYear()} Sky Stack Technologiz. All rights
                        reserved.
                    </div>
                    <div className="legal-links">
                        <a href="/privacy">Privacy Policy</a>
                        <span>|</span>
                        <a href="/terms">Terms of Service</a>
                        <span>|</span>
                        <a href="/cookies">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
