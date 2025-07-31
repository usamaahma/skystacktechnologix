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
          <h1>World-Class Web Design Services from Pakistan</h1>
          <p className="hero-subtitle">
            Based in the heart of Pakistan, we craft stunning, high-performance websites that bring your vision to life. Our expert team delivers innovative, user-centric designs that captivate global audiences and drive measurable business results. Partner with us to elevate your online presence with creativity rooted in Pakistani excellence and a passion for worldwide impact.
          </p>
          <div className="cta-buttons">
            <Link to="/contactus">
              <button className="primary-cta">Launch Your Dream Website</button>
            </Link>
            <Link to="/portfolio">
              <button className="secondary-cta">Explore Our Work</button>
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
                <p>Empower your brand with a world-class website designed by Pakistan’s finest developers.</p>
                <button className="mockup-cta">Discover More</button>
              </div>
              <div className="mockup-features">
                <div className="feature-card">
                  <h3>Innovative Design</h3>
                  <p>Cutting-edge visuals that captivate and engage your audience.</p>
                </div>
                <div className="feature-card">
                  <h3>Seamless Performance</h3>
                  <p>Lightning-fast, responsive websites for all devices.</p>
                </div>
                <div className="feature-card">
                  <h3>Growth-Driven SEO</h3>
                  <p>Optimized to rank higher and attract global traffic.</p>
                </div>
              </div>
              <footer className="mockup-footer">
                <div className="footer-links">
                  <a href="#privacy">Privacy Policy</a>
                  <a href="#terms">Terms of Service</a>
                  <a href="#support">Support Center</a>
                </div>
                <div className="footer-copy">© 2025 YourBusiness - Powered by Pakistan</div>
              </footer>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Partner with Our Pakistani Web Design Experts?</h2>
        <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
          As a proud Pakistani company, we blend local ingenuity with global standards to deliver websites that stand out. Our team combines technical expertise, creative flair, and a deep understanding of international markets to create digital experiences that resonate worldwide.
        </p>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🚀</div>
            <h3>Lightning-Fast Performance</h3>
            <p>
              Our websites are optimized to load in seconds, enhancing user satisfaction and boosting search engine rankings. We leverage cutting-edge technologies to ensure your site performs flawlessly, no matter the traffic.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">📱</div>
            <h3>Seamlessly Responsive</h3>
            <p>
              With a mobile-first approach, we ensure your website looks stunning and functions perfectly on every device—desktops, tablets, and smartphones—catering to Pakistan’s growing mobile audience and beyond.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🎨</div>
            <h3>Modern UI/UX Excellence</h3>
            <p>
              Our designs are visually captivating and intuitively navigable, crafted to convert visitors into loyal customers. We infuse Pakistani creativity with global design trends for a unique, impactful user experience.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">⚙️</div>
            <h3>Advanced Technology Stack</h3>
            <p>
              Built with industry-leading frameworks like MERN, Next.js, and Tailwind CSS, our websites are robust, scalable, and future-proof, reflecting Pakistan’s rising tech prowess on the global stage.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies I Use */}
      <section className="technologies">
        <h2>Our Mastery of Cutting-Edge Technologies</h2>
        <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
          From our base in Pakistan, we harness the power of modern web technologies to deliver world-class solutions. Our expertise ensures your website is built with the best tools for performance, scalability, and aesthetics.
        </p>
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
        <h2>Our Proven Web Design Process</h2>
        <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
          Our streamlined process, refined in Pakistan and trusted worldwide, ensures your website is delivered on time, within budget, and tailored to your business goals. From vision to victory, we’ve got you covered.
        </p>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Discovery & Consultation</h3>
            <p>
              We start by diving deep into your business objectives, target audience, and brand identity. Our Pakistani team listens closely to create a strategy that aligns with your global aspirations.
            </p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Design & Prototyping</h3>
            <p>
              Our designers craft visually stunning wireframes and prototypes, blending Pakistani creativity with international standards. We refine the design based on your feedback to ensure perfection.
            </p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Development & Coding</h3>
            <p>
              Our developers bring the design to life with clean, efficient code using state-of-the-art technologies. We build robust, scalable websites that perform seamlessly across the globe.
            </p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Testing & Launch</h3>
            <p>
              We rigorously test your website across devices and browsers to ensure flawless functionality. After final approval, we launch your site, ready to make an impact worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="features-showcase" ref={featuresRef}>
        <h2>Features That Set Your Website Apart</h2>
        <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
          Every website we create is packed with features designed to enhance user engagement, boost performance, and drive growth. Our Pakistani expertise ensures your site competes on the global stage.
        </p>
        <div className="feature">
          <div className="feature-content">
            <h3>Mobile-First Design</h3>
            <p>
              With over 60% of web traffic from mobile devices, our mobile-first approach ensures your website delivers a flawless experience on smartphones, tablets, and desktops. From Pakistan to the world, we prioritize accessibility and responsiveness.
            </p>
          </div>
          <div className="feature-image mobile-design"></div>
        </div>
        <div className="feature reverse">
          <div className="feature-content">
            <h3>SEO Optimized for Global Reach</h3>
            <p>
              We integrate advanced SEO best practices to help your website rank higher on search engines like Google, attracting organic traffic from Pakistan and beyond. Our strategies are tailored to maximize your global visibility.
            </p>
          </div>
          <div className="feature-image seo-optimized"></div>
        </div>
        <div className="feature">
          <div className="feature-content">
            <h3>Engaging Custom Animations</h3>
            <p>
              Our subtle, performance-optimized animations enhance user engagement without compromising speed. Designed with Pakistani creativity and global standards, they make your website memorable and interactive.
            </p>
          </div>
          <div className="feature-image animations"></div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <h2>Flexible Pricing for Every Business</h2>
        <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
          Our transparent pricing plans are designed to suit businesses of all sizes, from startups in Pakistan to established brands worldwide. Each package delivers exceptional value and quality.
        </p>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Basic Website</h3>
            <div className="price">$299</div>
            <ul className="features-list">
              <li>Up to 5 beautifully designed pages</li>
              <li>Fully responsive design for all devices</li>
              <li>Basic SEO setup for better visibility</li>
              <li>Professional contact form integration</li>
              <li>1 round of revisions for perfection</li>
            </ul>
            <button className="pricing-cta">Start Your Journey</button>
          </div>
          <div className="pricing-card popular">
            <div className="popular-badge">Most Popular</div>
            <h3>Business Website</h3>
            <div className="price">$599</div>
            <ul className="features-list">
              <li>Up to 15 pages with advanced design</li>
              <li>Enhanced UI/UX for user engagement</li>
              <li>Comprehensive SEO optimization</li>
              <li>Custom animations for a dynamic feel</li>
              <li>3 rounds of revisions for flexibility</li>
              <li>Basic CMS for easy content updates</li>
            </ul>
            <button className="pricing-cta">Choose Business Plan</button>
          </div>
          <div className="pricing-card">
            <h3>E-commerce Website</h3>
            <div className="price">$999+</div>
            <ul className="features-list">
              <li>Robust product catalog setup</li>
              <li>Secure, user-friendly checkout system</li>
              <li>Integration with top payment gateways</li>
              <li>Inventory management tools</li>
              <li>Custom admin dashboard for control</li>
              <li>Unlimited revisions for satisfaction</li>
            </ul>
            <button className="pricing-cta">Build Your Online Store</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Global Clients Say</h2>
        <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
          From Pakistan to the world, our clients trust us to deliver exceptional websites that drive results. Hear from businesses who’ve transformed their online presence with our expertise.
        </p>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="client-info">
              <div className="client-avatar"></div>
              <div className="client-details">
                <h4>Sarah Johnson</h4>
                <p>CEO, TechStart, USA</p>
              </div>
            </div>
            <p className="testimonial-text">
              “Partnering with this Pakistani team was a game-changer for our business. Their attention to detail, innovative design, and commitment to excellence boosted our conversions by 40%. Truly world-class service!”
            </p>
            <div className="rating">★★★★★</div>
          </div>
          <div className="testimonial-card">
            <div className="client-info">
              <div className="client-avatar"></div>
              <div className="client-details">
                <h4>Michael Chen</h4>
                <p>Founder, DesignHub, Singapore</p>
              </div>
            </div>
            <p className="testimonial-text">
              “This Pakistani web design company delivered our website ahead of schedule, exceeding all expectations. Their expertise in React and Next.js, combined with a global perspective, made our site a standout success.”
            </p>
            <div className="rating">★★★★★</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>Ready to Elevate Your Brand Globally?</h2>
        <p>
          As a proud Pakistani company, we’re passionate about creating websites that make an impact worldwide. Let’s collaborate to build a stunning, high-performing website that reflects your vision. Contact us today for a free consultation and take the first step toward digital success.
        </p>
        <div className="cta-buttons">
          <Link to="/contactus">
            <button className="primary-cta">Get Your Free Quote Now</button>
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
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Webdesign1;
