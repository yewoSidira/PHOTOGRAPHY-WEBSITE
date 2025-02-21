import React from 'react';
import './services.css';

const Services = () => {
    const services = [
        { name: 'Weddings', price: 'MK25,000 - MK50,000', description: "Full-day coverage, edited photos, and a custom album." },
        { name: 'Birthdays', price: 'MK15,000 - MK30,000', description: "Candid moments, group photos, and fun edits." },
        { name: 'Anniversaries', price: 'MK10,000 - MK20,000', description: "Romantic shots, couple portraits, and a keepsake album."},
        { name: 'Graduations', price: 'MK15,500 - MK35,000', description: "Ceremony coverage, group photos, and individual portraits."},
        { name: 'Corporate Events', price: 'MK45,000 - MK80,000', description: "Professional coverage for conferences, seminars, and team events."},
        { name: 'Fashion Shoots', price: 'MK12,000 - MK18,000', description: "Creative direction, high-quality edits, and portfolio-ready shots." }
    ];

    return (
        <section className="services-pricing">
            <h2>Our Services & Pricing</h2>
            <div className="pricing-table">
                {services.map((service, index) => (
                    <div key={index} className="pricing-card">
                        <h3>{service.name}</h3>
                        <p className="price">{service.price}</p>
                        <button onClick={() => window.location.href = '/booking'}>Book Now</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;