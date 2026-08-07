import React, { memo } from "react";
import "./About.css";

const features = [
  {
    title: "Professional Coverage",
    description:
      "From intimate portraits to large celebrations, every session is approached with creativity and attention to detail.",
  },
  {
    title: "Natural Storytelling",
    description:
      "We focus on genuine emotions and authentic moments that you'll treasure for years to come.",
  },
  {
    title: "Fast Delivery",
    description:
      "Professionally edited images delivered on time without compromising quality.",
  },
  {
    title: "Client First",
    description:
      "Every shoot is tailored around your vision to create photographs that truly reflect your story.",
  },
];

const About = () => {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <span className="about-label">ABOUT 23/11 PHOTOGRAPHY</span>

            <h2>
              Every Picture Has A Story.
              <br />
              We Make Sure It's Told Beautifully.
            </h2>

            <p>
              Based in Malawi, 23/11 Photography exists to capture life's most
              meaningful moments with authenticity, creativity and timeless
              quality. Whether it's a wedding, graduation, portrait or special
              event, our goal is simple—create photographs you'll be proud to
              revisit for years to come.
            </p>

            <p>
              We believe the best photographs aren't staged—they're felt.
              That's why every session is built around your personality, your
              family and your story.
            </p>

            <div className="about-features">
              {features.map((feature) => (
                <div className="feature-card" key={feature.title}>
                  <div className="feature-line"></div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-image">
            <img
              src="/images/gallery/photo3.webp"
              alt="Photographer capturing a wedding"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
