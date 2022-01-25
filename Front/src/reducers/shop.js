import {
  RANDOM_STUFF, MODALE_OPEN, MODALE_CLOSE, EMPTY_ARRAY, BUY_ITEM,
} from '../actions/shop';

const initialState = {
  money: 400,
  newShopArray: [],
  isOpen: {
    open: false,
    id: 0,
  },
  stuffs: [
    {
      id: 1,
      nom: 'épée',
      objet_type_id: 6,
      objet_caractéristiques_id: 2,
      métier_id: '',
      price: 150,
    },
    {
      id: 2,
      nom: 'cottes de mailles',
      objet_type_id: 3,
      objet_caractéristiques_id: 1,
      métier_id: '',
      price: 245,
    },
    {
      id: 3,
      nom: 'arc',
      objet_type_id: 6,
      objet_caractéristiques_id: 8,
      métier_id: '',
      price: 145,
    },
    {
      id: 4,
      nom: 'truite',
      objet_type_id: 2,
      objet_caractéristiques_id: 7,
      métier_id: 2,
      price: 4,
    },
    {
      id: 5,
      nom: 'carpe',
      objet_type_id: 2,
      objet_caractéristiques_id: 5,
      métier_id: 2,
      price: 5,
    },
    {
      id: 6,
      nom: 'heaume de garde forestier',
      objet_type_id: 4,
      objet_caractéristiques_id: 3,
      métier_id: '',
      price: 150,
    },
    {
      id: 7,
      nom: 'chaussures trouées',
      objet_type_id: 5,
      objet_caractéristiques_id: 4,
      métier_id: '',
      price: 10,
    },
    {
      id: 8,
      nom: 'fer',
      objet_type_id: 1,
      objet_caractéristiques_id: 6,
      métier_id: 1,
      price: 45,
    },
    {
      id: 9,
      nom: 'cuivre',
      objet_type_id: 1,
      objet_caractéristiques_id: 9,
      métier_id: 1,
      price: 25,
    },
    {
      id: 10,
      nom: 'armure de chevalier',
      objet_type_id: 3,
      objet_caractéristiques_id: 5,
      métier_id: '',
      price: 100,
    },

  ],
};

const shop = (state = initialState, action = {}) => {
  switch (action.type) {
    case RANDOM_STUFF:
      return {
        ...state,
        newShopArray: [
          ...state.newShopArray,
          action.payload.stuffs,
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
       /*money: state.stuffs.find(
          (item) => item.id === state.isOpen.id ?
          {...state.money, money: state.money - item.price}
          :
          {...state.money}*/
        // ),
      };

    default:
      return state;
  }
};

export default shop;
