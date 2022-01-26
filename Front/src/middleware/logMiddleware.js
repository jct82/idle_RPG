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
            store.dispatch(logUser(response.headers.authorization, {...response.data}));
          }
        })
        .catch((error) => {
          console.log(error);
          //store.dispatch(loginErrors(error.response.data));
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default logMiddleware;

