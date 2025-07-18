import React, { useEffect, useRef } from "react";
import "./webdevelopment.css";

const Webdevelopment = () => {
  const featuresRef = useRef(null);
  
  useEffect(() => {
    // Animation effect for features when they come into view
    const observer = new IntersectionObserver(
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
      features.forEach((feature) => observer.observe(feature));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="webdev-service">
      {/* Hero Section */}
      <section className="dev-hero">
        <div className="hero-content">
          <h1>Expert Web Development Services</h1>
          <p className="hero-subtitle">
            High-performance, scalable web applications built with modern technologies to power your business
          </p>
          <div className="cta-buttons">
            <button className="primary-cta">Start Your Project</button>
            <button className="secondary-cta">See My Work</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="code-mockup">
            <div className="code-window">
              <div className="code-header">
                <div className="code-dots">
                  <span className="red"></span>
                  <span className="yellow"></span>
                  <span className="green"></span>
                </div>
                <div className="code-title">app.js</div>
              </div>
              <div className="code-body">
                <pre>{`import React from 'react';\nimport { NextJS, MongoDB } from 'technologies';\n\nexport default function YourWebsite() {\n  return (\n    <HighQuality \n      performance={true}\n      scalability={true}\n      security={true}\n    />\n  );\n}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="services-offered">
        <h2>My Web Development Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <h3>Frontend Development</h3>
            <ul>
              <li>React.js Applications</li>
              <li>Next.js SSR Solutions</li>
              <li>Responsive UI/UX</li>
              <li>Interactive Web Apps</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>Backend Development</h3>
            <ul>
              <li>Node.js & Express</li>
              <li>RESTful APIs</li>
              <li>Database Design</li>
              <li>Authentication Systems</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">🔄</div>
            <h3>Full Stack Solutions</h3>
            <ul>
              <li>MERN Stack Applications</li>
              <li>End-to-End Development</li>
              <li>Third-party Integrations</li>
              <li>Deployment & DevOps</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack-section">
        <h2>My Technology Stack</h2>
        <div className="tech-stack">
          <div className="tech-category">
            <h3>Frontend</h3>
            <div className="tech-items">
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                <span>React</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" />
                <span>Next.js</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" />
                <span>Tailwind</span>
              </div>
            </div>
          </div>
          <div className="tech-category">
            <h3>Backend</h3>
            <div className="tech-items">
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                <span>Node.js</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
                <span>Express</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                <span>MongoDB</span>
              </div>
            </div>
          </div>
          <div className="tech-category">
            <h3>Tools & Libraries</h3>
            <div className="tech-items">
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                <span>Git</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" />
                <span>Redux</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
                <span>Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="dev-process">
        <h2>My Development Process</h2>
        <div className="process-timeline">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Requirement Analysis</h3>
              <p>Detailed discussion to understand your business needs and technical requirements.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Planning & Architecture</h3>
              <p>System design, database schema, and technology stack selection.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Development Phase</h3>
              <p>Agile development with regular updates and milestone deliveries.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Testing & Deployment</h3>
              <p>Rigorous testing followed by deployment to production environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="project-showcase" ref={featuresRef}>
        <h2>My Development Approach</h2>
        <div className="feature">
          <div className="feature-content">
            <h3>Clean, Maintainable Code</h3>
            <p>
              I follow best practices and coding standards to ensure your project is built with
              clean, well-documented code that's easy to maintain and scale.
            </p>
            <ul className="feature-list">
              <li>Modular component structure</li>
              <li>Proper code documentation</li>
              <li>Consistent coding patterns</li>
              <li>ES6+ JavaScript features</li>
            </ul>
          </div>
          <div className="feature-image code-quality"></div>
        </div>
        <div className="feature reverse">
          <div className="feature-content">
            <h3>Performance Optimization</h3>
            <p>
              Every application is optimized for speed and efficiency to provide
              the best user experience.
            </p>
            <ul className="feature-list">
              <li>Code splitting & lazy loading</li>
              <li>Efficient data fetching</li>
              <li>Image optimization</li>
              <li>Bundle size reduction</li>
            </ul>
          </div>
          <div className="feature-image performance"></div>
        </div>
        <div className="feature">
          <div className="feature-content">
            <h3>Security First</h3>
            <p>
              Security is integrated at every level of development to protect your
              application and user data.
            </p>
            <ul className="feature-list">
              <li>Data validation & sanitization</li>
              <li>Authentication best practices</li>
              <li>Role-based access control</li>
              <li>Regular dependency updates</li>
            </ul>
          </div>
          <div className="feature-image security"></div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section">
        <h2>Development Packages</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Basic Development</h3>
            <div className="price">$999+</div>
            <ul className="features-list">
              <li>Small business website</li>
              <li>Up to 5 pages</li>
              <li>Basic CMS integration</li>
              <li>Contact form</li>
              <li>1 month support</li>
            </ul>
            <button className="pricing-cta">Get Quote</button>
          </div>
          <div className="pricing-card recommended">
            <div className="recommended-badge">Recommended</div>
            <h3>Web Application</h3>
            <div className="price">$2,999+</div>
            <ul className="features-list">
              <li>Custom web application</li>
              <li>User authentication</li>
              <li>Database integration</li>
              <li>Admin dashboard</li>
              <li>3 months support</li>
              <li>API development</li>
            </ul>
            <button className="pricing-cta">Get Quote</button>
          </div>
          <div className="pricing-card">
            <h3>Enterprise Solution</h3>
            <div className="price">$5,999+</div>
            <ul className="features-list">
              <li>Complex web application</li>
              <li>Scalable architecture</li>
              <li>Advanced features</li>
              <li>Third-party integrations</li>
              <li>6 months support</li>
              <li>Priority development</li>
            </ul>
            <button className="pricing-cta">Get Quote</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="dev-testimonials">
        <h2>Client Success Stories</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              The developer delivered our e-commerce platform ahead of schedule with 
              exceptional attention to detail. The React/Node.js architecture performs 
              flawlessly under heavy traffic.
            </p>
            <div className="client-info">
              <div className="client-avatar"></div>
              <div className="client-details">
                <h4>Alex Rodriguez</h4>
                <p>CTO, ShopNest</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              Our custom CRM system transformed our business operations. The developer's 
              expertise in MongoDB and Express saved us thousands in licensing fees we'd 
              have spent on commercial software.
            </p>
            <div className="client-info">
              <div className="client-avatar"></div>
              <div className="client-details">
                <h4>Sarah Johnson</h4>
                <p>CEO, BizSolutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="dev-final-cta">
        <h2>Ready to Build Your Web Application?</h2>
        <p>
          Let's discuss your project requirements and create a solution that drives 
          your business forward.
        </p>
        <div className="cta-buttons">
          <button className="primary-cta">Get Free Consultation</button>
          <button className="secondary-cta">View Portfolio</button>
        </div>
      </section>
    </div>
  );
};

export default Webdevelopment;