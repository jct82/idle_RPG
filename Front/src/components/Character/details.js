import { useSelector, useDispatch } from "react-redux";
import { closeDetails, updateEquip, updateVivre } from "../../actions/character";

import './style.scss';

// == Composant
const Details = ({object}) => {

  const vivres  = useSelector((state) => state.character.inventory.vivres);

  let equipObject;
  object.quantite == undefined ? equipObject = true : equipObject = false;

  const dispatch = useDispatch();

  const shutDetails = () => {
    dispatch(closeDetails());
  }

  const changeEquip = () => {
    dispatch(updateEquip(object.id, object.type));
  }
  
  const consommer = () => {
    console.log('vivresvivres', vivres);
    dispatch(updateVivre(object.nom,object.statistique));
  }

  return (
      <div className="details">
        <div className="close-details" onClick={shutDetails}>X</div>
        <p className="details-name">{object.nom}</p>
        <img className="details-view" src={object.image}/>
        <div className="detail-description">
          {object.description}
        </div>
        { 
          equipObject ?
        <><div className="statistique">Stats : {object.statistique}</div>
        <button className="cta" onClick={changeEquip}>Enfiler</button></> 
        : <><div className="quantity">Quantité : {object.quantite}</div>
        <button className="cta" onClick={consommer}>Consommer</button></>}
      </div>
  );
};

// == Export
export default Details;
