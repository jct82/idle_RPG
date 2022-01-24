import { RANDOM_STUFF, MODALE_OPEN, MODALE_CLOSE, EMPTY_ARRAY } from '../actions/shop';

const initialState = {
  newShopArray: [],
  isOpen: false,
  stuffs: [
    {
      id: 1,
      nom: 'épée',
      objet_type_id: 6,
      objet_caractéristiques_id: 2,
      métier_id: '',
    },
    {
      id: 2,
      nom: 'cottes de mailles',
      objet_type_id: 3,
      objet_caractéristiques_id: 1,
      métier_id: '',
    },
    {
      id: 3,
      nom: 'arc',
      objet_type_id: 6,
      objet_caractéristiques_id: 8,
      métier_id: '',
    },
    {
      id: 4,
      nom: 'truite',
      objet_type_id: 2,
      objet_caractéristiques_id: 7,
      métier_id: 2,
    },
    {
      id: 5,
      nom: 'carpe',
      objet_type_id: 2,
      objet_caractéristiques_id: 5,
      métier_id: 2,
    },
    {
      id: 6,
      nom: 'heaume de garde forestier',
      objet_type_id: 4,
      objet_caractéristiques_id: 3,
      métier_id: '',
    },
    {
      id: 7,
      nom: 'chaussures trouées',
      objet_type_id: 5,
      objet_caractéristiques_id: 4,
      métier_id: '',
    },
    {
      id: 8,
      nom: 'fer',
      objet_type_id: 1,
      objet_caractéristiques_id: 6,
      métier_id: 1,
    },
    {
      id: 9,
      nom: 'cuivre',
      objet_type_id: 1,
      objet_caractéristiques_id: 9,
      métier_id: 1,
    },
    {
      id: 10,
      nom: 'armure de chevalier',
      objet_type_id: 3,
      objet_caractéristiques_id: 5,
      métier_id: '',
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
        isOpen: true,
      };
    case MODALE_CLOSE:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default shop;
