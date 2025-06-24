import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './latestwork.css';

function LatestWork() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with payment integration.',
      image: "../images/web-design.jpg",
      link: '/work/ecommerce-platform',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure banking app with biometric authentication.',
      image: "../images/web-design.jpg",
      link: '/work/mobile-banking',
      tags: ['React Native', 'Firebase']
    },
    {
      title: 'Corporate Website',
      description: 'Responsive website with CMS integration.',
      image: "../images/web-design.jpg",
      link: '/work/corporate-website',
      tags: ['Next.js', 'Tailwind']
    },
    {
      title: 'Healthcare Dashboard',
      description: 'Data visualization for healthcare analytics.',
      image: "../images/web-design.jpg",
      link: '/work/healthcare-dashboard',
      tags: ['D3.js', 'Python']
    },
    {
      title: 'Social Media App',
      description: 'Platform with real-time messaging features.',
      image: "../images/web-design.jpg",
      link: '/work/social-media-app',
      tags: ['GraphQL', 'React']
    }
  ];

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length);
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
                  className="card-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x500?text=Project+Image';
                  }}
                />
                <div className="image-overlay"></div>
              </div>
              <div className="card-content">
                <h3 className="project-title">{projects[currentIndex].title}</h3>
                <p className="project-description">{projects[currentIndex].description}</p>
                <div className="project-tags">
                  {projects[currentIndex].tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
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
              className={`dot ${index === currentIndex ? 'active' : ''}`}
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