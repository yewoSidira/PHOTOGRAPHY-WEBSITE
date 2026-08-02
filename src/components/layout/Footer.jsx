import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>23/11 Photography</h3>
          <p>Capturing Malawi's moments, one frame at a time.</p>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:ianbinali@gmail.com">ianbinali@gmail.com</a></p>
          <p>Phone: <a href="tel:+265886646326">+265 886 646 326</a></p>
          <p>Instagram: <a href="https://instagram.com/art_by_vanrick">@art_by_vanrick</a></p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="/booking">Book Now</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2025 23/11 Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;