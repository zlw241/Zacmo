import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

var middlewares = [thunk];

// if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  // middlewares.push(logger);
// }

const configureStore = (preloadedState = {}) => {
  return createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
