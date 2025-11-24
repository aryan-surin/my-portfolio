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
   * TODO: Replace with your actual projects
   */
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern, full-featured e-commerce platform with real-time inventory management, secure payment integration, and an intuitive admin dashboard. Built with React and Node.js, featuring advanced search, filtering, and responsive design.',
      image: '/project1.jpg', // Replace with actual image path
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project1',
      featured: true,
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media managers to track engagement metrics across multiple platforms. Features real-time data visualization, customizable reports, and automated insights using Vue.js and Chart.js.',
      image: '/project2.jpg', // Replace with actual image path
      tech: ['Vue.js', 'Nuxt.js', 'Firebase', 'Chart.js', 'SCSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project2',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with drag-and-drop functionality, real-time updates, team collaboration features, and progress tracking. Built with React, featuring offline support and mobile responsiveness.',
      image: '/project3.jpg', // Replace with actual image path
      tech: ['React', 'TypeScript', 'Supabase', 'DnD Kit', 'Bootstrap'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project3',
      featured: false,
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application providing accurate forecasts, historical data, and interactive weather maps. Features location-based weather, severe weather alerts, and a clean, intuitive interface built with React.',
      image: '/project4.jpg', // Replace with actual image path
      tech: ['React', 'OpenWeather API', 'Mapbox', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project4',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-light-bg dark:bg-navy-light/30">
      <div className="max-w-6xl mx-auto">
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
                    {/* Image Placeholder */}
                    <div className="relative aspect-video bg-accent/10 dark:bg-accent/10 bg-light-accent/10 border border-light dark:border-accent/30-accent/30 flex items-center justify-center">
                      <div className="text-center p-8">
                        <HiCode className="w-16 h-16 text-accent/50 dark:text-accent/50 text-light-accent/50 mx-auto mb-4" />
                        <p className="text-light dark:text-slate-light-text-secondary font-mono text-sm">
                          Project Screenshot
                        </p>
                        <p className="text-light dark:text-slate-text-tertiary text-xs mt-2">
                          Replace with actual project image
                        </p>
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-accent/20 dark:bg-accent/20 bg-light-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    <p className="text-light dark:text-accent-accent font-mono text-sm mb-2">
                      Featured Project
                    </p>
                  )}

                  {/* Project Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-light dark:text-slate-lightest-text-primary mb-4 hover:text-light dark:hover:text-accent-accent transition-colors duration-200">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>

                  {/* Project Description */}
                  <div className="bg-light dark:bg-navy-light-bg-alt p-6 rounded-lg shadow-xl mb-4">
                    <p className="text-light dark:text-slate-text-secondary text-base leading-relaxed">
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
                      <span
                        key={techIndex}
                        className="text-light dark:text-slate-text-secondary hover:text-light dark:hover:text-accent-accent transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div
                    className={`flex gap-4 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}
                  >
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light dark:text-slate-text-secondary hover:text-light dark:hover:text-accent-accent transition-colors duration-200"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light dark:text-slate-text-secondary hover:text-light dark:hover:text-accent-accent transition-colors duration-200"
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
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-accent dark:border-accent border-light-accent text-light dark:text-accent-accent rounded-lg hover:bg-accent/10 dark:hover:bg-accent/10 hover:bg-light-accent/10 transition-all duration-200 font-mono"
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
