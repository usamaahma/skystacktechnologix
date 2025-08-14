import React from 'react';
import { useNavigate } from 'react-router-dom';
import Webdesign from '../components/landing/webdesign';
import './landing.css'; // For custom styles
import Cards from '../components/landing/cards';
import LandingDescription from '../components/landing/landingdescription';
import Services from '../components/landing/services';
import LatestWork from '../components/landing/latestwork';
import GetAQuote from '../components/landing/getquote';
import Description from '../components/landing/description';

function Landing() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/contact');
    };

    return (
        <div>
            <div className="landing-container">
                {/* Video for desktop */}
                <video
                    className="landing-video desktop-video"
                    src="/images/web-development.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                {/* Image for mobile */}
                <img
                    className="landing-mobile-img"
                    src="/images/landing-mobile.jpg"
                    alt="Web Development"
                />
                <div className="landing-overlay">
                    {/* Mobile Content */}
                    <div className="mobile-content">
                        <h1 className="mobile-heading">Transform Your Digital Presence Today</h1>
                        <p className="mobile-subheading">Professional web solutions tailored to your business needs</p>
                        <button className="mobile-get-started-btn" onClick={handleGetStarted}>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            <Webdesign />
            <Cards />
            <LandingDescription />
            <Services />
            <LatestWork />
            <GetAQuote />
            <Description />
        </div>
    );
}

export default Landing;