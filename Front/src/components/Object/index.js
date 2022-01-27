import { useSelector, useDispatch } from "react-redux";
import { setDetails, posterEquipment } from "../../actions/character";
import activeThumb from "../../utils/activeBox";

import './style.scss';

// == Composant
const Objects = (object) => {

  const dispatch = useDispatch();
  const  selected  = useSelector(state => state.character.selected);

  const posterEquipMenu = (e) => {
    dispatch(posterEquipment(object.nom));
    activeThumb(e.currentTarget.parentElement);
  }

  let equipObject;
  object.reserve == undefined ? equipObject = false : equipObject = true;

  const updateDetails = (e) => {
    dispatch(setDetails(object));
  }

  return (
    <div className={selected == object.nom ? "object on" : "object"}>
      { equipObject ?
      <div className="view-wrapper" onClick={posterEquipMenu}>
          <img className="view" src={object.image} />
      </div> :
      <div className="view-wrapper" onClick={updateDetails}>
          <img className="view" src={object.image} />
      </div>}
      { object.quantite && <div className="nbr">{object.quantite}</div>}
      <div className="name-wrapper">
        <span className="name">{object.nom}</span>
      </div>
    </div>
  );
};

// == Export
export default Objects;
