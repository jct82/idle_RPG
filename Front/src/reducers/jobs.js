import { v4 as uuidv4 } from 'uuid';
import { SET_WORKING_MINE, SET_CURRENT_ORE, ALERT_PLAYER_NEEDS_ORE, ADD_LOG_MESSAGE, ALLOW_GATHER_RESOURCES, DECREMENT_COUNTER, ADD_ORE_EXPERIENCE_TO_PLAYER, LEVEL_UP_PLAYER_JOB, ADD_LEVEL_UP_MESSAGE, UPDATE_EXPERIENCE_BAR_PROGRESS } from '../actions/jobs';

const initialState = {
  mining: {
    level: 1,
    experience: 0,
    experiencePurcentage: 0,
    levelUpReq: 100,
    currentOre: '',
    currentOreExperience: 0,
    isWorking: false,
    allowGather: false,
    buttonTitle: 'Commencer à travailler',
    actionTime: 1000,
    baseReward: 2,
    logMessages: [],
    ores: [
      {
        name: 'fer',
        level: 1,
        desc:'Niveau 1 requis',
        experience: 5,
      },
      {
        name: 'or',
        level: 5,
        desc:'Niveau 5 requis',
        experience: 15,
      },
      {
        name: 'bronze',
        level: 20,
        desc:'Niveau 20 requis',
        experience: 40,
      },
      {
        name: 'woopwoop',
        desc:'Niveau 40 requis',
        experience: 80,
      },
      {
        name: 'vvvv',
        desc:'Niveau 1 requis',
        experience: 5,
      },
      {
        name: 'ccccc',
        desc:'Niveau 5 requis',
        experience: 15,
      },
      {
        name: 'aaaaa',
        desc:'Niveau 20 requis',
        experience: 40,
      },
      {
        name: 'dzdz',
        desc:'Niveau 40 requis',
        experience: 80,
      },
    ]
  },
};

const jobs = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_WORKING_MINE:
      return {
        ...state,
        mining: {
          ...state.mining,
          isWorking: !state.mining.isWorking,
          buttonTitle: !state.mining.isWorking ? `Vous récoltez "${state.mining.currentOre}"` : "Commencer à travailler",
        }
      };
    case SET_CURRENT_ORE:
      return {
        ...state,
        mining: {
          ...state.mining,
          currentOre: action.payload.currentOre,
          currentOreExperience: action.payload.currentOreExperience,
          buttonTitle: state.mining.isWorking ? `Vous récoltez "${action.payload.currentOre}"` : "Commencer à travailler",
        }
      };
      case ALERT_PLAYER_NEEDS_ORE:
        return {
          ...state,
          mining: {
            ...state.mining,
            buttonTitle: 'Choisissez un minerai',
          }
        };
        case ADD_LOG_MESSAGE:
          return {
            ...state,
            mining: {
              ...state.mining,
              experience: state.mining.experience + state.mining.currentOreExperience,
              logMessages: [
                <p key={uuidv4()}>Vous avez récupéré {action.payload.amount} {state.mining.currentOre} et {state.mining.currentOreExperience} points d'expérience</p>,
                ...state.mining.logMessages,
              ],
            }
          };
        case ADD_LEVEL_UP_MESSAGE:
          return {
            ...state,
            mining: {
              ...state.mining,
              logMessages: [
                <p key={uuidv4()}>Vous êtes passé niveau {state.mining.level} !</p>,
                ...state.mining.logMessages,
              ]
            }
          }
          case ADD_ORE_EXPERIENCE_TO_PLAYER:
            return {
              ...state,
              mining: {
                ...state.mining,
              }
            };
          case LEVEL_UP_PLAYER_JOB:
            return {
              ...state,
              mining: {
                ...state.mining,
                level: state.mining.level + 1,
                experience: 0,
                levelUpReq: state.mining.levelUpReq * 1.10,
              }
            };
          case UPDATE_EXPERIENCE_BAR_PROGRESS:
            return {
              ...state,
              mining: {
                ...state.mining,
                experiencePercentage: action.payload.newExpPercentage,
              }
            };
          case ALLOW_GATHER_RESOURCES:
            return {
              ...state,
              mining: {
                ...state.mining,
                allowGather: !state.mining.allowGather,
              }
            };
    default:
      return state;
  }
};

export default jobs;
