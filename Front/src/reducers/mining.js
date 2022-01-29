import { v4 as uuidv4 } from 'uuid';
import {
  SET_WORKING_MINE,
  SET_CURRENT_RESOURCE_MINE,
  ALERT_PLAYER_NEEDS_RESOURCE_MINE,
  ADD_LOG_MESSAGE_MINE,
  ADD_RESOURCE_EXPERIENCE_TO_PLAYER_MINE,
  LEVEL_UP_PLAYER_JOB_MINE,
  ADD_LEVEL_UP_MESSAGE_MINE,
  UPDATE_EXPERIENCE_BAR_PROGRESS_MINE,
  UPDATE_MINE_RESOURCES
} from '../actions/mining';

const initialState = {
    name: 'Minage',
    level: 1,
    experience: 0,
    experiencePurcentage: 0,
    levelUpReq: 100,
    currentResource: '',
    currentResourceExperience: 0,
    isWorking: false,
    buttonTitle: 'Commencer à travailler',
    actionTime: 2000,
    baseReward: 2,
    logMessages: [],
    resources: [],
};

const jobs = (state = initialState, action = {}) => {
  switch (action.type) {
    // MINING
    case SET_WORKING_MINE:
      return {
        ...state,
          isWorking: !state.isWorking,
          buttonTitle: !state.isWorking ? `Vous récoltez "${state.currentResource}"` : "Commencer à travailler",
      };
    case SET_CURRENT_RESOURCE_MINE:
      return {
        ...state,
          currentResource: action.payload.currentResource,
          currentResourceExperience: action.payload.currentResourceExperience,
          buttonTitle: state.isWorking ? `Vous récoltez "${action.payload.currentResource}"` : "Commencer à travailler",
      };
      case ALERT_PLAYER_NEEDS_RESOURCE_MINE:
        return {
          ...state,
            buttonTitle: 'Choisissez un minerai',
        };
        case ADD_LOG_MESSAGE_MINE:
          return {
            ...state,
              experience: state.experience + state.currentResourceExperience,
              logMessages: [
                <p key={uuidv4()}>Vous avez récupéré {action.payload.amount} {state.currentResource} et {state.currentResourceExperience} points d'expérience</p>,
                ...state.logMessages.slice(0, 99),
              ],
          };
        case ADD_LEVEL_UP_MESSAGE_MINE:
          return {
            ...state,
              logMessages: [
                <p key={uuidv4()}>Vous êtes passé niveau {state.level} en {state.name}!</p>,
                ...state.logMessages.slice(0, 99),
              ]
          }
          case ADD_RESOURCE_EXPERIENCE_TO_PLAYER_MINE:
            return {
              ...state,
            };
          case LEVEL_UP_PLAYER_JOB_MINE:
            return {
              ...state,
                level: state.level + 1,
                experience: 0,
                levelUpReq: state.levelUpReq * 1.10,
            };
          case UPDATE_EXPERIENCE_BAR_PROGRESS_MINE:
            return {
              ...state,
                experiencePercentage: action.payload.newExpPercentage,
            };
          case UPDATE_MINE_RESOURCES:
            return {
              ...state,
              resources: [
                ...action.payload.ores,
              ]
            }
    default:
      return state;
};
}
export default jobs;
