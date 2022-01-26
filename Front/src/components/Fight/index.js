// == Import : npm
import { useSelector, useDispatch } from 'react-redux';
// == Import : local
import './styles.scss';

// == Composant
const Fight = () => {
  const eslintcestrelou = 'wow';
  return (
    <div className="fight-container">
      <div className="fight-container--characters">
        <div className="fight-profile">
          <div className="fight-player--img" />
          <span id="healthBarContainer--player">
            <span id="healthBar--player" />
          </span>
          <span id="atkSpeedContainer--player">
            <span id="atkSpeed--player" />
          </span>
        </div>
        <div className="fight-profile">
          <div className="fight-enemy--img" />
          <span id="healthBarContainer--enemy">
            <span id="healthBar--enemy" />
          </span>
          <span id="atkSpeedContainer--enemy">
            <span id="atkSpeed--enemy" />
          </span>
        </div>
      </div>
      <div className="fight-container--stats">
        <div className="fight--logs">
          LOGS DYNAMIQUES
        </div>
        <div className="fight--stats">
          STATS JOUEUR ET MONSTRE
        </div>
      </div>
    </div>
  );
};

// == Export
export default Fight;
