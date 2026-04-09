import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const educationData = [
  { 
    degree: "Bachelor of Engineering in Computer Engineering", 
    institution: "Pimpri Chinchwad College of Engineering and Research", 
    score: "CGPA: 9.5", 
    date: "August 2023 - August 2027",
    icon: <FaUniversity size="2rem" color="#8b949e" />
  },
  { 
    degree: "Higher Secondary Education", 
    institution: "Shree Jain Fattechand Junior College", 
    score: "Percentage: 84.21%", 
    date: "April 2021 - April 2023",
    icon: <FaGraduationCap size="2rem" color="#8b949e" />
  }
];

export default function Education() {
  return (
    <section id="education" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 700, color: '#f3f4f6' }}
      >
        Education
      </motion.h2>

      <div style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
        {educationData.map((edu, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once:true, margin: "-50px" }} 
            transition={{ delay: idx * 0.15, duration: 0.6, type: "spring", damping: 20 }}
            style={{ 
              padding: '2.5rem', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem',
              background: '#0d1117',
              border: '1px solid #30363d',
              borderRadius: '16px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseOver={(e) => { 
              e.currentTarget.style.borderColor = 'var(--color-brand-secondary)'; 
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(6, 182, 212, 0.2)'; 
            }}
            onMouseOut={(e) => { 
              e.currentTarget.style.borderColor = '#30363d'; 
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none'; 
            }} 
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1rem' }}>
              {edu.icon}
              <h3 style={{ fontSize: '1.45rem', margin: 0, fontWeight: 600, color: '#e6edf3', lineHeight: 1.3 }}>{edu.degree}</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
               <span style={{ alignSelf: 'flex-start', fontSize: '0.85rem', color: 'var(--color-text-main)', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '0.3rem 0.8rem', borderRadius: '4px', fontWeight: 500 }}>
                 {edu.date}
               </span>
               <p style={{ fontSize: '1.1rem', color: '#8b949e', margin: 0, fontWeight: 500 }}>
                 {edu.institution}
               </p>
               <p style={{ color: '#8b949e', margin: 0, fontSize: '0.95rem' }}>{edu.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
