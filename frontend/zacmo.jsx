import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util';
import Root from './components/root';
import configureStore from './store/store';

window.createUser = APIUtil.createUser;
window.login = APIUtil.login;
window.logout = APIUtil.logout;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});
