import { combineReducers } from 'redux';

import character from './character';
import inventoryitem from './inventoryitem';
import stats from './stats';
import craft from './craft';
import monstre from './monstre';
import mining from './mining';
import fishing from './fishing';
import user from './user';
import shop from './shop';

export default combineReducers({
  character, craft, monstre, mining, user, fishing, shop,stats,inventoryitem,
});
