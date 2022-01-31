import {
  SEND_RESOURCE_TO_INVENTORY
} from "../actions/mining";
import {
  SET_INVENTORY,
  POSTER_CATEGORY,
  POSTER_EQUIP,
  SET_DETAILS,
  CLOSE_DETAILS,
  UPDATE_EQUIPMENT,
  UPDATE_VIVRE,
  GET_INVENTORY_ON_LOGIN
} from '../actions/character';
import {
  SEND_CRAFTED_ITEM_TO_PLAYER,
  SPEND_RESOURCES_FOR_CRAFT
} from "../actions/craft";

const initialState = {
  nom: 'The Counter',
  experience: 50,
  level: 1,
  inventory: [],
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
    type: '',
  },
  vie: 50,
  force: 40,
  endurance: 75,
  dexterite: 35,
  argent: 0,
  posterCat: 'vivres',
  posterEquip: '',
  selected: '',
};

const character = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_RESOURCE_TO_INVENTORY:
        return {
          ...state,
          inventory: [
            ...state.inventory,
            {...action.payload},
          ]
        };
    case SPEND_RESOURCES_FOR_CRAFT:
      // clone l'inventaire, enlève le nbr de resources requises, et le remet dans le state
      const newInventoryAfterCraft = [...state.inventory];
      const firstIndexOfResource = state.inventory.findIndex(item => item.name === action.payload.name);
      newInventoryAfterCraft.splice(firstIndexOfResource, action.payload.quantity);
      return {
        ...state,
        inventory: newInventoryAfterCraft,
      };
    case SEND_CRAFTED_ITEM_TO_PLAYER:
      return {
        ...state,
        inventory: [
          ...state.inventory,
          {
            ...action.payload
          },
        ]
      };
    case SET_INVENTORY:
      return {
        ...state,
        inventory: action.inventory,
      };
    case POSTER_CATEGORY:
      return {
        ...state,
        posterCat: action.category,
          selected: '',
      };
    case POSTER_EQUIP:
      return {
        ...state,
        posterEquip: action.posterEquip,
          selected: '',
      };
    case SET_DETAILS:
      const {
        id, nom, image, description, type, statistique
      } = action.detailsObj;
      let quantite;
      action.detailsObj.reserve == undefined ? quantite = action.detailsObj.quantite : quantite = 0;
      return {
        ...state,
        detailsObj: {
            id: id,
            nom: nom,
            image: image,
            description: description,
            statistique: statistique,
            quantite: quantite,
            type: type,
          },
          selected: nom,
      };
    case CLOSE_DETAILS:
      return {
        ...state,
        selected: '',
      };
    case UPDATE_EQUIPMENT:
      let oldStuff = state.equipment[action.objType];
      let stuffType = state.inventory.equipment.find(item => item.nom == action.objType);
      let oldVal = stuffType.reserve.find(item => item.id == oldStuff);
      let newVal = stuffType.reserve.find(item => item.id == action.id);
      let newEquipment = {
        ...state.equipment,
        [action.objType]: action.id,
      }
      return {
        ...state,
        equipment: newEquipment,
          [stuffType.type_statistique]: state[stuffType.type_statistique] + (newVal.statistique - oldVal.statistique),
          selected: '',
      };
    case UPDATE_VIVRE:
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
      let newInventory = {
        ...state.inventory,
        newVivres,
      }
      return {
        ...state,
        inventory: newInventory,
          vie: state.life + action.statistique > 100 ? 100 : state.vie + action.statistique,
          selected: '',
      };
    case GET_INVENTORY_ON_LOGIN:
      return {
        ...state,
        inventory: [
          ...action.payload.inv,
        ]
      }
      default:
        return state;
  }
};

export default character;
