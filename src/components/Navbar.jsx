import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Code', href: '#github' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section scroll spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar-inner">
          {/* Logo */}
          <a href="#home" className="nav-brand" onClick={(e) => handleLinkClick(e, '#home')}>
            <span className="nav-brand-bracket">&lt;</span>
            <span>Aziz</span>
            <span className="nav-brand-bracket">.Dev /&gt;</span>
            <span className="nav-brand-dot"></span>
          </a>

          {/* Desktop Nav */}
          <ul className="nav-links-desktop">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="nav-actions">
            <a
              href="#contact"
              className="btn btn-primary nav-cta"
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </a>

            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <>
          <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)} />
          <aside className="mobile-drawer">
            <div className="mobile-drawer-header">
              <div className="nav-brand">
                <span className="nav-brand-bracket">&lt;</span>
                <span>Aziz</span>
                <span className="nav-brand-bracket">.Dev /&gt;</span>
              </div>
              <button
                className="mobile-toggle-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={16} opacity={0.6} />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={(e) => handleLinkClick(e, '#contact')}
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={16} />
              </a>

              <div className="mobile-socials">
                <a
                  href="https://github.com/AzizAabbour"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/aziz-aabbour"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:contact@azizaabbour.dev"
                  className="social-icon-btn"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
