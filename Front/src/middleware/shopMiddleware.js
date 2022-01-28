import { ALL_OBJECT, randomStuff } from '../actions/shop';
import API from './api';

const shopMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ALL_OBJECT: {
      const config = {
        method: 'get',
        url: '/items',
      };
      API(config)
        .then((response) => {
          const getRandomStuff = () => {
            for (let i = 0; i < 10; i++) {
              const randomNumber = Math.floor(Math.random() * response.data.length);
              // console.log(randomNumber);
              const randomStuffs = response.data[randomNumber];
              // console.log(randomStuff);
              store.dispatch(randomStuff(randomStuffs));
              console.log(randomStuffs);
            }
          };
          // store.dispatch(allBuyableObject(response.data));
          getRandomStuff();
          console.log(response.data);
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

export default shopMiddleware;
