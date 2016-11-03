import React, { Component } from 'react';

const ExistingUser = props => (
  <div>
    <div>Sign In!</div>
    <form className="existingUser">
      <input
        type="text"
        className="username"
        placeholder="Username"
        value={props.username}
        onChange={props.handleChange}
      />
      <input
        type="text"
        className="password"
        placeholder="Password"
        value={props.password}
        onChange={props.handleChange}
      />
      <button
        className="query"
        onClick={props.handleQuery}
      >
        Log In!
      </button>
    </form>
  </div>
);

export default ExistingUser;
