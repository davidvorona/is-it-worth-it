import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './home';
import Preferences from '../components/preferences';
import Account from '../components/account';
import Container from '../components/nav';
import Profile from '../components/profile';
import NewUser from '../components/newUser';
import ExistingUser from '../components/existingUser';

const Query = props => (
  <h2>{props.location.query.message}</h2>
);

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Home} />
      <Route path="account" component={Account}>
        <IndexRoute component={Profile} />
        <Route path="preferences" component={Preferences} />
        <Route path="info" component={Query} />
      </Route>
      <Route path="login" component={ExistingUser} />
      <Route path="join" component={NewUser} />
    </Route>
  </Router>
);

export default App;
