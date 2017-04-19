import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util';
import Root from './components/root';
import configureStore from './store/store';

window.createUser = APIUtil.createUser;
window.login = APIUtil.login;
window.logout = APIUtil.logout;



document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser }
    }
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
