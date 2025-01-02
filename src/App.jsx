import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navigation/navbar"; // Import Navbar here
import Home from "./pages/1homePage/1homePage";
import About from "./pages/2aboutPage/1aboutHeroSection";
import Services from "./pages/3servicesPage/1servicePage";
import Contact from "./pages/4contactPage/contactPage";
import Footer from "./navigation/footer"

function App() {
  return (
    <BrowserRouter>
      {/* Navbar appears here, wrapping all routes */}
      <Navbar />
      <div className="mt-[15vh]"> {/* Add margin to avoid overlap with fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* Add Footer component */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
