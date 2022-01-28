import { useSelector, useDispatch } from "react-redux";
import "./style.scss";


export default function Stats() {
  const dispatch = useDispatch();
  
  const { vie, force, endurance, dexterite, argent, level, experience } = useSelector(
    (state) => state.character
  );
  
  const lifeCount = () => {
    dispatch(lifePoints());
  };

  return (
    <div className="container-stat">
      <ul className="stat-wrapper">
        <li className="stat-block stat-life">
          <div className="gauge">
            <div className="filled" style={{width:`${vie}%`}}></div>
            <span>Vie : {vie}</span>
          </div>
        </li>
        <li className="stat-block stat-experience">
          <div className="gauge">
            <div className="filled" style={{width:`${experience}%`}}></div>
            <span>Experience : {experience}</span>
          </div>
        </li>
        <li className="stat-block stat-dexterite">
          <span> Dextérité: {dexterite} </span>
        </li>
        <li className="stat-block stat-force">
          <span> Force : {force}</span>
        </li>
        <li className="stat-block stat-endurance">
          <span> Endurance : {endurance}</span>
        </li>
        <li className="stat-block stat-level">
          <span> Niveau : {level}</span>
        </li>
        <li className="stat-block stat-money">
          <span>Stock d'or : {argent}</span>
        </li>
      </ul>
    </div>
  );
}
