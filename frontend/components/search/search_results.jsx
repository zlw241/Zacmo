import React from 'react';
import { Link, withRouter } from 'react-router';
import SearchItem from './search_item';
import FriendButton from '../user/friend_button';

const SearchResults = ({searchResults, clearState}) => {
  return (
    <ul>
      {searchResults.map((user) => (
        <li key={user.id} onClick={clearState} className="search-result-item">
          <SearchItem user={user}/>
          <FriendButton user={user} />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
