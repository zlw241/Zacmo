import React from 'react';
import { Link, hashHistory } from 'react-router';


class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      query: "",
      search_results: []
    };

    this.handleInput = this.handleInput.bind(this);
    this.clearState = this.clearState.bind(this);
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

  clearState() {
    this.setState({
      query: "",
      search_results: []
    });
  }

  render() {

    if (!this.props.currentUser) {
      return null
    }
    return (
      <div className="search">
        <div className="search-bar">
          <input
            type="text"
            name="query"
            placeholder="Search for users"
            onChange={this.handleInput} />
            <div className="search-results">
              <ul>
                {this.state.search_results.map((user) => (
                  <li key={user.id}><Link onClick={this.clearState} to={`/${user.id}`}>{user.username}</Link></li>
                ))}
              </ul>
            </div>
        </div>

      </div>

    )
  }
}


export default Search;
