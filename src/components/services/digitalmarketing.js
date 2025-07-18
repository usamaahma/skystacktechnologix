import React, { useEffect } from "react";
import "./digitalmarketing.css";

const DigitalMarketing = () => {
  useEffect(() => {
    // Simple animation for stats counting
    const animateStats = () => {
      const stats = document.querySelectorAll('.stat-number');
      stats.forEach(stat => {
        const target = +stat.getAttribute('data-target');
        const count = +stat.innerText;
        const increment = target / 50;
        if (count < target) {
          stat.innerText = Math.ceil(count + increment);
          setTimeout(animateStats, 20);
        } else {
          stat.innerText = target;
        }
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.results-section');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="digital-marketing">
      {/* Hero Section */}
      <section className="marketing-hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              <span className="highlight">Results-Driven</span> Digital Marketing
            </h1>
            <p className="hero-subtitle">
              Data-backed strategies that increase your online visibility, attract quality leads, 
              and drive sustainable business growth
            </p>
            <div className="cta-buttons">
              <button className="primary-cta">
                Get Free Audit
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="secondary-cta">View Case Studies</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="analytics-dashboard">
              <div className="dashboard-header">
                <h3>Marketing Performance</h3>
                <div className="growth-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 6L13.5 15.5L8.5 10.5L1 18M23 6H15M23 6V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  +78% ROI
                </div>
              </div>
              <div className="metric-bars">
                <div className="bar" style={{ height: '60%', backgroundColor: '#1E3A8A' }}></div>
                <div className="bar" style={{ height: '80%', backgroundColor: '#2563EB' }}></div>
                <div className="bar" style={{ height: '45%', backgroundColor: '#1E3A8A' }}></div>
                <div className="bar" style={{ height: '90%', backgroundColor: '#2563EB' }}></div>
                <div className="bar" style={{ height: '70%', backgroundColor: '#1E3A8A' }}></div>
              </div>
              <div className="metric-cards">
                <div className="metric-card">
                  <div className="metric-value">4.8x</div>
                  <div className="metric-label">Traffic Growth</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value">63%</div>
                  <div className="metric-label">Lead Increase</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value">2.3x</div>
                  <div className="metric-label">Conversion Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="services-section">
        <div className="section-header">
          <h2>Digital Marketing Services</h2>
          <p className="section-subtitle">
            Custom strategies tailored to your business goals
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: '#1E3A8A' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.828 10.172C12.266 8.61 9.734 8.61 8.172 10.172L4.343 14C1.22 17.123 1.22 22.077 4.343 25.2C7.466 28.323 12.42 28.323 15.543 25.2L19.371 21.372" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.172 13.828C11.734 15.39 14.266 15.39 15.828 13.828L19.657 10C22.78 6.877 22.78 1.923 19.657 -1.2C16.534 -4.323 11.58 -4.323 8.457 -1.2L4.629 2.628" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>SEO Optimization</h3>
            <p>
              Improve your search rankings and organic traffic with comprehensive SEO strategies.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: '#2563EB' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>PPC Advertising</h3>
            <p>
              Drive immediate, qualified traffic with precisely targeted pay-per-click campaigns.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: '#1E3A8A' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8C6 12.5 12 19 12 19C12 19 18 12.5 18 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Social Media Marketing</h3>
            <p>
              Build brand awareness and engagement through strategic social media presence.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: '#2563EB' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Content Marketing</h3>
            <p>
              Attract and retain customers through valuable, relevant content.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: '#1E3A8A' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Email Marketing</h3>
            <p>
              Nurture leads and boost conversions with automated email sequences.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon" style={{ backgroundColor: '#2563EB' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21H3V3H11V5H5V19H19V13H21V21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 10H17V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 15L21 10L16 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Marketing Analytics</h3>
            <p>
              Data-driven insights to optimize your marketing performance.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <div className="results-container">
          <div className="results-content">
            <h2>Proven Marketing Results</h2>
            <p>
              I deliver measurable business impact through data-optimized digital marketing strategies.
            </p>
          </div>
          <div className="results-stats">
            <div className="stat-item">
              <div className="stat-number" data-target="245">0</div>
              <div className="stat-label">Clients Helped</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-target="578">0</div>
              <div className="stat-label">Campaigns Managed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-target="94">0</div>
              <div className="stat-label">Avg. ROI Increase</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-target="12">0</div>
              <div className="stat-label">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-header">
          <h2>My Marketing Process</h2>
          <p className="section-subtitle">
            A structured approach that delivers consistent results
          </p>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Discovery & Analysis</h3>
              <p>
                Deep dive into your business, competitors, and audience to identify opportunities.
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Strategy Development</h3>
              <p>
                Create customized marketing plans with clear KPIs and benchmarks.
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Implementation</h3>
              <p>
                Execute campaigns across selected channels with attention to detail.
              </p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Optimization</h3>
              <p>
                Continuous testing and refinement to maximize results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>Client Success Stories</h2>
          <p className="section-subtitle">
            Results from businesses I've helped grow
          </p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p>
                Our organic traffic increased by 320% within 6 months. The detailed monthly reports made it easy to track progress.
              </p>
            </div>
            <div className="client-info">
              <div className="client-avatar"></div>
              <div className="client-details">
                <h4>Sarah Johnson</h4>
                <p>CEO, EcoProducts</p>
                <div className="client-rating">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#2563EB" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#2563EB" strokeWidth="1"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p>
                The Facebook ad campaigns generated 5x more leads than our previous efforts at half the cost per acquisition.
              </p>
            </div>
            <div className="client-info">
              <div className="client-avatar"></div>
              <div className="client-details">
                <h4>Michael Chen</h4>
                <p>Marketing Director, TechStart</p>
                <div className="client-rating">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#2563EB" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#2563EB" strokeWidth="1"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Grow Your Business Online?</h2>
          <p>
            Let's discuss how I can help you achieve your digital marketing goals.
          </p>
          <button className="primary-cta">
            Get Started Today
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;