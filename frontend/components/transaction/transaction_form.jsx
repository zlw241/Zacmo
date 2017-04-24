import React from 'react';
import { Link, withRouter } from 'react-router';

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipient: "",
      amount: "",
      memo: "",
      showForm: {display: 'none'}
    }

    this.checkTransactionValidity = this.checkTransactionValidity.bind(this)
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  checkTransactionValidity() {
    // console.log(this.state.amount.split(" ")[0].splice(1))
  }

  showForm() {
    this.setState({
      showForm: {}
    });
  }

  handleInput(e) {
    const field = e.currentTarget.name;
    this.setState({
      [field]: e.currentTarget.value
    });
    console.log(this.state);
  }

  clearForm() {
    this.setState({
      recipient: "",
      amount: "",
      memo: "",
      showForm: {display: 'none'}
    });
  }

  handleSubmit(e) {
    const recipient_username = this.state.recipient;
    const amount = this.state.amount;
    const memo = this.state.memo;

    const newTransaction = {memo, amount, recipient_username }
    this.props.createTransaction(newTransaction)
    this.clearForm();
  }

  render() {
    return (
      <div id="transaction-form">
        <div className={this.checkTransactionValidity()}></div>
        <form>
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
                  onFocus={this.showForm} />
              </div>
              <div className="transaction-recipient">
                <input
                  name="recipient"
                  placeholder="Pay or charge someone"
                  type="search"
                  value={this.state.recipient}
                  onChange={this.handleInput}
                  onFocus={this.showForm} />
              </div>
            </div>
            <div className="memo" style={this.state.showForm}>
              <textarea name="memo" id="transaction-memo"
                placeholder="for ice-cream!"
                value={this.state.memo}
                onChange={this.handleInput}></textarea>
              <div className="memo-bottom hidden">
                <div className="select-visibility">
                  <select>
                    <option>Public</option>
                    <option>Friends</option>
                    <option>Private</option>
                  </select>
                </div>
                <div onClick={this.handleSubmit} className="submit-transaction">Pay</div>
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
