import React from 'react';
import { Link, withRouter } from 'react-router';


const Likes = ({likes}) => {
  if (likes) {
    return (
      <div className="likes">
        {Object.values(likes).length} like
      </div>
    )
  } else {
    return null;
  }
};

export default Likes;
