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
        <button>Profil</button>
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
      {/* <iframe width="100%" height="450" scrolling="no" allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1233926452&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
      </iframe> */}
      {/* <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1233926452&color=%2300aaff&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false">
      </iframe>
      <div className="SC1"><a href="https://soundcloud.com/xdeviruchi" title="xDeviruchi" target="_blank" className="SC2">xDeviruchi</a> · <a href="https://soundcloud.com/xdeviruchi/sets/8-bit-fantasy-adventure" title="8-Bit Fantasy &amp; Adventure" target="_blank" className="SC3">
      8-Bit Fantasy &amp; Adventure</a></div> */}
    </div>
  );
}
