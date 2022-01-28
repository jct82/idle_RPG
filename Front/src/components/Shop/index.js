/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { boutiqueLogo } from 'src/assets/idleMenuIcons';
import {
  modaleOpen, modaleClose, emptyArray, buyItem, allObject, getCharacterMoney,
} from '../../actions/shop';

export default function Shop() {
  const dispatch = useDispatch();
  const {
    newShopArray,
    stuffs,
    isOpen,
    money,
  } = useSelector((state) => state.shop);
  // je veux que le chargement de la boutique ne se fasse qu'une fois,
  // au chargement initial de la page
  useEffect(() => {
    dispatch(getCharacterMoney());
    dispatch(emptyArray());
    dispatch(allObject());
  }, []);
  // console.log(stuffs.length);
  // };
  // gestion de la fermeture de la modale
  const closeModale = () => {
    dispatch(modaleClose());
  };

  const buyingItem = () => {
    if (money >= stuffs.find((stuff) => stuff.id == isOpen.id).attribute[0].value) {
      dispatch(buyItem(stuffs.find((stuff) => stuff.id == isOpen.id).attribute[0].value));
    }
    else {
      dispatch(modaleClose());
    }
  };

  // Ici on récupère l'id de l'élément parent du boutton ajouté pour comparé cet id
  // avec l'id de l'objet actuellement présent dans le shop
  const getIdOfButtonParent = (e) => {
    const selectedId = document.getElementById(e.target.parentElement.id).id;
    dispatch(modaleOpen(selectedId));
  };
  return (
    <>
      <div className="background-shop" />
      <div className="shop-container">
        <div className="shop-main">
          <p>Boutique</p>
        </div>
        <div className="money">
          {money} <img className="money-image" src={boutiqueLogo} alt="or" />
        </div>
        <div className="shop-inventory">
          { newShopArray.map((stuff) => (
            <div className="stuff" id={stuff.id} key={uuidv4()}>
              <div className="shop-stuff">
                {stuff.name}
              </div>
              <button onClick={getIdOfButtonParent} className="buy-button" type="button"> Acheter </button>
            </div>
          ))}
        </div>
        {isOpen.open && stuffs.find((stuff) => stuff.id == isOpen.id)
          ? (
            <div className="buying-modal">Êtes-vous sûr de vouloir acheter "{stuffs.find((stuff) => stuff.id == isOpen.id).name}"
              <div className="button-container"><button className="buying-button" type="button" onClick={buyingItem}>oui</button>
                <button className="buying-button" type="button" onClick={closeModale}>non</button>
              </div>
            </div>
          ) : ''}
      </div>
    </>
  );
}
