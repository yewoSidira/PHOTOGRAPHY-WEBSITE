import React from 'react';
import { galleryImages } from '../../data/galleryData';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery-section section-padding" id="gallery">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">Capturing Malawi's beauty, one frame at a time</p>
        
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy"
              />
              {image.category && (
                <span className="gallery-category">{image.category}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;