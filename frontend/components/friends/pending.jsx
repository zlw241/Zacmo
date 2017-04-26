import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import FriendsList from './friends_list';

class PendingFriends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FriendsList friendList={this.props.pendingFriends} />
    )
  }
}

const mapStateToProps = (state) => ({
  pendingFriends: state.user.friendships.pending_friends
});

export default connect(mapStateToProps)(PendingFriends);



// return (
//   <div className="friend-tabs">
//   <ul>
//   {this.props.pendingFriends.map((friend) => (
//     <li key={friend.id}>
//     <Link key={friend.id} to={`/home/${friend.id}`}>{friend.username}</Link>
//     </li>
//   ))}
//   </ul>
//   </div>
// );
