import React from 'react';
import { Link, withRouter } from 'react-router';
import TransactionDetail from './transaction_detail';

class TransactionList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      transactions: this.props.transactions,
      active: "friends",
      offset: 0,
      loading: {
        display: 'none'
      }
    };
    this.filterFeed = this.filterFeed.bind(this);
    this.activeTab = this.activeTab.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    // debugger
    this.props.fetchTransactions();
    window.addEventListener('scroll', this.handleScroll);
    // $('#feed').addEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) {
      this.props.clearTransactions()
    } else {
      this.setState({
        transactions: nextProps.transactions
      });
    }
  }

  componentWillUnmount() {
    this.props.clearTransactions()
    window.removeEventListener('scroll', this.handleScroll);
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
      return "feed-button feed-button-active";
    } else {
      return "feed-button sfeed-button-inactive";
    }
  }

  handleScroll(event) {
    const scrollTop = event.srcElement.body.scrollTop;
    const numTransactions = this.props.transactions.length
    if (scrollTop == $(document).height() - $(window).height()) {
      this.setState({ offset: this.state.offset + 5 })
      window.removeEventListener('scroll', this.handleScroll)
      this.props.fetchMoreTransactions(this.state.offset).then(
        () => {
          console.log(this.props.transactions.length, numTransactions)
          if (!this.props.transactions.length > numTransactions) {
            window.addEventListener('scroll', this.handleScroll)
          }
          this.setState({loading: {display: 'none'}})
        }
      );
      this.setState({ loading: {} });
    }

  }

  render() {
    return (
      <div id="feed" onScroll={this.handleScroll}>
        <div className="feed-header">
          <div className="feed-button-container">
            <button className={this.activeTab('friends')} onClick={() => this.filterFeed('friends')}>Friends</button>
          </div>
          <div className="feed-button-container">
            <button className={this.activeTab('mine')} onClick={() => this.filterFeed('mine')}>Mine</button>
          </div>
        </div>
        <ul className="transaction-list" onScroll={this.handleScroll}>
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
        <div className="loading" style={this.state.loading}>
          <div className="loader"></div>
        </div>
      </div>
    )
  }

}
// <img src={window.spinnerImg} className="spinner" />

export default TransactionList;

// <div className="feed-button-container">
//   <button>Public</button>
// </div>
