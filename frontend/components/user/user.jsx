import React from 'react';
import { Link, withRouter } from 'react-router';

class User extends React.Component {
  constructor(props) {
    super(props)
    this.isFriendsWithCurrentUser = this.isFriendsWithCurrentUser.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.user_id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.user_id !== nextProps.params.user_id) {
      this.props.fetchUser(nextProps.params.user_id);
    }
  }

  isFriendsWithCurrentUser() {
    if (this.props.currentUser) {
      let isFriends = "no"
      this.props.user.friendships.friends.map((f) => {
        if (f.id === this.props.currentUser.id) {
          isFriends = "yes"
        }
      });
      return isFriends
    } else {
      return null
    }
  }

  render() {
    let friendsWith = null;
    if (this.props.currentUser) {
      friendsWith = this.isFriendsWithCurrentUser()
    }

    return (
      <div className="user">
        <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
        {}
        friend? {this.isFriendsWithCurrentUser()}
        <div>{this.props.user.username}</div>
        <div>{this.props.user.email}</div>
        <Link to="/account/settings">Edit</Link>
        {this.props.children}
      </div>
    );
  }

}

export default User;
