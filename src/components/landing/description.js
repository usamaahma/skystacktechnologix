import React from "react";
import "./description.css";

const Description = () => {
  return (
    <div className="blue-description-container">
      <div className="blue-description-header">
        <h1 className="blue-company-name">Sky Stack Technologiz</h1>
        <p className="blue-company-tagline">
          Your Premier Digital Solutions Partner in Melbourne
        </p>
      </div>

      <div className="blue-description-content">
        <p>
          At Sky Stack Technologiz, we engineer digital experiences from the
          ground up. Every client insight becomes a building block in our
          strategic process, transforming your vision into digital reality
          through our technical mastery.
        </p>

        <p>
          Let's be honest - Melbourne's tech landscape is crowded with
          developers. The real differentiator? A partner that delivers on
          promises with pixel-perfect execution.
        </p>

        <p>
          We create digital assets that command attention and convert visitors.
          Websites that dominate visually and technically - striking aesthetics,
          flawless functionality, intuitive navigation, and conversion-optimized
          design working in perfect harmony.
        </p>

        <div className="blue-description-highlight">
          Our decade-long journey has sharpened our expertise to architect
          digital growth engines that amplify your online presence organically.
        </div>
      </div>

      <div className="blue-description-footer">
        <p>
          Ready to transform your digital presence? Let's create something
          remarkable.
        </p>
      </div>
    </div>
  );
};

export default Description;
