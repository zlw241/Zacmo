import React from 'react';
import { Link, withRouter } from 'react-router';
import { hashHistory } from 'react-router';
import FriendsList from '../friends/friends_list';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.user;
    // this.toggleTab = this.toggleTab.bind(this);
    this.state = {
      friendList: "accepted"
    }
  }


  componentWillMount() {
    this.props.fetchUser(this.props.currentUser.id)
  }


  render() {
   if (!this.props.currentUser) { return null }

    return (
      <div className="profile">
        <div className="profile-detail">
          <h1>{this.props.user.first_name} {this.props.user.last_name}
            <small>  <Link to="/account/settings">Edit</Link>  </small>
          </h1>
          <div>{this.props.user.username}</div>
          <div>Balance: {this.props.user.balance}</div>
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
