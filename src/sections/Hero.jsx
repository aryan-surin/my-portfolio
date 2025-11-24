import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { scrollToSection } from '../utils/helpers';
import FloatingCode from '../components/FloatingCode';

/**
 * Hero Section Component
 * 
 * Features:
 * - Animated text introduction
 * - Gradient text effects
 * - CTA buttons with hover animations
 * - Responsive typography
 * - Scroll indicator
 */
const Hero = () => {
  // Animation variants for text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full"
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-light font-mono text-base md:text-lg mb-5"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-light mb-4"
        >
          Aryan Surin.
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-6"
        >
          I build exceptional digital experiences.
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-light max-w-2xl text-base md:text-lg leading-relaxed mb-8"
        >
          I'm a <span className="text-light font-semibold">Full Stack Developer</span> specializing 
          in <span className="text-light font-semibold">Frontend Development</span>, with over 3 
          years of experience crafting beautiful, responsive, and user-centric web applications. 
          Currently focused on building accessible, performant products using modern technologies 
          like React, Vue, and Next.js.
        </motion.p>

        {/* CTA Buttons - Trust-building colors with micro-interactions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          {/* Primary CTA - Premium coral gradient */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-premium-coral text-white font-semibold rounded-lg hover:shadow-premium-coral transition-all duration-300 shadow-premium-md group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                className="inline-block"
              >
                →
              </motion.span>
            </span>
            {/* Animated shine effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
          
          {/* Secondary CTA - Premium blue outline */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 font-semibold rounded-lg hover:bg-light-accent-secondary:bg-accent hover:text-white:text-navy transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get In Touch
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 15 }}
                className="inline-block"
              >
                ✉
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <HiArrowDown className="w-6 h-6 text-light" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Code Snippets - GSAP Animation */}
      <FloatingCode />

      {/* Decorative Background Elements - Trust-building gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Accent color gradient - top right */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -right-48 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
        
        {/* Trust blue gradient - bottom left */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -bottom-32 -left-48 w-96 h-96 bg-trust rounded-full blur-3xl"
        />
        
        {/* Success green gradient - middle right (subtle) */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-1/2 right-0 w-64 h-64 bg-success rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;
