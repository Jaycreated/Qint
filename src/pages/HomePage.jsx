import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { faqData, processSteps, serviceList, slides, whatsappLink } from '../data/siteData';

function AccordionItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-q" type="button" aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)}>
        {question} <b>{isOpen ? '−' : '+'}</b>
      </button>
      {isOpen && <div className="faq-a">{answer}</div>}
    </div>
  );
}

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero hero-photo route-page" id="home" aria-label="Q Intent Consults introduction">
        <div
          className="hero-background"
          role="img"
          aria-label={slides[activeSlide].label}
          style={{ backgroundImage: `url(${slides[activeSlide].image})` }}
        />
        <div className="hero-shade" aria-hidden="true" />

        <div className="wrap hero-content">
          <ScrollReveal className="eyebrow-wrap">
            <div className="eyebrow">
              <span className="dot" /> A straightforward finance partner
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h1>
              Financial Solutions Designed Around <em>Your Future</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              Explore bridge finance support and practical financial guidance designed to help individuals and
              businesses navigate short-term cash-flow gaps and move forward with confidence.
            </p>
          </ScrollReveal>

          <ScrollReveal className="actions-wrap">
            <div className="actions">
              <Link className="btn" to="/services">
                Explore Our Services ↗
              </Link>
              <a className="btn hero-secondary" href={whatsappLink} target="_blank" rel="noreferrer">
                Contact Our Team ↗
              </a>
            </div>
          </ScrollReveal>

          <div className="hero-slide-controls" aria-label="Hero slideshow controls">
            <button
              className="hero-slide-arrow"
              type="button"
              aria-label="Previous image"
              onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            >
              ‹
            </button>

            <div className="hero-slide-dots" aria-label="Choose a slide">
              {slides.map((slide, index) => (
                <button
                  key={slide.label}
                  className="hero-slide-dot"
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={activeSlide === index ? 'true' : 'false'}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>

            <button
              className="hero-slide-arrow"
              type="button"
              aria-label="Next image"
              onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <div className="kicker">What we do</div>
              <h2>Financial support, made more straightforward.</h2>
              <p>We take time to understand your situation and discuss practical options based on your needs.</p>
            </div>
          </ScrollReveal>

          <div className="services">
            {serviceList.map((service) => (
              <ScrollReveal key={service.title}>
                <article className="service">
                  <div className={`service-icon ${service.tone || 'green'}`}>{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link className="learn" to="/contact">
                    Discuss this option →
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <p className="contact-note">All services are subject to assessment, eligibility, agreed terms and applicable requirements.</p>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="wrap about-grid">
          <ScrollReveal>
            <div className="about-visual" aria-label="Q Intent Consulting Limited logo card">
              <div className="about-logo">QIC</div>
              <div className="about-stamp">
                <span>Q INTENT CONSULTING LIMITED</span>
                <span>RC 1295628</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="about-copy">
              <div className="kicker">About Q Intent Consults</div>
              <h2>A professional relationship starts with a conversation.</h2>
              <p>
                Q Intent Consulting Limited is here to make it easier for people to learn about our services, ask
                questions, and speak with us directly. We keep the first step simple: tell us what you need, and
                we’ll explain how the process works.
              </p>
              <ul className="checks">
                <li><span className="check">✓</span><span>Clear communication from the start</span></li>
                <li><span className="check">✓</span><span>Flexible conversations around your needs</span></li>
                <li><span className="check">✓</span><span>Practical guidance before any commitment</span></li>
              </ul>
              <Link className="btn about-btn" to="/contact">
                Get in touch ↗
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" id="process">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <div className="kicker">How it works</div>
              <h2>Three simple steps to get started.</h2>
              <p>No complicated website forms. Just a direct conversation with our team.</p>
            </div>
          </ScrollReveal>

          <div className="steps">
            {processSteps.map((step) => (
              <ScrollReveal key={step.number}>
                <article className="step">
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <div className="kicker">Good to know</div>
              <h2>Questions, answered.</h2>
              <p>A few useful details before you contact us.</p>
            </div>
          </ScrollReveal>

          <div className="faq">
            {faqData.map((item) => (
              <ScrollReveal key={item.question}>
                <AccordionItem question={item.question} answer={item.answer} defaultOpen={item.question === 'What is bridge finance?'} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="wrap">
          <ScrollReveal>
            <div className="cta-panel">
              <div>
                <h2>Let’s talk about what you need.</h2>
                <p>Have a question about our bridge finance support? Reach out to start a direct conversation with Q Intent Consults.</p>
              </div>
              <a className="btn light" href={whatsappLink} target="_blank" rel="noreferrer">
                Contact our team ↗
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
