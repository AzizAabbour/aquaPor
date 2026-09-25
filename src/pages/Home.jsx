import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Services from '../components/Services';
import Process from '../components/Process';
import GitHub from '../components/GitHub';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      {/* Ambient Cyber Cursor Glow */}
      <div
        className="cursor-glow"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`
        }}
      />

      {/* Ambient Background Elements */}
      <div className="bg-ambient">
        <div className="bg-ambient-grid" />
        <div className="bg-glow-orb bg-glow-1" />
        <div className="bg-glow-orb bg-glow-2" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Process />
        <GitHub />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
