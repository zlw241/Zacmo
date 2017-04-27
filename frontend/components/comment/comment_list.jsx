import React from 'react';
import { Link, withRouter } from 'react-router';


class CommentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numComments: 5,
    }

    this.showComments = this.showComments.bind(this);
    this.moreComments = this.moreComments.bind(this);
    this.loadMoreComments = this.loadMoreComments.bind(this);
    this.commentsAsArray = this.commentsAsArray.bind(this);
  }

  moreComments() {
    const previousNum = this.state.numComments;
    this.setState({
      numComments: previousNum + 5
    });
  }

  commentsAsArray() {
    return Object.values(this.props.comments);
  }

  showComments() {
    const commentArray = this.commentsAsArray()
    const len = commentArray.length;
    if (len > 5) {
      if (len - this.state.numComments <= 0) {
        return commentArray;
      }
      return commentArray.slice(len - this.state.numComments);
    }
    return commentArray;
  }

  loadMoreComments() {
    if (this.commentsAsArray().length > 5) {
      return (
        <div onClick={this.moreComments} className="load-more-comments">
          Load more comments
        </div>
      );
    } else {
        return null;
      }
  }



  render() {

    if (this.props.comments) {
      return (
        <div className="comment-list">
          {this.loadMoreComments()}
          <ul>
            {this.showComments().map((comment) => (
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

  }
}




export default CommentList;
