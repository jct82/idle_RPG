import { SEND_RESOURCE_TO_INVENTORY_MINE } from "../actions/mining";


const initialState = {
  nom: 'The Counter',
  experience: 0,
  level: 0,
  inventory: [
    {
      nom:'', 
      type:'', 
      description:'', 
      image:'', 
      valeur:0, 
      quantite: 0,
    }
  ],
  equipement : {
    casque: {
      nom:'', 
      statistique:'', 
      description:'', 
      image:''
    }, 
    armure: {
      nom:'', 
      statistique:'', 
      description:'', 
      image:''
    }, 
    bottes:{
      nom:'', 
      statistique:'', 
      description:'', 
      image:''
    }, arme :{
      nom:'', 
      type:'',
      statistique:'', 
      description:'', 
      image:''
    }
  },
  life: 0,
  strength: 10, 
  endurance: 0, 
  dexterité: 0,
  argent: 0,
};

const character = (state = initialState, action = {}) => {
  switch (action.type) {
  case SEND_RESOURCE_TO_INVENTORY_MINE:
    const findExistingItem = state.inventory.find(elem => elem.name === action.payload.name);
    if (findExistingItem) {
      return {
        ...state,
        inventory: state.inventory.map(
          (item) => item.name === action.payload.name ?
          {...item, quantity: item.quantity + action.payload.quantity}
          : item)
      }
    } else {
      return {
        ...state,
        inventory: [
          ...state.inventory,
          {
            name: action.payload.name,
            type: action.payload.type,
            description: action.payload.description,
            quantity: action.payload.quantity,
          }
        ]
      };
    }
    default:
      return state;
  }
};

export default character;
