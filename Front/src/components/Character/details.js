import { useSelector, useDispatch } from "react-redux";
import { closeDetails, updateEquip } from "../../actions/character";

import './style.scss';

// == Composant
const Details = ({object}) => {

  let equipObject;
  object.quantite == undefined ? equipObject = true : equipObject = false;

  const dispatch = useDispatch();

  const shutDetails = () => {
    dispatch(closeDetails());
  }

  const changeEquip = () => {
    dispatch(updateEquip(object.id, object.type));
  }

  return (
      <div className="details">
        <div className="close-details" onClick={shutDetails}>X</div>
        <p className="details-name">{object.nom}</p>
        <img className="details-view" src={object.image}/>
        <div className="detail-description">
          {object.description}
        </div>
        { equipObject ?
        <><div className="statistique">Stats : {object.statistique}</div>
        <button className="cta" onClick={changeEquip}>Enfiler</button></> 
        : <><div className="quantity">Quantité : {object.quantite}</div>
        <button className="cta">Consommer</button></>}
      </div>
  );
};

// == Export
export default Details;
