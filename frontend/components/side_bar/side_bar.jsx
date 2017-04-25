import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';



const Sidebar = ({currentUser}) => {
  if (!currentUser) { return null }
  return (
    <div id="side-bar">
      <div id="sidenav-header">
        <div id="sidenav-name">{currentUser.first_name} {currentUser.last_name}</div>
        <div id="sidenav-username">@{currentUser.username}</div>
        <div id="sidenav-balance">${currentUser.balance}.00</div>
      </div>
      <div id="side-nav">
        <div className="sidenav-link">
          <Link to="/home/feed">Feed</Link>
        </div>
        <div className="sidenav-link">
          <Link to="/home/profile">Profile</Link>
        </div>
        <div className="sidenav-link">
          <Link to="/home/friends">Friends</Link>
        </div>  
        <div className="sidenav-link">
          <Link to="/home/settings">Settings</Link>
        </div>
        <div className="sidenav-link">
          <Link to="/home/accounts">Linked Accounts</Link>
        </div>
        <div className="sidenav-link">
          <Link to="/home/notifications">Notifications</Link>
        </div>
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   currentUser: state.session.currentUser
// });


// export default connect(mapStateToProps)(Sidebar);
export default Sidebar;
