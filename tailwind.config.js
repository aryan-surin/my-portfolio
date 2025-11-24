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
        // Premium navy backgrounds - Deeper, more sophisticated (DARK MODE)
        navy: {
          DEFAULT: '#0f172a',      // Rich deep navy (Tailwind slate-900)
          light: '#1e293b',        // Medium navy (Tailwind slate-800)
          lighter: '#334155',      // Light navy for cards (Tailwind slate-700)
          dark: '#020617',         // Almost black (Tailwind slate-950)
        },
        // Ultra-Premium LIGHT MODE - Monochrome luxury (Apple/minimalist aesthetic)
        cream: {
          DEFAULT: '#ffffff',      // Pure white - luxury background
          card: '#fafafa',         // Barely-there gray for elevation
          elevated: '#f5f5f5',     // Subtle elevated surfaces
          border: '#e5e5e5',       // Clean neutral borders
        },
        // Premium teal accent - Softer, more refined (DARK MODE)
        accent: {
          DEFAULT: '#5eead4',      // Sophisticated teal (Tailwind teal-300)
          hover: '#2dd4bf',        // Brighter teal (Tailwind teal-400)
          muted: '#14b8a6',        // Subdued teal (Tailwind teal-500)
          glow: '#99f6e4',         // Light teal for glows (Tailwind teal-200)
        },
        // Ultra-Premium BLUE accent (LIGHT MODE) - Apple-style sophistication
        coral: {
          DEFAULT: '#0066ff',      // Apple blue - premium & trustworthy
          hover: '#0052cc',        // Deeper blue for hover
          dark: '#0047b3',         // Darker blue for high contrast
          muted: '#4d94ff',        // Lighter blue for backgrounds
          glow: '#80b3ff',         // Light blue for glows
        },
        // Premium slate text colors - Better hierarchy (DARK MODE)
        slate: {
          DEFAULT: '#94a3b8',      // Body text (Tailwind slate-400)
          light: '#cbd5e1',        // Secondary text (Tailwind slate-300)
          lightest: '#f1f5f9',     // Headings, almost white (Tailwind slate-100)
          dark: '#64748b',         // Muted text (Tailwind slate-500)
          darker: '#475569',       // Very muted (Tailwind slate-600)
        },
        // Ultra-Premium text colors (LIGHT MODE) - Monochrome hierarchy
        ink: {
          DEFAULT: '#404040',      // Body text - pure dark gray
          light: '#737373',        // Secondary text - medium gray
          lightest: '#0a0a0a',     // Headings - near-black (sharp contrast)
          muted: '#a3a3a3',        // Muted text - light gray
        },
        // Trust-focused blue for CTAs
        trust: {
          DEFAULT: '#3b82f6',      // Professional blue (Tailwind blue-500)
          light: '#60a5fa',        // Light blue (Tailwind blue-400)
          dark: '#2563eb',         // Dark blue (Tailwind blue-600)
          darker: '#1e40af',       // Darker blue (Tailwind blue-700)
        },
        // Success indicators
        success: {
          DEFAULT: '#10b981',      // Green (Tailwind emerald-500)
          light: '#34d399',        // Light green (Tailwind emerald-400)
          dark: '#059669',         // Dark green (Tailwind emerald-600)
        },
        // Warning and error states
        warning: {
          DEFAULT: '#f59e0b',      // Amber (Tailwind amber-500)
          light: '#fbbf24',        // Light amber (Tailwind amber-400)
        },
        error: {
          DEFAULT: '#ef4444',      // Red (Tailwind red-500)
          light: '#f87171',        // Light red (Tailwind red-400)
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      // Premium box shadows with glow effects (Dark & Light modes)
      boxShadow: {
        // Dark mode shadows (teal glow)
        'glow-sm': '0 0 15px rgba(94, 234, 212, 0.15)',
        'glow-md': '0 0 25px rgba(94, 234, 212, 0.2)',
        'glow-lg': '0 0 35px rgba(94, 234, 212, 0.25)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(94, 234, 212, 0.1)',
        'premium': '0 10px 40px rgba(0, 0, 0, 0.5)',
        // Ultra-Premium light mode shadows (Apple blue glow + crisp gray)
        'light-glow-sm': '0 0 20px rgba(0, 102, 255, 0.08)',
        'light-glow-md': '0 0 30px rgba(0, 102, 255, 0.12)',
        'light-glow-lg': '0 0 40px rgba(0, 102, 255, 0.15)',
        'light-card': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'light-card-hover': '0 4px 12px rgba(0, 0, 0, 0.08), 0 0 30px rgba(0, 102, 255, 0.08)',
        'light-premium': '0 8px 32px rgba(0, 0, 0, 0.08), 0 0 40px rgba(0, 102, 255, 0.06)',
      },
      // Premium gradients and effects
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'accent-glow': 'radial-gradient(circle at 50% 50%, rgba(94, 234, 212, 0.15) 0%, transparent 70%)',
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
