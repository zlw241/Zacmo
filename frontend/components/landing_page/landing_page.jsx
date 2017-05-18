import React from 'react';
import { Link, withRouter } from 'react-router';
import DemoFeedItem from './demo_feed_item';
import Iphone from './iphone';
import SessionFormContainer from '../session_form/session_form_container';
import SignupFormContainer from '../session_form/signup_form_container';


class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showingForm: 'login', firstIphone: 'iphoneBehind', secondIphone: 'iphoneInFront', iphones: "iphones" };
    this.redirectToSignup = this.redirectToSignup.bind(this);
    this.animate = this.animate.bind(this);
    this.toggleButton = this.toggleButton.bind(this);

  }

  componentDidMount() {
    document.addEventListener('animationend', () => {
    });
  }

  animate() {

    if (this.state.showingForm === 'login') {
      this.setState({
        secondIphone: "iphoneInFront iphones-animation",
        firstIphone: "iphoneBehind iphones-animation-2",
        iphones: "iphones slide-right",
        showingForm: 'signup'
      });
    } else {
      this.setState({
        secondIphone: "iphoneInFront iphones-animation-2",
        firstIphone: "iphoneBehind iphones-animation",
        iphones: "iphones slide-left",
        showingForm: 'login'
      });
    }

  }

  showingLogin() {
    if (this.state.showingForm === 'login') {
      return ""
    } else {
      return "hidden"
    }
  }

  showingSignup() {
    if (this.state.showingForm === 'signup') {
      return ""
    } else {
      return "hidden"
    }
  }

  redirectToSignup() {
    this.props.router.push("/signup")
  }

  toggleButton() {
    if (this.state.showingForm === 'login') {
      return "Log In";
    } else {
      return "Sign Up";
    }
  }

  render() {

    return (
      <div className="landing-page-container">

        <div className="landing-page-content">

          <div className={this.showingSignup()}>
            <SignupFormContainer animate={this.animate}/>
          </div>

          <div className={this.state.iphones} onClick={this.animate}>
            <Iphone className={this.state.firstIphone} attrs={{ scale: 'scale-down', speed: 2000, iphoneClass: this.state.firstIphone }} />
            <Iphone className={this.state.secondIphone} attrs={{ scale: 'rotate-right', speed: 1500, iphoneClass: this.state.secondIphone }} />
          </div>

          <div className={this.showingLogin()}>
            <SessionFormContainer animate={this.animate}/>
          </div>
        </div>
      </div>
    )
  }
}

// <div className="splash-welcome">
//   <div className="welcome-content">
//     <h1>Send Money to your friends.</h1>
//     <button onClick={this.redirectToSignup} className="splash-page-signup">Sign up now</button>
//   </div>
// </div>
export default LandingPage;
