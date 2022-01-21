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
