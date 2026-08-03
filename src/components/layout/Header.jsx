import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="container header-content">

        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-text">23/11</span>
          <span className="logo-sub">Photography</span>
        </Link>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>

          <Link
            to="/"
            className="nav-link"
            onClick={closeMenu}
          >
            Home
          </Link>

          <a
            href="#gallery"
            className="nav-link"
            onClick={closeMenu}
          >
            Gallery
          </a>

          <a
            href="#about"
            className="nav-link"
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#services"
            className="nav-link"
            onClick={closeMenu}
          >
            Services
          </a>

          <Link
            to="/booking"
            className="nav-link nav-cta"
            onClick={closeMenu}
          >
            Book Now
          </Link>

        </nav>

        <button
          className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Header;