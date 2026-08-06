import React from "react";
import { Link } from "react-router-dom";
import { heroData } from "../../data/heroData";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">

      {/* Background Image */}
      <div
        className="hero-image"
        style={{
          backgroundImage: `url(${heroData.image})`,
        }}
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="container hero-content">

        <span className="hero-tag">
          {heroData.subtitle}
        </span>

        <h1>
          {heroData.title}
        </h1>

        <p>
          {heroData.description}
        </p>

        <div className="hero-buttons">

          <Link
            to="/booking"
            className="hero-btn"
          >
            Book Your Session
          </Link>

          <a
            href="#gallery"
            className="hero-scroll"
          >
            View Featured Work ⬇
          </a>

        </div>

      </div>

      {/* Fade into next section */}
      <div className="hero-fade" />

    </section>
  );
};

export default Hero;