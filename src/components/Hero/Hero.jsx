import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 2rem',
        position: 'relative'
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          maxWidth: '800px',
          textAlign: 'center',
          zIndex: 10
        }}
      >


        <motion.div variants={itemVariants} style={{ position: 'relative', display: 'inline-block' }}>

          <motion.h1
            animate={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5 }}
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em', fontWeight: 800, lineHeight: 1.1 }}
          >
            <span style={{ color: 'var(--color-brand-secondary)' }}>Darshan </span><span style={{ color: 'var(--color-brand-secondary)' }}>Hande</span>
          </motion.h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          style={{
            color: 'var(--color-text-muted)',
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            marginBottom: '3rem',
            marginInline: 'auto'
          }}
        >
          I am a specialized Backend Developer building secure, highly scalable architectures
          and deploying advanced personalized AI models using cutting-edge Node.js and Gemini systems.
        </motion.p>

        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#projects"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.85rem 1.75rem',
              
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid ',
              borderRadius: '12px',
      
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(58, 247, 0, 0.15)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(58, 247, 0, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(58, 247, 0, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Explore Work →
          </a>
          <a
            href="#contact"
          style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.85rem 1.75rem',
              
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid ',
              borderRadius: '12px',
      
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(58, 247, 0, 0.15)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(58, 247, 0, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(58, 247, 0, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Establish Connection
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
