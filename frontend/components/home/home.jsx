import React from 'react';
import { Link, withRouter } from 'react-router';
import { hashHistory } from 'react-router';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if (!this.props.currentUser) { return null }
    return (
      <div className="home">
        <div className="side-nav">
          <h2>Settings</h2>
          <Link to="/home/feed">Feed</Link>
          <Link to="/home/settings">Settings</Link>
          <Link to="/home/notifications">Notifications</Link>
          <Link to="/home/payments">Payments</Link>
        </div>

        <div className="home-content">
        {this.props.children}
        </div>
      </div>
    );
  }
}


export default Home;
