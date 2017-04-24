import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import Root from './components/root';
import configureStore from './store/store';
import { searchUsers } from './util/user_api_util';


// window.createUser = APIUtil.createUser;
// window.login = APIUtil.login;
// window.logout = APIUtil.logout;

// window.searchUsers = searchUsers

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.current_user) {
    const preloadedState = {
      session: { currentUser: window.current_user }
    }
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
