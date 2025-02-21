import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import AboutUs from './components/AboutUs';
import Gallery from './components/gallery';
import Services from './components/services';
import Booking from './components/booking';
import Footer from './components/footer';
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
                            <AboutUs />
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