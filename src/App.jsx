import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navigation/navbar";
import ScrollToTop from "./navigation/scrolltoTop";
import Home from "./pages/1homePage/1homePage";
import Company from "./pages/2companyPage/1companyPage";
import Discover from "./pages/3DiscoverPage/1discoverpage";
import Contact from "./pages/4contactPage/contactPage";
import Footer from "./navigation/footer";
import RequestQuote from "./navigation/requestQuote";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className="mt-[12vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-quote" element={<RequestQuote />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
