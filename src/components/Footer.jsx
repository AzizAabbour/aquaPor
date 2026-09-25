import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="text-aqua">&lt;</span>
              <span>Aziz Aabbour</span>
              <span className="text-aqua"> /&gt;</span>
            </a>
            <p className="footer-tagline">
              Building digital experiences with code, creativity and technology.
            </p>
          </div>

          <nav className="footer-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Aziz Aabbour. All rights reserved.
          </p>

          <div className="footer-socials">
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
      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-top-btn"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
