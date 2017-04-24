import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER: {
      const currentUser = action.currentUser;
      return Object.assign({}, _nullUser, {currentUser});

      // return newState;
    }
    case RECEIVE_SESSION_ERRORS: {
      // const newState = merge({}, state);
      // newState.errors = action.errors;
      // return newState;

      const errors = action.errors;
      return Object.assign({}, state, {errors})
    }
    default:
      return state
  }
};

export default SessionReducer;
