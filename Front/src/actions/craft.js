export const SPEND_RESOURCES_FOR_CRAFT = 'SPEND_RESOURCES_FOR_CRAFT';
export const SEND_CRAFTED_ITEM_TO_PLAYER = 'SEND_CRAFTED_ITEM_TO_PLAYER';

export const craftItem = (name, quantity) => ({
  type: SPEND_RESOURCES_FOR_CRAFT,
  payload: {
    name,
    quantity,
  }
});

export const sendCraftedItem = (name, type, desc) => ({
  type: SEND_CRAFTED_ITEM_TO_PLAYER,
  payload: {
    name,
    type,
    desc
  }
});
