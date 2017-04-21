import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import SessionFormContainer from './session_form/session_form_container';
import ProfileContainer from './profile/profile_container';
import LinkedAccountsContainer from './accounts/linked_accounts';
import UserContainer from './user/user_container';
import LandingPageContainer from './landing_page/landing_page_container';
import HomeContainer from './home/home_container';
import SettingsContainer from './settings/settings_container';
import FeedContainer from './feed/feed_container';
import NotificationsContainer from './notifications/notifications_container';
import PendingFriends from './friends/pending';
import RequestedFriends from './friends/requested';
import ExistingFriends from './friends/existing';
import FriendsContainer from './friends/friends_container';

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
      replace('/profile');
    }
  };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={LandingPageContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/profile" component={ProfileContainer} onEnter={_ensureLoggedIn} />
          <Route path="/home" component={HomeContainer} onEnter={_ensureLoggedIn}>
            <Route path="feed" component={FeedContainer} />
            <Route path="notifications" component={NotificationsContainer} />
            <Route path="settings" component={SettingsContainer} />
            <Route path="accounts" component={LinkedAccountsContainer} />
            <Route path="friends" component={FriendsContainer}>
              <Route path="pending" component={PendingFriends} />
              <Route path="requested" component={RequestedFriends} />
              <Route path="existing" component={ExistingFriends} />
            </Route>
          </Route>
          <Route path="/:user_id" component={UserContainer} onEnter={_ensureLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;



// <Route path="/account" component={AccountContainer} onEnter={_ensureLoggedIn}>
// <Route path="settings" component={SettingsContainer} />
// <Route path="payments" component={Payments} />
// </Route>
