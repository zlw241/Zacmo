import React from 'react';
import { Link, withRouter } from 'react-router';


class LinkedAccounts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fundingToken: null,
      routingNumber: "",
      accountNumber: "",
      name: "",
      type: "Checking",
      logs: {
        error: "",
        response: "",
      },
      loading: "loader"
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAPIResponse = this.handleAPIResponse.bind(this);
    this.initializeIAV = this.initializeIAV.bind(this);
  }

  componentWillMount() {
    this.props.fetchToken().then(
      (res) => this.initializeIAV(res.token.iavToken)
    )
  }

  initializeIAV(token) {
    dwolla.iav.start(token, {
      container: 'iavContainer',
      stylesheets: [
        // 'http://localhost:3000/assets/application.self-8478822dee13e342a9069480c2104c16497502f44d0c842b52c49f16a3e729bd.css?body=1'
      ],
      microDeposits: false,
      fallbackToMicroDeposits: true,
      backButton: true,
      subscriber: ({ currentPage, error }) => {
          this.setState({loading: "hidden"});
          console.log('currentPage:', currentPage, 'error:', JSON.stringify(error))
        }
    }, function(err, res) {
      console.log('Error: ' + JSON.stringify(err) + ' -- Response: ' + JSON.stringify(res));
    });
  }

  showSearch() {
    if (this.state.loading === "loader") {
      return "hidden"
    } else {
      return ""
    }
  }



  handleInput(e) {
    e.preventDefault()

    const field = e.currentTarget.id;
    this.setState({
      [field]: e.currentTarget.value
    });
    // console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    const token = this.state.fundingToken;
    const bankInfo = {
      routingNumber: this.state.routingNumber,
      accountNumber: this.state.accountNumber,
      name: this.state.name,
      type: this.state.type
    };
    dwolla.fundingSources.create(token, bankInfo, this.handleAPIResponse);
  }

  handleAPIResponse(err, res) {
    debugger
    this.setState({
      logs: {
        error: err,
        response: res
      }
    })
  }

  render() {
    // debugger

    return (

      <div className="dwollaContainer">
        <div className={this.state.loading}>
        </div>
        <div id="iavContainer" className={this.showSearch()}>
        </div>
      </div>
    );

  }
}

export default withRouter(LinkedAccounts);


// <div className="signup-form-container">
//   <div className="signup-form link-account">
//     <form className="user-form" onSubmit={this.handleSubmit}>
//
//       <div className="signup-form-header">
//         <h2>Link a Bank Account</h2>
//       </div>
//
//       <div className="signup-form-item">
//         <div className="signup-form-label">Routing Number</div>
//         <input
//           className="signup-form-input"
//           id="routingNumber"
//           type="text"
//           onChange={this.handleInput}
//           placeholder="273222226"
//           value={this.state.routingNumber} />
//       </div>
//
//       <div className="signup-form-item">
//         <div className="signup-form-label">Account Number</div>
//         <input
//           className="signup-form-input"
//           id="accountNumber"
//           type="text"
//           onChange={this.handleInput}
//           placeholder="Account number"
//           value={this.state.accountNumber} />
//       </div>
//
//       <div className="signup-form-item">
//         <div className="signup-form-label">Bank Account Name</div>
//         <input
//           className="signup-form-input"
//           id="name"
//           type="text"
//           onChange={this.handleInput}
//           placeholder="Name"
//           value={this.state.bankName} />
//       </div>
//
//       <div className="signup-form-item">
//         <div className="signup-form-label">Account Type</div>
//
//         <select name="type" className="signup-form-input" id="type" value={this.state.accountType} onChange={this.handleInput}>
//           <option value="checking">Checking</option>
//           <option value="savings">Savings</option>
//         </select>
//       </div>
//
//       <div className="signup-form-item">
//         <div className="signup-form-label"></div>
//         <div className="signup-form-submit">
//           <button className="signup-form-input" id="signup-button" type="submit">Add Bank</button>
//         </div>
//       </div>
//     </form>
//     <div id="logs">
//       <div className="error">
//         {JSON.stringify(this.state.logs.error)}
//       </div>
//       <div className="success">
//         {JSON.stringify(this.state.logs.response)}
//       </div>
//     </div>
//   </div>


//
// <div className="link-account">
//   {this.state.fundingToken}
//   <form>
//     <div>
//       <label>Routing number</label>
//       <input type="text" id="routingNumber" placeholder="273222226" />
//     </div>
//     <div>
//       <label>Account number</label>
//       <input type="text" id="accountNumber" placeholder="Account number" />
//     </div>
//     <div>
//       <label>Bank account name</label>
//       <input type="text" id="name" placeholder="Name" />
//     </div>
//     <div>
//       <select name="type" id="type">
//         <option value="checking">Checking</option>
//         <option value="savings">Savings</option>
//       </select>
//     </div>
//     <div>
//       <input type="submit" value="Add Bank" />
//     </div>
//   </form>
//
//   <div id="logs">
//   </div>
// </div>
