import React from 'react';
import { Link, withRouter } from 'react-router';


class Friends extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="friends">
        <div className="link-tabs">
          <Link to='/home/friends/existing'>Friends</Link>
          <Link to='/home/friends/pending'>Pending Friends</Link>
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
