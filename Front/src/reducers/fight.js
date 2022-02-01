import {
  START_FIGHTING,
  DEAL_DAMAGE,
  GET_NEW_RANDOM_MONSTER,
  GET_MONSTER,

} from '../actions/fight';

const initialState = {
  attributes: [],
  logMessages: [],
  isFighting: false,
  buttonTitle: 'Attaque !',
  currentMonster: {},
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
    default:
      return state;
  }
};

export default fight;
