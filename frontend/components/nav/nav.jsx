import React from 'react';
import { Link, withRouter } from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.currentUser) {
      return (
        <div>
          <p>Hello! {this.props.currentUser.username}</p>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <nav>
          <Link to='/login'>Log In</Link>
          <br />
          <Link to='/signup'>Sign Up</Link>
        </nav>
      );
    }
  }
};

export default Nav;
