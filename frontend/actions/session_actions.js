import * as APIUtil from '../util/api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user).then(
    (newUser) => dispatch(receiveUser(newUser)),
    (error) => dispatch(receiveErrors(error))
  );
};

export const login = (user) => (dispatch) => {
  return APIUtil.login(user).then(
    (currentUser) => dispatch(receiveUser(currentUser)),
    (error) => dispatch(receiveErrors(error))
  );
};

export const logout = () => (dispatch) => {
  return APIUtil.logout().then(
    (loggedOutUser) => dispatch(receiveUser(loggedOutUser)),
    (error) => dispatch(receiveErrors(error))
  );
};
