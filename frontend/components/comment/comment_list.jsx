import React from 'react';
import { Link, withRouter } from 'react-router';


class CommentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numComments: 5,
    }

    this.showComments = this.showComments.bind(this);
    this.lessComments = this.lessComments.bind(this);
    this.moreComments = this.moreComments.bind(this);
    this.loadMoreComments = this.loadMoreComments.bind(this);
    this.commentsAsArray = this.commentsAsArray.bind(this);
  }

  moreComments() {
    const previousNum = this.state.numComments;
    let x = 0
    const interval = setInterval(() => {
      if (++x === 5) {
        window.clearInterval(interval);
      };
      this.setState({
        numComments: this.state.numComments + 1
      })
    }, 100)
    // this.setState({
    //   numComments: previousNum + 5
    // });
  }

  lessComments() {
    this.setState({
      numComments: 5
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
      if (this.state.numComments > 5) {
        return (
          <div className="comment-actions">
            <div onClick={this.moreComments} className="load-more-comments">
              Load more comments
            </div>
            <div onClick={this.lessComments} className="show-less-comments">
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
          </div>
        );
      }
      return (
        <div className="comment-actions">
          <div onClick={this.moreComments} className="load-more-comments">
            Load more comments
          </div>
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
