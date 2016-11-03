import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, IndexLink } from 'react-router';
import Preferences from '../components/preferences';
import Account from '../components/account';
import Home from './home';
import Container from '../components/nav';
import Profile from '../components/profile';
import SignIn from './user';

class App extends Component {

  render() {
    return (
      // implement with browserHistory for cleaner URLs
      <Router history={browserHistory}>
        <Route path="/" component={Container}>
          <IndexRoute
            component={Home}
          />
          <Route path="account" component={Account}>
            <IndexRoute component={Profile} />
            <Route path="preferences" component={Preferences} />
            <Route path="info" component={Query} />
          </Route>
          <Route path="signin" component={SignIn} />
        </Route>
      </Router>
    )
  }
}

const Query = props => (
  <h2>{props.location.query.message}</h2>
)

export default App
