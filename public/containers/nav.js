import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => (
  <div>
    <IndexLink activeClassName="active" to="/">Home</IndexLink>&nbsp;
    <Link activeClassName="active" to="/account">Account</Link>&nbsp;
    <div className="signin">
      <Link activeClassName="active" to="/join">Join Reel</Link>&nbsp;
      <Link activeClassName="active" to="/login">Login</Link>
    </div>
  </div>
);

const NavContainer = props => (
  <div>
    <Nav />
    {props.children}
  </div>
);

export default NavContainer;
