import React from 'react';
import AboutUs1 from './images/AboutUs1.jpg'; // Import your images
import AboutUs2 from './images/AboutUs2.jpg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section className="about-us">
            <h2>Why Choose 23/11 Photography?</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        At <strong>23/11 Photography</strong>, we believe that every moment is worth capturing. 
                        Whether it's a wedding, birthday, or corporate event, we specialize in turning your 
                        special moments into timeless memories. Our team of professional photographers is 
                        dedicated to delivering high-quality images that tell your unique story.
                    </p>
                    <p>
                        With years of experience and a passion for creativity, we go above and beyond to 
                        ensure that every shot is perfect. From the initial consultation to the final delivery, 
                        we work closely with you to understand your vision and bring it to life.
                    </p>
                    <p>
                        Here’s why you should choose us:
                    </p>
                    <ul>
                        <li>✨ <strong>Professional Expertise</strong>: Our photographers are skilled in various styles, from candid shots to posed portraits.</li>
                        <li>📸 <strong>State-of-the-Art Equipment</strong>: We use the latest cameras and editing tools to ensure top-notch quality.</li>
                        <li>💖 <strong>Personalized Service</strong>: Every client is unique, and we tailor our services to meet your specific needs.</li>
                        <li>🎉 <strong>Affordable Packages</strong>: We offer flexible pricing to suit every budget.</li>
                    </ul>
                    <p>
                        Let us capture your story. <strong>Book your session today!</strong>
                    </p>
                </div>
                <div className="about-images">
                    <img src={AboutUs1} alt="Photographer at work" />
                    <img src={AboutUs2} alt="Happy clients" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;