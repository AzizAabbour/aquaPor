import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Sparkles,
  CheckCircle2,
  X,
  Layers,
  Activity,
  Maximize2
} from 'lucide-react';
import { projectsData } from '../data/projects';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Frontend & APIs'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>03 // Portfolio Showcase</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of production-grade web applications, digital platforms,
            and software architectures built with modern engineering standards.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-nav" style={{ marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skill-filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Project Image Box */}
              <div className="project-image-box">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-img"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <span className="project-category-badge">{project.category}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <div>
                  <div className="project-header">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-tagline">{project.tagline}</p>
                  </div>

                  <p className="project-description">{project.description}</p>

                  {/* Highlights */}
                  <div className="project-highlights-list">
                    {project.highlights.map((h, i) => (
                      <span key={i} className="project-highlight-item">
                        <CheckCircle2 size={13} />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="project-tech-stack">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-actions">
                    <button
                      className="btn btn-primary project-btn-demo"
                      onClick={() => setActiveModalProject(project)}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} />
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary project-btn-gh"
                    >
                      <Github size={16} />
                      <span>Codebase</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Interactive Project Preview Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div
            className="demo-modal-overlay"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              className="demo-modal-card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="demo-modal-header">
                <div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--color-text)' }}>
                    {activeModalProject.name}
                  </h4>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-primary)', fontFamily: 'var(--font-mono)' }}>
                    {activeModalProject.tagline}
                  </span>
                </div>
                <button
                  className="mobile-toggle-btn"
                  style={{ display: 'flex' }}
                  onClick={() => setActiveModalProject(null)}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="demo-modal-body">
                <div style={{ position: 'relative', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '20px' }}>
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.name}
                    style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(5,7,10,0.85)',
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    border: '1px solid rgba(0,245,212,0.3)',
                    backdropFilter: 'blur(8px)'
                  }}>
                    Live Simulator Preview
                  </div>
                </div>

                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '20px' }}>
                  {activeModalProject.description}
                </p>

                {/* Key Metrics */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '12px',
                  marginBottom: '24px',
                  background: 'rgba(255,255,255,0.02)',
                  padding: '16px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(255,255,255,0.06)'
                }}>
                  {Object.entries(activeModalProject.stats).map(([k, v]) => (
                    <div key={k} style={{ textAlign: 'center' }}>
                      <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>
                        {v}
                      </div>
                      <div style={{ color: 'var(--color-text-dim)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        {k}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <a
                    href={activeModalProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ flex: 1 }}
                  >
                    <span>Launch Application</span>
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ flex: 1 }}
                  >
                    <Github size={16} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
