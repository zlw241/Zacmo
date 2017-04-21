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
    let isFriends = "no"
    this.props.user.friendships.friends.map((f) => {

      if (f.id === this.props.currentUser.id) {
        isFriends = "yes"
      }
    });
    return isFriends
  }

  render() {
    debugger
    return (
      <div className="user">
        <Link to="/1">1</Link>
        <Link to="/5">5</Link>
        <Link to="/12">12</Link>
        <Link to="/13">13</Link>
        <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
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
