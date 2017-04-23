import React from 'react';
import { Link, withRouter } from 'react-router';
import FriendButton from '../user/friend_button';

const SearchItem = ({user}) => {
  return (
    <Link to={`/home/${user.id}`}>
      {user.username}
    </Link>
  );
}

export default SearchItem;
