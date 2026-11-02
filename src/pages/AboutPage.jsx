import ScrollReveal from '../components/ScrollReveal';
import { aboutProfile, aboutTimeline, aboutValues } from '../data/siteData';

export default function AboutPage() {
  return (
    <div className="page-shell route-page">
      <section className="page-hero">
        <div className="wrap">
          <ScrollReveal>
            <div className="kicker">About us</div>
          </ScrollReveal>
          <ScrollReveal>
            <h1>Trust, clarity, and guidance.</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap grid-two">
          <ScrollReveal>
            <div className="story-panel">
              <h3>Our approach</h3>
              <p>Q Intent Consulting Limited exists to make finance conversations clearer, more personal, and easier to act on. We work with individuals and businesses that need practical understanding before making important money decisions.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="story-panel">
              <h3>Why clients choose us</h3>
              <ul className="check-list">
                <li>Clear explanation of funding options and requirements</li>
                <li>Direct, human support from a responsive team</li>
                <li>Honest conversations that focus on realistic next steps</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap grid-two">
          <ScrollReveal>
            <div className="story-panel">
              <h3>About Q-Intent Consults</h3>
              <p>{aboutProfile.overview}</p>
              <p>{aboutProfile.overviewDetail}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="story-panel">
              <h3>Vision, Mission and Our Core Values</h3>
              <p><strong>Our Vision</strong><br />{aboutProfile.vision}</p>
              <p><strong>Our Mission</strong><br />{aboutProfile.mission}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="page-section muted-section">
        <div className="wrap grid-two">
          <ScrollReveal>
            <div className="story-panel">
              <h3>Our Core Services</h3>
              <ul className="check-list">
                {aboutProfile.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="story-panel">
              <h3>Our Core Values</h3>
              <ul className="check-list">
                {aboutProfile.values.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="page-section muted-section">
        <div className="wrap metric-grid">
          {[{ label: 'Founded', value: '2015' }, { label: 'Office', value: 'Lagos' }, { label: 'Focus', value: 'Bridge finance' }].map((stat) => (
            <ScrollReveal key={stat.label}>
              <div className="metric-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="wrap">
          <div className="section-head compact-head">
            <div className="kicker">Our values</div>
            <h2>The principles behind every conversation we have.</h2>
          </div>
          <div className="grid-three value-grid">
            {aboutValues.map((value) => (
              <ScrollReveal key={value.title}>
                <article className="info-card value-card">
                  <div className={`service-icon ${value.tone || 'green'}`}>✓</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section muted-section">
        <div className="wrap">
          <div className="section-head compact-head">
            <div className="kicker">Timeline</div>
            <h2>How we’ve grown.</h2>
          </div>
          <div className="timeline">
            {aboutTimeline.map((item) => (
              <ScrollReveal key={item.year}>
                <div className="timeline-item">
                  <span className="timeline-year">{item.year}</span>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
