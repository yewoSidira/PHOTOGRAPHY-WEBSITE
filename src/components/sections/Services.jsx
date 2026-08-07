import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    title: "Wedding Photography",
    price: "Custom Quote",
    featured: true,
    description:
      "Elegant storytelling for one of life's most important celebrations.",
    includes: [
      "Full-day coverage",
      "Professionally edited gallery",
      "Online delivery",
      "Optional videography"
    ]
  },

  {
    title: "Portrait Sessions",
    price: "From MK 50,000",
    description:
      "Professional portraits for individuals, couples and families.",
    includes: [
      "1–2 hour session",
      "Edited high-resolution images",
      "Location of your choice",
      "Online gallery"
    ]
  },

  {
    title: "Graduation Sessions",
    price: "From MK 60,000",
    description:
      "Celebrate your academic milestone with timeless graduation portraits.",
    includes: [
      "Campus session",
      "Family portraits",
      "Edited gallery",
      "Multiple locations"
    ]
  },

  {
    title: "Birthdays & Celebrations",
    price: "From MK 80,000",
    description:
      "Capture every laugh, smile and unforgettable moment.",
    includes: [
      "Event coverage",
      "Group portraits",
      "Edited photographs",
      "Fast delivery"
    ]
  },

  {
    title: "Corporate Events",
    price: "From MK 250,000",
    description:
      "Professional coverage for conferences, launches and business events.",
    includes: [
      "Corporate branding",
      "Speaker coverage",
      "Team photographs",
      "Media-ready images"
    ]
  },

  {
    title: "Fashion & Branding",
    price: "From MK 120,000",
    description:
      "Creative photography for brands, influencers and businesses.",
    includes: [
      "Creative direction",
      "Professional retouching",
      "Studio or location",
      "Commercial usage"
    ]
  },

  {
    title: "Photography + Videography",
    price: "Custom Quote",
    description:
      "Complete visual coverage for clients wanting both photography and cinematic video.",
    includes: [
      "Photography",
      "Highlight video",
      "Professional editing",
      "Premium delivery"
    ]
  }
];

const Services = () => {

  return (

    <section className="services-section section-padding" id="services">

      <div className="container">

        <h2 className="section-title">
          Photography Experiences
        </h2>

        <p className="section-subtitle">
          Professional photography and videography tailored to your story.
        </p>

        <div className="services-grid">

          {services.map((service) => (

            <div
              key={service.title}
              className={`service-card ${service.featured ? "featured" : ""}`}
            >

              {service.featured && (
                <div className="service-badge">
                  Most Popular
                </div>
              )}

              <h3>{service.title}</h3>

              <p className="service-description">
                {service.description}
              </p>

              <div className="service-price">
                {service.price}
              </div>

              <ul className="service-list">

                {service.includes.map(item => (

                  <li key={item}>{item}</li>

                ))}

              </ul>

              <Link
                to="/booking"
                className="service-button"
              >
                Book Consultation
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default memo(Services);
