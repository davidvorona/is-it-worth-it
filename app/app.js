import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'

class App extends Component {
  render() {
    return (
      // implement with browserHistory for cleaner URLs
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          // parentheses make the :name parameter optional
          <Route path='/about(/:name)' component={About} />
          <Route path='address' component={Address}>
            <IndexRoute component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />
            <Route path = 'query' component={Query} />
          </Route>
          <Route path='namedComponent' component={NamedComponents}>
            <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
          </Route>
          // this must be last, or it will hit this route before hitting any of the specific ones
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Container = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
)

const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
    <Link activeClassName='active' to='/address'>Address</Link>&nbsp;
    <IndexLink activeClassName='active' to='/about'>About</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink>&nbsp;
  </div>
)
const Home = () => <h1>Hello from Home!</h1>

const About = (props) => (
  <div>
    <h3>Welcome to the About Page</h3>
    { props.params.name && <h2>Hello, {props.params.name}</h2>}
  </div>
)

const Address = (props) => (
  <div>
    <br />
    <IndexLink activeClassName='active' to='/address'>Twitter Feed</IndexLink>&nbsp;
    <Link activeClassName='active' to='/address/instagram'>Instagram Feed</Link>&nbsp;
    <Link
      activeClassName='active'
      to={{
        pathname: '/address/query',
        query: { message: 'Hello from Route Query' }
      }}>Route Query
    </Link>
    <h1>I live at 616 El Centro St.</h1>
    {props.children}
  </div>
)

const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>

const NamedComponents = (props) => (
  <div>
    {props.title}
    <br />
    {props.subTitle}
  </div>
)

const Title = () => (
  <h1>Hello from Title Component</h1>
)
const SubTitle = () => (
  <h1>Hello from SubTitle Component</h1>
)

const Query = (props) => (
  <h2>{props.location.query.message}</h2>
)

const NotFound = () => <h1>404.. This page is not found!</h1>

export default App
