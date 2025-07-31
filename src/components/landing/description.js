import React from "react";
import "./description.css";

const Description = () => {
  return (
    <div className="blue-description-container">
      <div className="blue-description-header">
        <h1 className="blue-company-name">Sky Stack Technologiz</h1>
        <p className="blue-company-tagline">
          Your Trusted IT Solutions Partner in Gulberg, Lahore
        </p>
      </div>

      <div className="blue-description-content">
        <p>
          At Sky Stack Technologiz, we craft digital experiences tailored for the Pakistani market.
          Every business we work with becomes part of our journey—where your ideas evolve into
          digital realities through strategy, design, and cutting-edge technology.
        </p>

        <p>
          Let's face it — the tech industry in Pakistan is growing rapidly. But what truly sets us
          apart is our commitment to deliver high-quality solutions with integrity, precision, and
          care that matches international standards.
        </p>

        <p>
          We build websites and digital products that not only look stunning but also perform
          seamlessly—designed for conversions, user-friendly interfaces, mobile responsiveness,
          and fast loading times. Whether you're a startup in Lahore or a growing brand nationwide,
          we help you stand out online.
        </p>

        <div className="blue-description-highlight">
          With over a decade of hands-on experience, we specialize in building digital platforms
          that drive organic growth and strengthen your brand’s presence across Pakistan and beyond.
        </div>
      </div>

      <div className="blue-description-footer">
        <p style={{ color: "white" }}>
          Ready to elevate your digital journey? Let’s build something extraordinary—right here from Lahore.
        </p>
      </div>
    </div>
  );
};

export default Description;
