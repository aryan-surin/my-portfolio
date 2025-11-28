import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
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
  const { theme, toggleTheme } = useTheme();
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
          ? 'bg-cream/80 light:bg-cream/80 dark:bg-navy/80 backdrop-blur-md shadow-light-card light:shadow-light-card dark:shadow-glow-md border-b border-coral/10 light:border-coral/10 dark:border-accent/10'
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
            <h1 className="text-2xl font-bold text-coral light:text-coral dark:text-accent font-mono">
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
                    ? 'text-coral light:text-coral dark:text-accent'
                    : 'text-ink light:text-ink dark:text-slate hover:text-coral light:hover:text-coral dark:hover:text-accent'
                }`}
              >
                <span className="text-coral light:text-coral dark:text-accent text-sm font-mono">{link.number}.</span>
                <span className="text-sm font-medium text-ink-lightest light:text-ink-lightest dark:text-slate-lightest">{link.label}</span>
              </motion.button>
            ))}

            {/* Resume Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/projects/aryan-surin-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-accent dark:border-accent light:border-coral text-coral light:text-coral dark:text-accent dark:text-accent light:text-coral rounded hover:bg-coral/ light:bg-coral/ dark:bg-accent/10 dark:hover:bg-accent/10 light:hover:bg-coral/10 transition-all duration-200 text-sm font-mono"
            >
              Resume
            </motion.a>

            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 border border-coral/ light:border-coral/ dark:border-accent/30 dark:border-accent/30 light:border-coral/30 text-coral light:text-coral dark:text-accent dark:text-accent light:text-coral rounded hover:bg-coral/ light:bg-coral/ dark:bg-accent/10 dark:hover:bg-accent/10 light:hover:bg-coral/10 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <HiSun className="w-5 h-5" />
              ) : (
                <HiMoon className="w-5 h-5" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle Button - Mobile */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 border border-coral/ light:border-coral/ dark:border-accent/30 text-coral light:text-coral dark:text-accent rounded hover:bg-coral/10 light:hover:bg-coral/10 dark:hover:bg-accent/10 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <HiSun className="w-5 h-5" />
              ) : (
                <HiMoon className="w-5 h-5" />
              )}
            </motion.button>

            {/* Hamburger Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-ink-lightest light:text-ink-lightest dark:text-slate-lightest p-2 hover:bg-coral/10 light:hover:bg-coral/10 dark:hover:bg-navy-light hover:rounded-lg transition-colors"
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

      {/* Mobile Menu - Full screen overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-white light:bg-white dark:bg-navy md:hidden overflow-y-auto"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, height: '100vh', width: '100vw' }}
          >
            {/* Close button at top */}
            <div className="flex justify-end p-6 sticky top-0 bg-white/95 light:bg-white/95 dark:bg-navy/95 backdrop-blur-sm z-10">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-900 light:text-gray-900 dark:text-slate-lightest p-3 hover:bg-coral/10 light:hover:bg-coral/10 dark:hover:bg-accent/10 rounded-lg transition-colors border border-gray-300 light:border-gray-300 dark:border-accent/30"
                aria-label="Close menu"
              >
                <HiX className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] space-y-10 px-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(link.id)}
                  className="flex flex-col items-center space-y-2 w-full py-3"
                >
                  <span className="text-coral light:text-coral dark:text-accent text-base font-mono font-semibold">{link.number}.</span>
                  <span className={`text-3xl font-bold ${
                    activeSection === link.id
                      ? 'text-coral light:text-coral dark:text-accent'
                      : 'text-gray-900 light:text-gray-900 dark:text-slate-lightest hover:text-coral light:hover:text-coral dark:hover:text-accent'
                  } transition-colors duration-200`}>{link.label}</span>
                </motion.button>
              ))}
              
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                href="/projects/aryan-surin-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-coral light:border-coral dark:border-accent text-coral light:text-coral dark:text-accent font-semibold rounded-lg hover:bg-coral/10 light:hover:bg-coral/10 dark:hover:bg-accent/10 transition-all duration-200 text-xl font-mono mt-6"
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
