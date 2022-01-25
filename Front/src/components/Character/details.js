import { useSelector, useDispatch } from "react-redux";
import { posterDetails } from "../../actions/character";

import './style.scss';

// == Composant
const Details = ({object}) => {

  let equipObject;
  object.quantite == undefined ? equipObject = true : equipObject = false;

  
  const dispatch = useDispatch();

  const shutDetails = () => {
    dispatch(posterDetails(true));
  }
  
  // const { inventory, posterCat, posterEquip, detailsObj } = useSelector(
  //   (state) => state.character
  // );

  return (
      <div className="details">
        <div className="close-details" onClick={shutDetails}>X</div>
        <p className="details-name">{object.nom}</p>
        <img className="details-view" src={object.image}/>
        <div className="detail-description">
          {object.description}
        </div>
        { equipObject ?
        <><div className="statistique">{object.statistique}</div>
        <button className="cta">Enfiler</button></> 
        : <><div className="quantity">{object.quantite}</div>
        <button className="cta">Consommer</button></>}
      </div>
  );
};

// == Export
export default Details;
