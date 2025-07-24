import React, { useEffect, useRef } from "react";
import "./mobileapp.css";

const MobileApp = () => {
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
    <div className="mobileapp-service">
      {/* Hero Section */}
      <section className="app-hero">
        <div className="hero-content">
          <h1>Premium Mobile App Development</h1>
          <p className="hero-subtitle">
            High-performance cross-platform and native mobile apps that deliver
            exceptional user experiences
          </p>
          <div className="cta-buttons">
            <button className="primary-cta">Start Your App Project</button>
            <button className="secondary-cta">See App Portfolio</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="app-interface"></div>
              </div>
            </div>
            <div className="phone-frame android">
              <div className="phone-screen">
                <div className="app-interface"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="services-offered">
        <h2>My Mobile App Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Cross-Platform Apps</h3>
            <ul>
              <li>React Native Development</li>
              <li>Single codebase for iOS & Android</li>
              <li>Native-like performance</li>
              <li>Cost-effective solution</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">🤖</div>
            <h3>Native Android Apps</h3>
            <ul>
              <li>Kotlin/Java Development</li>
              <li>Android Studio expertise</li>
              <li>Full hardware access</li>
              <li>Play Store optimization</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="service-icon">🔄</div>
            <h3>App Maintenance</h3>
            <ul>
              <li>Bug fixes & updates</li>
              <li>Performance optimization</li>
              <li>Feature enhancements</li>
              <li>API integration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack-section">
        <h2>My Mobile Development Stack</h2>
        <div className="tech-stack">
          <div className="tech-category">
            <h3>Cross-Platform</h3>
            <div className="tech-items">
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React Native"
                />
                <span>React Native</span>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                />
                <span>JavaScript</span>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                />
                <span>TypeScript</span>
              </div>
            </div>
          </div>
          <div className="tech-category">
            <h3>Native Android</h3>
            <div className="tech-items">
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
                  alt="Android"
                />
                <span>Android</span>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
                  alt="Kotlin"
                />
                <span>Kotlin</span>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  alt="Java"
                />
                <span>Java</span>
              </div>
            </div>
          </div>
          <div className="tech-category">
            <h3>Tools & Backend</h3>
            <div className="tech-items">
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                  alt="Firebase"
                />
                <span>Firebase</span>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                  alt="Redux"
                />
                <span>Redux</span>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                />
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="dev-process">
        <h2>My App Development Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Discovery & Planning</h3>
              <p>
                Requirements gathering, feature planning, and technical
                architecture design.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>UI/UX Design</h3>
              <p>
                Creating intuitive user interfaces and smooth user experiences.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Development</h3>
              <p>
                Agile development with sprints and regular progress updates.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Testing & Deployment</h3>
              <p>
                Rigorous testing across devices followed by app store
                deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="features-showcase" ref={featuresRef}>
        <h2>Why Choose My App Development</h2>
        <div className="feature">
          <div className="feature-content">
            <h3>Cross-Platform Expertise</h3>
            <p>
              Build once, run anywhere. My React Native expertise delivers
              native-like performance across iOS and Android with a single
              codebase.
            </p>
            <ul className="feature-list">
              <li>90% code reuse between platforms</li>
              <li>Native module integration when needed</li>
              <li>Optimized for both platforms' guidelines</li>
              <li>Faster development cycle</li>
            </ul>
          </div>
          <div className="feature-image cross-platform"></div>
        </div>
        <div className="feature reverse">
          <div className="feature-content">
            <h3>Native Android Development</h3>
            <p>
              For apps requiring full hardware access or complex functionality,
              I develop native Android apps with Kotlin and Java.
            </p>
            <ul className="feature-list">
              <li>Android Studio expertise</li>
              <li>Full hardware capabilities</li>
              <li>Play Store optimization</li>
              <li>Material Design implementation</li>
            </ul>
          </div>
          <div className="feature-image native-android"></div>
        </div>
        <div className="feature">
          <div className="feature-content">
            <h3>Backend Integration</h3>
            <p>
              Seamless integration with backend services, APIs, and databases
              for fully functional mobile applications.
            </p>
            <ul className="feature-list">
              <li>RESTful API integration</li>
              <li>Firebase services</li>
              <li>Real-time databases</li>
              <li>Authentication systems</li>
            </ul>
          </div>
          <div className="feature-image backend"></div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section">
        <h2>App Development Packages</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Basic App</h3>
            <div className="price">$1,499+</div>
            <ul className="features-list">
              <li>Simple React Native app</li>
              <li>Up to 5 screens</li>
              <li>Basic UI components</li>
              <li>1 platform (iOS or Android)</li>
              <li>1 month support</li>
            </ul>
            <button className="pricing-cta">Get Quote</button>
          </div>
          <div className="pricing-card recommended">
            <div className="recommended-badge">Most Popular</div>
            <h3>Business App</h3>
            <div className="price">$3,999+</div>
            <ul className="features-list">
              <li>Cross-platform app</li>
              <li>Custom UI/UX design</li>
              <li>API integration</li>
              <li>State management</li>
              <li>3 months support</li>
              <li>App store deployment</li>
            </ul>
            <button className="pricing-cta">Get Quote</button>
          </div>
          <div className="pricing-card">
            <h3>Enterprise Solution</h3>
            <div className="price">$7,999+</div>
            <ul className="features-list">
              <li>Native or cross-platform</li>
              <li>Complex functionality</li>
              <li>Backend integration</li>
              <li>Advanced security</li>
              <li>6 months support</li>
              <li>Priority development</li>
            </ul>
            <button className="pricing-cta">Get Quote</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="app-testimonials">
        <h2>Client App Success Stories</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              Our React Native app was delivered 30% faster than estimated and
              performs flawlessly on both iOS and Android. The developer's
              expertise saved us thousands in development costs.
            </p>
            <div className="client-info">
              <div className="client-avatar"></div>
              <div className="client-details">
                <h4>Michael Tan</h4>
                <p>CEO, DeliveryExpress</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              The native Android app developed with Kotlin exceeded our
              performance expectations. The attention to Material Design
              guidelines and smooth animations made our product stand out.
            </p>
            <div className="client-info">
              <div className="client-avatar"></div>
              <div className="client-details">
                <h4>Sarah Johnson</h4>
                <p>Product Manager, HealthTrack</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="app-final-cta">
        <h2>Ready to Build Your Mobile App?</h2>
        <p>
          Let's discuss your app idea and create a solution that engages your
          users and grows your business.
        </p>
        <div className="cta-buttons">
          <button className="primary-cta">Get Free Consultation</button>
          <button className="secondary-cta">View App Portfolio</button>
        </div>
      </section>
    </div>
  );
};

export default MobileApp;
