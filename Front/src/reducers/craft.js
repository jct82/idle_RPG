import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/character';

const initialState = {
  name: 'Minage',
  type: 'minerai',
  quantité: 0,
  level: 0,
  currentType: 'fer'
};

const craft = (state = initialState, action = {}) => {
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

export default craft;
