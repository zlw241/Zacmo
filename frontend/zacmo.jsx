import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/APIUtil';

document.addEventListener('DOMContentLoaded', () => {
  window.createUser = APIUtil.createUser;
  window.login = APIUtil.login;
  window.logout = APIUtil.logout;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Hello, world!</h1>, root);
});
