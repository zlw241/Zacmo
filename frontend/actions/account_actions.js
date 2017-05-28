import * as AccountAPIUtil from '../util/account_api_util';
export const RECEIVE_FUNDING_TOKEN = "RECEIVE_FUNDING_TOKEN";
export const RECEIVE_LINKED_ACCOUNTS = "RECEIVE_LINKED_ACCOUNTS";
export const RECEIVE_ACCOUNT_ERRORS = "RECEIVE_ACCOUNT_ERRORS";

const receiveFundingToken = (token) => ({
  type: RECEIVE_FUNDING_TOKEN,
  token
});

const receiveLinkedAccounts = (accounts) => ({
  type: RECEIVE_LINKED_ACCOUNTS,
  accounts
});

const receiveAccountErrors = (err) => ({
  type: RECEIVE_ACCOUNT_ERRORS,
  err
});





export const fetchFundingToken = () => (dispatch) => {
  return AccountAPIUtil.fetchFundingToken().then(
    (token) => dispatch(receiveFundingToken(token)),
    (err) => dispatch(receiveAccountErrors(err))
  );
}

export const fetchAccounts = () => (dispatch) => {
  return AccountAPIUtil.fetchLinkedAccounts().then(
    (accounts) => dispatch(receiveLinkedAccounts(accounts)),
    (err) => dispatch(receiveAccountErrors(err))
  )
}
