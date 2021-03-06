import React from 'react';
import { connect } from 'react-redux';
import LinkedAccounts from './linked_accounts';
import { fetchFundingToken, fetchAccounts } from '../../actions/account_actions';

const mapStateToProps = (state) => {
  return {
    account: state.account,
    errors: state.account.errors,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchToken: () => dispatch(fetchFundingToken()),
  fetchAccounts: () => dispatch(fetchAccounts())
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkedAccounts);
