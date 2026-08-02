import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    { 
      name: 'Weddings', 
      price: 'MK25,000 - MK50,000', 
      description: 'Full-day coverage, edited photos, and a custom album.',
      icon: '💒'
    },
    { 
      name: 'Birthdays', 
      price: 'MK15,000 - MK30,000', 
      description: 'Candid moments, group photos, and fun edits.',
      icon: '🎂'
    },
    { 
      name: 'Anniversaries', 
      price: 'MK10,000 - MK20,000', 
      description: 'Romantic shots, couple portraits, and a keepsake album.',
      icon: '💕'
    },
    { 
      name: 'Graduations', 
      price: 'MK15,500 - MK35,000', 
      description: 'Ceremony coverage, group photos, and individual portraits.',
      icon: '🎓'
    },
    { 
      name: 'Corporate Events', 
      price: 'MK45,000 - MK80,000', 
      description: 'Professional coverage for conferences, seminars, and team events.',
      icon: '🏢'
    },
    { 
      name: 'Fashion Shoots', 
      price: 'MK12,000 - MK18,000', 
      description: 'Creative direction, high-quality edits, and portfolio-ready shots.',
      icon: '👗'
    }
  ];

  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <h2 className="section-title">Our Services & Pricing</h2>
        <p className="section-subtitle">Professional photography for every occasion</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-price">{service.price}</p>
              <Link to="/booking" className="btn-primary service-cta">
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;