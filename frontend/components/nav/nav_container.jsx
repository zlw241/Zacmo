import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Nav from './nav';

const mapStateToProps = ({session}) => {
  return {
    currentUser: session.currentUser
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
