import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1>23/11 Photography</h1>
          <p className="hero-subtitle">Capture your best moments with style and vision</p>
          <p className="hero-description">
            Preserving Malawi's beauty and your precious memories through the lens
          </p>
          <Link to="/booking" className="btn-primary hero-cta">
            Book Your Session
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;