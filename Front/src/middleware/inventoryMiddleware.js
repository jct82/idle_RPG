import { craftItem, GET_CRAFTABLE_ITEMS, updateRecipes } from "../actions/craft";
import API from './api';

const inventoryMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    // TEST BASE DE DONNEE
    case GET_CRAFTABLE_ITEMS: {
      const config = {
        method: 'get',
        url: '/items',
      };
      API(config)
        .then((response) => {
          const craftableItems = response.data.filter((item) => item.item_type_id >= 3);
          console.log(craftableItems);
          store.dispatch(updateRecipes(craftableItems));
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

export default inventoryMiddleware;
