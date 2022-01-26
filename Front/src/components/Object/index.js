import { useSelector, useDispatch } from "react-redux";
import { setDetails, posterEquipment } from "../../actions/character";
import activeThumb from "../../utils/activeBox";

import './style.scss';

// == Composant
const Objects = (object) => {
  const dispatch = useDispatch();
  const  selected  = useSelector(state => state.character.selected);

  const posterEquipMenu = (e) => {
    dispatch(posterEquipment(e.target.getAttribute('name')));
    activeThumb(e.target.parentElement);
  }

  let equipObject;
  object.reserve == undefined ? equipObject = false : equipObject = true;

  const updateDetails = (e) => {
    dispatch(setDetails(object));
  }

  return (
    <div className={selected == object.nom ? "object on" : "object"}>
      <div className="view-wrapper">
        { equipObject ?
        <img className="view" src={object.image} name={object.nom} onClick={posterEquipMenu}/> :
        <img className="view" src={object.image} onClick={updateDetails} /> }
      </div>
      <div className="name-wrapper">
        <span className="name">{object.nom}</span>
      </div>
    </div>
  );
};

// == Export
export default Objects;
