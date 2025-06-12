import React from 'react';
import Webdesign from '../components/landing/webdesign';
import './landing.css'; // For custom styles

function Landing() {
    return (
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
    );
}

export default Landing;
