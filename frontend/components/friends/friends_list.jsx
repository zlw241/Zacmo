import React from 'react';
import { Link, withRouter } from 'react-router';
import FriendButton from './friend_button';
import TransactionModal from '../transaction_modal/transaction_modal';

const FriendsList = ({friendList}) => {
  // debugger
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
            <Link className="friend-list-link" key={friend.id} to={`/home/${friend.id}`}>
              <img className="friend-list-pic" src={friend.profile_pic} />

              <div className="friend-list-username">
                {friend.username}
              </div>
            </Link>
            <div className="friend-list-actions">
              <div className="friend-list-pay">
                <TransactionModal user={friend} size={{width: '50px', height: '30px'}}/>
              </div>
              <div className="friend-list-relationship">
                <FriendButton user={friend} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FriendsList;

// <button className="friend-list-button">
//   <TransactionModal user={friend} />
// </button>

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
