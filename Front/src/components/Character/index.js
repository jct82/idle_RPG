// == Import : npm
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import characterData from "../../../data/character";
import { setInventoryObjects, posterCategory, posterEquipment } from "../../actions/character";
import Objects from "../Object";
import Details from "./details";
import activeThumb from "../../utils/activeBox";
// == Import : local
import "./style.scss";
import Stats from "./Stats";

// == Composant
const Inventory = () => {
  const dispatch = useDispatch();
  const { inventory, posterCat, posterEquip, detailsObj, details } = useSelector(
    (state) => state.character
  );
  
  const inventoryData = characterData[0].inventory;

  useEffect(() => {
    dispatch(setInventoryObjects(inventoryData));
  }, []);

  inventory.ressources.sort((a, b) => a.categorie - b.categorie);

  const jsxRessource = inventory.ressources.map((object) => (
    <Objects key={object.nom} {...object} />
  ));
  const jsxVivre = inventory.vivres.map((object) => (
    <Objects key={object.nom} {...object} />
  ));
  const jsxEquipement = inventory.equipment.map((object) => (
    <Objects key={object.nom} {...object} />
  ));

  let jsxHelmet = [],
    jsxArmor = [],
    jsxWeapon = [],
    jsxShoes = [];
  inventory.equipment.forEach((equip) => {
    if (equip.nom == "casque") {
      jsxHelmet = equip.reserve.map((item) => (
        <Objects key={item.id} {...item}/>
      ));
    } else if (equip.nom == "armure") {
      jsxArmor = equip.reserve.map((item) => (
        <Objects key={item.id} {...item} />
      ));
    } else if (equip.nom == "arme") {
      jsxWeapon = equip.reserve.map((item) => (
        <Objects key={item.id} {...item} />
      ));
    } else if (equip.nom == "bottes") {
      jsxShoes = equip.reserve.map((item) => (
        <Objects key={item.id} {...item} />
      ));
    }
  });

  jsxWeapon.sort((a, b) => a.type - b.type);

  const posterCatMenu = (e) => {
    dispatch(posterCategory(e.target.getAttribute("name")));
    if (e.target.getAttribute("name") != 'equipement') dispatch(posterEquipment(''));
    activeThumb(e.target);
  };

  return (
    <div className="character">
      <div className="panel inventory-panel">
        <div className="inner-panel">
          <div className="inventory-category">
            <ul className="menu-inventory" onClick={posterCatMenu}>
              <li className="cat-name vivres" type="obj" name="vivre">
                <span>
                  <span>Vivre</span>
                </span>
              </li>
              <li className="cat-name ressources" name="ressources">
                <span>
                  <span>Ressources</span>
                </span>
              </li>
              <li className="cat-name equipement" name="equipement">
                <span>
                  <span>Equipement</span>
                </span>
              </li>
            </ul>
            {posterCat == "vivre" && (
              <div className="category-block vivre">{jsxVivre}</div>
            )}
            {posterCat == "ressources" && (
              <div className="category-block ressources">{jsxRessource}</div>
            )}
            {posterCat == "equipement" && (
              <>
                <div className="category-block equipement">{jsxEquipement}</div>
                {posterEquip == "arme" && (
                  <div className="category-block arme">{jsxWeapon}</div>
                )}
                {posterEquip == "armure" && (
                  <div className="category-block armure">{jsxArmor}</div>
                )}
                {posterEquip == "casque" && (
                  <div className="category-block casque">{jsxHelmet}</div>
                )}
                {posterEquip == "bottes" && (
                  <div className="category-block shoes">{jsxShoes}</div>
                )}
              </>
            )}
          </div>
          {details.length > 0 && <Details object={detailsObj}/>}
        </div>
      </div>
      <div className="panel equipement-panel">
        <div className="inner-panel">
        <Stats /> 
        </div>
      </div>
      <div className="panel stat-panel">
        <div className="inner-panel"></div>
      </div>
      
    </div>
   
  );
  
};
// == Export
export default Inventory;
