import React from 'react';
import { Link, withRouter } from 'react-router';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      phone_num: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.showLoginForm = this.showLoginForm.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.clearErrors();
      nextProps.clearErrors();
    }
  }

  componentWillMount() {
    this.props.clearErrors();
  }


  renderErrors(message) {

    if (this.props.errors.length > 0) {
      if (this.props.errors.includes(message)) {
        return (
          <div className="form-errors">
            <div style={{color: '#ED4956'}}>{message}</div>
          </div>
        );
      }


      // return (
      //   <div className="form-errors">
      //     <ul>
      //       {this.props.errors.map((error, i) => (
      //           <li style={{color: '#ED4956'}} key={`error-${i}`}>{error}</li>
      //         )
      //       )}
      //     </ul>
      //   </div>
      // );
    }
    return null;
  }

  handleInput(e) {
    const field = e.currentTarget.name;
    const val = e.currentTarget.value;
    this.setState({[field]: val});
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      email: this.state.email,
      phone_num: this.state.phone_num,
      password: this.state.password
    }
    this.props.processForm(user).then(
      () => {
        this.props.router.push('/home/feed');
      }
    );
  }

  showLoginForm() {
    this.props.clearErrors();
    this.props.animate();
  }

  render() {
    return (
      <div className="signup-form-container">
        <div className="signup-form">

          <form className="user-form" onSubmit={this.handleSubmit}>

            <div className="signup-form-header">
              <h2>Create a Zacmo Account</h2>
            </div>

            {this.renderErrors("First name can't be blank")}
            <div className="signup-form-item">
              <div className="signup-form-label">First Name</div>
              <input className="signup-form-input" type="text" onChange={this.handleInput} name="first_name" value={this.state.first_name} />
            </div>

            {this.renderErrors("Last name can't be blank")}
            <div className="signup-form-item">
              <div className="signup-form-label">Last Name</div>
              <input className="signup-form-input" type="text" onChange={this.handleInput} name="last_name" value={this.state.last_name} />
            </div>

            {this.renderErrors("Username can't be blank")}
            <div className="signup-form-item">
              <div className="signup-form-label">Username</div>
              <input className="signup-form-input" type="text" onChange={this.handleInput} name="username" value={this.state.username} />
            </div>

            {this.renderErrors("Password is too short (minimum is 8 characters)")}
            <div className="signup-form-item">
              <div className="signup-form-label">Password</div>
              <input className="signup-form-input" type="password" onChange={this.handleInput} name="password" value={this.state.password} />
            </div>

            {this.renderErrors("Email can't be blank")}
            <div className="signup-form-item">
              <div className="signup-form-label">Email</div>
              <input className="signup-form-input" type="text" onChange={this.handleInput} name="email" value={this.state.email} />
            </div>

            {this.renderErrors("Phone num can't be blank")}
            <div className="signup-form-item">
              <div className="signup-form-label">Phone</div>
              <input className="signup-form-input" type="text" onChange={this.handleInput} name="phone_num" value={this.state.phone_num} />
            </div>

            <div className="signup-form-item">
              <div className="signup-form-label"></div>
              <div className="signup-form-submit">
                <button className="signup-form-input" id="signup-button" type="submit">Create New Account</button>
                <div className="toggle-form-wrapper">
                  Already a user? <div className='toggle-form' onClick={this.showLoginForm}>Log In</div>
                </div>
              </div>
            </div>


          </form>
        </div>
      </div>
    );
  }
}


export default withRouter(SignupForm);
