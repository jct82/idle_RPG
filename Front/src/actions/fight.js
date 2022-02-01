export const GET_PLAYER_STATS = 'GET_PLAYER_STATS';
export const UPDATE_HEALTH_BAR_PLAYER = 'UPDATE_HEALTH_BAR_PLAYER';
export const START_FIGHTING = 'START_FIGHTING';
export const DEAL_DAMAGE = 'DEAL_DAMAGE';
export const RECEIVE_DAMAGE = 'RECEIVE_DAMAGE';
export const GET_NEW_RANDOM_MONSTER = 'GET_NEW_RANDOM_MONSTER';
export const GET_MONSTER = 'GET_MONSTER';
export const ADD_LOG_MESSAGE_DMG_DEALT = 'ADD_LOG_MESSAGE_DMG_DEALT';
export const ADD_LOG_MESSAGE_DMG_RECEIVED = 'ADD_LOG_MESSAGE_DMG_RECEIVED';
export const DEATH_OF_PLAYER = 'DEATH_OF_PLAYER';

export const getPlayerStats = (data) => ({
  type: GET_PLAYER_STATS,
  payload: {
    data,
  },
});

export const updateHealthPlayer = (newHealth) => ({
  type: UPDATE_HEALTH_BAR_PLAYER,
  payload: {
    newHealth,
  },
});

export const startFighting = () => ({
  type: START_FIGHTING,
});

export const dealDamage = (data) => ({
  type: DEAL_DAMAGE,
  payload: {
    data,
  },
});

export const getNewMonster = () => ({
  type: GET_NEW_RANDOM_MONSTER,
});

export const getMonster = (data) => ({
  type: GET_MONSTER,
  payload: {
    data,
  },
});

export const addLogMessageDmgDealt = (damageDealt) => ({
  type: ADD_LOG_MESSAGE_DMG_DEALT,
  payload: {
    damageDealt,
  },
});

export const addLogMessageDmgReceived = (damageReceived) => ({
  type: ADD_LOG_MESSAGE_DMG_RECEIVED,
  payload: {
    damageReceived,
  },
});

export const receiveDamage = (newHealth) => ({
  type: RECEIVE_DAMAGE,
  payload: {
    newHealth,
  },
});

export const playerDeath = () => ({
  type: DEATH_OF_PLAYER,
});
