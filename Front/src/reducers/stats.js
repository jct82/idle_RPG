import { LIFE_POINTS } from "../actions/stats";
import { EXPERIENCE } from "../actions/stats";
import { LEVEL } from "../actions/stats";
import { JOB } from "../actions/stats";
import { MONEY } from "../actions/stats";
import { DEXTERITE } from "../actions/stats";






const initialState = {
  
  vie: 100,
  xp: 0 / 1000,
  dexterite: 0,
  force: 0,
  level: 1,
  metier: ['Mineur', 
           'Pêcheur'],
  argent: 5000,
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIFE_POINTS:
      return {
        ...state,
        vie:state.vie,
      };
      
        case EXPERIENCE:
          return {
            ...state,
            xp:state.xp,
          };

          case LEVEL:
            return {
              ...state,
              level:state.level,
            };

            case JOB:
            return {
              ...state,
              metier:state.metier,
            };

            case MONEY:
              return {
                ...state,
                money:state.argent,
              };
              case DEXTERITE:
              return {
                ...state,
                money:state.dexterite,
              };
    default:
      return state;
  }
};

export default statsReducer;
