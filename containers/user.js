import React from 'react';
import { Link, IndexLink } from 'react-router';

const SignIn = props => (
  <div>
    <br />
    <IndexLink activeClassName="active" to="/user">Login</IndexLink>&nbsp;
    <Link activeClassName="active" to="/user/create">Create Account</Link>&nbsp;
    <h1>Welcome, User!</h1>
    {props.children}
  </div>
);

export default SignIn;
