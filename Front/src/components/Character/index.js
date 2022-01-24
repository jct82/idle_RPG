// == Import : npm
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import characterData from "../../../data/character";
import { setInventoryObjects } from "../../actions/character";
import Objects from "../Object";
// == Import : local
import "./style.scss";
// == Composant
const Inventory = () => {
  const dispatch = useDispatch();
  const { inventory } = useSelector((state) => state.character);
  const inventoryData = characterData[0].inventory;
  useEffect(() => {
    dispatch(setInventoryObjects(inventoryData));
  }, []);

  let jsxInventoryRessource = [];
  let jsxInventoryVivre = [];
  let jsxInventoryEquipement = [];

  inventory.forEach((object) => {
    if (object.type == 'vivre') {
      jsxInventoryRessource.push(<Objects key={object.nom} {...object} />);
    } else if (object.type == 'equipement') {
      jsxInventoryVivre.push(<Objects key={object.nom} {...object}/>);
    } else if (object.type == 'ressources') {
      jsxInventoryEquipement.push(<Objects key={object.nom} {...object}/>);
    }
  });

  return (
    <div className="character">
      <div className="panel inventory-panel">
        <div className="inner-panel">
          <div className="inventory-category">
            <div className="ressources">
              {jsxInventoryRessource}
            </div>
            <div className="consommable">
              <div className="object">
                <span className="name"></span>
                <img className="view" src="" />
                <div className="details">
                  <p className="details-name"></p>
                  <img className="details-view" src="" />
                  <div className="detail-description"></div>
                  <div className="quantity"></div>
                </div>
                {/* <button className="cta">Consommer</button> */}
              </div>
            </div>
            <div className="equipement">
              <div className="object">
                <span className="name"></span>
                <img className="view" src="" />
                <div className="details">
                  <p className="details-name"></p>
                  <img className="details-view" src="" />
                  <div className="detail-description"></div>
                  <div className="quantity"></div>
                </div>
                {/* <button className="cta">utiliser</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="panel equipement-panel">
        <div className="inner-panel"></div>
      </div>
      <div className="panel stat-panel">
        <div className="inner-panel"></div>
      </div>
    </div>
  );
};
// == Export
export default Inventory;
