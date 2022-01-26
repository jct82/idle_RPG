export const SET_INVENTORY = 'SET_INVENTORY';
export const POSTER_CATEGORY = 'POSTER_CATEGORY';
export const POSTER_EQUIP = 'POSTER_EQUIP';
export const SET_DETAILS = 'SET_DETAILS';
export const CLOSE_DETAILS = 'CLOSE_DETAILS';
export const UPDATE_EQUIPMENT = 'UPDATE_EQUIPMENT';

export const setInventoryObjects = (inventory) => ({
  type: SET_INVENTORY,
  inventory: inventory,
});

export const posterCategory = (category) => ({
  type: POSTER_CATEGORY,
  category: category,
});

export const posterEquipment = (posterEquip) => ({
  type: POSTER_EQUIP,
  posterEquip: posterEquip,
});

export const setDetails = (detailsObj) => ({
  type: SET_DETAILS,
  detailsObj: detailsObj,
});

export const closeDetails = () => ({
  type: CLOSE_DETAILS,
});

export const updateEquip = (id, objType) => ({
  type: UPDATE_EQUIPMENT,
  id:id,
  objType: objType,
});

