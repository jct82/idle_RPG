/* eslint-disable no-plusplus */
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { modaleOpen, modaleClose, randomStuff, emptyArray } from '../../actions/shop';

export default function Shop() {
  const dispatch = useDispatch();
  const { newShopArray, stuffs, isOpen } = useSelector((state) => state.shop);
  // console.log(stuffs);
  // on gère le fait d'avoir un équipement de manière aléatoire à mettre dans la boutique
  const getRandomStuff = () => {
    for (let i = 0; i < 9; i++) {
      const randomNumber = Math.floor(Math.random() * stuffs.length);
      // console.log(randomNumber);
      const randomStuffs = stuffs[randomNumber].nom;
      //console.log(randomStuff);
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
        { newShopArray.map((stuff) => (
          <div className="stuff" key={uuidv4()}>
            <div className="shopStuff">
              {stuff}
            </div>
            <button onClick={openModale} className="buyButton" type="button"> Acheter </button>
          </div>
        ))}
        {isOpen ? <div>coucou<button type="button" onClick={closeModale}>fermer</button></div> : ''}
      </div>
    </div>
  );
}
