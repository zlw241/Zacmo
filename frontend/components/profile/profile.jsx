import React from 'react';
import { Link, withRouter } from 'react-router';
import { hashHistory } from 'react-router';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (!this.props.currentUser) { return null }
    return (
      <div className="profile">
        <h1>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h1>
        <div>{this.props.currentUser.username}</div>
        <div>{this.props.currentUser.email}</div>
        <Link to="/account/edit">Edit</Link>
        <Link to="/account/banks">Banks and Cards</Link>
        {this.props.children}
      </div>
    );
  }
}


export default Profile;
