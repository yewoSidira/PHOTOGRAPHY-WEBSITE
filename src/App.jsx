import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Gallery from './components/sections/Gallery';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Booking from './components/Booking';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './styles/variables.css';
import './styles/globals.css';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Gallery />
              <About />
              <Services />
            </>
          } />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function ScrollToTop(){

    const { pathname } = useLocation();

    useEffect(() => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },[pathname]);

    return null;

}

export default App;