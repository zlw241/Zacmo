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
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = this.state;
    this.props.processForm(user).then(
      () => hashHistory.push('/')
    );
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

  render() {

    let firstNameInput = null;
    let lastNameInput = null;
    let emailInput = null;
    let phoneInput = null;

    let toggleForm = (
      <Link to="/signup">Sign Up</Link>
    );

    if (this.props.formType === 'signup') {
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
      </div>
    );
  };
}

export default SessionForm;
