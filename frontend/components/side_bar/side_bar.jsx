import React from 'react';
import { Link, withRouter } from 'react-router';

const Sidebar = () => {
  return (
    <div id="side-nav">
      <h2>Settings</h2>
      <Link to="/home/feed">Feed</Link>
      <Link to="/home/friends">Friends</Link>
      <Link to="/home/settings">Settings</Link>
      <Link to="/home/notifications">Notifications</Link>
      <Link to="/home/accounts">Payments</Link>
    </div>
  )
}


export default Sidebar;
