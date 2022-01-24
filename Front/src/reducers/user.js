import { LOGMODALE, UPDATE_FIELD } from "../actions/user";
const initialState = {
  modal: "",
  mail: "",
  password: "",
  pseudo: "",
};
const character = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGMODALE:
      return {
        ...state,
        modal: action.modal,
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
