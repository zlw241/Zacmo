import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createComment } from '../../actions/transaction_actions';
import CommentList from '../comment/comment_list';


class TransactionDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { body: "" }
    this.addComment = this.addComment.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  addComment(e) {
    e.preventDefault()
    const newComment = Object.assign({}, this.state)
    newComment.transaction_id = this.props.transaction.id
    this.props.createComment(newComment).then(
      () => this.setState({body: ""})
    )
    // this.setState({
    //   body: ""
    // });
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

    return (
      <div className="transaction-detail">
        <div className="transaction-header">
          <div className="transaction-summary">
            <span className="transaction-user">{this.props.transaction.user.username}</span>
            <span className="transaction-type"> paid </span>
            <span className="transaction-user">{this.props.transaction.recipient.username}</span>
          </div>

          <span className="transaction-amount">{transactionAmount}</span>
        </div>
        <div className="likes">[likes]</div>
        <div className="transaction-memo">{this.props.transaction.memo}</div>
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
  createComment: (comment) => dispatch(createComment(comment))
});


export default connect(null, mapDispatchToProps)(TransactionDetail);


// const TransactionDetail = ({transaction, currentUser, addComment}) => {
//
//   if (!currentUser) { return null }
//
//   let transactionAmount = null;
//   if (transaction.amount) {
//     if (transaction.recipient.id === currentUser.id) {
//       transactionAmount = (
//         <span className="transaction-amount green">
//           +${transaction.amount}
//         </span>
//       );
//     } else {
//       transactionAmount = (
//         <span className="transaction-amount red">
//           -${transaction.amount}
//         </span>
//       );
//     }
//   }
//
//   return (
//     <div className="transaction-detail">
//       <div className="transaction-header">
//         <div className="transaction-summary">
//           <span className="transaction-user">{transaction.user.username}</span>
//           <span className="transaction-type"> paid </span>
//           <span className="transaction-user">{transaction.recipient.username}</span>
//         </div>
//
//         <span className="transaction-amount">{transactionAmount}</span>
//       </div>
//       <div className="likes">[likes]</div>
//       <div className="transaction-memo">{transaction.memo}</div>
//       <div className="comments">
//         [comments]
//       </div>
//       <div className="add-comment">
//         <form onSubmit={addComment}>
//           <input type="text" placeholder="Add a comment..."/>
//         </form>
//       </div>
//     </div>
//   );
// }
