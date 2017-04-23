import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

class RequestedFriends extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <ul>
        {this.props.friendRequests.map((friend) => (
          <li key={friend.id}>
            <Link key={friend.id} to={`/home/${friend.id}`}>{friend.username}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  friendRequests: state.user.friendships.friend_requests
});


export default connect(mapStateToProps)(RequestedFriends);
