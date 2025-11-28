import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Experience Section Component
 * 
 * Features:
 * - Tabbed interface for different positions/companies
 * - Timeline-style layout
 * - Animated entrance on scroll
 * - Responsive design with mobile-friendly tabs
 */
const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState(0);

  /**
   * Experience data structure
   * Real work experience showcasing frontend development expertise
   */
  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'DeepSell (Augmented SCM Pvt Ltd)',
      companyUrl: 'https://deepsell.today/',
      duration: 'Dec 2022 - Dec 2025',
      location: 'Contract • Remote',
      responsibilities: [
        'Spearheaded the frontend development of core product features for a fast-moving AI-commerce startup, architecting scalable solutions using Nuxt.js and Vue.js that serve thousands of users daily',
        'Engineered 20+ production-ready reusable Vue/Nuxt components with advanced state management (Vuex, Pinia), improving development velocity by 45% and ensuring consistent UI/UX across the entire application ecosystem',
        'Integrated multiple REST & GraphQL APIs with optimized data fetching strategies, implementing intelligent caching mechanisms that improved page load performance by 28% and reduced server costs',
        'Reduced API response failures by 40% through implementing comprehensive error handling, retry logic, and fallback mechanisms, significantly enhancing application reliability and user satisfaction',
        'Collaborated closely with cross-functional teams including backend engineers, product managers, and UX designers to deliver pixel-perfect, responsive interfaces that exceeded accessibility standards (WCAG 2.1 AA)',
        'Championed modern frontend best practices including TypeScript integration, atomic design principles, lazy loading strategies, and progressive web app (PWA) capabilities for offline-first experiences',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'DeepSell (Augmented SCM Pvt Ltd)',
      companyUrl: 'https://deepsell.today/',
      duration: 'Jun 2022 - Nov 2022',
      location: 'Internship • Remote',
      responsibilities: [
        'Built core UI components used across production features in an AI-powered e-commerce platform, demonstrating ownership and attention to detail that led to conversion from intern to contract developer',
        'Architected and implemented RESTful API integrations, writing robust utility functions for data transformation, validation, and error handling that became part of the core codebase',
        'Engineered responsive layouts and interactive UI elements ensuring cross-browser compatibility (Chrome, Firefox, Safari, Edge) and mobile-first design principles for optimal user experiences',
        'Improved layout structures and component reusability by refactoring legacy code, reducing bundle size by 22% and improving First Contentful Paint (FCP) metrics by 35%',
        'Actively participated in code reviews and agile ceremonies, contributing technical insights and learning advanced patterns from senior developers in a fast-paced startup environment',
      ],
    },
    {
      role: 'Frontend Web Developer',
      company: 'MarsDevs',
      companyUrl: 'https://www.marsdevs.com/',
      duration: 'May 2022 - Jul 2022',
      location: 'Internship • Remote',
      responsibilities: [
        'Transformed complex Figma designs into production-quality, responsive interfaces using Vue.js, Nuxt.js, and React for multiple client projects, ensuring pixel-perfect implementation and design fidelity across different frameworks',
        'Developed modular UI components and reusable modules across Vue, Nuxt, and React ecosystems for diverse client projects spanning e-commerce, SaaS platforms, and corporate websites, demonstrating versatility across different business domains and technology stacks',
        'Ensured comprehensive cross-browser compatibility through rigorous testing and debugging across multiple devices and screen sizes, achieving 100% functionality across all major browsers',
        'Collaborated with international clients and development teams using Agile methodologies, participating in daily standups, sprint planning, and retrospectives to deliver features on tight deadlines',
        'Implemented responsive design patterns using modern CSS frameworks and preprocessors (SCSS, Tailwind CSS), creating mobile-first interfaces that improved mobile conversion rates for client projects',
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-cream-elevated light:bg-cream-elevated dark:bg-navy-lighter relative overflow-hidden">
      {/* Accent glow overlay */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-coral/ light:bg-coral/ dark:bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Heading */}
          <h2 className="numbered-heading before:content-['02.']">
            Where I've Worked
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b-2 md:border-b-0 md:border-l-2 border-slate-dark">
              {experiences.map((exp, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  onClick={() => setActiveTab(index)}
                  className={`px-5 py-3 text-left font-mono text-sm whitespace-nowrap transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 ${
                    activeTab === index
                      ? 'text-accent border-accent bg-accent/10'
                      : 'text-slate border-transparent hover:text-accent hover:bg-accent/5'
                  }`}
                >
                  {exp.company}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Role and Company */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-ink-lightest light:text-ink-lightest dark:text-slate-lightest">
                    {experiences[activeTab].role}
                    <span className="text-coral light:text-coral dark:text-accent">
                      {' '}
                      @{' '}
                      <a
                        href={experiences[activeTab].companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-coral light:text-coral dark:text-accent-hover transition-colors"
                      >
                        {experiences[activeTab].company}
                      </a>
                    </span>
                  </h3>
                  <p className="text-ink-light light:text-ink-light dark:text-slate-light font-mono text-sm mt-1">
                    {experiences[activeTab].duration} • {experiences[activeTab].location}
                  </p>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-4 mt-6">
                  {experiences[activeTab].responsibilities.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      className="flex items-start space-x-3"
                    >
                      <span className="text-coral light:text-coral dark:text-accent mt-1 text-lg">▹</span>
                      <span className="text-ink light:text-ink dark:text-slate text-base leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Total Experience Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 p-6 bg-cream-elevated light:bg-cream-elevated dark:bg-navy-lighter border border-coral/ light:border-coral/ dark:border-accent/20 rounded-lg shadow-light-card light:shadow-light-card dark:shadow-card"
          >
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-coral light:text-coral dark:text-accent">3.5+</p>
                <p className="text-ink-light light:text-ink-light dark:text-slate-light font-mono text-sm mt-2">Years Experience</p>
              </div>
              <div className="h-16 w-px bg-coral/ light:bg-coral/ dark:bg-accent/20" />
              <div className="text-center">
                <p className="text-4xl font-bold text-coral light:text-coral dark:text-accent">25+</p>
                <p className="text-ink-light light:text-ink-light dark:text-slate-light font-mono text-sm mt-2">Projects Completed</p>
              </div>
              <div className="h-16 w-px bg-coral/ light:bg-coral/ dark:bg-accent/20" />
              <div className="text-center">
                <p className="text-4xl font-bold text-coral light:text-coral dark:text-accent">15+</p>
                <p className="text-ink-light light:text-ink-light dark:text-slate-light font-mono text-sm mt-2">Technologies</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
