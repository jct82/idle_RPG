import { LOGMODALE, UPDATE_FIELD,REGISTER_MODALE } from '../actions/user';

const initialState = {
   log:false,
   register:false,
   mail:'',
   password:'',
   pseudo: '',
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
    case REGISTER_MODALE:
      return {
        ...state,
        register: !state.register,
      };

   
    default:
      return state;
  }
};

export default character;
