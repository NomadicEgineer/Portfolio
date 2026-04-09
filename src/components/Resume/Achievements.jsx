import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate } from 'react-icons/fa';

const achievements = [
  "Finalist at Google Agentic AI Hackathon, Bengaluru — Ranked among Top 15 teams out of 700 teams by competing with students and IT working professionals.",
  "Received the Best Computer Department Award for developing the Feedback Analysis System."
];

const certifications = [
  "Oracle Academy SQL Certification — Strong foundation in querying, joins, and relational data analysis",
  "MongoDB University MongoDB Certification — covering NoSQL data modeling and querying",
  "Knowledge Gate MERN Stack Certification — MongoDB, Express.js, Node.js"
];

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 700, color: '#f3f4f6' }}
      >
        Achievements & Certifications
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2.5rem' }}>
        
        {/* Achievements Card */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ delay: 0.15, duration: 0.6, type: "spring", damping: 20 }}
           style={{
            padding: '2.5rem',
            background: '#0d1117',
            border: '1px solid #30363d',
            borderRadius: '16px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseOver={(e) => { 
            e.currentTarget.style.borderColor = 'var(--color-brand-primary)'; 
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(168, 85, 247, 0.2)'; 
          }}
          onMouseOut={(e) => { 
            e.currentTarget.style.borderColor = '#30363d'; 
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none'; 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '2rem' }}>
             <FaTrophy size="2rem" color="#8b949e" />
             <h3 style={{ fontSize: '1.45rem', margin: 0, fontWeight: 600, color: '#e6edf3' }}>Achievements</h3>
          </div>
          <ul style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.05rem', fontWeight: 500 }}>
            {achievements.map((ach, i) => (
               <li key={i} style={{ listStyleType: 'disc' }}>{ach}</li>
            ))}
          </ul>
        </motion.div>

        {/* Certifications Card */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ delay: 0.3, duration: 0.6, type: "spring", damping: 20 }}
           style={{
            padding: '2.5rem',
            background: '#0d1117',
            border: '1px solid #30363d',
            borderRadius: '16px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseOver={(e) => { 
            e.currentTarget.style.borderColor = 'var(--color-brand-primary)'; 
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(168, 85, 247, 0.2)'; 
          }}
          onMouseOut={(e) => { 
            e.currentTarget.style.borderColor = '#30363d'; 
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none'; 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '2rem' }}>
             <FaCertificate size="2rem" color="#8b949e" />
             <h3 style={{ fontSize: '1.45rem', margin: 0, fontWeight: 600, color: '#e6edf3' }}>Certifications</h3>
          </div>
          <ul style={{ color: '#8b949e', lineHeight: 1.7, paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.05rem', fontWeight: 500 }}>
            {certifications.map((cert, i) => (
               <li key={i} style={{ listStyleType: 'disc' }}>{cert}</li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
