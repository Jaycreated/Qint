import { Link } from 'react-router-dom';
import logo from '../../assets/logo/qintlogo.png';

export default function BrandLogo() {
  return (
    <Link className="brand-logo-link" to="/" aria-label="Q-INTENT CONSULTS home">
      <img
        className="brand-logo-image"
        src={logo}
        alt="Q-INTENT CONSULTS logo"
      />
    </Link>
  );
}
