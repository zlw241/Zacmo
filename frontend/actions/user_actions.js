import * as UserAPIUtil from '../util/user_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
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

export const addFriend = (friend_id) => (dispatch) => {
  return UserAPIUtil.addFriend(friend_id).then(
    (pending_friend) => dispatch(receiveUser(pending_friend)),
    (err) => dispatch(receiveErrors(err))
  );
}
