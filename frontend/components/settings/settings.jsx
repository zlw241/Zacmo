import React from 'react';
import { hashHistory } from 'react-router';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      phone_num: ""
    }

  }

  componentWillMount() {
    this.props.fetchUser(this.props.currentUser.id).then(
      () => this.setState({
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name,
        username: this.props.user.username,
        email: this.props.user.email,
        phone_num: this.props.user.phone_num
      })
    )
  }

  handleInput(e) {
    const field = e.currentTarget.name;
    const val = e.currentTarget.value;
    this.setState({[field]: val});
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = this.state;
    this.props.updateUser(user).then(
      () => {
        hashHistory.push('/home/profile');
      }
    );
  }

  render() {


    return (
      <div className="content-container">
      <form className="user-form" onSubmit={this.handleSubmit}>
        <div>
          <div>First Name</div>
          <input type="text" onChange={this.handleInput} name="first_name" value={this.state.first_name} />
        </div>

        <div>
          <div>Last Name</div>
          <input type="text" onChange={this.handleInput} name="last_name" value={this.state.last_name} />
        </div>

        <div>
          <div>Email</div>
          <input type="text" onChange={this.handleInput} name="email" value={this.state.email} />
        </div>

        <div>
          <div>Phone</div>
          <input type="text" onChange={this.handleInput} name="phone_num" value={this.state.phone_num} />
        </div>

        <div>
          <div>Username</div>
          <input type="text" onChange={this.handleInput} name="username" value={this.state.username} />
        </div>

        <div className="form-submit">
          <button type="submit">Save Settings</button>
        </div>
      </form>
      </div>
    );
  }
}

export default Settings;
