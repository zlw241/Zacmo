import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser)
});


export default connect(mapStateToProps)(Profile);
