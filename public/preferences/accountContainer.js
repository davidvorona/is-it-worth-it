import React from 'react';
import { Link, IndexLink } from 'react-router';

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
      }}
    >Username/Password
    </Link>
    <h1>Welcome, Vijuhas!</h1>
    {props.children}
  </div>
);

export default Account;
