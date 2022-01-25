/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import {
  modaleOpen, modaleClose, randomStuff, emptyArray, buyItem,
} from '../../actions/shop';

export default function Shop() {
  const dispatch = useDispatch();
  const {
    newShopArray,
    stuffs,
    isOpen,
    money,
  } = useSelector((state) => state.shop);
  // console.log(stuffs);
  // on gère le fait d'avoir un équipement de manière aléatoire à mettre dans la boutique
  const getRandomStuff = () => {
    for (let i = 0; i < 9; i++) {
      const randomNumber = Math.floor(Math.random() * stuffs.length);
      // console.log(randomNumber);
      const randomStuffs = stuffs[randomNumber];
      // console.log(randomStuff);
      dispatch(randomStuff(randomStuffs));
      // newShopArray.push(randomStuffs);
    }
  };
  // PSEUDO CODE
  //  action payload avec 1 équipement,
  // dispatch action avec l'équipement,
  // reducer : ...state, équipement

  // console.log(getRandomStuff());
  // const shopInventory = () => {
  //   dispatch(randomStuff(getRandomStuff()));
  // };

  // je veux que le chargement de la boutique ne se fasse qu'une fois,
  // au chargement initial de la page
  useEffect(() => {
    dispatch(emptyArray());
    getRandomStuff();
  }, []);
  // console.log(stuffs.length);
  // gestion de l'ouverture de la modale
  // const openModale = (e) => {
  //   dispatch(modaleOpen(e.target.parentElement.id));
  // };
  // gestion de la fermeture de la modale
  const closeModale = () => {
    dispatch(modaleClose());
  };

  const buyingItem = () => {
    if (money >= stuffs.find((stuff) => stuff.id == isOpen.id).price) {
      dispatch(buyItem(stuffs.find((stuff) => stuff.id == isOpen.id).price));
    }
    else {
      dispatch(modaleClose());
    }
  };

  const test = stuffs.find((stuff) => stuff.id == isOpen.id);
  console.log(test);
  // Ici on récupère l'id de l'élément parent du boutton ajouté pour comparé cet id
  // avec l'id de l'objet actuellement présent dans le shop
  const getIdOfButtonParent = (e) => {
    const selectedId = document.getElementById(e.target.parentElement.id).id;
    dispatch(modaleOpen(selectedId));
  };
  return (
    <div className="shopContainer">
      <div className="shopMain">
        <p>Boutique</p>
      </div>
      <div className="money">
        {money} or
      </div>
      <div className="shopInventory">
        { newShopArray.map((stuff) => (
          <div className="stuff" id={stuff.id} key={uuidv4()}>
            <div className="shopStuff">
              {stuff.nom}
            </div>
            <button onClick={getIdOfButtonParent} className="buyButton" type="button"> Acheter </button>
          </div>
        ))}
        {isOpen.open && stuffs.find((stuff) => stuff.id == isOpen.id)
          ? (
            <div className="BuyingModal">êtes-vous sûr de vouloir acheter {stuffs.find((stuff) => stuff.id == isOpen.id).nom}
              <button type="button" onClick={buyingItem}>oui</button><button type="button" onClick={closeModale}>non</button>
            </div>
          ) : ''}
      </div>
    </div>
  );
}

// isOpen === id objet
// à chaque ouverture de modale, clear isOpen
