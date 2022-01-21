import { NavLink } from 'react-router-dom';
import {
  accueilLogo,
  boutiqueLogo,
  combatLogo,
  craftLogo,
  fishingLogo,
  inventoryLogo,
  miningLogo
} from 'src/assets/idleMenuIcons';
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
        <img className="navHidden" src={accueilLogo}></img>
        <button>Accueil</button>
      </NavLink>
      <NavLink
        key="/shop"
        to="/shop"
      >
        <img className="navHidden" src={boutiqueLogo}></img>
        <button>Boutique</button>
      </NavLink>
      <NavLink
        key="/inventory"
        to="/inventory"
      >
        <img className="navHidden" src={inventoryLogo}></img>
        <button>Inventaire / Stats</button>
      </NavLink>
      <NavLink
        key="/fighting"
        to="/fighting"
      >
        <img className="navHidden" src={combatLogo}></img>
        <button>Combat</button>
      </NavLink>
      <NavLink
        key="/craft"
        to="/craft"
      >
        <img className="navHidden" src={craftLogo}></img>
        <button>Craft</button>
      </NavLink>
      <NavLink
        key="/jobs/mining"
        to="/jobs/mining"
      >
        <img className="navHidden" src={miningLogo}></img>
        <button>Minage</button>
      </NavLink>
      <NavLink
        key="/jobs/fishing"
        to="/jobs/fishing"
      >
        <img className="navHidden" src={fishingLogo}></img>
        <button>Pêche</button>
      </NavLink>
    </div>
  );
}
