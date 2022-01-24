import { combineReducers } from 'redux';

import character from './character';
import craft from './craft';
import monstre from './monstre';
import jobs from './jobs';
import user from './user';
import shop from './shop';

export default combineReducers({
  character, craft, monstre, jobs, user, shop,
});
