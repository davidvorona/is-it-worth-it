import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, IndexLink } from 'react-router';
import Preferences from '../components/preferences';
import Account from '../components/account';
import Home from '../components/home';
import Container from '../components/nav';
import Profile from '../components/profile';
import MoreReel from '../components/tbd';

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
          <Route path="moreReel" component={MoreReel}>
            <IndexRoute components={{ title: Title, subtitle: Subtitle }} />
          </Route>
          // this must be last, or it will hit this route before hitting any of the specific ones
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Title = () => (
  <h1>Hello from Delivery!</h1>
)
const Subtitle = () => (
  <h1>Hello from Gas!</h1>
)

const Query = props => (
  <h2>{props.location.query.message}</h2>
)

const NotFound = () => <h1>404.. This page is not found!</h1>

export default App
