import merge from "lodash/merge";

import {
  RECEIVE_ALL_TRANSACTIONS,
  RECEIVE_NEW_TRANSACTION
} from '../actions/transaction_actions';


const TransactionDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_TRANSACTIONS: {
      const newState = action.transactions;
      return merge({}, newState);
    }
    case RECEIVE_NEW_TRANSACTION: {
      return merge({}, state, {
        [action.transaction.id]: action.transaction
      });
    }
    default: return state
  }
}

export default TransactionDetailReducer;
