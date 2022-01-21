import './style.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { randomStuff } from '../../actions/shop';

export default function Shop() {
  const { stuffs } = useSelector((state) => state.shop);
  console.log(stuffs);

  return (
    <div className="shopContainer">
      <div className="shopMain">
        <p>Boutique</p>
      </div>
      <div className="shopInventory">
        {stuffs.map((stuff) => (
          <div>
            {stuff.nom}
          </div>
        ))}
      </div>
    </div>
  );
}
