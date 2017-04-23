import React from 'react';
import { Link, withRouter } from 'react-router';
import { hashHistory } from 'react-router';
import Sidebar from '../side_bar/side_bar';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if (!this.props.currentUser) { return null }
    return (
      <div className="app-container">
        <div id="transaction-form">Form to create transactions between friends will go here</div>
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
