import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./digitalmarketing.css";

const DigitalMarketing = () => {
  useEffect(() => {
    // Simple animation for stats counting
    const animateStats = () => {
      const stats = document.querySelectorAll(".di-stat-number");
      stats.forEach((stat) => {
        const target = +stat.getAttribute("data-target");
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector(".di-results-section");
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="di-digital-marketing">
      {/* Hero Section */}
      <section className="di-marketing-hero">
        <div className="di-hero-container">
          <div className="di-hero-content">
            <h1>
              <span className="di-highlight">Results-Driven</span> Digital
              Marketing
            </h1>
            <p className="di-hero-subtitle">
              Data-backed strategies that increase your online visibility,
              attract quality leads, and drive sustainable business growth
            </p>
            <div className="di-cta-buttons">
              <Link to="/contactus">
                <button className="di-primary-cta">
                  Get Free Audit
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="di-secondary-cta">View Case Studies</button>
              </Link>
            </div>
            <div className="di-trusted-by">
              <p>Trusted by leading brands:</p>
              <div className="di-brand-logos">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
                  alt="Microsoft"
                  width="40"
                  height="40"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2504/2504903.png"
                  alt="Airbnb"
                  width="40"
                  height="40"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732227.png"
                  alt="Spotify"
                  width="40"
                  height="40"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732228.png"
                  alt="Slack"
                  width="40"
                  height="40"
                />
              </div>
            </div>
          </div>
          <div className="di-hero-image">
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Digital marketing team analyzing data"
              className="di-hero-dashboard"
            />
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="di-services-section">
        <div className="di-section-header">
          <h2>Digital Marketing Services</h2>
          <p className="di-section-subtitle">
            Comprehensive strategies tailored to your business goals and
            audience
          </p>
        </div>
        <div className="di-services-grid">
          <div className="di-service-card">
            <div className="di-service-image">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="SEO optimization"
              />
            </div>
            <div className="di-service-content">
              <h3>SEO Optimization</h3>
              <p>
                Improve your search rankings and organic traffic with
                comprehensive SEO strategies including:
              </p>
              <ul>
                <li>Keyword research & optimization</li>
                <li>Technical SEO audits</li>
                <li>Content strategy development</li>
                <li>Local SEO optimization</li>
                <li>Ongoing performance tracking</li>
              </ul>
              <div className="di-service-stats">
                <div className="di-stat">
                  <span className="di-stat-value">3-5x</span>
                  <span className="di-stat-label">Organic Traffic Growth</span>
                </div>
              </div>
            </div>
          </div>

          <div className="di-service-card">
            <div className="di-service-image">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="PPC advertising"
              />
            </div>
            <div className="di-service-content">
              <h3>PPC Advertising</h3>
              <p>
                Drive immediate, qualified traffic with precisely targeted
                campaigns including:
              </p>
              <ul>
                <li>Google Ads management</li>
                <li>Facebook/Instagram ads</li>
                <li>LinkedIn advertising</li>
                <li>Display network campaigns</li>
                <li>Conversion rate optimization</li>
              </ul>
              <div className="di-service-stats">
                <div className="di-stat">
                  <span className="di-stat-value">2-4x</span>
                  <span className="di-stat-label">ROI Improvement</span>
                </div>
              </div>
            </div>
          </div>

          <div className="di-service-card">
            <div className="di-service-image">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Social media marketing"
              />
            </div>
            <div className="di-service-content">
              <h3>Social Media Marketing</h3>
              <p>
                Build brand awareness and engagement through strategic presence
                including:
              </p>
              <ul>
                <li>Content strategy & calendar</li>
                <li>Community management</li>
                <li>Influencer partnerships</li>
                <li>Paid social campaigns</li>
                <li>Performance analytics</li>
              </ul>
              <div className="di-service-stats">
                <div className="di-stat">
                  <span className="di-stat-value">5-10x</span>
                  <span className="di-stat-label">Engagement Growth</span>
                </div>
              </div>
            </div>
          </div>

          <div className="di-service-card">
            <div className="di-service-image">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Content marketing"
              />
            </div>
            <div className="di-service-content">
              <h3>Content Marketing</h3>
              <p>
                Attract and retain customers through valuable content including:
              </p>
              <ul>
                <li>Blog content strategy</li>
                <li>Video marketing</li>
                <li>Infographics & visual content</li>
                <li>E-books & whitepapers</li>
                <li>Content distribution</li>
              </ul>
              <div className="di-service-stats">
                <div className="di-stat">
                  <span className="di-stat-value">3-7x</span>
                  <span className="di-stat-label">Lead Generation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="di-service-card">
            <div className="di-service-image">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Email marketing"
              />
            </div>
            <div className="di-service-content">
              <h3>Email Marketing</h3>
              <p>
                Nurture leads and boost conversions with automated sequences
                including:
              </p>
              <ul>
                <li>List segmentation</li>
                <li>Automation workflows</li>
                <li>A/B testing</li>
                <li>Personalization strategies</li>
                <li>Performance analytics</li>
              </ul>
              <div className="di-service-stats">
                <div className="di-stat">
                  <span className="di-stat-value">20-40%</span>
                  <span className="di-stat-label">Open Rate Increase</span>
                </div>
              </div>
            </div>
          </div>

          <div className="di-service-card">
            <div className="di-service-image">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Marketing analytics"
              />
            </div>
            <div className="di-service-content">
              <h3>Marketing Analytics</h3>
              <p>Data-driven insights to optimize performance including:</p>
              <ul>
                <li>Campaign tracking</li>
                <li>Conversion attribution</li>
                <li>Customer journey mapping</li>
                <li>ROI analysis</li>
                <li>Predictive modeling</li>
              </ul>
              <div className="di-service-stats">
                <div className="di-stat">
                  <span className="di-stat-value">2-5x</span>
                  <span className="di-stat-label">Performance Improvement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="di-results-section">
        <div className="di-results-container">
          <div className="di-results-image">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Marketing results dashboard"
            />
          </div>
          <div className="di-results-content">
            <h2>Proven Marketing Results</h2>
            <p>
              We deliver measurable business impact through data-optimized
              digital marketing strategies. Here's what we've achieved for our
              clients:
            </p>
            <div className="di-results-highlights">
              <div className="di-highlight-card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"
                  alt="Revenue Growth"
                  width="40"
                  height="40"
                />
                <p>
                  Average <strong>78% revenue growth</strong> for clients within
                  first year
                </p>
              </div>
              <div className="di-highlight-card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"
                  alt="Cost Reduction"
                  width="40"
                  height="40"
                />
                <p>
                  <strong>45% lower customer acquisition costs</strong> compared
                  to industry averages
                </p>
              </div>
            </div>
          </div>
          <div className="di-results-stats">
            <div className="di-stat-item">
              <div className="di-stat-number" data-target="245">
                0
              </div>
              <div className="di-stat-label">Clients Helped</div>
            </div>
            <div className="di-stat-item">
              <div className="di-stat-number" data-target="578">
                0
              </div>
              <div className="di-stat-label">Campaigns Managed</div>
            </div>
            <div className="di-stat-item">
              <div className="di-stat-number" data-target="94">
                0
              </div>
              <div className="di-stat-label">Avg. ROI Increase</div>
            </div>
            <div className="di-stat-item">
              <div className="di-stat-number" data-target="12">
                0
              </div>
              <div className="di-stat-label">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="di-process-section">
        <div className="di-section-header">
          <h2>Our Marketing Process</h2>
          <p className="di-section-subtitle">
            A structured approach that delivers consistent, measurable results
          </p>
        </div>
        <div className="di-process-steps">
          <div className="di-process-step">
            <div className="di-step-image">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Discovery phase"
              />
            </div>
            <div className="di-step-number">1</div>
            <div className="di-step-content">
              <h3>Discovery & Analysis</h3>
              <p>
                Deep dive into your business, competitors, and audience to
                identify opportunities:
              </p>
              <ul>
                <li>Comprehensive business audit</li>
                <li>Competitor benchmarking</li>
                <li>Target audience profiling</li>
                <li>Market opportunity analysis</li>
              </ul>
            </div>
          </div>
          <div className="di-process-step">
            <div className="di-step-image">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Strategy development"
              />
            </div>
            <div className="di-step-number">2</div>
            <div className="di-step-content">
              <h3>Strategy Development</h3>
              <p>
                Create customized marketing plans with clear KPIs and
                benchmarks:
              </p>
              <ul>
                <li>Channel selection matrix</li>
                <li>Content strategy framework</li>
                <li>Budget allocation plan</li>
                <li>Performance benchmarks</li>
              </ul>
            </div>
          </div>
          <div className="di-process-step">
            <div className="di-step-image">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Implementation"
              />
            </div>
            <div className="di-step-number">3</div>
            <div className="di-step-content">
              <h3>Implementation</h3>
              <p>
                Execute campaigns across selected channels with attention to
                detail:
              </p>
              <ul>
                <li>Campaign setup & launch</li>
                <li>Content production</li>
                <li>Technical implementation</li>
                <li>Initial performance tuning</li>
              </ul>
            </div>
          </div>
          <div className="di-process-step">
            <div className="di-step-image">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Optimization"
              />
            </div>
            <div className="di-step-number">4</div>
            <div className="di-step-content">
              <h3>Optimization</h3>
              <p>Continuous testing and refinement to maximize results:</p>
              <ul>
                <li>Performance analytics</li>
                <li>A/B testing framework</li>
                <li>Monthly strategy reviews</li>
                <li>Quarterly innovation sprints</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="di-testimonials-section">
        <div className="di-section-header">
          <h2>Client Success Stories</h2>
          <p className="di-section-subtitle">
            Real results from businesses we've helped grow
          </p>
        </div>
        <div className="di-testimonials-grid">
          <div className="di-testimonial-card">
            <div className="di-testimonial-image">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Happy client"
              />
            </div>
            <div className="di-testimonial-content">
              <div className="di-quote-icon">"</div>
              <p>
                Our organic traffic increased by 320% within 6 months. The
                detailed monthly reports made it easy to track progress and
                justify the investment to our board.
              </p>
              <div className="di-results-stats">
                <div className="di-stat">
                  <div className="di-stat-value">320%</div>
                  <div className="di-stat-label">Traffic Growth</div>
                </div>
                <div className="di-stat">
                  <div className="di-stat-value">45%</div>
                  <div className="di-stat-label">Lead Increase</div>
                </div>
              </div>
            </div>
            <div className="di-client-info">
              <div className="di-client-avatar">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Sarah Johnson"
                />
              </div>
              <div className="di-client-details">
                <h4>Sarah Johnson</h4>
                <p>CEO, EcoProducts</p>
                <div className="di-client-rating">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#2563EB"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        stroke="#2563EB"
                        strokeWidth="1"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="di-testimonial-card">
            <div className="di-testimonial-image">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Satisfied customer"
              />
            </div>
            <div className="di-testimonial-content">
              <div className="di-quote-icon">"</div>
              <p>
                The Facebook ad campaigns generated 5x more leads than our
                previous efforts at half the cost per acquisition. We've scaled
                this approach to all our markets.
              </p>
              <div className="di-results-stats">
                <div className="di-stat">
                  <div className="di-stat-value">5x</div>
                  <div className="di-stat-label">More Leads</div>
                </div>
                <div className="di-stat">
                  <div className="di-stat-value">50%</div>
                  <div className="di-stat-label">Lower CPA</div>
                </div>
              </div>
            </div>
            <div className="di-client-info">
              <div className="di-client-avatar">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Michael Chen"
                />
              </div>
              <div className="di-client-details">
                <h4>Michael Chen</h4>
                <p>Marketing Director, TechStart</p>
                <div className="di-client-rating">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#2563EB"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        stroke="#2563EB"
                        strokeWidth="1"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="di-more-case-studies">
          <Link to="/portfolio" className="di-secondary-cta">
            View All Case Studies
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="di-cta-section">
        <div className="di-cta-container">
          <div className="di-cta-image">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Let's work together"
            />
          </div>
          <div className="di-cta-content">
            <h2>Ready to Grow Your Business Online?</h2>
            <p>
              Let's discuss how we can help you achieve your digital marketing
              goals with a strategy tailored to your business.
            </p>
            <div className="di-cta-buttons">
              <Link to="/contactus">
                <button className="di-primary-cta">
                  Get Started Today
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Link>
              <Link to="/contactus" className="di-secondary-cta">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
