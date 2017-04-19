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

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/profile");
    }
  }

  handleSubmit(e) {
    if (e) {
      e.preventDefault()
    }
    const user = this.state;
    this.props.processForm(user)
  }

  handleInput(e) {
    const field = e.currentTarget.name;
    const val = e.currentTarget.value;
    this.setState({[field]: val});
  }

  renderErrors() {

    return (
      <ul>
      {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        )
      )}
      </ul>
    )
  }

  animateTyping(field, letter) {
    this.setState({
      [field]: this.state[field] + letter
    });
  }

  guestLogin() {
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

    let guestLoginButton = (
      <button onClick={this.guestLogin}>Guest Log In</button>
    );

    let toggleForm = (
      <Link to="/signup">Sign Up</Link>
    );

    if (this.props.formType === 'signup') {
      guestLoginButton = null;

      toggleForm = (
        <Link to="/login">Log In</Link>
      );

      firstNameInput = (
        <label>First Name
        <input type="text" onChange={this.handleInput} name="first_name" value={this.state.first_name} />
        </label>
      );

      lastNameInput = (
        <label>Last Name
        <input type="text" onChange={this.handleInput} name="last_name" value={this.state.last_name} />
        </label>
      );

      emailInput = (
        <label>Email
        <input type="text" onChange={this.handleInput} name="email" value={this.state.email} />
        </label>
      )

      phoneInput = (
        <label>Phone
        <input type="text" onChange={this.handleInput} name="phone_num" value={this.state.phone_num} />
        </label>
      )

    }

    return (
      <div className='session-form'>
        <div className="form-errors">
          {this.renderErrors()}
        </div>
        <form>
          {firstNameInput}
          {lastNameInput}
          {emailInput}
          {phoneInput}
          <label>Username
          <input type="text" onChange={this.handleInput} name="username" value={this.state.username} />
          </label>

          <label>Password
          <input type="password" onChange={this.handleInput} name="password" value={this.state.password} />
          </label>

          <input type="submit" onClick={this.handleSubmit} value="Submit" />
        </form>
        {toggleForm}
        {guestLoginButton}
      </div>
    );
  };
}

export default SessionForm;
