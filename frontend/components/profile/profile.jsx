import React from 'react';
import { Link, withRouter } from 'react-router';
import { hashHistory } from 'react-router';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.currentUser.id)
  }

  render() {
    if (!this.props.currentUser) { return null }

    return (
      <div className="profile">
        <h1 id="red">{this.props.user.first_name} {this.props.user.last_name}</h1>
        <div>{this.props.user.username}</div>
        <div>{this.props.user.email}</div>
        <Link to="/account/settings">Edit</Link>
        {this.props.children}
      </div>
    );
  }
}


export default Profile;
