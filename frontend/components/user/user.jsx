import React from 'react';
import { Link, withRouter } from 'react-router';
import FriendButton from './friend_button';
import FeedContainer from '../feed/feed_container';


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
        <div id="user-header">
          <div id="user-name">{this.props.user.first_name} {this.props.user.last_name}</div>
          <div id="user-username">@{this.props.user.username}</div>
          <div id="user-friend-button">
            <FriendButton user={this.props.user}/>
          </div>
        </div>


        <div id="user-main">
          <div className="friends">
            <h3 className="friends-list-header">Friends</h3>
            <ul className="friends-list">
              {this.props.user.friendships.friends.map((friend) => (
                <li key={friend.id}>
                  <Link key={friend.id} to={`/home/${friend.id}`}>{friend.username}</Link>
              
                </li>
              ))}
            </ul>
          </div>
        </div>


      </div>
    );
  }

}

export default User;


// <h2 className="user-header">
// {this.props.user.first_name} {this.props.user.last_name}
// <small> @{this.props.user.username}</small>
// </h2>
// <div className="member-since">
// member since: {this.props.user.member_since}
// </div>
// <div className="friend-button">
// <FriendButton />
// </div>
