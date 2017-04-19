import { RECEIVE_USER, RECEIVE_ERRORS } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUser = {
  id: null,
  firstName: null,
  lastName: null,
  username: null,
  email: null, // only user's own page
  profilePic: null,
  phoneNum: null, // only user's own page
  balance: 0, // only user's own page
  friends: {
    id: null,
  }
}

const UserReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER: {

    }
    case RECEIVE_ERRORS: {

    }
    default:
      return state;
  }

}

export default UserReducer;
