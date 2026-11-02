import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { processSteps } from '../data/siteData';

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="page-shell route-page">
      <section className="page-hero">
        <div className="wrap">
          <ScrollReveal>
            <div className="kicker">How it works</div>
          </ScrollReveal>
          <ScrollReveal>
            <h1>Simple process, clear steps.</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap process-layout">
          <div className="process-rail">
            {processSteps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                className={`process-step-button ${activeStep === index ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <span>{step.number}</span>
                <strong>{step.title}</strong>
              </button>
            ))}
          </div>

          <div className="process-detail">
            <div className="mini-label">Current step</div>
            <h3>{processSteps[activeStep].title}</h3>
            <p>{processSteps[activeStep].description}</p>
            <ul className="detail-list">
              <li>We listen first and gather the right context.</li>
              <li>We explain the likely path and required information.</li>
              <li>We help you decide on the next practical move.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
