import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

/**
 * Main App Component
 * 
 * Portfolio structure:
 * - Theme provider for dark/light mode
 * - Sticky navigation bar
 * - Hero section (landing)
 * - About section
 * - Experience section
 * - Projects showcase
 * - Contact form
 * - Footer
 * 
 * All sections use smooth scroll and are fully responsive
 */
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-navy text-slate-lightest">
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
