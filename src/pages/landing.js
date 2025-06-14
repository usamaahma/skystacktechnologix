import React from 'react';
import Webdesign from '../components/landing/webdesign';
import './landing.css'; // For custom styles
import Cards from '../components/landing/cards';
import LandingDescription from '../components/landing/landingdescription';

function Landing() {
    return (
        <div>
            <div className="landing-container">
                <video
                    className="landing-video"
                    src="/images/web-development.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="landing-overlay">
                </div>
            </div>
            <Webdesign />
            <Cards />
            <LandingDescription />
        </div>
    );
}

export default Landing;
