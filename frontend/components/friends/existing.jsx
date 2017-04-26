import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import FriendsList from './friends_list';

class ExistingFriends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FriendsList friendList={this.props.existingFriends} />
    );
  }
}

const mapStateToProps = (state) => ({
  existingFriends: state.user.friendships.friends
});

export default connect(mapStateToProps)(ExistingFriends);
