export const RANDOM_STUFF = 'RANDOM_STUFF';
export const MODALE_OPEN = 'MODALE_OPEN';
export const MODALE_CLOSE = 'MODALE_CLOSE';

export const randomStuff = () => ({
  type: RANDOM_STUFF,
});

export const modaleOpen = () => ({
  type: MODALE_OPEN,
});

export const modaleClose = () => ({
  type: MODALE_CLOSE,
});
