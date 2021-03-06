import React from 'react';
import { connect } from 'react-redux';
import ProfileTransactionList from './profile_transaction_list';
import {
  fetchTransactions,
  clearTransactions,
  fetchUserTransactions
} from '../../actions/transaction_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  transactions: Object.values(state.transactions),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user_id) => dispatch(fetchUser(user_id)),
  fetchUserTransactions: (user_id) => dispatch(fetchUserTransactions(user_id)),
  fetchTransactions: () => dispatch(fetchUserTransactions()),
  clearTransactions: () => dispatch(clearTransactions())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTransactionList);
