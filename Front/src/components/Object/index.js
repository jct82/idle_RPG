import { useSelector, useDispatch } from "react-redux";
import { setDetails, posterDetails, posterEquipment } from "../../actions/character";
import activeThumb from "../../utils/activeBox";

import './style.scss';

// == Composant
const Objects = (object, objOn) => {
  const dispatch = useDispatch();

  const posterEquipMenu = (e) => {
    dispatch(posterEquipment(e.target.getAttribute('name')));
    activeThumb(e.target.parentElement);
  }

  let equipObject;
  object.reserve == undefined ? equipObject = false : equipObject = true;

  const updateDetails = (e) => {
    dispatch(setDetails(object));
    dispatch(posterDetails());
    activeThumb(e.target.parentElement);
  }

  return (
    <div className="object">
      { equipObject ?
      <img className="view" src={object.image} name={object.nom} onClick={posterEquipMenu}/> :
      <img className="view" src={object.image} onClick={updateDetails} /> }
      <div className="name-wrapper">
        <span className="name">{object.nom}</span>
      </div>
    </div>
  );
};

// == Export
export default Objects;
