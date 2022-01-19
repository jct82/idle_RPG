import { SET_WORKING_MINE, DECREMENT_COUNTER } from '../actions/jobs';

const initialState = {
  job: {
    mining: {
      level: 1,
      currentOre: '',
      isWorking: false,
      buttonTitle: 'Commencer à travailler'
    },
  }
};

const jobs = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_WORKING_MINE:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default jobs;
