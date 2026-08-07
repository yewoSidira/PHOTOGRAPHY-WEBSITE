import React, { memo } from "react";
import { Link } from "react-router-dom";
import { heroData } from "../../data/heroData";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-media">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={heroData.mobileImage}
            type="image/webp"
          />
          <img
            className="hero-image"
            src={heroData.image}
            alt={heroData.alt}
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>

      <div className="hero-overlay" />

      <div className="container hero-content">
        <span className="hero-tag">{heroData.subtitle}</span>

        <h1>{heroData.title}</h1>

        <p>{heroData.description}</p>

        <div className="hero-buttons">
          <Link to="/booking" className="hero-btn">
            Book Your Session
          </Link>

          <a href="#gallery" className="hero-scroll">
            View Featured Work ⬇
          </a>
        </div>
      </div>

      <div className="hero-fade" />
    </section>
  );
};

export default memo(Hero);
