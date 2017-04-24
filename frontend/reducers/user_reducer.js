import { RECEIVE_USER, RECEIVE_USER_ERRORS } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUser = {
  id: null,
  first_name: null,
  last_name: null,
  username: null,
  email: null,
  profile_pic: null,
  phone_num: null,
  balance: 0,
  friends_with: null,
  friend_status: null,
  friendships: {
    friends: [],
    friend_requests: [],
    pending_friends: []
  },
  errors: []
}

const UserReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER: {
      const newState = merge({}, _nullUser, action.user)
      return newState
    }
    case RECEIVE_USER_ERRORS: {
      const newState = merge({}, state);
      newState.errors = action.errors;
      return newState;
    }
    default:
      return state;
  }

}

export default UserReducer;
