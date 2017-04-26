import React from 'react';
import { Link, withRouter } from 'react-router';
import FriendButton from '../friends/friend_button';
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
        </div>
      </div>
    );
  }
}

export default User;
