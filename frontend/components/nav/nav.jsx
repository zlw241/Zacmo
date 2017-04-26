import React from 'react';
import { Link, withRouter, hashHistory} from 'react-router';
import TransactionModal from '../transaction_modal/transaction_modal';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => {

      this.props.router.push('/')
    })
  }


  render() {

    let navItems = (
      <div className="nav">

        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Create Zacmo Account</Link>
      </div>
    );

    if (this.props.currentUser) {
      const username = this.props.currentUser.username;
      navItems = (
        <div className="nav">
          <TransactionModal />
          <Link to="/home/profile">
            <i className="fa fa-lg fa-user-o" aria-hidden="true"></i>
          </Link>
          <button className="logout-button" onClick={this.handleLogout}>Logout</button>
        </div>
      );
    }

    return (
      <nav>
        {navItems}
      </nav>
    );
  }
};

export default withRouter(Nav);

// <Link to="/home/feed">
//   <i className="fa fa-2x fa-home" aria-hidden="true"></i>
// </Link>
