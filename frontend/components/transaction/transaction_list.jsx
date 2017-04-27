import React from 'react';
import { Link, withRouter } from 'react-router';
import TransactionDetail from './transaction_detail';

class TransactionList extends React.Component {
  constructor(props) {
    super(props)

    this.filterFeed = this.filterFeed.bind(this);
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

  filterFeed() {
    debugger
  }

  render() {
    return (
      <div id="feed">
        <div className="feed-header">
          <div className="feed-button-container">
            <button onClick={this.buttonClick}>Public</button>
          </div>
          <div className="feed-button-container">
            <button>Friends</button>
          </div>
          <div className="feed-button-container">
            <button>Mine</button>
          </div>
        </div>
        <ul className="transaction-list">
          {this.props.transactions.map((transaction) => (
            <li key={transaction.id}>
              <TransactionDetail
                filterFeed={this.filterFeed}
                comments={transaction.comments}
                transaction={transaction}
                currentUser={this.props.currentUser} />
            </li>
          ))}
        </ul>
      </div>
    )
  }

}

export default TransactionList;
