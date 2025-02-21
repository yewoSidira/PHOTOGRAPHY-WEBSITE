import React from 'react';
import heroBg from './hero-bg.jpg';
import logo from './logo.jpg';

import './hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                {/* Add the logo here */}
                <img src="logo.jpg" alt=" Logo" className="hero-logo" />
                <h1>23/11 Photography</h1>
                <h2>Capture your best moments with style and vision</h2>
                <button onClick={() => window.location.href = '/booking'}>Book Now</button>
            </div>
        </section>
    );
};

export default Hero;