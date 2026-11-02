import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { investmentOptions } from '../data/siteData';

export default function InvestmentPage() {
  const [activeInvestment, setActiveInvestment] = useState('growth');
  const selectedInvestment = investmentOptions.find((option) => option.id === activeInvestment) || investmentOptions[0];

  return (
    <div className="page-shell route-page">
      <section className="page-hero">
        <div className="wrap">
          <ScrollReveal>
            <div className="kicker">Investment</div>
          </ScrollReveal>
          <ScrollReveal>
            <h1>Funding for growth.</h1>
          </ScrollReveal>
          <ScrollReveal>
            <p>We work with businesses and individuals exploring capital support, growth opportunities, and strategic funding decisions with clearer understanding and less uncertainty.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <div className="interactive-tabs">
            {investmentOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`tab-button ${activeInvestment === option.id ? 'active' : ''}`}
                onClick={() => setActiveInvestment(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="feature-panel">
            <div>
              <div className="mini-label">Focus area</div>
              <h3>{selectedInvestment.title}</h3>
              <p>{selectedInvestment.subtitle}</p>
            </div>
            <p className="feature-copy">{selectedInvestment.body}</p>
            <ul className="detail-list">
              {selectedInvestment.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="grid-three service-grid">
            {investmentOptions.map((option) => (
              <ScrollReveal key={option.id}>
                <article className={`info-card service-feature ${activeInvestment === option.id ? 'highlighted' : ''}`}>
                  <div className="service-icon">▦</div>
                  <h3>{option.title}</h3>
                  <p>{option.body}</p>
                  <button type="button" className="learn-button" onClick={() => setActiveInvestment(option.id)}>
                    Review this path →
                  </button>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
