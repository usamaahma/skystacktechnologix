import React, { useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import Particles from 'react-particles';
import { loadSlim } from '@tsparticles/slim';
import './landingdesc.css';

function LandingDescription() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesOptions = {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: ['#3b82f6', '#1d4ed8'] }, // Match CSS blues
            shape: { type: 'circle' },
            opacity: { value: 0.4, random: true },
            size: { value: 2.5, random: true },
            move: { enable: true, speed: 1.5, direction: 'none', random: true },
            line_linked: { enable: false },
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
            },
        },
    };

    return (
        <section className="landing-desc-section" ref={ref} aria-label="SkyStack Technologiz Introduction">
            <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
            <div className="landing-desc-container">
                <h2 className={`landing-desc-title ${inView ? 'animate-slide-in' : ''}`}>
                    SkyStack Technologiz <br />
                    <span className="title-highlight">Global Web Pioneers</span>
                </h2>
                <div className={`landing-desc-wrapper ${inView ? 'animate-slide-in' : ''}`}>
                    <div className="landing-desc-right">
                        <p className="landing-desc-text">
                            SkyStack Technologiz is your premier digital transformation partner, specializing in crafting immersive web experiences that combine aesthetic brilliance with technical precision. Our team of award-winning designers and developers creates pixel-perfect, conversion-optimized websites that elevate brands and drive measurable business growth.
                        </p>
                        <p className="landing-desc-text">
                            We transform visionary ideas into digital realities through our comprehensive approach that blends strategic thinking with cutting-edge execution. Every project begins with in-depth discovery sessions to ensure we capture your unique brand essence and business objectives.
                        </p>
                        <p className="landing-desc-text">
                            From agile startups to Fortune 500 enterprises, our tailored solutions leverage the latest technologies including React, Next.js, and headless architectures to deliver lightning-fast, scalable platforms. We build with performance in mind, ensuring your site loads in under 2 seconds globally.
                        </p>
                        <p className="landing-desc-text">
                            Beyond beautiful interfaces, we engineer meaningful user journeys that convert visitors into loyal customers. Our data-driven approach combines behavioral analytics with conversion rate optimization techniques to maximize your digital ROI.
                        </p>
                    </div>
                    <div className="landing-desc-left">
                        <p className="landing-desc-text">
                            In today's competitive digital landscape, a website must be more than just visually appealing—it needs to be a strategic business tool. SkyStack Technologiz specializes in creating technically sophisticated platforms that marry form with function, using technologies like WebGL animations, micro-interactions, and progressive web app capabilities.
                        </p>
                        <p className="landing-desc-text">
                            Our global team of 50+ experts includes UX researchers, motion designers, and full-stack engineers who collaborate to push creative boundaries while maintaining technical excellence. We implement rigorous quality assurance protocols, testing across 100+ device combinations to ensure flawless performance.
                        </p>
                        <p className="landing-desc-text">
                            The SkyStack difference lies in our holistic approach—we don't just build websites, we craft digital ecosystems. From initial strategy sessions through post-launch optimization, we become an extension of your team, delivering solutions that evolve with your business needs and market demands.
                        </p>
                        <button className="landing-desc-cta" aria-label="Begin your digital transformation journey with SkyStack Technologiz">
                            Launch Your Vision Today
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