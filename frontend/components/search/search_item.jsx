import React from 'react';
import { Link, withRouter } from 'react-router';
import FriendButton from '../user/friend_button';

const SearchItem = ({user}) => {
  return (
    <Link to={`/home/${user.id}`} className="search-result-link">
      <div>
        {user.first_name} {user.last_name}
      </div>
    </Link>
  );
}

export default SearchItem;
