import React from 'react';
import { Link, withRouter } from 'react-router';

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipient: "",
      amount: "",
      memo: ""
    }

    this.checkTransactionValidity = this.checkTransactionValidity.bind(this)
    this.handleInput = this.handleInput.bind(this);
  }

  checkTransactionValidity() {
    // console.log(this.state.amount.split(" ")[0].splice(1))
  }

  handleInput(e) {
    const field = e.currentTarget.name;
    this.setState({
      [field]: e.currentTarget.value
    });
    console.log(this.state);
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
                  value={this.state.amount} />
              </div>
              <div className="transaction-recipient">
                <input
                  name="recipient"
                  placeholder="Pay or charge someone"
                  type="search"
                  value={this.state.recipient}
                  onChange={this.handleInput} />

              </div>
            </div>
            <div className="memo">
              <textarea id="transaction-memo"></textarea>
              <div className="memo-bottom">
                <div className="select-visibility">
                  <select>
                    <option>Public</option>
                    <option>Friends</option>
                    <option>Private</option>
                  </select>
                </div>
                <div className="submit-transaction">Pay</div>
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
