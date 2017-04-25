import React from 'react';
import { Link, withRouter } from 'react-router';

const TransactionSearchResults = ({searchResults, clearState}) => {
  return (
    <ul>
      {searchResults.map((user) => (
        <li key={user.id} onClick={clearState} className="search-result-item">
          {user.username}
        </li>
      ))}
    </ul>
  );
}

export default TransactionSearchResults;
