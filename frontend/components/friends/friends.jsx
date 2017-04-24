import React from 'react';
import { Link, withRouter } from 'react-router';

class Friends extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchUser(this.props.currentUser.id)
  }

  // componentDidUpdate() {
  //   this.props.fetchUser(this.props.currentUser.id)
  // }
  //
  // componentDidMount() {
  //   this.props.fetchUser(this.props.currentUser.id);
  // }

  render() {
    if (!this.props.currentUser) { return null }
    return (
      <div className="friends">
        <div className="link-tabs">
          <Link to='/home/friends'>Friends {this.props.friends.length || ""}</Link>
          <Link to='/home/friends/pending'>Pending {this.props.pending.length || ""}</Link>
          <Link to='/home/friends/requested'>Requested {this.props.requested.length || ""}</Link>
        </div>

        <div className="friends-children">
          {this.props.children}
        </div>
      </div>
    );

  }

}

export default Friends;
