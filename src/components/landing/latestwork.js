import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./latestwork.css";

function LatestWork() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const projects = [
    {
      title: "Bongodeshi",
      description: "Full-featured online store with payment integration.",
      image: "../images/bongodeshi.png",
      link: "/portfolio",
      tags: ["Next.js", "Node.js", "MongoDB"],
    },
    {
      title: "Clock 360",
      description: "A Crypto Auto Compunding Protocol Website.",
      image: "../images/clock.png",
      link: "/portfolio",
      tags: ["React.js", "Antd", "React Bootstrap"],
    },
    {
      title: "Cozy Nft",
      description: "An NFT platform for buying and selling of NFT",
      image: "../images/cozy.png",
      link: "/portfolio",
      tags: ["React.js", "Antd", "React Bootstrap"],
    },
    {
      title: "Sire Printing",
      description: "Sire Printing gives Packaging Services all over USA.",
      image: "../images/sireprinting.png",
      link: "/portfolio",
      tags: ["Node.js", "React.js", "MongoDb", "Express.js"],
    },
    {
      title: "Digital Block Exchange",
      description: "It Gives Services For Exchanging Your Currencies",
      image: "../images/digital_block_exchange.png",
      link: "/portfolio",
      tags: ["React.js", "Antd", "React Bootstrap"],
    },
    {
      title: "The Student",
      description:
        "THe Student Gives Information About Scholarships And Tests For Studying Abroad",
      image: "../images/student.png",
      link: "/portfolio",
      tags: ["Node.js", "React.js", "MongoDb", "Express.js"],
    },
    {
      title: "Brand Marketing Hub",
      description:
        "A Service Based Website That Gives Services of Web development,Web designing,Digital Marketing, Seo etc.",
      image: "../images/bmh.png",
      link: "/portfolio",
      tags: ["React.js", "Antd", "React Bootstrap"],
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      nextSlide();
    }
    if (touchStart - touchEnd < -100) {
      prevSlide();
    }
  };

  return (
    <section className="latest-work-section" aria-label="Our Latest Work">
      <div className="latest-work-container">
        <div className="section-header">
          <h2 className="section-title">Our Latest Work</h2>
          <p className="section-subtitle">Discover our recent projects</p>
        </div>

        <div className="carousel-container">
          <button
            className="carousel-button prev"
            onClick={prevSlide}
            aria-label="Previous project"
          >
            &lt;
          </button>

          <div
            className="carousel-track"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="carousel-card"
              onClick={() => navigate(projects[currentIndex].link)}
            >
              <div className="card-image-container">
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="card-image-latest"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x500?text=Project+Image";
                  }}
                />
              </div>
              <div className="card-content">
                <h3 className="project-title">
                  {projects[currentIndex].title}
                </h3>
                <p className="project-description">
                  {projects[currentIndex].description}
                </p>
                <div className="project-tags">
                  {projects[currentIndex].tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-button next"
            onClick={nextSlide}
            aria-label="Next project"
          >
            &gt;
          </button>
        </div>

        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`View project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestWork;
