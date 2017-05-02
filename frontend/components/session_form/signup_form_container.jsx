import React from 'react';
import { connect } from 'react-redux';
import { login, logout, signup, receiveErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';


const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => {
  const processForm = signup;

  return {
    processForm: (user) => dispatch(processForm(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
