import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';



const Sidebar = () => {
  if (!currentUser) { return null }
  return (
    <div id="side-bar">
      <div id="sidenav-header">
        <div id="sidenav-name">{currentUser.first_name} {currentUser.last_name}</div>
        <div id="sidenav-username">@{currentUser.username}</div>
        <div id="sidenav-balance">${currentUser.balance}.00</div>
      </div>
      <div id="side-nav">
        <Link to="/home/feed">Feed</Link>
        <Link to="/home/profile">Profile</Link>
        <Link to="/home/friends">Friends</Link>
        <Link to="/home/settings">Settings</Link>
        <Link to="/home/accounts">Linked Accounts</Link>
        <Link to="/home/notifications">Notifications</Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});


export default connect(mapStateToProps)(Sidebar);
