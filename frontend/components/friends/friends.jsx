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

  // componentWillReceiveProps(nextProps) {
  //   debugger
  // }

  activeTab(tab) {
    if (tab === this.props.location.pathname) {
      return "friends-button-container active"
    } else {
      return "friends-button-container"
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
      <div id="friends">
        <div className="friends-header">

          <div className={this.activeTab("/home/friends")}>
            <Link to='/home/friends'>
              <button>
                <div className="friend-status">Friends</div>
                <div className="friend-count">{this.props.friends.length}</div>
              </button>
            </Link>
          </div>

          <div className={this.activeTab("/home/friends/pending")}>
            <Link to='/home/friends/pending'>
              <button>
                <div className="friend-status">Pending</div>
                <div className="friend-count">{this.props.pending.length}</div>
              </button>
            </Link>
          </div>

          <div className={this.activeTab("/home/friends/requested")}>
            <Link to='/home/friends/requested'>
              <button>
                <div className="friend-status">Requested</div>
                <div className="friend-count">{this.props.requested.length}</div>
              </button>
            </Link>
          </div>

        </div>
        <div className="friends-children">
          {this.props.children}
        </div>
      </div>
    );

  }

}

export default Friends;
// <div id="friends">
//   <div className="friends-header">
//     <div className="friends-button-container">
//       <button>Public</button>
//     </div>
//     <div className="feed-button-container">
//       <button>Friends</button>
//     </div>
//     <div className="feed-button-container">
//       <button>Mine</button>
//     </div>
//   </div>
//   <TransactionListContainer />
// </div>
