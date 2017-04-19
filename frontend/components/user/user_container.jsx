import React from 'react';
import { connect } from 'react-redux';
import User from './user';
import { fetchUser } from '../../actions/user_actions';


const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user_id) => dispatch(fetchUser(user_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
