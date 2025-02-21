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
        <section className="booking-form">
            <h2>Book Your Session</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Service</label>
                    <select name="service" value={formData.service} onChange={handleChange} required>
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
                    <label>Preferred Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Additional Notes</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows="5"></textarea>
                </div>
                <button type="submit">Submit Booking</button>
            </form>
        </section>
    );
};

export default Booking;