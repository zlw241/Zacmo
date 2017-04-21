import React from 'react';
import { Link, withRouter } from 'react-router';
import { hashHistory } from 'react-router';


class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if (!this.props.currentUser) { return null }
    return (
      <div className="home">
        <div className="side-nav">
          <h2>Settings</h2>
          <Link>Feed</Link>
          <Link to="/account/settings">Profile</Link>
          <Link to="/account/payments">Payments</Link>
          <Link>Settings</Link>
        </div>

        <div className="home-content">
        {this.props.children}
        </div>
      </div>
    );
  }
}


export default Account;
