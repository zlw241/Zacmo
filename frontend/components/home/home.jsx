import React from 'react';
import { Link, withRouter } from 'react-router';
import { hashHistory } from 'react-router';
import Sidebar from '../side_bar/side_bar';
import TransactionFormContainer from '../transaction/transaction_form_container';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if (!this.props.currentUser) { return null }
    return (
      <div className="app-container">

        <TransactionFormContainer />

        <div className="home">

          <Sidebar currentUser={this.props.currentUser}/>

          <div className="home-content">
          {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
