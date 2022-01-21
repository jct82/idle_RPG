import './style.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { randomStuff, modaleOpen } from '../../actions/shop';

export default function Shop() {
  const { stuffs } = useSelector((state) => state.shop);
  // console.log(stuffs);
  // on force le tableau à n'avoir qu'un nombre limité d'élément
  stuffs.length = 9;
  // console.log(stuffs.length);
  const dispatch = useDispatch();
  const openModale = () => {
    dispatch(modaleOpen());
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
      </div>
    </div>
  );
}
