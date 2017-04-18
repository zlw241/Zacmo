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
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = this.state;
    this.props.processForm({user});
  }

  handleInput(e) {
    const field = e.currentTarget.name;
    const val = e.currentTarget.value;
    this.setState({[field]: val});
  }

  render() {

    let firstNameInput = null;
    let lastNameInput = null;

    let toggleForm = (
      <Link to="/signup">Sign Up</Link>
    );

    if (this.props.formType === 'signup') {
      toggleForm = (
        <Link to="/login">Log In</Link>
      )

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

    }


    return (
      <div className='session-form'>
        <form>
          {firstNameInput}
          {lastNameInput}
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
