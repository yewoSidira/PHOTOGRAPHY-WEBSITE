import React, { useEffect, useState } from "react";
import "./Gallery.css";

const Gallery = () => {

  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {

    fetch("/gallery.json")
      .then((response) => response.json())
      .then((data) => setGalleryImages(data))
      .catch((error) => console.error("Error loading gallery:", error));

  }, []);

  return (

    <section
      className="gallery-section section-padding"
      id="gallery"
    >

      <div className="container">

        <h2 className="section-title">
          Featured Work
        </h2>

        <p className="section-subtitle">
          A small collection of moments we've had the privilege to capture.
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
                decoding="async"
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
    type="button"
    className="btn-primary"
>
    View Full Gallery
</button>

        </div>

      </div>

    </section>

  );

};

export default Gallery;