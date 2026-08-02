import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Gallery from './components/sections/Gallery';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Booking from './components/Booking';
import './styles/variables.css';
import './styles/globals.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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

export default App;