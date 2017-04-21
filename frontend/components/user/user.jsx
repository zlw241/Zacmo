import React from 'react';
import { Link, withRouter } from 'react-router';

class User extends React.Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.user_id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.user_id !== nextProps.params.user_id) {
      this.props.fetchUser(nextProps.params.user_id);
    }
  }

  render() {
    let friendsWith = null;
    if (this.props.user.friends_with) {
      friendsWith = "yes";
    }

    return (
      <div className="user">
        <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>

        friend? {friendsWith}
        <div>{this.props.user.username}</div>
        <div>{this.props.user.email}</div>
        <Link to="/account/settings">Edit</Link>
        {this.props.children}
      </div>
    );
  }

}

export default User;
