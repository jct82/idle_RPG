import { useSelector, useDispatch } from "react-redux";
import {
  lifePoints,
  experience,
  level,
  joblevel,
  force,
} from "../../actions/stats";
import "./style.scss";
import imgLife from "/src/assets/LifePoint/LifePoint.png";
import imgForce from "/src/assets/Force/force.png";

export default function Stats() {
  const dispatch = useDispatch();

  const { vie, xp, level, metier, argent, dexterite, force } = useSelector(
    (state) => state.stats
  );

  const lifeCount = () => {
    dispatch(lifePoints());
  };

  return (
    <div className="container-stat">
      <ul>
        <li className="stat-life">
          <span>{vie}</span>
          <img src={imgLife} alt="Coeur" />
        </li>

        <li className="stat-dexterite">
          <span> {dexterite} Dextérité </span>
        </li>

        <li className="stat-force">
          <span>{force}</span>
          <img src={imgForce} alt="force" />
        </li>

        <li className="stat-experience">
          <span>{xp}</span>
        </li>

        <li className="stat-level">
          <span> Niveau : {level}</span>
        </li>

        <li className="stat-job">
          <span>
            {metier} {level}
          </span>
        </li>

        <li className="stat-money">
          <span>Stock d'or : {argent}</span>
        </li>
      </ul>
    </div>
  );
}
