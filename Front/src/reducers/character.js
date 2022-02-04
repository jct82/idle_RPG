import { SEND_RESOURCE_TO_INVENTORY } from "../actions/mining";
import { SET_INVENTORY, POSTER_CATEGORY, POSTER_EQUIP, SET_DETAILS,
  CLOSE_DETAILS, UPDATE_EQUIPMENT,UPDATE_VIVRE, SPARE_POINTS, UPDATE_NBR_FIELD,
  GET_INVENTORY_ON_LOGIN, SET_INVENTORY_DATA, SET_CHARACTER_DATA, BUY_ITEM } from '../actions/character';
import { SEND_CRAFTED_ITEM_TO_PLAYER, SPEND_RESOURCES_FOR_CRAFT } from "../actions/craft";
import {
  GET_PLAYER_STATS,
  UPDATE_HEALTH_BAR_PLAYER,
  RECEIVE_DAMAGE
} from '../actions/fight';

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
    ressource: [
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
  force: 150,
  endurance: 75,
  dextérité: 35,
  gold: 6500,
  attackSpeed: 2000,
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
      let addInventory = state.inventory[action.obj_type];
      let addObject = addInventory.find(obj => obj.item_id == action.item_id);
      if (addObject == undefined) {
        addObject = {
          item_id: action.item_id, 
          name: action.name, 
          description: 'lorem ipsum lorem ipsum', 
          img_path: action.name.replace(/['"]+/g, "").replace(/\s/g, ""), 
          quantity: 1,
        }
        if (action.obj_type == "consommable") addObject.statistique = action.stat
        addInventory.push(addObject);
      } else {
        for (let i = 0; i < addInventory.length; i++) {
          if (addInventory[i].item_id == addObject.item_id) {
            addInventory[i].quantity += 1;
          }
        }
      }
      return {
        ...state,
        inventory: {
          ...state.inventory,
          [action.obj_type]: addInventory,
        }
      };
    case SPEND_RESOURCES_FOR_CRAFT:
      //substract used ressources for crafting of inventory ressources
      let spendRessources = state.inventory.ressource;
      action.recipe.ingredients.forEach(substance => {
        for (let i = 0; i < spendRessources.length; i++) {
          if (substance.component_id == spendRessources[i].item_id) {
            spendRessources[i].quantity -= substance.quantity;
          }
        }
      });
      //add new crafted equipment to inventory equipment
      let craftedEquipments = state.inventory.equipment;
      craftedEquipments.forEach(elem => {
        if (elem.name == action.recipe.type) {
          elem.quantity += 1;
          if (elem.reserve.find(weapon => weapon.item_id == action.recipe.id) == undefined) {
            let crafted = {
              item_id: action.recipe.id, 
              name: action.recipe.name, 
              description: 'lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum', 
              img_path: action.recipe.name.replace(/['"]+/g, "").replace(/\s/g, ""),
            }
            if (elem.name == "arme") {
              crafted.degat_min = action.recipe.attribute.find(att => att.name == 'degat_min');
              crafted.degat_min = crafted.degat_min.value;
              crafted.statistique = action.recipe.attribute.find(att => att.name == 'degat_max');
              crafted.degat_max = crafted.statistique.value;
            } else if (elem.name == "armure") {
              crafted.statistique = action.recipe.attribute.filter(att => att.name == 'endurance');
            } else if (elem.name == "casque") {
              crafted.statistique = action.recipe.attribute.filter(att => att.name == 'force');
            } else if (elem.name == "bottes") {
              crafted.statistique = action.recipe.attribute.filter(att => att.name == 'dextérité');
            }
            crafted.statistique = crafted.statistique.value;
            elem.reserve.push(crafted);
          } else {
            for (let i = 0; i < elem.reserve.length; i++) {
              if (elem.reserve[i].item_id == action.recipe.id) {
                elem.reserve[i].quantity += 1;
                break;
              }
            }
          }
        }
      });

      return {
        ...state,
        inventory: {
          ...state.inventory,
          ressource: spendRessources,
          equipment: craftedEquipments,
        }
      };
    case SET_CHARACTER_DATA:
      const feelObj = (id, name, img, desc, quantity) => {
        return {item_id: id, name: name, img_path: img, description: desc, quantity: quantity};
      }
      let newConsommable = [], newRessource = [], newArme = [], newCasque = [], newArmure = [], newBottes = [];
      action.data.inventory.forEach((object) => {
        if (object.type_name == "ressource") {
            let currentRessource = feelObj(object.item_id, object.name, object.name.replace(/['"]+/g, "").replace(/\s/g, ""), 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem', object.quantity);
            newRessource.push(currentRessource);
        } else if (object.type_name == "consommable") {
            let stat = object.attributes.find(item => item.name == "soins");
            let currentConso = feelObj(object.item_id, object.name, object.name.replace(/['"]+/g, "").replace(/\s/g, ""), 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem', object.quantity);
            currentConso.statistique = stat.value; 
            newConsommable.push(currentConso);
        } else if (object.type_name == "arme") {
            let stat = object.attributes.find(item => item.name == "force");
            let currentArme = feelObj(object.item_id, object.name, object.name.replace(/['"]+/g, "").replace(/\s/g, ""), 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem', object.quantity);
            currentArme.statistique = stat.value;
            newArme.push(currentArme);
        } else if (object.type_name == "casque") {
            let stat = object.attributes.find(item => item.name == "endurance");
            let currentCasque = feelObj(object.item_id, object.name, object.name.replace(/['"]+/g, "").replace(/\s/g, ""), 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem', object.quantity);
            currentCasque.statistique = stat.value;
            newCasque.push(currentCasque);
        } else if (object.type_name == "bottes") {
            let stat = object.attributes.find(item => item.name == "dextérité");
            let currentBottes = feelObj(object.item_id, object.name, object.name.replace(/['"]+/g, "").replace(/\s/g, ""), 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem', object.quantity);
            currentBottes.statistique = stat.value;
            newBottes.push(currentBottes);
        } else if (object.type_name == "armure") {
            let stat = object.attributes.find(item => item.name == "endurance");
            let currentArmure = feelObj(object.item_id, object.name, object.name.replace(/['"]+/g, "").replace(/\s/g, ""), 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem', object.quantity);
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
      let inventoryData = {ressource:newRessource, consommable:newConsommable, equipment:newEquip};

      let equipmentData = {};
      action.data.equipments.forEach(object => {
        equipmentData[object.slot_name] = object.item_id;
      });
      const dataForce = action.data.attributes.find(obj => obj.name == "force");
      const dataEndurance = action.data.attributes.find(obj => obj.name == "endurance");
      const dataDextérité = action.data.attributes.find(obj => obj.name == "dextérité");
      const dataPoints = action.data.attributes.find(obj => obj.name == "points de caractéristiques");
      const dataVie = action.data.attributes.find(obj => obj.name == "points de vie");
      return {
        ...state,
        inventory: inventoryData,
        equipments: equipmentData,
        force: dataForce.value,
        endurance: dataEndurance.value,
        dextérité: dataDextérité.value,
        vie: dataVie.value,
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
      console.log('tttttttt');
      let equipInvent = state.inventory.equipment;
      equipInvent.forEach(equip => {
        if (equip.name == action.objType) {
          for (let i = 0; i < equip.reserve.length; i++) {
            if (equip.reserve[i].item_id == action.id) {
              equip.reserve[i].quantity -= 1;
            } else if (equip.reserve[i].item_id == state.equipments[action.objType]) {
              equip.reserve[i].quantity += 1;
            }
          }
        }
      });
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
        inventory: {
          ...state.inventory,
          equipment: equipInvent,
        },
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
      // mettre à jour l'inventaire avec les vivres mis à jour
      let newInventory = {
        ...state.inventory,
        newVivres,
      }
      return {
        ...state,
        inventory: newInventory,
        vie: state.vie + action.statistique > 100 ? 100 : state.vie + action.statistique,
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
    // case GET_INVENTORY_ON_LOGIN:
    //   return {
    //     ...state,
    //     inventory: [
    //       ...action.payload.inv,
    //     ],
    //   };
    // case GET_PLAYER_STATS:
    //   return {
    //     ...state,
    //     endurance: action.payload.data[0].value,
    //     force: action.payload.data[1].value,
    //     dextérité: action.payload.data[2].value,
    //   };
    case UPDATE_HEALTH_BAR_PLAYER:
      return {
        ...state,
        vie: action.payload.newHealth,
      };
    case RECEIVE_DAMAGE:
      return {
        ...state,
        vie: action.payload.newHealth,
      };
    case BUY_ITEM:
      return {
        ...state,
        gold: state.gold - action.payload.gold,
      };
    default:
      return state;
  }
};

export default character;
