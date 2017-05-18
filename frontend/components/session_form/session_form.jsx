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
      () => this.props.router.push("/home/profile")
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

  render() {

    let firstNameInput = null;
    let lastNameInput = null;
    let emailInput = null;
    let phoneInput = null;

    let formClass = 'session-form login';

    let guestLoginButton = (
      <button id="guest-button" onClick={this.guestLogin}>Guest Log In</button>
    );

    let submitButtonText = "Create a Zacmo Account";

    let toggleFormButton = "Log in to Zacmo";

    let toggleForm = (
      <Link to="/signup">{submitButtonText}</Link>
    );

    let formHeader = "Please Log In";

    if (this.props.formType === 'signup') {
      guestLoginButton = null;
      formClass = 'session-form signup';
      formHeader = submitButtonText;

      submitButtonText = "Log In";
      toggleFormButton = "Complete Signup";

      toggleForm = (
        <Link to="/login">{submitButtonText}</Link>
      );

      firstNameInput = (
        <div className="form-item input-text">
          <div className="input-label">
            <label>First Name</label>
          </div>
          <input type="text" className="session-form-input"
          onChange={this.handleInput} name="first_name" value={this.state.first_name} />
        </div>
      );

      lastNameInput = (
        <div className="form-item input-text">
          <div className="input-label">Last Name</div>
          <input type="text" className="session-form-input"
          onChange={this.handleInput} name="last_name" value={this.state.last_name} />
        </div>
      );

      emailInput = (
        <div className="form-item input-text">
          <div className="input-label">Email</div>
          <input type="text" className="session-form-input"
          onChange={this.handleInput} name="email" value={this.state.email} />
        </div>
      );

      phoneInput = (
        <div className="form-item input-text">
          <div className="input-label">Phone</div>
          <input type="text" className="session-form-input"
          onChange={this.handleInput} name="phone_num" value={this.state.phone_num} />
        </div>
      );

    }

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

            <div className="signup-form-item form-submit" id="session-form-submit">
              <div className="signup-form-label"></div>
              <div className="session-form-submit">
                <button className="signup-form-input" id="signup-button" type="submit">Log in to Zacmo</button>
                {guestLoginButton}
                <div className="toggle-form-wrapper">
                  Don't have an account? <div className='toggle-form' onClick={this.props.animate}>Sign up</div>
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


// {this.renderErrors()}
// {firstNameInput}
// {lastNameInput}
// {emailInput}
// {phoneInput}
// <div className="form-item input-text">
// <div className="input-label">Username</div>
// <input type="text" className="session-form-input" onChange={this.handleInput} name="username"
// value={this.state.username} />
// </div>
//
// <div className="form-item input-text">
// <div className="input-label">Password</div>
// <input type="password" className="session-form-input"
// onChange={this.handleInput} name="password" value={this.state.password} />
// </div>
// <div className="form-item">
// <div className="form-help"><Link to="/help">Help</Link></div>
// <button className="button-submit">{toggleFormButton}</button>
// </div>
