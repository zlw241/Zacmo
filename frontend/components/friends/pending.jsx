import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

class PendingFriends extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="friend-tabs">
        <ul>
          {this.props.pendingFriends.map((friend) => (
            <li key={friend.id}>
              <Link key={friend.id} to={`/home/${friend.id}`}>{friend.username}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pendingFriends: state.user.friendships.pending_friends
});

const mapDispatchToProps = () => ({

});


export default connect(mapStateToProps)(PendingFriends);
