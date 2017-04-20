import React from 'react';

const DemoFeedItem = ({item}) => {

  return (

    <div className="demo-feed-item">
      <div className="demo-feed-item-heading">
        <span className="demo-feed-user">{item.user1}</span>
        <span className="demo-item-action"> paid </span>
        <span className="demo-feed-user">{item.user2}</span>
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
  )
}

export default DemoFeedItem;
