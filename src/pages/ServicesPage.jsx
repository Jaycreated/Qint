import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const serviceOverview = [
  {
    icon: '↗',
    title: 'Finance guidance',
    description: 'We simplify financing conversations so you understand your options, your timing, and what matters most before making any commitment.',
    bullets: ['Clear explanation of funding routes', 'Needs-based advice', 'Honest expectations and next steps'],
  },
  {
    icon: '▦',
    title: 'Business clarity',
    description: 'We help business owners assess the practical impact of timing, cash-flow pressure, and opportunity windows with more confidence.',
    bullets: ['Cash-flow perspective', 'Commercial planning support', 'Growth and operational insight'],
  },
  {
    icon: '◎',
    title: 'Direct human support',
    description: 'Every step is grounded in personal communication, straightforward advice, and respectful, practical support.',
    bullets: ['Real conversations with a team', 'Transparent process', 'Focused support for your situation'],
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState('Finance guidance');
  const currentService = serviceOverview.find((service) => service.title === activeService) || serviceOverview[0];

  return (
    <div className="page-shell route-page">
      <section className="page-hero">
        <div className="wrap">
          <ScrollReveal>
            <div className="kicker">What we do</div>
          </ScrollReveal>
          <ScrollReveal>
            <h1>Finance support for your needs.</h1>
          </ScrollReveal>
          <ScrollReveal>
            <p>We help clients make sense of short-term funding, business finance considerations, and practical advisory support through clear conversations and informed guidance.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <div className="interactive-tabs">
            {serviceOverview.map((service) => (
              <button
                key={service.title}
                type="button"
                className={`tab-button ${activeService === service.title ? 'active' : ''}`}
                onClick={() => setActiveService(service.title)}
              >
                {service.title}
              </button>
            ))}
          </div>

          <div className="feature-panel">
            <div>
              <div className="mini-label">Selected focus</div>
              <h3>{currentService.title}</h3>
              <p>{currentService.description}</p>
            </div>
            <ul className="detail-list">
              {currentService.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="grid-three service-grid">
            {serviceOverview.map((service) => (
              <ScrollReveal key={service.title}>
                <article className={`info-card service-feature ${activeService === service.title ? 'highlighted' : ''}`}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link className="learn" to="/contact">Request a consultation →</Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
