import { LOGMODALE, UPDATE_FIELD, LOG_USER, POSTER_MENU } from "../actions/user";
const initialState = {
  modal: "",
  email: "",
  password: "",
  name: "",
  logged:false,
  logError:'',
  loggedName:'',
  userId:0,
  mobMenu: false,
};
const user = (state = initialState, action = {}) => {
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
    case LOG_USER:
      localStorage.setItem('profile', JSON.stringify(action.token));
      localStorage.setItem('name', action.userData.name);
      localStorage.setItem('userId', action.userData.id);
      return {
        ...state,
        loggedName : action.userData.name,
        userId: action.userData.id,
        name:'',
        email: '',
        password: '',
        logged: true,
        logError: '',
        modal: '',
      };
    case POSTER_MENU:
      return {
        ...state,
        mobMenu: !state.mobMenu,
      };
    default:
      return state;
  }
};
export default user;
