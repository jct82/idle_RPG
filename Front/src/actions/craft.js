export const SPEND_RESOURCES_FOR_CRAFT = 'SPEND_RESOURCES_FOR_CRAFT';
export const SEND_CRAFTED_ITEM_TO_PLAYER = 'SEND_CRAFTED_ITEM_TO_PLAYER';
export const UPDATE_RECIPES_LIST = 'UPDATE_RECIPES_LIST';
// TEST BASE DE DONNEE
export const GET_CRAFTABLE_ITEMS = 'GET_CRAFTABLE_ITEMS';

export const craftItem = (name, quantity) => ({
  type: SPEND_RESOURCES_FOR_CRAFT,
  payload: {
    name,
    quantity,
  }
});

export const sendCraftedItem = (name, type_name, item_type_id) => ({
  type: SEND_CRAFTED_ITEM_TO_PLAYER,
  payload: {
    name,
    type_name,
    item_type_id,
  }
});

// TEST BASE DE DONNEE
export const getCraftableItems = () => ({
  type: GET_CRAFTABLE_ITEMS,
});

export const updateRecipes = (recipes) => ({
  type: UPDATE_RECIPES_LIST,
  payload: {
    recipes,
  }
})
