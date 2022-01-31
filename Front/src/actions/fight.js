export const GET_PLAYER_STATS = 'GET_PLAYER_STATS';
export const UPDATE_HEALTH_BAR_PLAYER = 'UPDATE_HEALTH_BAR_PLAYER';
export const START_FIGHTING = 'START_FIGHTING';
export const DEAL_DAMAGE = 'DEAL_DAMAGE';
export const GET_NEW_RANDOM_MONSTER = 'GET_NEW_RANDOM_MONSTER';
export const GET_MONSTER = 'GET_MONSTER';

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
