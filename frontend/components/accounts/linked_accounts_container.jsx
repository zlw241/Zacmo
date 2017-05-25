import React from 'react';
import { connect } from 'react-redux';
import LinkedAccounts from './linked_accounts';
import { fetchFundingToken } from '../../actions/account_actions';

const mapStateToProps = (state) => {
  debugger
  return {
    account: state.account,
    errors: state.account.errors,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchToken: () => dispatch(fetchFundingToken())
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkedAccounts);
