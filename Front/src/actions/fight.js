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
export const UPDATE_AFTER_FIGHT = 'UPDATE_AFTER_FIGHT';
export const PLAYER_TOO_WEAK = 'PLAYER_TOO_WEAK';
export const MANUAL_CHANGE_MONSTER_BEFORE = 'MANUAL_CHANGE_MONSTER_BEFORE';
export const MANUAL_CHANGE_MONSTER_AFTER = 'MANUAL_CHANGE_MONSTER_AFTER';
export const UPDATE_MONSTER_HP = 'UPDATE_MONSTER_HP';
export const UPDATE_CHARACTER_LEVEL = 'UPDATE_CHARACTER_LEVEL';

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

export const getNewMonster = (manual, level) => ({
  type: GET_NEW_RANDOM_MONSTER,
  payload: {
    manual,
    level,
  },
});

export const updateMonsterHp = () => ({
  type: UPDATE_MONSTER_HP,
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

export const updateAfterFight = (expValue, goldValue, hasLoot, itemId, newHp, hasWin, quantity) => ({
  type: UPDATE_AFTER_FIGHT,
  payload: {
    expValue,
    goldValue,
    hasLoot,
    itemId,
    newHp,
    hasWin,
    quantity,
  },
});

export const updateCharacterLevel = (newLvl) => ({
  type: UPDATE_CHARACTER_LEVEL,
  payload: {
    newLvl,
  },
});

export const playerTooWeak = () => ({
  type: PLAYER_TOO_WEAK,
});

export const manualChangeMonsterBefore = () => ({
  type: MANUAL_CHANGE_MONSTER_BEFORE,
});

export const manualChangeMonsterAfter = () => ({
  type: MANUAL_CHANGE_MONSTER_AFTER,
});
