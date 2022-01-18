import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/character';

const initialState = {
  name: 'Monster',
  experience: 0,
  level: 0,
  life: 0,
  strength: 10, 
  endurance: 0, 
  dexterité: 0,
};

const monstre = (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
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

export default monstre;
