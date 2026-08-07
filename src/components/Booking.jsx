import React, { useState } from "react";
import "./booking.css";

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    location: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS will be added later

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
      location: "",
      budget: "",
      message: "",
    });
  };

  if (submitted) {
    return (
      <section className="booking-section">
        <div className="container">

          <div className="booking-success">

            <div className="success-icon">
              ✓
            </div>

            <h2>Booking Request Received</h2>

            <p>
              Thank you for choosing
              <strong> 23/11 Photography.</strong>
            </p>

            <p>
              We'll contact you within
              <strong> 24 hours </strong>
              using the phone number or email you provided to discuss your booking.
            </p>

            <button
              className="btn-primary"
              onClick={() => setSubmitted(false)}
            >
              Book Another Session
            </button>

          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="booking-section">

      <div className="container">

        <div className="booking-header">

          <span className="booking-tag">
            BOOKINGS
          </span>

          <h1>
            Reserve Your Session
          </h1>

          <p>
            Whether you're planning a wedding, graduation,
            corporate event or portrait session,
            we'd love to hear about it.
          </p>

        </div>

        <div className="booking-wrapper">

          <aside className="booking-card">

            <h3>Contact Information</h3>

            <div className="info-block">
              <small>PHONE</small>
              <span>+265 886 646 326</span>
            </div>

            <div className="info-block">
              <small>EMAIL</small>
              <span>ianbinali@gmail.com</span>
            </div>

            <div className="info-block">
              <small>LOCATION</small>
              <span>Based in Malawi</span>
            </div>

            <div className="info-block">
              <small>AVAILABILITY</small>
              <span>Available Nationwide</span>
            </div>

            <div className="info-block">
              <small>RESPONSE TIME</small>
              <span>Within 24 Hours</span>
            </div>

          </aside>

          <form
            className="booking-form"
            onSubmit={handleSubmit}
          >

            <div className="form-grid">

              <div className="form-group">
                <label htmlFor="name">Full Name</label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Banda"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+265..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Optional"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Photography Service</label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Service
                  </option>

                  <option>Wedding Photography</option>

                  <option>Graduation Photography</option>

                  <option>Portrait Session</option>

                  <option>Corporate Event</option>

                  <option>Birthday Celebration</option>

                  <option>Fashion Photography</option>

                  <option>Videography</option>

                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>

                <input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Preferred Time</label>

                <input
                  id="time"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="location">Event Location</label>

                <input
                  id="location"
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Lilongwe, Blantyre, Mzuzu..."
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="budget">Estimated Budget</label>

                <input
                  id="budget"
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g. MK 350,000"
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Tell us about your event</label>

                <textarea
                  id="message"
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share any important details about your event..."
                />
              </div>

            </div>

            <button
              className="btn-primary booking-submit"
              type="submit"
            >
              Reserve Your Session
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Booking;