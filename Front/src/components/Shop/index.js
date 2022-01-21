import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { modaleOpen, modaleClose } from '../../actions/shop';

export default function Shop() {
  const dispatch = useDispatch();
  const { stuffs, isOpen } = useSelector((state) => state.shop);
  // console.log(stuffs);
  // on force le tableau à n'avoir qu'un nombre limité d'élément
  stuffs.length = 9;
  // console.log(stuffs.length);
  // gestion de l'ouverture de la modale
  const openModale = () => {
    dispatch(modaleOpen());
  };
  // gestion de la fermeture de la modale
  const closeModale = () => {
    dispatch(modaleClose());
  };
  return (
    <div className="shopContainer">
      <div className="shopMain">
        <p>Boutique</p>
      </div>
      <div className="shopInventory">
        {stuffs.map((stuff) => (
          <div className="stuff" key={uuidv4()}>
            <div className="shopStuff">
              {stuff.nom}
            </div>
            <button onClick={openModale} className="buyButton" type="button"> Acheter </button>
          </div>
        ))}
        {isOpen ? <div>coucou<button type="button" onClick={closeModale}>fermer</button></div> : ''}
      </div>
    </div>
  );
}
