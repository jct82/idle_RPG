import { SEND_RESOURCE_TO_INVENTORY } from "../actions/mining";

import { SET_INVENTORY } from '../actions/character';

const initialState = {
  nom: 'The Counter',
  experience: 0,
  level: 0,
  inventory: [],
  equipement : {
    casque: 1, 
    armure: 1, 
    bottes:1, 
    arme :1,
  },
  life: 0,
  strength: 10, 
  endurance: 0, 
  dexterité: 0,
  argent: 0,
};

const character = (state = initialState, action = {}) => {
  switch (action.type) {
  case SEND_RESOURCE_TO_INVENTORY:
    const findExistingItem = state.inventory.find(elem => elem.name === action.payload.name);
    // Si l'objet existe déjà
    if (findExistingItem) {
      return {
        ...state,
        inventory: state.inventory.map(
          (item) => item.name === action.payload.name ?
          {...item, quantity: item.quantity + action.payload.quantity}
          : item)
      };
    } else {
      // Sinon crée un objet
      return {
        ...state,
        inventory: [
          ...state.inventory,
          {
            ...action.payload
          }
        ]
      };
    };
    case SET_INVENTORY:
      return {
        ...state,
        inventory: action.inventory,
      };
    default:
      return state;
  }
};

export default character;
