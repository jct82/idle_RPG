import {
  RANDOM_STUFF,
  MODALE_OPEN,
  MODALE_CLOSE,
  EMPTY_ARRAY,
  BUY_ITEM,
  ALL_OBJECT,
  GET_CHARACTER_MONEY,
  CHARACTER_MONEY,
} from '../actions/shop';

const initialState = {
  money: 400,
  isOpen: {
    open: false,
    id: 0,
  },
  stuffs: [],
  newShopArray: [],
};

const shop = (state = initialState, action = {}) => {
  switch (action.type) {
    case RANDOM_STUFF:
      return {
        ...state,
        stuffs: [
          ...state.stuffs,
          action.payload.stuffs,
        ],
        newShopArray: [
          ...state.stuffs.slice(0, 9),
        ],
      };
    case EMPTY_ARRAY:
      return {
        ...state,
        newShopArray: [],
      };
    case MODALE_OPEN:
      return {
        ...state,
        isOpen: {
          open: true,
          id: action.payload.id,
        },
      };
    case MODALE_CLOSE:
      return {
        ...state,
        isOpen: {
          ...state.isOpen,
          open: false,
        },
      };
    case BUY_ITEM:
      return {
        ...state,
        isOpen: {
          ...state.isOpen,
          open: false,
        },
        money: state.money - action.payload.price,
      };
    case ALL_OBJECT:
      return {
        ...state,
      };
    case GET_CHARACTER_MONEY:
      return {
        ...state,
      };
    case CHARACTER_MONEY:
      return {
        ...state,
        money: action.payload.data,
      };
    default:
      return state;
  }
};

export default shop;
