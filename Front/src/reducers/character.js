import { SEND_RESOURCE_TO_INVENTORY } from "../actions/mining";
import { SET_INVENTORY, CHECK_EQUIPMENT, POSTER_CATEGORY, POSTER_EQUIP} from '../actions/character';
import { SEND_CRAFTED_ITEM_TO_PLAYER, SPEND_RESOURCES_FOR_CRAFT } from "../actions/craft";

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
    const findExistingItem = state.inventory.ressources.find((i) => i.nom === action.payload.nom);
    // Si l'objet existe déjà
    if (findExistingItem) {
      console.log('yes');
      return {
        ...state,
        inventory: {
          ...state.inventory,
          ressources: state.inventory.ressources.map(
            (item) => item.nom === action.payload.nom ?
            {...item, quantite: item.quantite + action.payload.quantite}
            : item)
        } 
      };
    } else {
      console.log('no');
      // Sinon crée un objet
      return {
        ...state,
        inventory: {
          ...state.inventory,
          ressources: [
            ...state.inventory.ressources,
            {...action.payload}
          ]
        }
      };
    };
    case SPEND_RESOURCES_FOR_CRAFT:
      return {
        ...state,
        inventory: {
          ...state.inventory,
          ressources: state.inventory.ressources.map(
            (item) => item.nom === action.payload.name ?
            {...item, quantite: item.quantite - action.payload.quantity}
            : item)
        }
      };
      case SEND_CRAFTED_ITEM_TO_PLAYER:
        return {
          ...state,
          inventory: {
            ...state.inventory,
            equipment: state.inventory.equipment.map(
              (item) => item.nom === action.payload.name ?
              {...item, quantite: item.quantite + 1}
              :
              // TODO DOESNT WORK AS INTENDED
              [...state.inventory.equipment, {...action.payload}]),
              
          }
        }
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
