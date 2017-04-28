import * as TransactionAPIUtil from '../util/transaction_api_util';

export const RECEIVE_ALL_TRANSACTIONS = "RECEIVE_ALL_TRANSACTIONS";
export const RECEIVE_SINGLE_TRANSACTION = "RECEIVE_SINGLE_TRANSACTION";
export const RECEIVE_NEW_TRANSACTION = "RECEIVE_NEW_TRANSACTION";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_TRANSACTIONS = "CLEAR_TRANSACTIONS";

const receiveAllTransactions = (transactions) => ({
  type: RECEIVE_ALL_TRANSACTIONS,
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

export const clearTransactions = () => ({
  type: CLEAR_TRANSACTIONS
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const fetchTransactions = () => (dispatch) => {
  return TransactionAPIUtil.fetchTransactions().then(
    (feed) => dispatch(receiveAllTransactions(feed)),
    (err) => dispatch(receiveErrors(err))
  );
};

export const fetchUserTransactions = (user_id) => (dispatch) => {
  return TransactionAPIUtil.fetchUserTransactions(user_id).then(
    (feed) => dispatch(receiveAllTransactions(feed)),
    (err) => dispatch(receiveErrors(err))
  )
}

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

export const createComment = (transactionId, comment) => (dispatch) => {
  return TransactionAPIUtil.createComment(transactionId, comment).then(
    (transaction) => dispatch(receiveSingleTransaction(transaction)),
    (err) => dispatch(receiveErrors(err))
  );
};

export const addLike = (transactionId) => (dispatch) => {
  return TransactionAPIUtil.addLike(transactionId).then(
    (transaction) => dispatch(receiveSingleTransaction(transaction)),
    (err) => dispatch(receiveErrors(err))
  );
};

export const removeLike = (likeId) => (dispatch) => {
  return TransactionAPIUtil.removeLike(likeId).then(
    (transaction) => dispatch(receiveSingleTransaction(transaction)),
    (err) => dispatch(receiveErrors(err))
  );
};
