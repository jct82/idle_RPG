import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Menu() {
  return (
    <div className="navBarContainer">
      <NavLink
        key="/"
        to="/"
      >
        <button>Accueil</button>
      </NavLink>
      <NavLink
        key="/shop"
        to="/shop"
      >
        <button>Boutique</button>
      </NavLink>
      <NavLink
        key="/inventory"
        to="/inventory"
      >
        <button>Inventaire / Stats</button>
      </NavLink>
      <NavLink
        key="/fighting"
        to="/fighting"
      >
        <button>Combat</button>
      </NavLink>
      <NavLink
        key="/craft"
        to="/craft"
      >
        <button>Craft</button>
      </NavLink>
      <NavLink
        key="/jobs/mining"
        to="/jobs/mining"
      >
        <button>Minage</button>
      </NavLink>
      <NavLink
        key="/jobs/fishing"
        to="/jobs/fishing"
      >
        <button>Pêche</button>
      </NavLink>
    </div>
  );
}
