import * as UserAPIUtil from '../util/user_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchUser = (id) => (dispatch) => {
  return UserAPIUtil.fetchUser(id).then(
    (user) => dispatch(receiveUser(user)),
    (err) => dispatch(receiveErrors(err))
  );
}

export const updateUser = (user) => (dispatch) => {
  return UserAPIUtil.updateUser(user).then(
    (updatedUser) => dispatch(receiveUser(updatedUser)),
    (err) => dispatch(receiveErrors(err))
  );
}

export const createUser = (user) => (dispatch) => {
  return UserAPIUtil.createUser(user).then(
    (newUser) => dispatch(receiveUser(newUser)),
    (err) => dispatch(receiveErrors(err))
  );
}
