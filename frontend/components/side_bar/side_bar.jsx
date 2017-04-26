import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import TransactionModal from '../transaction_modal/transaction_modal';


const Sidebar = ({currentUser, router}) => {

  const sideNavClass = (path) => {
    if (path === router.location.pathname) {
      return "sidenav-active";
    } else {
      return "sidenav-link";
    }
  }

  if (!currentUser) { return null }
  return (
    <div id="side-bar">
      <div id="sidenav-header">
        <div className="side-nav-user">
          <div id="sidenav-name">{currentUser.first_name} {currentUser.last_name}</div>
          <div id="sidenav-username">@{currentUser.username}</div>
          <div id="sidenav-balance">${currentUser.balance}.00</div>
        </div>
        <div className="pay-modal">
          <TransactionModal />
        </div>
      </div>
      <div id="side-nav">
        <Link className={sideNavClass("/home/feed")} to="/home/feed">
          Feed
        </Link>
        <Link className={sideNavClass("/home/profile")} to="/home/profile">
          Profile
        </Link>
        <Link className={sideNavClass("/home/friends")} to="/home/friends">
          Friends
        </Link>
        <Link className={sideNavClass("/home/settings")} to="/home/settings">
          Settings
        </Link>
        <Link className={sideNavClass("/home/accounts")} to="/home/accounts">
          Linked Accounts
        </Link>
        <Link className={sideNavClass("/home/notifications")} to="/home/notifications">
          Notifications
        </Link>
        <Link className={sideNavClass("/home/test")} to="/home/test">
          Test
        </Link>
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   currentUser: state.session.currentUser
// });


// export default connect(mapStateToProps)(Sidebar);
export default withRouter(Sidebar);
