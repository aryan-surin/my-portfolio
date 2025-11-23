import React, { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ScrollToTop Button Component
 * 
 * Provides easy navigation back to top of page
 * Features:
 * - Appears after scrolling 300px down
 * - Smooth scroll animation
 * - Accessible with ARIA labels
 * - Trust-building blue color
 * 
 * UX Benefits:
 * - Improves navigation on long pages
 * - Reduces friction in user experience
 * - Professional touch that shows attention to detail
 * 
 * Psychology:
 * - Blue color conveys reliability
 * - Smooth animations create premium feel
 * - Fixed positioning ensures always accessible
 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor scroll position to show/hide button
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 p-4 bg-trust text-white rounded-full shadow-lg hover:bg-trust-dark transition-colors z-40 group"
        >
          {/* Arrow icon with hover animation */}
          <HiArrowUp className="w-6 h-6 group-hover:transform group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
