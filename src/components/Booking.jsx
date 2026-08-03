import React, { useState } from 'react';
import './booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for booking! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      service: '',
      date: '',
      message: ''
    });
  };

  return (
    <section className="booking-section section-padding">
      <div className="container">
        <h2 className="section-title">Book Your Session</h2>
        <p className="section-subtitle">Let's capture your special moments together</p>
        
        <div className="booking-container">
          <div className="booking-info">
            <h3>Ready to book?</h3>
            <p>Fill out the form and we'll get back to you within 24 hours to confirm your session details.</p>
            <div className="booking-info-details">
              <div>
                <strong>📞 Phone:</strong>
                <span>+265 886 646 326</span>
              </div>
              <div>
                <strong>📧 Email:</strong>
                <span>ianbinali@gmail.com</span>
              </div>
              <div>
                <strong>📍 Location:</strong>
                <span>Malawi (Available nationwide)</span>
              </div>
            </div>
          </div>
          
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name"
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="e.g., John Banda"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="e.g., john@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service</label>
              <select 
                id="service"
                name="service" 
                value={formData.service} 
                onChange={handleChange} 
                required
              >
                <option value="">Select a Service</option>
                <option value="Weddings">Weddings</option>
                <option value="Birthdays">Birthdays</option>
                <option value="Anniversaries">Anniversaries</option>
                <option value="Graduations">Graduations</option>
                <option value="Corporate Events">Corporate Events</option>
                <option value="Fashion Shoots">Fashion Shoots</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input 
                type="date" 
                id="date"
                name="date" 
                value={formData.date} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Additional Notes</label>
              <textarea 
                id="message"
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="4"
                placeholder="Any specific requests or details about your event..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary submit-btn">
              Submit Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;