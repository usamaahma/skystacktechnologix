import React, { useEffect, useRef } from "react";
import "./webdevelopment.css";

const Webdevelopment = () => {
  const featuresRef = useRef(null);
  const mockupRef = useRef(null);

  useEffect(() => {
    const featureObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("dev-animate-feature");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      const features = featuresRef.current.querySelectorAll(".dev-feature");
      features.forEach((feature) => featureObserver.observe(feature));
    }

    const mockupObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("dev-animate-mockup");
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
    <div className="dev-service">
      {/* Hero Section */}
      <section className="dev-hero">
        <div className="dev-hero-content">
          <h1>Expert Web Development Services</h1>
          <p className="dev-hero-subtitle">
            Delivering high-performance, scalable, and secure web applications
            crafted with cutting-edge technologies to empower businesses and
            drive digital success.
          </p>
          <div className="dev-cta-buttons">
            <button className="dev-primary-cta">Launch Your Project</button>
            <button className="dev-secondary-cta">Explore Our Portfolio</button>
          </div>
        </div>
        <div className="dev-hero-image" ref={mockupRef}>
          <div className="dev-mockup">
            <div className="dev-window">
              <div className="dev-header">
                <div className="dev-dots">
                  <span className="dev-dot-red"></span>
                  <span className="dev-dot-yellow"></span>
                  <span className="dev-dot-green"></span>
                </div>
                <div className="dev-title">WebApp Dashboard</div>
                <div className="dev-actions">
                  <span className="dev-icon">minimize</span>
                  <span className="dev-icon">crop_square</span>
                  <span className="dev-icon">close</span>
                </div>
              </div>
              <div className="dev-body">
                <div className="dev-sidebar">
                  <div className="dev-logo">WebApp</div>
                  <nav className="dev-nav">
                    <a href="#dashboard" className="dev-active">
                      Dashboard
                    </a>
                    <a href="#users">Users</a>
                    <a href="#analytics">Analytics</a>
                    <a href="#settings">Settings</a>
                  </nav>
                </div>
                <div className="dev-main">
                  <div className="dev-content-header">
                    <h2>Dashboard Overview</h2>
                    <button className="dev-action-btn">Add User</button>
                  </div>
                  <div className="dev-stats">
                    <div className="dev-stat-card">
                      <h3>Active Users</h3>
                      <p>1,245</p>
                    </div>
                    <div className="dev-stat-card">
                      <h3>Revenue</h3>
                      <p>$12,300</p>
                    </div>
                    <div className="dev-stat-card">
                      <h3>Engagement</h3>
                      <p>78%</p>
                    </div>
                  </div>
                  <div className="dev-chart">
                    <div className="dev-chart-placeholder">Analytics Chart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="dev-services-offered">
        <h2>Our Comprehensive Web Development Services</h2>
        <p>
          Our agency specializes in creating tailored web solutions that align
          with your business goals, leveraging modern technologies to deliver
          robust, user-friendly, and scalable applications.
        </p>
        <div className="dev-services-grid">
          <div className="dev-service-card">
            <div className="dev-service-icon">🌐</div>
            <h3>Frontend Development</h3>
            <p>
              Crafting visually stunning and highly interactive user interfaces
              that enhance user experience and engagement across all devices.
            </p>
            <ul className="dev-service-list">
              <li>React.js Single-Page Applications</li>
              <li>Next.js for Server-Side Rendering</li>
              <li>Responsive and Adaptive UI/UX Design</li>
              <li>Interactive and Dynamic Web Applications</li>
              <li>State Management with Redux or Context API</li>
            </ul>
          </div>
          <div className="dev-service-card">
            <div className="dev-service-icon">🔧</div>
            <h3>Backend Development</h3>
            <p>
              Building secure, scalable, and efficient server-side solutions to
              power your applications and handle complex business logic.
            </p>
            <ul className="dev-service-list">
              <li>Node.js with Express for APIs</li>
              <li>RESTful and GraphQL API Development</li>
              <li>Database Design and Optimization</li>
              <li>Secure Authentication and Authorization Systems</li>
              <li>Microservices Architecture</li>
            </ul>
          </div>
          <div className="dev-service-card">
            <div className="dev-service-icon">🔄</div>
            <h3>Full Stack Solutions</h3>
            <p>
              Providing end-to-end development services, from frontend
              interfaces to backend infrastructure, ensuring seamless
              integration and performance.
            </p>
            <ul className="dev-service-list">
              <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
              <li>Complete End-to-End Development</li>
              <li>Third-Party API Integrations</li>
              <li>Cloud Deployment and DevOps Services</li>
              <li>Continuous Integration and Delivery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="dev-tech-stack-section">
        <h2>Our Advanced Technology Stack</h2>
        <p>
          Our agency leverages a robust set of tools and frameworks to deliver
          cutting-edge web solutions that meet modern industry standards and
          client expectations.
        </p>
        <div className="dev-tech-stack">
          <div className="dev-tech-category">
            <h3>Frontend Technologies</h3>
            <div className="dev-tech-items">
              <div className="dev-tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                />
                <span>React</span>
              </div>
              <div className="dev-tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                />
                <span>Next.js</span>
              </div>
              <div className="dev-tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  alt="Tailwind CSS"
                />
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>
          <div className="dev-tech-category">
            <h3>Backend Technologies</h3>
            <div className="dev-tech-items">
              <div className="dev-tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                />
                <span>Node.js</span>
              </div>
              <div className="dev-tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  alt="Express"
                />
                <span>Express</span>
              </div>
              <div className="dev-tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                />
                <span>MongoDB</span>
              </div>
            </div>
          </div>
          <div className="dev-tech-category">
            <h3>Development Tools & Libraries</h3>
            <div className="dev-tech-items">
              <div className="dev-tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                />
                <span>Git</span>
              </div>
              <div className="dev-tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                  alt="Redux"
                />
                <span>Redux</span>
              </div>
              <div className="dev-tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                  alt="Docker"
                />
                <span>Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="dev-process">
        <h2>Our Streamlined Development Process</h2>
        <p>
          Our agency follows a structured and collaborative approach to ensure
          projects are delivered on time, within budget, and to the highest
          quality standards, tailored to meet your unique business needs.
        </p>
        <div className="dev-process-timeline">
          <div className="dev-process-step">
            <div className="dev-step-number">1</div>
            <div className="dev-step-content">
              <h3>Requirement Analysis</h3>
              <p>
                Conducting in-depth consultations to thoroughly understand your
                business objectives, technical requirements, and target audience
                to lay a solid foundation for the project.
              </p>
            </div>
          </div>
          <div className="dev-process-step">
            <div className="dev-step-number">2</div>
            <div className="dev-step-content">
              <h3>Planning & Architecture</h3>
              <p>
                Designing a scalable system architecture, defining database
                schemas, and selecting the optimal technology stack to ensure
                long-term success and maintainability.
              </p>
            </div>
          </div>
          <div className="dev-process-step">
            <div className="dev-step-number">3</div>
            <div className="dev-step-content">
              <h3>Development Phase</h3>
              <p>
                Utilizing agile methodologies to develop the application,
                providing regular updates, iterative feedback, and milestone
                deliveries to keep the project on track.
              </p>
            </div>
          </div>
          <div className="dev-process-step">
            <div className="dev-step-number">4</div>
            <div className="dev-step-content">
              <h3>Testing & Deployment</h3>
              <p>
                Performing comprehensive testing, including unit, integration,
                and performance tests, followed by seamless deployment to a
                production environment with ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="dev-project-showcase" ref={featuresRef}>
        <h2>Our Development Approach</h2>
        <p>
          Our agency is committed to delivering high-quality, efficient, and
          secure web applications through a disciplined development process that
          prioritizes client satisfaction and technical excellence.
        </p>
        <div className="dev-feature">
          <div className="dev-feature-content">
            <h3>Clean, Maintainable Code</h3>
            <p>
              Our team adheres to industry best practices and coding standards
              to produce clean, well-documented, and modular code that is easy
              to maintain, extend, and scale as your business grows.
            </p>
            <ul className="dev-feature-list">
              <li>Modular and reusable component structures</li>
              <li>Comprehensive code documentation</li>
              <li>Consistent and standardized coding patterns</li>
              <li>Leveraging modern ES6+ JavaScript features</li>
              <li>Regular code reviews and refactoring</li>
            </ul>
          </div>
          <div className="dev-feature-image">
            <img src="/images/code-quality.jpg" alt="Code Quality" />
          </div>
        </div>
        <div className="dev-feature dev-reverse">
          <div className="dev-feature-content">
            <h3>Performance Optimization</h3>
            <p>
              Our applications are meticulously optimized to deliver
              lightning-fast performance and exceptional user experiences,
              ensuring your users stay engaged and satisfied.
            </p>
            <ul className="dev-feature-list">
              <li>Code splitting and lazy loading for faster load times</li>
              <li>Efficient data fetching and caching strategies</li>
              <li>Image optimization and compression techniques</li>
              <li>Bundle size reduction and minification</li>
              <li>Server-side rendering for improved SEO</li>
            </ul>
          </div>
          <div className="dev-feature-image">
            <img src="/images/performance.avif" alt="Performance" />
          </div>
        </div>
        <div className="dev-feature">
          <div className="dev-feature-content">
            <h3>Security First</h3>
            <p>
              Security is embedded into every layer of our development process
              to safeguard your application and protect sensitive user data from
              potential threats.
            </p>
            <ul className="dev-feature-list">
              <li>Robust data validation and sanitization</li>
              <li>Secure authentication and authorization protocols</li>
              <li>Role-based access control implementation</li>
              <li>Regular updates to dependencies and libraries</li>
              <li>Proactive vulnerability scanning and mitigation</li>
            </ul>
          </div>
          <div className="dev-feature-image">
            <img src="/images/security.jpg" alt="Security" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="dev-pricing-section">
        <h2>Our Development Packages</h2>
        <p>
          Our agency offers flexible pricing packages designed to meet the needs
          of businesses of all sizes, from startups to large enterprises, with
          transparent pricing and comprehensive support.
        </p>
        <div className="dev-pricing-cards">
          <div className="dev-pricing-card">
            <h3>Basic Development</h3>
            <div className="dev-price">$999+</div>
            <ul className="dev-features-list">
              <li>Professional small business website</li>
              <li>Up to 5 fully responsive pages</li>
              <li>Basic CMS integration for content management</li>
              <li>Custom contact form with validation</li>
              <li>1 month of post-launch support</li>
              <li>SEO optimization for better visibility</li>
            </ul>
            <button className="dev-pricing-cta">Request a Quote</button>
          </div>
          <div className="dev-pricing-card dev-recommended">
            <div className="dev-recommended-badge">Recommended</div>
            <h3>Web Application</h3>
            <div className="dev-price">$2,999+</div>
            <ul className="dev-features-list">
              <li>Custom-built web application</li>
              <li>Secure user authentication system</li>
              <li>Database integration and management</li>
              <li>Custom admin dashboard for analytics</li>
              <li>3 months of dedicated support</li>
              <li>RESTful API development and integration</li>
              <li>Basic performance optimization</li>
            </ul>
            <button className="dev-pricing-cta">Request a Quote</button>
          </div>
          <div className="dev-pricing-card">
            <h3>Enterprise Solution</h3>
            <div className="dev-price">$5,999+</div>
            <ul className="dev-features-list">
              <li>Complex, scalable web application</li>
              <li>Highly scalable cloud-based architecture</li>
              <li>Advanced feature development</li>
              <li>Seamless third-party integrations</li>
              <li>6 months of priority support</li>
              <li>Accelerated development timeline</li>
              <li>Custom DevOps and CI/CD pipelines</li>
            </ul>
            <button className="dev-pricing-cta">Request a Quote</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="dev-testimonials">
        <h2>Our Client Success Stories</h2>
        <p>
          Our agency takes pride in delivering transformative web solutions that
          drive measurable results for our clients, as evidenced by their
          feedback and success stories.
        </p>
        <div className="dev-testimonial-cards">
          <div className="dev-testimonial-card">
            <div className="dev-quote-icon">"</div>
            <p className="dev-testimonial-text">
              The agency delivered our e-commerce platform ahead of schedule
              with remarkable attention to detail. The React and Node.js
              architecture handles high traffic seamlessly, boosting our online
              sales significantly.
            </p>
            <div className="dev-client-info">
              <div className="dev-client-avatar"></div>
              <div className="dev-client-details">
                <h4>Alex Rodriguez</h4>
                <p>CTO, ShopNest</p>
              </div>
            </div>
          </div>
          <div className="dev-testimonial-card">
            <div className="dev-quote-icon">"</div>
            <p className="dev-testimonial-text">
              Our custom CRM system, built with MongoDB and Express,
              revolutionized our business operations. The agency's expertise
              saved us thousands in licensing fees compared to commercial
              software alternatives.
            </p>
            <div className="dev-client-info">
              <div className="dev-client-avatar"></div>
              <div className="dev-client-details">
                <h4>Sarah Johnson</h4>
                <p>CEO, BizSolutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="dev-final-cta">
        <h2>Ready to Build Your Next Web Application?</h2>
        <p>
          Partner with our agency to discuss your project requirements and
          create a tailored, high-performance web solution that drives your
          business forward and achieves your strategic goals.
        </p>
        <div className="dev-cta-buttons">
          <button className="dev-primary-cta">
            Schedule a Free Consultation
          </button>
          <button className="dev-secondary-cta">Explore Our Portfolio</button>
        </div>
      </section>
    </div>
  );
};

export default Webdevelopment;
