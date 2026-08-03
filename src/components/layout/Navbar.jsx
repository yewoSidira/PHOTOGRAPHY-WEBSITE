import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (

    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="navbar-container">


        <Link 
          to="/" 
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span>23/11</span>
          <small>Photography</small>
        </Link>



        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>


          <Link 
            to="/booking" 
            className="navbar-book"
            onClick={closeMenu}
          >
            Book Now
          </Link>

        </div>



        <button
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