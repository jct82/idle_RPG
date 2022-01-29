import { v4 as uuidv4 } from 'uuid';
import {
  SET_WORKING_FISH,
  SET_CURRENT_RESOURCE_FISH,
  ALERT_PLAYER_NEEDS_RESOURCE_FISH,
  ADD_LOG_MESSAGE_FISH,
  ADD_RESOURCE_EXPERIENCE_TO_PLAYER_FISH,
  LEVEL_UP_PLAYER_JOB_FISH,
  ADD_LEVEL_UP_MESSAGE_FISH,
  UPDATE_EXPERIENCE_BAR_PROGRESS_FISH,
  UPDATE_FISH_RESOURCES
} from '../actions/fishing';

const initialState = {
    name: 'Pêche',
    level: 1,
    experience: 0,
    experiencePercentage: 0,
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
    case SET_WORKING_FISH:
      return {
        ...state,
          isWorking: !state.isWorking,
          buttonTitle: !state.isWorking ? `Vous récoltez "${state.currentResource}"` : "Commencer à travailler",
      };
    case SET_CURRENT_RESOURCE_FISH:
      return {
        ...state,
          currentResource: action.payload.currentResource,
          currentResourceExperience: action.payload.currentResourceExperience,
          buttonTitle: state.isWorking ? `Vous récoltez "${action.payload.currentResource}"` : "Commencer à travailler",
      };
      case ALERT_PLAYER_NEEDS_RESOURCE_FISH:
        return {
          ...state,
            buttonTitle: 'Choisissez un poisson',
        };
        case ADD_LOG_MESSAGE_FISH:
          return {
            ...state,
              experience: state.experience + state.currentResourceExperience,
              logMessages: [
                <p key={uuidv4()}>Vous avez récupéré {action.payload.amount} {state.currentResource} et {state.currentResourceExperience} points d'expérience</p>,
                ...state.logMessages.slice(0, 99),
              ],
          };
        case ADD_LEVEL_UP_MESSAGE_FISH:
          return {
            ...state,
              logMessages: [
                <p key={uuidv4()}>Vous êtes passé niveau {state.level} en {state.name}!</p>,
                ...state.logMessages.slice(0, 99),
              ]
          }
          case ADD_RESOURCE_EXPERIENCE_TO_PLAYER_FISH:
            return {
              ...state,
            };
          case LEVEL_UP_PLAYER_JOB_FISH:
            return {
              ...state,
                level: state.level + 1,
                experience: 0,
                levelUpReq: state.levelUpReq * 1.10,
            };
          case UPDATE_EXPERIENCE_BAR_PROGRESS_FISH:
            return {
              ...state,
                experiencePercentage: action.payload.newExpPercentage,
            };
          case UPDATE_FISH_RESOURCES:
            return {
              ...state,
              resources: [
                ...action.payload.fishes,
              ]
            }
    default:
      return state;
};
}
export default jobs;
