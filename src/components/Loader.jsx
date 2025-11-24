import React from 'react';
import { motion } from 'framer-motion';

/**
 * Loader Component
 * 
 * Displays a branded loading animation during initial page load
 * Features:
 * - Smooth fade-in/fade-out transitions
 * - Rotating spinner with accent color
 * - Your brand logo/initials in the center
 * - Professional and engaging first impression
 * 
 * Usage:
 * - Wrap around main content with conditional rendering
 * - Set loading state based on content readiness
 * 
 * Psychology:
 * - Professional animation builds trust
 * - Branded loader reinforces identity
 * - Smooth transitions create premium feel
 */
const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy"
    >
      {/* Spinning border with accent color */}
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="w-20 h-20 border-4 border-navy-lighter border-t-accent rounded-full"
        />
        
        {/* Brand initials in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-coral light:text-coral dark:text-accent text-xl font-bold">
            {'<AS />'}
          </span>
        </div>
      </div>

      {/* Loading text with pulse animation */}
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
        className="mt-6 text-ink-light light:text-ink-light dark:text-slate-light font-mono text-sm"
      >
        Loading portfolio...
      </motion.p>
    </motion.div>
  );
};

export default Loader;
