import '../styles/Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation-wrapper">
      <ul>
        <li>
          <Link className="navigation-link-to active-page" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navigation-link-to" to="/">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="navigation-link-to" to="/">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
