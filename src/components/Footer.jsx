import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

/**
 * Footer Component
 * 
 * Features:
 * - Social media links
 * - Copyright notice
 * - Built with love message
 * - Responsive design
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: FaGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
    { Icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { Icon: FaTwitter, url: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 bg-cream-elevated light:bg-cream-elevated dark:bg-navy-lighter border-t border-coral/ light:border-coral/ dark:border-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Links - Hidden on mobile, shown on desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map(({ Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-lightest light:text-ink-lightest dark:text-slate-lightest hover:text-coral light:hover:text-coral dark:hover:text-accent transition-colors duration-200"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright & Attribution */}
          <div className="flex flex-col items-center space-y-2 text-center">
            <p className="text-ink light:text-ink dark:text-slate text-sm font-mono">
              © {currentYear} Aryan Surin. All rights reserved.
            </p>
            <p className="text-ink light:text-ink dark:text-slate text-xs flex items-center space-x-1">
              <span>Designed & Built with</span>
              <FaHeart className="w-3 h-3 text-coral light:text-coral dark:text-accent" />
              <span>by Aryan Surin</span>
            </p>
          </div>

          {/* Tech Stack Badge */}
          <div className="flex items-center space-x-2 text-ink-light light:text-ink-light dark:text-slate-light text-xs font-mono">
            <span>Built with</span>
            <span className="text-coral light:text-coral dark:text-accent">React</span>
            <span>+</span>
            <span className="text-coral light:text-coral dark:text-accent">Tailwind</span>
          </div>
        </div>

        {/* Social Links - Shown on mobile */}
        <div className="flex md:hidden items-center justify-center space-x-6 mt-6">
          {socialLinks.map(({ Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink light:text-ink dark:text-slate hover:text-coral light:hover:text-coral dark:hover:text-accent transition-colors duration-200"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
