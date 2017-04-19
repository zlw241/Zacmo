import React from 'react';
import { Link, withRouter } from 'react-router';

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.user_id);
  }

  render() {

    return (
      <div className="user">
        <h1 id="red">{this.props.user.first_name} {this.props.user.last_name}</h1>
        <div>{this.props.user.username}</div>
        <div>{this.props.user.email}</div>
        <Link to="/account/settings">Edit</Link>
        {this.props.children}
      </div>
    );
  }

}

export default User;
