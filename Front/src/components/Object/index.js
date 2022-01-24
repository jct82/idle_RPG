import { useSelector, useDispatch } from "react-redux";
import { posterEquip } from "../../actions/character";

import './style.scss';

// == Composant
const Objects = (object) => {
  const dispatch = useDispatch();
  
  const posterEquipMenu = (e) => {
    dispatch(posterEquip(e.target.getAttribute('name')));
  }

  return (
    <div className="object">
      {object.reserve == undefined ?
      <img className="view" src={object.image} /> : 
      <img className="view" src={object.image} name={object.nom} onClick={posterEquipMenu}/>}
      <div className="name-wrapper">
        <span className="name">{object.nom}</span>
      </div>
      <div className="details">
        <p className="details-name">{object.nom}</p>
        <img className="details-view" src={object.image}/>
        <div className="detail-description">
          {object.description}
        </div>
        <div className="quantity">{object.quantite}</div>
        <button className="cta">Consommer</button>
      </div>
      
    </div>
  );
};

// == Export
export default Objects;
