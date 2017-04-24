import React from 'react';
import { Link, withRouter } from 'react-router';
import TransactionListContainer from '../transaction/transaction_list_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="feed">
        <h2>Feed</h2>
        <TransactionListContainer />
      </div>
    );
  }
}

export default Feed;
