/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark navy backgrounds - Professional and trustworthy
        navy: {
          DEFAULT: '#0a192f',
          light: '#112240',
          lighter: '#233554',
        },
        // Trust-focused blue palette (primary for CTAs and highlights)
        trust: {
          DEFAULT: '#2563eb', // Professional blue
          light: '#3b82f6',
          dark: '#1e40af',
          darker: '#1e3a8a',
        },
        // Success and growth indicators (green)
        success: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        // Slate for text and secondary elements
        slate: {
          DEFAULT: '#8892b0',
          light: '#a8b2d1',
          lighter: '#a8b2d1',
          lightest: '#ccd6f6',
        },
        // Accent color for CTAs and interactive elements
        accent: {
          DEFAULT: '#64ffda',
          hover: '#52e3c2',
          orange: '#f97316', // Alternative CTA color
          orangeHover: '#ea580c',
        },
        // Warning and error states
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#f87171',
        },
        // Light Mode Colors (from Adham Dannaway's portfolio)
        light: {
          bg: '#ffffff',              // Pure white background
          'bg-alt': '#f8f9fa',        // Subtle gray for alternate sections
          'text-primary': '#32373c',  // Dark charcoal for headings (exact from site)
          'text-secondary': '#5a6c7d', // Medium gray for body text
          'text-tertiary': '#abb8c3', // Light gray for subtle text (exact from site)
          accent: '#ff6900',          // Vivid orange for CTAs (exact from site)
          'accent-hover': '#e65500',  // Darker orange for hover
          'accent-secondary': '#0693e3', // Cyan blue for secondary accents (exact from site)
          border: '#e5e7eb',          // Light border color
          'border-dark': '#d1d5db',   // Darker border for emphasis
          success: '#00d084',         // Green for success states (exact from site)
          error: '#cf2e2e',           // Red for errors (exact from site)
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
