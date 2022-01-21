import { combineReducers } from 'redux';

import character from './character';
import craft from './craft';
import monstre from './monstre';
import jobs from './jobs';
import user from './user';

export default combineReducers({
  character, craft, monstre, jobs, user,
});
