import React, { useEffect, useRef } from "react";
import "./crm.css";
import { Link } from "react-router-dom";

const CRM = () => {
  const featuresRef = useRef(null);
  const dashboardRef = useRef(null);

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

    // Animation for dashboard mockup
    const dashboardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-dashboard");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (dashboardRef.current) {
      dashboardObserver.observe(dashboardRef.current);
    }

    return () => {
      featureObserver.disconnect();
      dashboardObserver.disconnect();
    };
  }, []);

  return (
    <div className="crm-service">
      {/* Hero Section */}
      <section className="crm-hero">
        <div className="hero-content">
          <h1>Custom CRM Development Solutions</h1>
          <p className="hero-subtitle">
            Transform your customer relationships with tailor-made CRM systems
            designed to streamline your business processes
          </p>
          <div className="cta-buttons">
            <Link to="/contactus">
              {" "}
              <button className="primary-cta">Get Your CRM Solution</button>
            </Link>
            <Link to="/portfolio">
              {" "}
              <button className="secondary-cta">See CRM Demo</button>
            </Link>
          </div>
          <div className="trust-badges">
            <div className="badge">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732228.png"
                alt="Microsoft Partner"
                width="40"
                height="40"
              />
              <span>Microsoft Partner</span>
            </div>
            <div className="badge">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6132/6132221.png"
                alt="Google Cloud Partner"
                width="40"
                height="40"
              />
              <span>Google Cloud Partner</span>
            </div>
          </div>
        </div>
        <div className="hero-image" ref={dashboardRef}>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="CRM Dashboard"
            className="dashboard-image"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="crm-benefits">
        <h2>Why Invest in a Custom CRM?</h2>
        <p className="section-intro">
          Businesses using custom CRM solutions see an average of{" "}
          <strong>34% increase in sales productivity</strong> and{" "}
          <strong>42% improvement in customer retention</strong>.
        </p>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3126/3126642.png"
                alt="Sales Growth"
                width="60"
                height="60"
              />
            </div>
            <h3>Sales Growth</h3>
            <p>
              Increase conversion rates by up to 45% with organized lead
              tracking and automated follow-ups
            </p>
            <div className="benefit-stats">
              <div className="stat-item">
                <span className="stat-value">45%</span>
                <span className="stat-label">Higher Conversions</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">29%</span>
                <span className="stat-label">Shorter Sales Cycle</span>
              </div>
            </div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3443/3443412.png"
                alt="Time Savings"
                width="60"
                height="60"
              />
            </div>
            <h3>Time Savings</h3>
            <p>
              Automate repetitive tasks and reduce manual data entry by up to
              70%
            </p>
            <div className="benefit-stats">
              <div className="stat-item">
                <span className="stat-value">70%</span>
                <span className="stat-label">Less Data Entry</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">15h</span>
                <span className="stat-label">Weekly Time Saved</span>
              </div>
            </div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3281/3281289.png"
                alt="Team Collaboration"
                width="60"
                height="60"
              />
            </div>
            <h3>Team Collaboration</h3>
            <p>
              Centralize customer data for seamless team communication and 360°
              customer view
            </p>
            <div className="benefit-stats">
              <div className="stat-item">
                <span className="stat-value">3.5x</span>
                <span className="stat-label">Faster Response</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">92%</span>
                <span className="stat-label">Team Alignment</span>
              </div>
            </div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"
                alt="Data Insights"
                width="60"
                height="60"
              />
            </div>
            <h3>Data Insights</h3>
            <p>
              Make informed decisions with real-time analytics and AI-powered
              reporting
            </p>
            <div className="benefit-stats">
              <div className="stat-item">
                <span className="stat-value">87%</span>
                <span className="stat-label">Better Decisions</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">2.3x</span>
                <span className="stat-label">ROI Increase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Features */}
      <section className="crm-features">
        <h2>Powerful CRM Features I Develop</h2>
        <p className="section-intro">
          Our custom CRM solutions include all these essential features and can
          be tailored to your specific business needs.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                alt="Contact Management"
                width="50"
                height="50"
              />
            </div>
            <h3>Contact Management</h3>
            <ul>
              <li>Centralized customer database with unlimited contacts</li>
              <li>Detailed contact profiles with interaction history</li>
              <li>Advanced tagging and segmentation</li>
              <li>Relationship mapping</li>
              <li>Duplicate detection</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3069/3069172.png"
                alt="Sales Pipeline"
                width="50"
                height="50"
              />
            </div>
            <h3>Sales Pipeline</h3>
            <ul>
              <li>Customizable deal stages</li>
              <li>Drag-and-drop pipeline management</li>
              <li>Win/loss analysis with AI insights</li>
              <li>Automated forecasting tools</li>
              <li>Commission tracking</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2620/2620971.png"
                alt="Task Automation"
                width="50"
                height="50"
              />
            </div>
            <h3>Task Automation</h3>
            <ul>
              <li>Custom workflow automation</li>
              <li>Email sequences and templates</li>
              <li>Smart reminder systems</li>
              <li>Trigger-based actions</li>
              <li>Zapier integration</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3132/3132739.png"
                alt="Reporting Dashboard"
                width="50"
                height="50"
              />
            </div>
            <h3>Reporting Dashboard</h3>
            <ul>
              <li>100+ pre-built reports</li>
              <li>Custom report builder</li>
              <li>Real-time analytics</li>
              <li>Executive dashboards</li>
              <li>Automated report distribution</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1086/1086741.png"
                alt="Integration Capabilities"
                width="50"
                height="50"
              />
            </div>
            <h3>Integration Capabilities</h3>
            <ul>
              <li>Email (Gmail, Outlook)</li>
              <li>Calendar (Google, Office 365)</li>
              <li>Payment systems (Stripe, PayPal)</li>
              <li>Marketing automation</li>
              <li>Custom API development</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
                alt="Mobile Access"
                width="50"
                height="50"
              />
            </div>
            <h3>Mobile Access</h3>
            <ul>
              <li>Fully responsive web interface</li>
              <li>iOS and Android native apps</li>
              <li>Offline functionality</li>
              <li>Push notifications</li>
              <li>Mobile signature capture</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="crm-tech-stack">
        <h2>CRM Development Technology Stack</h2>
        <p className="section-intro">
          We use modern, scalable technologies to build CRM solutions that grow
          with your business.
        </p>
        <div className="tech-stack">
          <div className="tech-column">
            <h3>Frontend</h3>
            <div className="tech-items">
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  width="50"
                  height="50"
                />
                <span>React</span>
                <p className="tech-desc">
                  Interactive UIs with reusable components
                </p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  width="50"
                  height="50"
                />
                <span>Next.js</span>
                <p className="tech-desc">
                  Server-side rendering for performance
                </p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  width="50"
                  height="50"
                />
                <span>TypeScript</span>
                <p className="tech-desc">Type-safe JavaScript development</p>
              </div>
            </div>
          </div>
          <div className="tech-column">
            <h3>Backend</h3>
            <div className="tech-items">
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                  width="50"
                  height="50"
                />
                <span>Node.js</span>
                <p className="tech-desc">Scalable server-side JavaScript</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  alt="Express"
                  width="50"
                  height="50"
                />
                <span>Express</span>
                <p className="tech-desc">Fast backend API framework</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                  width="50"
                  height="50"
                />
                <span>MongoDB</span>
                <p className="tech-desc">Flexible NoSQL database</p>
              </div>
            </div>
          </div>
          <div className="tech-column">
            <h3>Additional Tools</h3>
            <div className="tech-items">
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                  alt="Firebase"
                  width="50"
                  height="50"
                />
                <span>Firebase</span>
                <p className="tech-desc">Real-time database and auth</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                  alt="Docker"
                  width="50"
                  height="50"
                />
                <span>Docker</span>
                <p className="tech-desc">Containerized deployment</p>
              </div>
              <div className="tech-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                  alt="AWS"
                  width="50"
                  height="50"
                />
                <span>AWS</span>
                <p className="tech-desc">Cloud hosting and services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="crm-approach" ref={featuresRef}>
        <h2>Our CRM Development Approach</h2>
        <p className="section-intro">
          Our proven 4-phase methodology ensures your CRM delivers maximum
          business value.
        </p>
        <div className="approach-features">
          <div className="feature">
            <div className="feature-content">
              <h3>Business Process Analysis</h3>
              <p>
                We start by thoroughly understanding your unique business
                workflows to design a CRM that fits like a glove.
              </p>
              <ul className="feature-list">
                <li>Detailed requirements gathering sessions</li>
                <li>Current workflow mapping and optimization</li>
                <li>Pain point identification and solution design</li>
                <li>Customization planning for future growth</li>
              </ul>
              <div className="feature-stats">
                <div className="stat-item">
                  <span className="stat-value">87%</span>
                  <span className="stat-label">
                    of clients say our discovery process uncovers hidden
                    opportunities
                  </span>
                </div>
              </div>
            </div>
            <div className="feature-image">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Business Analysis"
              />
            </div>
          </div>
          <div className="feature reverse">
            <div className="feature-content">
              <h3>Modular Architecture</h3>
              <p>
                We build with scalable architecture that grows with your
                business needs.
              </p>
              <ul className="feature-list">
                <li>Component-based design for flexibility</li>
                <li>Microservices ready architecture</li>
                <li>API-first approach for integrations</li>
                <li>Easy feature additions without disruption</li>
              </ul>
              <div className="feature-stats">
                <div className="stat-item">
                  <span className="stat-value">3.5x</span>
                  <span className="stat-label">
                    faster feature additions with our modular approach
                  </span>
                </div>
              </div>
            </div>
            <div className="feature-image">
              <img
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Modular Architecture"
              />
            </div>
          </div>
          <div className="feature">
            <div className="feature-content">
              <h3>User-Centric Design</h3>
              <p>
                We create intuitive interfaces that your team will actually
                enjoy using.
              </p>
              <ul className="feature-list">
                <li>Role-based dashboards for different users</li>
                <li>Minimal clicks workflow design</li>
                <li>Contextual help systems and tooltips</li>
                <li>WCAG 2.1 AA accessibility compliant</li>
              </ul>
              <div className="feature-stats">
                <div className="stat-item">
                  <span className="stat-value">92%</span>
                  <span className="stat-label">
                    user adoption rate with our intuitive designs
                  </span>
                </div>
              </div>
            </div>
            <div className="feature-image">
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="User-Centric Design"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CRM Types */}
      <section className="crm-types">
        <h2>Types of CRM Systems We Build</h2>
        <p className="section-intro">
          Different business needs require different CRM approaches. We
          specialize in all three main types.
        </p>
        <div className="types-grid">
          <div className="type-card">
            <div className="type-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3281/3281289.png"
                alt="Operational CRM"
                width="50"
                height="50"
              />
            </div>
            <h3>Operational CRM</h3>
            <p>
              Streamline customer-facing processes with automation for
              marketing, sales, and service departments.
            </p>
            <ul>
              <li>Sales force automation (SFA)</li>
              <li>Marketing automation</li>
              <li>Service automation</li>
              <li>Case management</li>
              <li>Omnichannel support</li>
            </ul>
            <div className="type-stats">
              <div className="stat-item">
                <span className="stat-value">45%</span>
                <span className="stat-label">average efficiency gain</span>
              </div>
            </div>
          </div>
          <div className="type-card">
            <div className="type-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"
                alt="Analytical CRM"
                width="50"
                height="50"
              />
            </div>
            <h3>Analytical CRM</h3>
            <p>
              Leverage customer data to gain business insights and improve
              decision making.
            </p>
            <ul>
              <li>Advanced data mining tools</li>
              <li>Customer segmentation</li>
              <li>Predictive analytics</li>
              <li>AI-powered recommendations</li>
              <li>Customer lifetime value analysis</li>
            </ul>
            <div className="type-stats">
              <div className="stat-item">
                <span className="stat-value">2.8x</span>
                <span className="stat-label">better customer insights</span>
              </div>
            </div>
          </div>
          <div className="type-card">
            <div className="type-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3281/3281289.png"
                alt="Collaborative CRM"
                width="50"
                height="50"
              />
            </div>
            <h3>Collaborative CRM</h3>
            <p>
              Break down silos and improve customer interactions across
              departments.
            </p>
            <ul>
              <li>Interaction management</li>
              <li>Channel synchronization</li>
              <li>Knowledge sharing</li>
              <li>Customer communication history</li>
              <li>Team collaboration tools</li>
            </ul>
            <div className="type-stats">
              <div className="stat-item">
                <span className="stat-value">67%</span>
                <span className="stat-label">improved team alignment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="crm-pricing">
        <h2>CRM Development Packages</h2>
        <p className="section-intro">
          Flexible pricing options to fit businesses of all sizes. All packages
          include:
        </p>
        <div className="included-features">
          <span>Free consultation</span>
          <span>Dedicated project manager</span>
          <span>Training sessions</span>
          <span>Documentation</span>
          <span>Security audit</span>
        </div>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Basic CRM</h3>
            <div className="price">$3,999+</div>
            <p className="price-desc">
              Perfect for small businesses getting started
            </p>
            <ul className="features-list">
              <li>Contact management system</li>
              <li>Basic sales pipeline</li>
              <li>Email integration</li>
              <li>Standard reporting</li>
              <li>1 month support</li>
              <li>Up to 5 users</li>
            </ul>
            <Link to="/contactus">
              {" "}
              <button className="pricing-cta">Get Quote</button>
            </Link>
          </div>
          <div className="pricing-card recommended">
            <div className="recommended-badge">Most Popular</div>
            <h3>Business CRM</h3>
            <div className="price">$7,999+</div>
            <p className="price-desc">
              For growing businesses needing more power
            </p>
            <ul className="features-list">
              <li>Advanced contact management</li>
              <li>Custom sales pipelines</li>
              <li>Workflow automation</li>
              <li>Advanced analytics</li>
              <li>API access</li>
              <li>3 months support</li>
              <li>Up to 20 users</li>
            </ul>
            <Link to="/contactus">
              {" "}
              <button className="pricing-cta">Get Quote</button>
            </Link>
          </div>
          <div className="pricing-card">
            <h3>Enterprise CRM</h3>
            <div className="price">$14,999+</div>
            <p className="price-desc">
              For large organizations with complex needs
            </p>
            <ul className="features-list">
              <li>Custom modules and features</li>
              <li>Multi-team access with permissions</li>
              <li>AI-powered insights</li>
              <li>Mobile applications</li>
              <li>Third-party integrations</li>
              <li>6 months support</li>
              <li>Unlimited users</li>
            </ul>
            <Link to="/contactus">
              <button className="pricing-cta">Get Quote</button>
            </Link>
          </div>
        </div>
        <div className="custom-solution">
          <h3>Need something custom?</h3>
          <p>
            We can build a completely bespoke CRM solution tailored to your
            exact requirements.
          </p>
          <button className="secondary-cta">Request Custom Solution</button>
        </div>
      </section>

      {/* Case Studies */}
      <section className="crm-case-studies">
        <h2>CRM Success Stories</h2>
        <p className="section-intro">
          See how our custom CRM solutions have transformed businesses across
          industries.
        </p>
        <div className="case-studies-grid">
          <div className="case-study">
            <div className="study-image">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Sales Team Transformation"
              />
            </div>
            <div className="study-content">
              <h3>Sales Team Transformation</h3>
              <p>
                A custom sales CRM increased lead conversion by 45% and reduced
                administrative work by 30 hours per week for a 20-person sales
                team.
              </p>
              <div className="study-stats">
                <div className="stat">
                  <div className="stat-value">45%</div>
                  <div className="stat-label">Increase in conversions</div>
                </div>
                <div className="stat">
                  <div className="stat-value">30h</div>
                  <div className="stat-label">Weekly time saved</div>
                </div>
                <div className="stat">
                  <div className="stat-value">2.5x</div>
                  <div className="stat-label">ROI in first year</div>
                </div>
              </div>
              <div className="client-quote">
                <p>
                  "The custom CRM transformed our sales process, giving us
                  visibility we never had before."
                </p>
                <div className="client-info">
                  <div className="client-avatar">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Michael Tan"
                    />
                  </div>
                  <div className="client-details">
                    <h4>Michael Tan</h4>
                    <p>Sales Director, TechSolutions Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="case-study">
            <div className="study-image">
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Customer Support Revolution"
              />
            </div>
            <div className="study-content">
              <h3>Customer Support Revolution</h3>
              <p>
                A support-focused CRM reduced response times from 24 hours to 2
                hours while improving customer satisfaction scores by 35%.
              </p>
              <div className="study-stats">
                <div className="stat">
                  <div className="stat-value">92%</div>
                  <div className="stat-label">Issues resolved faster</div>
                </div>
                <div className="stat">
                  <div className="stat-value">35%</div>
                  <div className="stat-label">CSAT improvement</div>
                </div>
                <div className="stat">
                  <div className="stat-value">40%</div>
                  <div className="stat-label">Reduced support costs</div>
                </div>
              </div>
              <div className="client-quote">
                <p>
                  "Our customer satisfaction scores have never been higher
                  thanks to the new CRM system."
                </p>
                <div className="client-info">
                  <div className="client-avatar">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Sarah Johnson"
                    />
                  </div>
                  <div className="client-details">
                    <h4>Sarah Johnson</h4>
                    <p>Customer Service Manager, HelpFirst</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="crm-final-cta">
        <h2>Ready to Transform Your Customer Relationships?</h2>
        <p>
          Let's build a CRM solution tailored to your unique business needs that
          will drive growth and efficiency.
        </p>
        <div className="cta-buttons">
          <Link to="/contactus">
            <button className="primary-cta">Get Free Consultation</button>
          </Link>
          <Link to="/portfolio">
            {" "}
            <button className="secondary-cta">See More Case Studies</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CRM;
