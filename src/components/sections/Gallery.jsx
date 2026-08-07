import React, { memo } from "react";
import "./Gallery.css";

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/photo2.webp",
    alt: "Beautiful photography moment captured in Malawi",
    category: "Portraits",
  },
  {
    id: 2,
    src: "/images/gallery/photo3.webp",
    alt: "Stunning visual storytelling through photography",
    category: "Creative",
  },
  {
    id: 3,
    src: "/images/gallery/photo10.webp",
    alt: "Capturing authentic moments in Malawi",
    category: "Lifestyle",
  },
  {
    id: 4,
    src: "/images/gallery/photo12.webp",
    alt: "Artistic photography showcasing beauty",
    category: "Artistic",
  },
  {
    id: 5,
    src: "/images/gallery/omar-hakeem-tXUZt640l1A-unsplash.webp",
    alt: "Professional photography session",
    category: "Professional",
  },
  {
    id: 6,
    src: "/images/gallery/premium_photo.webp",
    alt: "Premium photography showcase",
    category: "Featured",
  },
];

const Gallery = () => {
  return (
    <section className="gallery-section section-padding" id="gallery">
      <div className="container">
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">
          A small collection of moments we've had the privilege to capture.
        </p>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item" tabIndex="0">
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />

              <div className="gallery-overlay">
                <span className="gallery-category">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-footer">
          <button type="button" className="btn-primary">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(Gallery);
