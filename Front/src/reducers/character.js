import { SEND_RESOURCE_TO_INVENTORY } from '../actions/mining';
import {
  SET_INVENTORY, POSTER_CATEGORY, POSTER_EQUIP, SET_DETAILS, POSTER_DETAILS,
} from '../actions/character';

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
      const findExistingItem = state.inventory.find((elem) => elem.name === action.payload.name);
      // Si l'objet existe déjà
      if (findExistingItem) {
        return {
          ...state,
          inventory: state.inventory.map(
            (item) => (item.name === action.payload.name
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item),
          ),
        };
      }
      // Sinon crée un objet
      return {
        ...state,
        inventory: [
          ...state.inventory,
          {
            ...action.payload,
          },
        ],
      };

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
