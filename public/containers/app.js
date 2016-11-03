import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Movie from '../movies/movieContainer';
import Preferences from '../preferences/preferencesContainer';
import Account from '../preferences/accountContainer';
import NavContainer from './nav';
import Profile from '../preferences/profile';
import NewUser from '../user/newUser';
import ExistingUser from '../user/existingUser';

const Query = props => (
  <h2>{props.location.query.message}</h2>
);

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={NavContainer}>
      <IndexRoute component={Movie} />
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
