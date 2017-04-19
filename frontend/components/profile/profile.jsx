import React from 'react';
import { Link, withRouter } from 'react-router';
import { hashHistory } from 'react-router';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.loggedInStatus = this.loggedInStatus.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // console.log('updated');
    // this.redirectIfLoggedOut();

    if (nextProps.loggedIn === false) {
      this.props.router.push("/");
      // return hashHistory.push("/");
    }

  }

  // redirectIfLoggedOut() {
  //
  //   if (!this.props.currentUser) {
  //
  //     hashHistory.push('/');
  //   }
  // }

  loggedInStatus() {
    if (this.props.loggedIn) {
      return "logged in";
    } else {
      return "logged out";
    }
  }

  render() {
    debugger
    if (!this.props.currentUser) { return null }
    return (
      <div className="profile">
        <p>{this.loggedInStatus()}</p>
        <h1>{this.props.currentUser.first_name}</h1>
      </div>
    );
  }
}


export default Profile;
