import { v4 as uuidv4 } from 'uuid';
import {
  START_FIGHTING,
  DEAL_DAMAGE,
  GET_NEW_RANDOM_MONSTER,
  GET_MONSTER,
  ADD_LOG_MESSAGE_DMG_DEALT,
  ADD_LOG_MESSAGE_DMG_RECEIVED,
  DEATH_OF_PLAYER,
  PLAYER_TOO_WEAK,
  MANUAL_CHANGE_MONSTER_BEFORE,
  MANUAL_CHANGE_MONSTER_AFTER,

} from '../actions/fight';

const initialState = {
  attributes: [],
  logMessages: [],
  isFighting: false,
  buttonTitle: 'Attaque !',
  currentMonster: {},
  tooWeak: false,
  logMessages: [],
  newMonsterIndex: 0,
  autoMonsterSwitch: true,
  currentMonsterName: "fred l'abominable",
  monsters: [
    {
      name: "fred l'abominable",
      life: 500,
      attack: 2,
      endurance: 1,
      dexterite: 0,
      level: 1,
    },
    {
      name: "Valentin l'affreux",
      life: 100,
      attack: 6,
      endurance: 15,
      dexterite: 0,
      level: 5,
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
      const filteredMonsters = state.monsters.filter((monster) => monster.level <= action.payload.level);
      const lastIndexOfMons = filteredMonsters.length - 1;
      return {
        ...state,
        tooWeak: false,
        newMonsterIndex: action.payload.manual ? state.newMonsterIndex : lastIndexOfMons,
        autoMonsterSwitch: action.payload.manual ? false : true,
        currentMonster: {...state.monsters[action.payload.manual ? state.newMonsterIndex : lastIndexOfMons], life: 200, maxLife: 200},
        // currentMonster: { ...state.monsters[Math.floor(Math.random() * state.monsters.length)], life: 200, maxLife: 200 },
        // currentMonster: {...state.monsters.find((monster) => monster.name === state.currentMonsterName)},
      };
    case MANUAL_CHANGE_MONSTER_BEFORE:
      return {
        ...state,
        newMonsterIndex: state.newMonsterIndex !== 0 ? state.newMonsterIndex - 1 : 0,
      };
    case MANUAL_CHANGE_MONSTER_AFTER:
      return {
        ...state,
        newMonsterIndex: (state.newMonsterIndex + 1) >= state.monsters.length ? state.newMonsterIndex : state.newMonsterIndex + 1,
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
      case PLAYER_TOO_WEAK:
        return {
          ...state,
          tooWeak: true,
        }
    default:
      return state;
  }
};

export default fight;
