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

    if (!this.props.currentUser) { return null }
    return (
      <div id="settings-form-container">
        <div className="settings-form-header">
          <div className="profile-pic-container">
            <img className="profile-pic" src={this.props.currentUser.image_url} />
          </div>
          <h2>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h2>
        </div>
        <form className="user-form" onSubmit={this.handleSubmit}>
          <div className="settings-form-item">
            <div className="settings-form-label">First Name</div>
            <input className="settings-form-input" type="text" onChange={this.handleInput} name="first_name" value={this.state.first_name} />
          </div>

          <div className="settings-form-item">
            <div className="settings-form-label">Last Name</div>
            <input className="settings-form-input" type="text" onChange={this.handleInput} name="last_name" value={this.state.last_name} />
          </div>

          <div className="settings-form-item">
            <div className="settings-form-label">Username</div>
            <input className="settings-form-input" type="text" onChange={this.handleInput} name="username" value={this.state.username} />
          </div>

          <div className="settings-form-item">
            <div className="settings-form-label"></div>
            <div className="private-info">Private Information</div>
          </div>

          <div className="settings-form-item">
            <div className="settings-form-label">Email</div>
            <input className="settings-form-input" type="text" onChange={this.handleInput} name="email" value={this.state.email} />
          </div>

          <div className="settings-form-item">
            <div className="settings-form-label">Phone</div>
            <input className="settings-form-input" type="text" onChange={this.handleInput} name="phone_num" value={this.state.phone_num} />
          </div>

          <div className="settings-form-item form-submit">
            <div className="settings-form-label"></div>
            <button className="settings-form-input" id="settings-button" type="submit">Save Settings</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Settings;
