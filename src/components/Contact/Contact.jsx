import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socials = [
  {
    label: 'Email Me',
    sub: 'darshanwork121@gmail.com',
    icon: <FaEnvelope size="1.6rem" color="#3af700" />,
    href: 'mailto:darshanwork121@gmail.com',
  },
  {
    label: 'LinkedIn',
    sub: 'linkedin.com/in/darshanhande',
    icon: <FaLinkedin size="1.6rem" color="#0a66c2" />,
    href: 'https://www.linkedin.com/in/darshan-hande-200b252aa/',
    target: '_blank',
  },
  {
    label: 'GitHub',
    sub: 'github.com/NomadicEgineer',
    icon: <FaGithub size="1.6rem" color="#f1f5f9" />,
    href: 'https://github.com/NomadicEgineer',
    target: '_blank',
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '8rem 2rem 4rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        style={{ fontSize: '2.5rem', marginBottom: '1.25rem', fontWeight: 700, color: '#f1f5f9' }}
      >
        Establish <span style={{ color: 'var(--color-brand-secondary)' }}>Connection</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: 0.1 }}
        style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '3.5rem', maxWidth: '55ch', marginInline: 'auto', lineHeight: 1.7 }}
      >
        Whether you have a project proposal, a question, or just want to say hello — my inbox is always open.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: 0.2 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.target || undefined}
            rel={s.target ? 'noreferrer' : undefined}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '2rem 1.5rem',
              background: '#0d1117',
              border: '1px solid #30363d',
              borderRadius: '16px',
              transition: 'all 0.25s ease',
              color: '#f1f5f9',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-brand-secondary)';
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(58,247,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = '#30363d';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {s.icon}
            <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{s.label}</span>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{s.sub}</span>
          </a>
        ))}
      </motion.div>

      <div style={{ marginTop: '6rem', color: '#475569', fontSize: '0.875rem' }}>
        <p>Built with React, Vite &amp; Three.js</p>
        <p style={{ marginTop: '0.4rem' }}>&copy; {new Date().getFullYear()} Darshan Hande</p>
      </div>
    </section>
  );
}
