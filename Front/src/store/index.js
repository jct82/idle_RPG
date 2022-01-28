// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
import inventoryMiddleware from '../middleware/inventoryMiddleware';
import logMiddleware from '../middleware/logMiddleware';
import shopMiddleware from '../middleware/shopMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(logMiddleware, inventoryMiddleware, shopMiddleware),
);

// == Store
const store = createStore(rootReducer,enhancers,);

// == Export
export default store;
