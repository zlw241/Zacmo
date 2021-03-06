import React from 'react';
import { connect } from 'react-redux';
import { login, logout, signup, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { createUser, updateUser } from '../../actions/user_actions';


const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  // const formType = ownProps.location.pathname.slice(1);
  const processForm = login;

  return {
    processForm: (user) => dispatch(processForm(user)),
    // formType,
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
