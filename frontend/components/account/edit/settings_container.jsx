import React from 'react';
import Settings from './settings';
import { connect } from 'react-redux';
import { updateUser } from '../../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
