export const RANDOM_STUFF = 'RANDOM_STUFF';
export const MODALE_OPEN = 'MODALE_OPEN';
export const MODALE_CLOSE = 'MODALE_CLOSE';
export const EMPTY_ARRAY = 'EMPTY_ARRAY';
export const BUY_ITEM = 'BUY_ITEM';

export const randomStuff = (stuffs) => ({
  type: RANDOM_STUFF,
  payload: {
    stuffs,
  },
});

export const emptyArray = () => ({
  type: EMPTY_ARRAY,
});

export const modaleOpen = (id) => ({
  type: MODALE_OPEN,
  payload: {
    id,
  },
});

export const modaleClose = () => ({
  type: MODALE_CLOSE,
});

export const buyItem = (price) => ({
  type: BUY_ITEM,
  payload: {
    price,
  },
});
