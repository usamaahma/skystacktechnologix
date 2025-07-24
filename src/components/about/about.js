import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faChartLine, faWordpress, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './about.css';

function About() {
    return (
        <section className="about-section" aria-label="About SkyStack Technologiz">
            <div className="about-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">About SkyStack Technologiz</h1>
                    <p className="hero-subtitle">Empowering Your Digital Future</p>
                </div>
            </div>

            <div className="about-container">
                {/* Mission Section */}
                <div className="mission-section">
                    <h2 className="mission-title">Our Mission</h2>
                    <p className="mission-text">
                        At SkyStack Technologiz, we are a Melbourne-based team passionate about transforming businesses through innovative digital solutions. Our mission is to deliver tailored, high-quality services that elevate your brand, from startups to established enterprises, ensuring success in the digital landscape.
                    </p>
                </div>

                {/* Services Section */}
                <div className="services-section">
                    <h2 className="services-title">What We Do</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <FontAwesomeIcon icon={faCode} className="service-icon" />
                            <h3 className="service-name">Web Development</h3>
                            <p className="service-description">
                                Crafting responsive, high-performance websites that engage users and deliver seamless experiences.
                            </p>
                        </div>
                        <div className="service-card">
                            <FontAwesomeIcon icon={faMobileAlt} className="service-icon" />
                            <h3 className="service-name">Mobile App Development</h3>
                            <p className="service-description">
                                Building intuitive iOS and Android apps to connect with your audience on the go.
                            </p>
                        </div>
                        <div className="service-card">
                            <FontAwesomeIcon icon={faChartLine} className="service-icon" />
                            <h3 className="service-name">Digital Marketing</h3>
                            <p className="service-description">
                                Driving growth with data-driven strategies to boost your online presence and ROI.
                            </p>
                        </div>
                        <div className="service-card">
                            <FontAwesomeIcon icon={faWordpress} className="service-icon" />
                            <h3 className="service-name">WordPress Development</h3>
                            <p className="service-description">
                                Creating scalable, user-friendly WordPress websites tailored to your needs.
                            </p>
                        </div>
                        <div className="service-card">
                            <FontAwesomeIcon icon={faShoppingCart} className="service-icon" />
                            <h3 className="service-name">Shopify Development</h3>
                            <p className="service-description">
                                Developing robust e-commerce platforms to grow your online store efficiently.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="why-choose-section">
                    <h2 className="why-choose-title">Why Choose SkyStack Technologiz?</h2>
                    <div className="why-choose-grid">
                        <div className="why-choose-item">
                            <h3 className="item-title">Expert Team</h3>
                            <p className="item-description">
                                Our skilled professionals bring years of experience in delivering innovative solutions.
                            </p>
                        </div>
                        <div className="why-choose-item">
                            <h3 className="item-title">Client-Centric Approach</h3>
                            <p className="item-description">
                                We prioritize your vision, ensuring customized solutions that align with your goals.
                            </p>
                        </div>
                        <div className="why-choose-item">
                            <h3 className="item-title">Cutting-Edge Technology</h3>
                            <p className="item-description">
                                Leveraging the latest tools to build scalable, future-proof digital products.
                            </p>
                        </div>
                        <div className="why-choose-item">
                            <h3 className="item-title">Proven Results</h3>
                            <p className="item-description">
                                A track record of successful projects that drive business growth and engagement.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="about-cta">
                    <h2 className="cta-title">Ready to Transform Your Business?</h2>
                    <p className="cta-text">
                        Partner with us to bring your vision to life with innovative digital solutions.
                    </p>
                    <Link to="/contact" className="cta-button">Get in Touch</Link>
                </div>
            </div>
        </section>
    );
}

export default About;