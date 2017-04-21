import React from 'react';
import { Link, withRouter } from 'react-router';
import { hashHistory } from 'react-router';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  componentWillMount() {
    this.props.fetchUser(this.props.currentUser.id)
  }


  render() {
  //  if (!this.props.currentUser) { return null }

    return (
      <div className="profile">
        <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
        <div>{this.props.user.username}</div>
        <div>{this.props.user.email}</div>
        <div>{this.props.user.balance}</div>
        <div>
          <div className="friends">
            <h3>Friends</h3>
            <ul>
              {this.props.user.friendships.friends.map((friend) => (
                <li key={friend.id}>
                  <Link key={friend.id} to={`/${friend.id}`}>{friend.username}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="pending-friends">
            <h3>Pending</h3>
            <ul>
              {this.props.user.friendships.pending_friends.map((friend) => (
                <li key={friend.id}>
                  <Link key={friend.id} to={`/${friend.id}`}>{friend.username}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="friend-requests">
            <h3>Requests</h3>
            <ul>
              {this.props.user.friendships.friend_requests.map((friend) => (
                <li key={friend.id}>
                  <Link key={friend.id} to={`/${friend.id}`}>{friend.username}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
        <Link to="/account/settings">Edit</Link>
        {this.props.children}
      </div>
    );
  }
}


export default Profile;
