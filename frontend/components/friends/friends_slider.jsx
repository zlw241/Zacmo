import React from 'react';
import { link, withRouter } from 'react-router';
import moment from 'moment';


class FriendSlider extends React.Component {
  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div className="fs-container">
      <div className="friend-slider scroll">
        {this.props.friends.map((friend) => (
          <div key={friend.id} className="friend-slider-item scroll-item">
            <img src={friend.image_url} className="friend-slider-img" />
            <div className="friend-slider-username">
              {friend.username}
            </div>
          </div>
        ))}
      </div>
      </div>

    );
  }

}


export default FriendSlider;
