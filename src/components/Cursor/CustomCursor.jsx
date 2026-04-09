import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (['A', 'BUTTON', 'LI'].includes(e.target.tagName) || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Primary elegant ring bounding the dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          backgroundColor: isHovering ? 'rgba(6, 182, 212, 0.1)' : 'transparent',
          border: isHovering ? '1px solid rgba(6, 182, 212, 0.8)' : '1px solid rgba(168, 85, 247, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          translateX: '-50%',
          translateY: '-50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      >
         {/* Subtle orbiting planet personality accent */}
         <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
           style={{ width: '100%', height: '100%', position: 'absolute' }}
         >
           <div style={{ 
             position: 'absolute', 
             top: '-4px', 
             left: '50%', 
             transform: 'translateX(-50%)', 
             width: '6px', 
             height: '6px', 
             background: 'var(--color-brand-secondary)', 
             borderRadius: '50%',
             boxShadow: '0 0 8px var(--color-brand-secondary)'
           }} />
         </motion.div>
      </motion.div>

      {/* Tiny solid dot tracer */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          backgroundColor: 'var(--color-text-main)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      />
    </>
  );
}
