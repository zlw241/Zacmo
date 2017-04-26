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
          <div className="feed-button-container">
            <button>Public</button>
          </div>
          <div className="feed-button-container">
          <button>Friends</button>
          </div>
          <div className="feed-button-container">
          <button>Mine</button>
          </div>
        </div>
        <TransactionListContainer />
      </div>
    );
  }
}

export default Feed;
