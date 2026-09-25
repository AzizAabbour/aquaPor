import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, Sparkles, Terminal } from 'lucide-react';
import Hero3DVisual from './Hero3DVisual';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left: Text & CTAs */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status indicator */}
            <div className="hero-status">
              <span className="status-dot-wrap">
                <span className="status-dot" />
                <span className="status-ping" />
              </span>
              <span className="status-text">Available for New Projects & Roles</span>
            </div>

            <p className="hero-intro">
              Hi, I'm <span className="hero-intro-name">Aziz Aabbour</span>
            </p>

            <h1 className="hero-title">
              Full Stack <br />
              <span className="text-gradient">Developer</span>
            </h1>

            <p className="hero-description">
              I build modern, scalable and high-performance web applications with clean code
              and thoughtful user experiences. Specialized in React ecosystems, robust backend
              architectures, and intuitive interfaces.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo('projects')}
              >
                <span>View My Projects</span>
                <ArrowRight size={18} />
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => scrollTo('contact')}
              >
                <span>Contact Me</span>
                <Mail size={18} />
              </button>
            </div>

            {/* Socials bar */}
            <div className="hero-socials">
              <span className="hero-social-label">Connect</span>
              <div className="hero-social-links">
                <a
                  href="https://github.com/AzizAabbour"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social-btn"
                  aria-label="GitHub Profile"
                >
                  <Github size={19} />
                </a>
                <a
                  href="https://linkedin.com/in/aziz-aabbour"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social-btn"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={19} />
                </a>
                <a
                  href="mailto:contact@azizaabbour.dev"
                  className="hero-social-btn"
                  aria-label="Email Address"
                >
                  <Mail size={19} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: 3D Developer Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Hero3DVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
