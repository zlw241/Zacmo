import React from 'react';
import { connect } from 'react-redux';
import TransactionList from './transaction_list';
import { fetchTransactions, clearTransactions } from '../../actions/transaction_actions';


const mapStateToProps = (state) => ({
  transactions: Object.values(state.transactions),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchTransactions: () => dispatch(fetchTransactions()),
  clearTransactions: () => dispatch(clearTransactions())
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
