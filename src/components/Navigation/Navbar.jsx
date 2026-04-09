import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'achievements', 'education', 'contact'];
      let currentIdx = 0;
      for (let i = 0; i < sections.length; i++) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.getBoundingClientRect().top <= 250) currentIdx = i;
      }
      setActiveTab(sections[currentIdx]);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem 2rem',
        background: 'rgba(13, 17, 23, 0.75)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(58, 247, 0, 0.12)',
        boxShadow: '0 1px 40px rgba(0, 0, 0, 0.4)',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            style={{
              color: activeTab === link.id ? 'var(--color-brand-secondary)' : 'rgba(255,255,255,0.55)',
              fontWeight: 500,
              fontSize: '0.95rem',
              transition: 'color 0.2s ease',
              position: 'relative',
              paddingBottom: '4px',
            }}
            onMouseOver={(e) => { if (activeTab !== link.id) e.currentTarget.style.color = '#f1f5f9'; }}
            onMouseOut={(e) => { if (activeTab !== link.id) e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
          >
            {link.name}
            {activeTab === link.id && (
              <motion.div
                layoutId="activeIndicator"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--color-brand-secondary)',
                  borderRadius: '2px',
                }}
              />
            )}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
