import React from 'react';
import './getquote.css';
import backimg from '../../videos/backimg.jpg';


function GetAQuote() {
    return (
        <section className="quote-section">
            <div className="quote-background" style={{
                backgroundImage: `url(${backimg})`
            }}></div>
            <div className="quote-content">
                <div className="quote-text">
                    <p className="quote-subtitle">Have a project in mind?</p>
                    <h2 className="quote-title">Want to collaborate and give wings to your dream project?</h2>
                    <h3 className="quote-cta">Let's talk!</h3>
                    <button className="quote-button">Get a Quote</button>
                </div>

                <div className="partners-section">
                    <p className="partners-text">
                        We team up with the leading names of the industry. We have established a close channel
                        with major technology brands across the world and it enables us to bring the best to
                        every business, every time.
                    </p>

                    <div className="tech-logos">
                        {/* Shopify Logo */}
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1200px-Shopify_logo_2018.svg.png"
                            alt="Shopify"
                            loading="lazy"
                        />

                        {/* WordPress Logo */}
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png"
                            alt="WordPress"
                            loading="lazy"
                        />

                        {/* MERN Stack (MongoDB + Express + React + Node) */}
                        <img
                            src="https://miro.medium.com/v2/resize:fit:800/1*Q5EUk28Xc3iCDoMSkrd1_w.png"
                            alt="MERN Stack"
                            loading="lazy"
                        />

                        {/* React Logo */}
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
                            alt="React"
                            loading="lazy"
                        />

                        {/* Node.js Logo */}
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
                            alt="Node.js"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GetAQuote;