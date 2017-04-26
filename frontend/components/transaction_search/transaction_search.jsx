import React from 'react';
import { Link, withRouter } from 'react-router';
import TransactionSearchResults from './transaction_search_results';


class TransactionSearch extends React.Component {
  constructor(props) {
    super(props)

    if (this.props.recipient) {
      this.state = {
        query: this.props.recipient.username,
        selectedUser: {
          username: this.props.recipient.username,
          id: this.props.recipient.id
        },
        search_results: []
      };
    } else {
      this.state = {
        query: "",
        selectedUser: {
          username: "",
          id: null
        },
        search_results: []
      };
    }


    this.handleInput = this.handleInput.bind(this);
    this.clearState = this.clearState.bind(this);
    this.searchResultsClass = this.searchResultsClass.bind(this);
    this.selectUser = this.selectUser.bind(this);
  }

  handleInput(e) {
    const query = e.currentTarget.value;
    this.setState({query: query})

    if (query === "") {
      this.setState({search_results: []})
    } else {
      this.props.searchUsers(query).then(
        (users) => this.setState({search_results: users})
      )
    }
  }
  componentWillReceiveProps(nextProps) {
    this.clearState()
  }

  componentWillUnmount() {
    this.clearState()
  }

  selectUser(id, username) {
    const user = { id: id, username: username }
    this.setState({
      selectedUser: user,
      query: username,
      search_results: []
    });
    this.props.setRecipient(user)
  }

  clearState() {
    this.setState({
      query: "",
      search_results: []
    });
  }

  searchResultsClass() {
    if (this.state.search_results.length === 0) {
      return "hidden transaction-search-results"
    } else {
      return "transaction-search-results"
    }
  }

  render() {
    if (!this.props.currentUser) {
      return null
    }
    return (
      <div className="transaction-search-container">
        <div className="transaction-search-bar">
          <i className="fa fa-lg fa-search" aria-hidden="true"></i>
          <input className="transaction-search"
            type="search"
            name="recipient"
            placeholder="Search for users..."
            onChange={this.handleInput} value={this.state.query} />
        </div>
        <div className={this.searchResultsClass()}>
          <TransactionSearchResults searchResults={this.state.search_results} selectUser={this.selectUser} />
        </div>
      </div>
    )
  }

}

export default TransactionSearch;
