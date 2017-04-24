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
        <div className="feed-header">
          <button>Public</button>
          <button>Friends</button>
          <button>Mine</button>
        </div>
        <TransactionListContainer />
      </div>
    );
  }
}

export default Feed;
