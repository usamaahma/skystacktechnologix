import React from 'react';
import { useNavigate } from 'react-router-dom';
import './services.css';

import vid1 from '../../videos/1.mp4';
import vid2 from '../../videos/4.mp4';
import vid3 from '../../videos/5.mp4';
import vid4 from '../../videos/2.mp4';
import vid5 from '../../videos/3.mp4';

function Services() {
    const navigate = useNavigate();

    const services = [
        {
            title: 'Web Design & Development',
            description: 'Crafting stunning, responsive websites with React, Next.js, and headless architectures for optimal performance and scalability.',
            video: vid1,
            link: '/web-design'
        },
        {
            title: 'Mobile App Development',
            description: 'Building intuitive, high-performance mobile apps for iOS and Android using modern frameworks like React Native.',
            video: vid2,
            link: '/mobile-app-development'
        },
        {
            title: 'Digital Marketing',
            description: 'Driving growth with data-driven SEO, PPC, and social media strategies to boost your brands online presence.',
            video: vid3,
            link: '/digital-marketing'
        },
        {
            title: 'WordPress & Shopify Development',
            description: 'Creating customized, user-friendly e-commerce and CMS solutions tailored to your business needs.',
            video: vid4,
            link: '/web-development'
        },
        {
            title: 'CRM Solutions',
            description: 'Implementing robust CRM systems to streamline customer relationships and enhance business efficiency.',
            video: vid5,
            link: '/services/crm-solutions'
        }
    ];

    return (
        <section className="service-services-section" aria-label="Our Services">
            <h2 className="service-services-heading">What Services We Provide</h2>
            <div className="service-services-grid">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-service-card"
                        onClick={() => navigate(service.link)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Learn more about ${service.title}`}
                        onKeyDown={(e) => e.key === 'Enter' && navigate(service.link)}
                    >
                        <div className="service-video-container">
                            <video
                                className="service-service-video"
                                muted
                                loop
                                playsInline
                                autoPlay
                            >
                                <source src={service.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="service-service-overlay">
                            <h3 className="service-service-title">{service.title}</h3>
                            <p className="service-service-description">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;