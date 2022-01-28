// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
import inventoryMiddleware from '../middleware/inventoryMiddleware';
import logMiddleware from '../middleware/logMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(logMiddleware, inventoryMiddleware),
);

// == Store
const store = createStore(rootReducer,enhancers,);

// == Export
export default store;
