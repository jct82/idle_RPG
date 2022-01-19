import { combineReducers } from 'redux';

import character from './character';
import craft from './craft';
import monstre from './monstre';
import jobs from './jobs';

export default combineReducers({
  character, craft, monstre, jobs,
});
