import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const location = useLocation();

  const isBooking = location.pathname === "/booking";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 40;
      setScrolled((prevScrolled) => (prevScrolled === nextScrolled ? prevScrolled : nextScrolled));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <nav
      className={`navbar
      ${scrolled ? "scrolled" : ""}
      ${isBooking ? "booking-navbar" : ""}`}
    >

      <div className="navbar-container">

        <HashLink
          smooth
          to="/#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span>23/11</span>
          <small>Photography</small>
        </HashLink>

        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>

          <HashLink smooth to="/#home" onClick={closeMenu}>
            Home
          </HashLink>

          <HashLink smooth to="/#gallery" onClick={closeMenu}>
            Gallery
          </HashLink>

          <HashLink smooth to="/#about" onClick={closeMenu}>
            About
          </HashLink>

          <HashLink smooth to="/#services" onClick={closeMenu}>
            Services
          </HashLink>

          <HashLink
            to="/booking"
            className="navbar-book"
            onClick={closeMenu}
          >
            Book Now
          </HashLink>

        </div>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </nav>

  );

};

export default Navbar;