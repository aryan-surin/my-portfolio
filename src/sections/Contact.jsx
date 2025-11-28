import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { HiMail, HiLocationMarker, HiCheckCircle, HiXCircle } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa';
import { validateEmail } from '../utils/helpers';

/**
 * Contact Section Component
 * 
 * Features:
 * - Contact form with EmailJS integration
 * - Form validation
 * - Success/Error notifications
 * - Social media links
 * - Animated entrance
 * 
 * TODO: Configure EmailJS
 * 1. Sign up at https://www.emailjs.com/
 * 2. Create an email service and template
 * 3. Replace the IDs below with your own
 */
const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: '',
  });

  const [errors, setErrors] = useState({});

  /**
   * Handle form input changes
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  /**
   * Validate form fields
   * @returns {boolean} - Whether form is valid
   */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form submission
   * Sends email using EmailJS
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus({ loading: true, success: false, error: false, message: '' });

    try {
      // EmailJS credentials
      const SERVICE_ID = 'service_gxhdktj';
      const TEMPLATE_ID = 'template_5fntwga';
      const PUBLIC_KEY = '8CfFGrYA2Of8bEM32';

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: false, message: '' });
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Oops! Something went wrong. Please try again or email me directly at aryansurin21@gmail.com',
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: false, message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-cream light:bg-cream dark:bg-navy relative overflow-hidden">
      {/* Accent glow overlay */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-coral/ light:bg-coral/ dark:bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-trust/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Heading */}
          <h2 className="numbered-heading before:content-['04.']">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-ink-lightest light:text-ink-lightest dark:text-slate-lightest mb-4">
                  Let's work together!
                </h3>
                <p className="text-ink light:text-ink dark:text-slate text-base leading-relaxed mb-6">
                  I'm currently available for freelance work and full-time opportunities. 
                  Whether you have a project in mind or just want to chat about web development, 
                  feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <HiMail className="w-6 h-6 text-coral light:text-coral dark:text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-ink-lightest light:text-ink-lightest dark:text-slate-lightest font-semibold mb-1">Email</p>
                    <a
                      href="mailto:aryansurin21@gmail.com"
                      className="text-ink light:text-ink dark:text-slate hover:text-coral light:text-coral dark:text-accent transition-colors duration-200"
                    >
                      aryansurin21@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <HiMail className="w-6 h-6 text-coral light:text-coral dark:text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-ink-lightest light:text-ink-lightest dark:text-slate-lightest font-semibold mb-1">Phone / WhatsApp</p>
                    <a
                      href="tel:+918927470571"
                      className="text-ink light:text-ink dark:text-slate hover:text-coral light:text-coral dark:text-accent transition-colors duration-200"
                    >
                      +91 8927470571
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <HiLocationMarker className="w-6 h-6 text-coral light:text-coral dark:text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-ink-lightest light:text-ink-lightest dark:text-slate-lightest font-semibold mb-1">Location</p>
                    <p className="text-ink light:text-ink dark:text-slate">Available for remote work</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-ink-lightest light:text-ink-lightest dark:text-slate-lightest font-semibold mb-4">Connect with me</p>
                <div className="flex space-x-4">
                  {[
                    { Icon: FaGithub, url: 'https://github.com/aryan-surin', label: 'GitHub' },
                    { Icon: FaLinkedin, url: 'https://linkedin.com/in/aryansurin', label: 'LinkedIn' },
                    { Icon: FaTwitter, url: 'https://x.com/_aryansurin_', label: 'Twitter' },
                  ].map(({ Icon, url, label }) => (
                    <motion.a
                      key={label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-cream-elevated light:bg-cream-elevated dark:bg-navy-lighter border border-coral/ light:border-coral/ dark:border-accent/20 rounded-lg text-ink-lightest light:text-ink-lightest dark:text-slate-lightest hover:text-coral light:text-coral dark:text-accent hover:border-coral/ light:hover:border-coral/ dark:hover:border-accent/40 hover:shadow-light-glow-sm light:shadow-light-glow-sm dark:shadow-glow-sm transition-all duration-200"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-ink-lightest light:text-ink-lightest dark:text-slate-lightest font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-cream-card light:bg-cream-card dark:bg-navy-lighter border ${
                      errors.name ? 'border-red-500' : 'border-coral/ light:border-coral/ dark:border-accent/20'
                    } rounded-lg text-ink-lightest light:text-ink-lightest dark:text-slate-lightest placeholder-ink-muted light:placeholder-ink-muted dark:placeholder-slate-dark focus:outline-none focus:border-coral light:focus:border-coral dark:focus:border-accent focus:shadow-light-glow-sm light:focus:shadow-light-glow-sm dark:focus:shadow-glow-sm transition-all duration-200`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-ink-lightest light:text-ink-lightest dark:text-slate-lightest font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-cream-card light:bg-cream-card dark:bg-navy-lighter border ${
                      errors.email ? 'border-red-500' : 'border-coral/ light:border-coral/ dark:border-accent/20'
                    } rounded-lg text-ink-lightest light:text-ink-lightest dark:text-slate-lightest placeholder-ink-muted light:placeholder-ink-muted dark:placeholder-slate-dark focus:outline-none focus:border-coral light:focus:border-coral dark:focus:border-accent focus:shadow-light-glow-sm light:focus:shadow-light-glow-sm dark:focus:shadow-glow-sm transition-all duration-200`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-ink-lightest light:text-ink-lightest dark:text-slate-lightest font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-cream-card light:bg-cream-card dark:bg-navy-lighter border ${
                      errors.subject ? 'border-red-500' : 'border-coral/ light:border-coral/ dark:border-accent/20'
                    } rounded-lg text-ink-lightest light:text-ink-lightest dark:text-slate-lightest placeholder-ink-muted light:placeholder-ink-muted dark:placeholder-slate-dark focus:outline-none focus:border-coral light:focus:border-coral dark:focus:border-accent focus:shadow-light-glow-sm light:focus:shadow-light-glow-sm dark:focus:shadow-glow-sm transition-all duration-200`}
                    placeholder="Project inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-ink-lightest light:text-ink-lightest dark:text-slate-lightest font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 bg-cream-card light:bg-cream-card dark:bg-navy-lighter border ${
                      errors.message ? 'border-red-500' : 'border-coral/ light:border-coral/ dark:border-accent/20'
                    } rounded-lg text-ink-lightest light:text-ink-lightest dark:text-slate-lightest placeholder-ink-muted light:placeholder-ink-muted dark:placeholder-slate-dark focus:outline-none focus:border-coral light:focus:border-coral dark:focus:border-accent focus:shadow-light-glow-sm light:focus:shadow-light-glow-sm dark:focus:shadow-glow-sm transition-all duration-200 resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus.loading}
                  className="w-full px-6 py-4 bg-gradient-to-r from-trust to-trust-light text-white font-semibold rounded-lg shadow-light-glow-md light:shadow-light-glow-md dark:shadow-glow-md hover:shadow-light-glow-lg light:shadow-light-glow-lg dark:shadow-glow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus.loading ? 'Sending...' : 'Send Message'}
                </motion.button>

                {/* Status Messages */}
                {formStatus.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-500"
                  >
                    <HiCheckCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">{formStatus.message}</p>
                  </motion.div>
                )}

                {formStatus.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500"
                  >
                    <HiXCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">{formStatus.message}</p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
