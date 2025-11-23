import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { scrollToSection } from '../utils/helpers';

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
          className="text-accent font-mono text-base md:text-lg mb-5"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-lightest mb-4"
        >
          Aryan Surin.
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate mb-6"
        >
          I build exceptional digital experiences.
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-slate max-w-2xl text-base md:text-lg leading-relaxed mb-8"
        >
          I'm a <span className="text-accent font-semibold">Full Stack Developer</span> specializing 
          in <span className="text-accent font-semibold">Frontend Development</span>, with over 3 
          years of experience crafting beautiful, responsive, and user-centric web applications. 
          Currently focused on building accessible, performant products using modern technologies 
          like React, Vue, and Next.js.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-accent text-navy font-semibold rounded-lg hover:bg-accent-hover transition-all duration-200 shadow-lg hover:shadow-accent/50"
          >
            View My Work
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-200"
          >
            Get In Touch
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
            <HiArrowDown className="w-6 h-6 text-accent" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
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
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -bottom-32 -left-48 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;
