import React from 'react';
import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser)
});


export default connect(mapStateToProps)(Home);
