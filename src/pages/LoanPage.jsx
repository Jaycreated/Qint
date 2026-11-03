import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { loanOptions } from '../data/siteData';

export default function LoanPage() {
  const [activeLoan, setActiveLoan] = useState('bridge');
  const selectedLoan = loanOptions.find((item) => item.id === activeLoan) || loanOptions[0];

  return (
    <div className="page-shell route-page">
      <section className="page-hero">
        <div className="wrap">
          <ScrollReveal>
            <div className="kicker">Loans</div>
          </ScrollReveal>
          <ScrollReveal>
            <h1>Short-term bridge finance support.</h1>
          </ScrollReveal>
          <ScrollReveal>
            <p>We help clients understand practical bridge funding options designed to cover a temporary cash-flow gap while they prepare for the next stage of their financial plan.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <div className="interactive-tabs">
            {loanOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`tab-button ${activeLoan === option.id ? 'active' : ''}`}
                onClick={() => setActiveLoan(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="feature-panel highlight-panel">
            <div>
              <div className="mini-label">Best fit</div>
              <h3>{selectedLoan.headline}</h3>
              <p>{selectedLoan.summary}</p>
              {selectedLoan.extendedDescription && (
                <p>{selectedLoan.extendedDescription}</p>
              )}
            </div>
            <div className="detail-stack">
              <div className="status-pill">{selectedLoan.indicator}</div>
              <p className="fit-copy">{selectedLoan.fit}</p>
            </div>
            <ul className="detail-list">
              {selectedLoan.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="grid-three service-grid">
            {loanOptions.map((option) => (
              <ScrollReveal key={option.id}>
                <article className={`info-card service-feature ${activeLoan === option.id ? 'highlighted' : ''}`}>
                  <div className="service-icon">↗</div>
                  <h3>{option.label}</h3>
                  <p>{option.summary}</p>
                  <button type="button" className="learn-button" onClick={() => setActiveLoan(option.id)}>
                    Explore this option →
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
