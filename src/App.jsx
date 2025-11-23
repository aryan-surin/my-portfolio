import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

/**
 * Main App Component
 * 
 * Portfolio structure with trust-building enhancements:
 * - Loading animation for professional first impression
 * - Theme provider for dark/light mode
 * - Sticky navigation bar
 * - Hero section with trust-focused CTAs
 * - About section
 * - Experience section
 * - Projects showcase
 * - Testimonials section (social proof & credibility)
 * - Contact form
 * - Footer
 * - Scroll-to-top button for improved UX
 * 
 * All sections use smooth scroll and are fully responsive
 * Color psychology applied: Blues for trust, greens for success
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time (replace with actual content loading logic)
  useEffect(() => {
    // Minimum loading time for smooth UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <div key="content" className="min-h-screen bg-navy text-slate-lightest">
            {/* Navigation */}
            <Navbar />
            
            {/* Main Content */}
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Testimonials />
              <Contact />
            </main>
            
            {/* Footer */}
            <Footer />
            
            {/* Scroll to Top Button */}
            <ScrollToTop />
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
