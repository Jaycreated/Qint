import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { whatsappLink } from '../data/siteData';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [contactType, setContactType] = useState('WhatsApp');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  const contactModes = ['WhatsApp', 'Phone call', 'Email'];

  return (
    <div className="page-shell route-page">
      <section className="page-hero">
        <div className="wrap">
          <ScrollReveal>
            <div className="kicker">Contact</div>
          </ScrollReveal>
          <ScrollReveal>
            <h1>Tell us what you need.</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="page-section">
        <div className="wrap grid-two">
          <ScrollReveal>
            <div className="contact-card">
              <h3>Reach out</h3>
              <p>34, Oladoyinbo Street, Aguda, Ogba, Ikeja, Lagos, Nigeria</p>
              <p>RC 1295628</p>
              <p>TIN: 20969685 - 0001</p>
              <div className="contact-type-group" aria-label="Preferred contact method">
                {contactModes.map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    className={`contact-type-button ${contactType === mode ? 'active' : ''}`}
                    onClick={() => setContactType(mode)}
                  >
                    {mode}
                  </button>
                ))}
              </div>
              <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer">{contactType === 'Email' ? 'Email us ↗' : 'WhatsApp us ↗'}</a>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} placeholder="you@example.com" />
              </label>
              <label>
                Message
                <textarea value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} rows="5" placeholder="Tell us more about your situation" />
              </label>
              <button type="submit" className="btn">Send inquiry</button>
              {isSubmitted && (
                <p className="success-message">Thanks! Your enquiry is ready to send through WhatsApp. We’ll reply as soon as possible.</p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
