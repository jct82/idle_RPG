import { useSelector, useDispatch } from "react-redux";
import { closeDetails, updateEquip, updateVivre } from "../../actions/character";

import './style.scss';

// == Composant
const Details = ({object}) => {

  const vie = useSelector((state) => state.character.vie);
  const dispatch = useDispatch();

  const shutDetails = () => {
    dispatch(closeDetails());
  }

  const changeEquip = () => {
    dispatch(updateEquip(object.id, object.type));
  }
  
  const consommer = () => {
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
        { object.quantite == undefined ?
        <><div className="statistique">Stats : {object.statistique}</div>
        <button className="cta" onClick={changeEquip}>Enfiler</button></> :
        <><div className="quantity">Quantité : {object.quantite}</div></> }
        { object.type == 'vivres' && vie < 100 && <><button className="cta" onClick={consommer}>Consommer</button></>}
      </div>
  );
};

// == Export
export default Details;
