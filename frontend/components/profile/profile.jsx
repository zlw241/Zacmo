import React from 'react';
import { Link, withRouter } from 'react-router';
import moment from 'moment';
import ProfileTransactionListContainer from './profile_transaction_list_container';
import FriendSlider from '../friends/friends_slider';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.user;
    // this.toggleTab = this.toggleTab.bind(this);
    this.state = {
      friendList: "accepted",
      showFriends: {
        display: 'none'
      }
    }
    this.toggleFriendSlider = this.toggleFriendSlider.bind(this);
  }


  componentWillMount() {
    this.props.fetchUser(this.props.currentUser.id)
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.params.user_id !== nextProps.params.user_id) {
  //     this.props.fetchUser(nextProps.params.user_id);
  //   } else {
  //
  //   }
  // }

  toggleFriendSlider() {
    if (this.state.showFriends.display === 'none') {
      this.setState({
        showFriends: {},
      });
    } else {
      this.setState({
        showFriends: {
          display: 'none'
        }
      });
    }
  }


  render() {
    if (!this.props.currentUser) { return null }
    return (
      <div className="user">
        <div id="user-header">
          <div className="user-pic-container">
            <img className="user-pic" src={this.props.user.image_url} />
          </div>
          <div className="user-details">
            <div className="user-handles">
              <div id="user-name">
                <div className="user-first-and-last">
                  <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
                </div>
              </div>
              <div className="username-and-created-at">
                <div id="user-username">
                  @{this.props.user.username}
                </div>
                <div id="member-since">
                  <small>joined {moment(this.props.user.created_at).fromNow()}</small>
                </div>
              </div>
              <div className="action-buttons">
                <div className="show-friends-button">
                  <div onClick={this.toggleFriendSlider}>
                    {this.props.user.friendships.friends.length} friends
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="friends-slider" style={this.state.showFriends}>
          <FriendSlider friends={this.props.currentUser.friendships.friends} />
        </div>

        <div id="user-main">
          <ProfileTransactionListContainer user={this.props.currentUser}/>
        </div>
      </div>
    );
  }
}


export default Profile;
// let friendList;
// switch(this.state.friendList) {
//   case "pending":
//
//   friendList = this.props.user.friendships.pending_friends;
//   debugger
//   case "requested":
//   friendList = (
//     <FriendsList friends={this.props.user.friendships.friend_requests} />
//   );
//   default:
//   friendList = this.props.user.friendships.friends;
// }

//
//
//
// <div className="user-friends">
// <div className="tabs">
// <div className="accepted">
// <button value="accepted" onClick={this.toggleTab}>Friends</button>
// <FriendsList friends={this.props.user.friendships.friends} />
// </div>
// <div className="pending">
// <button value="pending" onClick={this.toggleTab}>Pending</button>
// <FriendsList friends={this.props.user.friendships.pending_friends} />
// </div>
// <div className="requested">
// <button value="requested" onClick={this.toggleTab}>Requests</button>
// <FriendsList friends={this.props.user.friendships.friend_requests} />
// </div>
// </div>
