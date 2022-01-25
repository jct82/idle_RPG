import { useSelector, useDispatch } from "react-redux";
import { lifePoints, experience, level, joblevel } from "../../actions/stats";
import "./style.scss";
import imgLife from "/src/assets/LifePoint/LifePoint.png";
import force from "/src/assets/Force/force.png";

export default function Stats() {
  const dispatch = useDispatch();

  const { vie, xp, level, metier, argent } = useSelector(
    (state) => state.stats
  );

  const lifeCount = () => {
    dispatch(lifePoints());
  };

  return (
    <div className="container-stat">
      <ul>
        <li>
          <span>{vie}</span>
          <img src={imgLife} alt="Coeur" />
        </li>
        <li>
          {/* <span>Force</span> */}
          <img src={force} alt="force" />
        </li>
        <li>
          <span>{xp}</span>
        </li>
        <li>
          <span> Niveau : {level}</span>
        </li>
        <li>
          <span>
            Metier : {metier} {level}
          </span>
        </li>
        <li>
          <span>Stock d'or : {argent}</span>
        </li>
      </ul>
    </div>
  );
}
