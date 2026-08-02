import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <h2 className="section-title">Why Choose 23/11 Photography?</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              At <strong>23/11 Photography</strong>, we believe that every moment is worth capturing. 
              Whether it's a wedding, birthday, or corporate event, we specialize in turning your 
              special moments into timeless memories.
            </p>
            <p>
              With years of experience and a passion for creativity, we go above and beyond to 
              ensure that every shot is perfect. From consultation to final delivery, we work 
              closely with you to understand your vision.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">✨</span>
                <h4>Professional Expertise</h4>
                <p>Skilled in various styles, from candid to posed portraits</p>
              </div>
              <div className="feature">
                <span className="feature-icon">📸</span>
                <h4>State-of-the-Art Equipment</h4>
                <p>Latest cameras and editing tools for top-notch quality</p>
              </div>
              <div className="feature">
                <span className="feature-icon">💖</span>
                <h4>Personalized Service</h4>
                <p>Tailored to meet your specific needs and vision</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🎉</span>
                <h4>Affordable Packages</h4>
                <p>Flexible pricing to suit every budget</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src="https://via.placeholder.com/600x400/1a2a3a/ffffff?text=23/11+Photography+Team" 
              alt="23/11 Photography team at work in Malawi" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;