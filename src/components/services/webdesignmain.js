import React, { useEffect, useRef } from "react";
import "./webdesignmain.css";
import { Link } from "react-router-dom";

const Webdesign1 = () => {
  const featuresRef = useRef(null);
  const mockupRef = useRef(null);

  useEffect(() => {
    // Animation effect for features when they come into view
    const featureObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-feature");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      const features = featuresRef.current.querySelectorAll(".feature");
      features.forEach((feature) => featureObserver.observe(feature));
    }

    // Animation for website mockup
    const mockupObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-mockup");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (mockupRef.current) {
      mockupObserver.observe(mockupRef.current);
    }

    return () => {
      featureObserver.disconnect();
      mockupObserver.disconnect();
    };
  }, []);

  return (
    <div className="webdesign-service">
      {/* Hero Section */}
      <section className="design-hero">
        <div className="hero-content">
          <h1>Professional Web Design Services</h1>
          <p className="hero-subtitle">
            Transform your ideas into stunning, high-performing websites that
            captivate your audience and drive results.
          </p>
          <div className="cta-buttons">
            <Link to="/contactus">
              <button className="primary-cta">Get Your Website Now</button>
            </Link>
            <Link to="/portfolio">
              <button className="secondary-cta">View Portfolio</button>
            </Link>
          </div>
        </div>
        <div className="hero-image" ref={mockupRef}>
          <div className="website-mockup">
            <div className="browser-bar">
              <div className="browser-dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="browser-title">YourBusiness.com</div>
              <div className="browser-actions">
                <span className="material-icons">minimize</span>
                <span className="material-icons">crop_square</span>
                <span className="material-icons">close</span>
              </div>
            </div>
            <div className="mockup-content">
              <header className="mockup-header">
                <div className="mockup-logo">YourBusiness</div>
                <nav className="mockup-nav">
                  <a href="#home">Home</a>
                  <a href="#services">Services</a>
                  <a href="#about">About</a>
                  <a href="#contact">Contact</a>
                </nav>
              </header>
              <div className="mockup-hero">
                <h2>Welcome to YourBusiness</h2>
                <p>Empower your brand with a stunning website</p>
                <button className="mockup-cta">Get Started</button>
              </div>
              <div className="mockup-features">
                <div className="feature-card">
                  <h3>Feature 1</h3>
                  <p>Boost engagement with modern design</p>
                </div>
                <div className="feature-card">
                  <h3>Feature 2</h3>
                  <p>Fast, responsive, and reliable</p>
                </div>
                <div className="feature-card">
                  <h3>Feature 3</h3>
                  <p>SEO optimized for growth</p>
                </div>
              </div>
              <footer className="mockup-footer">
                <div className="footer-links">
                  <a href="#privacy">Privacy</a>
                  <a href="#terms">Terms</a>
                  <a href="#support">Support</a>
                </div>
                <div className="footer-copy">© 2025 YourBusiness</div>
              </footer>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose My Web Design Services?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🚀</div>
            <h3>Blazing Fast Performance</h3>
            <p>
              Optimized websites that load in seconds, improving user experience
              and SEO.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">📱</div>
            <h3>Fully Responsive</h3>
            <p>Perfectly displayed on all devices from desktop to mobile.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🎨</div>
            <h3>Modern UI/UX</h3>
            <p>
              Beautiful designs with intuitive user interfaces that convert
              visitors.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">⚙️</div>
            <h3>Latest Technologies</h3>
            <p>Built with MERN, Next.js, and top frameworks for reliability.</p>
          </div>
        </div>
      </section>

      {/* Technologies I Use */}
      <section className="technologies">
        <h2>Technologies I Master</h2>
        <div className="tech-stack">
          <div className="tech-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
            />
            <span>React</span>
          </div>
          <div className="tech-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              alt="Next.js"
            />
            <span>Next.js</span>
          </div>
          <div className="tech-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              alt="Tailwind CSS"
            />
            <span>Tailwind CSS</span>
          </div>
          <div className="tech-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="Bootstrap"
            />
            <span>Bootstrap</span>
          </div>
          <div className="tech-item">
            <img src="https://mui.com/static/logo.png" alt="Material UI" />
            <span>Material UI</span>
          </div>
          <div className="tech-item">
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              alt="Ant Design"
            />
            <span>Ant Design</span>
          </div>
        </div>
      </section>

      {/* My Process */}
      <section className="my-process">
        <h2>My Web Design Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Consultation</h3>
            <p>Understand your business goals and requirements.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Design Mockup</h3>
            <p>Create wireframes and design prototypes for approval.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Development</h3>
            <p>Build the website with clean, maintainable code.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Testing & Launch</h3>
            <p>Thorough testing across devices before going live.</p>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="features-showcase" ref={featuresRef}>
        <h2>What Your Website Will Include</h2>
        <div className="feature">
          <div className="feature-content">
            <h3>Mobile-First Design</h3>
            <p>
              With over 60% of web traffic coming from mobile devices, I
              prioritize creating flawless mobile experiences that scale up to
              desktop.
            </p>
          </div>
          <div className="feature-image mobile-design"></div>
        </div>
        <div className="feature reverse">
          <div className="feature-content">
            <h3>SEO Optimized</h3>
            <p>
              Built with search engine best practices in mind to help your site
              rank higher and attract more organic traffic.
            </p>
          </div>
          <div className="feature-image seo-optimized"></div>
        </div>
        <div className="feature">
          <div className="feature-content">
            <h3>Custom Animations</h3>
            <p>
              Subtle, performant animations that enhance user engagement without
              sacrificing speed or accessibility.
            </p>
          </div>
          <div className="feature-image animations"></div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <h2>Simple, Transparent Pricing</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Basic Website</h3>
            <div className="price">$299</div>
            <ul className="features-list">
              <li>Up to 5 pages</li>
              <li>Responsive design</li>
              <li>Basic SEO setup</li>
              <li>Contact form</li>
              <li>1 revision round</li>
            </ul>
            <button className="pricing-cta">Get Started</button>
          </div>
          <div className="pricing-card popular">
            <div className="popular-badge">Most Popular</div>
            <h3>Business Website</h3>
            <div className="price">$599</div>
            <ul className="features-list">
              <li>Up to 15 pages</li>
              <li>Advanced UI/UX</li>
              <li>SEO optimized</li>
              <li>Custom animations</li>
              <li>3 revision rounds</li>
              <li>Basic CMS integration</li>
            </ul>
            <button className="pricing-cta">Get Started</button>
          </div>
          <div className="pricing-card">
            <h3>E-commerce Website</h3>
            <div className="price">$999+</div>
            <ul className="features-list">
              <li>Product catalog</li>
              <li>Secure checkout</li>
              <li>Payment gateway</li>
              <li>Inventory management</li>
              <li>Admin dashboard</li>
              <li>Unlimited revisions</li>
            </ul>
            <button className="pricing-cta">Get Started</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="client-info">
              <div className="client-avatar"></div>
              <div className="client-details">
                <h4>Sarah Johnson</h4>
                <p>CEO, TechStart</p>
              </div>
            </div>
            <p className="testimonial-text">
              "Working with this developer was a game-changer for our business.
              Our new website has increased conversions by 40% and the attention
              to detail was exceptional."
            </p>
            <div className="rating">★★★★★</div>
          </div>
          <div className="testimonial-card">
            <div className="client-info">
              <div className="client-avatar"></div>
              <div className="client-details">
                <h4>Michael Chen</h4>
                <p>Founder, DesignHub</p>
              </div>
            </div>
            <p className="testimonial-text">
              "The website was delivered ahead of schedule and exceeded all our
              expectations. The developer's expertise in React and Next.js is
              truly impressive."
            </p>
            <div className="rating">★★★★★</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>Ready to Transform Your Online Presence?</h2>
        <p>
          Let's build something amazing together. Get in touch today to discuss
          your project and receive a free consultation.
        </p>
        <div className="cta-buttons">
          <Link to="/contactus">
            <button className="primary-cta">Get Your Free Quote</button>
          </Link>
          <button
            className="secondary-cta"
            onClick={() =>
              window.open(
                "https://wa.me/923088798324",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Schedule a Call
          </button>
        </div>
      </section>
    </div>
  );
};

export default Webdesign1;
