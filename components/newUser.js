import React, { Component } from 'react';

const NewUser = props => (
  <div>
    <div>Create Account!</div>
    <form className="newUser">
      <input
        type="text"
        className="firstName"
        placeholder="First Name"
        value={props.userInfo.first}
        onChange={props.handleChange}
      />
      <input
        type="text"
        className="lastName"
        placeholder="Last Name"
        value={props.userInfo.last}
        onChange={props.handleChange}
      />
      <input
        type="text"
        className="username"
        placeholder="Username"
        value={props.userInfo.username}
        onChange={props.handleChange}
      />
      <input
        type="text"
        className="password"
        placeholder="Password"
        value={props.userInfo.password}
        onChange={props.handleChange}
      />
      <button
        className="query"
        onClick={props.handleChange}
      >
        Create Account!
      </button>
    </form>
  </div>
);

export default NewUser;
