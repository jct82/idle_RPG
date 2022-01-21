export const SET_WORKING_MINE = 'SET_WORKING_MINE';
export const SET_CURRENT_RESOURCE_MINE = 'SET_CURRENT_RESOURCE_MINE';
export const DECREMENT_COUNTER_MINE = 'DECREMENT_COUNTER_MINE';
export const ALERT_PLAYER_NEEDS_RESOURCE_MINE = 'ALERT_PLAYER_NEEDS_RESOURCE_MINE';
export const ADD_LOG_MESSAGE_MINE = 'ADD_LOG_MESSAGE_MINE';
export const ADD_LEVEL_UP_MESSAGE_MINE = 'ADD_LEVEL_UP_MESSAGE_MINE';
export const ADD_RESOURCE_EXPERIENCE_TO_PLAYER_MINE = 'ADD_RESOURCE_EXPERIENCE_TO_PLAYER_MINE';
export const LEVEL_UP_PLAYER_JOB_MINE = 'LEVEL_UP_PLAYER_JOB_MINE';
export const UPDATE_EXPERIENCE_BAR_PROGRESS_MINE = 'UPDATE_EXPERIENCE_BAR_PROGRESS_MINE';
export const ALLOW_GATHER_RESOURCES = 'ALLOW_GATHER_RESOURCES_MINE';

export const setWorking = () => ({
  type: SET_WORKING_MINE,
});

export const alertPlayerResource = () => ({
  type: ALERT_PLAYER_NEEDS_RESOURCE_MINE,
});

export const levelUpJob = () => ({
  type: LEVEL_UP_PLAYER_JOB_MINE,
});

export const addExperienceToPlayer = (experience) => ({
  type: ADD_RESOURCE_EXPERIENCE_TO_PLAYER_MINE,
  payload: {
    experience,
  }
});

export const updateExpBar = (newExpPercentage) => ({
  type: UPDATE_EXPERIENCE_BAR_PROGRESS_MINE,
  payload: {
    newExpPercentage,
  }
});

export const setCurrentResource = (currentResource, currentResourceExperience) => ({
  type: SET_CURRENT_RESOURCE_MINE,
  payload: {
    currentResource,
    currentResourceExperience,
  }
});

export const allowGatherResources = () => ({
  type: ALLOW_GATHER_RESOURCES_MINE,
});

export const addLogMessage = (experience, amount) => ({
  type: ADD_LOG_MESSAGE_MINE,
  payload: {
    experience,
    amount,
  }
});

export const addLevelUpMessage = () => ({
  type: ADD_LEVEL_UP_MESSAGE_MINE,
});

export const decrement = () => ({
  type: DECREMENT_COUNTER_MINE,
});
