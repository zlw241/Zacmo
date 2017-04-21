import React from 'react';
import { Link, withRouter } from 'react-router';


class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {friends: []}
    this.toggleTab = this.toggleTab.bind(this)
  }

  componentWillReceiveProps(friends) {
    this.setState({friends: friends})

  }


  toggleTab(e) {
    this.setState({friends: this.props.friendships[e.currentTarget.value]})
  }


  render() {
//     return (
//       <div className="friend-tabs">
//         <div className="tabs">
//           <div className="accepted">
//             <button value="accepted" onClick={this.toggleTab}>Friends</button>
//           </div>
//           <div className="pending">
//             <button value="pending" onClick={this.toggleTab}>Pending</button>
//           </div>
//           <div className="requested">
//             <button value="requested" onClick={this.toggleTab}>Requests</button>
//           </div>
//         </div>
//         <ul>
//           {this.state.friends.map((friend) => (
//             <li key={friend.id}>
//               <Link key={friend.id} to={`/${friend.id}`}>{friend.username}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

    return (
      <div className="friend-tabs">
        <ul>
          {this.props.friends.map((friend) => (
            <li key={friend.id}>
              <Link key={friend.id} to={`/${friend.id}`}>{friend.username}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default FriendsList;



// <div className="tabs">
// <div className="accepted">
// <button value="accepted" onClick={this.toggleTab}>Friends</button>
// </div>
// <div className="pending">
// <button value="pending" onClick={this.toggleTab}>Pending</button>
// </div>
// <div className="requested">
// <button value="requested" onClick={this.toggleTab}>Requests</button>
// </div>
// </div>
