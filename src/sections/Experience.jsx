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
   * TODO: Replace with your actual work experience
   */
  const experiences = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      companyUrl: 'https://example.com',
      duration: 'Jan 2023 - Present',
      location: 'Remote',
      responsibilities: [
        'Architected and developed 15+ responsive web applications using React.js and Vue.js, improving user engagement by 40%',
        'Led frontend development team of 4 developers, implementing best practices and code review standards',
        'Optimized application performance resulting in 60% faster load times and improved Core Web Vitals scores',
        'Collaborated with UX/UI designers to implement pixel-perfect, accessible interfaces using Tailwind CSS and SCSS',
        'Integrated GraphQL APIs and Supabase backend services, reducing API call overhead by 35%',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      companyUrl: 'https://example.com',
      duration: 'Jun 2021 - Dec 2022',
      location: 'Hybrid',
      responsibilities: [
        'Developed and maintained 20+ client-facing web applications using React, Vue.js, and Nuxt.js',
        'Implemented responsive designs with Bootstrap and Tailwind CSS, ensuring cross-browser compatibility',
        'Built reusable component libraries that reduced development time by 30%',
        'Worked closely with backend developers to integrate RESTful APIs and optimize data fetching strategies',
        'Participated in agile ceremonies and contributed to sprint planning and retrospectives',
      ],
    },
    {
      role: 'Junior Web Developer',
      company: 'StartUp Ventures',
      companyUrl: 'https://example.com',
      duration: 'Mar 2021 - May 2021',
      location: 'On-site',
      responsibilities: [
        'Assisted in developing and debugging frontend features for company web applications',
        'Implemented UI components using JavaScript, HTML5, and CSS3',
        'Collaborated with senior developers to learn best practices and coding standards',
        'Conducted code reviews and participated in team knowledge-sharing sessions',
        'Maintained documentation for frontend codebase and component library',
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
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
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b-2 md:border-b-0 md:border-l-2 border-slate-lighter">
              {experiences.map((exp, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  onClick={() => setActiveTab(index)}
                  className={`px-5 py-3 text-left font-mono text-sm whitespace-nowrap transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 ${
                    activeTab === index
                      ? 'text-accent border-accent bg-accent/5'
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
                  <h3 className="text-xl md:text-2xl font-bold text-slate-lightest">
                    {experiences[activeTab].role}
                    <span className="text-accent">
                      {' '}
                      @{' '}
                      <a
                        href={experiences[activeTab].companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {experiences[activeTab].company}
                      </a>
                    </span>
                  </h3>
                  <p className="text-slate font-mono text-sm mt-1">
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
                      className="flex items-start space-x-3 text-slate"
                    >
                      <span className="text-accent mt-1 text-lg">▹</span>
                      <span className="text-base leading-relaxed">{item}</span>
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
            className="mt-12 p-6 bg-navy-light border border-accent/30 rounded-lg"
          >
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-accent">3.9+</p>
                <p className="text-slate font-mono text-sm mt-2">Years Experience</p>
              </div>
              <div className="h-16 w-px bg-slate-lighter" />
              <div className="text-center">
                <p className="text-4xl font-bold text-accent">15+</p>
                <p className="text-slate font-mono text-sm mt-2">Projects Completed</p>
              </div>
              <div className="h-16 w-px bg-slate-lighter" />
              <div className="text-center">
                <p className="text-4xl font-bold text-accent">10+</p>
                <p className="text-slate font-mono text-sm mt-2">Technologies</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
