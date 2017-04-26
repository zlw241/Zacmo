import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import FriendsList from './friends_list';


class RequestedFriends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FriendsList friendList={this.props.friendRequests} />
    );
  }
}

const mapStateToProps = (state) => ({
  friendRequests: state.user.friendships.friend_requests
});


export default connect(mapStateToProps)(RequestedFriends);
