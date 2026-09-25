import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layers, Server, Layout, Sparkles, CheckCircle2 } from 'lucide-react';
import './Services.css';

export default function Services() {
  const services = [
    {
      icon: <Globe size={26} />,
      title: 'Web Development',
      description: 'Building responsive, fast, and accessible web experiences from scratch with modern HTML5, CSS3, and JavaScript/React. Optimized for search engines and high conversion.',
      features: [
        'Single Page Applications (SPAs)',
        'Responsive & Mobile-First Design',
        'SEO & Performance Tuning',
        'Cross-Browser Consistency'
      ]
    },
    {
      icon: <Layers size={26} />,
      title: 'Full Stack Development',
      description: 'End-to-end web software engineering connecting interactive frontend client architectures with secure backend servers, relational/NoSQL databases, and cloud services.',
      features: [
        'React + Node.js / Laravel Solutions',
        'Relational Database Modeling (MySQL/PostgreSQL)',
        'Authentication & Role-Based Access Control',
        'Production Deployment & Monitoring'
      ]
    },
    {
      icon: <Server size={26} />,
      title: 'API Development',
      description: 'Architecting scalable, secure, and documented RESTful web services. Seamless integration with payment gateways, real-time WebSockets, and third-party APIs.',
      features: [
        'Secure RESTful API Architecture',
        'Stripe & Payment Gateway Integrations',
        'Rate Limiting, Caching & Data Validation',
        'Comprehensive Postman & Swagger Docs'
      ]
    },
    {
      icon: <Layout size={26} />,
      title: 'UI/UX Integration',
      description: 'Transforming complex Figma/Adobe designs into living, responsive web interfaces with fluid micro-interactions, smooth CSS animations, and strict accessibility standards.',
      features: [
        'Pixel-Perfect Design-to-Code Conversion',
        'Interactive Prototyping & Micro-animations',
        'Design Systems & Reusable Components',
        'WCAG Accessibility Compliance'
      ]
    }
  ];

  return (
    <section id="services" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>05 // Technical Services</span>
          </div>
          <h2 className="section-title">
            Engineering Solutions for <span className="text-gradient">Modern Web</span>
          </h2>
          <p className="section-subtitle">
            High-standard engineering services tailored to startups, growing businesses,
            and visionary digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <div className="service-icon-box">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>

              <ul className="service-features-list">
                {service.features.map((feature, i) => (
                  <li key={i} className="service-feature-item">
                    <CheckCircle2 size={15} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
