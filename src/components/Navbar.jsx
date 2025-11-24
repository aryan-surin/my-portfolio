import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { scrollToSection, getActiveSection, debounce } from '../utils/helpers';

/**
 * Navbar Component
 * 
 * Features:
 * - Sticky positioning with backdrop blur
 * - Active section highlighting
 * - Mobile responsive hamburger menu
 * - Smooth scroll navigation
 * - Animated transitions with Framer Motion
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navigation links configuration
  const navLinks = [
    { id: 'home', label: 'Home', number: '01' },
    { id: 'about', label: 'About', number: '02' },
    { id: 'experience', label: 'Experience', number: '03' },
    { id: 'projects', label: 'Projects', number: '04' },
    { id: 'contact', label: 'Contact', number: '05' },
  ];

  /**
   * Handle scroll events for navbar styling and active section detection
   */
  useEffect(() => {
    const handleScroll = debounce(() => {
      // Add shadow to navbar when scrolled
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.id);
      const active = getActiveSection(sections);
      setActiveSection(active);
    }, 10);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Handle navigation link click
   * @param {string} sectionId - Target section ID
   */
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  /**
   * Prevent body scroll when mobile menu is open
   */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <h1 className="text-2xl font-bold text-accent font-mono">
              {'<AS />'}
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(link.id)}
                className={`group flex items-center space-x-1 transition-colors duration-200 ${
                  activeSection === link.id
                    ? 'text-accent'
                    : 'text-slate hover:text-accent'
                }`}
              >
                <span className="text-accent text-sm font-mono">{link.number}.</span>
                <span className="text-sm font-medium text-slate-lightest">{link.label}</span>
              </motion.button>
            ))}

            {/* Resume Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-accent text-accent rounded hover:bg-accent/10 transition-all duration-200 text-sm font-mono"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-light p-2 hover:bg-navy-light:bg-navy-light hover:rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-20 bg-light md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex flex-col items-center space-y-1 ${
                    activeSection === link.id
                      ? 'text-accent'
                      : 'text-slate hover:text-accent'
                  } transition-colors duration-200`}
                >
                  <span className="text-light text-sm font-mono">{link.number}.</span>
                  <span className="text-2xl font-medium text-light">{link.label}</span>
                </motion.button>
              ))}
              
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-accent text-light rounded hover:bg-accent/10:bg-accent/10 transition-all duration-200 text-lg font-mono mt-4"
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
