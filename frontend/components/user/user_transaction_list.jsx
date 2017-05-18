import React from 'react';
import { Link, withRouter } from 'react-router';
import TransactionDetail from '../transaction/transaction_detail';

class UserTransactionList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transactions: this.props.transactions,
      user: this.props.user,
      active: "friends"
    };
    this.filterFeed = this.filterFeed.bind(this);
    this.activeTab = this.activeTab.bind(this);
  }

  componentWillMount() {
    this.props.fetchUserTransactions(this.props.params.user_id)
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) {
      this.props.clearTransactions()
    } else {
      this.setState({
        transactions: nextProps.transactions,
      });
      if (this.props.user.id !== nextProps.user.id) {
        this.props.fetchUser(nextProps.user.id).then(
          (res) => {
            return this.props.fetchUserTransactions(res.user.id)
          }
        )
      }
    }
  }

  componentWillUnmount() {
    this.props.clearTransactions()
  }


  filterFeed(visibility) {
    if (visibility === 'mine') {
      const myTransactions = this.props.transactions.filter((transaction) => {
        return (transaction.user.id === this.props.currentUser.id ||
          transaction.recipient.id === this.props.currentUser.id)
      }, this);
      this.setState({
        transactions: myTransactions,
        active: "mine"
      });
    } else {
      this.setState({
        transactions: this.props.transactions,
        active: "friends"
      });
    }
  }

  activeTab(visibility) {
    if (this.state.active === visibility) {
      return "feed-button-container-active";
    } else {
      return "feed-button-container";
    }
  }



  render() {
    let feedHeader;
    if (this.props.user.id === this.props.currentUser.id) {
      feedHeader = null;
    } else {
      feedHeader = (
        <div className="feed-header">
          <div className={this.activeTab('friends')}>
            <button onClick={() => this.filterFeed('friends')}>Friends</button>
          </div>
          <div className={this.activeTab('mine')}>
            <button onClick={() => this.filterFeed('mine')}>Between you & {this.props.user.first_name}</button>
          </div>
        </div>
      )
    }
    // <div className="feed-header">
    // <div className={this.activeTab('friends')}>
    // <button onClick={() => this.filterFeed('friends')}>Friends</button>
    // </div>
    // <div className={this.activeTab('mine')}>
    // <button onClick={() => this.filterFeed('mine')}>Between you & {this.props.user.first_name}</button>
    // </div>
    // </div>
    return (
      <div id="user-feed">
        {feedHeader}
        <ul className="user-transaction-list">
          {this.state.transactions.map((transaction) => (
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

export default withRouter(UserTransactionList);
