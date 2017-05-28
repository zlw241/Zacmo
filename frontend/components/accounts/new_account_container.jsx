import React from 'react';
import { connect } from 'react-redux';
import NewAccount from './new_account';
import { fetchFundingToken, fetchAccounts } from '../../actions/account_actions';

const mapStateToProps = (state) => {
  return {
    account: state.account,
    errors: state.account.errors,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchToken: () => dispatch(fetchFundingToken())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewAccount);
