import React from 'react';
import { Link, withRouter } from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let navItems = (
      <div className="nav">
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
    );


    if (this.props.currentUser) {
      const username = this.props.currentUser.username;
      navItems = (
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/">{username}</Link>
          <button onClick={this.props.logout}>Logout</button>
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

export default Nav;
