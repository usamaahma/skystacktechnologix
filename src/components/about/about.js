import React from "react";
import { motion } from "framer-motion";
import "./about.css";

// Direct image URLs from Unsplash and other sources
const heroBg =
  "https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?semt=ais_hybrid&w=740";
const teamImage =
  "https://images.unsplash.com/photo-1571260898930-a8a1c5a3e127?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const missionImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const ceoImage =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
const ctoImage =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
const devImage =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
const officeImage =
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

function About() {
  // Team data
  const teamMembers = [
    {
      name: "John Carter",
      role: "CEO & Founder",
      image: ceoImage,
      bio: "Serial entrepreneur with 20+ years in tech innovation",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: ctoImage,
      bio: "Cloud architecture expert and AI specialist",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: devImage,
      bio: "Full-stack wizard with passion for clean code",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote:
        "Skystack transformed our digital infrastructure in just 3 months. Their team is exceptional.",
      author: "Emma Wilson",
      position: "CEO, TechNova",
      rating: 5,
    },
    {
      quote:
        "The most professional IT partner we've worked with. Delivered beyond expectations.",
      author: "David Kim",
      position: "CTO, FinTech Global",
      rating: 5,
    },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <img src={heroBg} alt="Skystack Technologies" className="hero-bg" />
        <div className="container">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1>About Skystack</h1>
            <p className="subtitle">
              Pioneering digital transformation since 2015
            </p>
            <motion.a
              href="/contact"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <motion.section
        className="intro-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Redefining Technology Solutions</h2>
              <p className="lead">
                Skystack Technologies is a global leader in digital innovation,
                helping businesses transform and thrive in the digital economy.
              </p>
              <p>
                Founded in 2015, we've grown from a Sydney-based startup to an
                international technology powerhouse serving clients across 4
                continents. Our team of 150+ experts delivers cutting-edge
                solutions tailored to your unique business needs.
              </p>
            </div>
            <div className="intro-stats">
              <div className="stat-item">
                <div className="stat-number">150+</div>
                <div className="stat-label">Experts</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <motion.div
            className="mission-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="mission-image" variants={fadeIn}>
              <img src={missionImage} alt="Our Mission" />
            </motion.div>
            <motion.div className="mission-content" variants={fadeIn}>
              <div className="section-tag">Our Purpose</div>
              <h2>Driving Digital Excellence</h2>
              <p>
                We exist to empower businesses through innovative technology
                solutions that create real competitive advantage. Our mission is
                to be the catalyst for your digital transformation journey.
              </p>
              <ul className="mission-list">
                <li>
                  <div className="list-icon">✓</div>
                  <span>Deliver measurable business impact</span>
                </li>
                <li>
                  <div className="list-icon">✓</div>
                  <span>Foster innovation through collaboration</span>
                </li>
                <li>
                  <div className="list-icon">✓</div>
                  <span>Build solutions that scale with you</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="section-header">
              <div className="section-tag">Our Team</div>
              <h2>Meet The Leadership</h2>
              <p className="section-description">
                Passionate experts driving innovation and delivering exceptional
                results
              </p>
            </div>
          </motion.div>

          <motion.div
            className="team-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                className="team-card"
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <div className="team-card-image">
                  <img src={member.image} alt={member.name} />
                  <div className="social-links">
                    <a href={member.social.linkedin} aria-label="LinkedIn">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href={member.social.twitter} aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div className="team-card-content">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="section-header">
              <div className="section-tag">Our Culture</div>
              <h2>Core Values</h2>
              <p className="section-description">
                The principles that guide everything we do
              </p>
            </div>
          </motion.div>

          <motion.div
            className="values-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="value-card" variants={fadeIn}>
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>
                We challenge the status quo to deliver breakthrough solutions
              </p>
            </motion.div>

            <motion.div className="value-card" variants={fadeIn}>
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Integrity</h3>
              <p>We do what's right, not what's easy</p>
            </motion.div>

            <motion.div className="value-card" variants={fadeIn}>
              <div className="value-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Excellence</h3>
              <p>We pursue mastery in everything we do</p>
            </motion.div>

            <motion.div className="value-card" variants={fadeIn}>
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaboration</h3>
              <p>We achieve more together</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="section-header">
              <div className="section-tag">Client Stories</div>
              <h2>What Our Clients Say</h2>
            </div>
          </motion.div>

          <motion.div
            className="testimonials-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                className="testimonial-card"
                key={index}
                variants={fadeIn}
              >
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <blockquote>"{testimonial.quote}"</blockquote>
                <div className="author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.position}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Office Section */}
      <section className="office-section">
        <div className="container">
          <motion.div
            className="office-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="office-content" variants={fadeIn}>
              <div className="section-tag">Our Spaces</div>
              <h2>Global Headquarters</h2>
              <p>
                Our state-of-the-art Sydney office is designed for collaboration
                and innovation. With satellite offices in 5 countries, we
                combine global reach with local expertise.
              </p>
              <div className="office-features">
                <div className="feature">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Sydney, Australia</span>
                </div>
                <div className="feature">
                  <i className="fas fa-building"></i>
                  <span>5 Global Offices</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="office-image" variants={fadeIn}>
              <img src={officeImage} alt="Skystack Office" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Let's discuss how Skystack can help you achieve your digital
              goals.
            </p>
            <motion.a
              href="/contact"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
