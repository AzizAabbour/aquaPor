import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper" style={{ background: 'rgba(8, 13, 19, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>04 // Career Journey</span>
          </div>
          <h2 className="section-title">
            Work Experience &amp; <span className="text-gradient">Milestones</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of engineering roles, technical leadership,
            and software platforms shipped throughout my career.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-spine" />

          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              {/* Glowing Node */}
              <div className="timeline-node">
                <div className="timeline-node-inner" />
              </div>

              {/* Experience Card */}
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company">
                      <Briefcase size={15} />
                      <span>{exp.company}</span>
                      <span style={{ color: 'var(--color-text-dim)', margin: '0 4px' }}>•</span>
                      <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{exp.location}</span>
                    </div>
                  </div>

                  <span className="timeline-period">
                    <Calendar size={13} style={{ display: 'inline', marginRight: '6px' }} />
                    {exp.period}
                  </span>
                </div>

                <p className="timeline-desc">{exp.description}</p>

                {/* Key Achievements */}
                <ul className="timeline-achievements">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="timeline-achievement-item">
                      <CheckCircle2 size={15} />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="timeline-tech-list">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
