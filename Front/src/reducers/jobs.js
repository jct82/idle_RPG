import { SET_WORKING_MINE, SET_CURRENT_ORE, ALERT_PLAYER_NEEDS_ORE, ADD_LOG_MESSAGE, ALLOW_GATHER_RESOURCES, DECREMENT_COUNTER } from '../actions/jobs';

const initialState = {
  mining: {
    level: 1,
    experience: 0,
    levelUp: 100,
    currentOre: '',
    isWorking: false,
    allowGather: false,
    buttonTitle: 'Commencer à travailler',
    actionTime: 1000,
    baseReward: 2,
    logMessages: [],
    ores: [
      {
        name: 'fer',
        desc:'Niveau 1 requis',
        experience: 5,
      },
      {
        name: 'or',
        desc:'Niveau 5 requis',
        experience: 15,
      },
      {
        name: 'bronze',
        desc:'Niveau 20 requis',
        experience: 40,
      },
      {
        name: 'woopwoop',
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
              experience: state.mining.experience + action.payload.experience,
              logMessages: [
                ...state.mining.logMessages,
                `Vous avez récupéré ${action.payload.amount} ${state.mining.currentOre}`,
              ],
            }
          };
          case ALLOW_GATHER_RESOURCES:
            return {
              ...state,
              mining: {
                ...state.mining,
                allowGather: !state.mining.allowGather,
              }
            }
    default:
      return state;
  }
};

export default jobs;
