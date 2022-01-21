// == Import : npm
import { useSelector, useDispatch } from 'react-redux';
// == Import : local
import './style.scss';

// == Composant
const Character = () => {


  return (
    <div className="character">
      <div className="panel inventory-panel">
        <div className="inner-panel"></div>
      </div>
      <div className="panel equipement-panel">
        <div className="inner-panel"></div>
      </div>
      <div className="panel stat-panel">
        <div className="inner-panel"></div>
      </div>
    </div>
  );
};

// == Export
export default Character;
