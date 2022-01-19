export const SET_WORKING_MINE = 'SET_WORKING_MINE';
export const SET_CURRENT_ORE = 'SET_CURRENT_ORE';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const setWorking = () => ({
  type: SET_WORKING_MINE,
});

export const setCurrentOre = (currentOre) => ({
  type: SET_CURRENT_ORE,
  payload: {
    currentOre: currentOre,
  }
})

export const decrement = () => ({
  type: DECREMENT_COUNTER,
});
