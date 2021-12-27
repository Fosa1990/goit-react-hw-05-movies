import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import './Navigation.css';
export default function Navigation() {
  return (
    <nav>
      <div className="nav-items">
        <NavLink
          exact
          to="/"
          className="nav-link"
          activeClassName="nav-link-active"
        >
          <img src={logo} alt="logo" width="60" height="90" />
        </NavLink>
        <NavLink
          exact
          to="/"
          className="nav-link"
          activeClassName="nav-link-active"
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/movies"
          className="nav-link"
          activeClassName="nav-link-active"
        >
          Movies
        </NavLink>
      </div>
    </nav>
  );
}
