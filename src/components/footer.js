import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-about">
                    <h3>About</h3>
                    <p>Capturing moments, one frame at a time. Welcome to 23/11, where every shot tells a story.</p>
                </div>
                <div className="contact-info">
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mailto:ianbinali@gmail.com">ianbinali@gmail.com</a></p>
                    <p>Instagram: <a href="https://instagram.com/art_by_vanrick">@art_by_vanrick</a></p>
                    <p>Phone: <a href="tel:+265886646326">+265 886 646 326</a></p>
                </div>
            </div>
            <div className="copyright">&copy; 2025 23/11 Photography. All rights reserved.</div>
        </footer>
    );
};

export default Footer;