import React from 'react';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

/**
 * Testimonials Section Component
 * 
 * Displays client testimonials and social proof
 * Features:
 * - Client feedback with ratings
 * - Profile photos and company info
 * - Animated cards on scroll
 * - Trust-building design with blue accents
 * 
 * Psychology & Trust Building:
 * - Social proof increases credibility by 15-30%
 * - Real client testimonials build authenticity
 * - 5-star ratings create positive first impression
 * - Company logos add professional credibility
 * - Blue color scheme reinforces trust and reliability
 * 
 * TODO: Replace placeholder testimonials with real client feedback
 * TODO: Add actual client photos to /public/testimonials/
 * TODO: Add company logos if available
 */
const Testimonials = () => {
  // TODO: Replace with actual testimonials from clients
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      photo: '/testimonials/client1.jpg', // TODO: Add actual photo
      text: 'Aryan delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.',
      rating: 5,
      company: 'TechStart Inc.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCo',
      photo: '/testimonials/client2.jpg', // TODO: Add actual photo
      text: 'Working with Aryan was a game-changer for our project. His creative solutions and commitment to quality helped us launch on time and under budget.',
      rating: 5,
      company: 'InnovateCo',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, Digital Dreams',
      photo: '/testimonials/client3.jpg', // TODO: Add actual photo
      text: 'Aryan transformed our vision into a beautiful, functional website. His communication was excellent, and he was always available to address our concerns.',
      rating: 5,
      company: 'Digital Dreams',
    },
  ];

  // Animation variants for staggered card animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="testimonials" className="section-padding bg-light dark:bg-navy-light-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light dark:text-slate-lightest-text-primary mb-4">
            What Clients Say
          </h2>
          <div className="w-20 h-1 bg-accent dark:bg-accent bg-light-accent mx-auto mb-6"></div>
          <p className="text-light dark:text-slate-text-secondary text-lg max-w-2xl mx-auto">
            Don't just take my word for it - here's what clients have to say about working together.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="bg-light-bg dark:bg-navy rounded-lg p-8 shadow-xl hover:shadow-2xl transition-shadow border border-light-border dark:border-navy-lighter hover:border-light-accent dark:hover:border-trust group"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <HiStar
                    key={index}
                    className="w-5 h-5 text-light dark:text-accent-accent group-hover:text-success dark:group-hover:text-success group-hover:text-light-success transition-colors"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-light dark:text-slate-light-text-secondary mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-light dark:border-navy-lighter-border">
                {/* Profile Photo Placeholder */}
                <div className="w-12 h-12 rounded-full bg-light dark:bg-navy-lighter-bg-alt flex items-center justify-center text-light dark:text-accent-accent font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>

                {/* Client Details */}
                <div>
                  <h4 className="text-light dark:text-slate-lightest-text-primary font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-light dark:text-slate-text-secondary text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges / Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 text-light dark:text-slate-text-secondary">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-light dark:text-accent-accent">50+</span>
              <span className="text-sm">Projects Completed</span>
            </div>
            <div className="w-px h-12 bg-light dark:bg-navy-lighter-border"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-light dark:text-accent-accent">100%</span>
              <span className="text-sm">Client Satisfaction</span>
            </div>
            <div className="w-px h-12 bg-light dark:bg-navy-lighter-border"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-light dark:text-accent-accent">5+ Years</span>
              <span className="text-sm">Experience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
