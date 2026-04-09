import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpaceCanvas from './components/Background/SpaceCanvas';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Resume/Education';
import Achievements from './components/Resume/Achievements';
import Contact from './components/Contact/Contact';
import CustomCursor from './components/Cursor/CustomCursor';
import './App.css';

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Achievements />
      <Education />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <CustomCursor />
      <SpaceCanvas />
      <div className="app-container" style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
