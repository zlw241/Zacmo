import React from 'react';
import { Link, withRouter } from 'react-router';
import TransactionDetail from './transaction_detail';

class TransactionList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchTransactions()
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) {
      this.props.clearTransactions()
    }
  }

  componentWillUnmount() {
    this.props.clearTransactions()
  }

  render() {
    return (
      <ul className="transaction-list">
        {this.props.transactions.map((transaction) => (
          <li key={transaction.id}>
            <TransactionDetail transaction={transaction} currentUser={this.props.currentUser}/>
          </li>
        ))}
      </ul>
    )
  }

}

export default TransactionList;
