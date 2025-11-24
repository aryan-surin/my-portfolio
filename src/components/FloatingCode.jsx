import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * FloatingCode Component
 * 
 * Features:
 * - Animated floating code snippets using GSAP
 * - Randomized positions and animations
 * - Theme-aware styling
 * - Performance-optimized with useRef
 * 
 * Purpose: Adds visual interest and reinforces developer identity in Hero section
 */
const FloatingCode = () => {
  const containerRef = useRef(null);

  // Array of code snippets to display
  const codeSnippets = [
    '{ code }',
    '<div />',
    'const x = 10;',
    'npm install',
    'git commit',
    'function()',
    'import React',
    '=> { }',
    'async/await',
    'useState()',
    'return true',
    'console.log()',
    'className=""',
    'export default',
    'npm run dev',
    'git push',
    'useEffect()',
    'npm start',
    'API.get()',
    'map(item)',
  ];

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    if (!container) return;

    const snippets = container.querySelectorAll('.code-snippet');
    
    // Animate each snippet with GSAP
    snippets.forEach((snippet, index) => {
      // Random initial position
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      
      // Set initial position
      gsap.set(snippet, {
        x: startX,
        y: startY,
        opacity: 0,
      });

      // Create floating animation timeline
      const tl = gsap.timeline({ repeat: -1 });
      
      // Random animation parameters for variety
      const duration = 15 + Math.random() * 10; // 15-25 seconds
      const moveX = (Math.random() - 0.5) * 400; // -200 to 200px
      const moveY = (Math.random() - 0.5) * 400;
      const rotation = (Math.random() - 0.5) * 30; // -15 to 15 degrees
      const delay = Math.random() * 2; // 0-2 second delay
      
      tl.to(snippet, {
        duration: 0.5,
        opacity: 0.15,
        delay: delay,
        ease: 'power2.out',
      })
      .to(snippet, {
        duration: duration,
        x: `+=${moveX}`,
        y: `+=${moveY}`,
        rotation: rotation,
        ease: 'sine.inOut',
      }, '-=0.3')
      .to(snippet, {
        duration: 0.5,
        opacity: 0,
        ease: 'power2.in',
      });

      // Add hover effect
      snippet.addEventListener('mouseenter', () => {
        gsap.to(snippet, {
          scale: 1.2,
          opacity: 0.3,
          duration: 0.3,
          ease: 'back.out(1.7)',
        });
      });

      snippet.addEventListener('mouseleave', () => {
        gsap.to(snippet, {
          scale: 1,
          opacity: 0.15,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf('.code-snippet');
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className="code-snippet absolute pointer-events-auto cursor-pointer font-mono text-xs md:text-sm font-medium text-light-accent dark:text-accent whitespace-nowrap select-none"
          style={{
            filter: 'blur(0.5px)',
          }}
        >
          {snippet}
        </div>
      ))}
    </div>
  );
};

export default FloatingCode;
