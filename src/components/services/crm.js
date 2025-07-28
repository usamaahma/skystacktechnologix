import React, { useEffect, useRef } from "react";
import "./crm.css";

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
            Transform your customer relationships with tailor-made CRM systems designed to streamline your business processes
          </p>
          <div className="cta-buttons">
            <button className="primary-cta">Get Your CRM Solution</button>
            <button className="secondary-cta">See CRM Demo</button>
          </div>
        </div>
        <div className="hero-image" ref={dashboardRef}>
          <div className="dashboard-mockup">
            <div className="browser-bar">
              <div className="browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="browser-title">YourBusiness CRM</div>
              <div className="browser-actions">
                <span className="material-icons">minimize</span>
                <span className="material-icons">crop_square</span>
                <span className="material-icons">close</span>
              </div>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-sidebar">
                <div className="sidebar-logo">CRM</div>
                <ul className="sidebar-menu">
                  <li className="active"><span className="material-icons">dashboard</span> Dashboard</li>
                  <li><span className="material-icons">contacts</span> Contacts</li>
                  <li><span className="material-icons">trending_up</span> Sales</li>
                  <li><span className="material-icons">task</span> Tasks</li>
                </ul>
              </div>
              <div className="dashboard-main">
                <div className="dashboard-header">
                  <h2>Customer Dashboard</h2>
                  <div className="header-actions">
                    <span className="material-icons">search</span>
                    <span className="material-icons">notifications</span>
                    <span className="user-avatar">JD</span>
                  </div>
                </div>
                <div className="dashboard-grid">
                  <div className="stats-card">
                    <h3>Total Customers</h3>
                    <p className="stat-value">2,450</p>
                    <p className="stat-change positive">+12% this month</p>
                  </div>
                  <div className="stats-card">
                    <h3>Monthly Revenue</h3>
                    <p className="stat-value">$45,320</p>
                    <p className="stat-change positive">+8% this month</p>
                  </div>
                  <div className="pie-chart">
                    <h3>Sales by Region</h3>
                    <div className="chart-placeholder">
                      <div className="chart-segment segment1"></div>
                      <div className="chart-segment segment2"></div>
                      <div className="chart-segment segment3"></div>
                    </div>
                    <div className="chart-legend">
                      <div><span className="legend-dot segment1"></span> North America</div>
                      <div><span className="legend-dot segment2"></span> Europe</div>
                      <div><span className="legend-dot segment3"></span> Asia</div>
                    </div>
                  </div>
                  <div className="recent-contacts">
                    <h3>Recent Contacts</h3>
                    <ul>
                      <li>
                        <span className="contact-avatar">JD</span>
                        <div>
                          <span className="contact-name">John Doe</span>
                          <span className="contact-status">Lead</span>
                        </div>
                      </li>
                      <li>
                        <span className="contact-avatar">JS</span>
                        <div>
                          <span className="contact-name">Jane Smith</span>
                          <span className="contact-status">Customer</span>
                        </div>
                      </li>
                      <li>
                        <span className="contact-avatar">AB</span>
                        <div>
                          <span className="contact-name">Alex Brown</span>
                          <span className="contact-status">Prospect</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="activity-feed">
                    <h3>Recent Activity</h3>
                    <ul>
                      <li><span className="material-icons">email</span> Email sent to John Doe</li>
                      <li><span className="material-icons">swap_horiz</span> Deal moved to "Negotiation"</li>
                      <li><span className="material-icons">person_add</span> New contact added: Jane Smith</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="crm-benefits">
        <h2>Why Invest in a Custom CRM?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">📈</div>
            <h3>Sales Growth</h3>
            <p>Increase conversion rates with organized lead tracking and automated follow-ups</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">⏱️</div>
            <h3>Time Savings</h3>
            <p>Automate repetitive tasks and reduce manual data entry by up to 70%</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">👥</div>
            <h3>Team Collaboration</h3>
            <p>Centralize customer data for seamless team communication</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">📊</div>
            <h3>Data Insights</h3>
            <p>Make informed decisions with real-time analytics and reporting</p>
          </div>
        </div>
      </section>

      {/* CRM Features */}
      <section className="crm-features">
        <h2>Powerful CRM Features I Develop</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Contact Management</h3>
            <ul>
              <li>Centralized customer database</li>
              <li>Detailed contact profiles</li>
              <li>Interaction history tracking</li>
              <li>Tagging and segmentation</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Sales Pipeline</h3>
            <ul>
              <li>Visual deal tracking</li>
              <li>Stage progression</li>
              <li>Win/loss analysis</li>
              <li>Forecasting tools</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Task Automation</h3>
            <ul>
              <li>Workflow automation</li>
              <li>Email sequences</li>
              <li>Reminder systems</li>
              <li>Trigger-based actions</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Reporting Dashboard</h3>
            <ul>
              <li>Customizable reports</li>
              <li>Real-time analytics</li>
              <li>Performance metrics</li>
              <li>Data visualization</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Integration Capabilities</h3>
            <ul>
              <li>Email platform integration</li>
              <li>Calendar synchronization</li>
              <li>Payment system connections</li>
              <li>API access</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Mobile Access</h3>
            <ul>
              <li>Responsive web interface</li>
              <li>Native mobile apps</li>
              <li>Offline functionality</li>
              <li>Push notifications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="crm-tech-stack">
        <h2>CRM Development Technology Stack</h2>
        <div className="tech-stack">
          <div className="tech-column">
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" />
                <span>Redux</span>
              </div>
            </div>
          </div>
          <div className="tech-column">
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
          <div className="tech-column">
            <h3>Additional Tools</h3>
            <div className="tech-items">
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />
                <span>Firebase</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
                <span>Docker</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" />
                <span>AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="crm-approach" ref={featuresRef}>
        <h2>My CRM Development Approach</h2>
        <div className="approach-features">
          <div className="feature">
            <div className="feature-content">
              <h3>Business Process Analysis</h3>
              <p>
                I start by thoroughly understanding your unique business workflows to design a CRM that fits like a glove.
              </p>
              <ul className="feature-list">
                <li>Detailed requirements gathering</li>
                <li>Workflow mapping</li>
                <li>Pain point identification</li>
                <li>Customization planning</li>
              </ul>
            </div>
            <div className="feature-image analysis"></div>
          </div>
          <div className="feature reverse">
            <div className="feature-content">
              <h3>Modular Architecture</h3>
              <p>
                Built with scalable architecture that grows with your business needs.
              </p>
              <ul className="feature-list">
                <li>Component-based design</li>
                <li>Microservices ready</li>
                <li>API-first approach</li>
                <li>Easy feature additions</li>
              </ul>
            </div>
            <div className="feature-image architecture"></div>
          </div>
          <div className="feature">
            <div className="feature-content">
              <h3>User-Centric Design</h3>
              <p>
                Intuitive interfaces that your team will actually enjoy using.
              </p>
              <ul className="feature-list">
                <li>Role-based dashboards</li>
                <li>Minimal clicks workflow</li>
                <li>Contextual help systems</li>
                <li>Accessibility compliant</li>
              </ul>
            </div>
            <div className="feature-image design"></div>
          </div>
        </div>
      </section>

      {/* CRM Types */}
      <section className="crm-types">
        <h2>Types of CRM Systems I Build</h2>
        <div className="types-grid">
          <div className="type-card">
            <h3>Operational CRM</h3>
            <p>
              Streamline customer-facing processes with automation for marketing,
              sales, and service departments.
            </p>
            <ul>
              <li>Sales force automation</li>
              <li>Marketing automation</li>
              <li>Service automation</li>
            </ul>
          </div>
          <div className="type-card">
            <h3>Analytical CRM</h3>
            <p>
              Leverage customer data to gain business insights and improve decision making.
            </p>
            <ul>
              <li>Data mining tools</li>
              <li>Customer segmentation</li>
              <li>Predictive analytics</li>
            </ul>
          </div>
          <div className="type-card">
            <h3>Collaborative CRM</h3>
            <p>
              Break down silos and improve customer interactions across departments.
            </p>
            <ul>
              <li>Interaction management</li>
              <li>Channel synchronization</li>
              <li>Knowledge sharing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="crm-pricing">
        <h2>CRM Development Packages</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Basic CRM</h3>
            <div className="price">$3,999+</div>
            <ul className="features-list">
              <li>Contact management</li>
              <li>Basic sales pipeline</li>
              <li>Email integration</li>
              <li>Standard reporting</li>
              <li>1 month support</li>
            </ul>
            <button className="pricing-cta">Get Quote</button>
          </div>
          <div className="pricing-card recommended">
            <div className="recommended-badge">Most Popular</div>
            <h3>Business CRM</h3>
            <div className="price">$7,999+</div>
            <ul className="features-list">
              <li>Advanced contact management</li>
              <li>Custom sales pipelines</li>
              <li>Workflow automation</li>
              <li>Advanced analytics</li>
              <li>API access</li>
              <li>3 months support</li>
            </ul>
            <button className="pricing-cta">Get Quote</button>
          </div>
          <div className="pricing-card">
            <h3>Enterprise CRM</h3>
            <div className="price">$14,999+</div>
            <ul className="features-list">
              <li>Custom modules</li>
              <li>Multi-team access</li>
              <li>AI-powered insights</li>
              <li>Mobile applications</li>
              <li>Third-party integrations</li>
              <li>6 months support</li>
            </ul>
            <button className="pricing-cta">Get Quote</button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="crm-case-studies">
        <h2>CRM Success Stories</h2>
        <div className="case-studies-grid">
          <div className="case-study">
            <div className="study-image sales"></div>
            <div className="study-content">
              <h3>Sales Team Transformation</h3>
              <p>
                A custom sales CRM increased lead conversion by 45% and reduced
                administrative work by 30 hours per week for a 20-person sales team.
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
              </div>
            </div>
          </div>
          <div className="case-study">
            <div className="study-image support"></div>
            <div className="study-content">
              <h3>Customer Support Revolution</h3>
              <p>
                A support-focused CRM reduced response times from 24 hours to
                2 hours while improving customer satisfaction scores by 35%.
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="crm-final-cta">
        <h2>Ready to Transform Your Customer Relationships?</h2>
        <p>
          Let's build a CRM solution tailored to your unique business needs that will
          drive growth and efficiency.
        </p>
        <div className="cta-buttons">
          <button className="primary-cta">Get Free Consultation</button>
          <button className="secondary-cta">See More Case Studies</button>
        </div>
      </section>
    </div>
  );
};

export default CRM;