import React from 'react';
import { Link, withRouter } from 'react-router';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      phone_num: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.animateTyping = this.animateTyping.bind(this);
    this.showSignupForm = this.showSignupForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.clearErrors();
      nextProps.clearErrors();
    }
  }

  componentWillMount() {
    this.props.clearErrors();
  }


  handleSubmit(e) {
    if (e) {
      e.preventDefault()
    }
    const user = this.state;
    this.props.processForm(user).then(
      () => this.props.router.push("/home/feed")
    )

  }

  handleInput(e) {
    const field = e.currentTarget.name;
    const val = e.currentTarget.value;
    this.setState({[field]: val});
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <div className="form-errors">
          <ul>
            {this.props.errors.map((error, i) => (
                <li style={{color: '#ED4956'}} key={`error-${i}`}>{error}</li>
              )
            )}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }

  animateTyping(field, letter) {
    this.setState({
      [field]: this.state[field] + letter
    });
  }

  guestLogin() {
    document.getElementById('guest-button').disabled = true;

    this.setState({username: "", password: ""})
    setTimeout(() => {
      this.animateTyping("username", "g")
      setTimeout(() => {
        this.animateTyping("username","u")
        setTimeout(() => {
          this.animateTyping("username","e")
          setTimeout(() => {
            this.animateTyping("username","s")
            setTimeout(() => {
              this.animateTyping("username", "t")
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }, 100);

    setTimeout(() => {
      this.animateTyping("password", "p")
      setTimeout(() => {
        this.animateTyping("password","a")
        setTimeout(() => {
          this.animateTyping("password","s")
          setTimeout(() => {
            this.animateTyping("password","s")
            setTimeout(() => {
              this.animateTyping("password", "w")
              setTimeout(() => {
                this.animateTyping("password", "o")
                setTimeout(() => {
                  this.animateTyping("password", "r")
                  setTimeout(() => {
                    this.animateTyping("password", "d")
                    this.handleSubmit()
                  }, 100);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }, 1000);
  }

  showSignupForm() {
    this.props.clearErrors();
    this.props.animate();
  }

  render() {

    return (
      <div className="signup-form-container">
        <div className="signup-form">

          {this.renderErrors()}

          <form className="user-form" onSubmit={this.handleSubmit}>
            <div className="signup-form-header">
              <h2>Please Log In</h2>
            </div>

            <div className="signup-form-item">
              <div className="signup-form-label">Username</div>
              <input className="signup-form-input" type="text" onChange={this.handleInput} name="username" value={this.state.username} />
            </div>

            <div className="signup-form-item">
              <div className="signup-form-label">Password</div>
              <input className="signup-form-input" type="password" onChange={this.handleInput} name="password" value={this.state.password} />
            </div>

            <div className="signup-form-item">
              <div className="signup-form-label"></div>
              <div className="signup-form-submit">
                <button className="signup-form-input" id="signup-button" type="submit">Log in to Zacmo</button>
                <button id="guest-button" onClick={this.guestLogin}>Guest Log In</button>
                <div className="toggle-form-wrapper">
                  Don't have an account? <div className='toggle-form' onClick={this.showSignupForm}>Sign up</div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
}

export default withRouter(SessionForm);
