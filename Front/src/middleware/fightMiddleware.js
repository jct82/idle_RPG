import { UPDATE_AFTER_FIGHT } from '../actions/fight';
import { logUser } from '../actions/user';
import API from './api';

const fightMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    // case UPDATE_AFTER_FIGHT: {
    //   const characterId = localStorage.getItem('characterId');
    //   const foundToken = localStorage.getItem('profile');
    //   const config = {
    //     method: 'patch',
    //     url: '/craft',
    //     headers: {
    //       // Je mets mon token dans le header "Authorization"
    //       authorization: `${foundToken}`,
    //     },
    //     data: {
    //       characterId: parseInt(characterId, 10),
    //       newExp: action.payload.newExp,
    //       newGold: action.payload.newGold,
    //       newItem: action.payload.newItem,
    //       newCurrentMonster: action.payload.newCurrentMonster,
    //     }
    //   };
    //   API(config)
    //     .then((response) => {
    //       if (response.headers.authorization) {
    //         const newToken = response.headers.authorization;
    //         const foundName = JSON.parse(localStorage.getItem('name'));
    //         const foundId = JSON.parse(localStorage.getItem('userId'));
    //         const userAction = logUser(newToken, foundName, foundId);
    //         store.dispatch(userAction);
    //       }
    //       // store.dispatch(setInventoryData(response.data));
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   next(action);
    //   break;
    // };
    default:
      next(action);
  }
};

export default fightMiddleware;
