import * as AccountAPIUtil from '../util/account_api_util';
export const RECEIVE_FUNDING_TOKEN = "RECEIVE_FUNDING_TOKEN";
export const RECEIVE_ACCOUNT_ERRORS = "RECEIVE_ACCOUNT_ERRORS";


const receiveFundingToken = (token) => ({
  type: RECEIVE_FUNDING_TOKEN,
  token
});

const receiveAccountErrors = (err) => ({
  type: RECEIVE_ACCOUNT_ERRORS,
  err
})

export const fetchFundingToken = () => (dispatch) => {
  return AccountAPIUtil.fetchFundingToken().then(
    (token) => dispatch(receiveFundingToken(token)),
    (err) => dispatch(receiveAccountErrors(err))
  );
}
