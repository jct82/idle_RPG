// == Import : npm
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// == Import : local
import './style.scss';

// == Composant
const Objects = (object, type) => {

  return (
    <div className="object">
      <span className="name">{object.nom}</span>
      <img className="view" src={object.image}/>
      <div className="details">
        <p className="details-name">{object.nom}</p>
        <img className="details-view" src={object.image}/>


        {/* <div className="categorie">{object.categorie}</div> */}

        <div className="detail-description">
          {object.description}
        </div>
        <div className="quantity">{object.quantite}</div>
      </div>
      <button className="cta">Consommer</button>
    </div>
  );
};

// == Export
export default Objects;
