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
  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  render() {
    if (!this.props.currentUser) { return null }
    return (
      <div className="friends">
        <div className="link-tabs">
          <Link to='/home/friends'>Friends</Link>
          <Link to='/home/friends/pending'>Pending</Link>
          <Link to='/home/friends/requested'>Requested</Link>
        </div>

        <div className="friends-children">
          {this.props.children}
        </div>
      </div>
    );

  }

}

export default Friends;
