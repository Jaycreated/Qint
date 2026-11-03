import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import BrandLogo from './components/BrandLogo';
import { navItems, whatsappLink } from './data/siteData';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import InvestmentPage from './pages/InvestmentPage';
import LoanPage from './pages/LoanPage';
import ProcessPage from './pages/ProcessPage';
import ServicesPage from './pages/ServicesPage';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const year = new Date().getFullYear();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span>Q Intent Consulting Limited · RC 1295628</span>
        </div>
      </div>

      <header className="wrap nav">
        <BrandLogo />

        <nav id="primary-navigation" className={`links ${menuOpen ? 'show' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {item.label}
            </NavLink>
          ))}
          <a className="btn desktop-only nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">
            Speak with us ↗
          </a>
        </nav>

        <button
          className="menu-btn"
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/loans" element={<LoanPage />} />
          <Route path="/investment" element={<InvestmentPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <Link className="brand footer-brand-name" to="/" aria-label="Q-INTENT CONSULTS home">
                Q-INTENT CONSULTS
              </Link>
              <p>A personal, professional approach to bridge finance support and practical funding conversations.</p>
            </div>
            <div>
              <h4>Explore</h4>
              <div className="footer-links">
                {navItems.map((item) => (
                  <NavLink key={item.to} to={item.to}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
            <div id="office">
              <h4>Office address</h4>
              <p>34, Oladoyinbo Street<br />Aguda, Ogba, Ikeja<br />Lagos, Nigeria</p>
              <p><strong>RC 1295628</strong><br /><strong>TIN:</strong> 20969685 - 0001</p>
            </div>
          </div>
          <div className="legal">
            <span>© <span>{year}</span> Q Intent Consulting Limited. All rights reserved.</span>
            <span>Bridge finance support · Lagos, Nigeria</span>
          </div>
        </div>
      </footer>

      <div className="mobile-cta">
        <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer">
          Speak with Q Intent Consults ↗
        </a>
      </div>
    </>
  );
}
