import React from 'react';
import Settings from './settings';
import { connect } from 'react-redux';
import { fetchUser, updateUser, updateImage } from '../../actions/user_actions';


const mapStateToProps = (state) => ({

  currentUser: state.session.currentUser,
  user: state.user,
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user_id) => dispatch(fetchUser(user_id)),
  updateUser: (user) => dispatch(updateUser(user)),
  updateImage: (user, userId) => dispatch(updateImage(user, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
