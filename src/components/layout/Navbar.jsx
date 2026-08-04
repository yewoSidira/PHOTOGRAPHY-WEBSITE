import React, { useEffect, useState } from "react";

import { HashLink } from "react-router-hash-link";
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


          <HashLink  to="/booking" className="navbar-book" onClick={closeMenu}>
            Book Now
          </HashLink>

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