import { SET_WORKING_MINE, SET_CURRENT_ORE, DECREMENT_COUNTER } from '../actions/jobs';

const initialState = {
  mining: {
    level: 1,
    currentOre: '',
    isWorking: false,
    buttonTitle: 'Commencer à travailler'
  },
};

const jobs = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_WORKING_MINE:
      return {
        ...state,
        mining: {
          ...state.mining,
          isWorking: !state.mining.isWorking,
          buttonTitle: !state.mining.isWorking ? `Vous récoltez "${state.mining.currentOre}"` : "Commencer à travailler",
        }
      };
    case SET_CURRENT_ORE:
      return {
        ...state,
        mining: {
          ...state.mining,
          currentOre: action.payload.currentOre,
          buttonTitle: state.mining.isWorking ? `Vous récoltez "${action.payload.currentOre}"` : "Commencer à travailler",
        }
      };
    default:
      return state;
  }
};

export default jobs;
