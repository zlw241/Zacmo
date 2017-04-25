import React from 'react';
import { Link, withRouter, hashHistory} from 'react-router';


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => {

      this.props.router.push('/')
    })
  }


  render() {

    let navItems = (
      <div className="nav">
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Create Zacmo Account</Link>
      </div>
    );

    if (this.props.currentUser) {
      const username = this.props.currentUser.username;
      navItems = (
        <div className="nav">
          <Link to="/home/feed">Home</Link>
          <Link to="/home/profile"><i className="fa fa-lg fa-user-o" aria-hidden="true"></i></Link>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    }

    return (
      <nav>
        {navItems}
      </nav>
    );
  }
};

export default withRouter(Nav);
