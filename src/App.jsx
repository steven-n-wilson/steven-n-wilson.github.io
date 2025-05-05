import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) : 0;
      setScroll(scrolled);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50 }}>
      <div
        style={{
          height: '4px',
          width: `${scroll * 100}%`,
          background: 'linear-gradient(90deg, #3b82f6, #10b981, #0ea5e9)',
          borderRadius: '2px',
          transition: 'width 0.2s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: '0 1px 4px rgba(59,130,246,0.10)'
        }}
      />
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollProgressBar />
      <div className="bg-white text-gray-900 font-sans relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>
    </>
  );
}

export default App; 