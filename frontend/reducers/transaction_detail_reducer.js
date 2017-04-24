import merge from "lodash/merge";

import {
  RECEIVE_SINGLE_TRANSACTION,
  RECEIVE_NEW_TRANSACTION
} from '../actions/transaction_actions';

const _nullState = {
  id: null,
  amount: null,
  memo: "",
  user: {},
  recipient: {}
}

const TransactionDetailReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_TRANSACTION:
    case RECEIVE_NEW_TRANSACTION: {
      const newState = action.transaction;
      return merge({}, newState);
    }
    default: return state
  }
}

export default TransactionDetailReducer;
