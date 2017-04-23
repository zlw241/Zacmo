import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

class ExistingFriends extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <ul>
        {this.props.existingFriends.map((friend) => (
          <li key={friend.id}>
            <Link key={friend.id} to={`/home/${friend.id}`}>{friend.username}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  existingFriends: state.user.friendships.friends
})



export default connect(mapStateToProps)(ExistingFriends);
