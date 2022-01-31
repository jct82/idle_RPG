export const SET_INVENTORY = 'SET_INVENTORY';
export const POSTER_CATEGORY = 'POSTER_CATEGORY';
export const POSTER_EQUIP = 'POSTER_EQUIP';
export const SET_DETAILS = 'SET_DETAILS';
export const CLOSE_DETAILS = 'CLOSE_DETAILS';
export const UPDATE_EQUIPMENT = 'UPDATE_EQUIPMENT';
export const UPDATE_VIVRE = 'UPDATE_VIVRE';
export const SPARE_POINTS = 'SPARE_POINTS';
export const UPDATE_NBR_FIELD = 'UPDATE_NBR_FIELD';
export const GET_INVENTORY_ON_LOGIN = 'GET_INVENTORY_ON_LOGIN';

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

export const updateVivre = (nom, statistique) => ({
  type: UPDATE_VIVRE,
  nom:nom,
  statistique: statistique,
});

export const sparePoints = (nom, statistique) => ({
  type: SPARE_POINTS,
  nom:nom,
  statistique: statistique,
});

export const updateNbrField = (value, nom, min, max) => ({
  type: UPDATE_NBR_FIELD,
  value : value, 
  nom: nom,
  min: min, 
  max: max,
});

export const getInventoryOnLogin = (inv) => ({
  type: GET_INVENTORY_ON_LOGIN,
  payload: {
    inv,
  },
});
