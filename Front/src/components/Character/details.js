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
    dispatch(updateEquip(object.item_id, object.type));
  }
  
  const consommer = () => {
    dispatch(updateVivre(object.name,object.statistique));
  }

  return (
      <div className="details">
        <div className="close-details" onClick={shutDetails}>X</div>
        <p className="details-name">{object.name}</p>
        <div className={`details-view ${object.img_path}`}></div>
        <div className="detail-description">
          {object.description}
        </div>
        { object.quantity == undefined ?
        <><div className="statistique">Stats : {object.statistique}</div>
        <button className="cta" onClick={changeEquip}>Enfiler</button></> :
        <><div className="quantity">Quantité : {object.quantity}</div></> }
        { object.type == 'consommable' && vie < 100 && <><button className="cta" onClick={consommer}>Consommer</button></>}
      </div>
  );
};

// == Export
export default Details;
