import React from 'react';
import { Link, withRouter } from 'react-router';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.activeTab = this.activeTab.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.currentUser.id)
  }

  componentWillReceiveProps(nextProps) {

  }

  activeTab(tab) {
    if (tab === this.props.location.pathname) {
      return "active link-tab-item"
    } else {
      return "link-tab-item"
    }
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
        <h2>Your Friends</h2>
        <div className="link-tabs">
          <Link to='/home/friends' className={this.activeTab("/home/friends")}>
            <div>Friends</div>
            <div className="friend-count">{this.props.friends.length}</div>
          </Link>
          <Link to='/home/friends/pending' className={this.activeTab("/home/friends/pending")}>
          Pending
          <div className="friend-count">{this.props.pending.length}</div>
          </Link>
          <Link to='/home/friends/requested' className={this.activeTab("/home/friends/requested")}>
          <div>Requested</div>
          <div className="friend-count">{this.props.requested.length}</div>
          </Link>
        </div>

        <div className="friends-children">
          {this.props.children}
        </div>
      </div>
    );

  }

}

export default Friends;
