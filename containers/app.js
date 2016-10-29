import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router';

class App extends Component {
  render() {
    return (
      // implement with browserHistory for cleaner URLs
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='account' component={Account}>
            <IndexRoute component={Profile} />
            <Route path='preferences' component={Preferences} />
            <Route path = 'info' component={Query} />
          </Route>
          <Route path='moreReel' component={MoreReel}>
            <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
          </Route>
          // this must be last, or it will hit this route before hitting any of the specific ones
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }

  _handleQuery(event) {
    console.log('Oh boy!');
  }
}

const Container = props => (
  <div>
    <Nav />
    {props.children}
  </div>
)

const Home = props => (
  <div className="reelSearch">
    <input className="searchBar" placeholder="Search for a movie..."></input>
    <div className="buttonContainer">
      <button className="query" onClick={props._handleQuery}>Search</button>
    </div>
  </div>
)

const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
    <Link activeClassName='active' to='/account'>Account</Link>&nbsp;
    <IndexLink activeClassName='active' to='/moreReel'>More on Reel</IndexLink>&nbsp;
  </div>
)

const Account = props => (
  <div>
    <br />
    <IndexLink activeClassName="active" to="/account">Profile</IndexLink>&nbsp;
    <Link activeClassName="active" to="/account/preferences">Preferences</Link>&nbsp;
    <Link
      activeClassName="active"
      to={{
        pathname: '/account/info',
        query: { message: 'You have not set a password yet.' }
      }}>Info
    </Link>
    <h1>Welcome, Vijuhas!</h1>
    {props.children}
  </div>
)

const Preferences = () => <h3>Movie preferences / connected accounts</h3>
const Profile = () => <h3>You look nice today.</h3>

const MoreReel = props => (
  <div>
    {props.title}
    <br />
    {props.subTitle}
  </div>
)

const Title = () => (
  <h1>Hello from Delivery!</h1>
)
const SubTitle = () => (
  <h1>Hello from Gas!</h1>
)

const Query = props => (
  <h2>{props.location.query.message}</h2>
)

const NotFound = () => <h1>404.. This page is not found!</h1>

export default App
