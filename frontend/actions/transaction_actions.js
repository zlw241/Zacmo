import * as TransactionAPIUtil from '../util/transaction_api_util';

export const RECEIVE_ALL_TRANSACTIONS = "RECEIVE_FEED";
export const RECEIVE_SINGLE_TRANSACTION = "RECEIVE_SINGLE_TRANSACTION";
export const RECEIVE_NEW_TRANSACTION = "RECEIVE_NEW_TRANSACTION";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveAllTransactions = (transactions) => ({
  type: RECEIVE_FEED,
  transactions
});

const receiveNewTransaction = (transaction) => ({
  type: RECEIVE_NEW_TRANSACTION,
  transaction
});

const receiveSingleTransaction = (transaction) => ({
  type: RECEIVE_SINGLE_TRANSACTION,
  transaction
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERROR,
  errors
})

export const getAllTransactions = () => (dispatch) => {
  return TransactionAPIUtil.fetchTransactions().then(
    (feed) => dispatch(receiveFeed(feed)),
    (err) => dispatch(receiveFeedErr(err))
  );
};

export const createTransaction = (transaction) => (dispatch) => {
  return TransactionAPIUtil.createTransaction(transaction).then(
    (newTransaction) => dispatch(receiveNewTransaction(newTransaction)),
    (err) => dispatch(receiveErrors(err))
  );
};

export const fetchTransaction = (transactionId) => (dispatch) => {
  return TransactionAPIUtil.fetchTransaction(transactionId).then(
    (transaction) => dispatch(receiveSingleTransaction(transaction)),
    (err) => dispatch(receiveErrors(err))
  );
};
