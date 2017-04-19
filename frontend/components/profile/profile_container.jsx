import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/user_actions';


const mapStateToProps = (state) => ({
  user: state.user,
  currentUser: state.session.currentUser,
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
