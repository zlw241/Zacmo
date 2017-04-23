import { RECEIVE_FEED, RECEIVE_FEED_ERR } from '../actions/feed_actions';
import merge from 'lodash/merge';



const TransactionReducer = (state = {}, actions) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_ALL_TRANSACTIONS: {
      return merge({}, action.transactions)
    }
    case RECEIVE_NEW_TRANSACTION: {
      return merge({}, state, {
        [action.transaction.id]: action.transaction
      });
    }
    default: {
      return state
    }
  }
}


export default FeedReducer;
