import { getInventoryOnLogin } from '../actions/character';
import { GET_ITEMS } from '../actions/craft';
import {
  SUBSCRIBE_USER,
  LOG_USER,
  LOGIN_USER,
  logUser,
  CHECK_USER,
  LOGOUT,
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
          if (response.status === 200) {
            store.dispatch(getMonster(response.data.entities));
            store.dispatch(getNewMonster());
            store.dispatch(getPlayerStats(response.data.character.attributes));
            store.dispatch(getMineNameAndLvl(response.data.character.jobs[0]));
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
    case CHECK_USER:
      next(action);
      // TODO refresh ne marche qu'une fois, à fix
      const foundToken = localStorage.getItem('profile');
      // console.log(foundToken);
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
        
        const foundName = JSON.parse(localStorage.getItem('name'));
        const foundId = JSON.parse(localStorage.getItem('userId'));
        if (foundName && foundId) {
          const name = foundName;
          const id = foundId;
          const userAction = logUser(JSON.parse(foundToken), name, id);
          store.dispatch(userAction);
        };
        console.log(response.data);
          store.dispatch(getMonster(response.data.entities));
          store.dispatch(getNewMonster());
          store.dispatch(getPlayerStats(response.data.character.attributes));
          store.dispatch(getMineNameAndLvl(response.data.character.jobs[0]));
          store.dispatch(getInventoryOnLogin(response.data.character.inventory));
          // store.dispatch(logUser(response.headers.authorization, response.data.user.name, response.data.user.id));
          store.dispatch(characterMoney(response.data.character.gold));
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


// case LOGIN_SUCCESS:
//   // Je laisse passer l'action car ici c'est grâce à elle
//   // que mon token arrive dans le state. Sinon je peux aussi
//   // récupérer le token accroché à l'action pour l'utiliser
//   next(action);
//   // Suite à l'action que je viens de laisser passer
//   // mon state contient les infos de l'user (pseudo et son token)
//   const { user } = store.getState();
//   // J'en profite pour stocker dans mon localStorage
//   // les infos de mon user
//   // POUR RAPPEL, on ne peut stocker en localStorage que des strings
//   // on doit donc convertir notre objet user en string
//   const stringUser = JSON.stringify(user);
//   localStorage.setItem('user', stringUser);
//   // Je lance la requête pour aller chercher ses recettes favories
//   axios({
//     method: 'get',
//     url: 'http://localhost:3001/favorites',
//     headers: {
//       // Je mets mon token dans le header "Authorization"
//       Authorization: `Bearer ${user.token}`,
//     },
//   })
//     .then((res) => {
//       console.log(res.data.favorites);
//       // J'ai maintenant la liste des fav de l'user, j'aiemrais la mettre
//       // dans le state.
//       const actionFavRecipes = receivedUserFav(res.data.favorites);
//       store.dispatch(actionFavRecipes);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   break;
