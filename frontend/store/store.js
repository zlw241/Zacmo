import { createStore, applyMiddleware } from 'redux';
import RootReducer from './root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const configureStore = (preloadedState = {}) => {
  return createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
};

export default configureStore;
