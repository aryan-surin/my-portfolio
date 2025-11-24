import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * useGSAPTextAnimation Hook
 * 
 * Applies GSAP text reveal animation with split text effect
 * 
 * @param {Object} options - Animation options
 * @returns {Object} - Ref to attach to text element
 */
export const useGSAPTextAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const {
    delay = 0,
    duration = 1,
    stagger = 0.03,
    ease = 'power3.out',
  } = options;

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const text = element.textContent;
    const chars = text.split('');
    
    // Clear element and wrap each character in a span
    element.textContent = '';
    chars.forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char; // Non-breaking space
      span.style.display = 'inline-block';
      element.appendChild(span);
    });

    const spans = element.querySelectorAll('span');
    
    // Animate each character
    gsap.fromTo(
      spans,
      { 
        opacity: 0,
        y: 50,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration,
        stagger,
        delay,
        ease,
      }
    );

    return () => {
      gsap.killTweensOf(spans);
    };
  }, [delay, duration, stagger, ease]);

  return elementRef;
};

/**
 * useGSAPHover Hook
 * 
 * Applies magnetic/elastic hover effect using GSAP
 * 
 * @param {Object} options - Animation options
 * @returns {Object} - Ref to attach to element
 */
export const useGSAPHover = (options = {}) => {
  const elementRef = useRef(null);
  const {
    strength = 20,
    speed = 0.3,
  } = options;

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(element, {
        x: x * (strength / 100),
        y: y * (strength / 100),
        duration: speed,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: speed * 2,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(element);
    };
  }, [strength, speed]);

  return elementRef;
};

/**
 * useGSAPParallax Hook
 * 
 * Applies parallax scrolling effect using GSAP
 * 
 * @param {Object} options - Animation options
 * @returns {Object} - Ref to attach to element
 */
export const useGSAPParallax = (options = {}) => {
  const elementRef = useRef(null);
  const {
    speed = 0.5,
    direction = 'vertical', // 'vertical' or 'horizontal'
  } = options;

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      
      if (direction === 'vertical') {
        gsap.to(element, {
          y: rate,
          duration: 0,
        });
      } else {
        gsap.to(element, {
          x: rate,
          duration: 0,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      gsap.killTweensOf(element);
    };
  }, [speed, direction]);

  return elementRef;
};
