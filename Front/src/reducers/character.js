import { SEND_RESOURCE_TO_INVENTORY } from "../actions/mining";
import { SET_INVENTORY, POSTER_CATEGORY, POSTER_EQUIP, SET_DETAILS,
  CLOSE_DETAILS, UPDATE_EQUIPMENT,UPDATE_VIVRE, SPARE_POINTS, UPDATE_NBR_FIELD, SET_INVENTORY_DATA, SET_CHARACTER_DATA } from '../actions/character';
import { SEND_CRAFTED_ITEM_TO_PLAYER, SPEND_RESOURCES_FOR_CRAFT } from "../actions/craft";

const initialState = {
  nom: 'The Counter',
  exp: 50,
  level: 1,
  inventory: {
    consommable: [
      {
        item_id:1,
        name: '',
        description: '',
        img_path: '',
        quantity: 0,
        statistique: 0,
        type_statistique: '',
      },
    ],
    equipment: [
      {
        name: 'arme',
        description: '',
        img_path: 'épéedefer',
        quantity: 0,
        type_statistique: '',
        reserve: [],
      },
      {
        name: 'casque',
        description: '',
        img_path: 'casquedefer',
        quantity: 0,
        type_statistique: 'force',
        reserve: [],
      },
      {
        name: 'armure',
        description: '',
        img_path: 'armuredefer',
        quantity: 0,
        type_statistique: 'endurance',
        reserve: [],
      },
      {
        name: 'bottes',
        description: '',
        img_path: 'bottesdefer',
        quantity: 0,
        type_statistique: 'dextérité',
        reserve: [],
      },
    ],
    ressources: [
      {
        item_id:1,
        name: '',
        description: '',
        img_path: '',
        quantity: 0,
      },
    ],
  },
  equipments: {},
  detailsObj: {
    item_id: 1,
    name: '',
    img_path: '',
    description: '',
    statistique: 0,
    quantity: 0,
    type:'',
  },
  vie: 60,
  force: 40,
  endurance: 75,
  dextérité: 35,
  gold: 6500,
  points: 50,
  posterCat: '',
  posterEquip: '',
  selected: '',
  pointsendurance: 0,
  pointsforce: 0,
  pointsdextérité: 0,
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
        
    case SET_CHARACTER_DATA:
      const feelObj = (id, name, img, desc) => {
        return {item_id: id, name: name, img_path: img, description: desc};
      }

      let newConsommable = [], newRessource = [], newArme = [], newCasque = [], newArmure = [], newBottes = [];
      action.data.inventory.forEach((object) => {
        if (object.type_name == "ressource") {
            let currentRessource = feelObj(object.item_id, object.name, object.name.replace(/['"]+/g, "").replace(/\s/g, ""), 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem');
            currentRessource.quantity = object.quantity;
            newRessource.push(currentRessource);
        } else if (object.type_name == "consommable") {
            let stat = object.attributes.find(item => item.name == "soins");
            let currentConso = feelObj(object.item_id, object.name, object.name.replace(/['"]+/g, "").replace(/\s/g, ""), 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem');
            currentConso.statistique = stat.value; 
            currentConso.quantity = object.quantity;
            newConsommable.push(currentConso);
        } else if (object.type_name == "arme") {
            let degatMin = object.attributes.find(item => item.name == "degat_min");
            let degatMax = object.attributes.find(item => item.name == "degat_max");
            let currentArme = feelObj(object.item_id, object.name, object.name.replace(/['"]+/g, "").replace(/\s/g, ""), 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem');
            currentArme.statistique = degatMax.value;
            currentArme.degat_min = degatMin.value;
            currentArme.degat_max = degatMax.value;
            newArme.push(currentArme);
        } else if (object.type_name == "casque") {
            let stat = object.attributes.find(item => item.name == "force");
            let currentCasque = feelObj(object.item_id, object.name, object.name.replace(/['"]+/g, "").replace(/\s/g, ""), 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem');
            currentCasque.statistique = stat.value;
            newCasque.push(currentCasque);
        } else if (object.type_name == "bottes") {
            let stat = object.attributes.find(item => item.name == "dextérité");
            let currentBottes = feelObj(object.item_id, object.name, object.name.replace(/['"]+/g, "").replace(/\s/g, ""), 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem');
            currentBottes.statistique = stat.value;
            newBottes.push(currentBottes);
        } else if (object.type_name == "armure") {
            let stat = object.attributes.find(item => item.name == "endurance");
            let currentArmure = feelObj(object.item_id, object.name, object.name.replace(/['"]+/g, "").replace(/\s/g, ""), 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem');
            currentArmure.statistique = stat.value;
            newArmure.push(currentArmure);
        }
      });

      let newEquip = state.inventory.equipment.map(equip => {
        if (equip.name == 'arme') {
            equip.reserve = [...equip.reserve, ...newArme];
        } else if (equip.name == 'casque') {
            equip.reserve = [...equip.reserve, ...newCasque];
        } else if (equip.name == 'armure')  {
            equip.reserve = [...equip.reserve, ...newArmure];
        } else if (equip.name == 'bottes')  {
            equip.reserve = [...equip.reserve, ...newBottes];
        }
        equip.quantity = equip.reserve.length;
        return equip;
      });

      let inventoryData = {ressources:newRessource, consommable:newConsommable, equipment:newEquip};

      let equipmentData = {};
      action.data.equipments.forEach(object => {
        equipmentData[object.slot_name] = object.item_id;
      });

      const dataForce = action.data.attributes.find(obj => obj.name == "force");
      const dataEndurance = action.data.attributes.find(obj => obj.name == "endurance");
      const dataDextérité = action.data.attributes.find(obj => obj.name == "dextérité");
      const dataPoints = action.data.attributes.find(obj => obj.name == "points");
      return {
        ...state,
        inventory: inventoryData,
        equipments: equipmentData,
        force: dataForce.value,
        endurance: dataEndurance.value,
        dextérité: dataDextérité.value,
        points: dataPoints.value,
        exp:action.data.exp,
        gold:action.data.gold,
        level:action.data.level,
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
      const { item_id, name, img_path, description, type, statistique } = action.detailsObj;
      let quantity;
      action.detailsObj.reserve == undefined ? quantity = action.detailsObj.quantity : quantity = 0;
      return {
        ...state,
        detailsObj: {
          item_id : item_id,
          name: name,
          img_path: img_path,
          description: description,
          statistique: statistique,
          quantity: quantity,
          type: type,
        },
        selected:name,
      };
    case CLOSE_DETAILS:
      return {
        ...state,
        selected: '',
      };
    case UPDATE_EQUIPMENT:
      let oldStuff = state.equipments[action.objType];
      let stuffType = state.inventory.equipment.find(item => item.name == action.objType);
      let oldVal = stuffType.reserve.find(item => item.item_id  == oldStuff);
      let newVal = stuffType.reserve.find(item => item.item_id == action.id);
      let newEquipment = {
        ...state.equipments,
        [action.objType]: action.id,
      }
      return {
        ...state,
        equipments: newEquipment,
        [stuffType.type_statistique]: state[stuffType.type_statistique] + (newVal.statistique - oldVal.statistique),
        selected: '',
      };
    case UPDATE_VIVRE:
      let stockVivre = state.inventory.consommable;
      //trouver le vivre correspondant au nom dans les vivres de l'inventaire
      stockVivre = stockVivre.find(item => item.name == action.name);
      //enlever 1 à la quantité de l'inventaire trouvé
      stockVivre.quantity -= 1;
      //mettre à jour vivres de l'inventaire avec le vivre mis à jour
      let newVivres = state.inventory.consommable.map(vivre => {
        if (vivre.name == action.name) vivre.quantity = stockVivre.quantity;
        return vivre;
      });
      //mettre à jour l'inventaire avec les vivres mis à jour
      let newInventory = {
        ...state.inventory,
        newVivres,
      }
      return {
        ...state,
        inventory : newInventory,
        vie: state.life + action.statistique > 100 ?  100 : state.vie + action.statistique,
        selected: '',
      };
    case SPARE_POINTS:
      let statProp = 'points' + action.name;
      return {
        ...state,
        [action.name]: state[action.name] + action.statistique,
        points: state.points - action.statistique,
        [statProp]: 0,
      };
    case UPDATE_NBR_FIELD:
      let newValStat = action.value;
      if (action.value > action.max) {
        newValStat = action.max;
      } else if (action.value < action.min) {
        newValStat = action.min;
      }
      return {
        ...state,
        [action.name]: newValStat,
      };
    default:
      return state;
  }
};
export default character;
