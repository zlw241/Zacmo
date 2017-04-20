import React from 'react';
import { Link, withRouter } from 'react-router';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing-page-container">
        <div className="splash-img">
          <img src={window.iphoneSplashImg}/>
        </div>

        <div className="splash-welcome">
          <div className="welcome-content">
            <h1>Send Money and make purchases.</h1>
            <button className="splash-page-signup">Sign up now</button>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
