import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Palette,
  FileCode2,
  Atom,
  Layers,
  LayoutGrid,
  Server,
  Cpu,
  Terminal,
  Flame,
  Webhook,
  Database,
  HardDrive,
  Boxes,
  GitBranch,
  Github,
  Box,
  Send,
  Sliders,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/skills';
import './Skills.css';

const iconMap = {
  Code2: <Code2 size={24} />,
  Palette: <Palette size={24} />,
  FileCode2: <FileCode2 size={24} />,
  Atom: <Atom size={24} />,
  Layers: <Layers size={24} />,
  LayoutGrid: <LayoutGrid size={24} />,
  Server: <Server size={24} />,
  Cpu: <Cpu size={24} />,
  Terminal: <Terminal size={24} />,
  Flame: <Flame size={24} />,
  Webhook: <Webhook size={24} />,
  Database: <Database size={24} />,
  HardDrive: <HardDrive size={24} />,
  DatabaseZap: <Database size={24} />,
  Boxes: <Boxes size={24} />,
  GitBranch: <GitBranch size={24} />,
  Github: <Github size={24} />,
  Box: <Box size={24} />,
  Send: <Send size={24} />,
  Sliders: <Sliders size={24} />
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? skillsData.skills
    : skillsData.skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="section-wrapper" style={{ background: 'rgba(8, 13, 19, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>02 // Tech Arsenal</span>
          </div>
          <h2 className="section-title">
            Technologies &amp; <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of the modern programming languages, frameworks,
            databases, and engineering tools I use to deliver end-to-end solutions.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="skills-filter-nav">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              className={`skill-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="skills-grid">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3 }}
                className="card-glass skill-card"
              >
                <div>
                  <div className="skill-card-top">
                    <div className="skill-icon-box">
                      {iconMap[skill.icon] || <Code2 size={24} />}
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>

                  <div style={{ marginTop: '16px' }}>
                    <h3 className="skill-name">{skill.name}</h3>
                    <p className="skill-tag">{skill.tag}</p>
                  </div>
                </div>

                <div>
                  {/* Progress Bar */}
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <div className="skill-card-footer" style={{ marginTop: '10px' }}>
                    <span>Experience</span>
                    <span style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-mono)' }}>
                      {skill.experience}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
