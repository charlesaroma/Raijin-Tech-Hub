import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navigation/navbar"; // Import Navbar here
import Home from "./pages/1homePage/1homePage";
import Company from './pages/2companyPage/1companyPage'
import Discover from "./pages/3DiscoverPage/1servicePage";
import Contact from "./pages/4contactPage/contactPage";
import Footer from "./navigation/footer"
import RequestQuote from './navigation/requestQuote'


function App() {
  return (
    <BrowserRouter>
      {/* Navbar appears here, wrapping all routes */}
      <Navbar />
      <div className="mt-[12vh]"> {/* Add margin to avoid overlap with fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/Discover" element={<discover />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-quote" element={<RequestQuote />} />        
        </Routes>
      </div>
      {/* Add Footer component */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
