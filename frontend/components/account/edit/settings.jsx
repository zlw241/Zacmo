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
        hashHistory.push('/profile');
      }
    );
  }

  render() {

    return (
      <div className="edit-profile">
        <form onSubmit={this.handleSubmit}>
          <label>First Name
          <input type="text" onChange={this.handleInput} name="first_name" value={this.state.first_name} />
          </label>

          <label>Last Name
          <input type="text" onChange={this.handleInput} name="last_name" value={this.state.last_name} />
          </label>

          <label>Email
          <input type="text" onChange={this.handleInput} name="email" value={this.state.email} />
          </label>

          <label>Phone
          <input type="text" onChange={this.handleInput} name="phone_num" value={this.state.phone_num} />
          </label>

          <label>Username
          <input type="text" onChange={this.handleInput} name="username" value={this.state.username} />
          </label>

          <input type="submit" value="Save Settings" />
        </form>
      </div>
    );
  }
}

export default Settings;
