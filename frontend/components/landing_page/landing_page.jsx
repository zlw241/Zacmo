import React from 'react';
import { Link, withRouter } from 'react-router';
import DemoFeedItem from './demo_feed_item';
import Iphone from './iphone';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToSignup = this.redirectToSignup.bind(this);
  }

  redirectToSignup() {
    this.props.router.push("/signup")
  }

  render() {

    return (
      <div className="landing-page-container">

        <Iphone attrs={{scale: 'scale-down', speed: 2000}} />
        <Iphone attrs={{scale: 'rotate-right', speed: 1500}} />

        <div className="splash-welcome">
          <div className="welcome-content">
            <h1>Send Money to your friends.</h1>
            <button onClick={this.redirectToSignup} className="splash-page-signup">Sign up now</button>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
