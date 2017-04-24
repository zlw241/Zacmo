import React from 'react';
import { connect } from 'react-redux';
import { createTransaction } from '../../actions/transaction_actions';

import TransactionForm from './transaction_form';


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  createTransaction: (transaction) => dispatch(createTransaction(transaction))
});


export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
