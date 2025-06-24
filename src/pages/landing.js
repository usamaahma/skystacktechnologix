import React from 'react';
import Webdesign from '../components/landing/webdesign';
import './landing.css'; // For custom styles
import Cards from '../components/landing/cards';
import LandingDescription from '../components/landing/landingdescription';
import Services from '../components/landing/services';
import LatestWork from '../components/landing/latestwork';
import GetAQuote from '../components/landing/getquote';
import Description from '../components/landing/description';


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
            <Services />
            <LatestWork />
            <GetAQuote />
            <Description />
        </div>
    );
}

export default Landing;
