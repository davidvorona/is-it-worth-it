import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => (
  <div>
    <IndexLink activeClassName="active" to="/">Home</IndexLink>&nbsp;
    <Link activeClassName="active" to="/account">Account</Link>&nbsp;
    <Link activeClassName="active" to="/user">Sign In</Link>&nbsp;
  </div>
);

const Container = props => (
  <div>
    <Nav />
    {props.children}
  </div>
);

export default Container;
