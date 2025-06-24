import React from 'react';
import { useInView } from 'react-intersection-observer';
import './landingdesc.css';

function LandingDescription() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section ref={ref} className="landing-desc-section" aria-label="SkyStack Technologiz Introduction">
            <div className="landing-desc-container">
                <h2 className={`landing-desc-title ${inView ? 'animate-fade-in-up' : ''}`}>
                    SkyStack Technologiz
                    <br />
                    <span className="title-highlight">Global Web Pioneers</span>
                </h2>
                <div className={`landing-desc-wrapper ${inView ? 'animate-fade-in-up' : ''}`}>
                    <div className="landing-desc-left">
                        <p className="landing-desc-text">
                            SkyStack Technologiz is your trusted partner in digital transformation, crafting immersive web experiences that blend stunning visuals with cutting-edge technology. Our award-winning team delivers pixel-perfect, high-performance websites that elevate brands and drive measurable growth.
                        </p>
                        <p className="landing-desc-text">
                            We turn visionary ideas into reality through strategic planning and innovative execution. From startups to Fortune 500 companies, our tailored solutions leverage React, Next.js, and headless architectures for lightning-fast, scalable platforms.
                        </p>
                        <p className="landing-desc-text">
                            Our data-driven approach combines behavioral analytics with conversion rate optimization to maximize your digital ROI. We build meaningful user journeys that convert visitors into loyal customers, ensuring your site performs globally in under 2 seconds.
                        </p>
                    </div>
                    <div className="landing-desc-right">
                        <p className="landing-desc-text">
                            In today’s competitive digital landscape, your website must be a strategic business tool. We specialize in technically sophisticated platforms using WebGL animations, micro-interactions, and progressive web app capabilities to marry form with function.
                        </p>
                        <p className="landing-desc-text">
                            Our global team of 50+ experts, including UX researchers, motion designers, and full-stack engineers, collaborates to push creative boundaries while maintaining technical excellence. We test across 100+ device combinations for flawless performance.
                        </p>
                        <p className="landing-desc-text">
                            The SkyStack difference lies in our holistic approach—we craft digital ecosystems, not just websites. From strategy to post-launch optimization, we become an extension of your team, delivering solutions that evolve with your business.
                        </p>
                        <button className="landing-desc-cta" aria-label="Begin your digital transformation with SkyStack Technologiz">
                            Launch Your Vision
                            <svg className="cta-arrow" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LandingDescription;
