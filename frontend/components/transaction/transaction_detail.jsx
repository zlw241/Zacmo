import React from 'react';
import { Link, withRouter } from 'react-router';

const TransactionDetail = ({transaction, currentUser}) => {
  let transactionAmount = null;
  if (transaction.amount) {
    debugger
    if (transaction.recipient.id == currentUser.id) {
      transactionAmount = (
        <span className="transaction-amount green">
          +${transaction.amount}
        </span>
      );
    } else {
      transactionAmount = (
        <span className="transaction-amount red">
          -${transaction.amount}
        </span>
      );
    }
  }

  return (
    <div className="transaction-detail">
      <div className="transaction-header">
        <div className="transaction-summary">
          <span className="transaction-user">{transaction.user.username}</span>
          <span className="transaction-type"> paid </span>
          <span className="transaction-user">{transaction.recipient.username}</span>
        </div>

        <span className="transaction-amount">{transactionAmount}</span>
      </div>
      <div className="transaction-memo">{transaction.memo}</div>
    </div>
  );
}

export default TransactionDetail;
