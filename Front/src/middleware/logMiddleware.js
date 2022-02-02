
import { getInventoryOnLogin, setCharacterData } from "../actions/character";
import { GET_ITEMS } from "../actions/craft";
import { SUBSCRIBE_USER, LOG_USER, LOGIN_USER, logUser, CHECK_USER, LOGOUT,} from "../actions/user";
import { characterMoney } from '../actions/shop';
import { getMineNameAndLvl } from '../actions/mining';
import { getPlayerStats, getMonster, getNewMonster } from '../actions/fight';
import API from './api';
import { getFishNameAndLvl } from '../actions/fishing';

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
            store.dispatch(setCharacterData(response.data.character));
            store.dispatch(getMonster(response.data.entities));
            store.dispatch(getNewMonster());
            store.dispatch(getPlayerStats(response.data.character.attributes));
            store.dispatch(getMineNameAndLvl(response.data.character.jobs[0]));
            store.dispatch(getFishNameAndLvl(response.data.character.jobs[1]));
            store.dispatch(getInventoryOnLogin(response.data.character.inventory));
            store.dispatch(logUser(response.headers.authorization, response.data.user.name, response.data.user.id));
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
          console.log(response);
          if (response.status === 200) {
            console.log(response.data.character);
            console.log(response);
            store.dispatch(setCharacterData(response.data.character));
            store.dispatch(getMonster(response.data.entities));
            store.dispatch(getNewMonster());
            store.dispatch(getPlayerStats(response.data.character.attributes));
            store.dispatch(getMineNameAndLvl(response.data.character.jobs[0]));
            store.dispatch(getFishNameAndLvl(response.data.character.jobs[1]));
            store.dispatch(getInventoryOnLogin(response.data.character.inventory));
            store.dispatch(logUser(response.headers.authorization, response.data.user.name, response.data.user.id));
            localStorage.setItem('characterId', response.data.character.id);
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
    case CHECK_USER:
      next(action);
      // TODO refresh ne marche qu'une fois, à fix
      const foundToken = localStorage.getItem('profile');
      console.log(foundToken);
      // console.log(JSON.parse(localStorage.getItem('name')));
      // console.log(JSON.parse(localStorage.getItem('userId')));
      const config = {
        method:'post',
        url:'/user/checklogin',
        headers: {
          // Je mets mon token dans le header "Authorization"
          authorization: `${foundToken}`,
        },
      };
      API(config)
      .then((response) => {
        console.log(response);
        if (response.headers.authorization) {
          const newToken = response.headers.authorization;
          const foundName = JSON.parse(localStorage.getItem('name'));
          const foundId = JSON.parse(localStorage.getItem('userId'));
          if (foundName && foundId) {
            const name = foundName;
            const id = foundId;
            const userAction = logUser(newToken, name, id);
            store.dispatch(userAction);
          };
          console.log(response);

            store.dispatch(setCharacterData(response.data.character));
            store.dispatch(getMonster(response.data.entities));
            store.dispatch(getNewMonster());
            store.dispatch(getPlayerStats(response.data.character.attributes));
            store.dispatch(getMineNameAndLvl(response.data.character.jobs[0]));
            store.dispatch(getFishNameAndLvl(response.data.character.jobs[1]));
            store.dispatch(getInventoryOnLogin(response.data.character.inventory));
            store.dispatch(characterMoney(response.data.character.gold));
        }
        })
        .catch((error)=> {
          console.log(error);
        })


      break;
    case LOGOUT:
      next(action);
      localStorage.removeItem('profile');
      localStorage.removeItem('name');
      localStorage.removeItem('userId');
      break;
    
    default:
      next(action);
  }
};

export default logMiddleware;
