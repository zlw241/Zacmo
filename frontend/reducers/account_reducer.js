import { RECEIVE_FUNDING_TOKEN, RECEIVE_ACCOUNT_ERRORS } from '../actions/account_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  fundingToken: null,
  errors: []
});

const AccountReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FUNDING_TOKEN: {
      return Object.assign({}, _nullUser, action.token);
    }
    case RECEIVE_ACCOUNT_ERRORS: {
      debugger
      return Object.assign({}, state, action.errors)
    }
    default:
      return state
  }
};

export default AccountReducer;
