import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaRobot, FaChartBar } from 'react-icons/fa';

const projects = [
  { 
    id: 1, 
    title: 'AI Powered Financial Assistance System', 
    icon: <FaRobot size="2rem" color="#8b949e" />,
    description: [
      'Built a centralized financial dashboard aggregating 5+ sources (accounts, income, expenses, investments) maximizing visibility.',
      'Developed a personalized AI chatbot using Gemini 2.0 Flash handling 50+ real-time queries/session with context-aware responses.',
      'Implemented an advanced RAG pipeline via Pinecone (768-d embeddings) achieving instantaneous sub-millisecond retrieval.',
      'Engineered secure REST APIs with full access token authentication and data validation to guarantee privacy.'
    ],
    tags: ['Firebase', 'Gemini', 'Pinecone', 'REST APIs', 'Node.js'] 
  },
  { 
    id: 2, 
    title: 'Feedback Analytics System', 
    icon: <FaChartBar size="2rem" color="#8b949e" />,
    description: [
      'Architected a time-locked feedback system improving response authenticity and empirical accuracy by 50%.',
      'Processed entries via NLP models (BART, DistilBERT) for automated text summarization and deep sentiment insight.',
      'Automated feedback classification into multiple discrete categories, successfully mitigating manual logging effort by 60%.'
    ],
    tags: ['Django', 'SQLite', 'NLP', 'BART', 'Python'] 
  }
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 700, color: '#f3f4f6' }}
      >
        Projects
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2.5rem' }}>
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.15, duration: 0.6, type: "spring", damping: 20 }}
            className="glass-panel"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
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
            {/* Header: Professional Icon */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              {proj.icon}
              <h3 style={{ fontSize: '1.45rem', margin: 0, fontWeight: 600, color: '#e6edf3', lineHeight: 1.3 }}>
                {proj.title}
              </h3>
            </div>

            <ul style={{ color: '#8b949e', marginBottom: '2.5rem', flexGrow: 1, lineHeight: 1.7, paddingLeft: '1.2rem', margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem' }}>
              {proj.description.map((point, i) => (
                 <li key={i} style={{ listStyleType: 'disc' }}>
                   {point}
                 </li>
              ))}
            </ul>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {proj.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', color: 'var(--color-brand-secondary)', fontWeight: 500 }}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid #30363d', paddingTop: '1.5rem' }}>
                 <a href="#" className="btn-small"><FiGithub size="1.1rem" /> Code</a>
                 <a href="#" className="btn-small"><FiExternalLink size="1.1rem" /> Live Demo</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
