import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./navigation/navbar";
import ScrollToTop from "./navigation/scrolltoTop";
import Footer from "./navigation/footer";
import AIChatWidget from "./components/AIChatWidget";
import { logPageView } from "./utils/analytics";

// Lazy load pages for code splitting - organized by navigation order
const Home = lazy(() => import("./pages/1homePage/1homePage"));
const About = lazy(() => import("./pages/2aboutPage/1aboutPage"));
const Service = lazy(() => import("./pages/3servicePage/1servicePage"));
const Portfolio = lazy(() => import("./pages/4portfolioPage/1portfolioPage"));
const Gallery = lazy(() => import("./pages/5galleryPage/1galleryPage"));
const FAQ = lazy(() => import("./pages/6faqPage/1faqPage"));
const Contact = lazy(() => import("./pages/7contactPage/1contactPage"));
const Company = lazy(() => import("./pages/8companyPage/1companyPage"));
const PrivacyPolicy = lazy(() => import("./pages/9privacyPage/1privacyPage"));
const TermsOfService = lazy(() => import("./pages/10termsPage/1termsPage"));
const RequestQuote = lazy(() => import("./navigation/requestQuote"));

// Component to track page views
function Analytics() {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-primary)]">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-[var(--color-primary-600)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-[var(--color-primary-600)] font-semibold text-xs">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="w-full overflow-x-hidden">
        <Analytics />
        <ScrollToTop />
        <Navbar />
        <div className="w-full mt-[60px] bg-[var(--color-bg-primary)] min-h-screen flex flex-col items-center">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/company" element={<Company />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/request-quote" element={<RequestQuote />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <AIChatWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;
