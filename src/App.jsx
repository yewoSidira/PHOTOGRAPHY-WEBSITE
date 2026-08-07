import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";

import "./styles/variables.css";
import "./styles/globals.css";
import "./App.css";

const Gallery = lazy(() => import("./components/sections/Gallery"));
const About = lazy(() => import("./components/sections/About"));
const Services = lazy(() => import("./components/sections/Services"));
const Booking = lazy(() => import("./components/Booking"));

const SectionFallback = () => (
  <div
    style={{
      minHeight: "18rem",
      background: "var(--color-bg)",
    }}
    aria-hidden="true"
  />
);

const Home = () => (
  <>
    <Hero />

    <Suspense fallback={<SectionFallback />}>
      <Gallery />
    </Suspense>

    <Suspense fallback={<SectionFallback />}>
      <About />
    </Suspense>

    <Suspense fallback={<SectionFallback />}>
      <Services />
    </Suspense>
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/booking"
            element={
              <Suspense fallback={<SectionFallback />}>
                <Booking />
              </Suspense>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
