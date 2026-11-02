import { Link } from 'react-router-dom';

export default function BrandLogo() {
  return (
    <Link className="brand-logo-link" to="/" aria-label="QINTENT CONSULTS home">
      <img
        className="brand-logo-image"
        src="/assets/logo/qintlogo.png"
        alt="QINTENT CONSULTS logo"
      />
    </Link>
  );
}
