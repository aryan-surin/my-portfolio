/**
 * Smooth scroll utility for navigation links
 * @param {string} targetId - ID of the target element to scroll to
 */
export const scrollToSection = (targetId) => {
  const element = document.getElementById(targetId);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for navbar height
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};

/**
 * Get active section based on scroll position
 * @param {Array} sections - Array of section IDs
 * @returns {string} - Active section ID
 */
export const getActiveSection = (sections) => {
  const scrollPosition = window.scrollY + 100;
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section && section.offsetTop <= scrollPosition) {
      return sections[i];
    }
  }
  
  return sections[0];
};

/**
 * Email validation helper
 * @param {string} email - Email address to validate
 * @returns {boolean} - Whether email is valid
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
