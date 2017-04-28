import React from 'react';
import { Link, withRouter } from 'react-router';
import moment from 'moment';


class FriendSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgClass: "friend-slider-img"
    }

    this.spinTime = this.spinTime.bind(this);
  }

  spinTime() {
    if (this.state.imgClass === "friend-slider-img") {
      this.setState({
        imgClass: "spinner friend-slider-img"
      });
    } else {
      this.setState({
        imgClass: "friend-slider-img"
      });
    }
  }

  render() {
    return (

      <div className="friend-slider scroll" onDoubleClick={this.spinTime}>
        {this.props.friends.map((friend) => (
          <div key={friend.id} className="friend-slider-item scroll-item">
            <Link to={`/home/${friend.id}`}>
              <img src={friend.image_url} className={this.state.imgClass} />
            </Link>
            <div className="friend-slider-username">
              <Link to={`/home/${friend.id}`}>{friend.username}</Link>
            </div>
          </div>
        ))}
      </div>

    );
  }

}


export default FriendSlider;
