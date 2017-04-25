import React from 'react';
import { Link, withRouter } from 'react-router';

const CommentList = ({comments}) => {
  if (comments) {
    return (
      <div className="comment-list">
        <ul>
          {Object.values(comments).map((comment) => (
            <li className="comment" key={comment.id}>
              <div className="comment-user">
                <Link to={`/home/${comment.user.id}`}>{comment.user.username}</Link>
              </div>
              <div className="comment-body">{comment.body}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};


export default CommentList;
