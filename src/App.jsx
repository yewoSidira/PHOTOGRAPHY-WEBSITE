import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";

import "./styles/variables.css";
import "./styles/globals.css";
import "./App.css";

// Lazy-loaded components
const Gallery = lazy(() => import("./components/sections/Gallery"));
const About = lazy(() => import("./components/sections/About"));
const Services = lazy(() => import("./components/sections/Services"));
const Booking = lazy(() => import("./components/Booking"));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Suspense
          fallback={
            <div
              style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--color-bg)",
                color: "var(--color-primary)",
                fontSize: "1rem",
                fontWeight: "600",
                letterSpacing: "0.05em",
              }}
            >
              Loading...
            </div>
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Gallery />
                  <About />
                  <Services />
                </>
              }
            />

            <Route path="/booking" element={<Booking />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}

export default App;