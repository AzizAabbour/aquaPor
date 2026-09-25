import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Cpu, Code2, ShieldCheck, Rocket } from 'lucide-react';
import './Process.css';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      icon: <Compass size={18} />,
      desc: 'In-depth analysis of project objectives, user personas, technical requirements, and defining key success metrics.'
    },
    {
      num: '02',
      title: 'Planning',
      icon: <Cpu size={18} />,
      desc: 'Architecting database schemas, API contracts, UI wireframes, security protocols, and selecting the optimal technology stack.'
    },
    {
      num: '03',
      title: 'Development',
      icon: <Code2 size={18} />,
      desc: 'Writing clean, testable, and maintainable code. Building modular React interfaces and robust backend service endpoints.'
    },
    {
      num: '04',
      title: 'Testing',
      icon: <ShieldCheck size={18} />,
      desc: 'Rigorous cross-browser testing, automated unit verification, performance profiling, responsive audits, and edge-case handling.'
    },
    {
      num: '05',
      title: 'Deployment',
      icon: <Rocket size={18} />,
      desc: 'CI/CD pipeline orchestration, containerized cloud launch, telemetry monitoring, and ongoing optimization for scale.'
    }
  ];

  return (
    <section id="process" className="section-wrapper" style={{ background: 'rgba(8, 13, 19, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>06 // Engineering Workflow</span>
          </div>
          <h2 className="section-title">
            Development <span className="text-gradient">Process</span>
          </h2>
          <p className="section-subtitle">
            A disciplined, structured methodology ensuring every digital product is delivered
            with peak reliability, security, and velocity.
          </p>
        </div>

        {/* Process Grid */}
        <div className="process-grid">
          <div className="process-track-line" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              className="process-step-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
            >
              <div className="process-num-node">
                {step.num}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', marginBottom: '8px' }}>
                {step.icon}
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Stage {step.num}
                </span>
              </div>

              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
