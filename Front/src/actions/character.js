export const SET_INVENTORY = 'SET_INVENTORY';
export const CHECK_EQUIPMENT = 'CHECK_EQUIPMENT';
export const POSTER_CATEGORY = 'POSTER_CATEGORY';
export const POSTER_EQUIP = 'POSTER_EQUIP';

export const setInventoryObjects = (inventory) => ({
  type: SET_INVENTORY,
  inventory: inventory
});

export const checkEquipment = () => ({
  type: CHECK_EQUIPMENT,
});

export const posterCategory = (category) => ({
  type: POSTER_CATEGORY,
  category: category,
});

export const posterEquip = (equipThumb) => ({
  type: POSTER_EQUIP,
  equipThumb: equipThumb,
});

