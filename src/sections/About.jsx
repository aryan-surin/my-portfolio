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
    <section id="about" className="section-padding bg-cream light:bg-cream dark:bg-navy relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-coral/ light:bg-coral/ dark:bg-accent/5 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Heading */}
          <h2 className="numbered-heading before:content-['01.'] text-ink-lightest light:text-ink-lightest dark:text-slate-lightest">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Bio Content */}
            <div className="md:col-span-2 space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-ink light:text-ink dark:text-slate text-base md:text-lg leading-relaxed"
              >
                Hello! I'm <span className="text-coral light:text-coral dark:text-accent font-semibold">Aryan Surin</span>, 
                a self-driven Frontend Developer who builds fast, clean, and scalable user interfaces. 
                My journey in web development began over <span className="text-coral light:text-coral dark:text-accent font-semibold">3+ years ago</span> as a 
                <span className="text-coral light:text-coral dark:text-accent font-semibold"> self-taught developer</span>—I learned by building, not just studying. 
                I've been captivated by the craft of creating intuitive, visually stunning, and highly performant web experiences ever since.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-ink light:text-ink dark:text-slate text-base md:text-lg leading-relaxed"
              >
                Throughout my career, I've worked on <span className="text-coral light:text-coral dark:text-accent font-semibold">real production projects</span>—refactoring 
                legacy systems, shipping features used by thousands of users, integrating <span className="text-coral light:text-coral dark:text-accent font-semibold">REST & GraphQL APIs</span>, 
                and optimizing UI performance across multiple applications. I specialize in modern frameworks like 
                <span className="text-coral light:text-coral dark:text-accent font-semibold"> Nuxt.js, Vue.js, and React</span>, focusing on building 
                responsive, accessible, and high-performance interfaces that deliver seamless experiences across all devices.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-ink light:text-ink dark:text-slate text-base md:text-lg leading-relaxed"
              >
                I enjoy solving problems through <span className="text-coral light:text-coral dark:text-accent font-semibold">clear UI thinking, debugging, and writing 
                maintainable, modern frontend code</span>. Whether it's implementing pixel-perfect designs, handling complex state 
                management, or improving Core Web Vitals, I approach every challenge with curiosity and precision. When I'm not coding, 
                you'll find me exploring new web technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <p className="text-ink-light light:text-ink-light dark:text-slate-light text-base md:text-lg mb-6 font-medium">
                  Here are some technologies I've been working with recently:
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-cream-elevated light:bg-cream-elevated dark:bg-navy-lighter border border-coral/ light:border-coral/ dark:border-accent/20 rounded-lg text-ink-light light:text-ink-light dark:text-slate-light font-mono text-sm hover:border-coral/ light:hover:border-coral/ dark:hover:border-accent/40 hover:bg-cream-card light:bg-cream-card dark:bg-navy-light hover:text-coral light:text-coral dark:text-accent hover:shadow-light-glow-sm light:shadow-light-glow-sm dark:shadow-glow-sm transition-all duration-300 cursor-default"
                    >
                      {tech}
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
                <div className="relative z-10 rounded-lg overflow-hidden bg-cream-elevated light:bg-cream-elevated dark:bg-navy-lighter border-2 border-coral/ light:border-coral/ dark:border-accent/30 shadow-light-card light:shadow-light-card dark:shadow-card group-hover:border-accent group-hover:shadow-light-card-hover light:shadow-light-card-hover dark:shadow-card-hover transition-all duration-300">
                  <img
                    src="/portfolio-image.jpg"
                    alt="Aryan Surin - Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-coral/ light:bg-coral/ dark:bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Decorative border with glow */}
                <div className="absolute inset-0 rounded-lg border-2 border-coral/ light:border-coral/ dark:border-accent/40 translate-x-5 translate-y-5 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:shadow-light-glow-md light:shadow-light-glow-md dark:shadow-glow-md transition-all duration-300" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
