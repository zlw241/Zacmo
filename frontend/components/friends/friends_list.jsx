import React from 'react';
import { Link, withRouter } from 'react-router';


const FriendsList = ({friendList}) => {

  return (
    <div className="friend-list-container">
      <div className="friend-list-header">
        <div className="user-column">
          User
        </div>
        <div className="actions-column">
          Action
        </div>
      </div>
      <ul className="friend-list">
        {friendList.map((friend) => (
          <li className="friend-list-item" key={friend.id}>
            <Link className="friend-list-link" key={friend.id} to={`/${friend.id}`}>
              <div className="friend-list-pic">

              </div>
              <div className="friend-list-username">
                {friend.username}
              </div>
            </Link>
            <div className="friend-list-actions">
              <div className="friend-list-pay">
                <button className="friend-list-button">
                  Pay
                </button>
              </div>
              <div className="friend-list-relationship">
                <button className="friend-list-button">
                  Unfriend
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
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
