import {
  RECEIVE_ALL_TRANSACTIONS,
  RECEIVE_MORE_TRANSACTIONS,
  RECEIVE_SINGLE_TRANSACTION,
  RECEIVE_NEW_TRANSACTION,
  CLEAR_TRANSACTIONS
} from '../actions/transaction_actions';

import merge from 'lodash/merge';

const _nullState = {}

const TransactionReducer = (state = _nullState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_ALL_TRANSACTIONS: {
      return merge({}, action.transactions)
    }
    case RECEIVE_MORE_TRANSACTIONS: {
      return merge({}, state, action.transactions)
    }
    case RECEIVE_SINGLE_TRANSACTION: {
      return Object.assign({}, state, action.transaction);
    }
    case RECEIVE_NEW_TRANSACTION: {
      return Object.assign({}, state, action.transaction)
    }
    case CLEAR_TRANSACTIONS: {
      return _nullState
    }
    default: {
      return state
    }
  }
}


export default TransactionReducer;
