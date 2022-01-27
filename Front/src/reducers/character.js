import { SEND_RESOURCE_TO_INVENTORY } from "../actions/mining";
import { SET_INVENTORY, POSTER_CATEGORY, POSTER_EQUIP, SET_DETAILS, CLOSE_DETAILS, UPDATE_EQUIPMENT,UPDATE_VIVRE } from '../actions/character';
import { SEND_CRAFTED_ITEM_TO_PLAYER, SPEND_RESOURCES_FOR_CRAFT } from "../actions/craft";

const initialState = {
  nom: 'The Counter',
  experience: 10,
  level: 0,
  inventory: {
    vivres: [
      {
        nom: '',
        description: '',
        image: '',
        valeur: 0,
        quantite: 0,
        statistique: 0,
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
        reserve: [
          {
            id: 1,
            nom: '',
            valeur: 0,
            statistique: 0,
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
    id: 0,
    nom: '',
    image: '',
    description: '',
    statistique: 0,
    quantite: 0,
    type:'',
  },
  life: 50,
  strength: 10,
  endurance: 0,
  dexterite: 0,
  argent: 0,
  posterCat: 'vivres',
  posterEquip: '',
  selected: '',
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
        selected: '',
      };
    case POSTER_EQUIP:
      let equipDetails;
      state.details != state.posterCat + action.posterEquip ? equipDetails = '' : equipDetails = state.details;
      return {
        ...state,
        posterEquip: action.posterEquip,
        details: equipDetails,
        selected: '',
      };
    case SET_DETAILS:
      const { id, nom, image, description, type, statistique } = action.detailsObj;
      let quantite;
      action.detailsObj.reserve == undefined ? quantite = action.detailsObj.quantite : quantite = 0;
      return {
        ...state,
        detailsObj: {
          id : id,
          nom: nom,
          image: image,
          description: description,
          statistique: statistique,
          quantite: quantite,
          type: type,
        },
        selected:nom,
      };
    case CLOSE_DETAILS:
      return {
        ...state,
        selected: '',
      };
    case UPDATE_EQUIPMENT:
      let newEquipment = {
        ...state.equipment,
        [action.objType]: action.id,
      }
      return {
        ...state,
        equipment: newEquipment,
        selected: '',
      };
      case UPDATE_VIVRE:
        
        let newInventory = state.inventory;
        let newLife = state.life;

        if (state.life == 100) {
          return {...state, selected:''};
        } else if (state.life + action.statistique > 100) {
          newLife = 100;
        } else {
          newLife = state.life + action.statistique;
        }
        let stockVivre = state.inventory.vivres;
        //trouver le vivre correspondant au nom dans les vivres de l'inventaire
        stockVivre = stockVivre.find(item => item.nom == action.nom);
        //enlever 1 à la quantité de l'inventaire trouvé
        stockVivre.quantite -= 1;
        //mettre à jour vivres de l'inventaire avec le vivre mis à jour
        let newVivres = state.inventory.vivres.map(vivre => {
          if (vivre.nom == action.nom) vivre.quantite = stockVivre.quantite;
          return vivre;
        });
        //mettre à jour l'inventaire avec les vivres mis à jour
        newInventory = {
          ...state.inventory,
          newVivres,
        }
        return {
          ...state,
          inventory : newInventory,
          life: newLife,
          selected: '',
        };
    default:
      return state;
  }
};

export default character;
