import React from 'react';
import { Link, hashHistory } from 'react-router';
import SearchItem from './search_item';
import FriendButton from '../friends/friend_button';
import SearchResults from './search_results';


class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      query: "",
      search_results: []
    };

    this.handleInput = this.handleInput.bind(this);
    this.clearState = this.clearState.bind(this);
    this.searchResultsClass = this.searchResultsClass.bind(this);
    this.clickHandler = this.clickHandler.bind(this)
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

  clickHandler(e) {
    debugger
  }

  clearState() {
    this.setState({
      query: "",
      search_results: []
    });
  }

  searchResultsClass() {
    if (this.state.search_results.length === 0) {
      return "hidden search-results"
    } else {
      return "search-results"
    }
  }

  render() {

    if (!this.props.currentUser) {
      return null
    }

    return (
      <div className="search-container">
        <div className="search-bar">
          <i className="fa fa-lg fa-search" aria-hidden="true"></i>
          <input className="search"
            autoComplete="off"
            type="search"
            name="query"
            placeholder="Search for users..."
            onChange={this.handleInput} value={this.state.query} />
        </div>
        <div className={this.searchResultsClass()}>
          <SearchResults searchResults={this.state.search_results} clearState={this.clearState} />
        </div>
      </div>

    )
  }
}

export default Search;
