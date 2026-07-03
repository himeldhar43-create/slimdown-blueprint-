import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

// Scroll to Top Utility on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Immediate scroll to prevent jerky animation transitions
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FAFAF8] text-[#333333] selection:bg-[#1D9E75]/20 selection:text-[#0F6E56]">
        {/* Navigation Header */}
        <Navbar />

        {/* Primary Content Viewport */}
        <main className="flex-grow">
          <Routes>
            {/* Primary Landing Page */}
            <Route path="/" element={<Home />} />

            {/* Shop Directory */}
            <Route path="/shop" element={<Shop />} />

            {/* Dynamic Product Detail Paths */}
            <Route path="/products/:slug" element={<ProductDetail />} />

            {/* Customer Review Dashboard */}
            <Route path="/reviews" element={<Reviews />} />

            {/* Brand Mission & Methodology */}
            <Route path="/about" element={<About />} />

            {/* Blog Directory & Dynamic Blog Reading Engine */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Blog />} />

            {/* Support Desk FAQ & Form */}
            <Route path="/contact" element={<Contact />} />

            {/* Compliant Legal Frameworks */}
            <Route path="/privacy-policy" element={<Legal />} />
            <Route path="/terms" element={<Legal />} />
            <Route path="/disclaimer" element={<Legal />} />

            {/* Fallback Catch-All Redirects back to Shop */}
            <Route path="*" element={<Shop />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
