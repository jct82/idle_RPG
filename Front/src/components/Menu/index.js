import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './style.scss';

export default function Menu() {
  return (
    <div className="navBarContainer">
      <img className="logo-rpg" src={logo} alt="Logo" />
      <NavLink
        key="/"
        to="/"
      >
        <i className="fas fa-home navHidden"></i>
        <button>Accueil</button>
      </NavLink>
      <NavLink
        key="/shop"
        to="/shop"
      >
        <i className="fas fa-coins navHidden"></i>
        <button>Boutique</button>
      </NavLink>
      <NavLink
        key="/inventory"
        to="/inventory"
      >
        <i className="fas fa-briefcase navHidden"></i>
        <button>Inventaire / Stats</button>
      </NavLink>
      <NavLink
        key="/fighting"
        to="/fighting"
      >
        <i className="fas fa-fist-raised navHidden"></i>
        <button>Combat</button>
      </NavLink>
      <NavLink
        key="/craft"
        to="/craft"
      >
        <i className="fas fa-hammer navHidden"></i>
        <button>Craft</button>
      </NavLink>
      <NavLink
        key="/jobs/mining"
        to="/jobs/mining"
      >
        <i className="fas fa-toilet-paper navHidden"></i>
        <button>Minage</button>
      </NavLink>
      <NavLink
        key="/jobs/fishing"
        to="/jobs/fishing"
      >
        <i className="fas fa-fish navHidden"></i>
        <button>Pêche</button>
      </NavLink>
    </div>
  );
}
