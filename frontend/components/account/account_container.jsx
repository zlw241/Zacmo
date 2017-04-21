import React from 'react';
import { connect } from 'react-redux';
import Account from './account';


const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser)
});

export default connect(mapStateToProps)(Account);
