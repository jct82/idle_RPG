// == Import : npm
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import characterData from "../../../data/character";
import { setInventoryObjects, checkEquipment, posterCategory } from "../../actions/character";
import Objects from "../Object";
import Equipment from "../Object/Equipment";
// == Import : local
import "./style.scss";
// == Composant
const Inventory = () => {
  const dispatch = useDispatch();
  const { inventory, equipment, seeEquipment, posterCat } = useSelector((state) => state.character);
  const inventoryData = characterData[0].inventory;
  
  useEffect(() => {
    dispatch(setInventoryObjects(inventoryData));
  }, []);
  
  inventory.ressources.sort((a, b) => a.categorie - b.categorie);

  const jsxRessource = inventory.ressources.map(object => <Objects key={object.nom} {...object} />);
  const jsxVivre = inventory.vivres.map(object => <Objects key={object.nom} {...object} />);
  const jsxEquipement = inventory.equipment.map(object => <Objects key={object.nom} {...object} />);


  let jsxHelmet = [], jsxArmor = [], jsxWeapon = [], jsxShoes = [];
  inventory.equipment.forEach(equip => {
    if (equip.nom == 'casque') {
      jsxHelmet = equip.reserve.map(item => <Equipment key={item.id} {...item} />);
    } else if (equip.nom == 'armure') {
      jsxArmor = equip.reserve.map(item => <Equipment key={item.id} {...item} />);
    } else if (equip.nom == 'arme') {
      jsxWeapon = equip.reserve.map(item => <Equipment key={item.id} {...item} />);
    } else if (equip.nom == 'bottes') {
      jsxShoes = equip.reserve.map(item => <Equipment key={item.id} {...item} />);
    }
  });

  jsxWeapon.sort((a, b) => a.type - b.type);

  const posterEquipment = () => {
    dispatch(checkEquipment());
  }

  const posterCatMenu = (e) => {
    dispatch(posterCategory(e.target.getAttribute('name')));
  }

  return (
    <div className="character">
      <div className="panel inventory-panel">
        <div className="inner-panel">
          <div className="inventory-category">
            <ul className="menu-inventory" onClick={posterCatMenu}>
              <li className="cat-name vivres" type="obj" name="vivre"><span><span>Vivre</span></span></li> 
              <li className="cat-name ressources" name="ressources"><span><span>Ressources</span></span></li> 
              <li className="cat-name equipement" name="equipement"><span><span>Equipement</span></span></li> 
            </ul>
            {posterCat == 'vivre' && <div className="category-block vivre">{jsxVivre}</div>}
            {posterCat == 'ressources' && <div className="category-block ressources">{jsxRessource}</div>}
            {posterCat == 'equipement' && <div className="category-block equipement">{jsxEquipement}</div>}

            {seeEquipment &&
            <>{posterEquip == 'arme' && <div className="category-block arme">
                <div className="category-name">Armes</div>
                  {jsxWeapon}
              </div>}
              {posterEquip == 'armure' && <div className="category-block armure">
                <div className="category-name">Armures</div>
                  {jsxArmor}
              </div>}
              {posterEquip == 'casque' && <div className="category-block equipement">
                <div className="category-name">Casques</div>
                {jsxHelmet}
              </div>}
              {posterEquip == 'bottes' && <div className="category-block equipement">
                <div className="category-name">Bottes</div>
                {jsxShoes}
              </div>}</>}
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
