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
        <h1>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h1>
        <div>{this.props.currentUser.username}</div>
        <div>{this.props.currentUser.email}</div>
        <Link to="/account/settings">Settings</Link>
        <Link to="/account/payments">Payments</Link>
        {this.props.children}
      </div>
    );
  }
}


export default Account;
