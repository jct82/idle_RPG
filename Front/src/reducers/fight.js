import { v4 as uuidv4 } from 'uuid';
import {
  START_FIGHTING,
  DEAL_DAMAGE,
  GET_NEW_RANDOM_MONSTER,
  GET_MONSTER,
  ADD_LOG_MESSAGE_DMG_DEALT,
  ADD_LOG_MESSAGE_DMG_RECEIVED,
  DEATH_OF_PLAYER,

} from '../actions/fight';

const initialState = {
  attributes: [],
  logMessages: [],
  isFighting: false,
  buttonTitle: 'Attaque !',
  currentMonster: {},
  logMessages: [],
  currentMonsterName: "fred l'abominable",
  monsters: [
    {
      name: "fred l'abominable",
      life: 500,
      attack: 2,
      endurance: 1,
      dexterite: 0,
    },
    {
      name: "Valentin l'affreux",
      life: 100,
      attack: 6,
      endurance: 15,
      dexterite: 0,
    },
  ],
};

const fight = (state = initialState, action = {}) => {
  switch (action.type) {
    case START_FIGHTING:
      return {
        ...state,
        isFighting: !state.isFighting,
        buttonTitle: !state.isFighting ? 'Arrêter de combattre' : 'Attaque !',
      };
    case DEAL_DAMAGE:
      // const currentMonster = state.monsters.find((monster) => monster.name === state.currentMonster);
      return {
        ...state,
        currentMonster: { ...state.currentMonster, life: action.payload.data },
        // state.monsters.map(
        //   (monster) => monster.name === state.currentMonsterName ? {...monster, life: action.payload.data} : monster
        // ),
      };
    case GET_NEW_RANDOM_MONSTER:
      return {
        ...state,
        currentMonster: { ...state.monsters[Math.floor(Math.random() * state.monsters.length)], life: 200, maxLife: 200 },
        // currentMonster: {...state.monsters.find((monster) => monster.name === state.currentMonsterName)},
      };
    case GET_MONSTER:
      return {
        ...state,
        monsters: action.payload.data,
      };
      case ADD_LOG_MESSAGE_DMG_DEALT:
        return {
          ...state,
            logMessages: [
              <p key={uuidv4()} className="greenLog">Vous avez infligé {action.payload.damageDealt} de dégâts</p>,
              ...state.logMessages.slice(0, 99),
            ],
        };
      case ADD_LOG_MESSAGE_DMG_RECEIVED:
        return {
          ...state,
          logMessages: [
            <p key={uuidv4()} className="redLog">Vous avez reçu {action.payload.damageReceived} de dégâts</p>,
            ...state.logMessages.slice(0, 99),
          ],
        };
      case DEATH_OF_PLAYER:
        return {
          ...state,
          isFighting: false,
          logMessages: [
            <p key={uuidv4()} className="redLog">Vous êtes tombé K.O !</p>,
            ...state.logMessages.slice(0, 99),
          ],
        };
    default:
      return state;
  }
};

export default fight;
