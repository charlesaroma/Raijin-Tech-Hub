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
      <div className="w-full overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        <div className="w-full mt-[10vh] md:mt-[12vh] lg:mt-[13vh] bg-[var(--color-accent-300)] min-h-screen flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-quote" element={<RequestQuote />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
