import React from 'react';
import "./portfolio.css";

function Portfolio() {
    const projects = [
        {
            title: "Sire Printing",
            link: "https://sireprinting.com/",
            image: "../images/sireprinting.png"
        },
        {
            title: "Bongodeshi",
            link: "https://www.bongodeshi.com/",
            image: "../images/bongodeshi.png"
        },
        {
            title: "Digital Block Exchange",
            link: "https://newdigital.vercel.app/",
            image: "../images/digital_block_exchange.png"
        },
        {
            title: "Brand Marketing Hub",
            link: "https://bmh.vercel.app/",
            image: "../images/bmh.png"
        },
        {
            title: "Clock 360",
            link: "https://modest-tereshkova-3f6498.netlify.app/",
            image: "../images/clock.png"
        },
        {
            title: "The Student",
            link: "https://study-ruddy-eta.vercel.app/",
            image: "../images/student.png"
        },
        {
            title: "Cozy",
            link: "https://tender-lewin-90de3c.netlify.app/",
            image: "../images/cozy.png"
        },
        {
            title: "Sky Stack Technologiz",
            link: "https://skystacktechnologiz.com/",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ];

    return (
        <section className="portfolio-section" id="portfolio">
            <div className="container">
                <h2 className="section-title">Our <span className="highlight">Portfolio</span></h2>
                <p className="section-subtitle">Discover our handcrafted digital solutions that drive results</p>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="portfolio-card"
                            key={index}
                        >
                            <div className="card-image">
                                <img src={project.image} alt={project.title} />
                                <div className="overlay"></div>
                            </div>
                            <div className="card-content">
                                <h3>{project.title}</h3>
                                <span className="visit-btn">Visit Website →</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="cta-section">
                    <h3>Ready to transform your digital presence?</h3>
                    <p>Let's create something extraordinary together</p>
                    <button className="cta-button">Start Your Project Today</button>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;