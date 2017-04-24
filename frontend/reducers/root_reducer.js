import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import TransactionReducer from './transaction_reducer';
import TransactionDetailReducer from './transaction_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  transactions: TransactionReducer,
  transactionDetail: TransactionDetailReducer
});

export default RootReducer;
