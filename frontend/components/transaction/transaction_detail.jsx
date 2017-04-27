import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createComment, addLike, removeLike } from '../../actions/transaction_actions';
import CommentList from '../comment/comment_list';
import Likes from '../like/likes.jsx';

class TransactionDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { body: "" }
    this.addComment = this.addComment.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.like = this.like.bind(this);
  }

  like() {
    if (this.props.transaction.liked_by_user) {
      const like = Object.values(this.props.transaction.likes).filter((like) => (
        like.user.id === this.props.currentUser.id
      ), this)[0]
      this.props.removeLike(like.id);
    } else {
      this.props.addLike(this.props.transaction.id)
    }
  }

  addComment(e) {
    e.preventDefault()
    const newComment = Object.assign({}, this.state)
    const transactionId = this.props.transaction.id
    this.props.createComment(transactionId, newComment).then(
      () => this.setState({body: ""})
    )
  }

  handleInput(e) {
    this.setState({
      body: e.currentTarget.value
    });
  }

  render() {
    if (!this.props.currentUser) { return null }

    let transactionAmount = null;
    if (this.props.transaction.amount) {
      if (this.props.transaction.recipient.id === this.props.currentUser.id) {
        transactionAmount = (
          <span className="transaction-amount green">
            +${this.props.transaction.amount}
          </span>
        );
      } else {
        transactionAmount = (
          <span className="transaction-amount red">
            -${this.props.transaction.amount}
          </span>
        );
      }
    }

    let like = `${this.props.transaction.num_likes} likes`;
    if (this.props.transaction.num_likes === 0) {
      like = `Be the first person to like this`;
    }
    if (this.props.transaction.num_likes === 1) {
      like = "1 like";
    }

    let likeButton = (
      <i className="fa fa-heart-o" aria-hidden="true"></i>
    )
    if (this.props.transaction.liked_by_user === true) {
      likeButton = (
        <i className="fa fa-heart liked" aria-hidden="true"></i>
      )
    }

    return (
      <div className="transaction-detail">
        <div className="transaction-main">
          <div className="transaction-pic">
            <img className="user-profile-pic" src={this.props.transaction.user.profile_pic} />
          </div>
          <div className="transaction-header">
            <div className="transaction-title">
              <div className="transaction-summary">
                <Link to={`/home/${this.props.transaction.user.id}`}>
                  {this.props.transaction.user.username}
                </Link>
                <span className="transaction-type"> paid </span>
                <Link to={`/home/${this.props.transaction.recipient.id}`}>
                  {this.props.transaction.recipient.username}
                </Link>
              </div>

              <span className="transaction-amount">{transactionAmount}</span>
            </div>

            <div className="transaction-memo">{this.props.transaction.memo}</div>
          </div>
        </div>



        <div className="likes">

          <div onClick={this.like} className="like-button">
            {likeButton}
          </div>

          <div className="likes-count">
            {like}
          </div>
        </div>
        <div className="comments">
          <CommentList comments={this.props.transaction.comments} />
        </div>
        <div className="add-comment">
          <form onSubmit={this.addComment}>
            <input onChange={this.handleInput}
              type="text"
              placeholder="Add a comment..."
              value={this.state.body} />
          </form>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  createComment: (transactionId, comment) => dispatch(createComment(transactionId, comment)),
  addLike: (like) => dispatch(addLike(like)),
  removeLike: (likeId) => dispatch(removeLike(likeId))
});


export default connect(null, mapDispatchToProps)(TransactionDetail);
