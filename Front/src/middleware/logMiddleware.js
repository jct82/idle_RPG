import { getInventoryOnLogin } from '../actions/character';
import { GET_ITEMS } from '../actions/craft';
import {
  SUBSCRIBE_USER,
  LOG_USER,
  LOGIN_USER,
  logUser,
} from '../actions/user';
import { characterMoney } from '../actions/shop';
import { getMineNameAndLvl } from '../actions/mining';
import { getPlayerStats, getMonster, getNewMonster } from '../actions/fight';
import API from './api';

const logMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case SUBSCRIBE_USER: {
      const config = {
        method: 'post',
        url: '/user/subscribe',
        data: {
          email: state.user.email,
          password: state.user.password,
          name: state.user.name,
        },
      };
      API(config)
        .then((response) => {
          if (response.status === 201) {
            store.dispatch(getMonster(response.data.entities));
            store.dispatch(getPlayerStats(response.data.character.attributes));
            store.dispatch(getInventoryOnLogin(response.data.character.inventory));
            store.dispatch(logUser(response.headers.authorization, { ...response.data }));
            store.dispatch(characterMoney(response.data.character.gold));
          }
        })
        .catch((error) => {
          console.log(error);
          // store.dispatch(loginErrors(error.response.data));
        });
      next(action);
      break;
    }
    case LOGIN_USER: {
      const config = {
        method: 'post',
        url: '/user/login',
        data: {
          email: state.user.email,
          password: state.user.password,
        },
      };
      API(config)
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(getMonster(response.data.entities));
            store.dispatch(getNewMonster());
            store.dispatch(getPlayerStats(response.data.character.attributes));
            store.dispatch(getMineNameAndLvl(response.data.character.jobs[0]));
            store.dispatch(getInventoryOnLogin(response.data.character.inventory));
            store.dispatch(logUser(response.headers.authorization, { ...response.data }));
            store.dispatch(characterMoney(response.data.character.gold));
          }
        })
        .catch((error) => {
          console.log(error);
          // store.dispatch(loginErrors(error.response.data));
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default logMiddleware;
