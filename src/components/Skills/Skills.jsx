import React from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiPython, SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiMongodb, SiMysql, SiFirebase, SiGithub, SiPostman, SiVite, SiVercel } from 'react-icons/si';
import { FaCode, FaHtml5, FaCube, FaMagic, FaBrain, FaTerminal, FaServer, FaTools } from 'react-icons/fa';

const fullSkillCategories = [
  {
    title: 'Languages',
    icon: <FaCode size="1.2rem" color="#8b949e" />,
    skills: [
      { name: 'JavaScript / TS', logo: <SiJavascript color="#F7DF1E" /> },
      { name: 'Python', logo: <SiPython color="#3776AB" /> },
      { name: 'C / C++', logo: <FaTerminal color="#00599C" /> },
      { name: 'HTML5 / CSS3', logo: <FaHtml5 color="#E34F26" /> },
      { name: 'SQL', logo: <FaServer color="#CC2927" /> }
    ]
  },
  {
    title: 'Frameworks / Libraries',
    icon: <FaCube size="1.2rem" color="#8b949e" />,
    skills: [
      { name: 'React.js', logo: <SiReact color="#61DAFB" /> },
      { name: 'Node.js', logo: <SiNodedotjs color="#339933" /> },
      { name: 'Express.js', logo: <SiExpress color="#8b949e" /> },
      { name: 'Three.js', logo: <FaCube color="#8b949e" /> },
      { name: 'Framer Motion', logo: <FaMagic color="#0055FF" /> },
      { name: 'Tailwind CSS', logo: <SiTailwindcss color="#06B6D4" /> }
    ]
  },
  {
    title: 'Databases / Cloud',
    icon: <FaServer size="1.2rem" color="#8b949e" />,
    skills: [
      { name: 'MongoDB', logo: <SiMongodb color="#47A248" /> },
      { name: 'MySQL', logo: <SiMysql color="#4479A1" /> },
      { name: 'Firebase', logo: <SiFirebase color="#FFCA28" /> },
      { name: 'Pinecone', logo: <FaBrain color="#8b949e" /> }
    ]
  },
  {
    title: 'Tools / Platforms',
    icon: <FaTools size="1.2rem" color="#8b949e" />,
    skills: [
      { name: 'Git / GitHub', logo: <SiGithub color="#8b949e" /> },
      { name: 'Postman', logo: <SiPostman color="#FF6C37" /> },
      { name: 'Vite', logo: <SiVite color="#646CFF" /> },
      { name: 'Vercel', logo: <SiVercel color="#8b949e" /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 700, color: '#f3f4f6' }}
      >
        Technical Arsenal
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
        {fullSkillCategories.map((cat, idx) => (
           <motion.div
             key={cat.title}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ delay: idx * 0.15, duration: 0.6 }}
           >
             {/* Micro-interaction floating state wrapped around interactive hover card */}
             <motion.div
               animate={{ y: [0, -6, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.5 }}
               style={{ height: '100%' }}
             >
                <div
                  className="glass-panel"
                  style={{
                    height: '100%',
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#0d1117',
                    border: '1px solid #30363d',
                    borderRadius: '16px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseOver={(e) => { 
                    e.currentTarget.style.borderColor = 'var(--color-brand-secondary)'; 
                    e.currentTarget.style.boxShadow = '0 5px 25px -5px rgba(6, 182, 212, 0.15)'; 
                  }}
                  onMouseOut={(e) => { 
                    e.currentTarget.style.borderColor = '#30363d';
                    e.currentTarget.style.boxShadow = 'none'; 
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                    {cat.icon}
                    <h3 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 600, color: '#e6edf3' }}>
                      {cat.title}
                    </h3>
                  </div>
                  
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {cat.skills.map((skill) => (
                      <li key={skill.name} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#8b949e', fontSize: '1.05rem', fontWeight: 500 }}>
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '22px' }}>
                          {skill.logo}
                        </span>
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
             </motion.div>
           </motion.div>
        ))}
      </div>
    </section>
  );
}
