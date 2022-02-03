import { useSelector, useDispatch } from "react-redux";
import { closeDetails, updateEquip, updateVivre } from "../../actions/character";

import './style.scss';

// == Composant
const Details = ({object}) => {

  console.log('object', object);

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
        <div className="quantity">Quantité : {object.quantity}</div>
        { object.type == 'consommable' && vie < 100 && <><button className="cta" onClick={consommer}>Consommer</button></>}
        { object.type != 'consommable' && object.type != 'ressources' &&
        <><div className="statistique">Stats : {object.statistique}</div>
        <button className="cta" onClick={changeEquip}>Enfiler</button></>}
      </div>
  );
};

// == Export
export default Details;
