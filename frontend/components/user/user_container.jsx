import React from 'react';
import { connect } from 'react-redux';
import User from './user';
import { fetchUser, addFriend } from '../../actions/user_actions';


const mapStateToProps = (state) => ({
  user: state.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user_id) => dispatch(fetchUser(user_id)),
  addFriend: (user_id) => dispatch(addFriend(user_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
