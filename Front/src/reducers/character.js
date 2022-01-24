import { SEND_RESOURCE_TO_INVENTORY } from "../actions/mining";
import { SET_INVENTORY, CHECK_EQUIPMENT, POSTER_CATEGORY, POSTER_EQUIP} from '../actions/character';

const initialState = {
  nom: 'The Counter',
  experience: 0,
  level: 0,
  inventory: {
    vivres:[
      {
        nom:'', 
        description:'', 
        image:'', 
        valeur:0, 
        quantite: 0, 
        stastistique: 0, 
        type_statistique: ''
      },
    ],
    equipment:[
      {
        nom:'', 
        description:'', 
        image:'',  
        quantite: 3, 
        type_statistique: '', 
        réserve:[
          {
            id:1,
            nom:'', 
            valeur:0, 
            stastistique: 0,
            description: '',
            image:'', 
          }
        ]
      },
    ],
    ressources: [
      {
        nom:'', 
        categorie:'', 
        description:'',  
        image:'', 
        valeur:0, 
        quantite: 0,
      },
    ],
  },
  equipment : {
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
  posterCat : 'vivres',
  equipThumb :'arme',
  seeEquipment: false,
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
    case CHECK_EQUIPMENT:
      return {
        ...state,
        seeEquipment: !state.seeEquipment,
      };
    case POSTER_CATEGORY:
      return {
        ...state,
        posterCat: action.category,
      };
    case POSTER_EQUIP:
      return {
        ...state,
        equipThumb: action.equipThumb,
      };
    default:
      return state;
  }
};

export default character;
