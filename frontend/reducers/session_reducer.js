import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER: {
      const newState = merge({}, _nullUser);
      newState.currentUser = action.currentUser;
      return newState;
    }
    case RECEIVE_ERRORS: {
      const newState = merge({}, state);
      newState.errors = action.errors;
      return newState;
    }
    default:
      return state
  }
};

export default SessionReducer;
