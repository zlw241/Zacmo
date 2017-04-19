import * as APIUtil from '../util/api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import { hashHistory } from 'react-router';

export const receiveUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = (user) => (dispatch) => {
  return APIUtil.createUser(user).then(
    (newUser) => dispatch(receiveUser(newUser)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const login = (user) => (dispatch) => {
  return APIUtil.login(user).then(
    (currentUser) => dispatch(receiveUser(currentUser)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const logout = () => (dispatch) => {
  return APIUtil.logout().then(
    () => dispatch(receiveUser(null)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  ).then(() => console.log('THENNNNNNNNN'));
};

export const updateUser = (user) => (dispatch) => {
  return APIUtil.updateUser(user).then(
    (updatedUser) => dispatch(receiveUser(updateUser)),
    (err) => dispatch(receiveErrors(err.respoonseJSON))
  );
}
