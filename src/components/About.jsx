import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Code2, Globe, Cpu, CheckCircle2, Download, Sparkles } from 'lucide-react';
import './About.css';

export default function About() {
  const stats = [
    { number: '20+', label: 'Projects Completed', sub: 'Production & Open Source' },
    { number: '10+', label: 'Technologies Mastered', sub: 'Modern Web Stack' },
    { number: '3+', label: 'Years Learning & Building', sub: 'Continuous Growth' },
    { number: '100%', label: 'Passion for Code', sub: 'Obsessed with Quality' }
  ];

  const highlights = [
    { icon: <Award size={18} />, title: 'Experience', value: '3+ Years Building Full Stack Apps' },
    { icon: <GraduationCap size={18} />, title: 'Education', value: 'Software Engineering / Computer Science' },
    { icon: <Globe size={18} />, title: 'Availability', value: 'Open for Remote & On-site' },
    { icon: <Cpu size={18} />, title: 'Specialty', value: 'React, Node.js, Laravel & Cloud APIs' }
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>01 // About Me</span>
          </div>
          <h2 className="section-title">
            Engineering Digital Products with <span className="text-gradient">Precision</span>
          </h2>
          <p className="section-subtitle">
            A developer who balances modern architecture, lightning performance, and aesthetic finesse.
          </p>
        </div>

        {/* Main Grid */}
        <div className="about-grid">
          {/* Column 1: Image & Visual Card */}
          <motion.div
            className="about-visual-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-card-frame">
              <div className="about-photo-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Aziz Aabbour - Full Stack Developer"
                  className="about-photo"
                  loading="lazy"
                />
                <div className="about-photo-overlay" />
                <div className="about-floating-badge">
                  <div className="about-badge-icon">
                    <Code2 size={20} />
                  </div>
                  <div>
                    <div className="about-badge-label">Full Stack Engineer</div>
                    <div className="about-badge-sub">React • Node • Laravel • Cloud</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Biography & Details */}
          <motion.div
            className="about-text-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="about-heading">
              Passionate about turning complex ideas into <span className="text-aqua">seamless reality</span>.
            </h3>

            <p className="about-bio">
              Hello! I'm <strong>Aziz Aabbour</strong>, a dedicated Full Stack Web Developer based
              with a deep love for web craftsmanship. My journey began with an insatiable curiosity
              about how software scales, evolving into building full-stack web ecosystems that combine
              blazing-fast performance with effortless user interfaces.
            </p>

            <p className="about-bio">
              I specialize in bridging the gap between <strong>clean frontend architecture</strong> in
              React and <strong>robust, secure backends</strong> powered by Node.js, Express, PHP/Laravel,
              and relational/document databases. Every line of code I author is crafted with readability,
              maintainability, and performance in mind.
            </p>

            {/* Quick Info Grid */}
            <div className="about-info-grid">
              {highlights.map((item, index) => (
                <div key={index} className="about-info-item">
                  <div className="about-info-icon">{item.icon}</div>
                  <div>
                    <div className="about-info-title">{item.title}</div>
                    <div className="about-info-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Work With Me</span>
                <CheckCircle2 size={16} />
              </a>

              <a
                href="#projects"
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Explore Work</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="card-glass stat-card">
              <div className="stat-number text-gradient">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-dim)', marginTop: '4px' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
