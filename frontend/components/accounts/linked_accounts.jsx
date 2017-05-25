import React from 'react';
import { Link, withRouter } from 'react-router';


class LinkedAccounts extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fundingToken: null, errors: [] }
  }

  componentWillMount() {
    // debugger
    this.props.fetchToken().then(
      (res) => {
        this.setState({
          fundingToken: this.props.account.fundingToken
        });
      }
    )
  }

  render() {
    // debugger
    return (
      <div className="link-account">
        {this.state.fundingToken}
        <form>
          <div>
            <label>Routing number</label>
            <input type="text" id="routingNumber" placeholder="273222226" />
          </div>
          <div>
            <label>Account number</label>
            <input type="text" id="accountNumber" placeholder="Account number" />
          </div>
          <div>
            <label>Bank account name</label>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div>
            <select name="type" id="type">
              <option value="checking">Checking</option>
              <option value="savings">Savings</option>
            </select>
          </div>
          <div>
            <input type="submit" value="Add Bank" />
          </div>
        </form>

        <div id="logs">
        </div>
      </div>
    );
  }
}

export default withRouter(LinkedAccounts);
