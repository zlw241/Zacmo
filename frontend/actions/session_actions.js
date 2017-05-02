import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
import { hashHistory } from 'react-router';

export const receiveUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = (user) => (dispatch) => {
  return SessionAPIUtil.createUser(user).then(
    (newUser) => dispatch(receiveUser(newUser)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const login = (user) => (dispatch) => {
  return SessionAPIUtil.login(user).then(
    (currentUser) => dispatch(receiveUser(currentUser)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const logout = () => (dispatch) => {
  return SessionAPIUtil.logout().then(
    () => dispatch(receiveUser(null)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const updateUser = (user) => (dispatch) => {
  return SessionAPIUtil.updateUser(user).then(
    (updatedUser) => dispatch(receiveUser(updatedUser)),
    (err) => dispatch(receiveErrors(err.respoonseJSON))
  );
}
