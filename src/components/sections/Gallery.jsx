import React from "react";
import { Link } from "react-router-dom";
import { galleryImages } from "../../data/galleryData";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery-section section-padding" id="gallery">

      <div className="container">

        <h2 className="section-title">
          Featured Work
        </h2>

        <p className="section-subtitle">
          A selection of some of our favourite moments. Every photograph tells a story, and every story deserves to be remembered.
        </p>

        <div className="gallery-grid">

          {galleryImages.map((image) => (

            <div
              key={image.id}
              className="gallery-item"
              tabIndex="0"
            >

              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />

              <div className="gallery-overlay">

                <span className="gallery-category">
                  {image.category}
                </span>

              </div>

            </div>

          ))}

        </div>

        <div className="gallery-footer">

          <button
            className="gallery-btn gallery-btn-secondary"
            type="button"
          >
            View Full Gallery
          </button>

          <Link
            to="/booking"
            className="gallery-btn gallery-btn-primary"
          >
            Book Your Session
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Gallery;