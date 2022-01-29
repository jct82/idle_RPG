import { getInventoryOnLogin } from "../actions/character";
import { GET_ITEMS } from "../actions/craft";
import { SUBSCRIBE_USER, LOG_USER, LOGIN_USER, logUser } from "../actions/user";
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
            store.dispatch(logUser(response.headers.authorization, {...response.data}));
          }
        })
        .catch((error) => {
          console.log(error);
          //store.dispatch(loginErrors(error.response.data));
        });
      next(action);
      break;
    };
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
            store.dispatch(getInventoryOnLogin(response.data.character.inventory));
            store.dispatch(logUser(response.headers.authorization, {...response.data}));
          }
        })
        .catch((error) => {
          console.log(error);
          //store.dispatch(loginErrors(error.response.data));
        });
      next(action);
      break;
    };
    // TODO mettre dans un MW exprès (inventory par ex)
    // case GET_ITEMS: {
    //   const config = {
    //     method: 'get',
    //     url: '/items',
    //   };
    //   API(config)
    //     .then((response) => {
    //       console.log(response);
    //       // if (response.status === 201) {
    //       //   store.dispatch(logUser(response.headers.authorization, {...response.data}));
    //       // }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       //store.dispatch(loginErrors(error.response.data));
    //     });
    //   next(action);
    //   break;
    // }
    default:
      next(action);
  }
};

export default logMiddleware;

