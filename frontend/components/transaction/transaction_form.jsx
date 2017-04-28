import React from 'react';
import { Link, withRouter } from 'react-router';
import TransactionSearchContainer from '../transaction_search/transaction_search_container';

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipient: this.props.user,
      amount: "",
      memo: "",
      visibility: "friends",
      showForm: {display: 'none'},
      characters: 0,
      errors: [],
      showErrors: {display: 'none'}
    }

    this.checkTransactionValidity = this.checkTransactionValidity.bind(this)
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRecipient = this.setRecipient.bind(this);
  }

  checkTransactionValidity() {
    // console.log(this.state.amount.split(" ")[0].splice(1))
    // const errs = merge([], this.state.errors);
    const errs = [];
    if (!this.state.recipient.username || !this.state.recipient.id) {
      errs.push("Invalid recipient")
    }
    if (!this.state.amount) {
      errs.push("amount can't be blank")
    }
    if (isNaN(this.state.amount)) {
      errs.push("not a valid dollar amount")
    }
    if (!this.state.memo) {
      errs.push("memo can't be blank")
    }
    if (errs.length > 0) {
      this.setState({
        errors: errs
      });
      return true
    }
    return false
  }

  handleInput(e) {
    const field = e.currentTarget.name;
    this.setState({
      [field]: e.currentTarget.value
    });
    if (field === "memo") {
      this.setState({
        "characters": e.currentTarget.value.length
      })
    }
  }

  clearForm() {
    this.setState({
      recipient: {
        username: "",
        id: null
      },
      amount: "",
      memo: "",
    });
  }

  setRecipient(user) {
    this.setState({
      recipient: {
        username: user.username,
        id: user.id
      }
    });
  }

  handleSubmit(e) {
    const recipient_username = this.state.recipient.username;
    const amount = this.state.amount;
    const memo = this.state.memo;
    const visibility = this.state.visibility;
    const newTransaction = {memo, amount, recipient_username, visibility }
    if (this.checkTransactionValidity() === true) {
      this.setState({
        showErrors: {}
      });
    } else {
      this.props.createTransaction(newTransaction)
      this.clearForm();
    }
  }

  // <div className={this.checkTransactionValidity()}></div>
  render() {
    return (
      <div id="transaction-form">
        <form>
          <ul className="form-errors" style={this.state.showErrors}>
            {this.state.errors.map((err, i) => (
              <li key={i} className="error">err</li>
            ))}
          </ul>
          <div className="form-fields">
            <div className="form-top">
              <div className="amount-to-pay">
                <div className="dollar">$</div>
                <input
                  name="amount"
                  onChange={this.handleInput}
                  placeholder="Amount"
                  type="search"
                  value={this.state.amount}
                  onFocus={this.showForm}/>
              </div>
              <TransactionSearchContainer recipient={this.state.recipient} setRecipient={this.setRecipient} />
            </div>
            <div className="memo">
              <textarea name="memo" id="transaction-memo"
                placeholder="for ice-cream!"
                value={this.state.memo}
                onChange={this.handleInput}></textarea>
              <div className="memo-bottom">
                <div className="select-visibility">
                  <div className="character-count">
                    {this.state.characters}
                  </div>
                  <select name="visibility" value={this.state.visibility} onChange={this.handleInput}>
                    <option>Friends</option>
                    <option>Private</option>
                  </select>
                  <div className="spacer">
                  </div>
                </div>
                <button onClick={this.handleSubmit} className="submit-transaction">Pay</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TransactionForm;

// <div id="pay-toggle">Pay</div>
// <div id="charge-toggle">Charge</div>

// <div className="transaction-recipient">
//   <input
//     name="recipient"
//     placeholder="Pay or charge someone"
//     type="search"
//     value={this.state.recipient}
//     onChange={this.handleInput}
//     onFocus={this.showForm} />
// </div>
