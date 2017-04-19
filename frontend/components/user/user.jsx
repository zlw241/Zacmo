import React from 'react';
import { Link, withRouter } from 'react-router';

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchUser(parseInt(this.props.params.user_id));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.user_id !== nextProps.params.user_id) {
      this.props.fetchUser(nextProps.params.user_id);
    }
  }

  render() {

    return (
      <div className="user">
        <Link to="/1">1</Link>
        <Link to="/5">5</Link>
        <Link to="/12">12</Link>
        <Link to="/13">13</Link>
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
