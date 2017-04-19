import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import SessionFormContainer from './session_form/session_form_container';
import ProfileContainer from './profile/profile_container';
import EditSettings from './profile/edit/settings';
import EditBanks from './profile/edit/banks';

const Root = ({store}) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/account" component={ProfileContainer} onEnter={_ensureLoggedIn}>
            <Route path="edit" component={EditSettings} />
            <Route path="banks" component={EditBanks} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
