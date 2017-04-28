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

// export const fetchByUsername = (username) => (dispatch) => {
//   return UserAPIUtil.fetchUser(username).then(
//     (user) => dispatch(receiveUser(user)),
//     (err) => dispatch(receiveErrors(err))
//   );
// }

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

export const addFriend = (friendId) => (dispatch) => {
  return UserAPIUtil.addFriend(friendId).then(
    (pendingFriend) => dispatch(receiveUser(pendingFriend)),
    (err) => dispatch(receiveErrors(err))
  );
}

export const removeFriend = (friendId) => (dispatch) => {
  return UserAPIUtil.removeFriend(friendId).then(
    (removedFriend) => dispatch(receiveUser(removedFriend)),
    (err) => dispatch(receiveErrors(err))
  );
}

export const acceptRequest = (friendId) => (dispatch) => {
  return UserAPIUtil.acceptRequest(friendId).then(
    (newFriend) => dispatch(receiveUser(newFriend)),
    (err) => dispatch(receiveErrors(err))
  )
}

export const updateImage = (user, userId) => (dispatch) => {
  return UserAPIUtil.updateImage(user, userId).then(
    (updatedUser) => dispatch(receiveUser(updatedUser)),
    (err) => dispatch(receiveErrors(err))
  );
}
