import { useSelector, useDispatch } from "react-redux";
import { sparePoints, updateNbrField } from '../../actions/character';
import "./style.scss";

export default function Stats() {
  const dispatch = useDispatch();

  const {
    vie,
    force,
    endurance,
    dextérité,
    gold,
    level,
    exp,
    points, 
    pointsendurance,
    pointsforce,
    pointsdextérité,
  } = useSelector((state) => state.character);

  const lifeCount = () => {
    dispatch(lifePoints());
  };

  const nbrField = (e) => {
    dispatch(updateNbrField(Number(e.target.value), e.target.name, Number(e.target.getAttribute('min')), Number(e.target.getAttribute('max'))));
  }

  const addPoint = (e) => {
    dispatch(sparePoints(e.target.getAttribute('stat-type'), Number(e.target.previousElementSibling.value), Number(e.target.getAttribute('stat-id'))));
  }

  

  return (
    <div className="container-stat">
      <ul className="stat-wrapper">
        <li className="stat-block stat-life">
          <div className="gauge">
            <div className="filled" style={{ width: `${vie}%` }}></div>
            <div className="info-gauge">
              <span>Vie</span>
              <span>{vie}</span>
            </div>
          </div>
        </li>
        <li className="stat-block stat-experience">
          <div className="gauge">
            <div className="filled" style={{ width: `${exp}%` }}></div>
            <div className="info-gauge">
              <span>Experience</span>
              <span>{exp}</span>
            </div>
          </div>
        </li>
        <li className="stat-block stat-dexterite">
          <div className="info-stat">
            <span className="stat-name"> Dextérité</span>
            <span className="stat-nbr">{dextérité}</span>
          </div>
          {points > 0 && 
          <div className="add-stat">
            <input type="number" value={pointsdextérité} onChange={nbrField} name="pointsdextérité" min="0" max={points}></input>
            <button className="btn-stats" onClick={addPoint} stat-type="dextérité" stat-id="3">+</button>
          </div>}
        </li>
        <li className="stat-block stat-force">
          <div className="info-stat">
            <span className="stat-name">Force</span>
            <span className="stat-nbr">{force}</span>
          </div>
          {points > 0 && 
          <div className="add-stat">
            <input type="number" value={pointsforce} onChange={nbrField} name="pointsforce" min="0" max={points}></input>
            <button className="btn-stats" onClick={addPoint} stat-type="force" stat-id="2">+</button>
          </div>}
        </li>
        <li className="stat-block stat-endurance">
          <div className="info-stat">
            <span className="stat-name">Endurance</span>
            <span className="stat-nbr">{endurance}</span>
          </div>
          {points > 0 && 
          <div className="add-stat">
            <input type="number" value={pointsendurance} onChange={nbrField} name="pointsendurance" min="0" max={points}></input>
            <button className="btn-stats" onClick={addPoint} stat-type="endurance" stat-id="1">+</button>
          </div>}
        </li>
        <li className="stat-block stat-level">
          <div className="info-stat">
            <span className="stat-name">Niveau</span>
            <span className="stat-nbr">{level}</span>
          </div>
        </li>
        <li className="stat-block stat-money">
          <div className="info-stat">
            <span className="stat-name">Stock d'or</span>
            <span className="stat-nbr">{gold}</span>
          </div>
        </li>
        <li className="stat-block stat-points">
          <div className="info-stat">
            <span className="stat-name">Points</span>
            <span className="stat-nbr">{points}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

