import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

/**
 * Projects Section Component
 * 
 * Features:
 * - Grid layout of project cards
 * - Hover effects and animations
 * - Tech stack badges
 * - Live demo and GitHub links
 * - Responsive design
 */
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  /**
   * Projects data structure
   * Real freelance projects showcasing full-stack development expertise
   */
  const projects = [
    {
      title: 'Nishkalanka Mata English School',
      description: 'Comprehensive school management website with an advanced online admission portal system integrated with Supabase backend. Features dynamic announcements, news management, events calendar, gallery system, and secure document submission workflow. Built from scratch with modern SEO optimization and mobile-first responsive design serving 500+ students and parents.',
      image: '/projects/project1.jpg',
      tech: ['Nuxt.js', 'Vue.js', 'Supabase', 'Tailwind CSS', 'TypeScript'],
      liveUrl: 'https://nishkalankamataenglish.school/',
      githubUrl: null,
      featured: true,
    },
    {
      title: 'Thapa Construction',
      description: 'Full-featured construction company website with custom admin panel for project portfolio management connected to Supabase. Includes dynamic project showcase with image galleries, service pages, client testimonials, contact forms with automated email notifications, and SEO-optimized content. The admin panel enables real-time content updates without developer intervention.',
      image: '/projects/project2.jpg',
      tech: ['Nuxt.js', 'Vue.js', 'Supabase', 'SCSS', 'Pinia'],
      liveUrl: 'https://www.thapaconstruction.com/',
      githubUrl: null,
      featured: true,
    },
    {
      title: 'Saint Teresa\'s Girls\' High School',
      description: 'Modern, elegant school website for a prestigious Darjeeling institution featuring responsive design, admission information system, photo gallery with lightbox functionality, faculty profiles, and interactive contact forms. Implemented with performance optimization achieving 95+ Lighthouse scores and cross-browser compatibility ensuring seamless experience across all devices.',
      image: '/projects/project3.jpg',
      tech: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'SCSS'],
      liveUrl: 'https://saintteresaschooldarj.co.in/',
      githubUrl: null,
      featured: false,
    },
    {
      title: 'Revival Gel Church',
      description: 'Beautiful, spiritually-focused church website featuring sermon archives, event management system, Bible study resources with custom highlighting guide, community gallery, prayer request forms, and donation integration. Built with accessibility-first approach (WCAG 2.1 compliant) and optimized for fast loading on all network conditions to serve the global faith community.',
      image: '/projects/project4.jpg',
      tech: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
      liveUrl: 'https://www.revivalgelchurch.com/',
      githubUrl: null,
      featured: false,
    },
    {
      title: 'Personal Portfolio',
      description: 'Modern, interactive developer portfolio built with React showcasing professional experience, projects, and technical skills. Features smooth GSAP animations, dark/light theme toggle with system preference detection, responsive design with mobile-first approach, and optimized performance with code splitting. Demonstrates mastery of modern React ecosystem and UI/UX best practices.',
      image: '/projects/project5.jpg',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
      liveUrl: 'https://aryansurin.vercel.app/',
      githubUrl: null,
      featured: true,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-cream light:bg-cream dark:bg-navy relative overflow-hidden">
      {/* Accent glow overlay */}
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-coral/ light:bg-coral/ dark:bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-trust/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Heading */}
          <h2 className="numbered-heading before:content-['03.']">
            Things I've Built
          </h2>

          {/* Projects Grid */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Project Image */}
                <div
                  className={`relative md:col-span-7 group ${
                    index % 2 === 0 ? '' : 'md:col-start-6'
                  }`}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative rounded-lg overflow-hidden"
                  >
                    {/* Project Image */}
                    <div className="relative aspect-video bg-cream-elevated light:bg-cream-elevated dark:bg-navy-lighter border border-coral/ light:border-coral/ dark:border-accent/20 shadow-light-card light:shadow-light-card dark:shadow-card group-hover:shadow-light-card-hover light:shadow-light-card-hover dark:shadow-card-hover transition-all duration-300 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-coral/ light:bg-coral/ dark:bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>

                {/* Project Details */}
                <div
                  className={`md:col-span-6 ${
                    index % 2 === 0
                      ? 'md:col-start-7 md:text-right'
                      : 'md:col-start-1 md:row-start-1 md:text-left'
                  } z-10`}
                >
                  {/* Featured Label */}
                  {project.featured && (
                    <p className="text-ink-lightest light:text-ink-lightest dark:text-slate-lightest font-mono text-sm mb-2">
                      Featured Project
                    </p>
                  )}

                  {/* Project Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-ink-lightest light:text-ink-lightest dark:text-slate-lightest mb-4 hover:text-coral light:text-coral dark:text-accent transition-colors duration-200">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>

                  {/* Project Description */}
                  <div className="bg-cream-elevated light:bg-cream-elevated dark:bg-navy-lighter p-6 rounded-lg shadow-light-card light:shadow-light-card dark:shadow-card mb-4 border border-coral/ light:border-coral/ dark:border-accent/10">
                    <p className="text-ink light:text-ink dark:text-slate text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div
                    className={`flex flex-wrap gap-3 mb-4 font-mono text-sm ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-cream-elevated light:bg-cream-elevated dark:bg-navy-lighter border border-coral/ light:border-coral/ dark:border-accent/20 rounded-full text-coral light:text-coral dark:text-accent hover:border-coral/ light:hover:border-coral/ dark:hover:border-accent/40 hover:shadow-light-glow-sm light:shadow-light-glow-sm dark:shadow-glow-sm transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div
                    className={`flex gap-4 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}
                  >
                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink-lightest light:text-ink-lightest dark:text-slate-lightest hover:text-coral light:text-coral dark:text-accent transition-colors duration-200"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub className="w-6 h-6" />
                      </motion.a>
                    )}
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-lightest light:text-ink-lightest dark:text-slate-lightest hover:text-coral light:text-coral dark:text-accent transition-colors duration-200"
                      aria-label="Live Demo"
                    >
                      <HiExternalLink className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-16"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/aryan-surin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-accent text-coral light:text-coral dark:text-accent rounded-lg hover:bg-coral/ light:bg-coral/ dark:bg-accent/10 hover:shadow-light-glow-sm light:shadow-light-glow-sm dark:shadow-glow-sm transition-all duration-200 font-mono"
            >
              <FaGithub className="w-5 h-5" />
              <span>View More on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
