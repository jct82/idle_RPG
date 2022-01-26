import { useSelector, useDispatch } from "react-redux";
import backgroundImgItem from "/src/assets/inventory-Item/battle-gear.svg";

import { equipeitem } from "../../actions/inventoryitem";

export default function InventoryItem() {
  const dispatch = useDispatch();

  const { equipeitem } = useSelector((state) => state.inventoryitem);

  // const inventoryItem = () => {
  //   dispatch(equipeitem());
  // };

  return (
    <div className="Inventory-item">
      <img
        className="battle-gear"
        src={backgroundImgItem}
        alt="Image de fond"
      />

      <ul>
        <li className="casque-item">{equipeitem}</li>
      </ul>
    </div>
  );
}
