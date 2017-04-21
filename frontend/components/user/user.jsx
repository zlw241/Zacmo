import React from 'react';
import { Link, withRouter } from 'react-router';



class User extends React.Component {
  constructor(props) {
    super(props)

    this.addFriend = this.addFriend.bind(this);
    this.removeFriend = this.removeFriend.bind(this);
    this.acceptRequest = this.acceptRequest.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.user_id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.user_id !== nextProps.params.user_id) {
      this.props.fetchUser(nextProps.params.user_id);
    }
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

  userButton() {
    this.props.currentUser
  }

  render() {
    let friendsWith = null;
    if (this.props.user.friends_with) {
      friendsWith = "yes";
    }

    let friendButton;
    if (this.props.user.friend_status === "friends") {
      friendButton = (
        <button onClick={this.removeFriend}>Unfriend</button>
      );
    } else if (this.props.user.friend_status === "pending") {
      friendButton = (
        <button disabled>Pending</button>
      );
    } else if (this.props.user.friend_status === "requested") {
      friendButton = (
        <button onClick={this.acceptRequest}>Accept</button>
      );
    } else {
      friendButton = (
        <button onClick={this.addFriend}>Add Friend</button>
      );
    }

    return (
      <div className="user">
        <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
        {friendButton}
        <div>friend? {friendsWith}</div>
        <div>status: {this.props.user.friend_status}</div>
        <div>{this.props.user.username}</div>
        <div>{this.props.user.email}</div>
        <Link to="/account/settings">Edit</Link>
        {this.props.children}
      </div>
    );
  }

}

export default User;
