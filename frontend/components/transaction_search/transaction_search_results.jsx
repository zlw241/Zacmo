import React from 'react';
import { Link, withRouter } from 'react-router';

const TransactionSearchResults = ({searchResults, selectUser}) => {
  return (
    <ul>
      {searchResults.map((user) => (
        <li key={user.id} onClick={() => selectUser(user.id, user.username)} className="transaction-search-result">
          {user.username}
        </li>
      ))}
    </ul>
  );
}

export default TransactionSearchResults;
