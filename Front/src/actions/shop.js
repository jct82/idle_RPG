export const RANDOM_STUFF = 'RANDOM_STUFF';
export const MODALE_OPEN = 'MODALE_OPEN';
export const MODALE_CLOSE = 'MODALE_CLOSE';
export const EMPTY_ARRAY = 'EMPTY_ARRAY';
export const BUY_ITEM = 'BUY_ITEM';
export const ALL_OBJECT = 'ALL_OBJECT';
export const GET_CHARACTER_MONEY = 'GET_CHARACTER_MONEY';
export const CHARACTER_MONEY = 'CHARACTER_MONEY';

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

export const allObject = () => ({
  type: ALL_OBJECT,
});

export const getCharacterMoney = () => ({
  type: GET_CHARACTER_MONEY,
});

export const characterMoney = (data) => ({
  type: CHARACTER_MONEY,
  payload: {
    data,
  },
});
