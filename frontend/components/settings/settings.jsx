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

    this.previewImage = this.previewImage.bind(this);
    this.toggleImageForm = this.toggleImageForm.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.revertImage = this.revertImage.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.currentUser.id).then(
      () => this.setState({
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name,
        username: this.props.user.username,
        email: this.props.user.email,
        phone_num: this.props.user.phone_num,
        image_url: this.props.user.image_url,
        image_file: null
      })
    )
  }

  // componentWillReceiveProps(nextProps) {
  //
  // }

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
    }
    this.props.updateUser(user).then(
      () => {
        hashHistory.push('/home/profile');
      }
    );
  }

  toggleImageForm() {
    if (this.state.image_file) {
      return (
        <div className="change-profile-pic-container">
          <div className="save-profile-pic" onClick={this.updateImage}>
            Save
          </div>
          <div className="revert-profile-pic" onClick={this.revertImage}>
            Cancel
          </div>
        </div>
      );
    }
    return (
      <div className="change-profile-pic-container">
        <div className="change-profile-pic" onClick={() => $('#profile-upload').trigger('click')}>
          Change Avatar
        </div>
        <input onChange={this.previewImage} id="profile-upload" type="file" style={{display: 'none'}}/>
      </div>
    );

  }

  revertImage() {
    this.setState({
      image_url: this.props.user.image_url,
      image_file: null
    })
  }

  updateImage() {
    const file = this.state.image_file;
    const formData = new FormData();
    const userId = this.props.user.id;
    formData.append("user[image]", file);
    this.props.updateImage(formData, userId).then(
      () => this.revertImage()
    )
  }

  previewImage(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = function() {
      this.setState({ image_url: reader.result, image_file: file })
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ image_url: this.props.user.image_url, image_file: null });
    }
  }

  render() {

    if (!this.props.currentUser) { return null }
    return (
      <div id="settings-form-container">
        <div className="settings-form-header">
          <div className="profile-pic-container">
            <img className="profile-pic" src={this.state.image_url} />

            {this.toggleImageForm()}

          </div>
          <h2>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h2>
        </div>
        <form className="user-form" onSubmit={this.handleSubmit}>
          <div className="signup-form-item">
            <div className="signup-form-label">First Name</div>
            <input className="signup-form-input" type="text" onChange={this.handleInput} name="first_name" value={this.state.first_name} />
          </div>

          <div className="signup-form-item">
            <div className="signup-form-label">Last Name</div>
            <input className="signup-form-input" type="text" onChange={this.handleInput} name="last_name" value={this.state.last_name} />
          </div>

          <div className="signup-form-item">
            <div className="signup-form-label">Username</div>
            <input className="signup-form-input" type="text" onChange={this.handleInput} name="username" value={this.state.username} />
          </div>

          <div className="signup-form-item">
            <div className="signup-form-label"></div>
            <div className="private-info">Private Information</div>
          </div>

          <div className="signup-form-item">
            <div className="signup-form-label">Email</div>
            <input className="signup-form-input" type="text" onChange={this.handleInput} name="email" value={this.state.email} />
          </div>

          <div className="signup-form-item">
            <div className="signup-form-label">Phone</div>
            <input className="signup-form-input" type="text" onChange={this.handleInput} name="phone_num" value={this.state.phone_num} />
          </div>

          <div className="signup-form-item">
            <div className="signup-form-label"></div>
            <button className="signup-form-input" id="settings-button" type="submit">Save Settings</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Settings;
