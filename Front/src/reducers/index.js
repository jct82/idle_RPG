import { combineReducers } from 'redux';

import character from './character';
import craft from './craft';
import monstre from './monstre';

export default combineReducers({
  character, craft, monstre,
});
