import {
  RECEIVE_FUNDING_TOKEN,
  RECEIVE_LINKED_ACCOUNTS,
  RECEIVE_ACCOUNT_ERRORS
} from '../actions/account_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  fundingToken: null,
  accounts: [],
  errors: []
});

const AccountReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FUNDING_TOKEN: {
      return Object.assign({}, state, action.token);
    }
    case RECEIVE_LINKED_ACCOUNTS: {
      const newState = Object.assign({}, state)
      newState.accounts = action.accounts
      return newState
      // return Object.assign({}, state, action.accounts);
    }
    case RECEIVE_ACCOUNT_ERRORS: {
      return Object.assign({}, state, action.errors)
    }
    default:
      return state
  }
};

export default AccountReducer;
