import { SPARE_POINTS, UPDATE_EQUIPMENT } from '../actions/character';
import API from './api';

const foundToken = localStorage.getItem('profile');
const characterMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case SPARE_POINTS: {
      const config = {
        method: 'patch',
        url: '/attribute/augment',
        headers: {
          authorization: `${foundToken}`,
        },
        data: {
          characterId: Number(localStorage.characterId),
          attributeId: action.id,
          quantity: action.statistique,
        },
      };
      API(config)
        .then((response) => {
          if (response.status === 204) {
            console.log('done');
          }
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case UPDATE_EQUIPMENT: {
      const config = {
        method: 'patch',
        url: '/equipment/equipItem',
        headers: {
          authorization: `${foundToken}`,
        },
        data: {
          characterId: Number(localStorage.characterId),
          itemId: action.id,
        },
      };
      API(config)
        .then((response) => {
          if (response.status === 204) {
            console.log('done');
          }
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default characterMiddleware;

