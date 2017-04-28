import React from 'react';
import { Link, withRouter } from 'react-router';
import moment from 'moment';
import FriendButton from '../friends/friend_button';
import UserTransactionListContainer from './user_transaction_list_container';
import FriendSlider from '../friends/friends_slider';

class User extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: this.props.user,
      showFriends: {
        display: 'none'
      },
      arrow: 'down',
      buttonText: "show friends"
    }

    this.toggleFriendSlider = this.toggleFriendSlider.bind(this);
    this.toggleArrow = this.toggleArrow.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.user_id)

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.user_id !== nextProps.params.user_id) {
      this.props.fetchUser(nextProps.params.user_id);
    } else {

    }
  }

  toggleArrow() {
    if (this.state.arrow === 'down') {
      return (
        <i className="fa fa-arrow-down" aria-hidden="true"></i>
      )
    }
    return (
      <i className="fa fa-arrow-up" aria-hidden="true"></i>
    )
  }

  toggleFriendSlider() {
    if (this.state.showFriends.display === 'none') {
      this.setState({
        showFriends: {},
        arrow: 'up',
        buttonText: "hide friends"
      });
    } else {
      this.setState({
        showFriends: {
          display: 'none'
        },
        arrow: 'down',
        buttonText: "show friends"
      });
    }
  }

  render() {
    if (this.props.user.id) {
      return (
        <div className="user">

          <div id="user-header">
            <div className="user-pic-container">
              <img className="user-pic" src={this.props.user.image_url} />

              <div className="action-buttons">
                <div className="show-friends-button">
                  <button onClick={this.toggleFriendSlider}>{this.toggleArrow()} {this.state.buttonText}</button>
                </div>
              </div>
            </div>
            <div className="user-details">
              <div className="user-handles">
                <div id="user-name">
                  <div className="user-first-and-last">
                    <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
                  </div>
                  <div id="user-friend-button">
                    <FriendButton user={this.props.user}/>
                  </div>
                </div>
                <div className="username-and-created-at">
                  <div id="user-username">@{this.props.user.username}</div>
                  <div id="member-since">
                    <small>joined {moment(this.props.user.created_at).fromNow()}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="friends-slider" style={this.state.showFriends}>
            <FriendSlider friends={this.props.user.friendships.friends} />
          </div>

          <div id="user-main">
            <UserTransactionListContainer user={this.props.user}/>
          </div>
        </div>
      );
    }
    return (
      <div className="spinner"></div>
    )
  }
}

export default User;


// <div className="action-buttons">
//   <div className="show-friends-button">
//     <button onClick={this.toggleFriendSlider}>{this.toggleArrow()} {this.state.buttonText}</button>
//   </div>
// </div>
