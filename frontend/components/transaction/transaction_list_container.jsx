import React from 'react';
import { connect } from 'react-redux';
import TransactionList from './transaction_list';
import { fetchTransactions } from '../../actions/transaction_actions';


const mapStateToProps = (state) => ({
  transactions: Object.values(state.transactions),
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchTransactions: () => dispatch(fetchTransactions())
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
