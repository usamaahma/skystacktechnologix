import React from 'react';
import Slider from 'react-slick';
import './webdesign.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const subDescriptions = [
    "Creative designs tailored to your needs",
    "Responsive across all devices",
    "Optimized for speed and performance",
    "SEO friendly & fast loading",
    "Pixel perfect implementation",
    "User-centric design approach"
];

function Webdesign() {
    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        appendDots: dots => (
            <div className="custom-dots">
                <ul>{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <div className="dot"></div>
        )
    };

    return (
        <section className="webdesign-section">
            <div className="webdesign-container">
                <div className="webdesign-left">
                    <div className="image-wrapper">
                        <img
                            src="../images/web-design.jpg"
                            alt="Modern Web Design"
                            className="webdesign-image"
                            loading="lazy"
                        />
                        <div className="image-overlay"></div>
                    </div>
                </div>

                <div className="webdesign-right">
                    <div className="content-wrapper">
                        <span className="section-badge">Our Expertise</span>
                        <h2 className="webdesign-title">Modern Web Design Solutions</h2>

                        <div className="webdesign-carousel">
                            <Slider {...sliderSettings}>
                                {subDescriptions.map((text, index) => (
                                    <div className="carousel-slide" key={index}>
                                        <svg className="check-icon" viewBox="0 0 24 24">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                        {text}
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        <div className="description-group">
                            <p className="webdesign-description">
                                We create digital experiences that captivate your audience and drive results. Our Melbourne-based team combines creativity with technical expertise to deliver websites that stand out.
                            </p>
                            <p className="webdesign-description">
                                Innovation is at the heart of our design process. We craft interfaces that engage visitors and keep them coming back, ensuring your business makes a lasting impression.
                            </p>
                            <p className="webdesign-description">
                                Let's collaborate to bring your vision to life. We'll work closely with you to understand your goals and build a stunning, high-performing website tailored to your needs.
                            </p>
                        </div>

                        <button className="cta-button">
                            Get Your Free Consultation
                            <svg className="arrow-icon" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Webdesign;