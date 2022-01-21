export const SET_WORKING_MINE = 'SET_WORKING_MINE';
export const SET_CURRENT_ORE = 'SET_CURRENT_ORE';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const ALERT_PLAYER_NEEDS_ORE = 'ALERT_PLAYER_NEEDS_ORE';
export const ADD_LOG_MESSAGE = 'ADD_LOG_MESSAGE'
export const ALLOW_GATHER_RESOURCES = 'ALLOW_GATHER_RESOURCES';

export const setWorking = () => ({
  type: SET_WORKING_MINE,
});

export const alertPlayerOre = () => ({
  type: ALERT_PLAYER_NEEDS_ORE,
})

export const setCurrentOre = (currentOre) => ({
  type: SET_CURRENT_ORE,
  payload: {
    currentOre: currentOre,
  }
})

export const allowGatherResources = () => ({
  type: ALLOW_GATHER_RESOURCES,
})

export const addLogMessage = (experience, amount) => ({
  type: ADD_LOG_MESSAGE,
  payload: {
    experience,
    amount,
  }
})

export const decrement = () => ({
  type: DECREMENT_COUNTER,
});
