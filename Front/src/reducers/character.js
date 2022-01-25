import { SEND_RESOURCE_TO_INVENTORY } from "../actions/mining";
import { SET_INVENTORY, CHECK_EQUIPMENT, POSTER_CATEGORY, POSTER_EQUIP, SET_DETAILS, POSTER_DETAILS} from '../actions/character';
import { SEND_CRAFTED_ITEM_TO_PLAYER, SPEND_RESOURCES_FOR_CRAFT } from "../actions/craft";

const initialState = {
  nom: 'The Counter',
  experience: 0,
  level: 0,
  inventory: {
    vivres: [
      {
        nom: '',
        description: '',
        image: '',
        valeur: 0,
        quantite: 0,
        stastistique: 0,
        type_statistique: '',
      },
    ],
    equipment: [
      {
        nom: '',
        description: '',
        image: '',
        quantite: 3,
        type_statistique: '',
        réserve: [
          {
            id: 1,
            nom: '',
            valeur: 0,
            stastistique: 0,
            description: '',
            image: '',
          },
        ],
      },
    ],
    ressources: [
      {
        nom: '',
        categorie: '',
        description: '',
        image: '',
        valeur: 0,
        quantite: 0,
      },
    ],
  },
  equipment: {
    casque: 1,
    armure: 1,
    bottes: 1,
    arme: 1,
  },
  detailsObj: {
    nom: '',
    image: '',
    description: '',
    statistique: 0,
    quantite: 0,
  },
  life: 0,
  strength: 10,
  endurance: 0,
  dexterité: 0,
  argent: 0,
  posterCat: 'vivres',
  posterEquip: '',
  details: '',
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
        const findExistingEquipment = state.inventory.equipment.find((i) => i.name === action.payload.name);
    // Si l'objet existe déjà
    if (findExistingEquipment) {
      return {
        ...state,
        inventory: {
          ...state.inventory,
          equipment: state.inventory.equipment.map(
            (item) => item.name === action.payload.name ?
            {...item, quantite: item.quantite + 1}
            : item)
        } 
      };
    } else {
      // Sinon crée un objet
      return {
        ...state,
        inventory: {
          ...state.inventory,
          equipment: [
            ...state.inventory.equipment,
            {...action.payload}
          ]
        },
      };
    };
        // return {
        //   ...state,
        //   inventory: {
        //     ...state.inventory,
        //     equipment: state.inventory.equipment.map(
        //       (item) => item.nom === action.payload.name ?
        //       {...item, quantite: item.quantite + 1}
        //       :
        //       // TODO DOESNT WORK AS INTENDED
        //       [...state.inventory.equipment, {...action.payload}]),
              
        //   }
        // }
    case SET_INVENTORY:
      return {
        ...state,
        inventory: action.inventory,
      };
    case POSTER_CATEGORY:
      let catDetails;
      state.details != action.category + state.posterEquip ? catDetails = '' : catDetails = state.details;
      return {
        ...state,
        posterCat: action.category,
        details: catDetails,
      };
    case POSTER_EQUIP:
      let equipDetails;
      state.details != state.posterCat + action.posterEquip ? equipDetails = '' : equipDetails = state.details;
      return {
        ...state,
        posterEquip: action.posterEquip,
        details: equipDetails,
      };
    case SET_DETAILS:
      const { nom, image, description } = action.detailsObj;
      let quantite, statistique;
      if (action.detailsObj.reserve == undefined) {
        quantite = action.detailsObj.quantite;
        statistique = 0;
      }
      else {
        statistique = action.detailsObj.statistique;
        quantite = 0;
      }
      return {
        ...state,
        detailsObj: {
          nom: nom,
          image: image,
          description: description,
          statistique: statistique,
          quantite: quantite,
        },
      };
    case POSTER_DETAILS:
      let newDetails;
      action.open == true ? newDetails = '' : newDetails = state.posterCat + state.posterEquip;
      return {
        ...state,
        details: newDetails,
      };
    default:
      return state;
  }
};

export default character;
