import React from 'react';
import { Link, withRouter } from 'react-router';
import { hashHistory } from 'react-router';


class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (!this.props.currentUser) { return null }
    return (
      <div className="account">
        <h2>Settings</h2>
        <Link to="/account/settings">Profile</Link>
        <Link to="/account/payments">Payments</Link>
        {this.props.children}
      </div>
    );
  }
}


export default Account;
