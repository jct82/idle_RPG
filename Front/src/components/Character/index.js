// == Import : npm
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import characterData from "../../../data/character";
import { setInventoryObjects, posterCategory, posterEquipment } from "../../actions/character";
import Objects from "../Object";
import Details from "./details";
import Equipment from "./equipment";
import Stats from "./Stats";
import activeThumb from "../../utils/activeBox";
// == Import : local
import "./style.scss";

// == Composant
const Inventory = () => {
  const dispatch = useDispatch();
  const { inventory, posterCat, posterEquip, detailsObj, selected, equipment } = useSelector(
    (state) => state.character
  );

  const inventoryData = characterData[0].inventory;
  const equipmentData = inventoryData.equipment;
  

  useEffect(() => {
    dispatch(setInventoryObjects(inventoryData));
  }, []);

  inventory.ressources.sort((a, b) => a.categorie - b.categorie);

  const jsxRessource = inventory.ressources.map((object) => {if (object.quantite > 0) return <Objects key={object.nom} {...object} type="ressources" />});
  const jsxVivre = inventory.vivres.map((object) => {if (object.quantite > 0) return <Objects key={object.nom} {...object} type="vivres" />});
  const jsxEquipement = inventory.equipment.map((object) => <Objects key={object.nom} {...object}/>);

  let jsxHelmet = [],
    jsxArmor = [],
    jsxWeapon = [],
    jsxShoes = [];
  inventory.equipment.forEach((equip) => {
    if (equip.nom == "casque") {
      jsxHelmet = equip.reserve.map((item) => (
        <Objects key={item.id} {...item} type={equip.nom}/>
      ));
    } else if (equip.nom == "armure") {
      jsxArmor = equip.reserve.map((item) => (
        <Objects key={item.id} {...item} type={equip.nom}/>
      ));
    } else if (equip.nom == "arme") {
      jsxWeapon = equip.reserve.map((item) => (
        <Objects key={item.id} {...item} type={equip.nom} />
      ));
    } else if (equip.nom == "bottes") {
      jsxShoes = equip.reserve.map((item) => (
        <Objects key={item.id} {...item} type={equip.nom} />
      ));
    }
  });

  jsxWeapon.sort((a, b) => a.type - b.type);

  const posterCatMenu = (e) => {
    dispatch(posterCategory(e.currentTarget.getAttribute("name")));
    if (e.currentTarget.getAttribute("name") != 'equipement') dispatch(posterEquipment(''));
    activeThumb(e.currentTarget);
  };

  const JSXaccessories = Object.keys(equipment).map(function(key) {
    let equipType = equipmentData.find(item => item.nom == key);
    let equipObj = equipType.reserve.find(item => item.id == equipment[key]);
    return (
      <Equipment key={equipObj.nom} {...equipObj} />
    )
  });

  return (
    <><div className="title-page">
      <div className="title">PROFIL</div>
    </div>
    <div className="character">
      <div className="panel inventory-panel">
        <div className="inner-panel">
          <div className="inventory-wrapper">
            <div className="category-title">{posterCat}</div>
            <div className="inventory-category">
              <ul className="menu-inventory">
                <li className="cat-name vivres" onClick={posterCatMenu} name="vivre">
                  <div className="inner"></div>
                  {/* <span>
                    <span>Vivre</span>
                  </span> */}
                </li>
                <li className="cat-name ressources" onClick={posterCatMenu} name="ressources">
                <div className="inner"></div>
                  {/* <span>
                    <span>Ressources</span>
                  </span> */}
                </li>
                <li className="cat-name equipement" onClick={posterCatMenu} name="equipement">
                <div className="inner"></div>
                  {/* <span>
                    <span>Equipement</span>
                  </span> */}
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
          </div>
          <div className="details-wrapper">
            {selected.length > 0 && <Details object={detailsObj}/>}
          </div>
        </div>
      </div>
      <div className="panel stat-panel">
        <div className="inner-panel">
          <Stats /> 
        </div>
      </div>
      <div className="panel equipement-panel">
        <div className="inner-panel">
          {JSXaccessories}
        </div>
      </div>
    </div></>
  );
  
};
// == Export
export default Inventory;
