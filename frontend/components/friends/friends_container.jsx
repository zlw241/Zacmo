import React from 'react';
import { connect } from 'react-redux';
import Friends from './friends';
import { fetchUser, addFriend, removeFriend, acceptRequest } from '../../actions/user_actions';


const mapStateToProps = (state) => ({
  friends: state.user.friendships.friends,
  pending: state.user.friendships.pending_friends,
  requested: state.user.friendships.friend_requests,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user_id) => dispatch(fetchUser(user_id)),
  addFriend: (user_id) => dispatch(addFriend(user_id)),
  removeFriend: (user_id) => dispatch(removeFriend(user_id)),
  acceptRequest: (user_id) => dispatch(acceptRequest(user_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
