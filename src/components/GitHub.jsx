import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Terminal,
  GitBranch,
  Star,
  GitFork,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  FolderGit2
} from 'lucide-react';
import './GitHub.css';

export default function GitHub() {
  const [activeTab, setActiveTab] = useState('overview');

  // Generate 26 weeks x 7 days realistic commit matrix
  const weeks = 26;
  const daysPerWeek = 7;
  const generateContributionMatrix = () => {
    const matrix = [];
    for (let w = 0; w < weeks; w++) {
      const week = [];
      for (let d = 0; d < daysPerWeek; d++) {
        // Pseudo-random realistic activity
        const rand = (w * 7 + d * 13) % 100;
        let level = 0;
        if (rand > 75) level = 4;
        else if (rand > 50) level = 3;
        else if (rand > 30) level = 2;
        else if (rand > 15) level = 1;
        week.push(level);
      }
      matrix.push(week);
    }
    return matrix;
  };

  const matrix = generateContributionMatrix();

  const repos = [
    {
      name: 'creofilme',
      desc: 'Cinematic video streaming architecture built with React, Redux Toolkit, and TMDB integration.',
      lang: 'JavaScript',
      langColor: '#F7DF1E',
      stars: 48,
      forks: 14,
      url: 'https://github.com/AzizAabbour/creofilme'
    },
    {
      name: 'macro-event-platform',
      desc: 'Scalable event ticketing and QR conference pass management platform with Laravel backend.',
      lang: 'PHP / Laravel',
      langColor: '#777BB4',
      stars: 36,
      forks: 9,
      url: 'https://github.com/AzizAabbour/macro-event'
    },
    {
      name: 'impact-bridge',
      desc: 'Philanthropic NGO fund allocation tracker with real-time audit ledger and geo analytics.',
      lang: 'React / Node.js',
      langColor: '#00F5D4',
      stars: 62,
      forks: 18,
      url: 'https://github.com/AzizAabbour/impact-bridge'
    },
    {
      name: 'developer-telemetry-dashboard',
      desc: 'Microservices system health, latency percentile monitor and WebSocket log streamer.',
      lang: 'React.js',
      langColor: '#00D9FF',
      stars: 54,
      forks: 12,
      url: 'https://github.com/AzizAabbour/developer-dashboard'
    }
  ];

  return (
    <section id="github" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Terminal size={14} />
            <span>07 // Open Source &amp; Code</span>
          </div>
          <h2 className="section-title">
            Coding Activity &amp; <span className="text-gradient">Repositories</span>
          </h2>
          <p className="section-subtitle">
            A real-time reflection of continuous commits, open-source initiatives,
            and software craft directly from my developer workstation.
          </p>
        </div>

        {/* Futuristic Terminal Container */}
        <motion.div
          className="terminal-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Topbar */}
          <div className="terminal-topbar">
            <div className="terminal-dots">
              <span className="terminal-dot dot-red" />
              <span className="terminal-dot dot-yellow" />
              <span className="terminal-dot dot-green" />
            </div>

            <div className="terminal-title">
              <Terminal size={15} style={{ color: 'var(--color-primary)' }} />
              <span>bash - aziz@aquapor: ~/workstation</span>
            </div>

            <div className="terminal-actions-bar">
              <a
                href="https://github.com/AzizAabbour"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: '6px 14px', fontSize: '0.8rem' }}
              >
                <Github size={14} />
                <span>Visit GitHub Profile</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="terminal-body">
            {/* Simulated Prompt */}
            <div className="terminal-command-line">
              <span className="terminal-prompt-user">aziz@aquapor</span>
              <span className="terminal-prompt-symbol">:</span>
              <span className="terminal-prompt-dir">~/portfolio</span>
              <span className="terminal-prompt-symbol">$</span>
              <span className="terminal-command-text">gh stats --activity --user AzizAabbour</span>
              <span className="terminal-cursor" />
            </div>

            {/* Contribution Graph Heatmap */}
            <div className="contribution-card">
              <div className="contribution-header">
                <div className="contribution-stats-title">
                  <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>854 contributions</span> in
                  the past 6 months
                </div>

                <div className="contribution-legend">
                  <span>Less</span>
                  <div className="legend-box lvl-0" />
                  <div className="legend-box lvl-1" />
                  <div className="legend-box lvl-2" />
                  <div className="legend-box lvl-3" />
                  <div className="legend-box lvl-4" />
                  <span>More</span>
                </div>
              </div>

              {/* Heatmap Matrix */}
              <div className="contrib-matrix">
                {matrix.map((col, cIdx) => (
                  <div key={cIdx} className="contrib-col">
                    {col.map((lvl, rIdx) => (
                      <div
                        key={rIdx}
                        className={`contrib-cell lvl-${lvl}`}
                        title={`Week ${cIdx + 1}, Day ${rIdx + 1}: Active Commits`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Prompt for Repos */}
            <div className="terminal-command-line" style={{ marginBottom: '16px' }}>
              <span className="terminal-prompt-user">aziz@aquapor</span>
              <span className="terminal-prompt-symbol">:</span>
              <span className="terminal-prompt-dir">~/repos</span>
              <span className="terminal-prompt-symbol">$</span>
              <span className="terminal-command-text">gh repo list --limit 4 --sort updated</span>
            </div>

            {/* Repositories Grid */}
            <div className="repo-grid-terminal">
              {repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="terminal-repo-card"
                >
                  <div>
                    <div className="repo-card-top">
                      <div className="repo-card-name">
                        <FolderGit2 size={16} />
                        <span>{repo.name}</span>
                      </div>
                      <span className="repo-visibility">Public</span>
                    </div>

                    <p className="repo-card-desc">{repo.desc}</p>
                  </div>

                  <div className="repo-card-bottom">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: repo.langColor
                        }}
                      />
                      <span>{repo.lang}</span>
                    </div>

                    <div className="repo-meta-group">
                      <span className="repo-meta-item">
                        <Star size={13} style={{ color: '#FFBD2E' }} />
                        <span>{repo.stars}</span>
                      </span>
                      <span className="repo-meta-item">
                        <GitFork size={13} />
                        <span>{repo.forks}</span>
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
