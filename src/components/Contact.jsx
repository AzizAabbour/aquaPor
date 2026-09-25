import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquareCode
} from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email Address',
      value: 'contact@azizaabbour.dev',
      href: 'mailto:contact@azizaabbour.dev'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/aziz-aabbour',
      href: 'https://linkedin.com/in/aziz-aabbour'
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'github.com/AzizAabbour',
      href: 'https://github.com/AzizAabbour'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Casablanca, Morocco (Open to Global Remote)',
      href: null
    }
  ];

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('contact@azizaabbour.dev');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate real network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="section-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Animated Futuristic Glow Blob */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 245, 212, 0.15) 0%, rgba(0, 217, 255, 0.05) 50%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquareCode size={14} />
            <span>08 // Get in Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a specific software project in mind, need technical consultation,
            or are looking to hire a full stack engineer, my inbox is always open.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Column 1: Info & Direct Channels */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-card-info">
              <h3 className="contact-info-title">Direct Inquiries</h3>
              <p className="contact-info-desc">
                Feel free to reach out directly via email or social platforms.
                I typically respond within 24 hours.
              </p>

              <div className="contact-items-list">
                {contactInfo.map((info, idx) => {
                  const Wrapper = info.href ? 'a' : 'div';
                  return (
                    <Wrapper
                      key={idx}
                      href={info.href}
                      target={info.href && info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href && info.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="contact-channel-item"
                    >
                      <div className="channel-left">
                        <div className="channel-icon">{info.icon}</div>
                        <div>
                          <div className="channel-title">{info.label}</div>
                          <div className="channel-value">{info.value}</div>
                        </div>
                      </div>

                      {info.href ? (
                        <ExternalLink size={16} style={{ color: 'var(--color-text-dim)' }} />
                      ) : null}
                    </Wrapper>
                  );
                })}
              </div>

              {/* Quick Copy Action */}
              <div style={{ marginTop: '24px' }}>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.88rem' }}
                >
                  <Copy size={15} />
                  <span>{copiedEmail ? 'Email Copied to Clipboard!' : 'Copy Email Address'}</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Interactive Contact Form */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isSubmitted && (
              <div className="form-success-banner" style={{ marginBottom: '20px' }}>
                <CheckCircle2 size={20} />
                <span>Thank you! Your message has been transmitted successfully. I will get back to you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <span>Your Name</span>
                    <span style={{ color: 'var(--color-primary)' }}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <span>Your Email</span>
                    <span style={{ color: 'var(--color-primary)' }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. sarah@cyberdyne.io"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  <span>Subject</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="e.g. Project Collaboration / Full Stack Role"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <span>Message</span>
                  <span style={{ color: 'var(--color-primary)' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Describe your vision, timeline, or technical requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '15px 24px', fontSize: '1rem', marginTop: '6px' }}
              >
                <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message'}</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
