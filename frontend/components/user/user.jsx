import React from 'react';
import { Link, withRouter } from 'react-router';
import FriendButton from './friend_button';



class User extends React.Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.user_id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.user_id !== nextProps.params.user_id) {
      this.props.fetchUser(nextProps.params.user_id);
    }
  }

  render() {

    return (
      <div className="user">
        <div className="user-detail">
          <h2 className="user-header">
            {this.props.user.first_name} {this.props.user.last_name}
             <small> @{this.props.user.username}</small>
          </h2>
          <div className="member-since">
            member since: {this.props.user.member_since}
          </div>
          <div className="friend-button">
            <FriendButton />
          </div>
        </div>
        <div className="friends">
          <h3 className="friends-list-header">Friends</h3>
          <ul className="friends-list">
            {this.props.user.friendships.friends.map((friend) => (
              <li key={friend.id}>
                <Link key={friend.id} to={`/${friend.id}`}>{friend.username}</Link>
              </li>
            ))}
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }

}

export default User;
