import { LOGMODALE, UPDATE_FIELD } from '../actions/user';

const initialState = {
   log:false,
   mail:'',
   password:'',
};

const character = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGMODALE:
      return {
        ...state,
        log: !state.log,
      };
      case UPDATE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

   
    default:
      return state;
  }
};

export default character;
