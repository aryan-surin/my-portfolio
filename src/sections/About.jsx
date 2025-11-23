import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * About Section Component
 * 
 * Features:
 * - Animated scroll-triggered entrance
 * - Two-column layout (bio + image)
 * - Tech stack grid with icons
 * - Responsive design
 */
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Technologies/Skills
  const technologies = [
    'JavaScript (ES6+)',
    'React.js',
    'Vue.js',
    'Nuxt.js',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'SCSS/SASS',
    'Bootstrap',
    'GraphQL',
    'Supabase',
    'Git & GitHub',
  ];

  return (
    <section id="about" className="section-padding bg-navy-light/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Heading */}
          <h2 className="numbered-heading before:content-['01.']">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Bio Content */}
            <div className="md:col-span-2 space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-slate text-base md:text-lg leading-relaxed"
              >
                Hello! I'm <span className="text-accent font-semibold">Aryan Surin</span>, 
                a passionate Full Stack Developer with a strong focus on frontend development. 
                My journey in web development began over 3 years ago, and I've been captivated 
                by the endless possibilities of creating intuitive and visually stunning user 
                interfaces ever since.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-slate text-base md:text-lg leading-relaxed"
              >
                I specialize in building exceptional digital experiences using modern technologies 
                like <span className="text-accent font-semibold">React</span>, 
                <span className="text-accent font-semibold"> Vue.js</span>, and 
                <span className="text-accent font-semibold"> Nuxt.js</span>. I'm particularly 
                passionate about creating responsive, accessible, and performant web applications 
                that deliver seamless user experiences across all devices.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-slate text-base md:text-lg leading-relaxed"
              >
                When I'm not coding, you'll find me exploring new web technologies, contributing 
                to open-source projects, or sharing my knowledge with the developer community. 
                I'm always eager to take on new challenges and collaborate on exciting projects 
                that push the boundaries of what's possible on the web.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <p className="text-slate text-base md:text-lg mb-4">
                  Here are some technologies I've been working with recently:
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                      className="flex items-center space-x-2 text-slate"
                    >
                      <span className="text-accent text-sm">▹</span>
                      <span className="text-sm font-mono">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Profile Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative group"
            >
              <div className="relative w-full aspect-square max-w-xs mx-auto">
                {/* Image Container */}
                <div className="relative z-10 rounded-lg overflow-hidden bg-accent/10 border-2 border-accent/30 group-hover:border-accent transition-all duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-4xl font-bold text-accent">AS</span>
                      </div>
                      <p className="text-slate-light text-sm font-mono">
                        Profile Photo
                      </p>
                      <p className="text-slate text-xs mt-2">
                        Replace with your image
                      </p>
                    </div>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Decorative border */}
                <div className="absolute inset-0 rounded-lg border-2 border-accent translate-x-5 translate-y-5 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
