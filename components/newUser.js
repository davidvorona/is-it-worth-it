import React, { Component } from 'react';
import userActions from '../actions/userActions';

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleChange(event) {
    if (event.target.className === 'firstName') this.setState({ firstName: event.target.value });
    else if (event.target.className === 'lastName') this.setState({ lastName: event.target.value });
    else if (event.target.className === 'username') this.setState({ username: event.target.value });
    else if (event.target.className === 'password') this.setState({ password: event.target.value });
  }

  handleQuery(event) {
    event.preventDefault();
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password
    };
    userActions.createUser(user);
  }

  render() {
    return (
      <div>
        <div>Sign In!</div>
        <form>
          <input
            type="text"
            className="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            className="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            className="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            className="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button
            className="query"
            onClick={this.handleQuery}
          >
            Log In!
          </button>
        </form>
      </div>
    );
  }
}

export default NewUser;
