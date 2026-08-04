import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {

return(

<section
id="home"
className="hero"
>

<div className="hero-image"/>

<div className="hero-overlay"/>

<div className="container hero-content">

<span className="hero-tag">

Premium Photography • Malawi

</span>

<h1>

Every Story Begins
<br/>
With A Moment.

</h1>

<p>

Timeless photography for weddings,
portraits, graduations and unforgettable
celebrations across Malawi.

</p>

<Link
to="/booking"
className="hero-btn"
>

Book Your Session

</Link>

<a
href="#gallery"
className="hero-scroll"
>

View Portfolio ↓

</a>

</div>

<div className="hero-fade"/>

</section>

);

};

export default Hero;