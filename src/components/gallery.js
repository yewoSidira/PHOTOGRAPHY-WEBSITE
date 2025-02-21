import React from 'react';  
 
import './gallery.css';

const Gallery = () => {
    const photos = [
        'photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg',
        'photo5.jpg', 'photo6.jpg', 'photo7.jpg', 'photo8.jpg',
        'photo9.jpg', 'photo10.jpg', 'photo11.jpg', 'photo12.jpg'
    ];

    return (
        <section className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-container">
                {photos.map((photo, index) => (
                    <div key={index} className="gallery-item">
                        <img src={`/${photo}`} alt={`Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;