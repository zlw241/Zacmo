import { RECEIVE_USER, RECEIVE_ERRORS } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUser = {
  id: null,
  first_name: null,
  last_name: null,
  username: null,
  email: null, // only user's own page
  profile_pic: null,
  phone_num: null, // only user's own page
  balance: 0, // only user's own page
  friends: {
    id: null,
  }
}

const UserReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER: {
      const newState = merge({}, _nullUser, action.user)
      return newState
    }
    case RECEIVE_ERRORS: {
      debugger
    }
    default:
      return state;
  }

}

export default UserReducer;
