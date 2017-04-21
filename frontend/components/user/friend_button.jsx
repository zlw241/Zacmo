import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { addFriend, removeFriend, acceptRequest } from '../../actions/user_actions';

class FriendButton extends React.Component {
  constructor(props) {
    super(props)

    this.addFriend = this.addFriend.bind(this);
    this.removeFriend = this.removeFriend.bind(this);
    this.acceptRequest = this.acceptRequest.bind(this);
  }

  addFriend() {
    this.props.addFriend(this.props.user.id);
  }

  removeFriend() {
    this.props.removeFriend(this.props.user.id);
  }

  acceptRequest() {
    this.props.acceptRequest(this.props.user.id);
  }

  render() {
    switch(this.props.user.friend_status) {
      case "friends": return (
        <button onClick={this.removeFriend}>Unfriend</button>
      )
      case "pending": return (
        <button disabled>Pending</button>
      )
      case "requested": return (
        <button onClick={this.acceptRequest}>Accept</button>
      )
      default: return (
          <button onClick={this.addFriend}>Add Friend</button>
        )
    }
  }

}

const mapStateToProps = (state) => ({
  user: state.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user_id) => dispatch(fetchUser(user_id)),
  addFriend: (user_id) => dispatch(addFriend(user_id)),
  removeFriend: (user_id) => dispatch(removeFriend(user_id)),
  acceptRequest: (user_id) => dispatch(acceptRequest(user_id))
});



export default connect(mapStateToProps, mapDispatchToProps)(FriendButton);
