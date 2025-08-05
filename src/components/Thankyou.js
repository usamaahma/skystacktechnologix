import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import "./thankyou.css";

function Thankyou() {
  return (
    <div className="thank-you-page">
      <motion.div
        className="thank-you-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="thank-you-card">
          <div className="success-icon">
            <FaCheckCircle className="check-icon" />
          </div>
          <h1>Thank You!</h1>
          <p className="success-message">
            Your message has been successfully submitted. We'll contact you soon.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+92 308 8798324</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>skystacktechnologiz@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Office #1022, Siddique Trade Center, Gulberg 2, Lahore</span>
            </div>
          </div>
          <motion.a
            href="/"
            className="home-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Return to Home
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default Thankyou;