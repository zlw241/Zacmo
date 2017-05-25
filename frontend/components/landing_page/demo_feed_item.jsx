import React from 'react';
import moment from 'moment';

const DemoFeedItem = ({item}) => {

  return (

    <div className="demo-feed-item">
      <div className="demo-feed-pic-container">
        <img className="demo-feed-pic" src={item.image_url} />
      </div>
      <div className="demo-feed-main">
        <div className="demo-feed-item-heading">
          <div className="item-heading-left">
            <span className="demo-feed-user">{item.user1}</span>
            <span className="demo-item-action"> paid </span>
            <span className="demo-feed-user">{item.user2}</span>
          </div>
          <div className="item-heading-right">
            <div>{moment().diff(item.timeSince, 'seconds')}s</div>
            <i className="fa fa-clock-o demo-feed-clock" aria-hidden="true"></i>
          </div>
        </div>
        <div className="demo-feed-item-memo">
          {item.memo}
        </div>
        <div className="like-comment">
          <div className="demo-like-link">
            Like
          </div>
          <div className="demo-comment-link">
            Comment
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemoFeedItem;
