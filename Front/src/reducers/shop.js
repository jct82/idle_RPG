import { RANDOM_STUFF } from '../actions/shop';

const initialState = {
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
      };
    default:
      return state;
  }
};

export default shop;
